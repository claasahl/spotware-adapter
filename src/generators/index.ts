import { generateMessages } from "./messages";
import { generateRequests } from "./requests";

async function main() {
  await generateMessages();
  await generateRequests();
}
main().catch(console.error);
