import { messages } from "../assets/message-map.json";

const stream = process.stdout;
const eventNames = messages
  .map(message => `"${message.payloadType}"`)
  .join(" | ");
stream.write(`export type SpotwareEvents = ${eventNames};\n`);
stream.write("export default SpotwareEvents;");
