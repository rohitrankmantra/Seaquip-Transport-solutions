'use client'

import React, { useState, useEffect, useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { ScrollReveal } from './ScrollReveal'

export function HeroSlider() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 5000, stopOnInteraction: false, stopOnMouseEnter: true })])
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState([])

  const scrollTo = useCallback((index) => {
    emblaApi && emblaApi.scrollTo(index)
  }, [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi, setSelectedIndex])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    setScrollSnaps(emblaApi.scrollSnapList())
    emblaApi.on('select', onSelect)
    emblaApi.on('reInit', onSelect)
    // Keyboard navigation
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowLeft') {
        emblaApi.scrollPrev()
      } else if (event.key === 'ArrowRight' || event.key === ' ') { // Add spacebar for next slide
        emblaApi.scrollNext()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      emblaApi.off('select', onSelect)
      emblaApi.off('reInit', onSelect)
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [emblaApi, setScrollSnaps, onSelect])

  const slides = [
    {
      id: 1,
      image: 'https://images.pexels.com/photos/5025641/pexels-photo-5025641.jpeg?auto=compress&cs=tinysrgb&w=1600',
      headline: 'Tank Storage<br />Solutions You Can Trust',
      subheadline: 'Seaquip Transport Solutions BV offers secure, climate-controlled tank storage facilities designed to protect your valuable inventory.',
      buttonText: 'CONTACT NOW',
      buttonLink: '/contact'
    },
    {
      id: 2,
      image: 'https://images.pexels.com/photos/5025644/pexels-photo-5025644.jpeg?auto=compress&cs=tinysrgb&w=1600',
      headline: 'Reliable Shipping<br />Services Worldwide',
      subheadline: 'Expert international and domestic shipping with real-time tracking, secure handling, and on-time delivery guaranteed.',
      buttonText: 'LEARN MORE',
      buttonLink: '/services'
    },
    {
      id: 3,
      image: 'https://images.pexels.com/photos/5025637/pexels-photo-5025637.jpeg?auto=compress&cs=tinysrgb&w=1600',
      headline: 'Professional Logistics<br />At Competitive Rates',
      subheadline: 'From tank storage to full shipping solutions, we provide comprehensive logistics services tailored to your business needs.',
      buttonText: 'GET A QUOTE',
      buttonLink: '/contact'
    },
    {
      id: 4,
      image: 'https://images.pexels.com/photos/5025649/pexels-photo-5025649.jpeg?auto=compress&cs=tinysrgb&w=1600',
      headline: 'Secure Tank Storage<br />Facilities Nationwide',
      subheadline: 'State-of-the-art storage infrastructure with 24/7 security monitoring and environmental controls for complete peace of mind.',
      buttonText: 'BOOK NOW',
      buttonLink: '/contact'
    },
    {
      id: 5,
      image: 'https://images.pexels.com/photos/5025662/pexels-photo-5025662.jpeg?auto=compress&cs=tinysrgb&w=1600',
      headline: 'Expert Handling<br />Of Hazardous & Specialty Cargo',
      subheadline: 'Licensed, trained professionals with extensive experience in handling specialized shipments with full compliance and safety.',
      buttonText: 'REQUEST QUOTE',
      buttonLink: '/contact'
    }
  ]

  return (
    <section className="relative h-[100vh] flex items-center justify-center overflow-hidden pt-20">
      <div className="embla w-full h-full absolute inset-0" ref={emblaRef}>
        <div className="embla__container h-full">
          {slides.map((slide) => (
            <div className="embla__slide relative min-h-[95vh] flex items-center justify-center" key={slide.id}>
              <img
                src={slide.image}
                alt={slide.headline.replace(/<br \/>/g, ' ')} // Use headline as alt text, remove <br />
                className="absolute inset-0 z-0 w-full h-full object-cover"
                loading="lazy" // Enable lazy loading
              />
              <div
                className="absolute inset-0 z-0"
                style={{
                  backgroundImage: `linear-gradient(rgba(27, 58, 82, 0.4), rgba(27, 58, 82, 0.4))`,
                }}
              />
              <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center text-white">
                <ScrollReveal>
                  <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-[1.1] tracking-tight text-white" style={{ fontFamily: "'Montserrat', sans-serif" }} dangerouslySetInnerHTML={{ __html: slide.headline }} />
                  <p className="text-base sm:text-lg md:text-xl text-white/90 mb-10 max-w-3xl mx-auto font-normal">
                    {slide.subheadline}
                  </p>
                  <div className="flex justify-center">
                    <a
                      href={slide.buttonLink}
                      className="px-8 py-4 bg-accent text-white font-semibold rounded-sm hover:bg-accent-light transition-all duration-300 flex items-center gap-2 group tracking-wider text-sm"
                    >
                      {slide.buttonText}
                      <span className="group-hover:translate-x-1 transition-transform">›</span>
                    </a>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="embla__dots absolute bottom-8 left-0 right-0 flex justify-center gap-2 z-20">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            className={`embla__dot w-3 h-3 rounded-full bg-white transition-all duration-300 ${
              index === selectedIndex ? 'w-8 bg-accent' : 'opacity-50'
            }`}
            onClick={() => scrollTo(index)}
          />
        ))}
      </div>
    </section>
  )
}
