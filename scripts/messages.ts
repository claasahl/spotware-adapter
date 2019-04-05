import mustache from "mustache";
import fs from "fs";
import path from "path";

import map from "../assets/message-map.json";

const commonMustache = "./assets/message-common.mustache";
const openApiMustache = "./assets/message-open-api.mustache";
const outputDir = "./src/messages/";
const commonTemplate = fs.readFileSync(commonMustache).toString();
const openApiTemplate = fs.readFileSync(openApiMustache).toString();

for (const message of map) {
  if (message.type === "ProtoMessage") {
    continue;
  }
  const template = message.payloadType.includes("_OA_")
    ? openApiTemplate
    : commonTemplate;
  const sourceFile = path.join(outputDir, `${message.type}.ts`);
  const sourceCode = mustache.render(template, message);
  fs.writeFileSync(sourceFile, sourceCode);
}
