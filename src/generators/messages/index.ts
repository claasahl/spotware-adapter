import {
  ProtoOaPayloadType,
  ProtoPayloadType,
} from "@claasahl/spotware-protobuf";
import * as fs from "fs/promises";

import { templateFile } from "./templateFile";
import { templateIndex } from "./templateIndex";

export async function generateMessages() {
  // generate message files
  for (const payloadType of Object.values(ProtoPayloadType)) {
    if (typeof payloadType === "number") {
      await fs.writeFile(
        `src/messages/${ProtoPayloadType[payloadType]}.ts`,
        templateFile(payloadType, "ProtoPayloadType"),
      );
    }
  }
  for (const payloadType of Object.values(ProtoOaPayloadType)) {
    if (typeof payloadType === "number") {
      await fs.writeFile(
        `src/messages/${ProtoOaPayloadType[payloadType]}.ts`,
        templateFile(payloadType, "ProtoOaPayloadType"),
      );
    }
  }

  // generate index file
  await fs.writeFile(`src/messages/index.ts`, templateIndex());
}
