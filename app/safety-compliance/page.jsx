'use client'

import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { ScrollProgressBar } from '@/components/ScrollProgressBar'
import { ScrollReveal } from '@/components/ScrollReveal'
import { Shield, CheckCircle, Zap, Users } from 'lucide-react'

export default function SafetyCompliancePage() {
  const certifications = [
    { title: 'DOT Hazmat Certified', desc: 'Department of Transportation hazardous materials handling certification' },
    { title: 'EPA Compliance', desc: 'Environmental Protection Agency environmental standards compliance' },
    { title: 'OSHA Certified', desc: 'Occupational Safety and Health Administration safety standards' },
    { title: 'ISO 9001:2015', desc: 'International quality management system certification' },
    { title: 'Bonded & Insured', desc: 'Full bonding and comprehensive insurance coverage' },
    { title: 'AAA Safety Rating', desc: 'Highest safety rating from industry assessment bodies' }
  ]

  const safetyPrograms = [
    {
      icon: Users,
      title: 'Staff Training',
      points: [
        'Annual safety training for all staff',
        'DOT-specific hazmat training',
        'Emergency response procedures',
        'OSHA compliance certification',
        'Continuous professional development'
      ]
    },
    {
      icon: Shield,
      title: 'Security Measures',
      points: [
        '24/7 video surveillance',
        'Access control systems',
        'Motion detection sensors',
        'Armed response capability',
        'Perimeter security fencing'
      ]
    },
    {
      icon: CheckCircle,
      title: 'Quality Assurance',
      points: [
        'Regular facility inspections',
        'Equipment maintenance schedule',
        'Environmental monitoring',
        'Incident tracking and reporting',
        'Compliance audits'
      ]
    },
    {
      icon: Zap,
      title: 'Emergency Response',
      points: [
        '24/7 emergency hotline',
        'Rapid response team',
        'Spill containment equipment',
        'Fire suppression systems',
        'Disaster recovery plans'
      ]
    }
  ]

  const standards = [
    { regulation: 'DOT Regulations', scope: 'Hazmat transportation and storage' },
    { regulation: 'EPA Standards', scope: 'Environmental protection requirements' },
    { regulation: 'OSHA Guidelines', scope: 'Workplace safety and health' },
    { regulation: 'State Requirements', scope: 'Regional and local regulations' },
    { regulation: 'Industry Best Practices', scope: 'Leading logistics standards' },
    { regulation: 'Client Specific', scope: 'Custom compliance requirements' }
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
              <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">Safety & Compliance</h1>
              <p className="text-2xl text-white/90 max-w-3xl">
                Unwavering commitment to safety, security, and regulatory compliance
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Certifications */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <h2 className="text-4xl font-black text-primary mb-16 text-center">Our Certifications & Licenses</h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {certifications.map((cert, index) => (
                <ScrollReveal key={index}>
                  <div className="bg-gray-50 p-8 rounded-xl shadow-lg border-l-4 border-accent hover:shadow-xl transition-all">
                    <h3 className="text-xl font-black text-primary mb-2">{cert.title}</h3>
                    <p className="text-gray-600">{cert.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Safety Programs */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <h2 className="text-4xl font-black text-primary mb-16 text-center">Our Safety Programs</h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {safetyPrograms.map((program, index) => (
                <ScrollReveal key={index}>
                  <div className="bg-white p-8 rounded-xl shadow-lg">
                    <program.icon className="w-12 h-12 text-accent mb-4" />
                    <h3 className="text-xl font-black text-primary mb-4">{program.title}</h3>
                    <ul className="space-y-2">
                      {program.points.map((point, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-accent font-bold mt-1">✓</span>
                          <span className="text-gray-600 text-sm">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Regulatory Compliance */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <h2 className="text-4xl font-black text-primary mb-16 text-center">Regulatory Compliance</h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {standards.map((std, index) => (
                <ScrollReveal key={index}>
                  <div className="border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-all">
                    <h3 className="text-xl font-black text-primary mb-2">{std.regulation}</h3>
                    <p className="text-gray-600">{std.scope}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Safety Record */}
        <section className="py-24 bg-primary text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <h2 className="text-4xl font-black mb-12 text-center">Our Safety Record</h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <ScrollReveal>
                <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl">
                  <h4 className="text-4xl font-black mb-2">30+</h4>
                  <p className="text-lg">Years Incident-Free Operations</p>
                </div>
              </ScrollReveal>
              <ScrollReveal>
                <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl">
                  <h4 className="text-4xl font-black mb-2">100%</h4>
                  <p className="text-lg">Compliance Record</p>
                </div>
              </ScrollReveal>
              <ScrollReveal>
                <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl">
                  <h4 className="text-4xl font-black mb-2">AAA</h4>
                  <p className="text-lg">Safety Rating</p>
                </div>
              </ScrollReveal>
              <ScrollReveal>
                <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl">
                  <h4 className="text-4xl font-black mb-2">0</h4>
                  <p className="text-lg">Environmental Violations</p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Safety Documentation */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <h2 className="text-4xl font-black text-primary mb-12 text-center">Documentation & Reporting</h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <ScrollReveal>
                <div className="space-y-6">
                  <h3 className="text-2xl font-black text-primary">Transparent Reporting</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We maintain detailed safety records, incident reports, and compliance documentation available for client review. Our commitment to transparency ensures you have complete visibility into our operations.
                  </p>
                  <ul className="space-y-3">
                    {[
                      'Monthly safety reports',
                      'Annual compliance audits',
                      'Incident investigation records',
                      'Training documentation',
                      'Equipment maintenance logs',
                      'Environmental monitoring data'
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                        <span className="text-gray-600 font-semibold">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
              <ScrollReveal>
                <img 
                  src="https://images.pexels.com/photos/5025644/pexels-photo-5025644.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Safety Documentation" 
                  className="rounded-2xl shadow-xl w-full h-96 object-cover"
                />
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-accent text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <ScrollReveal>
              <h2 className="text-4xl font-black mb-6">Request Our Safety Documentation</h2>
              <p className="text-xl text-white/90 mb-8">
                We're proud of our safety record. Request our certifications and compliance reports today.
              </p>
              <a href="/contact">
                <button className="bg-white hover:bg-gray-100 text-accent font-black py-4 px-12 rounded-sm transition-all duration-300 text-lg tracking-widest">
                  REQUEST DOCUMENTATION
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
