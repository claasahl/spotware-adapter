import { ProtoOaPayloadType } from "@claasahl/spotware-protobuf";
import { FACTORY, PROTO_OA_TRADER_REQ, PROTO_OA_TRADER_RES } from "../messages";

import { behest } from "./utils";

export const request = behest<PROTO_OA_TRADER_REQ, PROTO_OA_TRADER_RES>(
  FACTORY.PROTO_OA_TRADER_REQ,
  ProtoOaPayloadType.PROTO_OA_TRADER_REQ,
  ProtoOaPayloadType.PROTO_OA_TRADER_RES,
);
