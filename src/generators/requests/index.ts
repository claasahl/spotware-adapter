import { ProtoOaPayloadType } from "@claasahl/spotware-protobuf";
import * as fs from "fs/promises";

import { templateFile } from "./templateFile";
import { templateIndex } from "./templateIndex";
import { isRequestPayloadType } from "./utils";

export async function generateRequests() {
  // generate request files
  for (const payloadType of Object.values(ProtoOaPayloadType)) {
    if (typeof payloadType === "number" && isRequestPayloadType(payloadType)) {
      await fs.writeFile(
        `src/requests/${ProtoOaPayloadType[payloadType]}.ts`,
        templateFile(payloadType),
      );
    }
  }

  // generate index file
  await fs.writeFile(`src/requests/index.ts`, templateIndex());
}
