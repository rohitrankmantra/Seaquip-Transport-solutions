'use client'

import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { ScrollProgressBar } from '@/components/ScrollProgressBar'
import { ScrollReveal } from '@/components/ScrollReveal'
import { CheckCircle2 } from 'lucide-react'

export default function ShippingServicesPage() {
  const services = [
    'Real-time shipment tracking',
    'Door-to-door delivery',
    'International shipping',
    'Customs clearance assistance',
    'Insurance available',
    'Flexible scheduling'
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
              <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">Reliable Shipping Services</h1>
              <p className="text-xl text-white/90 max-w-3xl mb-8">
                From domestic to international shipping, Seaquip Transport Solutions BV delivers your cargo safely and on time with comprehensive tracking and professional handling.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <ScrollReveal>
                <img 
                  src="https://images.pexels.com/photos/5025641/pexels-photo-5025641.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Shipping Services" 
                  className="rounded-2xl shadow-xl w-full h-96 object-cover"
                />
              </ScrollReveal>
              <ScrollReveal>
                <div className="space-y-6">
                  <h2 className="text-3xl md:text-4xl font-black text-primary mb-8">Why Our Shipping?</h2>
                  {services.map((service, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <CheckCircle2 className="text-accent w-6 h-6 flex-shrink-0 mt-1" />
                      <div>
                        <p className="text-gray-700 font-bold text-lg">{service}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Shipping Types */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-black text-primary mb-12 text-center">Our Shipping Options</h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: 'Standard Shipping', desc: '5-7 business days delivery', icon: '📦' },
                { title: 'Express Shipping', desc: '1-3 business days delivery', icon: '⚡' },
                { title: 'Hazmat Shipping', desc: 'Licensed specialized handling', icon: '⚠️' }
              ].map((option, index) => (
                <ScrollReveal key={index}>
                  <div className="bg-white p-8 rounded-xl shadow-lg">
                    <div className="text-4xl mb-4">{option.icon}</div>
                    <h3 className="text-2xl font-black text-primary mb-4">{option.title}</h3>
                    <p className="text-gray-600 text-lg">{option.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Statistics */}
        <section className="py-24 bg-primary text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
              <ScrollReveal>
                <h3 className="text-5xl font-black mb-2">12K+</h3>
                <p className="text-xl">Successful Shipments</p>
              </ScrollReveal>
              <ScrollReveal>
                <h3 className="text-5xl font-black mb-2">98%</h3>
                <p className="text-xl">On-Time Delivery Rate</p>
              </ScrollReveal>
              <ScrollReveal>
                <h3 className="text-5xl font-black mb-2">50+</h3>
                <p className="text-xl">Countries Served</p>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <ScrollReveal>
              <h2 className="text-4xl font-black text-primary mb-6">Get Your Shipment Moving Today</h2>
              <p className="text-xl text-gray-600 mb-8">Contact us for fast, reliable shipping solutions.</p>
              <a href="/contact">
                <button className="bg-accent hover:bg-accent-light text-white font-black py-4 px-12 rounded-sm transition-all duration-300 text-lg tracking-widest">
                  REQUEST SHIPPING QUOTE
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
