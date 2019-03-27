# spotware-connect-api

Protocol Buffers and Data Models for Spotware Open API 2.0

This client is based on `TLSSocket` and exposes every Spotware message via `EventEmitter` functions (i.e. `on`, `off`, `once`, `emit`).

## Pitfall

The `EventEmitter` class exposes several functions for managing listeners and emitting events. For your convenience, this library provides [overloads](http://www.typescriptlang.org/docs/handbook/functions.html#overloads) for spotware events, including typed parameters and listeners.

```typescript
emitter.emit("HEARTBEAT_EVENT", {});
```

However, the nature of Typescript is such that it will fallback to more generic overloads if the types of.

To counteract this, it is recommended to either use the utility methods (e.g. `onHeartbeat`, `emitHeartbeat`)

```typescript
emitter.emitHeartbeat({});
emitter.emitMessage("HEARTBEAT_EVENT", {});
```

Alternatively, one can take extra care to ensure that parameters are explicitly typed.

```typescript
const msg: IHeartbeat = {};
emitter.emit("HEARTBEAT_EVENT", msg);
```
