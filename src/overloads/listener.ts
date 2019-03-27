export type Listener<T> = (message: T, clientMsgId?: string | null) => void;
