'use client'

import Link from 'next/link'
import { ScrollReveal } from './ScrollReveal'

export function EstimateForm() {
  return (
    <section className="relative z-20 -mt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <ScrollReveal>
        <div className="bg-white rounded-xl shadow-2xl p-6 md:p-10 flex flex-col md:flex-row items-center gap-6">
          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl font-black text-primary leading-tight">
              Get Your Free Moving<br />Estimate Here
            </h2>
          </div>
          <div className="flex-[2] w-full grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Moving From"
              className="w-full bg-gray-50 border border-gray-200 rounded-lg px-6 py-4 text-primary focus:outline-none focus:border-accent transition-colors"
            />
            <input
              type="text"
              placeholder="Moving To"
              className="w-full bg-gray-50 border border-gray-200 rounded-lg px-6 py-4 text-primary focus:outline-none focus:border-accent transition-colors"
            />
          </div>
          <div className="flex-none w-full md:w-auto">
            <Link href="/contact" className="block">
              <button className="w-full md:w-auto bg-accent hover:bg-accent-light text-white font-black py-4 px-10 rounded-lg transition-all duration-300 shadow-lg shadow-accent/20">
                GO NOW
              </button>
            </Link>
          </div>
        </div>
      </ScrollReveal>
    </section>
  )
}
