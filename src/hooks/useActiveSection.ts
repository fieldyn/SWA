import { useEffect, useState } from 'react'

/**
 * Returns the id of the section currently dominating the viewport, observing
 * the given element ids with a single IntersectionObserver. State only updates
 * when the active section changes. Pass a stable `ids` array (module constant
 * or memoized) to avoid re-creating the observer on every render.
 */
export function useActiveSection(ids: string[]): string | null {
  const [activeId, setActiveId] = useState<string | null>(null)

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') {
      return
    }

    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)

    if (elements.length === 0) {
      return
    }

    const ratios = new Map<string, number>()

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          ratios.set(entry.target.id, entry.intersectionRatio)
        }

        let topId: string | null = null
        let topRatio = 0
        for (const [id, ratio] of ratios) {
          if (ratio > topRatio) {
            topRatio = ratio
            topId = id
          }
        }

        if (topRatio > 0) {
          setActiveId(topId)
        }
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] },
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [ids])

  return activeId
}
