import { useRef } from 'react'
import type { CSSProperties } from 'react'

import { useLanguage } from '@/hooks/useLanguage'
import { useCountUp } from '@/hooks/useCountUp'
import { useReveal } from '@/hooks/useReveal'

export function About() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const { isVisible } = useReveal(sectionRef)
  const { content } = useLanguage()
  const about = content.about
  const [yearsStat, paymentsStat, cloudStat, languagesStat] = about.stats

  const years = useCountUp(yearsStat.target, isVisible)
  const payments = useCountUp(paymentsStat.target, isVisible)
  const clouds = useCountUp(cloudStat.target, isVisible)
  const languages = useCountUp(languagesStat.target, isVisible)

  const stats = [
    {
      value: `${Math.round(years.value)}${yearsStat.suffix}`,
      label: yearsStat.label,
    },
    {
      value: `${Math.round(payments.value)}${paymentsStat.suffix}`,
      label: paymentsStat.label,
    },
    {
      value: `${Math.round(clouds.value)}${cloudStat.suffix}`,
      label: cloudStat.label,
    },
    {
      value: `${Math.round(languages.value)}${languagesStat.suffix}`,
      label: languagesStat.label,
    },
  ]

  return (
    <section id="about" ref={sectionRef} className={`about ${isVisible ? 'revealed' : ''}`}>
      <div className="ix-container">
        <header className="about__head">
          <span className="about__eyebrow">
            <span className="about__eyebrow-bar" />
            {about.eyebrow}
          </span>
          <h2 className="about__title">
            {about.title} <em className="ix-grad-text">{about.titleEm}</em>
          </h2>
          <p className="about__lead">{about.lead}</p>
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
          {about.strengths.map((item, index) => (
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
