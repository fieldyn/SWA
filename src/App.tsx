import { ThemeProvider } from './hooks/useTheme'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { About } from './components/About'
import { Technology } from './components/Technology'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export default function App() {
  return (
    <ThemeProvider>
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Technology />
        <Contact />
      </main>
      <Footer />
    </ThemeProvider>
  )
}
