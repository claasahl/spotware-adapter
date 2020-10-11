# @claasahl/spotware-adapter

![NPM - version](https://img.shields.io/npm/dw/@claasahl/spotware-adapter.svg)
![NPM - downloads](https://img.shields.io/npm/v/@claasahl/spotware-adapter.svg)

# ALPHA VERSION

Use this package's `SpotwareClientSocket` to communicate with [Spotware Open API](https://connect.spotware.com/docs/open_api_2) servers in NodeJS environments. It comes with **TypeScript** support for all Spotware ProtoBuffer meesages, it sticks to recommended `heartbeat`-intervals and recommended rate limits (see [here](https://connect.spotware.com/docs/frequently-asked-questions)).

- [Example: Client](#example-client)
- [Example: Server](#example-server)
- [Getting Started](#getting-started)
- [Debugging](#debugging)
- [Further Reading](#further-reading)

## Example: Client

Want to exchange messages with a Spotware Open API server? This is for you:

```typescript
import tls from "tls";
import { SpotwareClientSocket, ProtoOAPayloadType, FACTORY } from "..";

const host = "demo.ctraderapi.com";
const port = 5035;

const socket = tls.connect(port, host);
socket.once("secureConnect", () => {
  console.log(`requesting version number from ${host}:${port}`);
  s.write(FACTORY.PROTO_OA_VERSION_REQ());
});

const s = new SpotwareClientSocket(socket);
s.on("data", (message) => {
  switch (message.payloadType) {
    case ProtoOAPayloadType.PROTO_OA_VERSION_RES:
      console.log(`got response from ${host}:${port}`);
      console.log(`server version: ${message.payload.version}`);
      s.end();
      break;
    // ...
  }
});
```

Or take this **RunKit** for a spin: https://runkit.com/claasahl/spotware-example-client

## Example: Server

Want to test your client without sending messages over the wire? Take a peek at this:

```typescript
import { Server } from "net";
import {
  SpotwareSocket,
  ProtoOAPayloadType,
  FACTORY,
} from "@claasahl/spotware-adapter";

const port = 5035;

const server = new Server((socket) => {
  const address = socket.address();
  const source = typeof address === "string" ? address : address.address;
  console.log(`${source} connected`);

  const s = new SpotwareSocket(socket);
  s.on("error", (err) => console.log(source, err));
  s.on("data", (message) => {
    const { clientMsgId } = message;
    switch (message.payloadType) {
      case ProtoOAPayloadType.PROTO_OA_VERSION_REQ:
        s.write(FACTORY.PROTO_OA_VERSION_RES({ version: "00" }, clientMsgId));
        break;
      // ...
    }
  });
});
server.listen(port, () => console.log(`listening on port ${port}`));
```

## Getting Started

For a meaningful interaction with a Spotware Open API server, such as `live.ctraderapi.com:5035` or `demo.ctraderapi.com:5035`, you will need:

1. an account at [Spotware](https://connect.spotware.com) 🥁
1. a set of OAUTH credentials (i.e. `clientId` and `clientSecret`)
   - navigate to [applications](https://connect.spotware.com/apps)
   - view credentials for one of your applications (or create a new application)
1. a set of OAUTH tokens (i.e. `accessToken` and `refreshToken`)
   - navigate to [applications](https://connect.spotware.com/apps)
   - open `playground` for one of your applications
   - fetch tokens for one or more of your accounts

## Debugging

This package uses [`debug`](https://www.npmjs.com/package/debug) for logging. These namespaces are supported:

- `spotware.input` incoming message from server
- `spotware.input.human` incoming message from server with humanreadable payloadType
- `spotware.output` outgoing message to server
- `spotware.output.human` outgoing message to server with humanreadable payloadType
- `spotware.${payloadType}` any proto message (i.e. incoming or outgoing)
- `spotware.${payloadTypeText}` any proto message (i.e. incoming or outgoing)

## Further Reading

- [Spotware Open API v2](https://connect.spotware.com/docs/open_api_2)
- [Spotware Open API - Terms of Use](https://connect.spotware.com/docs/terms-of-use)
- [protobuf](https://developers.google.com/protocol-buffers/)
- [oauth2](https://oauth.net/2/) / [rfc6749](https://tools.ietf.org/html/rfc6749)
- [online decoder for protobuf messages](https://protogen.marcgravell.com/decode)
