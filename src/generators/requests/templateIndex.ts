import { ProtoOaPayloadType } from "@claasahl/spotware-protobuf";
import { isRequestPayloadType } from "./utils";

export function templateIndex(): string {
  const payloadTypes = Object.values(ProtoOaPayloadType)
    .filter((payloadType) => typeof payloadType === "number")
    .filter((payloadType) => isRequestPayloadType(payloadType))
    .map((payloadType) => ProtoOaPayloadType[payloadType]);

  const exports = payloadTypes.map(
    (payloadType) =>
      `export { request as ${payloadType} } from "./${payloadType}";`,
  );
  return exports.join("\n");
}
