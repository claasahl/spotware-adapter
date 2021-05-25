import {
  ProtoOAPayloadType,
  ProtoPayloadType,
} from "@claasahl/spotware-protobuf";
import { v4 as uuid } from "uuid";

import { Messages, PROTO_OA_ERROR_RES, ERROR_RES } from "../messages";
import { SpotwareClientSocket } from "../client";

export function error(
  message: PROTO_OA_ERROR_RES["payload"] | ERROR_RES["payload"]
): Error {
  const parts: string[] = [];
  if (message.description) {
    parts.push(`${message.errorCode}: ${message.description}`);
  } else {
    parts.push(message.errorCode);
  }
  if (message.maintenanceEndTimestamp) {
    const date = new Date(message.maintenanceEndTimestamp);
    parts.push(`(end of maintenance: ${date.toISOString()})`);
  }
  if ("ctidTraderAccountId" in message && message.ctidTraderAccountId) {
    parts.push(`(account: ${message.ctidTraderAccountId})`);
  }
  return new Error(parts.join(" "));
}

export type BEHEST<REQ extends Messages, RES extends Messages> = (
  socket: SpotwareClientSocket,
  request: REQ["payload"]
) => Promise<RES["payload"]>;

export function behest<REQ extends Messages, RES extends Messages>(
  builder: (payload: REQ["payload"], clientMsgId?: string) => REQ,
  _requestType: REQ["payloadType"],
  responseType: RES["payloadType"]
): BEHEST<REQ, RES> {
  return async (socket, request) => {
    return await new Promise<RES["payload"]>((resolve, reject) => {
      const clientMsgId = uuid();
      socket.write(builder(request, clientMsgId));
      const listener = (message: Messages): void => {
        if (message.clientMsgId !== clientMsgId) {
          return;
        }
        socket.off("data", listener);
        switch (message.payloadType) {
          case responseType:
            resolve(message.payload);
            break;
          case ProtoPayloadType.ERROR_RES:
            reject(error(message.payload));
            break;
          case ProtoOAPayloadType.PROTO_OA_ERROR_RES:
            reject(error(message.payload));
            break;
          default:
            reject(new Error());
            break;
        }
      };
      socket.on("data", listener);
    });
  };
}
