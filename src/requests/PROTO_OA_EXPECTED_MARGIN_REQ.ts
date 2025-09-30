import { ProtoOaPayloadType } from "@claasahl/spotware-protobuf";
import {
  FACTORY,
  PROTO_OA_EXPECTED_MARGIN_REQ,
  PROTO_OA_EXPECTED_MARGIN_RES,
} from "../messages";

import { behest } from "./utils";

export const request = behest<
  PROTO_OA_EXPECTED_MARGIN_REQ,
  PROTO_OA_EXPECTED_MARGIN_RES
>(
  FACTORY.PROTO_OA_EXPECTED_MARGIN_REQ,
  ProtoOaPayloadType.PROTO_OA_EXPECTED_MARGIN_REQ,
  ProtoOaPayloadType.PROTO_OA_EXPECTED_MARGIN_RES,
);
