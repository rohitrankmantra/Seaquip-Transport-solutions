'use client'

import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { ScrollProgressBar } from '@/components/ScrollProgressBar'
import { ScrollReveal } from '@/components/ScrollReveal'
import { Phone, Mail, MapPin } from 'lucide-react'
import { useState } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <>
      <ScrollProgressBar />
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[70vh] md:h-[80vh] bg-linear-to-b from-primary to-primary/90 text-white flex items-center justify-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <ScrollReveal>
              <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">Get In Touch</h1>
              <p className="text-xl text-white/90 max-w-3xl">
                Have questions about our tank storage or shipping services? We're here to help. Contact Seaquip Transport Solutions today.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24">
              <ScrollReveal>
                <div className="text-center p-8 bg-gray-50 rounded-2xl">
                  <Phone className="w-12 h-12 text-accent mx-auto mb-4" />
                  <h3 className="text-2xl font-black text-primary mb-2">Phone</h3>
                  <p className="text-gray-600 text-lg">404-388-9408</p>
                  <p className="text-gray-500 text-sm mt-2">Available 24/7 for inquiries</p>
                </div>
              </ScrollReveal>
              <ScrollReveal>
                <div className="text-center p-8 bg-gray-50 rounded-2xl">
                  <Mail className="w-12 h-12 text-accent mx-auto mb-4" />
                  <h3 className="text-2xl font-black text-primary mb-2">Email</h3>
                  <p className="text-gray-600 text-lg">wileyjones90@yahoo.com</p>
                  <p className="text-gray-500 text-sm mt-2">We respond within 24 hours</p>
                </div>
              </ScrollReveal>
              <ScrollReveal>
                <div className="text-center p-8 bg-gray-50 rounded-2xl">
                  <MapPin className="w-12 h-12 text-accent mx-auto mb-4" />
                  <h3 className="text-2xl font-black text-primary mb-2">Address</h3>
                  <p className="text-gray-600 text-lg">1205 Shoreham Dr</p>
                  <p className="text-gray-600 text-lg">Atlanta, GA 30349</p>
                </div>
              </ScrollReveal>
            </div>

            {/* Contact Form */}
            <div className="max-w-3xl mx-auto">
              <ScrollReveal>
                <h2 className="text-3xl md:text-4xl font-black text-primary mb-12 text-center">Send Us a Message</h2>
              </ScrollReveal>

              <ScrollReveal>
                <form onSubmit={handleSubmit} className="bg-gray-50 p-8 rounded-2xl">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-primary font-black mb-2">Full Name *</label>
                      <input 
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:border-accent"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-primary font-black mb-2">Email *</label>
                      <input 
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:border-accent"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-primary font-black mb-2">Phone</label>
                      <input 
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:border-accent"
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>
                    <div>
                      <label className="block text-primary font-black mb-2">Company</label>
                      <input 
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:border-accent"
                        placeholder="Company name"
                      />
                    </div>
                  </div>

                  <div className="mb-6">
                    <label className="block text-primary font-black mb-2">Service Interested In *</label>
                    <select 
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:border-accent"
                    >
                      <option value="">Select a service</option>
                      <option value="tank-storage">Tank Storage</option>
                      <option value="shipping">Shipping Services</option>
                      <option value="hazmat">Hazmat Handling</option>
                      <option value="custom">Custom Solutions</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="mb-6">
                    <label className="block text-primary font-black mb-2">Message *</label>
                    <textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="6"
                      className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:border-accent"
                      placeholder="Tell us about your logistics needs..."
                    ></textarea>
                  </div>

                  <button 
                    type="submit"
                    className="w-full bg-accent hover:bg-accent-light text-white font-black py-4 rounded-sm transition-all duration-300 text-lg tracking-widest"
                  >
                    SEND MESSAGE
                  </button>
                </form>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-black text-primary mb-12 text-center">Find Us</h2>
            </ScrollReveal>
            <ScrollReveal>
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden h-96">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3306.923618652394!2d-84.29155!3d33.7490!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f5a4d4d4d4d4d5%3A0x123456!2s1205%20Shoreham%20Dr%2C%20Atlanta%2C%20GA%2030349!5e0!3m2!1sen!2sus!4v1234567890"
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
