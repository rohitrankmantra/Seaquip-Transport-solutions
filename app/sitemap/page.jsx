'use client'

import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { ScrollProgressBar } from '@/components/ScrollProgressBar'
import { ScrollReveal } from '@/components/ScrollReveal'
import Link from 'next/link'

export default function SitemapPage() {
  const pages = [
    {
      category: 'Main Pages',
      links: [
        { name: 'Home', href: '/' },
        { name: 'About Us', href: '/about' },
        { name: 'Why Choose Us', href: '/why-choose-us' },
        { name: 'Contact', href: '/contact' }
      ]
    },
    {
      category: 'Services',
      links: [
        { name: 'Services Overview', href: '/services' },
        { name: 'Tank Storage', href: '/services/tank-storage' },
        { name: 'Shipping Services', href: '/services/shipping' }
      ]
    },
    {
      category: 'Company Information',
      links: [
        { name: 'Facilities', href: '/facilities' },
        { name: 'Safety & Compliance', href: '/safety-compliance' },
        { name: 'Testimonials', href: '/testimonials' },
        { name: 'Careers', href: '/careers' }
      ]
    },
    {
      category: 'Resources',
      links: [
        { name: 'Blog', href: '/blog' },
        { name: 'FAQ', href: '/faq' }
      ]
    },
    {
      category: 'Legal',
      links: [
        { name: 'Terms & Conditions', href: '/terms' },
        { name: 'Privacy Policy', href: '/privacy' }
      ]
    }
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
              <h1 className="text-5xl font-black mb-4">Sitemap</h1>
              <p className="text-white/80">Complete guide to all pages on our website</p>
            </ScrollReveal>
          </div>
        </section>

        {/* Sitemap Content */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {pages.map((section, idx) => (
                <ScrollReveal key={idx}>
                  <div>
                    <h2 className="text-2xl font-black text-primary mb-6">{section.category}</h2>
                    <ul className="space-y-3">
                      {section.links.map((link, i) => (
                        <li key={i}>
                          <Link href={link.href}>
                            <span className="text-accent hover:text-accent-light font-semibold transition-colors cursor-pointer">
                              {link.name}
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Links Section */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <h2 className="text-4xl font-black text-primary mb-12 text-center">Popular Pages</h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: 'Get a Quote', href: '/contact', icon: '📋' },
                { name: 'View Services', href: '/services/tank-storage', icon: '🏢' },
                { name: 'Read Our Blog', href: '/blog', icon: '📝' },
                { name: 'Join Our Team', href: '/careers', icon: '👥' }
              ].map((item, index) => (
                <ScrollReveal key={index}>
                  <Link href={item.href}>
                    <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all text-center cursor-pointer border-2 border-transparent hover:border-accent">
                      <div className="text-4xl mb-3">{item.icon}</div>
                      <p className="font-bold text-primary text-lg hover:text-accent transition-colors">{item.name}</p>
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-24 bg-primary text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <ScrollReveal>
              <h2 className="text-4xl font-black mb-6">Can't Find What You're Looking For?</h2>
              <p className="text-xl text-white/90 mb-8">
                Contact our team directly and we'll be happy to help you.
              </p>
              <a href="/contact">
                <button className="bg-white hover:bg-gray-100 text-primary font-black py-4 px-12 rounded-sm transition-all duration-300 text-lg tracking-widest">
                  CONTACT US
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
