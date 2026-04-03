'use client'

import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { ScrollProgressBar } from '@/components/ScrollProgressBar'
import { ScrollReveal } from '@/components/ScrollReveal'
import { Star } from 'lucide-react'

export default function TestimonialsPage() {
  const testimonials = [
    {
      name: 'Robert J. Kelman',
      company: 'Industrial Imports Inc',
      role: 'Supply Chain Director',
      image: 'https://i.pravatar.cc/300?u=robert',
      content: 'Seaquip Transport has been our go-to partner for tank storage and international shipping for over 5 years. Their professionalism, reliability, and attention to detail are unmatched in the industry. They\'ve helped us scale our operations significantly.',
      rating: 5
    },
    {
      name: 'Sarah Anderson',
      company: 'ChemTech Solutions',
      role: 'Operations Manager',
      image: 'https://i.pravatar.cc/300?u=sarah',
      content: 'The team at Seaquip understands our complex shipping requirements for hazardous materials. Their 24/7 support and expertise have saved us tremendous time and prevented costly mistakes. Highly recommended!',
      rating: 5
    },
    {
      name: 'William D. Kelman',
      company: 'Precision Manufacturing',
      role: 'Logistics Manager',
      image: 'https://i.pravatar.cc/300?u=william',
      content: 'Great experience working with Seaquip. From tank storage to specialized handling, they manage everything with expertise and care. A true partner in our success and growth.',
      rating: 5
    },
    {
      name: 'Jennifer Martinez',
      company: 'GlobalTrade Corp',
      role: 'Finance Director',
      image: 'https://i.pravatar.cc/300?u=jennifer',
      content: 'Excellent value for money. Their transparent pricing and reliable service have reduced our logistics costs while improving reliability. The team is professional and responsive.',
      rating: 5
    },
    {
      name: 'David Thompson',
      company: 'East Coast Distribution',
      role: 'CEO',
      image: 'https://i.pravatar.cc/300?u=david',
      content: 'We trust Seaquip with our most critical shipments. Their proven track record, certifications, and commitment to safety give us peace of mind knowing our inventory is in good hands.',
      rating: 5
    },
    {
      name: 'Michelle Wong',
      company: 'Quality Logistics',
      role: 'Business Owner',
      image: 'https://i.pravatar.cc/300?u=michelle',
      content: 'Outstanding customer service and support. The facilities are clean, well-maintained, and secure. We\'ve seen significant improvements in our storage efficiency since partnering with them.',
      rating: 5
    }
  ]

  return (
    <>
      <ScrollProgressBar />
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[70vh] md:h-[80vh] bg-linear-to-b from-primary to-primary/90 text-white flex items-center justify-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <ScrollReveal>
              <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">Client Testimonials</h1>
              <p className="text-2xl text-white/90 max-w-3xl">
                Trusted by businesses across the country for reliable logistics solutions
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Stats */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <ScrollReveal>
                <div>
                  <h3 className="text-5xl font-black text-accent mb-2">95%</h3>
                  <p className="text-gray-600 font-bold uppercase">Client Satisfaction</p>
                </div>
              </ScrollReveal>
              <ScrollReveal>
                <div>
                  <h3 className="text-5xl font-black text-accent mb-2">500+</h3>
                  <p className="text-gray-600 font-bold uppercase">Happy Clients</p>
                </div>
              </ScrollReveal>
              <ScrollReveal>
                <div>
                  <h3 className="text-5xl font-black text-accent mb-2">12K+</h3>
                  <p className="text-gray-600 font-bold uppercase">Shipments Handled</p>
                </div>
              </ScrollReveal>
              <ScrollReveal>
                <div>
                  <h3 className="text-5xl font-black text-accent mb-2">30</h3>
                  <p className="text-gray-600 font-bold uppercase">Years Trusted</p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Testimonials Grid */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <ScrollReveal key={index}>
                  <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all">
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-accent fill-accent" />
                      ))}
                    </div>
                    <p className="text-gray-600 italic mb-6 leading-relaxed">
                      "{testimonial.content}"
                    </p>
                    <div className="flex items-center gap-4">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <p className="font-black text-primary">{testimonial.name}</p>
                        <p className="text-sm text-gray-600">{testimonial.role}</p>
                        <p className="text-xs text-accent font-bold">{testimonial.company}</p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies Preview */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <h2 className="text-4xl font-black text-primary mb-16 text-center">Featured Case Study</h2>
            </ScrollReveal>
            <ScrollReveal>
              <div className="bg-linear-to-r from-primary to-primary/80 text-white rounded-2xl p-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-3xl font-black mb-6">Industrial Imports Inc</h3>
                  <p className="text-lg text-white/90 mb-6 leading-relaxed">
                    When Industrial Imports Inc needed to scale their international logistics operations, they turned to Seaquip Transport Solutions for tank storage and shipping expertise. We helped them:
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold mt-1">✓</span>
                      <span>Reduced shipping costs by 30% through optimized logistics</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold mt-1">✓</span>
                      <span>Increased on-time delivery rate to 98%</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold mt-1">✓</span>
                      <span>Expanded storage capacity by 200% without capital investment</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold mt-1">✓</span>
                      <span>Improved supply chain visibility with real-time tracking</span>
                    </li>
                  </ul>
                </div>
                <img 
                  src="https://images.pexels.com/photos/5025649/pexels-photo-5025649.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Case Study" 
                  className="rounded-2xl w-full h-96 object-cover"
                />
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-accent text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <ScrollReveal>
              <h2 className="text-4xl font-black mb-6">Ready to Join Our Satisfied Clients?</h2>
              <p className="text-xl text-white/90 mb-8">
                Let us help you optimize your logistics and storage needs.
              </p>
              <a href="/contact">
                <button className="bg-white hover:bg-gray-100 text-accent font-black py-4 px-12 rounded-sm transition-all duration-300 text-lg tracking-widest">
                  GET YOUR FREE QUOTE
                </button>
              </a>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
