'use client'

import Link from 'next/link'
import { ScrollReveal } from './ScrollReveal'

export function Banner({ 
  title = "Professional Tank Storage & Shipping Solutions Nationwide", 
  subtitle = "Trust Seaquip Transport Solutions BV for secure, climate-controlled storage and reliable shipping services. Contact us for a free quote today.",
  buttonText = "REQUEST A QUOTE",
  buttonLink = "/contact",
  bgImage = "https://images.pexels.com/photos/5025667/pexels-photo-5025667.jpeg?auto=compress&cs=tinysrgb&w=1600",
  className = ""
}) {
  return (
    <section className={`relative py-24 overflow-hidden ${className}`}>
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(rgba(27, 58, 82, 0.85), rgba(27, 58, 82, 0.85)), url("${bgImage}")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      />
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-8 leading-tight">
            {title}
          </h2>
          <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto font-medium leading-relaxed">
            {subtitle}
          </p>
          <Link href={buttonLink}>
            <button className="bg-accent hover:bg-accent-light text-white font-black py-4 px-12 rounded-sm transition-all duration-300 text-sm tracking-widest">
              {buttonText}
            </button>
          </Link>
        </ScrollReveal>
      </div>
    </section>
  )
}
