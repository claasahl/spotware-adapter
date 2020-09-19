import tls from "tls";
import { Transform, TransformCallback } from "stream";
import { read } from "./readProtoMessages";
import debug from "debug";

import { ProtoMessages } from "./spotware-messages";
import { write } from "./writeProtoMessages";

export class BinaryToSpotware extends Transform {
  log;

  constructor(log: debug.Debugger) {
    super({ readableObjectMode: true, defaultEncoding: "binary" });
    this.log = log;
  }

  _transform(
    chunk: any,
    _encoding: BufferEncoding,
    callback: TransformCallback
  ): void {
    if (!Buffer.isBuffer(chunk)) {
      return;
    }
    const msg = read(chunk);
    this.log("%j", msg);
    callback(null, msg);
  }
}
export class SpotwareToBinary extends Transform {
  log;

  constructor(log: debug.Debugger) {
    super({ writableObjectMode: true, defaultEncoding: "binary" });
    this.log = log;
  }

  _transform(
    chunk: any,
    _encoding: BufferEncoding,
    callback: TransformCallback
  ): void {
    const msg = chunk as ProtoMessages;
    this.log("%j", msg);
    const data = write(msg);
    callback(null, data);
  }
}

export function connect(
  port: number,
  host: string,
  options?: tls.ConnectionOptions
) {
  const socket = tls
    .connect(port, host, options)
    .setEncoding("binary")
    .setDefaultEncoding("binary");

  const input = debug("spotware").extend("input");
  const read = socket.pipe(new BinaryToSpotware(input));
  read.prependListener("error", (err) => input.extend("error")(err));
  read.prependListener("close", () =>
    input.extend("close")("no more events will be emitted.")
  );
  read.prependListener("end", () =>
    input.extend("end")("there is no more data to be consumed.")
  );
  read.prependListener("pause", () =>
    input.extend("pause")("entered paused mode.")
  );
  read.prependListener("readable", () =>
    input.extend("readable")("new data available / end of stream")
  );
  read.prependListener("resume", () =>
    input.extend("resume")("entered flowing mode.")
  );

  const output = debug("spotware").extend("output");
  const write = new SpotwareToBinary(output);
  write.pipe(socket);
  write.prependListener("error", (err) => output.extend("error")(err));
  write.prependListener("close", () =>
    output.extend("close")("no more events will be emitted.")
  );
  write.prependListener("drain", () =>
    output.extend("drain")("ok to resume writing data.")
  );
  write.prependListener("finish", () =>
    output.extend("finish")("all data has been flushed.")
  );
  write.prependListener("pipe", () =>
    output.extend("pipe")("something started writing to 'me'.")
  );
  write.prependListener("unpipe", () =>
    output.extend("unpipe")("something stopped writing to 'me'.")
  );

  return { read, write };
}
