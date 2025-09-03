type BuiltInHandlerKeys = 'onEnter' | 'onEscape';

export type KeyHandlersReact<T extends HTMLElement> = Partial<
  Record<BuiltInHandlerKeys, (e: React.KeyboardEvent<T>) => void>
>;

export function keyPress<T extends HTMLElement>(
  handlers: KeyHandlersReact<T>
): React.KeyboardEventHandler<T> {
  return (e) => {
    switch (e.key) {
      case 'Enter':
        handlers.onEnter?.(e);
        break;
      case 'Escape':
        handlers.onEscape?.(e);
        break;
    }
  };
}
