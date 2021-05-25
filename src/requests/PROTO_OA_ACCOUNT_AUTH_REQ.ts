import { ProtoOAPayloadType } from "@claasahl/spotware-protobuf";
import {
  FACTORY,
  PROTO_OA_ACCOUNT_AUTH_REQ,
  PROTO_OA_ACCOUNT_AUTH_RES,
} from "../messages";

import { behest } from "./utils";

export const request = behest<
  PROTO_OA_ACCOUNT_AUTH_REQ,
  PROTO_OA_ACCOUNT_AUTH_RES
>(
  FACTORY.PROTO_OA_ACCOUNT_AUTH_REQ,
  ProtoOAPayloadType.PROTO_OA_ACCOUNT_AUTH_REQ,
  ProtoOAPayloadType.PROTO_OA_ACCOUNT_AUTH_RES
);
