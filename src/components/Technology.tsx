import { useMemo, useRef } from 'react'

import { useReveal } from '@/hooks/useReveal'

type Category = 'cloud' | 'ai' | 'development' | 'devops' | 'data'

const techStack: { name: string; category: Category }[] = [
  { name: '.NET', category: 'development' },
  { name: 'C#', category: 'development' },
  { name: 'Blazor', category: 'development' },
  { name: 'Vue.js', category: 'development' },
  { name: 'TypeScript', category: 'development' },
  { name: 'gRPC', category: 'development' },
  { name: 'Azure', category: 'cloud' },
  { name: 'AWS', category: 'cloud' },
  { name: 'Python', category: 'ai' },
  { name: 'TensorFlow', category: 'ai' },
  { name: 'OpenAI', category: 'ai' },
  { name: 'Docker', category: 'devops' },
  { name: 'Kubernetes', category: 'devops' },
  { name: 'Terraform', category: 'devops' },
  { name: 'SQL Server', category: 'data' },
  { name: 'Cosmos DB', category: 'data' },
]

export function Technology() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const { isVisible } = useReveal(sectionRef)

  const rowA = useMemo(() => techStack.filter((_, index) => index % 2 === 0), [])
  const rowB = useMemo(() => techStack.filter((_, index) => index % 2 === 1), [])

  return (
    <section
      id="technology"
      ref={sectionRef}
      className={`tech ${isVisible ? 'revealed' : ''}`}
    >
      <div className="ix-container tech__head-wrap">
        <header className="tech__head">
          <span className="tech__eyebrow">
            <span className="tech__eyebrow-bar" />
            Our stack
          </span>
          <h2 className="tech__title">
            Technologies we <em className="ix-grad-text">master.</em>
          </h2>
          <p className="tech__lead">
            From cloud platforms to AI frameworks, we choose the right tool
            for the problem — never the trend.
          </p>
        </header>
      </div>

      <div className="marquee" aria-hidden="true">
        <div className="marquee__track marquee__track--ltr">
          <div className="marquee__row">
            {[...rowA, ...rowA].map((tech, index) => (
              <span key={`a-${index}`} className={`pill pill--${tech.category}`}>
                {tech.name}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="marquee marquee--alt" aria-hidden="true">
        <div className="marquee__track marquee__track--rtl">
          <div className="marquee__row">
            {[...rowB, ...rowB].map((tech, index) => (
              <span key={`b-${index}`} className={`pill pill--${tech.category}`}>
                {tech.name}
              </span>
            ))}
          </div>
        </div>
      </div>

      <ul className="visually-hidden">
        {techStack.map((tech) => (
          <li key={tech.name}>{tech.name}</li>
        ))}
      </ul>
    </section>
  )
}
