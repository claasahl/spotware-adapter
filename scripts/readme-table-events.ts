import map from "../assets/message-map.json";

const stream = process.stdout;

stream.write("## Processing of Events\n");
stream.write("\n");
stream.write(
  "| Event (`on(EVENT, message => ACTION)`) | Action | Encode as ... | Emit as ... |\n"
);
stream.write("| - | - | - | - |\n");
for (const message of map) {
  const { payloadType, type, scopes } = message;
  if (scopes.includes("EVENT__NO_ACTION")) {
    stream.write(`| \`${payloadType}\` | no action | n/a | n/a |\n`);
  } else if (scopes.includes("EVENT__ENCODE")) {
    stream.write(
      `| \`${payloadType}\` | encode and emit | \`ProtoMessage\` | \`PROTO_MESSAGE\` |\n`
    );
  }
  if (type === "ProtoMessage") {
    stream.write(
      `| \`${payloadType}\` | read from socket and emit | \`ProtoMessage\` | \`PROTO_MESSAGE\` |\n`
    );
  }
}
