import { useEffect } from 'react'
import type { RefObject } from 'react'

import { pointerEffectsEnabled } from '@/lib/media'

/**
 * Tilts `ref` in 3D toward the pointer by writing `--rx`/`--ry` (in degrees)
 * that the element's transform consumes, and springs back to neutral on leave.
 * Imperative (no React state). Disabled for coarse pointers or reduced motion,
 * in which case the element keeps its static resting transform.
 */
export function useTilt(ref: RefObject<HTMLElement | null>, max = 7) {
  useEffect(() => {
    const el = ref.current
    if (!el || !pointerEffectsEnabled()) {
      return
    }

    let frame = 0
    let px = 0
    let py = 0

    const onMove = (event: PointerEvent) => {
      const rect = el.getBoundingClientRect()
      px = (event.clientX - rect.left) / rect.width - 0.5
      py = (event.clientY - rect.top) / rect.height - 0.5
      if (frame) {
        return
      }
      frame = requestAnimationFrame(() => {
        frame = 0
        el.style.setProperty('--ry', `${px * max}deg`)
        el.style.setProperty('--rx', `${-py * max}deg`)
      })
    }

    const reset = () => {
      if (frame) {
        cancelAnimationFrame(frame)
        frame = 0
      }
      el.style.setProperty('--rx', '0deg')
      el.style.setProperty('--ry', '0deg')
    }

    el.addEventListener('pointermove', onMove)
    el.addEventListener('pointerleave', reset)
    return () => {
      el.removeEventListener('pointermove', onMove)
      el.removeEventListener('pointerleave', reset)
      if (frame) {
        cancelAnimationFrame(frame)
      }
    }
  }, [ref, max])
}
