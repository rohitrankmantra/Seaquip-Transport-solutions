'use client'

import { ScrollReveal } from './ScrollReveal'
import { Home, Globe, Package, Briefcase, Truck, Box } from 'lucide-react'

export function ServicesGrid() {
  const services = [
    {
      icon: Home,
      title: 'Tank Storage',
      description: 'Secure, climate-controlled tank storage facilities with 24/7 monitoring and environmental controls.',
      link: '#tank-storage'
    },
    {
      icon: Globe,
      title: 'International Shipping',
      description: 'Global shipping solutions with customs handling and real-time tracking for worldwide deliveries.',
      link: '#international-shipping'
    },
    {
      icon: Package,
      title: 'Domestic Logistics',
      description: 'Reliable nationwide shipping with comprehensive coverage and on-time delivery guarantees.',
      link: '#domestic'
    },
    {
      icon: Briefcase,
      title: 'Hazmat Handling',
      description: 'Licensed specialists for hazardous materials with full compliance and safety protocols.',
      link: '#hazmat-handling'
    },
    {
      icon: Truck,
      title: 'Fleet Management',
      description: 'Professional fleet operations with modern equipment and experienced drivers for reliable transport.',
      link: '#fleet-management'
    },
    {
      icon: Box,
      title: 'Custom Solutions',
      description: 'Tailored logistics solutions designed to meet your specific business and storage requirements.',
      link: '#custom-solutions'
    }
  ]

  return (
    <section className="py-24 bg-gray-50 grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <ScrollReveal>
            <span className="text-accent font-black uppercase tracking-[0.2em] text-sm mb-4 block">OUR SERVICES</span>
            <h2 className="text-3xl md:text-4xl font-black text-primary mb-6">Complete Logistics & Storage Solutions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              From tank storage to international shipping, Seaquip Transport Solutions provides comprehensive logistics services tailored to your business needs.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ScrollReveal key={index} className="bg-white p-10 rounded-sm border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group">
              <div className="w-16 h-16 bg-gray-50 rounded-lg flex items-center justify-center mb-8 group-hover:bg-accent transition-colors duration-300">
                <service.icon className="w-8 h-8 text-accent group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-2xl font-black text-primary mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                {service.description}
              </p>
              <a 
                href={service.link} 
                className="text-accent font-black text-sm uppercase tracking-widest flex items-center gap-2 hover:gap-3 transition-all"
              >
                LEARN MORE <span>›</span>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
