import { createContext, useContext } from 'react';

type ModalContextType = {
  isOpen: boolean;
  open: () => void;
  close: () => void;
};

export const ModalContext = createContext<ModalContextType | null>(null);

export function useModal() {
  const ctx = useContext(ModalContext);

  return { ...ctx };
}
