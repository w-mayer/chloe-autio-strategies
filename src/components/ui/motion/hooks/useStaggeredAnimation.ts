'use client';

import { useMemo } from 'react';

interface StaggeredAnimationOptions {
  index: number;
  layoutIndex?: number;
  staggerDelay?: number;
  rowDelay?: number;
  colDelay?: number;
  itemsPerRow?: number;
}

export function useStaggeredAnimation(options: StaggeredAnimationOptions) {
  const {
    index,
    layoutIndex,
    rowDelay = 600,
    colDelay = 200,
    itemsPerRow = 3
  } = options;

  const delay = useMemo(() => {
    const effectiveIndex = layoutIndex !== undefined ? layoutIndex : index;
    const row = Math.floor(effectiveIndex / itemsPerRow);
    const col = effectiveIndex % itemsPerRow;
    return (row * rowDelay + col * colDelay) / 1000; // Convert to seconds
  }, [index, layoutIndex, rowDelay, colDelay, itemsPerRow]);

  return delay;
}
