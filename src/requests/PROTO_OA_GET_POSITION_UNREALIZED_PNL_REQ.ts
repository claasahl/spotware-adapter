import { ProtoOaPayloadType } from "@claasahl/spotware-protobuf";
import {
  FACTORY,
  PROTO_OA_GET_POSITION_UNREALIZED_PNL_REQ,
  PROTO_OA_GET_POSITION_UNREALIZED_PNL_RES,
} from "../messages";

import { behest } from "./utils";

export const request = behest<
  PROTO_OA_GET_POSITION_UNREALIZED_PNL_REQ,
  PROTO_OA_GET_POSITION_UNREALIZED_PNL_RES
>(
  FACTORY.PROTO_OA_GET_POSITION_UNREALIZED_PNL_REQ,
  ProtoOaPayloadType.PROTO_OA_GET_POSITION_UNREALIZED_PNL_REQ,
  ProtoOaPayloadType.PROTO_OA_GET_POSITION_UNREALIZED_PNL_RES,
);
