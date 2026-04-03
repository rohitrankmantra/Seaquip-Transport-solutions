'use client'

import Link from 'next/link'
import { ScrollReveal } from './ScrollReveal'

export function BlogSection() {
  const posts = [
    {
      title: 'Best Practices for Secure Tank Storage Solutions',
      date: 'MAR 15, 2024',
      category: 'STORAGE',
      image: 'https://images.pexels.com/photos/5025669/pexels-photo-5025669.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'International Shipping: Navigating Customs and Compliance',
      date: 'MAR 10, 2024',
      category: 'SHIPPING',
      image: 'https://images.pexels.com/photos/5025641/pexels-photo-5025641.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Hazmat Handling: Safety Standards and Best Practices',
      date: 'MAR 05, 2024',
      category: 'COMPLIANCE',
      image: 'https://images.pexels.com/photos/5025644/pexels-photo-5025644.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Climate-Controlled Storage: Protecting Your Inventory',
      date: 'FEB 28, 2024',
      category: 'STORAGE',
      image: 'https://images.pexels.com/photos/5025637/pexels-photo-5025637.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ]

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <ScrollReveal>
            <span className="text-accent font-black uppercase tracking-[0.2em] text-sm mb-4 block">INDUSTRY INSIGHTS</span>
            <h2 className="text-3xl md:text-4xl font-black text-primary leading-tight">
              Logistics Tips & Resources
            </h2>
          </ScrollReveal>
          <ScrollReveal>
            <Link href="/blog">
              <button className="px-8 py-3 border-2 border-accent text-accent font-black text-sm rounded-sm hover:bg-accent hover:text-white transition-all duration-300">
                ALL ARTICLES ›
              </button>
            </Link>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {posts.map((post, index) => (
            <ScrollReveal key={index} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl mb-6">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-accent text-white px-4 py-1.5 rounded-lg text-xs font-black uppercase tracking-widest">
                  {post.category}
                </div>
              </div>
              <div className="space-y-3">
                <div className="text-gray-400 font-bold text-xs tracking-widest uppercase">
                  {post.date}
                </div>
                <h3 className="text-xl font-black text-primary group-hover:text-accent transition-colors duration-300 leading-tight">
                  {post.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">
                  Industry insights and best practices for storage, shipping, and logistics management.
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
