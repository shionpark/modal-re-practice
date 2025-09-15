import { useCallback, useMemo, useState, type ReactNode } from 'react';
import { StateCtx, ActionsCtx } from '@hooks/useModal';

export function ModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setOpen] = useState(false);

  const open = useCallback(() => setOpen(true), []);
  const close = useCallback(() => setOpen(false), []);

  const state = useMemo(() => ({ isOpen }), [isOpen]);
  const actions = useMemo(() => ({ open, close }), [open, close]);

  return (
    <>
      <StateCtx value={state}>
        <ActionsCtx value={actions}>{children}</ActionsCtx>
      </StateCtx>
    </>
  );
}
