import { useEffect } from 'react'
import type { RefObject } from 'react'

import { pointerEffectsEnabled } from '@/lib/media'

/**
 * Tracks the pointer inside `containerRef` and writes `--mx`/`--my` (in px,
 * relative to the hovered element) onto the nearest ancestor matching
 * `selector`. CSS consumes those variables to paint a radial spotlight, so
 * pointer movement updates style imperatively and triggers no React re-render.
 * Disabled for coarse pointers or when the user prefers reduced motion.
 */
export function usePointerSpotlight(
  containerRef: RefObject<HTMLElement | null>,
  selector = '.card',
) {
  useEffect(() => {
    const container = containerRef.current
    if (!container || !pointerEffectsEnabled()) {
      return
    }

    let frame = 0
    let target: HTMLElement | null = null
    let lastX = 0
    let lastY = 0

    const onPointerMove = (event: PointerEvent) => {
      const next = (event.target as HTMLElement | null)?.closest<HTMLElement>(
        selector,
      )
      if (!next) {
        return
      }
      target = next
      lastX = event.clientX
      lastY = event.clientY
      if (frame) {
        return
      }
      frame = requestAnimationFrame(() => {
        frame = 0
        if (!target) {
          return
        }
        const rect = target.getBoundingClientRect()
        target.style.setProperty('--mx', `${lastX - rect.left}px`)
        target.style.setProperty('--my', `${lastY - rect.top}px`)
      })
    }

    container.addEventListener('pointermove', onPointerMove)
    return () => {
      container.removeEventListener('pointermove', onPointerMove)
      if (frame) {
        cancelAnimationFrame(frame)
      }
    }
  }, [containerRef, selector])
}
