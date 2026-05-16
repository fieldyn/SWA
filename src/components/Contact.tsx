import { useRef } from 'react'

import { Logo } from './Logo'
import { useReveal } from '@/hooks/useReveal'

const channels = [
  {
    label: 'Email',
    value: 'info@innovatiox.com',
    href: 'mailto:info@innovatiox.com',
  },
  {
    label: 'Web',
    value: 'innovatiox.com',
    href: 'https://innovatiox.com',
    external: true,
  },
  {
    label: 'Hours',
    value: 'Mon–Fri · 09:00–19:00 CET',
  },
]

export function Contact() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const { isVisible } = useReveal(sectionRef)

  return (
    <section id="contact" ref={sectionRef} className={`contact ${isVisible ? 'revealed' : ''}`}>
      <div className="ix-container">
        <div className="contact__grid">
          <div className="contact__copy">
            <span className="contact__eyebrow">
              <span className="contact__eyebrow-bar" />
              Let's build together
            </span>

            <h2 className="contact__title">
              Have a problem worth <em className="ix-grad-text">solving?</em>
            </h2>

            <p className="contact__lead">
              Whether you're modernizing legacy systems, shipping AI-powered products,
              or scaling cloud infrastructure — we'd love to hear what you're building.
              Drop a line; expect a reply within one business day.
            </p>

            <a href="mailto:info@innovatiox.com" className="contact__cta">
              <span>Start the conversation</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
          </div>

          <aside className="contact__card">
            <div className="contact__card-orb" aria-hidden="true" />

            <div className="contact__card-head">
              <Logo size={56} id="contact-mark" />
              <div>
                <p className="contact__card-name">
                  innovatio<span className="ix-grad-text">X</span>
                  <span className="contact__card-tld">.com</span>
                </p>
                <p className="contact__card-sub">Cloud · AI · .NET studio</p>
              </div>
            </div>

            <ul className="contact__channels">
              {channels.map((channel) => (
                <li key={channel.label}>
                  <span className="contact__channel-label">{channel.label}</span>
                  {'href' in channel ? (
                    <a
                      href={channel.href}
                      target={channel.external ? '_blank' : undefined}
                      rel={channel.external ? 'noopener' : undefined}
                      className="contact__channel-value"
                    >
                      {channel.value}
                    </a>
                  ) : (
                    <span className="contact__channel-value contact__channel-value--static">
                      {channel.value}
                    </span>
                  )}
                </li>
              ))}
            </ul>

            <div className="contact__card-foot">
              <span className="contact__status">
                <span className="contact__status-dot" />
                Currently accepting projects · Q2
              </span>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
