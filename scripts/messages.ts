import mustache from "mustache";
import fs from "fs";
import path from "path";

import map from "../assets/message-map.json";

const commonMustache = "./assets/message-common.mustache";
const openApiMustache = "./assets/message-open-api.mustache";
const indexMustache = "./assets/message-index.mustache";
const outputDir = "./src/messages/";

const commonTemplate = fs.readFileSync(commonMustache).toString();
const openApiTemplate = fs.readFileSync(openApiMustache).toString();
const indexTemplate = fs.readFileSync(indexMustache).toString();
const messages = map.messages.filter(
  message => message.type !== "ProtoMessage"
);
for (const message of messages) {
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

const sourceFile = path.join(outputDir, "index.ts");
const sourceCode = mustache.render(indexTemplate, { messages });
fs.writeFileSync(sourceFile, sourceCode);
