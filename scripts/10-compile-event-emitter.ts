import { messages } from "../assets/message-map.json";

const stream = process.stdout;

stream.write('import { EventEmitter } from "events";\n');
stream.write("\n");
stream.write('import * as $spotware from "./spotware-messages";\n');
stream.write('import SpotwareEvents from "./spotware-events";\n');
stream.write("\n");
stream.write(
  "type Listener<T> = (message: T, clientMsgId?: string | null) => void;\n"
);
stream.write("export interface SpotwareEventEmitter extends EventEmitter {\n");
for (const message of messages) {
  const { payloadType, type } = message;
  if (type === "ProtoMessage") {
    stream.write(
      `emit(event: "${payloadType}", message: $spotware.I${type}): boolean;\n`
    );
    stream.write(
      `on(event: "${payloadType}", listener: (message: $spotware.I${type}) => void): this;\n`
    );
    stream.write(
      `off(event: "${payloadType}", listener: (message: $spotware.I${type}) => void): this;\n`
    );
    stream.write(
      `once(event: "${payloadType}", listener: (message: $spotware.I${type}) => void): this;\n`
    );
    stream.write(
      `addListener(event: "${payloadType}", listener: (message: $spotware.I${type}) => void): this;\n`
    );
    stream.write(
      `removeListener(event: "${payloadType}", listener: (message: $spotware.I${type}) => void): this;\n`
    );
    stream.write(
      `prependListener(event: "${payloadType}", listener: (message: $spotware.I${type}) => void): this;\n`
    );
    stream.write(
      `prependOnceListener(event: "${payloadType}", listener: (message: $spotware.I${type}) => void): this;\n`
    );
  } else {
    stream.write(
      `emit(event: "${payloadType}", message: $spotware.I${type}, clientMsgId?: string | null): boolean;\n`
    );
    stream.write(
      `on(event: "${payloadType}", listener: Listener<$spotware.I${type}>): this;\n`
    );
    stream.write(
      `off(event: "${payloadType}", listener: Listener<$spotware.I${type}>): this;\n`
    );
    stream.write(
      `once(event: "${payloadType}", listener: Listener<$spotware.I${type}>): this;\n`
    );
    stream.write(
      `addListener(event: "${payloadType}", listener: Listener<$spotware.I${type}>): this;\n`
    );
    stream.write(
      `removeListener(event: "${payloadType}", listener: Listener<$spotware.I${type}>): this;\n`
    );
    stream.write(
      `prependListener(event: "${payloadType}", listener: Listener<$spotware.I${type}>): this;\n`
    );
    stream.write(
      `prependOnceListener(event: "${payloadType}", listener: Listener<$spotware.I${type}>): this;\n`
    );
  }
}
stream.write(`removeAllListeners(event?: SpotwareEvents): this;\n`);
stream.write(`listenerCount(event: SpotwareEvents): number;\n`);
stream.write(`listeners(event: SpotwareEvents): Function[];\n`);
stream.write(`rawListeners(event: SpotwareEvents): Function[];\n`);
stream.write(`// TODO: eventNames(): SpotwareEvents[];\n`);
stream.write("}\n");
stream.write("export default SpotwareEventEmitter;");
