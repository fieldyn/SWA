import { useRef } from 'react'

import { useLanguage } from '@/hooks/useLanguage'
import { useReveal } from '@/hooks/useReveal'

export function ClosingCta() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const { isVisible } = useReveal(sectionRef)
  const { content } = useLanguage()
  const cta = content.closingCta

  return (
    <section
      ref={sectionRef}
      className={`closing-cta ${isVisible ? 'revealed' : ''}`}
      aria-labelledby="closing-cta-title"
    >
      <div className="closing-cta__aurora" aria-hidden="true" />

      <div className="ix-container closing-cta__inner">
        <span className="closing-cta__eyebrow">
          <span className="closing-cta__eyebrow-bar" />
          {cta.eyebrow}
        </span>

        <h2 id="closing-cta-title" className="closing-cta__title">
          {cta.title} <em className="ix-grad-text">{cta.titleEm}</em>
        </h2>

        <p className="closing-cta__lead">{cta.lead}</p>

        <a href={cta.href} className="closing-cta__btn">
          <span>{cta.cta}</span>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </a>
      </div>
    </section>
  )
}
