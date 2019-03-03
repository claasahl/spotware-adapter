import {
  ProtoOAVersionRes,
  ProtoOAPayloadType
} from "../../generated/spotware";
import { EventEmitter } from "events";
import * as $base from "../message_handler";

export function register(emitter: EventEmitter): void {
  $base.register(
    ProtoOAVersionRes,
    ProtoOAPayloadType.PROTO_OA_VERSION_RES,
    emitter
  );
}
