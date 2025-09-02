import { useEffect, type RefObject } from 'react';

export function useOutsideClick(
  ref: RefObject<HTMLDivElement | null>,
  onClickHandler?: () => void
) {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        onClickHandler?.();
      }
    };

    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [onClickHandler]);

  return {
    ref,
  };
}
