import { useMemo, useRef } from 'react'

import { useLanguage } from '@/hooks/useLanguage'
import { useReveal } from '@/hooks/useReveal'

export function Technology() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const { isVisible } = useReveal(sectionRef)
  const { content } = useLanguage()
  const technology = content.technology

  const rowA = useMemo(
    () => technology.techStack.filter((_, index) => index % 2 === 0),
    [technology.techStack],
  )
  const rowB = useMemo(
    () => technology.techStack.filter((_, index) => index % 2 === 1),
    [technology.techStack],
  )

  return (
    <section
      id="technology"
      ref={sectionRef}
      className={`tech ${isVisible ? 'revealed' : ''}`}
    >
      <div className="ix-container tech__head-wrap">
        <header className="tech__head">
          <span className="tech__eyebrow">
            <span className="tech__eyebrow-bar" />
            {technology.eyebrow}
          </span>
          <h2 className="tech__title">
            {technology.title} <em className="ix-grad-text">{technology.titleEm}</em>
          </h2>
          <p className="tech__lead">{technology.lead}</p>
        </header>
      </div>

      <div className="marquee" aria-hidden="true">
        <div className="marquee__track marquee__track--ltr">
          <div className="marquee__row">
            {[...rowA, ...rowA].map((tech, index) => (
              <span key={`a-${index}`} className={`pill pill--${tech.category}`}>
                {tech.name}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="marquee marquee--alt" aria-hidden="true">
        <div className="marquee__track marquee__track--rtl">
          <div className="marquee__row">
            {[...rowB, ...rowB].map((tech, index) => (
              <span key={`b-${index}`} className={`pill pill--${tech.category}`}>
                {tech.name}
              </span>
            ))}
          </div>
        </div>
      </div>

      <ul className="visually-hidden">
        {technology.techStack.map((tech) => (
          <li key={tech.name}>{tech.name}</li>
        ))}
      </ul>
    </section>
  )
}
