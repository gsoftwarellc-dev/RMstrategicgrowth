import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Results from './pages/Results'
import Contact from './pages/Contact'
import FloatingCTA from './components/layout/FloatingCTA'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function App() {
  const location = useLocation()

  return (
    <>
      <ScrollToTop />
      <FloatingCTA />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="services" element={<Services />} />
            <Route path="results" element={<Results />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </>
  )
}

export default App
