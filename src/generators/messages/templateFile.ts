import {
  ProtoOaPayloadType,
  ProtoPayloadType,
} from "@claasahl/spotware-protobuf";

import { toPascalCase } from "../util";

export function templateFile(
  payloadType: ProtoOaPayloadType | ProtoPayloadType,
  protoPayloadType: "ProtoOaPayloadType" | "ProtoPayloadType",
): string {
  const pascalCasePayloadType = toPascalCase(payloadType);
  const original =
    ProtoOaPayloadType[payloadType] || ProtoPayloadType[payloadType];
  return `import Pbf from "pbf";
import {
    ProtoMessage,
    ${protoPayloadType},
    ${pascalCasePayloadType}Utils,
    ${pascalCasePayloadType},
} from "@claasahl/spotware-protobuf";

import { Message } from "./Message";
import { Messages } from "./";

export type Type = Message<
    ${pascalCasePayloadType},
    ${protoPayloadType}.${original}
>;

export function create(payload: Type["payload"], clientMsgId?: string): Type {
    return {
    payloadType: ${protoPayloadType}.${original},
    payload,
    clientMsgId,
    };
}

export function deserialize(message: ProtoMessage): Type | undefined {
    if (message.payloadType === ${protoPayloadType}.${original}) {
    const pbf = new Pbf(message.payload);
    return {
        payloadType: ${protoPayloadType}.${original},
        payload: ${pascalCasePayloadType}Utils.read(pbf),
        clientMsgId: message.clientMsgId,
    };
    }
    return undefined;
}

export function serialize(message: Messages): ProtoMessage | undefined {
    if (message.payloadType === ${protoPayloadType}.${original}) {
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
