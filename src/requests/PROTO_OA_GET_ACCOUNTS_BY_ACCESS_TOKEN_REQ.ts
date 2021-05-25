import { ProtoOAPayloadType } from "@claasahl/spotware-protobuf";
import {
  FACTORY,
  PROTO_OA_GET_ACCOUNTS_BY_ACCESS_TOKEN_REQ,
  PROTO_OA_GET_ACCOUNTS_BY_ACCESS_TOKEN_RES,
} from "../messages";

import { behest } from "./utils";

export const request = behest<
  PROTO_OA_GET_ACCOUNTS_BY_ACCESS_TOKEN_REQ,
  PROTO_OA_GET_ACCOUNTS_BY_ACCESS_TOKEN_RES
>(
  FACTORY.PROTO_OA_GET_ACCOUNTS_BY_ACCESS_TOKEN_REQ,
  ProtoOAPayloadType.PROTO_OA_GET_ACCOUNTS_BY_ACCESS_TOKEN_REQ,
  ProtoOAPayloadType.PROTO_OA_GET_ACCOUNTS_BY_ACCESS_TOKEN_RES
);
