import { createContext, useContext } from 'react';

type ModalState = { isOpen: boolean };
type ModalActions = { open: () => void; close: () => void };

export const StateCtx = createContext<ModalState>({ isOpen: false });
export const ActionsCtx = createContext<ModalActions>({
  open: () => {},
  close: () => {},
});

export const useModalState = () => useContext(StateCtx);
export const useModalActions = () => useContext(ActionsCtx);
