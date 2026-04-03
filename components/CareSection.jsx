'use client'

import { ScrollReveal } from './ScrollReveal'
import { Clock, Users, Shield, Headphones } from 'lucide-react'

export function CareSection() {
  const points = [
    { icon: Clock, title: 'Quick Quotes', desc: 'Fast assessment and transparent pricing for all our services.' },
    { icon: Users, title: 'Expert Team', desc: 'Certified professionals with extensive logistics experience.' },
    { icon: Shield, title: 'Fully Insured', desc: 'Complete coverage and security for all shipments and storage.' },
    { icon: Headphones, title: '24/7 Support', desc: 'Dedicated customer service available around the clock.' }
  ]

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal>
            <span className="text-accent font-black uppercase tracking-[0.2em] text-sm mb-4 block">WHY CHOOSE US</span>
            <h2 className="text-3xl md:text-4xl font-black text-primary leading-tight mb-8">
              Your Logistics Partner for secure Storage & Reliable Shipping
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-12">
              Seaquip Transport Solutions is your trusted partner for tank storage and shipping. With advanced facilities, certified professionals, and a commitment to excellence, we ensure your cargo is always handled with the utmost care.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
              {points.map((point, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <point.icon className="w-8 h-8 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-primary mb-2">{point.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{point.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.pexels.com/photos/5025644/pexels-photo-5025644.jpeg?auto=compress&cs=tinysrgb&w=1200" 
                alt="Movers loading truck" 
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute top-8 right-8 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-xl flex items-center gap-4">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center text-white font-black text-2xl">15+</div>
                <div className="text-primary font-bold leading-tight">Storage Center<br />Available</div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
