'use client'

import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { ScrollProgressBar } from '@/components/ScrollProgressBar'
import { ScrollReveal } from '@/components/ScrollReveal'

export default function PrivacyPolicyPage() {
  return (
    <>
      <ScrollProgressBar />
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[70vh] md:h-[80vh] bg-linear-to-b from-primary to-primary/90 text-white flex items-center justify-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <ScrollReveal>
              <h1 className="text-5xl font-black mb-4">Privacy Policy</h1>
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
                  <h2 className="text-3xl font-black text-primary mb-4">1. Introduction</h2>
                  <p>
                    Seaquip Transport Solutions BV ("we", "us", "our", or "Company") respects the privacy of our users ("user" or "you"). This Privacy Policy explains how we collect, use, disclose, and otherwise process your information in connection with our website and services.
                  </p>
                </div>

                <div>
                  <h2 className="text-3xl font-black text-primary mb-4">2. Information We Collect</h2>
                  <p>
                    We collect information you provide directly to us, such as when you:
                  </p>
                  <ul className="list-disc ml-6 space-y-2 mt-4">
                    <li>Submit a contact form or request a quote</li>
                    <li>Create an account or register for services</li>
                    <li>Make a purchase or arrange a shipment</li>
                    <li>Subscribe to our newsletter</li>
                    <li>Communicate with us via email or phone</li>
                    <li>Visit or browse our website</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-3xl font-black text-primary mb-4">3. Types of Information</h2>
                  <p>
                    The information we may collect includes:
                  </p>
                  <ul className="list-disc ml-6 space-y-2 mt-4">
                    <li><strong>Personal Information:</strong> Name, email address, phone number, company name, address</li>
                    <li><strong>Business Information:</strong> Shipment details, storage requirements, service preferences</li>
                    <li><strong>Identity Information:</strong> Government-issued ID, business licenses for verification purposes</li>
                    <li><strong>Technical Information:</strong> IP address, browser type, device information, website usage data</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-3xl font-black text-primary mb-4">4. How We Use Your Information</h2>
                  <p>
                    We use the information we collect to:
                  </p>
                  <ul className="list-disc ml-6 space-y-2 mt-4">
                    <li>Provide, maintain, and improve our services</li>
                    <li>Process transactions and send confirmations</li>
                    <li>Respond to your inquiries and requests</li>
                    <li>Send promotional communications (with your consent)</li>
                    <li>Monitor and analyze service usage patterns</li>
                    <li>Comply with legal obligations and regulations</li>
                    <li>Prevent fraud and protect security</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-3xl font-black text-primary mb-4">5. Data Sharing</h2>
                  <p>
                    We do not sell, trade, or rent your personal information to third parties. We may share your information:
                  </p>
                  <ul className="list-disc ml-6 space-y-2 mt-4">
                    <li>With service providers who assist us in operations</li>
                    <li>When required by law or legal process</li>
                    <li>To enforce our terms and conditions</li>
                    <li>To protect the security and integrity of our services</li>
                    <li>With your explicit consent</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-3xl font-black text-primary mb-4">6. Data Security</h2>
                  <p>
                    We implement appropriate technical and organizational measures to protect your information against unauthorized access, alteration, disclosure, or destruction. This includes:
                  </p>
                  <ul className="list-disc ml-6 space-y-2 mt-4">
                    <li>Encrypted transmission of sensitive data</li>
                    <li>Secure access controls and authentication</li>
                    <li>Regular security audits and assessments</li>
                    <li>Limited access to personal information on a need-to-know basis</li>
                    <li>Secure storage of confidential business information</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-3xl font-black text-primary mb-4">7. Cookies and Tracking</h2>
                  <p>
                    We use cookies and similar tracking technologies to enhance your experience, remember your preferences, and understand how you use our website. You can control cookie settings through your browser preferences.
                  </p>
                </div>

                <div>
                  <h2 className="text-3xl font-black text-primary mb-4">8. Your Rights and Choices</h2>
                  <p>
                    You have the right to:
                  </p>
                  <ul className="list-disc ml-6 space-y-2 mt-4">
                    <li>Access the personal information we hold about you</li>
                    <li>Request correction of inaccurate information</li>
                    <li>Request deletion of your information (subject to legal requirements)</li>
                    <li>Opt out of marketing communications</li>
                    <li>Request information about how we use your data</li>
                  </ul>
                  <p className="mt-4">
                    To exercise these rights, please contact us using the information in the Contact Us section below.
                  </p>
                </div>

                <div>
                  <h2 className="text-3xl font-black text-primary mb-4">9. Retention of Information</h2>
                  <p>
                    We retain your information for as long as necessary to provide our services, comply with legal obligations, and fulfill the purposes outlined in this policy. Retention periods vary depending on the context of processing and our legal obligations.
                  </p>
                </div>

                <div>
                  <h2 className="text-3xl font-black text-primary mb-4">10. Children's Privacy</h2>
                  <p>
                    Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that a child has provided us with personal information, we will take steps to delete such information and terminate the child's use of our services.
                  </p>
                </div>

                <div>
                  <h2 className="text-3xl font-black text-primary mb-4">11. Third-Party Links</h2>
                  <p>
                    Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review the privacy policies of any third-party sites before providing your information.
                  </p>
                </div>

                <div>
                  <h2 className="text-3xl font-black text-primary mb-4">12. Changes to This Policy</h2>
                  <p>
                    We may update this Privacy Policy from time to time. We will notify you of any material changes by updating the "Last updated" date at the top of this page. Your continued use of our services constitutes your acceptance of the updated Privacy Policy.
                  </p>
                </div>

                <div>
                  <h2 className="text-3xl font-black text-primary mb-4">13. Contact Us</h2>
                  <p>
                    If you have questions about this Privacy Policy or our privacy practices, please contact us at:
                  </p>
                  <div className="bg-gray-50 p-6 rounded-lg mt-4">
                    <p className="font-bold">Seaquip Transport Solutions BV</p>
                    <p>1205 Shoreham Dr, Atlanta, GA 30349</p>
                    <p>Phone: 404-388-9408</p>
                    <p>Email: wileyjones90@yahoo.com</p>
                    <p className="text-sm text-gray-600 mt-4">
                      Response time for privacy inquiries: Within 5 business days
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="text-3xl font-black text-primary mb-4">14. Compliance</h2>
                  <p>
                    This Privacy Policy complies with applicable data protection laws and regulations, including relevant state and federal privacy laws. We are committed to protecting your privacy and maintaining the highest standards of data protection.
                  </p>
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
