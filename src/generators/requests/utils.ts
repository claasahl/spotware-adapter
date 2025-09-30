import { ProtoOaPayloadType } from "@claasahl/spotware-protobuf";

export function isRequestPayloadType(payloadType: ProtoOaPayloadType): boolean {
  return ProtoOaPayloadType[payloadType].endsWith("_REQ");
}
