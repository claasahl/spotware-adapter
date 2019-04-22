import mustache from "mustache";
import fs from "fs";
import path from "path";

import map from "../assets/message-map.json";

const mustacheTemplate = "./assets/mustachios/messages/message.mustache";
const outputDir = "./src/messages/";

const template = fs.readFileSync(mustacheTemplate).toString();
const messages = map.messages.filter(
  message => message.type !== "ProtoMessage"
);
for (const message of messages) {
  const sourceFile = path.join(outputDir, `${message.type}.ts`);
  const sourceCode = mustache.render(template, message);
  fs.writeFileSync(sourceFile, sourceCode);
}
