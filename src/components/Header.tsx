import { useState } from 'react'
import type { CSSProperties } from 'react'

import { Logo } from './Logo'
import { useTheme } from '@/hooks/useTheme'
import { useScrollState } from '@/hooks/useScrollState'

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Technology', href: '#technology' },
  { label: 'Contact', href: '#contact' },
]

export function Header() {
  const { theme, toggle } = useTheme()
  const { scrolled, progress } = useScrollState(32)
  const [menuOpen, setMenuOpen] = useState(false)
  const navStyle: CSSProperties & { ['--header-offset']: string } = {
    '--header-offset': `${scrolled ? 60 : 72}px`,
  }

  return (
    <header
      className={`header ${scrolled ? 'header--scrolled' : ''} ${
        menuOpen ? 'header--menu-open' : ''
      }`}
    >
      <div
        className="header__progress"
        style={{ transform: `scaleX(${progress})` }}
        aria-hidden="true"
      />

      <div className="header__inner">
        <a href="/" className="header__brand" aria-label="InnovatioX home" onClick={() => setMenuOpen(false)}>
          <Logo size={34} id="header-mark" />
          <span className="header__wordmark">
            innovatio<span className="ix-grad-text">X</span>
          </span>
        </a>

        <nav
          className={`header__nav ${menuOpen ? 'header__nav--open' : ''}`}
          style={navStyle}
        >
          {navLinks.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              className="header__link"
              style={{ ['--i']: index } as CSSProperties & { ['--i']: number }}
              onClick={() => setMenuOpen(false)}
            >
              <span className="header__link-num">0{index + 1}</span>
              <span className="header__link-label">{link.label}</span>
            </a>
          ))}
        </nav>

        <div className="header__actions">
          <button
            className="header__icon-btn"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            onClick={toggle}
          >
            {theme === 'dark' ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
                <circle cx="12" cy="12" r="4.5" />
                <line x1="12" y1="2" x2="12" y2="4" />
                <line x1="12" y1="20" x2="12" y2="22" />
                <line x1="4.93" y1="4.93" x2="6.34" y2="6.34" />
                <line x1="17.66" y1="17.66" x2="19.07" y2="19.07" />
                <line x1="2" y1="12" x2="4" y2="12" />
                <line x1="20" y1="12" x2="22" y2="12" />
                <line x1="4.93" y1="19.07" x2="6.34" y2="17.66" />
                <line x1="17.66" y1="6.34" x2="19.07" y2="4.93" />
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>

          <a href="#contact" className="header__cta">
            <span>Start a project</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>

          <button
            className="header__burger"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className={`header__burger-line ${menuOpen ? 'is-x1' : ''}`} />
            <span className={`header__burger-line ${menuOpen ? 'is-hide' : ''}`} />
            <span className={`header__burger-line ${menuOpen ? 'is-x2' : ''}`} />
          </button>
        </div>
      </div>
    </header>
  )
}
