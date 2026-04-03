'use client'

import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, Headphones } from 'lucide-react'

export function Footer() {
  return (
    <footer className="relative bg-[#0F172A] text-white pt-32 pb-12">
      {/* Floating CTA Box */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl px-4 z-20">
        <div className="bg-[#B9D1E1] rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl overflow-hidden relative">
          <div className="flex-1 space-y-4">
            <h2 className="text-3xl md:text-4xl font-black text-[#1B3A52]">Have A Plan To Move?</h2>
            <p className="text-[#1B3A52]/80 text-sm md:text-base max-w-xl font-medium">
              Mus pede ligula praesent mattis magna aptent lacus risus vulputate euismod dolor. Accumsan integer imperdiet diam dui eu netus tempor bibendum.
            </p>
            <button className="bg-[#22C55E] hover:bg-[#16A34A] text-white font-black px-8 py-3 rounded-lg flex items-center gap-2 transition-all group text-sm tracking-wider">
              GET A QUOTE
              <span className="group-hover:translate-x-1 transition-transform">›</span>
            </button>
          </div>
          <div className="hidden md:block w-64 h-64 relative">
             <img 
               src="https://images.pexels.com/photos/5025644/pexels-photo-5025644.jpeg?auto=compress&cs=tinysrgb&w=400" 
               alt="Mover with box" 
               className="absolute bottom-0 right-0 w-full h-full object-contain"
             />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
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
                Eaze<span className="text-[#22C55E]">Move</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed font-medium">
              Ut at quisque sodales aenean integer odio tristique condimentum sollicitudin. Class ornare quisque tincidunt efficitur augue conubia gravida.
            </p>
            <div className="bg-white/5 rounded-xl p-4 flex items-center gap-4 group hover:bg-white/10 transition-all border border-white/5">
              <div className="w-12 h-12 bg-[#22C55E]/20 rounded-lg flex items-center justify-center group-hover:bg-[#22C55E] transition-all">
                <Headphones className="w-6 h-6 text-[#22C55E] group-hover:text-white" />
              </div>
              <div>
                <div className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Call Center 24/7</div>
                <div className="text-lg font-black text-white">+1 555 707-1234</div>
              </div>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-lg font-black text-[#22C55E] mb-8">Services</h3>
            <ul className="space-y-4">
              {['Local Moving', 'Long Distance Moving', 'Storage Services', 'Office Moving', 'Overseas Moving'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-400 hover:text-white font-semibold transition-all flex items-center gap-2 group text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* About Column */}
          <div>
            <h3 className="text-lg font-black text-[#22C55E] mb-8">About</h3>
            <ul className="space-y-4">
              {['Contact Us', 'FAQs', 'Press', 'Our Blog', 'Careers'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-400 hover:text-white font-semibold transition-all flex items-center gap-2 group text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Get In Touch Column */}
          <div>
            <h3 className="text-lg font-black text-[#22C55E] mb-8">Get In Touch</h3>
            <div className="space-y-6">
              <div className="flex gap-4">
                <MapPin className="w-5 h-5 text-[#22C55E] flex-shrink-0" />
                <p className="text-gray-400 text-sm font-medium">789 Oak St, Smalltown<br />United State 23456</p>
              </div>
              <div className="flex gap-4 border-t border-white/5 pt-6">
                <Phone className="w-5 h-5 text-[#22C55E] flex-shrink-0" />
                <p className="text-gray-400 text-sm font-medium">+1 (555) 987 6541</p>
              </div>
              <div className="flex gap-4 border-t border-white/5 pt-6">
                <Mail className="w-5 h-5 text-[#22C55E] flex-shrink-0" />
                <p className="text-gray-400 text-sm font-medium">hello@yourdomain.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-6 text-gray-500 text-xs font-bold">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <span className="w-px h-3 bg-white/10"></span>
            <a href="#" className="hover:text-white transition-colors">Terms and Conditions</a>
          </div>
          <div className="text-gray-500 text-xs font-bold">
            Copyright © 2024 EazeMove by TBWBThemes
          </div>
        </div>
      </div>
    </footer>
  )
}
