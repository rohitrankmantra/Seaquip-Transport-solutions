'use client'

import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { ScrollProgressBar } from '@/components/ScrollProgressBar'
import { ScrollReveal } from '@/components/ScrollReveal'
import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

export default function FAQPage() {
  const faqs = [
    {
      category: 'General',
      questions: [
        {
          q: 'What services does Seaquip Transport Solutions offer?',
          a: 'We provide comprehensive tank storage solutions and shipping services including domestic and international shipping, hazmat handling, climate-controlled storage, and custom logistics solutions.'
        },
        {
          q: 'How long has Seaquip been in business?',
          a: 'Seaquip Transport Solutions BV was founded in 1994 and has been serving clients for over 30 years with consistent excellence and reliability.'
        },
        {
          q: 'Do you offer custom solutions?',
          a: 'Yes, we specialize in creating tailored logistics solutions based on your specific business needs. Contact our team to discuss your requirements.'
        },
        {
          q: 'What areas do you serve?',
          a: 'We have facilities in Atlanta, Marietta, and Fort Lauderdale with the ability to serve clients nationwide and internationally.'
        }
      ]
    },
    {
      category: 'Tank Storage',
      questions: [
        {
          q: 'What size tanks can you store?',
          a: 'We accommodate tanks of various sizes and configurations. Our 450+ storage units range from small containers to large industrial tanks with a total capacity of over 28,000 gallons.'
        },
        {
          q: 'Is climate control always included?',
          a: 'Yes, climate control is included in all our storage solutions. We maintain temperatures between 50-80°F and humidity at 30-50% RH.'
        },
        {
          q: 'What is your minimum storage term?',
          a: 'We offer flexible terms including month-to-month leases with no long-term commitment required. Contact us to discuss your specific timeline.'
        },
        {
          q: 'How do you ensure security?',
          a: 'All facilities feature 24/7 video surveillance, access control systems, motion detection, and armed response teams for maximum security.'
        },
        {
          q: 'Can I access my stored inventory anytime?',
          a: 'Yes, you can access your inventory during business hours. Emergency access is available 24/7 for urgent situations.'
        }
      ]
    },
    {
      category: 'Shipping Services',
      questions: [
        {
          q: 'What shipping options do you provide?',
          a: 'We offer standard shipping (5-7 days), express shipping (1-3 days), and specialized hazmat shipping with full compliance and tracking.'
        },
        {
          q: 'Do you handle international shipping?',
          a: 'Yes, we provide comprehensive international shipping services with customs clearance assistance, proper documentation, and real-time tracking.'
        },
        {
          q: 'Is insurance included?',
          a: 'Yes, all shipments include basic insurance coverage. Additional coverage options are available for high-value shipments.'
        },
        {
          q: 'Can I track my shipment in real-time?',
          a: 'Absolutely. We provide real-time tracking for all shipments so you know exactly where your cargo is at all times.'
        },
        {
          q: 'What about hazmat certifications?',
          a: 'Our team holds all necessary DOT Hazmat certifications and EPA compliance certifications for safe handling of hazardous materials.'
        }
      ]
    },
    {
      category: 'Pricing & Payment',
      questions: [
        {
          q: 'How do I get a shipping quote?',
          a: 'Contact our sales team at 404-388-9408 or use our quote request form. Quotes are typically provided within 24 hours.'
        },
        {
          q: 'Do you offer volume discounts?',
          a: 'Yes, we provide competitive pricing for high-volume shipments and long-term storage agreements. Ask our team about bulk rates.'
        },
        {
          q: 'What payment methods do you accept?',
          a: 'We accept major credit cards, bank transfers, ACH payments, and NET 30 terms for qualified customers.'
        },
        {
          q: 'Are there any hidden fees?',
          a: 'No. We believe in transparent pricing with all costs clearly outlined upfront. What you see is what you pay.'
        }
      ]
    },
    {
      category: 'Compliance & Safety',
      questions: [
        {
          q: 'What certifications do you hold?',
          a: 'We are DOT, EPA, and OSHA certified, ISO 9001:2015 compliant, fully bonded and insured, and hold an AAA safety rating.'
        },
        {
          q: 'Do you handle regulated materials?',
          a: 'Yes, our certified team safely handles regulated and hazardous materials with full compliance to all federal and state regulations.'
        },
        {
          q: 'What safety protocols do you follow?',
          a: 'We follow strict OSHA safety protocols, conduct regular staff training, maintain emergency response procedures, and perform safety inspections regularly.'
        },
        {
          q: 'Is my data secure?',
          a: 'Yes, we maintain strict confidentiality and data security with encrypted systems and limited access to sensitive information.'
        }
      ]
    }
  ]

  const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false)
    
    return (
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left"
      >
        <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-all mb-4">
          <div className="flex items-start justify-between gap-4">
            <p className="font-bold text-lg text-gray-800">{question}</p>
            <ChevronDown 
              className={`w-6 h-6 text-accent shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
            />
          </div>
          {isOpen && (
            <p className="text-gray-600 mt-4 leading-relaxed">{answer}</p>
          )}
        </div>
      </button>
    )
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
              <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">Frequently Asked Questions</h1>
              <p className="text-2xl text-white/90 max-w-3xl">
                Answers to common questions about our services and operations
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* FAQ Sections */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {faqs.map((section, idx) => (
              <div key={idx} className="mb-16">
                <ScrollReveal>
                  <h2 className="text-3xl font-black text-primary mb-8">{section.category}</h2>
                </ScrollReveal>
                {section.questions.map((faq, index) => (
                  <ScrollReveal key={index}>
                    <FAQItem question={faq.q} answer={faq.a} />
                  </ScrollReveal>
                ))}
              </div>
            ))}
          </div>
        </section>

        {/* Still Have Questions */}
        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <ScrollReveal>
              <h2 className="text-4xl font-black text-primary mb-6">Still Have Questions?</h2>
              <p className="text-xl text-gray-600 mb-8">
                Our expert team is ready to help. Reach out today!
              </p>
              <div className="flex flex-col md:flex-row gap-6 justify-center">
                <a href="/contact">
                  <button className="bg-accent hover:bg-accent-light text-white font-black py-4 px-12 rounded-sm transition-all duration-300 text-lg tracking-widest">
                    CONTACT US
                  </button>
                </a>
                <a href="tel:404-388-9408">
                  <button className="bg-gray-200 hover:bg-gray-300 text-primary font-black py-4 px-12 rounded-sm transition-all duration-300 text-lg tracking-widest">
                    CALL NOW
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
