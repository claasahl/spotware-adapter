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

  // FIXME backpressure support
});

describe("PassThrough - Reference Tests", () => {
  const SRC_HIGH = 2; // bytes
  const DST_HIGH = 3; // objects
  const BYTE = Buffer.alloc(1);

  test("should built up backpressure", () => {
    const src = new PassThrough({ highWaterMark: SRC_HIGH });
    const dst = new PassThrough({ highWaterMark: DST_HIGH, objectMode: true });
    src.pipe(dst);

    const MULTIPLICATOR = 2; // both readable and writable highWaterMark
    for (let a = 1; a < MULTIPLICATOR * (SRC_HIGH + DST_HIGH); a++) {
      expect(src.write(BYTE)).toBe(true);
    }
    expect(src.write(BYTE)).toBe(false);
  });

  test("should release backpressure", (done) => {
    const src = new PassThrough({ highWaterMark: SRC_HIGH });
    const dst = new PassThrough({ highWaterMark: DST_HIGH, objectMode: true });
    src.pipe(dst);

    const MULTIPLICATOR = 2; // both readable and writable highWaterMark
    for (let a = 0; a < MULTIPLICATOR * (SRC_HIGH + DST_HIGH); a++) {
      src.write(BYTE);
    }

    src.on("drain", done);
    dst.resume();
  });
});
