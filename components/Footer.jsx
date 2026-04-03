'use client'

import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, Headphones } from 'lucide-react'

export function Footer() {
  return (
    <footer className="relative bg-linear-to-b from-[#0F172A] via-[#1a2e3f] to-[#0a0f1a] text-white pt-12 pb-12 overflow-hidden" style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(34, 197, 94, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(44, 82, 130, 0.1) 0%, transparent 50%), linear-gradient(to bottom, #0F172A, #020817)' }}>
   

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="bg-[#22C55E] p-1.5 rounded-lg">
                <div className="w-5 h-5 border-2 border-white rounded-sm rotate-45 flex items-center justify-center overflow-hidden">
                  <div className="w-full h-full bg-white -rotate-45 translate-x-1 translate-y-1"></div>
                </div>
              </div>
              <span className="font-black text-2xl tracking-tighter">
                Seaquip<span className="text-[#22C55E]">Transport</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed font-medium">
              Seaquip Transport Solutions BV specializes in professional tank storage and shipping services. We offer secure, climate-controlled facilities and reliable logistics solutions for businesses across the nation.
            </p>
            <div className="bg-white/5 rounded-xl p-4 flex items-center gap-4 group hover:bg-white/10 transition-all border border-white/5">
              <div className="w-12 h-12 bg-[#22C55E]/20 rounded-lg flex items-center justify-center group-hover:bg-[#22C55E] transition-all">
                <Headphones className="w-6 h-6 text-[#22C55E] group-hover:text-white" />
              </div>
              <div>
                <div className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Inquiries 24/7</div>
                <div className="text-lg font-black text-white">404-388-9408</div>
              </div>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-sm font-black text-[#22C55E] mb-8">Services</h3>
            <ul className="space-y-4">
              {[
                { name: 'Tank Storage', href: '/services/tank-storage' },
                { name: 'Shipping Services', href: '/services/shipping' },
                { name: 'All Services', href: '/services' },
                { name: 'Why Choose Us', href: '/why-choose-us' },
                { name: 'Facilities', href: '/facilities' }
              ].map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-400 hover:text-white font-semibold transition-all flex items-center gap-2 group text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* About Column */}
          <div>
            <h3 className="text-sm font-black text-[#22C55E] mb-8">About</h3>
            <ul className="space-y-4">
              {[
                { name: 'About Us', href: '/about' },
                { name: 'Safety & Compliance', href: '/safety-compliance' },
                { name: 'Careers', href: '/careers' },
                { name: 'Testimonials', href: '/testimonials' },
                { name: 'Blog', href: '/blog' }
              ].map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-400 hover:text-white font-semibold transition-all flex items-center gap-2 group text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Get In Touch Column */}
          <div>
            <h3 className="text-sm font-black text-[#22C55E] mb-8">Get In Touch</h3>
            <div className="space-y-6">
              <div className="flex gap-4">
                <MapPin className="w-5 h-5 text-[#22C55E] shrink-0" />
                <p className="text-gray-400 text-sm font-medium">1205 Shoreham Dr<br />Atlanta, GA 30349</p>
              </div>
              <div className="flex gap-4 border-t border-white/5 pt-6">
                <Phone className="w-5 h-5 text-[#22C55E] flex-shrink-0" />
                <p className="text-gray-400 text-sm font-medium">404-388-9408</p>
              </div>
              <div className="flex gap-4 border-t border-white/5 pt-6">
                <Mail className="w-5 h-5 text-[#22C55E] flex-shrink-0" />
                <p className="text-gray-400 text-sm font-medium">wileyjones90@yahoo.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-6 text-gray-500 text-xs font-bold">
            <a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a>
            <span className="w-px h-3 bg-white/10"></span>
            <a href="/terms" className="hover:text-white transition-colors">Terms and Conditions</a>
            <span className="w-px h-3 bg-white/10"></span>
            <a href="/sitemap" className="hover:text-white transition-colors">Sitemap</a>
          </div>
          <div className="text-gray-500 text-xs font-bold">
            Copyright © 2024 Seaquip Transport Solutions BV. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}
