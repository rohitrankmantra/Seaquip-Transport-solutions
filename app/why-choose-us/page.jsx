'use client'

import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { ScrollProgressBar } from '@/components/ScrollProgressBar'
import { ScrollReveal } from '@/components/ScrollReveal'
import { TrendingUp, Zap, Clock, Shield } from 'lucide-react'

export default function WhyChooseUsPage() {
  const benefits = [
    {
      icon: TrendingUp,
      title: 'Industry Leadership',
      desc: 'Three decades of proven excellence in tank storage and logistics with continuous innovation.'
    },
    {
      icon: Zap,
      title: 'Advanced Technology',
      desc: 'Real-time tracking, automated inventory management, and environmental monitoring systems.'
    },
    {
      icon: Clock,
      title: '24/7 Support',
      desc: 'Round-the-clock customer service and emergency response capabilities for peace of mind.'
    },
    {
      icon: Shield,
      title: 'Fully Compliant',
      desc: 'Complete regulatory compliance, full insurance coverage, and certified professionals.'
    }
  ]

  const features = [
    { title: 'Climate Control', desc: 'Precision temperature control (50-80°F) with automated monitoring' },
    { title: 'Security', desc: '24/7 video surveillance, access controls, and armed response' },
    { title: 'Capacity', desc: '450+ storage units in varying sizes and configurations' },
    { title: 'Insurance', desc: 'Comprehensive coverage included with all storage solutions' },
    { title: 'Flexibility', desc: 'Month-to-month or long-term leases tailored to your needs' },
    { title: 'Accessibility', desc: 'Easy access during business hours and emergency availability' }
  ]

  const certificates = [
    'DOT Hazmat Certification',
    'EPA Compliance Certified',
    'OSHA Safety Certified',
    'ISO 9001:2015 Certified',
    'Bonded & Insured',
    'AAA Rating'
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
              <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">Why Choose Seaquip?</h1>
              <p className="text-2xl text-white/90 max-w-3xl">
                The trusted choice for tank storage and shipping services
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Main Benefits */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <ScrollReveal key={index}>
                  <div className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-all">
                    <benefit.icon className="w-12 h-12 text-accent mb-4" />
                    <h3 className="text-2xl font-black text-primary mb-4">{benefit.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{benefit.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Detailed Features */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <h2 className="text-4xl font-black text-primary mb-16 text-center">Our Facilities & Features</h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <ScrollReveal key={index}>
                  <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all">
                    <h3 className="text-xl font-black text-primary mb-3">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <h2 className="text-4xl font-black text-primary mb-12 text-center">Seaquip vs Others</h2>
            </ScrollReveal>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="border border-gray-300 px-6 py-3 text-left font-black">Feature</th>
                    <th className="border border-gray-300 px-6 py-3 text-center font-black">Seaquip</th>
                    <th className="border border-gray-300 px-6 py-3 text-center font-black">Standard</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { feature: '24/7 Support', seaquip: '✓', standard: '✗' },
                    { feature: 'Climate Control', seaquip: '✓', standard: 'Limited' },
                    { feature: 'Real-time Tracking', seaquip: '✓', standard: '✗' },
                    { feature: 'Insurance Included', seaquip: '✓', standard: 'Extra Cost' },
                    { feature: 'Hazmat Certified', seaquip: '✓', standard: 'Some' },
                    { feature: 'Flexible Terms', seaquip: '✓', standard: 'Limited' }
                  ].map((row, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="border border-gray-300 px-6 py-4 font-bold text-gray-700">{row.feature}</td>
                      <td className="border border-gray-300 px-6 py-4 text-center text-accent font-black">{row.seaquip}</td>
                      <td className="border border-gray-300 px-6 py-4 text-center text-gray-500">{row.standard}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <h2 className="text-4xl font-black text-primary mb-16 text-center">Our Certifications</h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {certificates.map((cert, index) => (
                <ScrollReveal key={index}>
                  <div className="bg-white p-8 rounded-xl shadow-lg text-center border-t-4 border-accent">
                    <h3 className="text-lg font-black text-primary">{cert}</h3>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <h2 className="text-4xl font-black text-primary mb-16 text-center">Client Success</h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { stat: '95%', label: 'Client Satisfaction' },
                { stat: '450+', label: 'Active Storage Units' },
                { stat: '12K+', label: 'Annual Shipments' }
              ].map((item, index) => (
                <ScrollReveal key={index}>
                  <div className="bg-linear-to-br from-primary to-primary/80 text-white p-10 rounded-2xl text-center">
                    <h3 className="text-5xl font-black mb-3">{item.stat}</h3>
                    <p className="text-xl">{item.label}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-accent text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <ScrollReveal>
              <h2 className="text-4xl font-black mb-6">Experience the Seaquip Difference</h2>
              <p className="text-xl text-white/90 mb-8">
                Join thousands of satisfied clients who trust us for their logistics needs.
              </p>
              <a href="/contact">
                <button className="bg-white hover:bg-gray-100 text-accent font-black py-4 px-12 rounded-sm transition-all duration-300 text-lg tracking-widest">
                  GET STARTED TODAY
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
