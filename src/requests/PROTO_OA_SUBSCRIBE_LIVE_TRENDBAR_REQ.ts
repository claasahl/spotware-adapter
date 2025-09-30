import { ProtoOaPayloadType } from "@claasahl/spotware-protobuf";
import {
  FACTORY,
  PROTO_OA_SUBSCRIBE_LIVE_TRENDBAR_REQ,
  PROTO_OA_SUBSCRIBE_LIVE_TRENDBAR_RES,
} from "../messages";

import { behest } from "./utils";

export const request = behest<
  PROTO_OA_SUBSCRIBE_LIVE_TRENDBAR_REQ,
  PROTO_OA_SUBSCRIBE_LIVE_TRENDBAR_RES
>(
  FACTORY.PROTO_OA_SUBSCRIBE_LIVE_TRENDBAR_REQ,
  ProtoOaPayloadType.PROTO_OA_SUBSCRIBE_LIVE_TRENDBAR_REQ,
  ProtoOaPayloadType.PROTO_OA_SUBSCRIBE_LIVE_TRENDBAR_RES,
);
