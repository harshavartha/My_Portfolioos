import { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import Loader from './components/Loader'
import CustomCursor from './components/CustomCursor'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Recognition from './components/Recognition'
import Gallery from './components/Gallery'
import Skills from './components/Skills'
import Credentials from './components/Credentials'
import Footer from './components/Footer'

export default function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3200)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <div className="noise-bg" />
      <CustomCursor />
      <AnimatePresence mode="wait">{loading && <Loader key="loader" />}</AnimatePresence>
      <main className="relative bg-background">
        <Hero />
        <About />
        <Projects />
        <Recognition />
        <Gallery />
        <Skills />
        <Credentials />
        <Footer />
      </main>
    </>
  )
}
