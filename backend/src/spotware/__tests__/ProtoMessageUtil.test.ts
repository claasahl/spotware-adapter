import { ProtoMessage } from "../../generated/spotware";

import * as util from "../ProtoMessageUtil";

const SERIALIAZED =
  "0000001c082a120501020304051a11636c69656e74206d657373616765204944";
const DESERIALIZED = {
  clientMsgId: "client message ID",
  payloadType: 42,
  payload: Buffer.from([1, 2, 3, 4, 5])
};

describe("de-/serialize ProtoMessages", () => {
  test("serialize", () => {
    const protoMessage = ProtoMessage.create(DESERIALIZED);
    const buffer = util.serialize(protoMessage);
    expect(buffer).toEqual(Buffer.from(SERIALIAZED, "hex"));
  });
  test("deserialize without offset", () => {
    const buffer = Buffer.from(SERIALIAZED, "hex");
    const protoMessage = util.deserialize(buffer);
    expect(protoMessage).toEqual(DESERIALIZED);
  });
  test("deserialize with offset", () => {
    const buffer = Buffer.from("0000" + SERIALIAZED, "hex");
    const protoMessage = util.deserialize(buffer, 2);
    expect(protoMessage).toEqual(DESERIALIZED);
  });
  test("deserialize with too small buffer", () => {
    const buffer = Buffer.from(SERIALIAZED, "hex").slice(0, 15);
    const actual = () => util.deserialize(buffer);
    expect(actual).toThrowError("buffer not large enough");
  });
  test("deserialize with too large offset", () => {
    const buffer = Buffer.from(SERIALIAZED, "hex");
    const actual = () => util.deserialize(buffer, 2);
    expect(actual).toThrow("buffer not large enough");
  });
  test("serialize + deserialize + serialize", () => {
    const protoMessage = ProtoMessage.create(DESERIALIZED);
    const buffer1 = util.serialize(protoMessage);

    const TMP = util.deserialize(buffer1);
    const buffer2 = util.serialize(TMP);
    expect(buffer1).toEqual(buffer2);
  });
  test("deserialize + serialize + deserialize", () => {
    const buffer = Buffer.from(SERIALIAZED, "hex");
    const protoMessage1 = util.deserialize(buffer);

    const buffer1 = util.serialize(protoMessage1);
    const protoMessage2 = util.deserialize(buffer1);
    expect(protoMessage1).toEqual(protoMessage2);
  });
});
