import { Messages } from "./messages";

export type MessageHandler<Context> = (
  message: Messages,
  ctx: Context,
) =>
  | ReadonlyArray<Messages>
  | Promise<ReadonlyArray<Messages>>;

export class Router<Context> {
  private handlers = new Map<Messages["payloadType"], MessageHandler<Context>>();

  register<T extends Messages>(
    type: T["payloadType"],
    handler: MessageHandler<Context>,
  ) {
    this.handlers.set(type, handler);
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
