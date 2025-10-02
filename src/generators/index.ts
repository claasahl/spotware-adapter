import { generateMessages } from "./messages";

async function main() {
  await generateMessages();
}
main().catch(console.error);
