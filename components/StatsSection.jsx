'use client'

import { ScrollReveal } from './ScrollReveal'
import { AnimatedCounter } from './AnimatedCounter'
import { Package, Truck, Heart } from 'lucide-react'

export function StatsSection() {
  const stats = [
    { icon: Package, end: 450, suffix: '+', label: 'Storage Units Managed' },
    { icon: Truck, end: 12, suffix: 'K+', label: 'Successful Shipments' },
    { icon: Heart, end: 95, suffix: '%', label: 'Client Satisfaction Rate' }
  ]

  return (
    <section className="py-24 bg-[#F8F9FA] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <ScrollReveal>
              <div className="relative">
                <h2 className="text-3xl md:text-4xl font-black text-[#1B3A52] leading-tight mb-4">
                  Our Track Record in Logistics Excellence
                </h2>
                <div className="w-16 h-1 bg-[#22C55E] rounded-full"></div>
              </div>
            </ScrollReveal>
          </div>
          
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <ScrollReveal key={index} className="flex flex-col items-center text-center">
                <div className="w-14 h-14 bg-[#1B3A52] flex items-center justify-center mb-6 shadow-lg">
                  <stat.icon className="w-7 h-7 text-white" />
                </div>
                <div className="text-4xl md:text-5xl font-black text-[#1B3A52] mb-3 tracking-tighter">
                  <AnimatedCounter end={stat.end} suffix={stat.suffix} />
                </div>
                <p className="text-gray-500 font-semibold text-sm leading-snug max-w-[140px]">
                  {stat.label}
                </p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
