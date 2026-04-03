'use client'

import { ScrollReveal } from './ScrollReveal'
import { Home, Globe, Package, Briefcase, Truck, Box } from 'lucide-react'

export function ServicesGrid() {
  const services = [
    {
      icon: Home,
      title: 'Local Moving',
      description: 'Hassle-free local removals across the city with expert care and precision.',
      link: '#local-moving'
    },
    {
      icon: Globe,
      title: 'Long Distance Moving',
      description: 'Moving across the country? We ensure your belongings reach safely.',
      link: '#long-distance'
    },
    {
      icon: Package,
      title: 'Storage Services',
      description: 'Secure, climate-controlled storage solutions for your valuable items.',
      link: '#storage'
    },
    {
      icon: Briefcase,
      title: 'Office Moving',
      description: 'Efficient commercial relocation with minimal downtime for your business.',
      link: '#office-moving'
    },
    {
      icon: Truck,
      title: 'Overseas Moving',
      description: 'Global relocation services with customs handling and international support.',
      link: '#overseas'
    },
    {
      icon: Box,
      title: 'Box Delivery',
      description: 'Need packing supplies? We deliver high-quality boxes and materials.',
      link: '#box-delivery'
    }
  ]

  return (
    <section className="py-24 bg-gray-50 grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <ScrollReveal>
            <span className="text-accent font-black uppercase tracking-[0.2em] text-sm mb-4 block">OUR SERVICES</span>
            <h2 className="text-4xl md:text-5xl font-black text-primary mb-6">Moving Services For Every Need</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Proin gravida nibh vel velit auctor aliquet.
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
