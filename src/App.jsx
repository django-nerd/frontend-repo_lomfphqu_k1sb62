import React, { useEffect } from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Blog from './components/Blog'
import Contact from './components/Contact'
import PhotoUpload from './components/PhotoUpload'

function App() {
  // Konami code for Warp Drive easter egg
  useEffect(() => {
    const sequence = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a']
    let idx = 0
    const onKey = (e) => {
      const key = e.key.length === 1 ? e.key.toLowerCase() : e.key
      if (key === sequence[idx]) {
        idx++
        if (idx === sequence.length) {
          document.documentElement.style.scrollBehavior = 'auto'
          window.scrollTo({ top: document.body.scrollHeight, behavior: 'instant' })
          setTimeout(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' })
            document.documentElement.style.scrollBehavior = ''
          }, 400)
          idx = 0
        }
      } else {
        idx = 0
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <div className="min-h-screen bg-[#0b0b1b] text-white">
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Blog />
      <div id="photo"><PhotoUpload /></div>
      <Contact />
      <footer className="bg-[#0b0b1b] text-center text-white/60 py-10">
        Lost in the void? Every black hole has an exit — try the nav above.
      </footer>
    </div>
  )
}

export default App
