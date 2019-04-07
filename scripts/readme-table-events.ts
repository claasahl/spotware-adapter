import { messages } from "../assets/message-map.json";

const stream = process.stdout;

stream.write("## Processing of Events\n");
stream.write("\n");
stream.write(
  "| Event (`on(EVENT, message => ACTION)`) | Encode as ... | Emit as ... |\n"
);
stream.write("| - | - | - | - |\n");
for (const message of messages) {
  const { eventName, type, scopes } = message;
  if (scopes.includes("EVENT__NO_ACTION")) {
    stream.write(`| \`${eventName}\` | n/a | n/a |\n`);
  } else if (scopes.includes("EVENT__ENCODE")) {
    stream.write(
      `| \`${eventName}\` | \`ProtoMessage\` | \`PROTO_MESSAGE\` |\n`
    );
  }
  if (type === "ProtoMessage") {
    stream.write(
      `| \`${eventName}\` | see [table](#processing_of_proto_message_events) | see [table](#processing_of_proto_message_events)  |\n`
    );
  }
}
