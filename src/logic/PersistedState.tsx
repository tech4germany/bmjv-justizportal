import React, { useEffect } from 'react';

export function usePersistedState(key: string, defaultValue: any) {
  const [state, setState] = React.useState(() => {
    const ls = localStorage.getItem(key);
    return ls != undefined && ls != 'undefined' ? JSON.parse(ls) : defaultValue;
  });
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);
  return [state, setState];
}
