import { useEffect, useState } from "react";

export default function useDebouncedEffects(value: string, timeOut: number) {
  const [state, setState] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setState(value);
    }, timeOut);
    return () => {
      clearTimeout(handler);
    }
  }, [value]);

  return state;
}
