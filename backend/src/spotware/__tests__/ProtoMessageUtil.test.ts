import { ProtoMessage } from "../../generated/spotware";

import * as util from "../ProtoMessageUtil";

const SERIALIAZED =
  "0000001c082a120501020304051a11636c69656e74206d657373616765204944";
const DESERIALIZED = {
  clientMsgId: "client message ID",
  payloadType: 42,
  payload: Uint8Array.from([1, 2, 3, 4, 5])
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
});
