'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Phone, Mail } from 'lucide-react'

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <nav
      className={`fixed w-full z-40 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-lg py-4' 
          : 'bg-transparent py-6'
      }`}
    >
      {/* Top Bar - Hidden on scroll */}
      <div className={`transition-all duration-300 overflow-hidden ${isScrolled ? 'h-0 opacity-0' : 'h-10 opacity-100 mb-4'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-white/80 text-xs font-bold tracking-widest uppercase">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-accent" />
                <span>+1 123 456 7890</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-accent" />
                <span>HELP@EASEMOVE.COM</span>
              </div>
            </div>
            <div className="hidden md:block">
              712-A ST. SOUTHBORO, UNITED STATE 01772
            </div>
          </div>
          <div className="h-px bg-white/10 mt-4" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="bg-accent p-1.5 rounded-lg">
              <div className="w-5 h-5 border-2 border-white rounded-sm rotate-45 flex items-center justify-center overflow-hidden">
                <div className="w-full h-full bg-white -rotate-45 translate-x-1 translate-y-1"></div>
              </div>
            </div>
            <span className={`font-black text-2xl tracking-tighter ${isScrolled ? 'text-primary' : 'text-white'}`}>
              Ease<span className="text-accent">Move</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-black uppercase tracking-widest transition-colors hover:text-accent ${
                  isScrolled ? 'text-primary' : 'text-white'
                }`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="px-8 py-3 bg-accent text-white font-black rounded-sm hover:bg-accent-light transition-all duration-300 text-xs tracking-widest shadow-lg shadow-accent/20"
            >
              GET A QUOTE
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 rounded-md transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={isScrolled ? 'text-primary' : 'text-white'} />
            ) : (
              <Menu className={isScrolled ? 'text-primary' : 'text-white'} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-primary z-50 transition-transform duration-500 lg:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-6 flex flex-col h-full">
          <div className="flex justify-between items-center mb-16">
            <div className="flex items-center gap-2">
              <div className="bg-accent p-1.5 rounded-lg">
                <div className="w-5 h-5 border-2 border-white rounded-sm rotate-45 flex items-center justify-center overflow-hidden">
                  <div className="w-full h-full bg-white -rotate-45 translate-x-1 translate-y-1"></div>
                </div>
              </div>
              <span className="font-black text-2xl tracking-tighter text-white">
                Ease<span className="text-accent">Move</span>
              </span>
            </div>
            <button onClick={() => setIsMobileMenuOpen(false)} className="text-white">
              <X size={32} />
            </button>
          </div>

          <div className="flex flex-col gap-8 items-center text-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-2xl font-black text-white uppercase tracking-widest hover:text-accent transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="mt-8 px-12 py-4 bg-accent text-white font-black rounded-sm hover:bg-accent-light transition-all duration-300 text-sm tracking-widest"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              GET A QUOTE
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
