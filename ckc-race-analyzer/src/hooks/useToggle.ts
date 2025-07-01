import { useState } from 'react';

// A simple toggle hook for boolean state
export function useToggle(initialValue: boolean = false): [boolean, () => void] {
  const [state, setState] = useState(initialValue);
  const toggle = () => setState((s) => !s);
  return [state, toggle];
}
