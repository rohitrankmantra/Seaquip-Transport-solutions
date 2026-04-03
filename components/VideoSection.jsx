'use client'

import Link from 'next/link'
import { ScrollReveal } from './ScrollReveal'
import { Play } from 'lucide-react'

export function VideoSection() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal className="relative group">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.pexels.com/photos/5025637/pexels-photo-5025637.jpeg?auto=compress&cs=tinysrgb&w=1200" 
                alt="Video thumbnail" 
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-primary/30 flex items-center justify-center">
                <button className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-500 animate-pulse">
                  <Play className="w-8 h-8 text-accent fill-accent ml-1" />
                </button>
              </div>
            </div>
            {/* Background shape */}
            <div className="absolute -z-10 -bottom-8 -left-8 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
          </ScrollReveal>

          <ScrollReveal>
            <div className="space-y-8">
              <div>
                <span className="text-accent font-black uppercase tracking-[0.2em] text-sm mb-4 block">WHY CHOOSE US</span>
                <h2 className="text-4xl md:text-5xl font-black text-primary leading-tight mb-6">
                  We'll make this whole moving thing easy for you
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  Mauris nec ex non purus facilisis convallis sit amet ut odio. Curabitur sed lectus at ante viverra hendrerit sit amet non mi. Nam placerat eros in lectus vehicula, ac hendrerit ante porta.
                </p>
                <Link href="/why-choose-us">
                  <button className="bg-accent hover:bg-accent-light text-white font-black py-4 px-12 rounded-sm transition-all duration-300">
                    LEARN MORE
                  </button>
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
