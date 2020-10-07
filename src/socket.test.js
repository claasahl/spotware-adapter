const { PassThrough } = require("stream");
const { SpotwareSocket } = require("../build/socket");

describe("SpotwareSocket", () => {
  describe(".end()", () => {
    test("should emit 'finish' event", (done) => {
      const pt = new PassThrough();
      const s = new SpotwareSocket(pt);
      s.once("finish", done);
      s.end();
    });
  });
});
