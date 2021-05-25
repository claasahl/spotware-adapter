import { ProtoOAPayloadType } from "@claasahl/spotware-protobuf";
import {
  FACTORY,
  PROTO_OA_CLOSE_POSITION_REQ,
  PROTO_OA_EXECUTION_EVENT,
} from "../messages";

import { behest } from "./utils";

export const request = behest<
  PROTO_OA_CLOSE_POSITION_REQ,
  PROTO_OA_EXECUTION_EVENT
>(
  FACTORY.PROTO_OA_CLOSE_POSITION_REQ,
  ProtoOAPayloadType.PROTO_OA_CLOSE_POSITION_REQ,
  ProtoOAPayloadType.PROTO_OA_EXECUTION_EVENT
);
