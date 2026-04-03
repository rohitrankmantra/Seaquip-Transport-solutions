'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Phone, Mail, ChevronDown, Package, Truck, Shield, Wind, Cog, MapPin, HelpCircle, FileText } from 'lucide-react'

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false)
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false)

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services', hasMegaMenu: true },
    { name: 'FAQ', href: '/faq' },
    { name: 'Contact', href: '/contact' },
  ]

  const servicesMenu = [
    {
      title: 'Core Services',
      icon: Package,
      items: [
        { name: 'Tank Storage', href: '/services/tank-storage', desc: 'Safe & secure storage', icon: Package },
        { name: 'Shipping Services', href: '/services/shipping', desc: 'Global logistics', icon: Truck },
        { name: 'Hazmat Handling', href: '/services', desc: 'Specialized cargo', icon: Shield },
        { name: 'Climate Control', href: '/services', desc: 'Temperature regulated', icon: Wind },
      ]
    },
    {
      title: 'Solutions',
      icon: Cog,
      items: [
        { name: 'Custom Solutions', href: '/services', desc: 'Tailored services', icon: Cog },
        { name: 'Fleet Management', href: '/services', desc: 'Transport solutions', icon: Truck },
        { name: 'Facility Tours', href: '/facilities', desc: 'Visit our sites', icon: MapPin },
        { name: 'Why Choose Us', href: '/why-choose-us', desc: 'Our advantages', icon: Shield },
      ]
    },
    {
      title: 'Resources',
      icon: HelpCircle,
      items: [
        { name: 'Safety & Compliance', href: '/safety-compliance', desc: 'Certifications', icon: Shield },
        { name: 'FAQs', href: '/faq', desc: 'Find answers', icon: HelpCircle },
        { name: 'Blog', href: '/blog', desc: 'Industry insights', icon: FileText },
        { name: 'Get a Quote', href: '/contact', desc: 'Request pricing', icon: FileText },
      ]
    }
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
                <span>404-388-9408</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-accent" />
                <span>WILEYJONES90@YAHOO.COM</span>
              </div>
            </div>
            <div className="hidden md:block">
              1205 SHOREHAM DR, ATLANTA, GA 30349
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
              Seaquip<span className="text-accent">Transport</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center gap-8">
            {navLinks.map((link) => (
              link.hasMegaMenu ? (
                <div 
                  key={link.name} 
                  className="relative group h-full flex items-center"
                  onMouseEnter={() => setIsMegaMenuOpen(true)}
                  onMouseLeave={() => setIsMegaMenuOpen(false)}
                >
                  <button
                    className={`text-sm font-black uppercase tracking-widest transition-colors hover:text-accent flex items-center gap-1 py-4 ${
                      isScrolled ? 'text-primary' : 'text-white'
                    }`}
                  >
                    {link.name}
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isMegaMenuOpen ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {/* Mega Menu */}
                  {isMegaMenuOpen && (
                    <div 
                      className="absolute top-full left-1/2 -translate-x-1/2 w-[900px] bg-white shadow-2xl rounded-xl py-10 px-8 border-t-4 border-accent mt-0"
                    >
                      <div className="grid grid-cols-3 gap-8">
                        {servicesMenu.map((section, idx) => {
                          const SectionIcon = section.icon;
                          return (
                            <div key={idx}>
                              <div className="flex items-center gap-3 mb-6">
                                <div className="p-2.5 bg-accent/10 rounded-lg">
                                  <SectionIcon className="w-5 h-5 text-accent" />
                                </div>
                                <h3 className="text-base font-black text-primary uppercase tracking-wider">{section.title}</h3>
                              </div>
                              <ul className="space-y-4">
                                {section.items.map((item) => {
                                  const ItemIcon = item.icon;
                                  return (
                                    <li key={item.name}>
                                      <a href={item.href} className="group/item flex items-start gap-3 p-2.5 rounded-lg hover:bg-gray-50 transition-all duration-300">
                                        <ItemIcon className="w-4.5 h-4.5 text-accent flex-shrink-0 mt-0.5" />
                                        <div>
                                          <div className="font-black text-primary group-hover/item:text-accent transition-colors text-xs">
                                            {item.name}
                                          </div>
                                          <div className="text-gray-500 text-[10px] mt-1 line-clamp-1">{item.desc}</div>
                                        </div>
                                      </a>
                                    </li>
                                  );
                                })}
                              </ul>
                            </div>
                          );
                        })}
                      </div>
                      
                      {/* Mega Menu Footer CTA */}
                      <div className="mt-8 pt-6 border-t border-gray-100">
                        <div className="flex items-center justify-between">
                          <p className="text-primary font-bold text-xs uppercase tracking-wider">Ready to optimize your logistics?</p>
                          <a href="/contact" className="px-5 py-2 bg-accent hover:bg-accent-light text-white font-black rounded-sm transition-all duration-300 text-[10px] tracking-widest">
                            REQUEST QUOTE
                          </a>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-black uppercase tracking-widest transition-colors hover:text-accent py-4 ${
                    isScrolled ? 'text-primary' : 'text-white'
                  }`}
                >
                  {link.name}
                </a>
              )
            ))}
            <a
              href="/contact"
              className="px-6 py-2.5 bg-accent text-white font-black rounded-sm hover:bg-accent-light transition-all duration-300 text-xs tracking-widest shadow-lg shadow-accent/20 whitespace-nowrap"
            >
              GET A QUOTE
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="xl:hidden p-2 rounded-md transition-colors"
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
        className={`fixed inset-0 bg-primary z-50 transition-transform duration-500 xl:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-6 flex flex-col h-full overflow-y-auto">
          <div className="flex justify-between items-center mb-12 flex-shrink-0">
            <div className="flex items-center gap-2">
              <div className="bg-accent p-1.5 rounded-lg">
                <div className="w-5 h-5 border-2 border-white rounded-sm rotate-45 flex items-center justify-center overflow-hidden">
                  <div className="w-full h-full bg-white -rotate-45 translate-x-1 translate-y-1"></div>
                </div>
              </div>
              <span className="font-black text-2xl tracking-tighter text-white">
                Seaquip<span className="text-accent">Transport</span>
              </span>
            </div>
            <button onClick={() => setIsMobileMenuOpen(false)} className="text-white p-2">
              <X size={32} />
            </button>
          </div>

          <div className="flex flex-col gap-6 items-center text-center pb-12">
            {navLinks.map((link) => (
              link.hasMegaMenu ? (
                <div key={link.name} className="w-full">
                  <button
                    className="text-xl font-black text-white uppercase tracking-widest hover:text-accent transition-colors flex items-center justify-center gap-2 mb-2 w-full py-2"
                    onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                  >
                    {link.name}
                    <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isMobileServicesOpen ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {/* Mobile Mega Menu */}
                  {isMobileServicesOpen && (
                    <div className="bg-white/5 rounded-xl p-4 space-y-6 mt-2 border border-white/10 text-left">
                      {servicesMenu.map((section, idx) => {
                        const SectionIcon = section.icon;
                        return (
                          <div key={idx}>
                            <div className="flex items-center gap-2 mb-3 border-b border-white/5 pb-2">
                              <SectionIcon className="w-4 h-4 text-accent" />
                              <h3 className="text-xs font-black text-accent uppercase tracking-widest">{section.title}</h3>
                            </div>
                            <ul className="space-y-1">
                              {section.items.map((item) => {
                                const ItemIcon = item.icon;
                                return (
                                  <li key={item.name}>
                                    <a 
                                      href={item.href}
                                      className="flex items-start gap-3 p-2 rounded-lg hover:bg-white/5 transition-all group"
                                      onClick={() => {
                                        setIsMobileMenuOpen(false)
                                        setIsMobileServicesOpen(false)
                                      }}
                                    >
                                      <ItemIcon className="w-4 h-4 text-accent/60 group-hover:text-accent flex-shrink-0 mt-0.5" />
                                      <div>
                                        <div className="text-white group-hover:text-accent transition-colors text-sm font-bold">{item.name}</div>
                                        <div className="text-white/40 text-[10px] mt-0.5 line-clamp-1">{item.desc}</div>
                                      </div>
                                    </a>
                                  </li>
                                );
                              })}
                            </ul>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-xl font-black text-white uppercase tracking-widest hover:text-accent transition-colors py-2 w-full"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              )
            ))}
            <a
              href="/contact"
              className="mt-4 px-10 py-4 bg-accent text-white font-black rounded-sm hover:bg-accent-light transition-all duration-300 text-sm tracking-widest shadow-lg shadow-accent/20"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              GET A QUOTE
            </a>

            {/* Mobile Contact Info */}
            <div className="mt-8 pt-8 border-t border-white/10 w-full">
              <div className="flex flex-col items-center gap-4 text-white/60">
                <div className="flex items-center gap-2 text-sm">
                  <Phone className="w-4 h-4 text-accent" />
                  <span>404-388-9408</span>
                </div>
                <div className="flex items-center gap-2 text-sm lowercase">
                  <Mail className="w-4 h-4 text-accent" />
                  <span>WILEYJONES90@YAHOO.COM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
