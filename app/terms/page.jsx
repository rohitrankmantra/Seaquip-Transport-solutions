'use client'

import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { ScrollProgressBar } from '@/components/ScrollProgressBar'
import { ScrollReveal } from '@/components/ScrollReveal'

export default function TermsAndConditionsPage() {
  return (
    <>
      <ScrollProgressBar />
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[70vh] md:h-[80vh] bg-linear-to-b from-primary to-primary/90 text-white flex items-center justify-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <ScrollReveal>
              <h1 className="text-5xl font-black mb-4">Terms & Conditions</h1>
              <p className="text-white/80">Last updated: March 2024</p>
            </ScrollReveal>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg max-w-none">
            <ScrollReveal>
              <div className="space-y-8 text-gray-700">
                <div>
                  <h2 className="text-3xl font-black text-primary mb-4">1. Agreement to Terms</h2>
                  <p>
                    By accessing and using the Seaquip Transport Solutions website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                  </p>
                </div>

                <div>
                  <h2 className="text-3xl font-black text-primary mb-4">2. Use License</h2>
                  <p>
                    Permission is granted to temporarily download one copy of the materials (information or software) on Seaquip Transport Solutions' website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                  </p>
                  <ul className="list-disc ml-6 space-y-2 mt-4">
                    <li>Modify or copy the materials</li>
                    <li>Use the materials for any commercial purpose or for any public display</li>
                    <li>Attempt to decompile or reverse engineer any software contained on the website</li>
                    <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
                    <li>Remove any copyright or other proprietary notations from the materials</li>
                    <li>Transmit or communicate any content that is unlawful, threatening, or offensive</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-3xl font-black text-primary mb-4">3. Disclaimer</h2>
                  <p>
                    The materials on Seaquip Transport Solutions' website are provided "as is". Seaquip Transport Solutions makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                  </p>
                </div>

                <div>
                  <h2 className="text-3xl font-black text-primary mb-4">4. Limitations</h2>
                  <p>
                    In no event shall Seaquip Transport Solutions or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on the website, even if Seaquip Transport Solutions or an authorized representative has been notified orally or in writing of the possibility of such damage.
                  </p>
                </div>

                <div>
                  <h2 className="text-3xl font-black text-primary mb-4">5. Accuracy of Materials</h2>
                  <p>
                    The materials appearing on Seaquip Transport Solutions' website could include technical, typographical, or photographic errors. Seaquip Transport Solutions does not warrant that any of the materials on the website are accurate, complete, or current. Seaquip Transport Solutions may make changes to the materials contained on its website at any time without notice.
                  </p>
                </div>

                <div>
                  <h2 className="text-3xl font-black text-primary mb-4">6. Links</h2>
                  <p>
                    Seaquip Transport Solutions has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Seaquip Transport Solutions of the site. Use of any such linked website is at the user's own risk.
                  </p>
                </div>

                <div>
                  <h2 className="text-3xl font-black text-primary mb-4">7. Modifications</h2>
                  <p>
                    Seaquip Transport Solutions may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.
                  </p>
                </div>

                <div>
                  <h2 className="text-3xl font-black text-primary mb-4">8. Governing Law</h2>
                  <p>
                    These terms and conditions are governed by and construed in accordance with the laws of Georgia, and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
                  </p>
                </div>

                <div>
                  <h2 className="text-3xl font-black text-primary mb-4">9. Service Terms</h2>
                  <p>
                    Our storage and shipping services are provided subject to the following:
                  </p>
                  <ul className="list-disc ml-6 space-y-2 mt-4">
                    <li>All materials must be properly declared and documented</li>
                    <li>Hazardous materials require proper certification and handling</li>
                    <li>Insurance coverage is provided as stated in your service agreement</li>
                    <li>Payment terms are NET 30 unless otherwise negotiated</li>
                    <li>Late payment penalties apply to overdue invoices</li>
                    <li>Storage items are subject to reasonable inspection</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-3xl font-black text-primary mb-4">10. Contact Information</h2>
                  <p>
                    If you have any questions about these Terms and Conditions, please contact us at:
                  </p>
                  <div className="bg-gray-50 p-6 rounded-lg mt-4">
                    <p className="font-bold">Seaquip Transport Solutions BV</p>
                    <p>1205 Shoreham Dr, Atlanta, GA 30349</p>
                    <p>Phone: 404-388-9408</p>
                    <p>Email: wileyjones90@yahoo.com</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
