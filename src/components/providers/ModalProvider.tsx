import { useCallback, useMemo, useState, type ReactNode } from 'react';
import { ModalContext } from '@hooks/useModal';

export function ModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setOpen] = useState(false);
  const open = useCallback(() => setOpen(true), []);
  const close = useCallback(() => setOpen(false), []);

  const value = useMemo(
    () => ({
      isOpen,
      open,
      close,
    }),
    [isOpen, open, close]
  );

  return (
    <>
      <ModalContext value={value}>{children}</ModalContext>
    </>
  );
}
