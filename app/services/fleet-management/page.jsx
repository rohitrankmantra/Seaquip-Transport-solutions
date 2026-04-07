'use client'

import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { ScrollProgressBar } from '@/components/ScrollProgressBar'
import { ScrollReveal } from '@/components/ScrollReveal'
import { CheckCircle2, Truck } from 'lucide-react'

export default function FleetManagementPage() {
  const features = [
    'Modern vehicle fleet',
    'Experienced drivers',
    'GPS real-time tracking',
    'Maintenance included',
    'Route optimization',
    'Fuel efficiency planning'
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
                <Truck className="w-16 h-16 text-accent" />
              </div>
              <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">Fleet Management</h1>
              <p className="text-xl text-white/90 max-w-3xl mb-8 mx-auto">
                Professional fleet operations with modern equipment and experienced drivers to ensure your cargo reaches its destination safely and on time.
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
                  <h2 className="text-3xl md:text-4xl font-black text-primary mb-8">Why Choose Our Fleet?</h2>
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
                  src="https://images.pexels.com/photos/29223530/pexels-photo-29223530.png?auto=compress&cs=tinysrgb&w=800" 
                  alt="Modern Fleet Operations" 
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
              <h2 className="text-3xl md:text-4xl font-black text-primary mb-12 text-center">Operational Excellence</h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: 'Fleet Size', value: '250+ Vehicles', desc: 'Modern specialized transport' },
                { title: 'Efficiency', value: '98% Delivery', desc: 'Consistent on-time arrival' },
                { title: 'Coverage', value: 'National', desc: 'Coast-to-coast logistics' }
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
              <h2 className="text-4xl font-black mb-6">Need Professional Fleet Services?</h2>
              <p className="text-xl text-white/90 mb-8">Contact Seaquip Transport Solutions today for a fleet management plan and quote.</p>
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
