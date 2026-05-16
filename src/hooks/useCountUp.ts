import { useEffect, useState } from 'react'

export function useCountUp(
  target: number,
  active: boolean,
  options?: { duration?: number; decimals?: number },
) {
  const duration = options?.duration ?? 1500
  const decimals = options?.decimals ?? 0
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!active) {
      return
    }

    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia?.('(prefers-reduced-motion: reduce)').matches

    if (prefersReduced) {
      setValue(parseFloat(target.toFixed(decimals)))
      return
    }

    let raf = 0
    const start = performance.now()
    const easeOut = (t: number) => 1 - Math.pow(1 - t, 3)

    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration)
      setValue(parseFloat((target * easeOut(t)).toFixed(decimals)))
      if (t < 1) {
        raf = requestAnimationFrame(tick)
      }
    }

    raf = requestAnimationFrame(tick)

    return () => cancelAnimationFrame(raf)
  }, [active, decimals, duration, target])

  return { value }
}
