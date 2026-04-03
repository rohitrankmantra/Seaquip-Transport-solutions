'use client'

import React, { useState, useEffect, useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { ScrollReveal } from './ScrollReveal'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'

export function Testimonials() {
  const testimonials = [
    {
      name: 'Robert J. Kelman',
      role: 'CEO, Industrial Imports Inc',
      content: 'Seaquip Transport has been our go-to partner for tank storage and international shipping for over 5 years. Their professionalism and reliability are unmatched. Highly recommended!',
      avatar: 'https://i.pravatar.cc/150?u=robert'
    },
    {
      name: 'Millicent J. Randall',
      role: 'Logistics Director',
      content: 'The team at Seaquip understands our complex shipping requirements. Their 24/7 support and attention to detail have saved us time and money. Outstanding service!',
      avatar: 'https://i.pravatar.cc/150?u=millicent'
    },
    {
      name: 'William D. Kelman',
      role: 'Supply Chain Manager',
      content: 'Great experience working with Seaquip. From tank storage to hazmat handling, they handle everything with expertise and care. A true partner in our success.',
      avatar: 'https://i.pravatar.cc/150?u=william'
    }
  ]

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 5000, stopOnInteraction: true })])
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState([])

  const scrollPrev = useCallback(() => {
    emblaApi && emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    emblaApi && emblaApi.scrollNext()
  }, [emblaApi])

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

    const handleKeyDown = (event) => {
      if (event.key === 'ArrowLeft') {
        scrollPrev()
      } else if (event.key === 'ArrowRight' || event.key === ' ') {
        scrollNext()
      }
    }
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      emblaApi.off('select', onSelect)
      emblaApi.off('reInit', onSelect)
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [emblaApi, setScrollSnaps, onSelect, scrollPrev, scrollNext])

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <ScrollReveal>
            <span className="text-accent font-black uppercase tracking-[0.2em] text-sm mb-4 block">CLIENT TESTIMONIALS</span>
            <h2 className="text-3xl md:text-4xl font-black text-primary mb-6">What Our Clients Say About Seaquip</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Trusted by businesses nationwide for reliable storage and shipping solutions.
            </p>
          </ScrollReveal>
        </div>

        <div className="relative">
          <div className="embla overflow-hidden" ref={emblaRef}>
            <div className="embla__container flex">
              {testimonials.map((testimonial, index) => (
                <div className="embla__slide flex-[0_0_100%] min-w-0" key={index}>
                  <ScrollReveal className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center max-w-3xl mx-auto">
                    <div className="flex gap-1 mb-8">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-accent fill-accent" />
                      ))}
                    </div>
                    <p className="text-gray-600 italic leading-relaxed mb-10 text-lg">
                      "{testimonial.content}"
                    </p>
                    <h4 className="text-xl font-black text-primary mb-1">{testimonial.name}</h4>
                    <p className="text-gray-400 font-bold uppercase tracking-widest text-xs mb-8">{testimonial.role}</p>
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name} 
                      className="w-20 h-20 rounded-full border-4 border-gray-50"
                    />
                  </ScrollReveal>
                </div>
              ))}
            </div>
          </div>

          <button
            className="embla__button embla__button--prev absolute top-1/2 -translate-y-1/2 left-4 p-2 rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors z-10"
            onClick={scrollPrev}
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 text-primary" />
          </button>
          <button
            className="embla__button embla__button--next absolute top-1/2 -translate-y-1/2 right-4 p-2 rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors z-10"
            onClick={scrollNext}
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 text-primary" />
          </button>

          <div className="embla__dots absolute bottom-[-40px] left-0 right-0 flex justify-center gap-2 z-20">
            {scrollSnaps.map((_, index) => (
              <button
                key={index}
                className={`embla__dot w-3 h-3 rounded-full bg-primary transition-all duration-300 ${
                  index === selectedIndex ? 'w-8 bg-accent' : 'opacity-30'
                }`}
                onClick={() => scrollTo(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
