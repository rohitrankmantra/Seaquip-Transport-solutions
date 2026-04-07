'use client'

import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { ScrollProgressBar } from '@/components/ScrollProgressBar'
import { ScrollReveal } from '@/components/ScrollReveal'
import { CheckCircle2, Thermometer } from 'lucide-react'

export default function TemperatureControlPage() {
  const features = [
    'Automated monitoring',
    'Backup power systems',
    'Environmental alerts',
    'Compliance certified',
    'Precise humidity control',
    'Real-time temperature logging'
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
                <Thermometer className="w-16 h-16 text-accent" />
              </div>
              <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">Temperature Control</h1>
              <p className="text-xl text-white/90 max-w-3xl mb-8 mx-auto">
                Advanced HVAC systems maintain precise temperature and humidity levels for sensitive cargo, ensuring the integrity of your products throughout the storage cycle.
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
                  <h2 className="text-3xl md:text-4xl font-black text-primary mb-8">Why Choose Our Temperature Control?</h2>
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
                  src="https://images.pexels.com/photos/30115463/pexels-photo-30115463.jpeg" 
                  alt="Temperature Control Facilities" 
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
              <h2 className="text-3xl md:text-4xl font-black text-primary mb-12 text-center">Technical Specifications</h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: 'Range', value: '-20°C to +25°C', desc: 'Versatile cooling and heating' },
                { title: 'Redundancy', value: 'N+1 System', desc: 'Guaranteed uptime for critical cargo' },
                { title: 'Monitoring', value: '24/7/365', desc: 'Continuous automated tracking' }
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
              <h2 className="text-4xl font-black mb-6">Need Climate-Controlled Storage?</h2>
              <p className="text-xl text-white/90 mb-8">Contact Seaquip Transport Solutions today for a customized environmental management plan.</p>
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
