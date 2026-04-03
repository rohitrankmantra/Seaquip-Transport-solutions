'use client'

import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { ScrollProgressBar } from '@/components/ScrollProgressBar'
import { ScrollReveal } from '@/components/ScrollReveal'
import { MapPin, Users, Warehouse, Gauge } from 'lucide-react'

export default function FacilitiesPage() {
  const locations = [
    {
      name: 'Atlanta Headquarters',
      address: '1205 Shoreham Dr, Atlanta, GA 30349',
      units: 250,
      capacity: '15,000 gallons',
      features: ['Climate Control', '24/7 Security', 'Conference Rooms']
    },
    {
      name: 'North Atlanta Distribution',
      address: 'Marietta, GA',
      units: 120,
      capacity: '8,000 gallons',
      features: ['Quick Access', 'Highway Proximity', 'Expansion Ready']
    },
    {
      name: 'South Regional Hub',
      address: 'Fort Lauderdale, FL',
      units: 80,
      capacity: '5,000 gallons', 
      features: ['Port Access', 'Climate Monitored', 'Hazmat Certified']
    }
  ]

  const specifications = [
    { label: 'Temperature Range', value: '50-80°F', icon: Gauge },
    { label: 'Humidity Control', value: '30-50% RH', icon: Gauge },
    { label: 'Total Capacity', value: '450+ Units', icon: Warehouse },
    { label: 'Security Coverage', value: '24/7/365', icon: MapPin }
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
              <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">Our Facilities</h1>
              <p className="text-2xl text-white/90 max-w-3xl">
                State-of-the-art storage and logistics infrastructure
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Main Facility */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
              <ScrollReveal>
                <img 
                  src="https://images.pexels.com/photos/13025947/pexels-photo-13025947.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Main Facility" 
                  className="rounded-2xl shadow-xl w-full h-96 object-cover"
                />
              </ScrollReveal>
              <ScrollReveal>
                <div className="space-y-6">
                  <h2 className="text-4xl font-black text-primary">Atlanta Headquarters</h2>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Our flagship facility in Atlanta spans 50,000 square feet with climate-controlled storage for 250 tanks. Located strategically on Shoreham Drive, it provides easy access to major highways and distribution networks.
                  </p>
                  <div className="space-y-4">
                    <div>
                      <p className="font-bold text-gray-700 mb-1">Storage Capacity</p>
                      <p className="text-gray-600">250 units | 15,000 gallons total capacity</p>
                    </div>
                    <div>
                      <p className="font-bold text-gray-700 mb-1">Temperature Control</p>
                      <p className="text-gray-600">Maintained at 50-80°F with automated monitoring</p>
                    </div>
                    <div>
                      <p className="font-bold text-gray-700 mb-1">Security</p>
                      <p className="text-gray-600">24/7 video surveillance and armed response</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Facility Specifications */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <h2 className="text-4xl font-black text-primary mb-16 text-center">Facility Specifications</h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {specifications.map((spec, index) => (
                <ScrollReveal key={index}>
                  <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                    <spec.icon className="w-12 h-12 text-accent mx-auto mb-4" />
                    <p className="text-sm text-gray-500 font-bold uppercase mb-2">{spec.label}</p>
                    <p className="text-3xl font-black text-primary">{spec.value}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Locations */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <h2 className="text-4xl font-black text-primary mb-16 text-center">Other Locations</h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {locations.slice(1).map((location, index) => (
                <ScrollReveal key={index}>
                  <div className="bg-gray-50 rounded-2xl p-8 border-l-4 border-accent">
                    <div className="flex items-start gap-3 mb-6">
                      <MapPin className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-2xl font-black text-primary">{location.name}</h3>
                        <p className="text-sm text-gray-600 mt-1">{location.address}</p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <p className="text-sm font-bold text-gray-600 uppercase">Storage Units</p>
                        <p className="text-2xl font-black text-primary">{location.units}</p>
                      </div>
                      <div>
                        <p className="text-sm font-bold text-gray-600 uppercase">Capacity</p>
                        <p className="text-lg font-bold text-primary">{location.capacity}</p>
                      </div>
                      <div>
                        <p className="text-sm font-bold text-gray-600 uppercase mb-2">Features</p>
                        <div className="space-y-1">
                          {location.features.map((feature, i) => (
                            <p key={i} className="text-sm text-gray-600">✓ {feature}</p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 bg-primary text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <h2 className="text-4xl font-black mb-16 text-center">Facility Amenities</h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                'Climate Control Systems',
                '24/7 CCTV Monitoring',
                'Access Control Badges',
                'Emergency Response Team',
                'Backup Power Systems',
                'Hazmat Handling Equipment',
                'Conference Meeting Rooms',
                'On-Site Laboratory',
                'Loading/Unloading Facilities'
              ].map((amenity, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <p className="text-lg font-semibold">{amenity}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Virtual Tour CTA */}
        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <ScrollReveal>
              <h2 className="text-4xl font-black text-primary mb-6">Schedule a Facility Tour</h2>
              <p className="text-xl text-gray-600 mb-8">
                Visit our state-of-the-art facilities and see how we can meet your storage and logistics needs.
              </p>
              <a href="/contact">
                <button className="bg-accent hover:bg-accent-light text-white font-black py-4 px-12 rounded-sm transition-all duration-300 text-lg tracking-widest">
                  BOOK A TOUR
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
