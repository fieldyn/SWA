import { Logo } from './Logo'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer__watermark" aria-hidden="true">
        <Logo size={380} id="footer-watermark" background="transparent" />
      </div>

      <div className="ix-container footer__inner">
        <div className="footer__brand">
          <a href="/" className="footer__logo">
            <Logo size={40} id="footer-mark" />
            <span className="footer__wordmark">
              innovatio<span className="ix-grad-text">X</span>
              <span className="footer__tld">.com</span>
            </span>
          </a>
          <p className="footer__tagline">
            A studio building cloud, AI, and modern .NET systems
            for teams who care about craft.
          </p>
          <div className="footer__badge">
            <span className="footer__badge-dot" />
            Available for Q2 engagements
          </div>
        </div>

        <nav className="footer__nav">
          <div className="footer__col">
            <h4 className="footer__col-title">Sitemap</h4>
            <a href="#services" className="footer__link">
              Services
            </a>
            <a href="#about" className="footer__link">
              About
            </a>
            <a href="#technology" className="footer__link">
              Technology
            </a>
            <a href="#contact" className="footer__link">
              Contact
            </a>
          </div>

          <div className="footer__col">
            <h4 className="footer__col-title">Capabilities</h4>
            <span className="footer__link footer__link--static">Cloud architecture</span>
            <span className="footer__link footer__link--static">AI &amp; ML</span>
            <span className="footer__link footer__link--static">.NET engineering</span>
            <span className="footer__link footer__link--static">Platform &amp; DevOps</span>
          </div>

          <div className="footer__col">
            <h4 className="footer__col-title">Connect</h4>
            <a href="mailto:info@innovatiox.com" className="footer__link">
              info@innovatiox.com
            </a>
            <a href="https://innovatiox.com" target="_blank" rel="noopener" className="footer__link">
              innovatiox.com
            </a>
          </div>
        </nav>
      </div>

      <div className="ix-container footer__bottom">
        <p className="footer__copy">© {year} InnovatioX · All rights reserved</p>
        <p className="footer__location">Built with care · Cloud · AI · .NET</p>
      </div>
    </footer>
  )
}
