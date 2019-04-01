import schema from "protocol-buffers-schema";
import { Schema, Message } from "protocol-buffers-schema/types";
import fs from "fs";

function loadSchema(protoFile: fs.PathLike): Schema {
  const proto = fs.readFileSync(protoFile);
  return schema(proto);
}

type Scope =
  | "PROTO__WRITE"
  | "PROTO__DECODE"
  | "EVENT__ENCODE"
  | "EVENT__NO_ACTION";

interface Type {
  type: string;
  payloadType: string;
  scopes: Scope[];
}

const PROTO_SCOPES: Scope[] = [];
const REQUEST_SCOPES: Scope[] = ["EVENT__ENCODE", "PROTO__WRITE"];
const RESPONSE_SCOPES: Scope[] = ["EVENT__NO_ACTION", "PROTO__DECODE"];
const EVENT_SCOPES: Scope[] = ["EVENT__NO_ACTION", "PROTO__DECODE"];

function pushIf(condition: boolean, newScopes: Scope[], scopes: Scope[]): void {
  if (condition) {
    scopes.push(...newScopes);
  }
}

function toPayloadType(message: Message) {
  return (
    message.fields
      .filter(field => field.name == "payloadType")
      .map(field => field.options.default)[0] || "PROTO_MESSAGE"
  );
}

function toType(message: Message): Type {
  const type = message.name;
  const payloadType = toPayloadType(message);
  const scopes: Scope[] = [];
  pushIf(type.endsWith("Req"), REQUEST_SCOPES, scopes);
  pushIf(type.endsWith("Res"), RESPONSE_SCOPES, scopes);
  pushIf(type.endsWith("Event"), EVENT_SCOPES, scopes);
  pushIf(type === "ProtoMessage", PROTO_SCOPES, scopes);
  return {
    type,
    payloadType,
    scopes
  };
}

function writeMessageMap() {
  const common = loadSchema("./assets/OpenApiCommonMessages.proto");
  const openApi = loadSchema("./assets/OpenApiMessages.proto");
  const messages = [...common.messages, ...openApi.messages];
  const types: Type[] = [];
  for (const message of messages) {
    types.push(toType(message));
  }
  process.stdout.write(JSON.stringify(types));
}

writeMessageMap();
