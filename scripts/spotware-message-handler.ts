import { messages } from "../assets/message-map.json";

const stream = process.stdout;

stream.write('import tls from "tls";');
stream.write("\n");
stream.write('import * as $spotware from "./spotware-messages";\n');
stream.write('import SpotwareEventEmitter from "./spotware-event-emitter";\n');
stream.write('import * as messages from "./messages";\n');
stream.write('import * as util from "./spotware-utils";\n');
stream.write("\n");
stream.write("export function onProtoMessage(\n");
stream.write("  emitter: SpotwareEventEmitter & tls.TLSSocket,\n");
stream.write("  message: $spotware.IProtoMessage\n");
stream.write(") {\n");
stream.write("  switch (message.payloadType) {\n");
for (const message of messages) {
  const { payloadType, scopes } = message;
  if (scopes.includes("PROTO__WRITE")) {
    stream.write(`case $spotware.${payloadType}:\n`);
  }
}
stream.write("return emitter.write(util.serialize(message));\n");

for (const message of messages) {
  const { payloadType, scopes, type } = message;
  if (scopes.includes("PROTO__DECODE")) {
    stream.write(`case $spotware.${payloadType}:\n`);
    stream.write(`return messages.${type}.emitDecoded(emitter, message);\n`);
  }
}

stream.write("}\n");
stream.write("}\n");
stream.write("\n");
stream.write("\n");
stream.write("----- CUT AND PASTE ----");
stream.write("\n");

for (const message of messages) {
  const { type, scopes } = message;
  if (scopes.includes("PROTO__WRITE")) {
    stream.write(`function on${type}(\n`);
    stream.write(`  this: SpotwareEventEmitter,\n`);
    stream.write(`  message: $spotware.I${type},\n`);
    stream.write(`  clientMsgId?: string | null\n`);
    stream.write(`) {\n`);
    stream.write(`  return messages.${type}.emitEncoded(\n`);
    stream.write(`    this,\n`);
    stream.write(`    message,\n`);
    stream.write(`    clientMsgId\n`);
    stream.write(`  );\n`);
    stream.write(`}\n`);
    stream.write("\n");
  }
}

for (const message of messages) {
  const { type, scopes, eventName } = message;
  if (scopes.includes("PROTO__WRITE")) {
    stream.write(`.on("${eventName}", on${type})\n`);
  }
}
stream.write(";\n");
