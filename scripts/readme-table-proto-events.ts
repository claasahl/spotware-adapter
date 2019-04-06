import { messages } from "../assets/message-map.json";

const stream = process.stdout;

stream.write("## Processing of PROTO_MESSAGE Events\n");
stream.write("\n");
stream.write(
  "| Payload Type of `PROTO_MESSAGE` | Action | Decode as ... | Emit as ... |\n"
);
stream.write("| - | - | - | - |\n");
for (const message of messages) {
  const { eventName, type, scopes } = message;
  if (scopes.includes("PROTO__WRITE")) {
    stream.write(`| \`${eventName}\` | write to socket | n/a | n/a |\n`);
  } else if (scopes.includes("PROTO__DECODE")) {
    stream.write(
      `| \`${eventName}\` | decode and emit | \`${type}\` | \`${eventName}\` |\n`
    );
  }
  if (type === "ProtoMessage") {
    stream.write(`| \`${eventName}\` | n/a | n/a | n/a | \n`);
  }
}
