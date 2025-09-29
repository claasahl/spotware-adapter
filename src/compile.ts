import { ProtoOaPayloadType } from "@claasahl/spotware-protobuf";
import * as fs from "fs/promises";

function toPascalCase(input: string): string {
  return input
    .toLowerCase()
    .split("_")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join("");
}

function messageTemplate(payloadType: string): string {
  const pascalCasePayloadType = toPascalCase(payloadType);
  return `import Pbf from "pbf";
import {
    ProtoMessage,
    ProtoOaPayloadType,
    ${pascalCasePayloadType}Utils,
    ${pascalCasePayloadType},
} from "@claasahl/spotware-protobuf";

import { Message } from "./Message";
import { Messages } from "./";

export type Type = Message<
    ${pascalCasePayloadType},
    ProtoOaPayloadType.${payloadType}
>;

export function create(payload: Type["payload"], clientMsgId?: string): Type {
    return {
    payloadType: ProtoOaPayloadType.${payloadType},
    payload,
    clientMsgId,
    };
}

export function deserialize(message: ProtoMessage): Type | undefined {
    if (message.payloadType === ProtoOaPayloadType.${payloadType}) {
    const pbf = new Pbf(message.payload);
    return {
        payloadType: ProtoOaPayloadType.${payloadType},
        payload: ${pascalCasePayloadType}Utils.read(pbf),
        clientMsgId: message.clientMsgId,
    };
    }
    return undefined;
}

export function serialize(message: Messages): ProtoMessage | undefined {
    if (message.payloadType === ProtoOaPayloadType.${payloadType}) {
    const pbf = new Pbf();
    ${pascalCasePayloadType}Utils.write(message.payload, pbf);
    return {
        ...message,
        payload: pbf.finish(),
    };
    }
    return undefined;
}
`;
}

async function main() {
  for (const key of Object.keys(ProtoOaPayloadType)) {
    if (key.match(/\d/)) continue; // Skip numeric keys
    await fs.writeFile(`src/messages/${key}.ts`, messageTemplate(key));
  }
}
main().catch(console.error);
