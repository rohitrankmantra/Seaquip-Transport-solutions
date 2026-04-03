'use client'

import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { ScrollProgressBar } from '@/components/ScrollProgressBar'
import { ScrollReveal } from '@/components/ScrollReveal'
import { Home, Globe, Package, Briefcase, Truck, Box } from 'lucide-react'
import Link from 'next/link'

export default function ServicesPage() {
  const services = [
    {
      icon: Home,
      title: 'Tank Storage',
      slug: 'tank-storage',
      desc: 'Climate-controlled tank storage with 24/7 security monitoring and environmental controls.',
      features: ['450+ storage units', 'Climate control 50-80°F', 'Flexible lease terms', '24/7 access available']
    },
    {
      icon: Globe,
      title: 'International Shipping',
      slug: 'shipping',
      desc: 'Global shipping solutions with customs clearance assistance and real-time tracking.',
      features: ['Customs handling', 'Real-time tracking', 'Door-to-door delivery', 'Full insurance']
    },
    {
      icon: Package,
      title: 'Temperature Control',
      slug: 'tank-storage',
      desc: 'Advanced HVAC systems maintain precise temperature and humidity levels for sensitive cargo.',
      features: ['Automated monitoring', 'Backup power systems', 'Environmental alerts', 'Compliance certified']
    },
    {
      icon: Briefcase,
      title: 'Hazmat Handling',
      slug: 'shipping',
      desc: 'Licensed specialists certified for safe handling of hazardous materials with full compliance.',
      features: ['DOT certified', 'EPA compliant', 'OSHA safe', 'Emergency response']
    },
    {
      icon: Truck,
      title: 'Fleet Management',
      slug: 'shipping',
      desc: 'Professional fleet operations with modern equipment and experienced drivers.',
      features: ['Modern vehicle fleet', 'Experienced drivers', 'GPS tracking', 'Maintenance included']
    },
    {
      icon: Box,
      title: 'Custom Solutions',
      slug: 'tank-storage',
      desc: 'Tailored logistics solutions designed specifically for your business requirements.',
      features: ['Flexible terms', 'Dedicated support', 'Scalable capacity', 'Industry expertise']
    }
  ]

  const process = [
    { step: 1, title: 'Assess', desc: 'We evaluate your specific storage and shipping needs' },
    { step: 2, title: 'Plan', desc: 'Create a customized solution with transparent pricing' },
    { step: 3, title: 'Implement', desc: 'Set up and begin service with dedicated support' },
    { step: 4, title: 'Optimize', desc: 'Continuous improvement and performance monitoring' }
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
              <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">Our Services</h1>
              <p className="text-2xl text-white/90 max-w-3xl">
                Comprehensive logistics solutions for tank storage and shipping needs
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <h2 className="text-4xl font-black text-primary mb-16 text-center">What We Offer</h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <ScrollReveal key={index}>
                  <Link href={`/services/${service.slug}`}>
                    <div className="bg-gray-50 p-8 rounded-xl hover:shadow-xl transition-all cursor-pointer border-l-4 border-accent group">
                      <service.icon className="w-12 h-12 text-accent mb-4 group-hover:scale-110 transition-transform" />
                      <h3 className="text-2xl font-black text-primary mb-3 group-hover:text-accent transition-colors">{service.title}</h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">{service.desc}</p>
                      <ul className="space-y-2">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                            <span className="text-accent font-bold">✓</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <div className="mt-6 text-accent font-bold group-hover:gap-2 transition-all flex items-center gap-1">
                        LEARN MORE <span>›</span>
                      </div>
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Our Process */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <h2 className="text-4xl font-black text-primary mb-16 text-center">How We Work</h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((item, index) => (
                <ScrollReveal key={index}>
                  <div className="bg-white p-8 rounded-xl shadow-lg text-center relative">
                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-accent text-white rounded-full flex items-center justify-center text-xl font-black">
                      {item.step}
                    </div>
                    <h3 className="text-xl font-black text-primary mt-4 mb-3">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                    {index < process.length - 1 && (
                      <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-accent text-2xl">
                        ›
                      </div>
                    )}
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Service Comparisons */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <h2 className="text-4xl font-black text-primary mb-12 text-center">Service Features</h2>
            </ScrollReveal>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="border border-gray-300 px-6 py-4 text-left font-black">Feature</th>
                    <th className="border border-gray-300 px-6 py-4 text-center font-black">Tank Storage</th>
                    <th className="border border-gray-300 px-6 py-4 text-center font-black">Shipping</th>
                    <th className="border border-gray-300 px-6 py-4 text-center font-black">Hazmat</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { feature: 'Climate Control', storage: '✓', shipping: 'N/A', hazmat: '✓' },
                    { feature: 'Real-time Tracking', storage: '✓', shipping: '✓', hazmat: '✓' },
                    { feature: '24/7 Access', storage: '✓', shipping: '✗', hazmat: '✓' },
                    { feature: 'Insurance Included', storage: '✓', shipping: '✓', hazmat: '✓' },
                    { feature: 'Customs Handling', storage: '✗', shipping: '✓', hazmat: '✓' },
                    { feature: 'Flexible Terms', storage: '✓', shipping: '✓', hazmat: 'Limited' }
                  ].map((row, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="border border-gray-300 px-6 py-4 font-bold text-gray-700">{row.feature}</td>
                      <td className="border border-gray-300 px-6 py-4 text-center">{row.storage}</td>
                      <td className="border border-gray-300 px-6 py-4 text-center">{row.shipping}</td>
                      <td className="border border-gray-300 px-6 py-4 text-center font-bold">{row.hazmat}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Why These Services */}
        <section className="py-24 bg-primary text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <h2 className="text-4xl font-black mb-12 text-center">Why Choose Our Services?</h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: 'Industry Expertise', desc: '30+ years of experience in tank storage and logistics' },
                { title: 'Full Compliance', desc: 'All certifications and regulatory requirements met' },
                { title: 'Cost Effective', desc: 'Competitive pricing without compromising quality' }
              ].map((item, index) => (
                <ScrollReveal key={index}>
                  <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl text-center">
                    <h3 className="text-2xl font-black mb-3">{item.title}</h3>
                    <p className="text-white/90">{item.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <ScrollReveal>
              <h2 className="text-4xl font-black text-primary mb-6">Ready to Get Started?</h2>
              <p className="text-xl text-gray-600 mb-8">
                Let's discuss how our services can help your business grow.
              </p>
              <a href="/contact">
                <button className="bg-accent hover:bg-accent-light text-white font-black py-4 px-12 rounded-sm transition-all duration-300 text-lg tracking-widest">
                  GET A FREE CONSULTATION
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
