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
    if (payloadType === "PROTO_MESSAGE") {
      apiStream.write(
        `    emit(event: "${payloadType}", message: $spotware.${type}): void;\n`
      );
    } else {
      apiStream.write(
        `    emit(event: "${payloadType}", message: $spotware.${type}, clientMsgId?: string | null): void;\n`
      );
    }
  });
  openApi.messages.map(message => {
    const type = `I${message.name}`;
    const payloadType = message.fields
      .filter(field => field.name == "payloadType")
      .map(field => field.options.default)[0];
    apiStream.write(
      `    emit(event: "${payloadType}", message: $spotware.${type}, clientMsgId?: string | null): void;\n`
    );
  });
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
    if (payloadType === "PROTO_MESSAGE") {
      apiStream.write(
        `    ${name}(event: "${payloadType}", listener: (message:$spotware.${type}) => void): this;\n`
      );
    } else {
      apiStream.write(
        `    ${name}(event: "${payloadType}", listener: Listener<$spotware.${type}>): this;\n`
      );
    }
  });
  openApi.messages.map(message => {
    const type = `I${message.name}`;
    const payloadType = message.fields
      .filter(field => field.name == "payloadType")
      .map(field => field.options.default)[0];
    apiStream.write(
      `    ${name}(event: "${payloadType}", listener: Listener<$spotware.${type}>): void;\n`
    );
  });
}

function writeHeader(apiStream: fs.WriteStream) {
  apiStream.write(`import { EventEmitter } from "events";
import * as $spotware from "./spotware-messages";

type Listener<T> = (message: T, clientMsgId?: string | null) => void;

export interface SpotwareEventEmitterOverloads {\n`);
}

function writeFooter(apiStream: fs.WriteStream) {
  apiStream.write(`}`);
}

function writeApiFile(file: string) {
  const common = loadSchema("./assets/OpenApiCommonMessages.proto");
  const openApi = loadSchema("./assets/OpenApiMessages.proto");
  const apiFile = fs.createWriteStream(file);
  writeHeader(apiFile);
  writeEmitterOverloads(apiFile, common, openApi);
  writeListenerOverloads("on", apiFile, common, openApi);
  writeListenerOverloads("off", apiFile, common, openApi);
  writeListenerOverloads("once", apiFile, common, openApi);
  writeFooter(apiFile);
}

writeApiFile("./src/spotware-event-emitter.ts");
