import { types, IType } from "@claasahl/spotware-protobuf";

interface Type {
  type: string;
  payloadType: string;
  eventName: string;
  isProtoMessage: boolean;
  isOpenApiMessage: boolean;
  isCommonMessage: boolean;
}

function toPayloadType(message: IType): string {
  if (message.fields.hasOwnProperty("payloadType")) {
    const payloadType = message.fields.payloadType;
    if (payloadType.hasOwnProperty("options")) {
      return (
        (payloadType && payloadType.options && payloadType.options.default) ||
        "PROTO_MESSAGE"
      );
    }
  }
  return "PROTO_MESSAGE";
}

function toType(
  type: string,
  message: IType,
  payloadTypeRef: string,
  isCommonMessage: boolean,
  isOpenApiMessage: boolean
): Type {
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
  const messages: Type[] = [];
  types.commonMessages.types.forEach((message, type) =>
    messages.push(toType(type, message, "ProtoPayloadType", true, false))
  );
  types.messages.types.forEach((message, type) =>
    messages.push(toType(type, message, "ProtoOAPayloadType", false, true))
  );
  process.stdout.write(JSON.stringify({ messages }));
}

writeMessageMap();
