import { useRef } from 'react'

import { Logo } from './Logo'
import { useLanguage } from '@/hooks/useLanguage'
import { useReveal } from '@/hooks/useReveal'

export function Contact() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const { isVisible } = useReveal(sectionRef)
  const { content } = useLanguage()
  const contact = content.contact

  return (
    <section id="contact" ref={sectionRef} className={`contact ${isVisible ? 'revealed' : ''}`}>
      <div className="ix-container">
        <div className="contact__grid">
          <div className="contact__copy">
            <span className="contact__eyebrow">
              <span className="contact__eyebrow-bar" />
              {contact.eyebrow}
            </span>

            <h2 className="contact__title">
              {contact.title} <em className="ix-grad-text">{contact.titleEm}</em>
            </h2>

            <p className="contact__lead">{contact.lead}</p>

            <a href={contact.mailto} className="contact__cta">
              <span>{contact.cta}</span>
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
                <p className="contact__card-sub">{contact.cardSub}</p>
              </div>
            </div>

            <ul className="contact__channels">
              {contact.channels.map((channel) => (
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
                {contact.status}
              </span>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
