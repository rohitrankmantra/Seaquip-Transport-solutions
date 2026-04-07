'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { 
  Menu, X, ChevronDown, Ship, Package, ShieldCheck, Info, Phone, Mail, Globe, Clock, Users, 
  Database, ShieldAlert, Newspaper, HelpCircle, Map, MapPin, Thermometer, AlertTriangle, Truck, Settings
} from 'lucide-react'
import { cn } from '@/lib/utils'

const menuItems = [
  { 
    name: 'Home', 
    href: '/' 
  },
  {
    name: 'Services',
    href: '/services',
    subMenu: [
      { name: 'Tank Storage', href: '/services/tank-storage', icon: Database },
      { name: 'Shipping Services', href: '/services/shipping', icon: Ship },
      { name: 'Temperature Control', href: '/services/temperature-control', icon: Thermometer },
      { name: 'Hazmat Handling', href: '/services/hazmat-handling', icon: AlertTriangle },
      { name: 'Fleet Management', href: '/services/fleet-management', icon: Truck },
      { name: 'Custom Solutions', href: '/services/custom-solutions', icon: Settings },
    ],
  },
  {
    name: 'Company',
    subMenu: [
      { name: 'About Us', href: '/about', icon: Info },
      { name: 'Why Choose Us', href: '/why-choose-us', icon: ShieldCheck },
      { name: 'Facilities', href: '/facilities', icon: Globe },
      { name: 'Safety & Compliance', href: '/safety-compliance', icon: ShieldAlert },
      { name: 'Testimonials', href: '/testimonials', icon: Users },
      { name: 'Careers', href: '/careers', icon: ShieldCheck }, // Using ShieldCheck as placeholder for Careers if Briefcase not found, but I'll use Users
    ],
  },
  {
    name: 'Resources',
    subMenu: [
      { name: 'Blog', href: '/blog', icon: Newspaper },
      { name: 'FAQ', href: '/faq', icon: HelpCircle },
      { name: 'Sitemap', href: '/sitemap', icon: Map },
    ],
  },
  { name: 'Contact', href: '/contact' },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSubMenu, setActiveSubMenu] = useState(null)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu and desktop dropdowns on route change
  useEffect(() => {
    setIsOpen(false)
    setActiveSubMenu(null)
  }, [pathname])

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Only handle click outside for desktop view or when mobile menu is closed
      if (!isOpen && !event.target.closest('header')) {
        setActiveSubMenu(null)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isOpen])

  const toggleSubMenu = (name, e, isMobile = false) => {
    if (e) {
      e.preventDefault()
      e.stopPropagation()
    }
    if (activeSubMenu === name) {
      setActiveSubMenu(null)
    } else {
      setActiveSubMenu(name)
    }
  }

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full",
        scrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      )}
    >
      {/* Top Bar - Only on desktop and when not scrolled */}
      {!scrolled && (
        <div className="hidden lg:block border-b border-white/10 pb-4 mb-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center text-xs font-bold text-white">
            <div className="flex items-center gap-8">
              <div className="flex items-center space-x-2">
                <Phone className="w-3 h-3 text-accent" />
                <span>404-388-9408</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-3 h-3 text-accent" />
                <span>wileyjones90@yahoo.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-3 h-3 text-accent" />
                <span>1205 Shoreham Dr, Atlanta, GA 30349</span>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <Link href="/sitemap" className="hover:text-accent transition-colors">Sitemap</Link>
              <div className="w-px h-3 bg-white/20 hidden sm:block" />
              <Link href="/faq" className="hover:text-accent transition-colors">Help Center</Link>
            </div>
          </div>
        </div>
      )}

      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="bg-[#22C55E] p-1.5 rounded-lg group-hover:rotate-12 transition-transform duration-300">
              <div className="w-5 h-5 border-2 border-white rounded-sm rotate-45 flex items-center justify-center overflow-hidden">
                <div className="w-full h-full bg-white -rotate-45 translate-x-1 translate-y-1"></div>
              </div>
            </div>
            <span className={cn(
              "font-black text-2xl tracking-tighter transition-colors",
              scrolled ? "text-primary" : "text-white"
            )}>
              Seaquip<span className="text-[#22C55E]">Transport</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {menuItems.map((item, index) => (
              <div key={item.name} className="relative">
                {item.subMenu ? (
                  <div className="flex flex-col items-center">
                    <button 
                      type="button"
                      id={`desktop-menu-${index}`}
                      aria-expanded={activeSubMenu === item.name}
                      aria-controls={`desktop-submenu-${index}`}
                      onClick={(e) => toggleSubMenu(item.name, e)}
                      className={cn(
                        "flex items-center space-x-1 font-bold text-sm transition-all duration-300 py-2.5 px-4 rounded-lg",
                        scrolled 
                          ? "text-primary hover:bg-gray-50 hover:text-accent" 
                          : "text-white hover:bg-white/10 hover:text-accent",
                        (pathname.startsWith(item.href) || activeSubMenu === item.name) && "text-accent bg-white/5"
                      )}
                    >
                      <span>{item.name}</span>
                      <ChevronDown className={cn(
                        "w-4 h-4 transition-transform duration-300",
                        activeSubMenu === item.name && "rotate-180"
                      )} />
                    </button>
                    
                    {/* Desktop Accordion Submenu */}
                    <div 
                      id={`desktop-submenu-${index}`}
                      role="region"
                      aria-labelledby={`desktop-menu-${index}`}
                      className={cn(
                        "absolute top-full left-0 mt-2 z-50 overflow-hidden transition-all duration-300 ease-in-out grid",
                        activeSubMenu === item.name 
                          ? "grid-rows-[1fr] opacity-100 translate-y-0" 
                          : "grid-rows-[0fr] opacity-0 -translate-y-2 pointer-events-none"
                      )}
                    >
                      <div className="min-h-0 bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-gray-100 p-2 w-64">
                        <div className="space-y-1">
                          {item.subMenu.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              onClick={() => setActiveSubMenu(null)}
                              className="flex items-center space-x-3 px-4 py-3 text-sm font-bold text-gray-700 hover:bg-accent/5 hover:text-accent rounded-xl transition-all duration-300 group/item"
                            >
                              <div className="bg-accent/5 p-2 rounded-lg text-accent group-hover/item:bg-accent group-hover/item:text-white transition-colors">
                                <subItem.icon className="w-4 h-4" />
                              </div>
                              <span>{subItem.name}</span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link 
                    href={item.href}
                    className={cn(
                      "font-bold text-sm transition-all duration-300 py-2.5 px-4 rounded-lg block",
                      scrolled 
                        ? "text-primary hover:bg-gray-50 hover:text-accent" 
                        : "text-white hover:bg-white/10 hover:text-accent",
                      pathname === item.href && "text-accent"
                    )}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link 
              href="/contact"
              className={cn(
                "px-6 py-2.5 rounded-full font-black text-sm transition-all duration-300 transform hover:scale-105 active:scale-95",
                scrolled 
                  ? "bg-primary text-white hover:bg-primary-light" 
                  : "bg-accent text-white hover:bg-accent-light"
              )}
            >
              REQUEST A QUOTE
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden p-2 rounded-lg"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <X className={cn("w-6 h-6", (isOpen || scrolled) ? "text-primary" : "text-white")} />
            ) : (
              <Menu className={cn("w-6 h-6", scrolled ? "text-primary" : "text-white")} />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div 
        className={cn(
          "fixed inset-0 bg-white z-[60] lg:hidden transition-transform duration-500 ease-in-out",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
        aria-hidden={!isOpen}
      >
        <div className="flex flex-col h-full">
          {/* Mobile Menu Header */}
          <div className="flex justify-between items-center p-6 border-b border-gray-100">
            <Link href="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
              <div className="bg-[#22C55E] p-1.5 rounded-lg">
                <div className="w-4 h-4 border-2 border-white rounded-sm rotate-45 flex items-center justify-center overflow-hidden">
                  <div className="w-full h-full bg-white -rotate-45 translate-x-1 translate-y-1"></div>
                </div>
              </div>
              <span className="font-black text-lg tracking-tighter text-primary">
                Seaquip<span className="text-[#22C55E]">Transport</span>
              </span>
            </Link>
            <button 
              onClick={() => setIsOpen(false)}
              className="p-2 bg-gray-100 rounded-full text-primary hover:bg-gray-200 transition-colors"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Mobile Menu Links */}
          <div className="flex-1 overflow-y-auto p-6 space-y-2">
            {menuItems.map((item, index) => (
              <div key={item.name}>
                {item.subMenu ? (
                  <div>
                    <button 
                      type="button"
                      id={`mobile-menu-${index}`}
                      aria-expanded={activeSubMenu === item.name}
                      aria-controls={`mobile-submenu-${index}`}
                      onClick={(e) => toggleSubMenu(item.name, e)}
                      className="w-full flex items-center justify-between gap-4 bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-all mb-2 text-left"
                    >
                      <span className="font-bold text-gray-800">{item.name}</span>
                      <ChevronDown className={cn(
                        "w-5 h-5 text-accent shrink-0 transition-transform duration-300",
                        activeSubMenu === item.name && "rotate-180"
                      )} />
                    </button>
                    {activeSubMenu === item.name && (
                      <div 
                        id={`mobile-submenu-${index}`}
                        role="region"
                        aria-labelledby={`mobile-menu-${index}`}
                        className="space-y-2 mb-2 pl-2"
                      >
                        {item.subMenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="flex items-center gap-3 p-3.5 text-gray-700 bg-white border border-accent/20 rounded-lg hover:bg-accent/5 hover:text-accent transition-all duration-200"
                            onClick={() => setIsOpen(false)}
                          >
                            <div className="bg-accent/10 p-2 rounded-lg text-accent">
                              <subItem.icon className="w-5 h-5" />
                            </div>
                            <span className="text-sm font-bold">{subItem.name}</span>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link 
                    href={item.href}
                    className="block bg-white border border-gray-200 rounded-lg p-4 font-bold text-gray-800 hover:shadow-md hover:text-accent transition-all mb-2"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Footer */}
          <div className="p-6 bg-gray-50 space-y-4">
            <Link 
              href="/contact"
              className="block w-full py-4 bg-primary text-white text-center rounded-xl font-black text-lg hover:bg-primary-light transition-colors"
              onClick={() => setIsOpen(false)}
            >
              REQUEST A QUOTE
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
