# [Open API v2](https://connect.spotware.com/docs/open_api_2)

## Important Links

- [Open API v2](https://connect.spotware.com/docs/open_api_2)
- [Terms of Use](https://connect.spotware.com/docs/terms-of-use)

## Technologies

- [protobuf](https://developers.google.com/protocol-buffers/)
- [oauth2](https://oauth.net/2/) / [rfc6749](https://tools.ietf.org/html/rfc6749) / [playground](https://www.oauth.com/playground/)

## Glossary

- [cTID](https://help.ctrader.com/ctrader/getting-started/ctid): cTrader ID

### cTrader ID

A cTrader ID (cTID) is a set of credentials used for signing in across all cTrader platforms. A cTID is different from a trading account. An account number is a seven digit number used for logging into your account with a broker, a trading account can only be used with the specific broker it belongs to.

## Introduction

The `Open API 2.0` is the second version of the publicly available protobuf-based API developed by Spotware. Unlike the previous Open API (i.e. version 1.0), which was using a different protocol for each scope (REST and Protocol Buffers), the `Open API 2.0` is designed to use solely protocol buffers. Now by using Protocol Buffers you can retrieve accounts information, market data, and trading data. The API is open for everyone with no restrictions (see `Terms of Use`) and it is supported by all trading accounts of any cTrader supported brokers.

## OAuth 2

### Scopes

- `Accounts` scope: to request for access to the Account Info (trading history, positions, pending orders, etc.)
- `Trading` scope: to request for permissions to perform trading actions on behalf of Account owner (send market and pending orders, receive trading events, etc.)

### Services

- [auth](https://sandbox-connect.spotware.com/apps/auth) - can be used to authorize resource (trading account) owners.
- [token](https://sandbox-connect.spotware.com/apps/token) - can be used to refresh or obtain tokens.

### Grant Types

- `Authorization Code`:
  > The Authorization Code grant type is used by confidential and public clients to exchange an authorization code for an access token.
  > After the user returns to the client via the redirect URL, the application will get the authorization code from the URL and use it to request an access token. [source](https://oauth.net/2/grant-types/authorization-code/)
- `Refresh Token`:
  > The Refresh Token grant type is used by clients to exchange a refresh token for an access token when the access token has expired
  > This allows clients to continue to have a valid access token without further interaction with the user.[source](https://oauth.net/2/grant-types/refresh-token/)

## Getting Started

1. [log In](https://connect.spotware.com) with cTID
1. select [application](https://connect.spotware.com/apps)
1. view `development` application (see [screenshot](./assests/Screenshot_2019-02-20%20Applications%20Spotware%20Connect.png))
1. take note of `credentials` for `development` application

## Protobuf Hosts

### Open API v1

- tradeapi.spotware.com:5032 [source](https://github.com/spotware/connect-xamarin-samples/blob/3a93a3c934b70bf2343294187a50b8dd5ab702ac/OpenTrader/App.cs#L18)
- sandbox-tradeapi.spotware.com:5032 [source](https://github.com/spotware/connect-js-codec/blob/4521ffb67243c6598c20eb508da46178843761dd/test.js#L13)[source](https://github.com/spotware/connect-js-adapter-tls/blob/2c0ed63d6b88b1c0943dba5513781fc8e309a401/test/drop.js#L14)[source](https://github.com/spotware/connect-js-api/blob/bc53fde9b88a26c6c3b06d668b91a7a3114b19e8/spec/connect_nodejs_samples.js#L29)
- demo-hub-cons.p.ctrader.com:5032 [source](https://github.com/spotware/connect-java-tutorials/blob/d6a132256f487b76667f51ec0fb73dbcaef35d13/Lesson%204.%20Using%20Trading%20API/src/main/java/com/mycompany/app/TradingApiTest.java#L27)

### Open API v2

- 127.0.0.1:5035 [source](https://github.com/spotware/ctrader-open-api-v2-java-example/blob/ec41867f0aa22507f84fcb61bd107a828682863a/openapi2-example/src/main/resources/application.properties#L1)
- demo.ctraderapi.com:5035 [source](https://github.com/spotware/Open-API-2.0-.Net-Sample/blob/8b22c57996dd1ffab9b78df51957062a330a66c5/Open%20API%202.0%20Sample/Main.cs#L20)[source](https://github.com/spotware/Open-API-2.0-.Net-Sample/blob/8b22c57996dd1ffab9b78df51957062a330a66c5/Open%20API%202.0%20Sample/Open%20API%202.0%20Sample/Main.cs#L20)
