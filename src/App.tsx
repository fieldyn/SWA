import { About } from '@/components/About'
import { ClosingCta } from '@/components/ClosingCta'
import { Contact } from '@/components/Contact'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Services } from '@/components/Services'
import { Technology } from '@/components/Technology'
import { LanguageProvider } from '@/hooks/useLanguage'
import { ThemeProvider } from '@/hooks/useTheme'

export default function App() {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <Header />
        <main>
          <Hero />
          <Services />
          <About />
          <Technology />
          <Contact />
          <ClosingCta />
        </main>
        <Footer />
      </ThemeProvider>
    </LanguageProvider>
  )
}
