import * as $spotware from "../generated/spotware";
import * as $base from "./message_handler";

export function ProtoOAVersionReq(
  properties: $spotware.IProtoOAVersionReq,
  clientMsgId: string | null | undefined
): $spotware.IProtoMessage {
  return $base.toProtoMessage(
    $spotware.ProtoOAVersionReq,
    properties,
    clientMsgId
  );
}
