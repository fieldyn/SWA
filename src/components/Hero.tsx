import { Logo } from './Logo'
import { useLanguage } from '@/hooks/useLanguage'

export function Hero() {
  const { content } = useLanguage()
  const hero = content.hero

  return (
    <section className="hero">
      <div className="hero__watermark" aria-hidden="true">
        <Logo size={640} id="hero-watermark" background="transparent" />
      </div>

      <div className="hero__orbs" aria-hidden="true">
        <span className="hero__orb hero__orb--sky" />
        <span className="hero__orb hero__orb--violet" />
      </div>

      <div className="ix-container hero__grid">
        <div className="hero__copy">
          <span className="hero__eyebrow">
            <span className="hero__eyebrow-dot" /> {hero.eyebrow}
          </span>

          <h1 className="hero__title">
            {hero.titleIntro}
            <span className="hero__title-em">{hero.titleAccent}</span>
            <span className="hero__title-block">{hero.titleOutro}</span>
          </h1>

          <p className="hero__lead">{hero.lead}</p>

          <div className="hero__actions">
            <a href="#contact" className="hero__btn hero__btn--primary">
              <span>{hero.primaryCta}</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
            <a href="#services" className="hero__btn hero__btn--ghost">
              {hero.secondaryCta}
            </a>
          </div>

          <div className="hero__trust">
            <span className="hero__trust-label">{hero.focusLabel}</span>
            <ul className="hero__trust-list">
              {hero.focusAreas.map((name) => (
                <li key={name}>{name}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__mark-card">
            <div className="hero__mark-frame">
              <Logo size={220} id="hero-card" />
            </div>

            <div className="hero__mark-meta">
              <div>
                <p className="hero__mark-label">{hero.markLabel}</p>
                <p className="hero__mark-value">
                  innovatio<span className="ix-grad-text">X</span>
                  <span className="hero__mark-tld">.com</span>
                </p>
              </div>
              <span className="hero__mark-tag">{hero.markTag}</span>
            </div>

            <div className="hero__mark-grid" aria-hidden="true">
              {Array.from({ length: 12 }).map((_, index) => (
                <span key={index} />
              ))}
            </div>
          </div>

          <div className="hero__chip hero__chip--01" aria-hidden="true">
            <span className="hero__chip-dot" />
            <span>{hero.chipPrimary}</span>
          </div>
          <div className="hero__chip hero__chip--02" aria-hidden="true">
            <span className="hero__chip-num">{hero.chipStatValue}</span>
            <span className="hero__chip-text">{hero.chipStatLabel}</span>
          </div>
        </div>
      </div>

      <a href="#services" className="hero__scroll" aria-label={hero.scrollAriaLabel}>
        <span className="hero__scroll-text">{hero.scrollLabel}</span>
        <span className="hero__scroll-line" />
      </a>
    </section>
  )
}
