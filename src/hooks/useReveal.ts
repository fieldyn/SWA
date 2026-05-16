import { RefObject, useEffect, useState } from 'react'

export function useReveal<T extends Element>(
  ref: RefObject<T>,
  options?: { threshold?: number; rootMargin?: string },
) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) {
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      {
        threshold: options?.threshold ?? 0.12,
        rootMargin: options?.rootMargin ?? '0px',
      },
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [options?.rootMargin, options?.threshold, ref])

  return { isVisible }
}
