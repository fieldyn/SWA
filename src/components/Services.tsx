import { useRef } from 'react'
import type { CSSProperties } from 'react'

import { useReveal } from '@/hooks/useReveal'

const services = [
  {
    num: '01',
    icon: 'cloud',
    title: 'Cloud',
    titleEm: 'architecture.',
    description:
      'Scalable, secure infrastructure on AWS, Azure, and beyond. Migration, optimization, and serverless platforms designed to grow with your business.',
    bullets: ['Serverless · Containers', 'Multi-region resilience', 'Cost engineering'],
    featured: true,
  },
  {
    num: '02',
    icon: 'ai',
    title: 'AI &',
    titleEm: 'machine learning.',
    description:
      'Intelligent solutions that learn and adapt. From foundation models to bespoke pipelines that automate, predict, and decide.',
    bullets: [],
    featured: false,
  },
  {
    num: '03',
    icon: 'code',
    title: 'Modern',
    titleEm: '.NET craft.',
    description:
      'Enterprise-grade APIs, microservices, and full-stack apps engineered with the latest .NET — robust, observable, and built to last.',
    bullets: [],
    featured: false,
  },
]

export function Services() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const { isVisible } = useReveal(sectionRef)

  return (
    <section id="services" ref={sectionRef} className={`services ${isVisible ? 'revealed' : ''}`}>
      <div className="ix-container">
        <header className="services__head">
          <div>
            <span className="services__eyebrow">
              <span className="services__eyebrow-bar" />
              What we build
            </span>
            <h2 className="services__title">
              Solutions engineered for <em className="ix-grad-text">scale</em> and signal.
            </h2>
          </div>

          <p className="services__intro">
            Three disciplines, one practice. We work end-to-end so each layer
            informs the next — from infrastructure to interface, from data to decision.
          </p>
        </header>

        <div className="services__grid">
          {services.map((service, index) => (
            <article
              key={service.num}
              className={`card ${service.featured ? 'card--featured' : ''}`}
              style={{ ['--delay']: `${index * 0.12}s` } as CSSProperties & { ['--delay']: string }}
            >
              <div className="card__top">
                <span className="card__num">{service.num}</span>
                <span className="card__icon-wrap">
                  {service.icon === 'cloud' ? (
                    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M8 24h16a6 6 0 0 0 .56-11.96A9 9 0 0 0 7 15a5.5 5.5 0 0 0 1 9Z" />
                      <line x1="13" y1="20" x2="13" y2="26" />
                      <line x1="19" y1="20" x2="19" y2="26" />
                      <line x1="16" y1="22" x2="16" y2="28" />
                    </svg>
                  ) : service.icon === 'ai' ? (
                    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
                      <circle cx="16" cy="16" r="3" />
                      <circle cx="16" cy="5" r="2" />
                      <circle cx="16" cy="27" r="2" />
                      <circle cx="5" cy="16" r="2" />
                      <circle cx="27" cy="16" r="2" />
                      <line x1="16" y1="9" x2="16" y2="12" />
                      <line x1="16" y1="20" x2="16" y2="25" />
                      <line x1="9" y1="16" x2="12" y2="16" />
                      <line x1="20" y1="16" x2="25" y2="16" />
                      <circle cx="7" cy="7" r="1.4" />
                      <circle cx="25" cy="7" r="1.4" />
                      <circle cx="7" cy="25" r="1.4" />
                      <circle cx="25" cy="25" r="1.4" />
                      <line x1="8" y1="8" x2="13" y2="13" />
                      <line x1="24" y1="8" x2="19" y2="13" />
                      <line x1="8" y1="24" x2="13" y2="19" />
                      <line x1="24" y1="24" x2="19" y2="19" />
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
                Discuss your build
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
