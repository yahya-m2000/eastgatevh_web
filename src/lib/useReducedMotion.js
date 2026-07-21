import { useSyncExternalStore } from 'react';

const query = '(prefers-reduced-motion: reduce)';

const getSnapshot = () => window.matchMedia(query).matches;
const getServerSnapshot = () => false;

const subscribe = (callback) => {
  const mediaQueryList = window.matchMedia(query);
  mediaQueryList.addEventListener('change', callback);
  return () => mediaQueryList.removeEventListener('change', callback);
};

export function useReducedMotion() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

export function prefersReducedMotion() {
  return window.matchMedia(query).matches;
}
