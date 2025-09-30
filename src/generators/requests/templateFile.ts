import { ProtoOaPayloadType } from "@claasahl/spotware-protobuf";

export function templateFile(payloadType: ProtoOaPayloadType): string {
  const request = ProtoOaPayloadType[payloadType];
  const response = request.replace("_REQ", "_RES");
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
