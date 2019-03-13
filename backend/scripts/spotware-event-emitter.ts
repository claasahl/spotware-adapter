import schema from "protocol-buffers-schema";
import { Schema } from "protocol-buffers-schema/types";
import fs from "fs";

function loadSchema(protoFile: fs.PathLike): Schema {
  const proto = fs.readFileSync(protoFile);
  return schema(proto);
}

function writeEmitterOverloads(
  apiStream: fs.WriteStream,
  common: Schema,
  openApi: Schema
) {
  common.messages.map(message => {
    const type = `I${message.name}`;
    const payloadType =
      message.fields
        .filter(field => field.name == "payloadType")
        .map(field => field.options.default)[0] || "PROTO_MESSAGE";
    apiStream.write(
      `    public emit(payloadType: $spotware.ProtoPayloadType.${payloadType}, message: $spotware.${type}): void;\n`
    );
  });
  openApi.messages.map(message => {
    const type = `I${message.name}`;
    const payloadType = message.fields
      .filter(field => field.name == "payloadType")
      .map(field => field.options.default)[0];
    apiStream.write(
      `    public emit(payloadType: $spotware.ProtoOAPayloadType.${payloadType}, message: $spotware.${type}, clientMsgId?: string): void;\n`
    );
  });
  apiStream.write(`    public emit(payloadType: $spotware.ProtoPayloadType | $spotware.ProtoOAPayloadType, message: any, clientMsgId?: string): void {
        const event = $spotware.ProtoPayloadType[payloadType] || $spotware.ProtoOAPayloadType[payloadType];
        this.emitter.emit(event, message, clientMsgId);
    }\n\n`);
}

function writeListenerOverloads(
  name: "on" | "off" | "once",
  apiStream: fs.WriteStream,
  common: Schema,
  openApi: Schema
) {
  common.messages.map(message => {
    const type = `I${message.name}`;
    const payloadType =
      message.fields
        .filter(field => field.name == "payloadType")
        .map(field => field.options.default)[0] || "PROTO_MESSAGE";
    apiStream.write(
      `    public ${name}(payloadType: $spotware.ProtoPayloadType.${payloadType}, listener: (message:$spotware.${type}) => void): void;\n`
    );
  });
  openApi.messages.map(message => {
    const type = `I${message.name}`;
    const payloadType = message.fields
      .filter(field => field.name == "payloadType")
      .map(field => field.options.default)[0];
    apiStream.write(
      `    public ${name}(payloadType: $spotware.ProtoOAPayloadType.${payloadType}, listener: (message:$spotware.${type}, clientMsgId?: string) => void): void;\n`
    );
  });
  apiStream.write(`    public ${name}(payloadType: $spotware.ProtoPayloadType | $spotware.ProtoOAPayloadType, listener: (message: any, clientMsgId?: string) => void): void {
        const event = $spotware.ProtoPayloadType[payloadType] || $spotware.ProtoOAPayloadType[payloadType];
        this.emitter.${name}(event, listener);
    }\n\n`);
}

function writeHeader(apiStream: fs.WriteStream) {
  apiStream.write(`import { EventEmitter } from "events";
import * as $spotware from "./spotware";

export class SpotwareEventEmitter {
    private emitter: EventEmitter;
    constructor(emitter: EventEmitter) {
        this.emitter = emitter;
    }\n`);
}

function writeFooter(apiStream: fs.WriteStream) {
  apiStream.write(`}`);
}

function writeApiFile(file: string) {
  const common = loadSchema(
    "node_modules/@claasahl/spotware-protobuf-messages/CommonMessages.proto"
  );
  const openApi = loadSchema(
    "node_modules/@claasahl/spotware-protobuf-messages/OpenApiMessages.proto"
  );
  const apiFile = fs.createWriteStream(file);
  writeHeader(apiFile);
  writeEmitterOverloads(apiFile, common, openApi);
  writeListenerOverloads("on", apiFile, common, openApi);
  writeListenerOverloads("off", apiFile, common, openApi);
  writeListenerOverloads("once", apiFile, common, openApi);
  writeFooter(apiFile);
}

writeApiFile("./src/generated/SpotwareEventEmitter.ts");
