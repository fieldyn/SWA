import { useMemo, useRef } from 'react'
import type { CSSProperties } from 'react'

import { useCountUp } from '@/hooks/useCountUp'
import { useReveal } from '@/hooks/useReveal'

const strengths = [
  {
    num: '01',
    title: 'Cloud-native by default',
    description:
      'Every system is designed for the cloud from day one — serverless, containerized, observable, and infinitely scalable.',
  },
  {
    num: '02',
    title: 'AI-augmented workflows',
    description:
      'We embed machine learning into core business processes, turning data into decisions and complexity into clarity.',
  },
  {
    num: '03',
    title: 'Enterprise .NET expertise',
    description:
      'Deep experience across the .NET ecosystem means robust, maintainable, high-performance applications backed by craft.',
  },
  {
    num: '04',
    title: 'Security & compliance',
    description:
      'Compliance-ready architectures and security practices baked into every layer protect your data, users, and reputation.',
  },
]

export function About() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const { isVisible } = useReveal(sectionRef)

  const projects = useCountUp(50, isVisible)
  const uptime = useCountUp(99.9, isVisible, { decimals: 1 })
  const speedup = useCountUp(3, isVisible)

  const stats = useMemo(
    () => [
      { value: `${Math.round(projects.value)}+`, label: 'Projects delivered' },
      { value: `${uptime.value.toFixed(1)}%`, label: 'Uptime SLA' },
      { value: '24/7', label: 'Support coverage' },
      { value: `${Math.round(speedup.value)}×`, label: 'Faster time-to-market' },
    ],
    [projects.value, speedup.value, uptime.value],
  )

  return (
    <section id="about" ref={sectionRef} className={`about ${isVisible ? 'revealed' : ''}`}>
      <div className="ix-container">
        <header className="about__head">
          <span className="about__eyebrow">
            <span className="about__eyebrow-bar" />
            Why InnovatioX
          </span>
          <h2 className="about__title">
            A small studio with the <em className="ix-grad-text">discipline</em> of a platform team.
          </h2>
          <p className="about__lead">
            We pair the focus of a boutique consultancy with the rigor of large-scale
            engineering — so every line of code, every diff, every model deployment is thought through.
          </p>
        </header>

        <div className="about__stats">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="stat"
              style={{ ['--delay']: `${index * 0.08}s` } as CSSProperties & { ['--delay']: string }}
            >
              <span className="stat__value">{stat.value}</span>
              <span className="stat__label">{stat.label}</span>
            </div>
          ))}
        </div>

        <div className="about__strengths">
          {strengths.map((item, index) => (
            <article
              key={item.num}
              className="strength"
              style={{ ['--delay']: `${0.2 + index * 0.08}s` } as CSSProperties & { ['--delay']: string }}
            >
              <span className="strength__num">{item.num}</span>
              <h3 className="strength__title">{item.title}</h3>
              <p className="strength__desc">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
