import schema from "protocol-buffers-schema";
import { Schema, Message } from "protocol-buffers-schema/types";
import fs from "fs";

function loadSchema(protoFile: fs.PathLike): Schema {
  const proto = fs.readFileSync(protoFile);
  return schema(proto);
}

type Scope = "Read" | "Write" | "Decode" | "Encode";

interface Type {
  type: string;
  payloadType: string;
  scopes: Scope[];
}

const PROTO_SCOPES: Scope[] = ["Write", "Read"];
const REQUEST_SCOPES: Scope[] = ["Encode"];
const RESPONSE_SCOPES: Scope[] = ["Decode"];
const EVENT_SCOPES: Scope[] = ["Decode"];

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

function writeMessageMap(file: string) {
  const common = loadSchema("./assets/OpenApiCommonMessages.proto");
  const openApi = loadSchema("./assets/OpenApiMessages.proto");
  const messages = [...common.messages, ...openApi.messages];
  const types: Type[] = [];
  for (const message of messages) {
    types.push(toType(message));
  }
  fs.writeFileSync(file, JSON.stringify(types));
}

writeMessageMap("./assets/message-map.json");
