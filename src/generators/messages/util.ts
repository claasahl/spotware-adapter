import {
  ProtoOaPayloadType,
  ProtoPayloadType,
} from "@claasahl/spotware-protobuf";

export function toPascalCase(
  payloadType: ProtoOaPayloadType | ProtoPayloadType,
): string {
  return (ProtoOaPayloadType[payloadType] || ProtoPayloadType[payloadType])
    .toLowerCase()
    .split("_")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join("");
}
