import { ProtoOAQuoteType } from "@claasahl/spotware-protobuf";
import ms from "ms";
import {
  SpotwareClientSocket,
  Messages,
  ProtoOAPayloadType,
  FACTORY,
} from "..";
import { Events, SpotEvent, Symbol } from "./events";

const FACTOR = Math.pow(10, 5);

export default class Spots {
  private stream;
  private events;
  private toTimestamp;
  private fromTimestamp;
  private askClientMsgId = "4BD4794ECAFDAE137BADA498D6CCFB51";
  private bidClientMsgId = "988DAC7C9E6EE91644787917EF2E27B9";
  private shouldCache;
  private asks: SpotEvent[];
  private bids: SpotEvent[];
  private spots: SpotEvent[];
  readonly ctidTraderAccountId;
  readonly symbolId;

  constructor(stream: SpotwareClientSocket, symbol: Symbol, events: Events) {
    this.stream = stream;
    this.events = events;
    this.toTimestamp = Date.now();
    this.fromTimestamp = this.toTimestamp - ms("1d");
    this.shouldCache = true;
    this.asks = [];
    this.bids = [];
    this.spots = [];
    this.ctidTraderAccountId = symbol.ctidTraderAccountId;
    this.symbolId = symbol.symbolId;
  }

  onInit() {
    const {
      ctidTraderAccountId,
      fromTimestamp,
      toTimestamp,
      askClientMsgId,
    } = this;
    this.stream.write(
      FACTORY.PROTO_OA_SUBSCRIBE_SPOTS_REQ({
        ctidTraderAccountId,
        symbolId: [this.symbolId],
      })
    );
    this.stream.write(
      FACTORY.PROTO_OA_GET_TICKDATA_REQ(
        {
          ctidTraderAccountId,
          symbolId: this.symbolId,
          fromTimestamp,
          toTimestamp,
          type: ProtoOAQuoteType.ASK,
        },
        askClientMsgId
      )
    );
    // this.stream.write(
    //   FACTORY.PROTO_OA_GET_TICKDATA_REQ({
    //     ctidTraderAccountId,
    //     symbolId: this.symbolId,
    //     fromTimestamp,
    //     toTimestamp,
    //     type: ProtoOAQuoteType.BID
    //   }, bidClientMsgId)
    // );
  }

  onMessage(msg: Messages) {
    switch (msg.payloadType) {
      case ProtoOAPayloadType.PROTO_OA_GET_TICKDATA_RES:
        {
          const { ctidTraderAccountId, tickData, hasMore } = msg.payload;
          if (ctidTraderAccountId !== this.ctidTraderAccountId) {
            // skip other accounts
            break;
          } else if (!this.shouldCache) {
            // no more caching
            break;
          }
          if (msg.clientMsgId === this.askClientMsgId) {
            this.asks.push(
              ...tickData.map((t) => ({
                date: new Date(t.timestamp),
                symbolId: this.symbolId,
                ask: t.tick / FACTOR,
              }))
            );
          } else if (msg.clientMsgId === this.bidClientMsgId) {
            this.bids.push(
              ...tickData.map((t) => ({
                date: new Date(t.timestamp),
                symbolId: this.symbolId,
                bid: t.tick / FACTOR,
              }))
            );
          }

          if (
            hasMore &&
            msg.clientMsgId === this.askClientMsgId &&
            tickData.length > 0
          ) {
            const toTimestamp = tickData[0].timestamp;
            this.stream.write(
              FACTORY.PROTO_OA_GET_TICKDATA_REQ(
                {
                  ctidTraderAccountId,
                  symbolId: this.symbolId,
                  fromTimestamp: this.fromTimestamp,
                  toTimestamp,
                  type: ProtoOAQuoteType.ASK,
                },
                msg.clientMsgId
              )
            );
          } else if (
            hasMore &&
            msg.clientMsgId === this.bidClientMsgId &&
            tickData.length > 0
          ) {
            const toTimestamp = tickData[0].timestamp;
            this.stream.write(
              FACTORY.PROTO_OA_GET_TICKDATA_REQ(
                {
                  ctidTraderAccountId,
                  symbolId: this.symbolId,
                  fromTimestamp: this.fromTimestamp,
                  toTimestamp,
                  type: ProtoOAQuoteType.BID,
                },
                msg.clientMsgId
              )
            );
          } else if (!hasMore) {
            // done
            console.log("skdf");
          }
        }
        break;
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

          const event = {
            date: new Date(),
            symbolId,
            ask: ask ? ask / FACTOR : undefined,
            bid: bid ? bid / FACTOR : undefined,
          };
          if (this.shouldCache) {
            this.spots.push(event);
          } else {
            this.events.emit("spot", event);
          }
        }
        break;
    }
  }
}
