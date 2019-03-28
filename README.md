# spotware-connect-api

Protocol Buffers and Data Models for Spotware Open API 2.0

This client is based on `TLSSocket` and exposes every Spotware message via `EventEmitter` functions (i.e. `on`, `off`, `once`, `emit`).

## Pitfall

The `EventEmitter` class exposes several functions for managing listeners and emitting events. For your convenience, this library provides [overloads](http://www.typescriptlang.org/docs/handbook/functions.html#overloads) for spotware events, including typed parameters and listeners. While these overloads do hint at the correct types, they do not guarantee correctly typed parameters or listeners. Instead, it is recommended to use utility methods like `onMessage` or `emitMessage`.

the nature of Typescript is such that it will fallback to more generic overloads if the types of.

### Don't

```typescript
emitter.emit("HEARTBEAT_EVENT", {});

const msg: IHeartbeat = {};
emitter.emit("HEARTBEAT_EVENT", msg);
```

### Do

```typescript
emitter.emitMessage("HEARTBEAT_EVENT", {});
```
