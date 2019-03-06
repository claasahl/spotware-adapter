import fs, { PathLike } from "fs";
import schema from "protocol-buffers-schema";
import { Message, Schema } from "protocol-buffers-schema/types";

function generateRequest(message: Message): string {
  const type = message.name;
  return `export function emit${type}(
  properties: $spotware.I${type},
  clientMsgId: string | null | undefined,
  emitter: EventEmitter
): void {
  $base.createAndEmit${type.includes("OA") ? "OpenApi" : "Common"}Message(
    $spotware.${type},
    properties,
    clientMsgId,
    emitter
  );
}
`;
}

function generateResponse(message: Message) {
  const payloadTypeField = message.fields.filter(
    field => field.name === "payloadType"
  )[0];
  const type = message.name;
  const payloadType = payloadTypeField.options["default"];
  return `function ${type}(emitter: EventEmitter): void {
  $base.registerResponse(
    $spotware.${type},
    $spotware.${
      payloadType.includes("_OA_") ? "ProtoOAPayloadType" : "ProtoPayloadType"
    }.${payloadType},
    emitter
  );
}
`;
}

function generateEvent(message: Message) {
  return generateResponse(message);
}

function writeRequests(requests: Message[]) {
  if (requests.length > 0) {
    const stream = fs.createWriteStream("src/spotware/requests.ts");
    stream.write('import * as $spotware from "../generated/spotware";\n');
    stream.write('import * as $base from "./message_handler";\n');
    stream.write('import { Gateway } from "./gateway";\n');
    stream.write('import { EventEmitter } from "events";\n');
    stream.write("\n");
    for (const request of requests) {
      stream.write(generateRequest(request));
    }
    stream.write(
      "export default function registerRequestHandlers(gateway: Gateway): void {\n"
    );
    for (const request of requests) {
      stream.write(
        `$base.registerRequest($spotware.${
          request.name
        }.prototype.payloadType, gateway);\n`
      );
    }
    stream.write("}\n");
    stream.write("\n");
    stream.end();
  }

  for (const request of requests) {
    const name = request.name.replace("ProtoOA", "").replace("Req", "");
    const fields = request.fields
      .filter(field => !["clientId", "clientSecret"].includes(field.name))
      .map(field => `${field.name}: ${field.type}${field.required ? "!" : ""}`)
      .map(field => field.replace("int32", "Int"))
      .map(field => field.replace("int64", "Int"))
      .map(field => field.replace("string", "String"))
      .map(field => field.replace("double", "Float"))
      .map(field => field.replace("bool", "boolean"));
    fields.push("clientMsgId: String");
    console.log(`${name}(${fields.join(", ")}): Boolean`);
  }
}

function writeResponses(responses: Message[]) {
  if (responses.length > 0) {
    const stream = fs.createWriteStream("src/spotware/responses.ts");
    stream.write('import * as $spotware from "../generated/spotware";\n');
    stream.write('import { EventEmitter } from "events";\n');
    stream.write('import * as $base from "./message_handler";\n');
    stream.write("\n");
    for (const response of responses) {
      stream.write(generateResponse(response));
    }
    stream.write(
      "export default function registerResponseHandlers(emitter: EventEmitter): void {\n"
    );
    for (const response of responses) {
      stream.write(`${response.name}(emitter);\n`);
    }
    stream.write("}\n");
    stream.write("\n");
    stream.end();
  }
}

function writeEvents(events: Message[]) {
  if (events.length > 0) {
    const stream = fs.createWriteStream("src/spotware/events.ts");
    stream.write('import * as $spotware from "../generated/spotware";\n');
    stream.write('import { EventEmitter } from "events";\n');
    stream.write('import * as $base from "./message_handler";\n');
    stream.write("\n");
    for (const event of events) {
      stream.write(generateEvent(event));
    }
    stream.write(
      "export default function registerEventHandlers(emitter: EventEmitter): void {\n"
    );
    for (const event of events) {
      stream.write(`${event.name}(emitter);\n`);
    }
    stream.write("}\n");
    stream.write("\n");
    stream.end();
  }
}

function loadSchema(protoFile: PathLike): Schema {
  const proto = fs.readFileSync(protoFile);
  return schema(proto);
}

const sCommon = loadSchema(
  "node_modules/@claasahl/spotware-protobuf-messages/CommonMessages.proto"
);
const sOpenApi = loadSchema(
  "node_modules/@claasahl/spotware-protobuf-messages/OpenApiMessages.proto"
);

const requests: Message[] = [];
const responses: Message[] = [];
const events: Message[] = [];
for (const message of [...sCommon.messages, ...sOpenApi.messages]) {
  if (message.name.endsWith("Req")) {
    requests.push(message);
  } else if (message.name.endsWith("Res")) {
    responses.push(message);
  } else if (message.name.endsWith("Event")) {
    events.push(message);
  } else if (message.name === "ProtoMessage") {
    console.log("skipping:", message.name);
  } else {
    throw new Error(`found uncategorized proto message: ${message.name}`);
  }
}
writeRequests(requests);
writeResponses(responses);
writeEvents(events);
