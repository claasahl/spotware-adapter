import debug from "debug";
import {
  ProtoPayloadType,
  ProtoOAPayloadType,
} from "@claasahl/spotware-protobuf";

import { Messages } from "./messages";

const spotware = debug("spotware");
const input = spotware.extend("input");
const inputHuman = input.extend("human");
const output = spotware.extend("output");
const outputHuman = output.extend("human");

interface Loggers {
  [payloadType: number]: debug.Debugger | undefined;
  [payloadTypeText: string]: debug.Debugger | undefined;
}

const loggers: Loggers = {};
function getLogger(payloadTypeOrText: number | string): debug.Debugger {
  const logger = loggers[payloadTypeOrText];
  if (logger) {
    return logger;
  }

  const newLogger = spotware.extend(`${payloadTypeOrText}`);
  loggers[payloadTypeOrText] = newLogger;
  return newLogger;
}

export function logInput(msg: Messages) {
  getLogger(msg.payloadType)("%j", {
    payload: msg.payload,
    clientMsgId: msg.clientMsgId,
  });
  input("%j", {
    payloadType: msg.payloadType,
    payload: msg.payload,
    clientMsgId: msg.clientMsgId,
  });
  const payloadTypeText = ProtoPayloadType[msg.payloadType] || ProtoOAPayloadType[msg.payloadType]; // prettier-ignore
  if (payloadTypeText) {
    getLogger(payloadTypeText)("%j", {
      payload: msg.payload,
      clientMsgId: msg.clientMsgId,
    });
    inputHuman("%j", {
      payloadType: payloadTypeText,
      payload: msg.payload,
      clientMsgId: msg.clientMsgId,
    });
  }
}

export function logOutput(msg: Messages) {
  spotware.extend(`${msg.payloadType}`)("%j", {
    payload: msg.payload,
    clientMsgId: msg.clientMsgId,
  });
  output("%j", {
    payloadType: msg.payloadType,
    payload: msg.payload,
    clientMsgId: msg.clientMsgId,
  });
  const payloadTypeText = ProtoPayloadType[msg.payloadType] || ProtoOAPayloadType[msg.payloadType]; // prettier-ignore
  if (payloadTypeText) {
    spotware.extend(payloadTypeText)("%j", {
      payload: msg.payload,
      clientMsgId: msg.clientMsgId,
    });
    outputHuman("%j", {
      payloadType: payloadTypeText,
      payload: msg.payload,
      clientMsgId: msg.clientMsgId,
    });
  }
}
