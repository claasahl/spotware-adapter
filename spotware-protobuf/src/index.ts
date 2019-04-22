import commonMessages from "../assets/OpenApiCommonMessages.json";
import commonModelMessages from "../assets/OpenApiCommonModelMessages.json";
import messages from "../assets/OpenApiMessages.json";
import modelMessages from "../assets/OpenApiModelMessages.json";

export const types = {
  commonMessages: commonMessages.nested,
  commonModelMessages: commonModelMessages.nested,
  messages: messages.nested,
  modelMessages: modelMessages.nested
};
export default types;
