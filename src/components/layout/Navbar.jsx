import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Results', path: '/results' },
  { name: 'Contact', path: '/contact' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileOpen(false)
  }, [location])

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isMobileOpen])

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-white shadow-md shadow-black/5'
            : 'bg-white'
        }`}
      >
        {/* Thin gold accent line at very top */}
        <div className="h-[1px] bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

        <div className="section-container">
          <div className="flex items-center justify-between h-20 lg:h-24">
            {/* Logo — original with white background, displayed naturally */}
            <Link to="/" className="flex-shrink-0">
              <img
                src="/images/logo.PNG"
                alt="RM Strategic Growth"
                className="h-16 lg:h-20 w-auto object-contain"
              />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-10">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative text-sm font-medium tracking-widest uppercase transition-colors duration-300 ${
                    location.pathname === link.path
                      ? 'text-gold'
                      : 'text-charcoal/70 hover:text-black'
                  }`}
                >
                  {link.name}
                  {location.pathname === link.path && (
                    <motion.span
                      layoutId="navbar-indicator"
                      className="absolute -bottom-1 left-0 right-0 h-[1.5px] bg-gold"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <a
              href="https://calendly.com/theriyadh75/30min?back=1&month=2026-05"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:inline-flex btn-primary text-xs tracking-widest"
            >
              Schedule a Call
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="lg:hidden text-charcoal p-2"
              aria-label="Toggle menu"
              id="mobile-menu-toggle"
            >
              {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Bottom border */}
        <div className="h-[1px] bg-gray-light/60" />
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-white lg:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full gap-8">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                >
                  <Link
                    to={link.path}
                    className={`text-2xl tracking-widest uppercase transition-colors ${
                      location.pathname === link.path
                        ? 'text-gold'
                        : 'text-charcoal/70 hover:text-black'
                    }`}
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.4 }}
                className="mt-4"
              >
                <a href="https://calendly.com/theriyadh75/30min?back=1&month=2026-05" target="_blank" rel="noopener noreferrer" className="btn-primary">
                  Schedule a Call
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
