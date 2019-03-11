import { ProtoMessage } from "../../generated/spotware";

import * as util from "../ProtoMessageUtil";

const SERIALIAZED = [
  0,
  0,
  0,
  28,
  8,
  42,
  18,
  5,
  1,
  2,
  3,
  4,
  5,
  26,
  17,
  99,
  108,
  105,
  101,
  110,
  116,
  32,
  109,
  101,
  115,
  115,
  97,
  103,
  101,
  32,
  73,
  68
];
const DESERIALIZED = {
  clientMsgId: "client message ID",
  payloadType: 42,
  payload: Uint8Array.from([1, 2, 3, 4, 5])
};

describe("de-/serialize ProtoMessages", () => {
  test("serialize", () => {
    const protoMessage = ProtoMessage.create(DESERIALIZED);
    const buffer = util.serialize(protoMessage);
    expect(buffer).toEqual(Buffer.from(SERIALIAZED));
  });
  test("deserialize without offset", () => {
    const buffer = Buffer.from(SERIALIAZED);
    const protoMessage = util.deserialize(buffer);
    expect(protoMessage).toEqual(DESERIALIZED);
  });
  test("deserialize with offset", () => {
    const buffer = Buffer.from([5, 5, ...SERIALIAZED]);
    const protoMessage = util.deserialize(buffer, 2);
    expect(protoMessage).toEqual(DESERIALIZED);
  });
  test("deserialize with too small buffer", () => {
    const buffer = Buffer.from(SERIALIAZED).slice(0, 15);
    const actual = () => util.deserialize(buffer);
    expect(actual).toThrowError("buffer not large enough");
  });
  test("deserialize with too large offset", () => {
    const buffer = Buffer.from(SERIALIAZED);
    const actual = () => util.deserialize(buffer, 2);
    expect(actual).toThrow("buffer not large enough");
  });
});
