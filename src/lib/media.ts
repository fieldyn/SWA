/**
 * Plain (non-hook) media-query helpers, safe to call inside event handlers and
 * effects. They drive the motion/input/data governance shared by the
 * interactive hooks so that every enhancement degrades gracefully.
 */

const matches = (query: string): boolean =>
  typeof window !== 'undefined' &&
  typeof window.matchMedia === 'function' &&
  window.matchMedia(query).matches

export const prefersReducedMotion = (): boolean =>
  matches('(prefers-reduced-motion: reduce)')

export const isFinePointer = (): boolean => matches('(pointer: fine)')

export const prefersReducedData = (): boolean =>
  matches('(prefers-reduced-data: reduce)')

/**
 * Pointer-driven enhancements (spotlight, tilt) should only run for fine
 * pointers when the user has not requested reduced motion.
 */
export const pointerEffectsEnabled = (): boolean =>
  isFinePointer() && !prefersReducedMotion()
