'use client'

import { Navigation } from '@/components/Navigation'
import { HeroSlider } from '@/components/HeroSlider'
import { EstimateForm } from '@/components/EstimateForm'
import { AboutSection } from '@/components/AboutSection'
import { Banner } from '@/components/Banner'
import { ServicesGrid } from '@/components/ServicesGrid'
import { StatsSection } from '@/components/StatsSection'
import { VideoSection } from '@/components/VideoSection'
import { CareSection } from '@/components/CareSection'
import { Testimonials } from '@/components/Testimonials'
import { BlogSection } from '@/components/BlogSection'
import { Footer } from '@/components/Footer'
import { ScrollProgressBar } from '@/components/ScrollProgressBar'

export default function Page() {
  return (
    <>
      <ScrollProgressBar />
      <Navigation />
      <main>
        <HeroSlider />
        <div id="about">
          <EstimateForm />
          <AboutSection />
        </div>
        <Banner />
        <div id="services">
          <ServicesGrid />
        </div>
        <StatsSection />
        <VideoSection />
        <CareSection />
        <Testimonials />
        <BlogSection />
      </main>
      <Footer />
    </>
  )
}
