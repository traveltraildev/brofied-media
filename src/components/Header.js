import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX } from 'react-icons/fi'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Process', href: '#process' },
    { name: 'Team', href: '#team' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-brand-black/70 backdrop-blur-xl shadow-lg' : 'bg-transparent'
        }`}
    >
      <nav className="container mx-auto flex justify-between items-center py-4 px-6">
        <a href="#home" className="font-heading text-3xl tracking-wider">
          BRO<span className="text-brand-red">FIED</span>
        </a>

        <ul className="hidden md:flex items-center space-x-8 text-sm uppercase tracking-wider">
          {navLinks.map((l) => (
            <li key={l.name}>
              <a
                href={l.href}
                className="relative text-gray-300 hover:text-white transition-colors after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-0.5 after:bg-brand-red hover:after:w-full after:transition-all"
              >
                {l.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-white"
        >
          {mobileMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
      </nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-brand-black/90 backdrop-blur-xl"
          >
            <ul className="flex flex-col items-center py-4 space-y-4">
              {navLinks.map((l) => (
                <li key={l.name}>
                  <a
                    href={l.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-lg text-gray-300 hover:text-white"
                  >
                    {l.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}