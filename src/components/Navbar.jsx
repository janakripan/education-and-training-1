import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Courses', href: '#courses' },
    { name: 'About Us', href: '#about' },
    { name: 'Instructors', href: '#experts' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact Us', href: '#footer' },
  ]

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="sticky top-0 z-50 flex flex-col bg-white border-b border-slate-100 shadow-sm"
    >
      {/* Black Top Promo Bar */}
      <div className="bg-[#0F1012] text-white text-center py-2.5 px-4 text-xs font-semibold tracking-wide">
        Get courses from $13.99 for a limited time | <span className="text-white/90 font-medium">A special offer for new students</span>
      </div>

      <nav className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo with 3D isometric cube */}
          <div className="flex-shrink-0 flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <svg className="w-9 h-9" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Top Face (Yellow/Orange) */}
              <path d="M50 15 L80 32 L50 49 L20 32 Z" fill="#FFA700" />
              {/* Left Face (Dark Blue) */}
              <path d="M20 32 L50 49 L50 85 L20 68 Z" fill="#1A6DFF" />
              {/* Right Face (Medium Blue) */}
              <path d="M50 49 L80 32 L80 68 L50 85 Z" fill="#4C85F7" />
            </svg>
            <span className="font-heading font-extrabold text-2xl tracking-tight text-ecoach-dark">
              e<span className="text-ecoach-blue">Coach</span>
            </span>
          </div>

          {/* Desktop Nav - Static anchors only */}
          <div className="hidden lg:flex items-center space-x-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-4 py-2 text-slate-600 hover:text-ecoach-blue font-bold font-heading text-[15px] transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right Action Button: Login/Register */}
          <div className="hidden lg:flex items-center">
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href="#"
              className="bg-ecoach-blue hover:bg-ecoach-blue-hover text-white px-6 py-2.5 rounded font-bold font-heading shadow-md hover:shadow-lg transition-all duration-300 text-sm"
            >
              Login/Register
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-600 hover:text-ecoach-blue hover:bg-slate-100 focus:outline-none transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden border-t border-slate-100 bg-white overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-3 text-base font-bold text-slate-700 hover:text-ecoach-blue transition-colors rounded-lg font-heading"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 border-t border-slate-100 flex flex-col">
                <a
                  href="#"
                  onClick={() => setIsOpen(false)}
                  className="w-full text-center bg-ecoach-blue hover:bg-ecoach-blue-hover text-white px-5 py-3 rounded font-bold font-heading shadow-md transition-all text-sm"
                >
                  Login/Register
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
