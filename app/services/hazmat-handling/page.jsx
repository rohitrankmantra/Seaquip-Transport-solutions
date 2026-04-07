'use client'

import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { ScrollProgressBar } from '@/components/ScrollProgressBar'
import { ScrollReveal } from '@/components/ScrollReveal'
import { CheckCircle2, AlertTriangle } from 'lucide-react'

export default function HazmatHandlingPage() {
  const features = [
    'DOT certified handling',
    'EPA compliant storage',
    'OSHA safe environments',
    'Emergency response teams',
    'Advanced spill containment',
    'Full documentation compliance'
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
              <div className="flex justify-center mb-6">
                <AlertTriangle className="w-16 h-16 text-accent" />
              </div>
              <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">Hazmat Handling</h1>
              <p className="text-xl text-white/90 max-w-3xl mb-8 mx-auto">
                Licensed specialists certified for the safe handling and storage of hazardous materials with full regulatory compliance and emergency response capabilities.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <ScrollReveal>
                <div className="space-y-6">
                  <h2 className="text-3xl md:text-4xl font-black text-primary mb-8">Why Choose Our Hazmat Services?</h2>
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <CheckCircle2 className="text-accent w-6 h-6 flex-shrink-0 mt-1" />
                      <div>
                        <p className="text-gray-700 font-bold text-lg">{feature}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
              <ScrollReveal>
                <img 
                  src="https://images.pexels.com/photos/5025641/pexels-photo-5025641.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Hazmat Handling Facilities" 
                  className="rounded-2xl shadow-xl w-full h-96 object-cover"
                />
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Specifications Section */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-black text-primary mb-12 text-center">Compliance Standards</h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: 'Training', value: '40hr HAZWOPER', desc: 'Expertise in hazardous waste operations' },
                { title: 'Response', value: '< 30 Minutes', desc: 'Rapid emergency response protocols' },
                { title: 'Certifications', value: 'Full License', desc: 'Complying with all local and federal laws' }
              ].map((spec, index) => (
                <ScrollReveal key={index}>
                  <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                    <h3 className="text-2xl font-black text-primary mb-2">{spec.value}</h3>
                    <p className="text-gray-700 font-bold mb-2">{spec.title}</p>
                    <p className="text-gray-600 text-sm">{spec.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-primary text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <ScrollReveal>
              <h2 className="text-4xl font-black mb-6">Need Hazmat Storage or Shipping?</h2>
              <p className="text-xl text-white/90 mb-8">Contact Seaquip Transport Solutions today for a secure handling and storage quote.</p>
              <a href="/contact">
                <button className="bg-accent hover:bg-accent-light text-white font-black py-4 px-12 rounded-sm transition-all duration-300 text-lg tracking-widest">
                  REQUEST A QUOTE
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
