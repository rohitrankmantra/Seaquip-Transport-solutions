'use client'

import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { ScrollProgressBar } from '@/components/ScrollProgressBar'
import { ScrollReveal } from '@/components/ScrollReveal'
import { Award, Users, Target, Zap } from 'lucide-react'

export default function AboutUsPage() {
  const values = [
    { icon: Award, title: 'Excellence', desc: 'Commitment to highest standards in every operation' },
    { icon: Users, title: 'Partnership', desc: 'Building long-term relationships with our clients' },
    { icon: Target, title: 'Reliability', desc: 'Consistent, dependable service you can trust' },
    { icon: Zap, title: 'Innovation', desc: 'Continuous improvement and technological advancement' }
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
              <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">About Seaquip</h1>
              <p className="text-2xl text-white/90 max-w-3xl">
                Three decades of excellence in tank storage and logistics services
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Company Story */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <ScrollReveal>
                <img 
                  src="https://images.pexels.com/photos/30115463/pexels-photo-30115463.jpeg" 
                  alt="Seaquip Facilities" 
                  className="rounded-2xl shadow-xl w-full h-96 object-cover"
                />
              </ScrollReveal>
              <ScrollReveal>
                <div className="space-y-6">
                  <h2 className="text-4xl font-black text-primary">Our Story</h2>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Founded in 1994, Seaquip Transport Solutions BV started as a small regional logistics provider. Over three decades, we've grown into a trusted partner for tank storage and shipping services across North America and internationally.
                  </p>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Our commitment to safety, reliability, and customer service has made us the preferred choice for businesses of all sizes. Today, we manage over 450 storage units and handle thousands of shipments annually with a 95% client satisfaction rate.
                  </p>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Led by founder Wiley Jones, our team of expert professionals continues to innovate and expand our services to meet the evolving needs of the logistics industry.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
              <ScrollReveal>
                <div className="bg-white p-10 rounded-2xl shadow-lg">
                  <h3 className="text-3xl font-black text-primary mb-6">Our Mission</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    To provide world-class tank storage and shipping solutions that exceed client expectations while maintaining the highest standards of safety, compliance, and environmental responsibility.
                  </p>
                </div>
              </ScrollReveal>
              <ScrollReveal>
                <div className="bg-white p-10 rounded-2xl shadow-lg">
                  <h3 className="text-3xl font-black text-primary mb-6">Our Vision</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    To be the most trusted logistics partner in the industry, recognized for our innovation, reliability, and commitment to customer success and sustainable business practices.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <h2 className="text-4xl font-black text-primary mb-16 text-center">Our Core Values</h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <ScrollReveal key={index}>
                  <div className="text-center p-8 bg-gray-50 rounded-2xl hover:shadow-lg transition-all">
                    <value.icon className="w-12 h-12 text-accent mx-auto mb-4" />
                    <h3 className="text-2xl font-black text-primary mb-3">{value.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{value.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

      
        {/* Stats Section */}
        <section className="py-24 bg-primary text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-center">
              <ScrollReveal>
                <h3 className="text-5xl font-black mb-2">30</h3>
                <p className="text-xl">Years in Business</p>
              </ScrollReveal>
              <ScrollReveal>
                <h3 className="text-5xl font-black mb-2">450+</h3>
                <p className="text-xl">Storage Units</p>
              </ScrollReveal>
              <ScrollReveal>
                <h3 className="text-5xl font-black mb-2">12K+</h3>
                <p className="text-xl">Shipments Handled</p>
              </ScrollReveal>
              <ScrollReveal>
                <h3 className="text-5xl font-black mb-2">95%</h3>
                <p className="text-xl">Client Satisfaction</p>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <ScrollReveal>
              <h2 className="text-4xl font-black text-primary mb-6">Ready to Partner With Us?</h2>
              <p className="text-xl text-gray-600 mb-8">
                Join hundreds of satisfied clients who trust Seaquip for their logistics needs.
              </p>
              <a href="/contact">
                <button className="bg-accent hover:bg-accent-light text-white font-black py-4 px-12 rounded-sm transition-all duration-300 text-lg tracking-widest">
                  CONTACT US TODAY
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
