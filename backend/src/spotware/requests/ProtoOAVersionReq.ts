import {
  ProtoOAVersionReq,
  ProtoOAPayloadType,
  IProtoOAVersionReq
} from "../../generated/spotware";
import { DefaultMessageHandler } from "../message_handler";

export class Request extends DefaultMessageHandler<
  IProtoOAVersionReq,
  ProtoOAVersionReq
> {
  constructor() {
    super(ProtoOAPayloadType.PROTO_OA_VERSION_REQ, ProtoOAVersionReq);
  }
}
