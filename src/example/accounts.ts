import {
  SpotwareClientStream,
  Messages,
  ProtoOAPayloadType,
  FACTORY,
} from "..";
import { Events, Account } from "./events";

interface Config {
  clientId: string;
  clientSecret: string;
  accessToken: string;
}

export default class Accounts {
  private stream;
  private config;
  private accounts;
  private events;

  constructor(stream: SpotwareClientStream, config: Config, events: Events) {
    this.stream = stream;
    this.config = config;
    this.accounts = new Map<number, Account>();
    this.events = events;
  }

  onInit() {
    this.stream.write(
      FACTORY.PROTO_OA_APPLICATION_AUTH_REQ({
        clientId: this.config.clientId,
        clientSecret: this.config.clientSecret,
      })
    );
  }

  onMessage(msg: Messages) {
    switch (msg.payloadType) {
      case ProtoOAPayloadType.PROTO_OA_APPLICATION_AUTH_RES:
        this.stream.write(
          FACTORY.PROTO_OA_GET_ACCOUNTS_BY_ACCESS_TOKEN_REQ({
            accessToken: this.config.accessToken,
          })
        );
        break;
      case ProtoOAPayloadType.PROTO_OA_GET_ACCOUNTS_BY_ACCESS_TOKEN_RES:
        msg.payload.ctidTraderAccount.forEach((account) => {
          this.stream.write(
            FACTORY.PROTO_OA_ACCOUNT_AUTH_REQ({
              accessToken: this.config.accessToken,
              ctidTraderAccountId: account.ctidTraderAccountId,
            }),
            () =>
              this.accounts.set(account.ctidTraderAccountId, {
                ctidTraderAccountId: account.ctidTraderAccountId,
                authenticated: false,
              })
          );
        });
        break;
      case ProtoOAPayloadType.PROTO_OA_ACCOUNT_AUTH_RES:
        {
          const { ctidTraderAccountId } = msg.payload;
          const account = this.accounts.get(ctidTraderAccountId);
          if (account) {
            this.accounts.set(ctidTraderAccountId, {
              ...account,
              authenticated: true,
            });
            this.stream.write(
              FACTORY.PROTO_OA_TRADER_REQ({ ctidTraderAccountId })
            );
          }
        }
        break;
      case ProtoOAPayloadType.PROTO_OA_TRADER_RES:
        {
          const { ctidTraderAccountId, depositAssetId } = msg.payload.trader;
          const account = this.accounts.get(ctidTraderAccountId);
          if (account) {
            const newAccount = { ...account, depositAssetId };
            this.accounts.set(ctidTraderAccountId, newAccount);
            this.events.emit("account", newAccount);
          }
        }
        break;
      case ProtoOAPayloadType.PROTO_OA_TRADER_UPDATE_EVENT:
        {
          const { ctidTraderAccountId, depositAssetId } = msg.payload.trader;
          const account = this.accounts.get(ctidTraderAccountId);
          if (account) {
            const newAccount = { ...account, depositAssetId };
            this.accounts.set(ctidTraderAccountId, newAccount);
            this.events.emit("account", newAccount);
          }
        }
        break;
      case ProtoOAPayloadType.PROTO_OA_ACCOUNT_DISCONNECT_EVENT:
        {
          const { ctidTraderAccountId } = msg.payload;
          const account = this.accounts.get(ctidTraderAccountId);
          if (account) {
            const newAccount = { ...account, authenticated: false };
            this.accounts.set(ctidTraderAccountId, newAccount);
            this.events.emit("account", newAccount);
          }

          // attempt to reauthenticate
          if (account?.authenticated) {
            this.stream.write(
              FACTORY.PROTO_OA_ACCOUNT_AUTH_REQ({
                accessToken: this.config.accessToken,
                ctidTraderAccountId: account.ctidTraderAccountId,
              })
            );
          }
        }
        break;
    }
  }
}
