import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'

import {
  siteContent,
  type Language,
  type SiteContent,
} from '@/content/siteContent'

type LanguageContextValue = {
  language: Language
  setLanguage: (language: Language) => void
  content: SiteContent
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

function getInitialLanguage(): Language {
  if (typeof document === 'undefined') {
    return 'en'
  }

  const initial = document.documentElement.lang
  if (initial === 'en' || initial === 'es') {
    return initial
  }

  try {
    const stored = localStorage.getItem('ix-lang')
    if (stored === 'en' || stored === 'es') {
      return stored
    }
  } catch {
    // ignore storage errors; language falls back to default
  }

  return 'en'
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(getInitialLanguage)
  const content = siteContent[language]

  useEffect(() => {
    document.documentElement.lang = language
    document.title = content.seo.title

    const description = document.querySelector<HTMLMetaElement>(
      'meta[name="description"]',
    )
    description?.setAttribute('content', content.seo.description)

    try {
      localStorage.setItem('ix-lang', language)
    } catch {
      // ignore storage errors
    }
  }, [content.seo.description, content.seo.title, language])

  const value = useMemo<LanguageContextValue>(
    () => ({
      language,
      setLanguage,
      content,
    }),
    [content, language],
  )

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const value = useContext(LanguageContext)

  if (!value) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }

  return value
}
