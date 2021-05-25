import { ProtoOAPayloadType } from "@claasahl/spotware-protobuf";
import {
  FACTORY,
  PROTO_OA_SYMBOLS_FOR_CONVERSION_REQ,
  PROTO_OA_SYMBOLS_FOR_CONVERSION_RES,
} from "../messages";

import { behest } from "./utils";

export const request = behest<
  PROTO_OA_SYMBOLS_FOR_CONVERSION_REQ,
  PROTO_OA_SYMBOLS_FOR_CONVERSION_RES
>(
  FACTORY.PROTO_OA_SYMBOLS_FOR_CONVERSION_REQ,
  ProtoOAPayloadType.PROTO_OA_SYMBOLS_FOR_CONVERSION_REQ,
  ProtoOAPayloadType.PROTO_OA_SYMBOLS_FOR_CONVERSION_RES
);
