import {
  ProtoOaPayloadType,
  ProtoPayloadType,
} from "@claasahl/spotware-protobuf";

export function templateIndex(): string {
  const payloadTypes = [
    ...Object.values(ProtoPayloadType)
      .filter((payloadType) => typeof payloadType === "number")
      .map((payloadType) => ProtoPayloadType[payloadType]),
    ...Object.values(ProtoOaPayloadType)
      .filter((payloadType) => typeof payloadType === "number")
      .map((payloadType) => ProtoOaPayloadType[payloadType]),
  ];

  const exports = payloadTypes.map(
    (payloadType) =>
      `export { Type as ${payloadType} } from "./${payloadType}";`,
  );
  const imports = payloadTypes.map(
    (payloadType) => `import * as ${payloadType} from "./${payloadType}";`,
  );
  const messageTypes = payloadTypes.map(
    (payloadType) => `| ${payloadType}.Type`,
  );
  const factories = payloadTypes.map(
    (payloadType) => `${payloadType}: ${payloadType}.create`,
  );

  return `${exports.join("\n")}

${imports.join("\n")}
import { ProtoMessage } from "@claasahl/spotware-protobuf";

const handlers = [
  ${payloadTypes.join(",\n  ")}
];

export function deserialize(message: ProtoMessage): Messages {
  for (const handler of handlers) {
    const result = handler.deserialize(message);
    if (result) {
      return result;
    }
  }
  throw new Error(
    \`could not deserialize proto message of type \${message.payloadType}\`,
  );
}

export function serialize(message: Messages): ProtoMessage {
  for (const handler of handlers) {
    const result = handler.serialize(message);
    if (result) {
      return result;
    }
  }
  throw new Error(
    \`could not serialize proto message of type \${message.payloadType}\`,
  );
}

export type Messages =
  ${messageTypes.join("\n")};

export const FACTORY = {
  ${factories.join(",\n  ")},
};
`;
}
