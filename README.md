# [Open API v2](https://connect.spotware.com/docs/open_api_2)

## Important Links

* [Open API v2](https://connect.spotware.com/docs/open_api_2)
* [Terms of Use](https://connect.spotware.com/docs/terms-of-use)

## Technologies

* [protobuf](https://developers.google.com/protocol-buffers/)
* [oauth2](https://oauth.net/2/) / [rfc6749](https://tools.ietf.org/html/rfc6749) / [playground](https://www.oauth.com/playground/)

## Glossary

* [cTID](https://help.ctrader.com/ctrader/getting-started/ctid): cTrader ID

### cTrader ID
A cTrader ID (cTID) is a set of credentials used for signing in across all cTrader platforms. A cTID is different from a trading account. An account number is a seven digit number used for logging into your account with a broker, a trading account can only be used with the specific broker it belongs to.

## Introduction

The `Open API 2.0` is the second version of the publicly available protobuf-based API developed by Spotware. Unlike the previous Open API (i.e. version 1.0), which was using a different protocol for each scope (REST and Protocol Buffers), the `Open API 2.0` is designed to use solely protocol buffers. Now by using Protocol Buffers you can retrieve accounts information, market data, and trading data. The API is open for everyone with no restrictions (see `Terms of Use`) and it is supported by all trading accounts of any cTrader supported brokers.

## OAuth 2

### Scopes

* `Accounts` scope: to request for access to the Account Info (trading history, positions, pending orders, etc.)
* `Trading` scope: to request for permissions to perform trading actions on behalf of Account owner (send market and pending orders, receive trading events, etc.)

### Services

* [auth](https://sandbox-connect.spotware.com/apps/auth) - can be used to authorize resource (trading account) owners.
* [token](https://sandbox-connect.spotware.com/apps/token) - can be used to refresh or obtain tokens.

### Grant Types

* `Authorization Code`:
  > The Authorization Code grant type is used by confidential and public clients to exchange an authorization code for an access token. 
  > After the user returns to the client via the redirect URL, the application will get the authorization code from the URL and use it to request an access token. [source](https://oauth.net/2/grant-types/authorization-code/)
* `Refresh Token`:
  > The Refresh Token grant type is used by clients to exchange a refresh token for an access token when the access token has expired
  > This allows clients to continue to have a valid access token without further interaction with the user.[source](https://oauth.net/2/grant-types/refresh-token/)

## Getting Started

1. [log In](https://connect.spotware.com) with cTID
1. select [application](https://connect.spotware.com/apps)
1. view `development` application (see [screenshot](./assests/Screenshot_2019-02-20%20Applications%20Spotware%20Connect.png))
1. take note of `credentials` for `development` application
