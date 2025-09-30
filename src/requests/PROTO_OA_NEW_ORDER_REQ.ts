import { ProtoOaPayloadType } from "@claasahl/spotware-protobuf";
import {
  FACTORY,
  PROTO_OA_NEW_ORDER_REQ,
  PROTO_OA_EXECUTION_EVENT,
} from "../messages";

import { behest } from "./utils";

export const request = behest<PROTO_OA_NEW_ORDER_REQ, PROTO_OA_EXECUTION_EVENT>(
  FACTORY.PROTO_OA_NEW_ORDER_REQ,
  ProtoOaPayloadType.PROTO_OA_NEW_ORDER_REQ,
  ProtoOaPayloadType.PROTO_OA_EXECUTION_EVENT,
);
