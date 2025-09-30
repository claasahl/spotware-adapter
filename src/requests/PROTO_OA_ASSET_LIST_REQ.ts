import { ProtoOaPayloadType } from "@claasahl/spotware-protobuf";
import {
  FACTORY,
  PROTO_OA_ASSET_LIST_REQ,
  PROTO_OA_ASSET_LIST_RES,
} from "../messages";

import { behest } from "./utils";

export const request = behest<PROTO_OA_ASSET_LIST_REQ, PROTO_OA_ASSET_LIST_RES>(
  FACTORY.PROTO_OA_ASSET_LIST_REQ,
  ProtoOaPayloadType.PROTO_OA_ASSET_LIST_REQ,
  ProtoOaPayloadType.PROTO_OA_ASSET_LIST_RES,
);
