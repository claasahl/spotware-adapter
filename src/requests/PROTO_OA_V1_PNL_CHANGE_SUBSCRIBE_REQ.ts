import { ProtoOaPayloadType } from "@claasahl/spotware-protobuf";
import {
  FACTORY,
  PROTO_OA_V1_PNL_CHANGE_SUBSCRIBE_REQ,
  PROTO_OA_V1_PNL_CHANGE_SUBSCRIBE_RES,
} from "../messages";

import { behest } from "./utils";

export const request = behest<
  PROTO_OA_V1_PNL_CHANGE_SUBSCRIBE_REQ,
  PROTO_OA_V1_PNL_CHANGE_SUBSCRIBE_RES
>(
  FACTORY.PROTO_OA_V1_PNL_CHANGE_SUBSCRIBE_REQ,
  ProtoOaPayloadType.PROTO_OA_V1_PNL_CHANGE_SUBSCRIBE_REQ,
  ProtoOaPayloadType.PROTO_OA_V1_PNL_CHANGE_SUBSCRIBE_RES,
);
