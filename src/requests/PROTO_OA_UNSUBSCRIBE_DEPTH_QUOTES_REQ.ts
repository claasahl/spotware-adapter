import { ProtoOAPayloadType } from "@claasahl/spotware-protobuf";
import {
  FACTORY,
  PROTO_OA_UNSUBSCRIBE_DEPTH_QUOTES_REQ,
  PROTO_OA_UNSUBSCRIBE_DEPTH_QUOTES_RES,
} from "../messages";

import { behest } from "./utils";

export const request = behest<
  PROTO_OA_UNSUBSCRIBE_DEPTH_QUOTES_REQ,
  PROTO_OA_UNSUBSCRIBE_DEPTH_QUOTES_RES
>(
  FACTORY.PROTO_OA_UNSUBSCRIBE_DEPTH_QUOTES_REQ,
  ProtoOAPayloadType.PROTO_OA_UNSUBSCRIBE_DEPTH_QUOTES_REQ,
  ProtoOAPayloadType.PROTO_OA_UNSUBSCRIBE_DEPTH_QUOTES_RES
);
