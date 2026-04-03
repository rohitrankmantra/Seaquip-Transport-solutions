'use client'

import Link from 'next/link'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { ScrollProgressBar } from '@/components/ScrollProgressBar'
import { ScrollReveal } from '@/components/ScrollReveal'

export default function BlogPage() {
  const posts = [
    {
      id: 1,
      slug: 'best-practices-tank-storage',
      title: 'Best Practices for Secure Tank Storage Solutions',
      category: 'STORAGE',
      date: 'MAR 15, 2024',
      excerpt: 'Learn the essential best practices for maintaining secure tank storage facilities and protecting your valuable inventory.',
      image: 'https://images.pexels.com/photos/5025669/pexels-photo-5025669.jpeg?auto=compress&cs=tinysrgb&w=800',
      author: 'Wiley Jones',
      readTime: '5 min read'
    },
    {
      id: 2,
      slug: 'international-shipping-guide',
      title: 'International Shipping: Navigating Customs and Compliance',
      category: 'SHIPPING',
      date: 'MAR 10, 2024',
      excerpt: 'Complete guide to understanding international shipping requirements, customs procedures, and compliance standards.',
      image: 'https://images.pexels.com/photos/5025641/pexels-photo-5025641.jpeg?auto=compress&cs=tinysrgb&w=800',
      author: 'Wiley Jones',
      readTime: '8 min read'
    },
    {
      id: 3,
      slug: 'hazmat-handling-safety',
      title: 'Hazmat Handling: Safety Standards and Best Practices',
      category: 'COMPLIANCE',
      date: 'MAR 05, 2024',
      excerpt: 'Understanding hazardous materials handling, safety protocols, and regulatory compliance requirements.',
      image: 'https://images.pexels.com/photos/5025644/pexels-photo-5025644.jpeg?auto=compress&cs=tinysrgb&w=800',
      author: 'Wiley Jones',
      readTime: '6 min read'
    },
    {
      id: 4,
      slug: 'climate-controlled-storage',
      title: 'Climate-Controlled Storage: Protecting Your Inventory',
      category: 'STORAGE',
      date: 'FEB 28, 2024',
      excerpt: 'How climate control systems protect your inventory and why temperature management is crucial for storage operations.',
      image: 'https://images.pexels.com/photos/5025637/pexels-photo-5025637.jpeg?auto=compress&cs=tinysrgb&w=800',
      author: 'Wiley Jones',
      readTime: '7 min read'
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
              <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">Industry Insights & Resources</h1>
              <p className="text-xl text-white/90 max-w-3xl">
                Stay updated with the latest logistics tips, shipping guides, and storage best practices from Seaquip Transport Solutions.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {posts.map((post) => (
                <ScrollReveal key={post.id}>
                  <Link href={`/blog/${post.slug}`}>
                    <div className="group cursor-pointer h-full">
                      <div className="relative overflow-hidden rounded-2xl mb-6 h-64">
                        <img 
                          src={post.image} 
                          alt={post.title} 
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute top-4 left-4 bg-accent text-white px-4 py-1.5 rounded-lg text-xs font-black uppercase tracking-widest">
                          {post.category}
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center text-gray-500 text-xs font-bold tracking-widest uppercase">
                          <span>{post.date}</span>
                          <span>{post.readTime}</span>
                        </div>
                        <h3 className="text-2xl font-black text-primary group-hover:text-accent transition-colors duration-300 leading-tight">
                          {post.title}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {post.excerpt}
                        </p>
                        <div className="text-accent font-black text-sm uppercase tracking-widest flex items-center gap-2 group-hover:gap-3 transition-all pt-4">
                          READ MORE <span>›</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-24 bg-primary text-white">
          <div className="max-w-2xl mx-auto px-4 text-center">
            <ScrollReveal>
              <h2 className="text-4xl font-black mb-6">Subscribe to Our Newsletter</h2>
              <p className="text-xl text-white/90 mb-8">Get the latest logistics insights and shipping tips delivered to your inbox.</p>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-1 px-6 py-3 rounded-sm text-primary focus:outline-none"
                />
                <button className="bg-accent hover:bg-accent-light text-white font-black px-8 py-3 rounded-sm transition-all duration-300">
                  Subscribe
                </button>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
