import { ProtoOaPayloadType } from "@claasahl/spotware-protobuf";

import { toPascalCase } from "../util";

export function templateFile(payloadType: ProtoOaPayloadType): string {
  const pascalCasePayloadType = toPascalCase(payloadType);
  const original = ProtoOaPayloadType[payloadType];
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
    ProtoOaPayloadType.${original}
>;

export function create(payload: Type["payload"], clientMsgId?: string): Type {
    return {
    payloadType: ProtoOaPayloadType.${original},
    payload,
    clientMsgId,
    };
}

export function deserialize(message: ProtoMessage): Type | undefined {
    if (message.payloadType === ProtoOaPayloadType.${original}) {
    const pbf = new Pbf(message.payload);
    return {
        payloadType: ProtoOaPayloadType.${original},
        payload: ${pascalCasePayloadType}Utils.read(pbf),
        clientMsgId: message.clientMsgId,
    };
    }
    return undefined;
}

export function serialize(message: Messages): ProtoMessage | undefined {
    if (message.payloadType === ProtoOaPayloadType.${original}) {
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
