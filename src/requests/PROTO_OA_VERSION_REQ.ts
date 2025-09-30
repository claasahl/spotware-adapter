import { ProtoOaPayloadType } from "@claasahl/spotware-protobuf";
import {
  FACTORY,
  PROTO_OA_VERSION_REQ,
  PROTO_OA_VERSION_RES,
} from "../messages";

import { behest } from "./utils";

export const request = behest<PROTO_OA_VERSION_REQ, PROTO_OA_VERSION_RES>(
  FACTORY.PROTO_OA_VERSION_REQ,
  ProtoOaPayloadType.PROTO_OA_VERSION_REQ,
  ProtoOaPayloadType.PROTO_OA_VERSION_RES,
);
