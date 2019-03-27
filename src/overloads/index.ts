import { EmitOverloads } from "./emit";
import { EmitMessageOverloads } from "./emitMessage";
import { OnOverloads } from "./on";
import { OnMessageOverloads } from "./onMessage";
import { OffOverloads } from "./off";
import { OffMessageOverloads } from "./offMessage";
import { OnceOverloads } from "./once";
import { OnceMessageOverloads } from "./onceMessage";

export interface SpotwareEventEmitterOverloads
  extends EmitOverloads,
    EmitMessageOverloads,
    OnOverloads,
    OnMessageOverloads,
    OffOverloads,
    OffMessageOverloads,
    OnceOverloads,
    OnceMessageOverloads {}
