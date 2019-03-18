import schema from "protocol-buffers-schema";
import { Schema, Message } from "protocol-buffers-schema/types";
import fs from "fs";

function loadSchema(protoFile: fs.PathLike): Schema {
  const proto = fs.readFileSync(protoFile);
  return schema(proto);
}

function toPayloadType(message: Message) {
  return (
    message.fields
      .filter(field => field.name == "payloadType")
      .map(field => field.options.default)[0] || "PROTO_MESSAGE"
  );
}

function messages(filter: "Req" | "Res" | "Event", schema: Schema) {
  const messages: Message[] = [];
  for (const message of schema.messages) {
    if (message.name.endsWith(filter)) {
      messages.push(message);
    }
  }
  return messages;
}

function writeTreatRequests(stream: fs.WriteStream, messages: Message[]) {
  stream.write(`    private treatRequests(): void {\n`);
  for (const message of messages) {
    const { name } = message;
    const payloadType = toPayloadType(message);
    stream.write(
      `        this.on($spotware.${
        payloadType.includes("_OA_") ? "ProtoOAPayloadType" : "ProtoPayloadType"
      }.${payloadType}, this.on${name});\n`
    );
  }
  stream.write(`    }\n\n`);
}

function writeTreatMethod(
  method: "treatResponses" | "treatEvents",
  stream: fs.WriteStream,
  messages: Message[]
) {
  stream.write(`    private ${method} = (message: $spotware.IProtoMessage) => {
        switch (message.payloadType) {\n`);
  for (const message of messages) {
    const { name } = message;
    const payloadType = toPayloadType(message);
    stream.write(`            case $spotware.${
      payloadType.includes("_OA_") ? "ProtoOAPayloadType" : "ProtoPayloadType"
    }.${payloadType}:
                return this.on${name}(message);\n`);
  }
  stream.write(`        }
    }\n\n`);
}

function writeRequestHandler(stream: fs.WriteStream, message: Message) {
  const type = message.name;
  stream.write(`    private on${type} = (message: $spotware.I${type}, clientMsgId?: string | null) => {
        const payloadType = $spotware.${type}.prototype.payloadType;
        const msg = $spotware.${type}.create(message);
        const payload = $spotware.${type}.encode(msg).finish();
        this.emit($spotware.ProtoPayloadType.PROTO_MESSAGE, { payloadType, payload, clientMsgId });
    }\n\n`);
}

function writeResponseHandler(stream: fs.WriteStream, message: Message) {
  const type = message.name;
  const payloadType = toPayloadType(message);
  stream.write(`    private on${type} = (message: $spotware.IProtoMessage) => {
        if (message.payload) {
            const {clientMsgId} = message;
            const msg = $spotware.${type}.decode(message.payload);
            this.emit($spotware.${
              payloadType.includes("_OA_")
                ? "ProtoOAPayloadType"
                : "ProtoPayloadType"
            }.${payloadType}, msg, clientMsgId);
        }
    }\n\n`);
}

function writeHeader(stream: fs.WriteStream) {
  stream.write(`import * as $spotware from "./spotware-messages";
import {SpotwareEventEmitter} from "./spotware-event-emitter";
import { EventEmitter } from "events";

export class SpotwareClient extends SpotwareEventEmitter {
    constructor(emitter: EventEmitter) {
        super(emitter);
        this.treatRequests();
        this.on($spotware.ProtoPayloadType.PROTO_MESSAGE, this.treatResponses);
        this.on($spotware.ProtoPayloadType.PROTO_MESSAGE, this.treatEvents);
    }\n\n`);
}

function writeFooter(stream: fs.WriteStream) {
  stream.write(`}`);
}

function writeClientFile(file: string) {
  const common = loadSchema("./assets/OpenApiCommonMessages.proto");
  const openApi = loadSchema("./assets/OpenApiMessages.proto");
  const clientFile = fs.createWriteStream(file);

  const requests: Message[] = [];
  const responses: Message[] = [];
  const events: Message[] = [];
  for (const message of [...common.messages, ...openApi.messages]) {
    if (message.name.endsWith("Req")) {
      requests.push(message);
    } else if (message.name.endsWith("Res")) {
      responses.push(message);
    } else if (message.name.endsWith("Event")) {
      events.push(message);
    }
  }

  writeHeader(clientFile);
  writeTreatRequests(clientFile, requests);
  writeTreatMethod("treatResponses", clientFile, responses);
  writeTreatMethod("treatEvents", clientFile, events);
  for (const message of requests) {
    writeRequestHandler(clientFile, message);
  }
  for (const message of [...responses, ...events]) {
    writeResponseHandler(clientFile, message);
  }
  writeFooter(clientFile);
}

writeClientFile("./src/spotware-client.ts");
