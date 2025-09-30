import { ProtoOaPayloadType } from "@claasahl/spotware-protobuf";
import * as fs from "fs/promises";

import { templateFile } from "./templateFile";
import { templateIndex } from "./templateIndex";

export async function generateMessages() {
  // generate message files
  for (const payloadType of Object.values(ProtoOaPayloadType)) {
    if (typeof payloadType === "number") {
      await fs.writeFile(
        `src/messages/${payloadType}.ts`,
        templateFile(payloadType),
      );
    }
  }

  // generate index file
  await fs.writeFile(`src/messages/index.ts`, templateIndex());
}
