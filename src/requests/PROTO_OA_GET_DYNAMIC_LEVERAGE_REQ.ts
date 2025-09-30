import { ProtoOaPayloadType } from "@claasahl/spotware-protobuf";
import {
  FACTORY,
  PROTO_OA_GET_DYNAMIC_LEVERAGE_REQ,
  PROTO_OA_GET_DYNAMIC_LEVERAGE_RES,
} from "../messages";

import { behest } from "./utils";

export const request = behest<
  PROTO_OA_GET_DYNAMIC_LEVERAGE_REQ,
  PROTO_OA_GET_DYNAMIC_LEVERAGE_RES
>(
  FACTORY.PROTO_OA_GET_DYNAMIC_LEVERAGE_REQ,
  ProtoOaPayloadType.PROTO_OA_GET_DYNAMIC_LEVERAGE_REQ,
  ProtoOaPayloadType.PROTO_OA_GET_DYNAMIC_LEVERAGE_RES,
);
