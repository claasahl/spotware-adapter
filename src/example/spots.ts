import {
  SpotwareClientStream,
  Messages,
  ProtoOAPayloadType,
  FACTORY,
  ProtoOASymbol,
} from "..";
import { Events, Symbol } from "./events";

export default class Spots {
  private stream;
  private events;
  private symbol?: ProtoOASymbol;
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
      FACTORY.PROTO_OA_SYMBOL_BY_ID_REQ({
        ctidTraderAccountId,
        symbolId: [this.symbolId],
      })
    );
  }

  onMessage(msg: Messages) {
    switch (msg.payloadType) {
      case ProtoOAPayloadType.PROTO_OA_SYMBOL_BY_ID_RES:
        {
          const { ctidTraderAccountId, symbol: symbols } = msg.payload;
          if (ctidTraderAccountId !== this.ctidTraderAccountId) {
            // skip other accounts
            break;
          } else if (symbols.length !== 1) {
            // should be exactly 1 symbol
            break;
          } else if (symbols[0].symbolId !== this.symbolId) {
            // skip other symbols
            break;
          }
          this.symbol = symbols[0];
          this.stream.write(
            FACTORY.PROTO_OA_SUBSCRIBE_SPOTS_REQ({
              ctidTraderAccountId,
              symbolId: [this.symbolId],
            })
          );
        }
        break;
      case ProtoOAPayloadType.PROTO_OA_SPOT_EVENT: {
        const { ctidTraderAccountId, symbolId, ask, bid } = msg.payload;
        if (ctidTraderAccountId !== this.ctidTraderAccountId) {
          // skip other accounts
          break;
        } else if (symbolId !== this.symbolId) {
          // skip other symbols
          break;
        }
        if (this.symbol) {
          //   console.log(this.symbol);
          this.events;
        }
        const PRECISION = 5;
        const fact0r = Math.pow(10, PRECISION);
        if (ask) {
          console.log("ask:", ask / fact0r);
        }
        if (bid) {
          console.log("bid:", bid / fact0r);
        }
        break;
      }
    }
  }
}
