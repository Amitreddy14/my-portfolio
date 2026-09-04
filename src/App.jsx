import { lazy, Suspense, useState, useCallback } from 'react'
import useLenis from './hooks/useLenis'
import useReveal from './hooks/useReveal'
import Loader from './components/Loader'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Tech from './components/Tech'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Achievements from './components/Achievements'
import Blog from './components/Blog'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [loaded, setLoaded] = useState(false)

  const handleLoadComplete = useCallback(() => {
    setLoaded(true)
  }, [])

  useLenis()
  useReveal()

  return (
    <>
      {!loaded && <Loader onComplete={handleLoadComplete} />}
      <div className="grain">
        <Navbar />
        <Hero />
        <About />
        <Tech />
        <Experience />
        <Projects />
        <Achievements />
        <Blog />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default App
