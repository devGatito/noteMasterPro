import { useEffect } from 'react';

export const useTimeout = (callback: () => void, delay: number | null) => {
  useEffect(() => {
    if (delay === null) return;

    const id = setTimeout(callback, delay);
    return () => clearTimeout(id);
  }, [callback, delay]);
};
