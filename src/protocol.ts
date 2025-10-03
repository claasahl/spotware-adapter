import { ProtoMessageUtils } from "@claasahl/spotware-protobuf";
import net from "net";
import Pbf from "pbf";
import { Messages, deserialize, serialize } from "./messages";
import { logInput, logOutput } from "./logger";

// --------------------
// Encoding / Decoding
// --------------------
function encodeMessage(message: Messages): Buffer {
  const protoMessage = serialize(message);
  const pbf = new Pbf();
  ProtoMessageUtils.write(protoMessage, pbf);
  const body = pbf.finish();

  const len = Buffer.alloc(4);
  len.writeUInt32BE(body.length, 0);
  return Buffer.concat([len, body]);
}

function tryParseMessage(
  buffer: Buffer,
): { message: Messages; rest: Buffer } | null {
  if (buffer.length < 4) return null; // not enough for length prefix
  const len = buffer.readUInt32BE(0);
  if (buffer.length < 4 + len) return null; // incomplete

  const body = buffer.subarray(4, 4 + len);
  const pbf = new Pbf(body);
  const protoMessage = ProtoMessageUtils.read(pbf);
  const message = deserialize(protoMessage);
  return { message, rest: buffer.subarray(4 + len) };
}

// --------------------
// Protocol Wrapper
// --------------------
export class Protocol {
  constructor(private socket: net.Socket) {}

  /** Async generator of incoming messages */
  async *messages(): AsyncGenerator<Messages> {
    let buffer: Buffer = Buffer.alloc(0);

    for await (const chunk of this.socket) {
      buffer = Buffer.concat([buffer, chunk]);

      while (true) {
        const parsed = tryParseMessage(buffer);
        if (!parsed) break;
        logInput(parsed.message);
        yield parsed.message;
        buffer = parsed.rest;
      }
    }
  }

  /** Send a typed request */
  send(...messages: ReadonlyArray<Messages>) {
    for (const message of messages) {
      logOutput(message);
      this.socket.write(encodeMessage(message));
    }
  }

  /** Close connection */
  close() {
    this.socket.end();
  }
}
