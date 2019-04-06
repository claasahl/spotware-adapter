import { messages } from "../assets/message-map.json";

const stream = process.stdout;

stream.write("## Processing of PROTO_MESSAGE Events\n");
stream.write("\n");
stream.write(
  "| Payload Type of `PROTO_MESSAGE` | Action | Decode as ... | Emit as ... |\n"
);
stream.write("| - | - | - | - |\n");
for (const message of messages) {
  const { payloadType, type, scopes } = message;
  if (scopes.includes("PROTO__WRITE")) {
    stream.write(`| \`${payloadType}\` | write to socket | n/a | n/a |\n`);
  } else if (scopes.includes("PROTO__DECODE")) {
    stream.write(
      `| \`${payloadType}\` | decode and emit | \`${type}\` | \`${payloadType}\` |\n`
    );
  }
  if (type === "ProtoMessage") {
    stream.write(`| \`${payloadType}\` | n/a | n/a | n/a | \n`);
  }
}
