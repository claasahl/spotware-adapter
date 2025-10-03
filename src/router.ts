import { Messages } from "./messages";

// Generic handler that accepts any message from the union
export type MessageHandler<Context, Message extends Messages = Messages> = (
  message: Message,
  ctx: Context,
) => ReadonlyArray<Messages> | Promise<ReadonlyArray<Messages>>;

// Extract specific message type by payloadType
type MessageByPayloadType<T extends Messages["payloadType"]> = Extract<
  Messages,
  { payloadType: T }
>;

export class Router<Context> {
  private handlers = new Map<
    Messages["payloadType"],
    MessageHandler<Context>
  >();

  register<T extends Messages["payloadType"]>(
    type: T,
    handler: MessageHandler<Context, MessageByPayloadType<T>>,
  ) {
    // TypeScript doesn't understand that a handler for a specific message type
    // is compatible with a handler for the general Messages union due to
    // contravariance. We need to help it understand this safe assignment.
    this.handlers.set(type, handler as MessageHandler<Context>);
  }

  async handle(
    message: Messages,
    ctx: Context,
  ): Promise<ReadonlyArray<Messages>> {
    const handler = this.handlers.get(message.payloadType);
    if (!handler) return [];
    return handler(message, ctx);
  }
}
