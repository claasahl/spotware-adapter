import {
  SpotwareClientStream,
  Messages,
  ProtoOAPayloadType,
  FACTORY,
  ProtoOAAssetClass,
  ProtoOASymbolCategory,
  ProtoOALightSymbol,
} from "..";
import { Events } from "./events";

export default class Symbols {
  private stream;
  private assetClasses;
  private categories;
  private symbols;
  private events;
  readonly ctidTraderAccountId;

  constructor(
    stream: SpotwareClientStream,
    ctidTraderAccountId: number,
    events: Events
  ) {
    this.stream = stream;
    this.assetClasses = new Map<number, ProtoOAAssetClass>();
    this.categories = new Map<number, ProtoOASymbolCategory>();
    this.symbols = new Map<number, ProtoOALightSymbol>();
    this.events = events;
    this.ctidTraderAccountId = ctidTraderAccountId;
  }

  onInit() {
    const { ctidTraderAccountId } = this;
    this.stream.write(
      FACTORY.PROTO_OA_ASSET_CLASS_LIST_REQ({ ctidTraderAccountId })
    );
  }

  onMessage(msg: Messages) {
    switch (msg.payloadType) {
      case ProtoOAPayloadType.PROTO_OA_ASSET_CLASS_LIST_RES:
        {
          const { ctidTraderAccountId, assetClass: assetClasses } = msg.payload;
          if (ctidTraderAccountId !== this.ctidTraderAccountId) {
            // skip other accounts
            break;
          }
          assetClasses
            .filter((a): a is Required<ProtoOAAssetClass> => !!(a.id && a.name))
            .forEach((a) => this.assetClasses.set(a.id, a));
          this.stream.write(
            FACTORY.PROTO_OA_SYMBOL_CATEGORY_REQ({ ctidTraderAccountId })
          );
        }
        break;
      case ProtoOAPayloadType.PROTO_OA_SYMBOL_CATEGORY_RES:
        {
          const {
            ctidTraderAccountId,
            symbolCategory: categories,
          } = msg.payload;
          if (ctidTraderAccountId !== this.ctidTraderAccountId) {
            // skip other accounts
            break;
          }
          categories.forEach((c) => this.categories.set(c.id, c));
          this.stream.write(
            FACTORY.PROTO_OA_SYMBOLS_LIST_REQ({ ctidTraderAccountId })
          );
        }
        break;
      case ProtoOAPayloadType.PROTO_OA_SYMBOLS_LIST_RES:
        {
          const { ctidTraderAccountId, symbol: symbols } = msg.payload;
          if (ctidTraderAccountId !== this.ctidTraderAccountId) {
            // skip other accounts
            break;
          }
          symbols.forEach((s) => this.symbols.set(s.symbolId, s));
          symbols.forEach((s) => {
            const { symbolId, symbolName, symbolCategoryId, enabled } = s;
            if (symbolId && symbolName && symbolCategoryId && enabled) {
              const category = this.categories.get(symbolCategoryId);
              const assetClass = this.assetClasses.get(
                category?.assetClassId || -1
              );
              if (assetClass?.name) {
                const symbol = {
                  ctidTraderAccountId,
                  symbolId,
                  symbolName,
                  assetClass: assetClass.name,
                };
                this.events.emit("symbol", symbol);
              }
            }
          });
        }
        break;
      case ProtoOAPayloadType.PROTO_OA_SYMBOL_CHANGED_EVENT:
        {
          const { ctidTraderAccountId } = msg.payload;
          if (ctidTraderAccountId !== this.ctidTraderAccountId) {
            // skip other accounts
            break;
          }

          // refetch all symbols
          this.stream.write(
            FACTORY.PROTO_OA_SYMBOLS_LIST_REQ({ ctidTraderAccountId })
          );
        }
        break;
    }
  }
}
