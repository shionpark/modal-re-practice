import { useState } from 'react';

export function useToggle(initialValue: boolean) {
  const [value, setValue] = useState(initialValue);

  const toggle = (prev: boolean) => setValue(!prev);
  const open = () => setValue(true);
  const close = () => setValue(false);

  return [value, toggle, open, close] as const;
}
