import fs from "fs";
import schema from "protocol-buffers-schema";

function generateRequest(type: string): string {
  const generated = `export function ${type}(
  properties: $spotware.I${type},
  clientMsgId: string | null | undefined
): $spotware.IProtoMessage {
  return $base.toProtoMessage(
    $spotware.${type},
    properties,
    clientMsgId
  );
}`;
  return generated;
}

function writeRequests(requests: string[]) {
  if (requests.length > 0) {
    const stream = fs.createWriteStream("src/spotware/requests.ts");
    stream.write('import * as $spotware from "../generated/spotware";\n');
    stream.write('import * as $base from "./message_handler";\n');
    stream.write("\n");
    for (const request of requests) {
      stream.write(request);
    }
    stream.write("\n");
    stream.end();
  }
}

const protoFile =
  "node_modules/@claasahl/spotware-protobuf-messages/OpenApiMessages.proto";
const proto = fs.readFileSync(protoFile);
const s = schema(proto);
const requests: string[] = [];
for (const message of s.messages) {
  if (message.name.endsWith("Req")) {
    requests.push(generateRequest(message.name));
  }
}
writeRequests(requests);
