import { useEffect, useRef } from 'react';

export function useFocusModal(isOpen: boolean) {
  const focusRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!isOpen) return;
    const id = requestAnimationFrame(() => focusRef.current?.focus());
    return () => cancelAnimationFrame(id);
  }, [focusRef, isOpen]);

  return {
    focusRef,
  };
}
