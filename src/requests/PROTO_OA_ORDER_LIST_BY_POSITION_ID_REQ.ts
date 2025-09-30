import { ProtoOaPayloadType } from "@claasahl/spotware-protobuf";
import {
  FACTORY,
  PROTO_OA_ORDER_LIST_BY_POSITION_ID_REQ,
  PROTO_OA_ORDER_LIST_BY_POSITION_ID_RES,
} from "../messages";

import { behest } from "./utils";

export const request = behest<
  PROTO_OA_ORDER_LIST_BY_POSITION_ID_REQ,
  PROTO_OA_ORDER_LIST_BY_POSITION_ID_RES
>(
  FACTORY.PROTO_OA_ORDER_LIST_BY_POSITION_ID_REQ,
  ProtoOaPayloadType.PROTO_OA_ORDER_LIST_BY_POSITION_ID_REQ,
  ProtoOaPayloadType.PROTO_OA_ORDER_LIST_BY_POSITION_ID_RES,
);
