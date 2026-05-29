import { useId } from 'react'

type LogoProps = {
  size?: number
  id?: string
  background?: string
  radiusRatio?: number
  draw?: boolean
}

export function Logo({
  size = 40,
  id,
  background = '#0f172a',
  radiusRatio = 0.22,
  draw = false,
}: LogoProps) {
  const reactId = useId().replace(/:/g, '')
  const safeId = id ?? `ix-${reactId}`

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      role="img"
      aria-label="InnovatioX mark"
      className="ix-mark"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id={`${safeId}-grad`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#38bdf8" />
          <stop offset="55%" stopColor="#8b5cf6" />
          <stop offset="100%" stopColor="#a855f7" />
        </linearGradient>
        <filter id={`${safeId}-glow`} x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <rect width="120" height="120" rx={120 * radiusRatio} fill={background} />

      <rect
        x="6"
        y="6"
        width="108"
        height="108"
        rx={108 * radiusRatio}
        fill="none"
        stroke="rgba(148, 163, 184, 0.10)"
        strokeWidth="1"
      />

      <g
        filter={`url(#${safeId}-glow)`}
        className={`ix-mark__strokes${draw ? ' ix-mark__strokes--draw' : ''}`}
      >
        <line
          x1="32"
          y1="32"
          x2="88"
          y2="88"
          stroke={`url(#${safeId}-grad)`}
          strokeWidth="18"
          strokeLinecap="round"
        />
        <line
          x1="88"
          y1="32"
          x2="32"
          y2="88"
          stroke={`url(#${safeId}-grad)`}
          strokeWidth="18"
          strokeLinecap="round"
        />
      </g>
    </svg>
  )
}
