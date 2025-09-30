import { ProtoOaPayloadType } from "@claasahl/spotware-protobuf";
import {
  FACTORY,
  PROTO_OA_UNSUBSCRIBE_SPOTS_REQ,
  PROTO_OA_UNSUBSCRIBE_SPOTS_RES,
} from "../messages";

import { behest } from "./utils";

export const request = behest<
  PROTO_OA_UNSUBSCRIBE_SPOTS_REQ,
  PROTO_OA_UNSUBSCRIBE_SPOTS_RES
>(
  FACTORY.PROTO_OA_UNSUBSCRIBE_SPOTS_REQ,
  ProtoOaPayloadType.PROTO_OA_UNSUBSCRIBE_SPOTS_REQ,
  ProtoOaPayloadType.PROTO_OA_UNSUBSCRIBE_SPOTS_RES,
);
