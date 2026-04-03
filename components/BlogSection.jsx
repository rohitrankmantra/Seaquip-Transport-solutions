'use client'

import { ScrollReveal } from './ScrollReveal'

export function BlogSection() {
  const posts = [
    {
      title: 'Tips for an efficient Move with Professional movers',
      date: 'MAY 24, 2021',
      category: 'MOVING',
      image: 'https://images.pexels.com/photos/5025669/pexels-photo-5025669.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'A home Moving Service That simplifies Your move',
      date: 'MAY 24, 2021',
      category: 'MOVING',
      image: 'https://images.pexels.com/photos/5025641/pexels-photo-5025641.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Innovative Moving service that simplify Your house',
      date: 'MAY 24, 2021',
      category: 'MOVING',
      image: 'https://images.pexels.com/photos/5025644/pexels-photo-5025644.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Our ultimate Guide to Dream Move Destination',
      date: 'MAY 24, 2021',
      category: 'MOVING',
      image: 'https://images.pexels.com/photos/5025637/pexels-photo-5025637.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ]

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <ScrollReveal>
            <span className="text-accent font-black uppercase tracking-[0.2em] text-sm mb-4 block">MOVING BLOGS</span>
            <h2 className="text-4xl md:text-5xl font-black text-primary leading-tight">
              Moving Tips & Guide
            </h2>
          </ScrollReveal>
          <ScrollReveal>
            <button className="px-8 py-3 border-2 border-accent text-accent font-black text-sm rounded-sm hover:bg-accent hover:text-white transition-all duration-300">
              ALL ARTICLES ›
            </button>
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
