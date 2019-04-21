import schema from "protocol-buffers-schema";
import { Schema, Message } from "protocol-buffers-schema/types";
import fs from "fs";

function loadSchema(protoFile: fs.PathLike): Schema {
  const proto = fs.readFileSync(protoFile);
  return schema(proto);
}

interface Type {
  type: string;
  payloadType: string;
  eventName: string;
  isProtoMessage: boolean;
  isOpenApiMessage: boolean;
  isCommonMessage: boolean;
}

function toPayloadType(message: Message) {
  return (
    message.fields
      .filter(field => field.name == "payloadType")
      .map(field => field.options.default)[0] || "PROTO_MESSAGE"
  );
}

function toType(
  message: Message,
  payloadTypeRef: string,
  isCommonMessage: boolean,
  isOpenApiMessage: boolean
): Type {
  const type = message.name;
  const payloadType = toPayloadType(message);
  return {
    type,
    payloadType: `${payloadTypeRef}.${payloadType}`,
    eventName: payloadType,
    isProtoMessage: type === "ProtoMessage",
    isCommonMessage,
    isOpenApiMessage
  };
}

function writeMessageMap() {
  const common = loadSchema("./assets/OpenApiCommonMessages.proto");
  const openApi = loadSchema("./assets/OpenApiMessages.proto");
  const types: Type[] = [];
  for (const message of common.messages) {
    types.push(toType(message, "ProtoPayloadType", true, false));
  }
  for (const message of openApi.messages) {
    types.push(toType(message, "ProtoOAPayloadType", false, true));
  }
  process.stdout.write(JSON.stringify({ messages: types }));
}

writeMessageMap();
