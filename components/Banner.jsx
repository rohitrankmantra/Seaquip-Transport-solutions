'use client'

import { ScrollReveal } from './ScrollReveal'

export function Banner({ 
  title = "We will take care of all your moving needs from A to Z", 
  subtitle = "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from 'de Finibus Bonorum et Malorum'.",
  buttonText = "GET STARTED",
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
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 leading-tight">
            {title}
          </h2>
          <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto font-medium leading-relaxed">
            {subtitle}
          </p>
          <button className="bg-accent hover:bg-accent-light text-white font-black py-4 px-12 rounded-sm transition-all duration-300 text-sm tracking-widest">
            {buttonText}
          </button>
        </ScrollReveal>
      </div>
    </section>
  )
}
