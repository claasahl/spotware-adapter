import {
  ProtoOAVersionReq,
  IProtoOAVersionReq,
  IProtoMessage
} from "../../generated/spotware";
import * as $base from "../message_handler";

export function toProtoMessage(
  properties: IProtoOAVersionReq,
  clientMsgId: string | null | undefined
): IProtoMessage {
  return $base.toProtoMessage(ProtoOAVersionReq, properties, clientMsgId);
}
