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
    <header className="fixed top-0 left-0 w-full z-50 glass shadow-lg backdrop-blur-lg border-b border-white/10">
      <nav className="container mx-auto flex items-center justify-between px-6 py-4">
        <div className="text-2xl font-bold tracking-widest text-white drop-shadow-lg">
          BROFIED <span className="text-red-500">MEDIA</span>
        </div>
        <ul className="flex space-x-8 text-lg font-semibold">
          {navLinks.map(link => (
            <li key={link.name}>
              <a href={link.href} className="hover:text-red-400 transition-colors duration-200 focus:outline-none focus:text-red-500">
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}