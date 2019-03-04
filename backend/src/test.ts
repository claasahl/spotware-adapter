import fs from "fs";
import schema from "protocol-buffers-schema";
import { Message } from "protocol-buffers-schema/types";

function generateRequest(message: Message): string {
  const type = message.name;
  return `export function ${type}(
  properties: $spotware.I${type},
  clientMsgId: string | null | undefined
): $spotware.IProtoMessage {
  return $base.toProtoMessage(
    $spotware.${type},
    properties,
    clientMsgId
  );
}`;
}

function generateResponse(message: Message) {
  const payloadTypeField = message.fields.filter(
    field => field.name === "payloadType"
  )[0];
  const type = message.name;
  const payloadType = payloadTypeField.options["default"];
  return `export function ${type}(emitter: EventEmitter): void {
  $base.register(
    $spotware.${type},
    $spotware.ProtoOAPayloadType.${payloadType},
    emitter
  );
}`;
}

function writeRequests(requests: string[]) {
  if (requests.length > 0) {
    const stream = fs.createWriteStream("src/spotware/requests.ts");
    stream.write('import * as $spotware from "../generated/spotware";\n');
    stream.write('import * as $base from "./message_handler";\n');
    stream.write("\n");
    for (const request of requests) {
      stream.write(request);
    }
    stream.write("\n");
    stream.end();
  }
}

function writeResponses(responses: string[]) {
  if (responses.length > 0) {
    const stream = fs.createWriteStream("src/spotware/responses.ts");
    stream.write('import * as $spotware from "../generated/spotware";\n');
    stream.write('import { EventEmitter } from "events";\n');
    stream.write('import * as $base from "./message_handler";\n');
    stream.write("\n");
    for (const response of responses) {
      stream.write(response);
    }
    stream.write("\n");
    stream.end();
  }
}

const protoFile =
  "node_modules/@claasahl/spotware-protobuf-messages/OpenApiMessages.proto";
const proto = fs.readFileSync(protoFile);
const s = schema(proto);
const requests: string[] = [];
const responses: string[] = [];
for (const message of s.messages) {
  if (message.name.endsWith("Req")) {
    requests.push(generateRequest(message));
  } else if (message.name.endsWith("Res")) {
    responses.push(generateResponse(message));
  } else {
    console.log("not categorized:", message.name);
  }
}
writeRequests(requests);
writeResponses(responses);
