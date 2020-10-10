const { PassThrough } = require("stream");
const { SpotwareSocket } = require("../build/socket");

jest.setTimeout(100); // 0.1 second

describe("SpotwareSocket", () => {
  describe("should emit events", () => {
    test("close", (done) => {
      const pt = new PassThrough();
      const s = new SpotwareSocket(pt);
      s.once("close", done);
      s.destroy();
    });

    test("error", (done) => {
      const pt = new PassThrough();
      const s = new SpotwareSocket(pt);
      s.once("error", () => done());
      s.destroy(new Error("something went totally south"));
    });

    test("finish", (done) => {
      const pt = new PassThrough();
      const s = new SpotwareSocket(pt);
      s.once("finish", done);
      s.end();
    });
  });

  describe("should forward events", () => {
    test("finish", (done) => {
      const pt = new PassThrough();
      const s = new SpotwareSocket(pt);
      const callMe = jest.fn();
      s.resume();

      s.once("finish", () => {
        expect(callMe).toHaveBeenCalled();
        done();
      });
      pt.once("finish", callMe);
      pt.end();
    });

    test("close", (done) => {
      const pt = new PassThrough();
      const s = new SpotwareSocket(pt);
      const callMe = jest.fn();
      s.resume();

      s.once("close", () => {
        expect(callMe).toHaveBeenCalled();
        done();
      });
      pt.once("close", callMe);
      pt.destroy();
    });

    test("end", (done) => {
      const pt = new PassThrough();
      const s = new SpotwareSocket(pt);
      const callMe = jest.fn();
      s.resume();

      s.once("end", () => {
        expect(callMe).toHaveBeenCalled();
        done();
      });
      pt.once("end", callMe);
      pt.end();
    });

    test("error", (done) => {
      const pt = new PassThrough();
      const s = new SpotwareSocket(pt);
      const callMe = jest.fn();
      s.resume();

      s.once("error", () => {
        expect(callMe).toHaveBeenCalled();
        done();
      });
      pt.once("error", callMe);
      pt.destroy(new Error("something went wrong"));
    });
  });

  describe("backpressure", () => {
    const HEARTBEAT = Buffer.from("000000080000000408331200", "hex");

    test("should built up backpressure", () => {
      // ... currently, SpotwareSocket creates a buffer of inifite size! Use transforms
      const src = new PassThrough({ highWaterMark: 24 });
      new SpotwareSocket(src);

      // src has two buffers for up 24 bytes each (total 48 bytes)
      // every HEARTBEAT is 12 bytes long
      expect(src.write(HEARTBEAT)).toBe(true); // 25% full
      expect(src.write(HEARTBEAT)).toBe(true); // 50% full
      expect(src.write(HEARTBEAT)).toBe(true); // 75% full
      expect(src.write(HEARTBEAT)).toBe(false); // 100% full
    });

    test("should release backpressure", (done) => {
      const src = new PassThrough({ highWaterMark: 24 });
      const dst = new SpotwareSocket(src);

      // src has two buffers for up 24 bytes each (total 48 bytes)
      // every HEARTBEAT is 12 bytes long
      src.write(HEARTBEAT); // 25% full
      src.write(HEARTBEAT); // 50% full
      src.write(HEARTBEAT); // 75% full
      src.write(HEARTBEAT); // 100% full

      src.on("drain", done);
      dst.resume();
    });
  });

  // FIXME SpotwareClient should error if incoming data is corrupt
});

describe("PassThrough - Reference Tests", () => {
  const BYTE = Buffer.alloc(1);

  test("should built up backpressure", () => {
    const src = new PassThrough({ highWaterMark: 2 });
    const dst = new PassThrough({ highWaterMark: 3, objectMode: true });
    src.pipe(dst);

    // src has two buffers for up to 2 bytes each (total 4 bytes)
    // dst has two buffers for up to 3 objects each (total 6 objects)
    expect(src.write(BYTE)).toBe(true); // 10%
    expect(src.write(BYTE)).toBe(true); // 20%
    expect(src.write(BYTE)).toBe(true); // 30%
    expect(src.write(BYTE)).toBe(true); // 40%
    expect(src.write(BYTE)).toBe(true); // 50%
    expect(src.write(BYTE)).toBe(true); // 60%
    expect(src.write(BYTE)).toBe(true); // 70%
    expect(src.write(BYTE)).toBe(true); // 80%
    expect(src.write(BYTE)).toBe(true); // 90%
    expect(src.write(BYTE)).toBe(false); // 100%
  });

  test("should release backpressure", (done) => {
    const src = new PassThrough({ highWaterMark: 2 });
    const dst = new PassThrough({ highWaterMark: 3, objectMode: true });
    src.pipe(dst);

    // src has two buffers for up to 2 bytes each (total 4 bytes)
    // dst has two buffers for up to 3 objects each (total 6 objects)
    src.write(BYTE); // 10%
    src.write(BYTE); // 20%
    src.write(BYTE); // 30%
    src.write(BYTE); // 40%
    src.write(BYTE); // 50%
    src.write(BYTE); // 60%
    src.write(BYTE); // 70%
    src.write(BYTE); // 80%
    src.write(BYTE); // 90%
    src.write(BYTE); // 100%

    src.on("drain", done);
    dst.resume();
  });
});
