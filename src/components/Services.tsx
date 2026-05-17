import { useRef } from 'react'
import type { CSSProperties } from 'react'

import { useLanguage } from '@/hooks/useLanguage'
import { useReveal } from '@/hooks/useReveal'

export function Services() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const { isVisible } = useReveal(sectionRef)
  const { content } = useLanguage()
  const services = content.services

  return (
    <section id="services" ref={sectionRef} className={`services ${isVisible ? 'revealed' : ''}`}>
      <div className="ix-container">
        <header className="services__head">
          <div>
            <span className="services__eyebrow">
              <span className="services__eyebrow-bar" />
              {services.eyebrow}
            </span>
            <h2 className="services__title">
              {services.title} <em className="ix-grad-text">{services.titleEm}</em>
            </h2>
          </div>

          <p className="services__intro">{services.intro}</p>
        </header>

        <div className="services__grid">
          {services.cards.map((service, index) => (
            <article
              key={service.num}
              className={`card ${service.featured ? 'card--featured' : ''}`}
              style={{ ['--delay']: `${index * 0.12}s` } as CSSProperties & { ['--delay']: string }}
            >
              <div className="card__top">
                <span className="card__num">{service.num}</span>
                <span className="card__icon-wrap">
                  {service.icon === 'payments' ? (
                    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="4.5" y="8" width="23" height="16" rx="2.8" />
                      <line x1="4.5" y1="13" x2="27.5" y2="13" />
                      <path d="M12 20h4" />
                      <path d="M19 18.5l3 3-3 3" />
                      <path d="M19 24.5h4" />
                    </svg>
                  ) : service.icon === 'security' ? (
                    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
                      <path d="M16 4l9 4v6c0 6-3.84 10.6-9 13-5.16-2.4-9-7-9-13V8l9-4Z" />
                      <rect x="12.5" y="13.5" width="7" height="6.5" rx="1.4" />
                      <path d="M14 13.5v-1.2a2 2 0 0 1 4 0v1.2" />
                    </svg>
                  ) : (
                    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="10,6 3,16 10,26" />
                      <polyline points="22,6 29,16 22,26" />
                      <line x1="18" y1="6" x2="14" y2="26" />
                    </svg>
                  )}
                </span>
              </div>

              <h3 className="card__title">
                {service.title} <em>{service.titleEm}</em>
              </h3>
              <p className="card__desc">{service.description}</p>

              {service.featured && service.bullets.length > 0 ? (
                <ul className="card__bullets">
                  {service.bullets.map((bullet) => (
                    <li key={bullet}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {bullet}
                    </li>
                  ))}
                </ul>
              ) : null}

              <a href="#contact" className="card__link">
                {services.linkLabel}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>

              <div className="card__halo" aria-hidden="true" />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
