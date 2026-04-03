'use client'

import { ScrollReveal } from './ScrollReveal'
import { CheckCircle2 } from 'lucide-react'

export function AboutSection() {
  const benefits = [
    'Dedicated Professional Mover',
    'We provide professional service company',
    'All types of Moving Solution'
  ]

  return (
    <section className="py-24 bg-white overflow-hidden grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img 
                  src="https://images.pexels.com/photos/5025669/pexels-photo-5025669.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Moving service 1" 
                  className="rounded-2xl w-full h-64 object-cover"
                />
                <img 
                  src="https://images.pexels.com/photos/5025641/pexels-photo-5025641.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Moving service 2" 
                  className="rounded-2xl w-full h-48 object-cover"
                />
              </div>
              <div className="pt-8">
                <img 
                  src="https://images.pexels.com/photos/5025644/pexels-photo-5025644.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Moving service 3" 
                  className="rounded-2xl w-full h-[400px] object-cover"
                />
              </div>
            </div>
            {/* Experience Badge */}
            <div className="absolute -bottom-6 -right-6 bg-accent text-white p-8 rounded-2xl shadow-xl">
              <div className="text-4xl font-black mb-1">25+</div>
              <div className="text-sm font-bold uppercase tracking-wider">Years of Experience</div>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="space-y-8">
              <div>
                <span className="text-accent font-black uppercase tracking-[0.2em] text-sm mb-4 block">WHO WE ARE</span>
                <h2 className="text-4xl md:text-5xl font-black text-primary leading-tight mb-6">
                  We promise not to leave any scratches on your nice furniture
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Mauris nec ex non purus facilisis convallis sit amet ut odio. Curabitur sed lectus at ante viverra hendrerit sit amet non mi. Nam placerat eros in lectus vehicula, ac hendrerit ante porta.
                </p>
              </div>

              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="text-accent w-6 h-6 flex-shrink-0" />
                    <span className="text-primary font-bold">{benefit}</span>
                  </div>
                ))}
              </div>

              <button className="bg-accent hover:bg-accent-light text-white font-black py-4 px-10 rounded-sm transition-all duration-300">
                DISCOVER MORE
              </button>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
