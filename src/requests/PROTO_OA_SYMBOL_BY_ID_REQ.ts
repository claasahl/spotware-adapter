import { ProtoOAPayloadType } from "@claasahl/spotware-protobuf";
import {
  FACTORY,
  PROTO_OA_SYMBOL_BY_ID_REQ,
  PROTO_OA_SYMBOL_BY_ID_RES,
} from "../messages";

import { behest } from "./utils";

export const request = behest<
  PROTO_OA_SYMBOL_BY_ID_REQ,
  PROTO_OA_SYMBOL_BY_ID_RES
>(
  FACTORY.PROTO_OA_SYMBOL_BY_ID_REQ,
  ProtoOAPayloadType.PROTO_OA_SYMBOL_BY_ID_REQ,
  ProtoOAPayloadType.PROTO_OA_SYMBOL_BY_ID_RES
);
