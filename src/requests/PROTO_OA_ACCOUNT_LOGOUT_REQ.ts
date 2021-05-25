import { ProtoOAPayloadType } from "@claasahl/spotware-protobuf";
import {
  FACTORY,
  PROTO_OA_ACCOUNT_LOGOUT_REQ,
  PROTO_OA_ACCOUNT_LOGOUT_RES,
} from "../messages";

import { behest } from "./utils";

export const request = behest<
  PROTO_OA_ACCOUNT_LOGOUT_REQ,
  PROTO_OA_ACCOUNT_LOGOUT_RES
>(
  FACTORY.PROTO_OA_ACCOUNT_LOGOUT_REQ,
  ProtoOAPayloadType.PROTO_OA_ACCOUNT_LOGOUT_REQ,
  ProtoOAPayloadType.PROTO_OA_ACCOUNT_LOGOUT_RES
);
