import { ProtoOaPayloadType } from "@claasahl/spotware-protobuf";

export function toPascalCase(payloadType: ProtoOaPayloadType): string {
  return ProtoOaPayloadType[payloadType]
    .toLowerCase()
    .split("_")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join("");
}
