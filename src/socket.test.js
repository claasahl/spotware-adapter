const { PassThrough } = require("stream");
const { SpotwareSocket } = require("../build/socket");

jest.setTimeout(100); // 0.1 second

describe("SpotwareSocket", () => {
  describe("emit events", () => {
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

  describe("forward events", () => {
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
