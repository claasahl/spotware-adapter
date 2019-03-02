import {
  ProtoOAVersionRes,
  ProtoOAPayloadType,
  IProtoOAVersionRes
} from "../../generated/spotware";
import { DefaultMessageHandler } from "../message_handler";
export class Response extends DefaultMessageHandler<
  IProtoOAVersionRes,
  ProtoOAVersionRes
> {
  constructor() {
    super(ProtoOAPayloadType.PROTO_OA_VERSION_RES, ProtoOAVersionRes);
  }
}
