import { Logo } from './Logo'
import { useLanguage } from '@/hooks/useLanguage'

export function Footer() {
  const year = new Date().getFullYear()
  const { content } = useLanguage()
  const footer = content.footer
  const sitemapLinks = content.header.navLinks

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
          <p className="footer__tagline">{footer.tagline}</p>
          <div className="footer__badge">
            <span className="footer__badge-dot" />
            {footer.badge}
          </div>
        </div>

        <nav className="footer__nav">
          <div className="footer__col">
            <h4 className="footer__col-title">{footer.sitemapTitle}</h4>
            {sitemapLinks.map((link) => (
              <a key={link.href} href={link.href} className="footer__link">
                {link.label}
              </a>
            ))}
          </div>

          <div className="footer__col">
            <h4 className="footer__col-title">{footer.capabilityTitle}</h4>
            {footer.capabilities.map((capability) => (
              <span key={capability} className="footer__link footer__link--static">
                {capability}
              </span>
            ))}
          </div>

          <div className="footer__col">
            <h4 className="footer__col-title">{footer.connectTitle}</h4>
            {footer.connectLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noopener' : undefined}
                className="footer__link"
              >
                {link.label}
              </a>
            ))}
          </div>
        </nav>
      </div>

      <div className="ix-container footer__bottom">
        <p className="footer__copy">© {year} InnovatioX · {footer.copyrightSuffix}</p>
        <p className="footer__location">{footer.bottomTagline}</p>
      </div>
    </footer>
  )
}
