import { messages } from "../assets/message-map.json";

const stream = process.stdout;

stream.write("## Processing of PROTO_MESSAGE Events\n");
stream.write("\n");
stream.write(
  "| Payload Type of `PROTO_MESSAGE` | Decode as ... | Write to Socket |\n"
);
stream.write("| - | - | - | - |\n");
for (const message of messages) {
  const { eventName, type, scopes } = message;
  if (scopes.includes("PROTO__WRITE")) {
    stream.write(`| \`${eventName}\` | n/a | yes |\n`);
  } else if (scopes.includes("PROTO__DECODE")) {
    stream.write(`| \`${eventName}\` | \`${type}\` | no |\n`);
  }
  if (type === "ProtoMessage") {
    stream.write(`| \`${eventName}\` | n/a | n/a | \n`);
  }
}
