import { ProtoOAPayloadType } from "@claasahl/spotware-protobuf";
import {
  FACTORY,
  PROTO_OA_MARGIN_CALL_UPDATE_REQ,
  PROTO_OA_MARGIN_CALL_UPDATE_RES,
} from "../messages";

import { behest } from "./utils";

export const request = behest<
  PROTO_OA_MARGIN_CALL_UPDATE_REQ,
  PROTO_OA_MARGIN_CALL_UPDATE_RES
>(
  FACTORY.PROTO_OA_MARGIN_CALL_UPDATE_REQ,
  ProtoOAPayloadType.PROTO_OA_MARGIN_CALL_UPDATE_REQ,
  ProtoOAPayloadType.PROTO_OA_MARGIN_CALL_UPDATE_RES
);
