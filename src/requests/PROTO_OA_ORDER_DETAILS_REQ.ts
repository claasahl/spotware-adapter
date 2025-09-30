import { ProtoOaPayloadType } from "@claasahl/spotware-protobuf";
import {
  FACTORY,
  PROTO_OA_ORDER_DETAILS_REQ,
  PROTO_OA_ORDER_DETAILS_RES,
} from "../messages";

import { behest } from "./utils";

export const request = behest<
  PROTO_OA_ORDER_DETAILS_REQ,
  PROTO_OA_ORDER_DETAILS_RES
>(
  FACTORY.PROTO_OA_ORDER_DETAILS_REQ,
  ProtoOaPayloadType.PROTO_OA_ORDER_DETAILS_REQ,
  ProtoOaPayloadType.PROTO_OA_ORDER_DETAILS_RES,
);
