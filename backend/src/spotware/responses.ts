import * as $spotware from "../generated/spotware";
import { EventEmitter } from "events";
import * as $base from "./message_handler";

export function ProtoOAVersionRes(emitter: EventEmitter): void {
  $base.register(
    $spotware.ProtoOAVersionRes,
    $spotware.ProtoOAPayloadType.PROTO_OA_VERSION_RES,
    emitter
  );
}
