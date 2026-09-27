'use client';

import { useSyncExternalStore } from 'react';

const emptySubscribe = () => () => {};

function checkWebGL(): boolean {
  if (typeof window === 'undefined') return true;
  try {
    const canvas = document.createElement('canvas');
    return !!(
      canvas.getContext('webgl') || canvas.getContext('experimental-webgl')
    );
  } catch {
    return false;
  }
}

export function useWebGLSupport(): boolean {
  return useSyncExternalStore(
    emptySubscribe,
    checkWebGL,
    () => true
  );
}
