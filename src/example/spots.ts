import {
  SpotwareClientStream,
  Messages,
  ProtoOAPayloadType,
  FACTORY,
} from "..";
import { Events, SpotEvent, Symbol } from "./events";

const FACTOR = Math.pow(10, 5);

export default class Spots {
  private stream;
  private events;
  readonly ctidTraderAccountId;
  readonly symbolId;

  constructor(stream: SpotwareClientStream, symbol: Symbol, events: Events) {
    this.stream = stream;
    this.events = events;
    this.ctidTraderAccountId = symbol.ctidTraderAccountId;
    this.symbolId = symbol.symbolId;
  }

  onInit() {
    const { ctidTraderAccountId } = this;
    this.stream.write(
      FACTORY.PROTO_OA_SUBSCRIBE_SPOTS_REQ({
        ctidTraderAccountId,
        symbolId: [this.symbolId],
      })
    );
  }

  onMessage(msg: Messages) {
    switch (msg.payloadType) {
      case ProtoOAPayloadType.PROTO_OA_SPOT_EVENT:
        {
          const { ctidTraderAccountId, symbolId, ask, bid } = msg.payload;
          if (ctidTraderAccountId !== this.ctidTraderAccountId) {
            // skip other accounts
            break;
          } else if (symbolId !== this.symbolId) {
            // skip other symbols
            break;
          }
          this.events.emit("spot", {
            date: new Date(),
            symbolId,
            ask: ask ? ask / FACTOR : undefined,
            bid: bid ? bid / FACTOR : undefined,
          });
        }
        break;
    }
  }
}
