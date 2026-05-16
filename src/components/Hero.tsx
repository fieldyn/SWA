import { Logo } from './Logo'

const trustedOn = ['.NET', 'Azure', 'AWS', 'OpenAI', 'Vue.js', 'Kubernetes']

export function Hero() {
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
            <span className="hero__eyebrow-dot" /> Cloud · AI · .NET
          </span>

          <h1 className="hero__title">
            Engineering the
            <span className="hero__title-em">next layer</span>
            of cloud
            <span className="hero__title-block">
              <span className="hero__title-and">&amp;</span>
              <span className="ix-grad-text">intelligence.</span>
            </span>
          </h1>

          <p className="hero__lead">
            We architect production-grade systems where modern .NET, machine learning,
            and cloud-native infrastructure meet — turning ambitious software ideas
            into platforms that scale.
          </p>

          <div className="hero__actions">
            <a href="#contact" className="hero__btn hero__btn--primary">
              <span>Start a project</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
            <a href="#services" className="hero__btn hero__btn--ghost">
              See what we build
            </a>
          </div>

          <div className="hero__trust">
            <span className="hero__trust-label">Working across</span>
            <ul className="hero__trust-list">
              {trustedOn.map((name) => (
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
                <p className="hero__mark-label">Brand mark</p>
                <p className="hero__mark-value">
                  innovatio<span className="ix-grad-text">X</span>
                  <span className="hero__mark-tld">.com</span>
                </p>
              </div>
              <span className="hero__mark-tag">v 2.0</span>
            </div>

            <div className="hero__mark-grid" aria-hidden="true">
              {Array.from({ length: 12 }).map((_, index) => (
                <span key={index} />
              ))}
            </div>
          </div>

          <div className="hero__chip hero__chip--01" aria-hidden="true">
            <span className="hero__chip-dot" />
            <span>Production · ready</span>
          </div>
          <div className="hero__chip hero__chip--02" aria-hidden="true">
            <span className="hero__chip-num">99.9</span>
            <span className="hero__chip-text">% uptime SLA</span>
          </div>
        </div>
      </div>

      <a href="#services" className="hero__scroll" aria-label="Scroll to services">
        <span className="hero__scroll-text">Scroll</span>
        <span className="hero__scroll-line" />
      </a>
    </section>
  )
}
