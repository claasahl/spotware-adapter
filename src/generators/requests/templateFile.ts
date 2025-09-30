import { ProtoOaPayloadType } from "@claasahl/spotware-protobuf";

const EXECUTION_EVENT_RESPONSES = new Set<string>([
  "PROTO_OA_AMEND_ORDER_REQ",
  "PROTO_OA_AMEND_POSITION_SLTP_REQ",
  "PROTO_OA_CANCEL_ORDER_REQ",
  "PROTO_OA_CLOSE_POSITION_REQ",
  "PROTO_OA_NEW_ORDER_REQ",
]);

export function templateFile(payloadType: ProtoOaPayloadType): string {
  const request = ProtoOaPayloadType[payloadType];
  const response = EXECUTION_EVENT_RESPONSES.has(request)
    ? "PROTO_OA_EXECUTION_EVENT"
    : request.replace("_REQ", "_RES");
  return `
import { ProtoOaPayloadType } from "@claasahl/spotware-protobuf";
import {
  FACTORY,
  ${request},
  ${response},
} from "../messages";

import { behest } from "./utils";

export const request = behest<
  ${request},
  ${response}
>(
  FACTORY.${request},
  ProtoOaPayloadType.${request},
  ProtoOaPayloadType.${response},
);
`;
}
