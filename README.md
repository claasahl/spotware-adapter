# ALPHA VERSION

Currently, the most juicy bits and peaces of this package are:

- generated data models for spotware messages
- latest set of protocolbuf files

## Upcoming Changes

- a typescript/javascript client for communicating with spotware open api v2 servers
- client is likely to be based on [`TLSSocket`](https://nodejs.org/dist/latest-v10.x/docs/api/tls.html#tls_class_tls_tlssocket) and [`EventEmitter`](https://nodejs.org/dist/latest-v10.x/docs/api/events.html#events_class_eventemitter)
- client might be moved into a dedicated package

# -----

# spotware-connect-api

Protocol Buffers and Data Models for Spotware Open API 2.0

This client is based on `TLSSocket` and exposes every Spotware message via `EventEmitter` functions (i.e. `on`, `off`, `once`, `emit`).

## Client and Backbone

The backbone of this client for the Spotware Open API V2 is a NodeJS `EventEmitter`. Requests, responses and events are funneled through the `EventEmitter`.

One can listen and react to Spotware messages (i.e. any request being sent, any received response and any received/emitted event) by registering a listener.

```typescript
import {
  connect,
  fromProtoMessage,
  toProtoMessage,
  writeProtoMessage
} from "@claasahl/spotware-connecti-api";

// establish connection
const client = connect(
  5035,
  "live.ctraderapi.com"
);

// handle (incoming) proto messages
client.on("PROTO_MESSAGE", (message, payloadType) => {
  console.log(payloadType);
  switch (payloadType) {
    case "ERROR_RES": {
      const msg = fromProtoMessage("ERROR_RES", message);
      console.log(msg);
      break;
    }
    case "PROTO_OA_VERSION_REQ": {
      const msg = fromProtoMessage("PROTO_OA_VERSION_REQ", message);
      console.log(msg);
      break;
    }
    case "PROTO_OA_VERSION_RES": {
      const msg = fromProtoMessage("PROTO_OA_VERSION_RES", message);
      console.log(msg);
      break;
    }
  }
});

// write (outgoing) proto messages
setInterval(() => {
  const message = toProtoMessage("HEARTBEAT_EVENT", {});
  writeProtoMessage(client, message);
}, 10000);

writeProtoMessage(client, toProtoMessage("PROTO_OA_VERSION_REQ", {}));
```

The `EventEmitter`-interface has been specialized to accept only Spotware messages.

This client treats Spotware messages like so.
