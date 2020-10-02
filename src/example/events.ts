import { EventEmitter } from "events";

export interface Account {
  ctidTraderAccountId: number;
  authenticated: boolean;
  depositAssetId?: number;
}

export interface Symbol {
  ctidTraderAccountId: number;
  symbolId: number;
  symbolName: string;
  assetClass: string;
}

export interface SpotEvent {
  date: Date;
  symbolId: number;
  ask?: number;
  bid?: number;
}

export declare interface Events extends EventEmitter {
  addListener(event: "account", listener: (account: Account) => void): this;
  addListener(event: "symbol", listener: (symbol: Symbol) => void): this;
  addListener(event: "spot", listener: (spot: SpotEvent) => void): this;

  emit(event: "account", account: Account): boolean;
  emit(event: "symbol", symbol: Symbol): boolean;
  emit(event: "spot", spot: SpotEvent): boolean;

  on(event: "account", listener: (account: Account) => void): this;
  on(event: "symbol", listener: (symbol: Symbol) => void): this;
  on(event: "spot", listener: (spot: SpotEvent) => void): this;

  once(event: "account", listener: (account: Account) => void): this;
  once(event: "symbol", listener: (symbol: Symbol) => void): this;
  once(event: "spot", listener: (spot: SpotEvent) => void): this;

  prependListener(event: "account", listener: (account: Account) => void): this;
  prependListener(event: "symbol", listener: (symbol: Symbol) => void): this;
  prependListener(event: "spot", listener: (spot: SpotEvent) => void): this;

  prependOnceListener(
    event: "account",
    listener: (account: Account) => void
  ): this;
  prependOnceListener(
    event: "symbol",
    listener: (symbol: Symbol) => void
  ): this;
  prependOnceListener(event: "spot", listener: (spot: SpotEvent) => void): this;

  removeListener(event: "account", listener: (account: Account) => void): this;
  removeListener(event: "symbol", listener: (symbol: Symbol) => void): this;
  removeListener(event: "spot", listener: (spot: SpotEvent) => void): this;
}
export class Events extends EventEmitter {}
