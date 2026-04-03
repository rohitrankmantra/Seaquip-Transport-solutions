'use client'

import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { ScrollProgressBar } from '@/components/ScrollProgressBar'
import { ScrollReveal } from '@/components/ScrollReveal'
import { Heart, Users, TrendingUp, Zap } from 'lucide-react'

export default function CareersPage() {
  const positions = [
    {
      title: 'Logistics Coordinator',
      department: 'Operations',
      location: 'Atlanta, GA',
      type: 'Full-Time',
      desc: 'Manage shipments, coordinate with clients, and ensure timely deliveries.'
    },
    {
      title: 'Facility Manager',
      department: 'Facilities',
      location: 'Atlanta, GA',
      type: 'Full-Time',
      desc: 'Oversee daily facility operations, maintenance, and staff management.'
    },
    {
      title: 'Quality Assurance Specialist',
      department: 'Quality Control',
      location: 'Atlanta, GA',
      type: 'Full-Time',
      desc: 'Conduct inspections, ensure compliance, and maintain quality standards.'
    },
    {
      title: 'Sales Representative',
      department: 'Sales',
      location: 'Various',
      type: 'Full-Time',
      desc: 'Develop client relationships, identify opportunities, and meet sales targets.'
    },
    {
      title: 'Hazmat Specialist',
      department: 'Operations',
      location: 'Atlanta, GA',
      type: 'Full-Time',
      desc: 'Handle hazardous materials with proper protocols and certifications.'
    },
    {
      title: 'Administrative Assistant',
      department: 'Administration',
      location: 'Atlanta, GA',
      type: 'Full-Time',
      desc: 'Provide administrative support and assist with customer service.'
    }
  ]

  const benefits = [
    { icon: Heart, title: 'Health Insurance', desc: 'Comprehensive medical, dental, and vision coverage' },
    { icon: TrendingUp, title: 'Career Growth', desc: 'Professional development and advancement opportunities' },
    { icon: Zap, title: 'Competitive Pay', desc: 'Industry-leading salaries and bonus programs' },
    { icon: Users, title: 'Team Culture', desc: 'Collaborative environment with supportive colleagues' }
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
              <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">Join Our Team</h1>
              <p className="text-2xl text-white/90 max-w-3xl">
                Build your career with Seaquip Transport Solutions
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Why Work With Us */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <h2 className="text-4xl font-black text-primary mb-16 text-center">Why Work With Seaquip?</h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <ScrollReveal key={index}>
                  <div className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-all text-center">
                    <benefit.icon className="w-12 h-12 text-accent mx-auto mb-4" />
                    <h3 className="text-xl font-black text-primary mb-3">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <h2 className="text-4xl font-black text-primary mb-12 text-center">Our Culture & Values</h2>
            </ScrollReveal>
            <div className="max-w-3xl mx-auto space-y-8">
              <ScrollReveal>
                <div className="bg-white p-8 rounded-xl shadow-lg">
                  <h3 className="text-2xl font-black text-primary mb-4">Excellence</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We're committed to excellence in everything we do. Our team members take pride in their work and constantly strive to improve.
                  </p>
                </div>
              </ScrollReveal>
              <ScrollReveal>
                <div className="bg-white p-8 rounded-xl shadow-lg">
                  <h3 className="text-2xl font-black text-primary mb-4">Teamwork</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Success comes from working together. We foster a collaborative environment where everyone's contributions are valued.
                  </p>
                </div>
              </ScrollReveal>
              <ScrollReveal>
                <div className="bg-white p-8 rounded-xl shadow-lg">
                  <h3 className="text-2xl font-black text-primary mb-4">Safety First</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Safety is non-negotiable. We invest in training and equipment to ensure every team member goes home safe each day.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <h2 className="text-4xl font-black text-primary mb-16 text-center">Current Job Openings</h2>
            </ScrollReveal>
            <div className="space-y-6">
              {positions.map((position, index) => (
                <ScrollReveal key={index}>
                  <div className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:border-accent hover:shadow-lg transition-all">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-2xl font-black text-primary mb-2">{position.title}</h3>
                        <div className="flex flex-wrap gap-3">
                          <span className="text-sm font-bold text-gray-600 bg-gray-100 px-3 py-1 rounded">{position.department}</span>
                          <span className="text-sm font-bold text-gray-600 bg-gray-100 px-3 py-1 rounded">{position.location}</span>
                          <span className="text-sm font-bold text-accent bg-accent/10 px-3 py-1 rounded">{position.type}</span>
                        </div>
                      </div>
                      <a href="/contact">
                        <button className="bg-accent hover:bg-accent-light text-white font-black px-8 py-3 rounded-sm transition-all duration-300 whitespace-nowrap">
                          APPLY NOW
                        </button>
                      </a>
                    </div>
                    <p className="text-gray-600 text-lg">{position.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Application Process */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <h2 className="text-4xl font-black text-primary mb-16 text-center">How to Apply</h2>
            </ScrollReveal>
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
                {[
                  { step: 1, label: 'Submit Resume' },
                  { step: 2, label: 'Application Review' },
                  { step: 3, label: 'Interview' },
                  { step: 4, label: 'Job Offer' }
                ].map((item, idx) => (
                  <ScrollReveal key={idx}>
                    <div className="text-center">
                      <div className="bg-accent text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-black">
                        {item.step}
                      </div>
                      <p className="font-bold text-primary">{item.label}</p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>

              <ScrollReveal>
                <div className="bg-white p-8 rounded-2xl shadow-lg">
                  <h3 className="text-2xl font-black text-primary mb-6">Ready to Apply?</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Send your resume and cover letter to careers@seaquiptransport.com or submit an application through our contact form. 
                    We review all applications and reach out to qualified candidates within 5 business days.
                  </p>
                  <a href="/contact">
                    <button className="bg-accent hover:bg-accent-light text-white font-black py-4 px-12 rounded-sm transition-all duration-300 text-lg tracking-widest">
                      SUBMIT APPLICATION
                    </button>
                  </a>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Contact HR */}
        <section className="py-24 bg-primary text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <ScrollReveal>
              <h2 className="text-4xl font-black mb-6">Questions About Working With Us?</h2>
              <p className="text-xl text-white/90 mb-8">
                Contact our Human Resources team for more information about opportunities.
              </p>
              <div className="flex flex-col md:flex-row gap-6 justify-center">
                <a href="mailto:careers@seaquiptransport.com">
                  <button className="bg-white hover:bg-gray-100 text-primary font-black py-4 px-12 rounded-sm transition-all duration-300 text-lg w-full md:w-auto">
                    EMAIL HR
                  </button>
                </a>
                <a href="/contact">
                  <button className="bg-accent hover:bg-accent-light text-white font-black py-4 px-12 rounded-sm transition-all duration-300 text-lg w-full md:w-auto">
                    CONTACT FORM
                  </button>
                </a>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
