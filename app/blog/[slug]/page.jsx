import Link from 'next/link'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { ScrollProgressBar } from '@/components/ScrollProgressBar'
import { ScrollReveal } from '@/components/ScrollReveal'
import { ArrowLeft } from 'lucide-react'

// Blog posts data
const allPosts = {
  'best-practices-tank-storage': {
    title: 'Best Practices for Secure Tank Storage Solutions',
    category: 'STORAGE',
    date: 'MAR 15, 2024',
    author: 'Wiley Jones',
    readTime: '5 min read',
    image: 'https://images.pexels.com/photos/5025669/pexels-photo-5025669.jpeg?auto=compress&cs=tinysrgb&w=1200',
    content: `
      <h2>Introduction to Tank Storage</h2>
      <p>Tank storage is a critical component of modern logistics and industrial operations. Whether you're storing chemicals, liquids, or other temperature-sensitive materials, proper tank storage is essential for maintaining product quality and safety.</p>
      
      <h2>Key Factors in Tank Storage</h2>
      <p>When selecting a tank storage facility, consider the following important factors:</p>
      <ul>
        <li><strong>Climate Control:</strong> Maintaining consistent temperature and humidity levels is crucial for product preservation.</li>
        <li><strong>Security:</strong> 24/7 monitoring and access controls protect your valuable inventory.</li>
        <li><strong>Capacity:</strong> Ensure the facility has adequate space for your current and future needs.</li>
        <li><strong>Compliance:</strong> The facility must meet all regulatory requirements for your specific materials.</li>
      </ul>

      <h2>Best Practices for Tank Storage</h2>
      <p>Implement these best practices to maximize the benefits of tank storage:</p>
      <ol>
        <li>Conduct regular inspections of storage tanks and equipment</li>
        <li>Maintain detailed inventory records and tracking systems</li>
        <li>Implement proper labeling and organization procedures</li>
        <li>Train staff on safety protocols and emergency procedures</li>
        <li>Schedule preventive maintenance to avoid equipment failures</li>
      </ol>

      <h2>Technology in Modern Storage</h2>
      <p>Modern tank storage facilities now incorporate advanced technology such as:</p>
      <ul>
        <li>Real-time inventory management systems</li>
        <li>Environmental monitoring sensors</li>
        <li>Automated climate control systems</li>
        <li>Security cameras and alarm systems</li>
      </ul>

      <h2>Conclusion</h2>
      <p>By following these best practices and choosing a reputable facility like Seaquip Transport Solutions, you can ensure your valuable inventory is stored safely and securely. Contact us today to learn more about our tank storage solutions.</p>
    `
  },
  'international-shipping-guide': {
    title: 'International Shipping: Navigating Customs and Compliance',
    category: 'SHIPPING',
    date: 'MAR 10, 2024',
    author: 'Wiley Jones',
    readTime: '8 min read',
    image: 'https://images.pexels.com/photos/5025641/pexels-photo-5025641.jpeg?auto=compress&cs=tinysrgb&w=1200',
    content: `
      <h2>Understanding International Shipping</h2>
      <p>International shipping involves complex regulations, documentation, and compliance requirements. Success requires careful planning and attention to detail.</p>
      
      <h2>Essential Documentation</h2>
      <p>Several key documents are required for international shipments:</p>
      <ul>
        <li><strong>Commercial Invoice:</strong> Details the goods and transaction terms</li>
        <li><strong>Bill of Lading:</strong> Proof of shipment and receipt</li>
        <li><strong>Packing List:</strong> Itemized contents of your shipment</li>
        <li><strong>Export License:</strong> Clearance from your country's export authority</li>
        <li><strong>Certificate of Origin:</strong> Confirms the country of origin</li>
      </ul>

      <h2>Customs Procedures</h2>
      <p>Customs clearance is a critical step in international shipping. Here's what to expect:</p>
      <p>Your shipment will be inspected, duties and taxes assessed, and all documentation verified. Working with experienced customs brokers can streamline this process and prevent delays.</p>

      <h2>Common Challenges</h2>
      <p>Be aware of these common issues in international shipping:</p>
      <ul>
        <li>Incorrect documentation leading to delays</li>
        <li>Misclassification of goods affecting duties</li>
        <li>Unfamiliar regulations in destination countries</li>
        <li>Currency and payment complications</li>
      </ul>

      <h2>Best Practices for Success</h2>
      <ol>
        <li>Work with experienced international shipping partners</li>
        <li>Ensure all documentation is accurate and complete</li>
        <li>Research destination country regulations</li>
        <li>Allow extra time for customs procedures</li>
        <li>Track your shipment in real-time</li>
      </ol>

      <h2>Conclusion</h2>
      <p>International shipping doesn't have to be complicated. With proper planning and the right partner, your goods can reach their destination safely and on time. Contact Seaquip Transport Solutions for expert international shipping services.</p>
    `
  },
  'hazmat-handling-safety': {
    title: 'Hazmat Handling: Safety Standards and Best Practices',
    category: 'COMPLIANCE',
    date: 'MAR 05, 2024',
    author: 'Wiley Jones',
    readTime: '6 min read',
    image: 'https://images.pexels.com/photos/5025644/pexels-photo-5025644.jpeg?auto=compress&cs=tinysrgb&w=1200',
    content: `
      <h2>Understanding Hazmat</h2>
      <p>Hazardous materials (hazmat) include chemicals, flammables, explosives, and other substances that pose risks to health and safety. Proper handling is not just important—it's required by law.</p>
      
      <h2>Regulatory Framework</h2>
      <p>Hazmat transportation and storage are governed by several regulations:</p>
      <ul>
        <li><strong>DOT Regulations:</strong> Federal standards for hazmat transportation</li>
        <li><strong>EPA Standards:</strong> Environmental protection requirements</li>
        <li><strong>OSHA Guidelines:</strong> Workplace safety protocols</li>
        <li><strong>Local Regulations:</strong> State and local specific requirements</li>
      </ul>

      <h2>Safety Training Requirements</h2>
      <p>Anyone handling hazmat must receive proper training including:</p>
      <ul>
        <li>Hazmat classification and identification</li>
        <li>Proper packaging and labeling</li>
        <li>Emergency response procedures</li>
        <li>Personal protective equipment (PPE) usage</li>
        <li>Spill and accident protocols</li>
      </ul>

      <h2>Storage Best Practices</h2>
      <p>Secure hazmat storage requires specific measures:</p>
      <ol>
        <li>Store hazmat in designated, properly ventilated areas</li>
        <li>Maintain detailed inventory and tracking records</li>
        <li>Use appropriate storage containers and equipment</li>
        <li>Implement regular inspections and maintenance</li>
        <li>Establish emergency response plans</li>
      </ol>

      <h2>Transportation Requirements</h2>
      <p>Moving hazmat requires licensed carriers with proper:</p>
      <ul>
        <li>Vehicle certifications</li>
        <li>Driver training and certifications</li>
        <li>Insurance and permits</li>
        <li>Compliance with routing regulations</li>
      </ul>

      <h2>Why Choose Seaquip</h2>
      <p>Seaquip Transport Solutions holds all necessary certifications and licenses for hazmat handling. Our trained professionals ensure your hazardous materials are transported safely and in full compliance with all regulations.</p>

      <h2>Conclusion</h2>
      <p>Hazmat handling requires expertise, training, and commitment to safety. Trust Seaquip Transport Solutions with your hazmat shipping needs. Contact us for more information.</p>
    `
  },
  'climate-controlled-storage': {
    title: 'Climate-Controlled Storage: Protecting Your Inventory',
    category: 'STORAGE',
    date: 'FEB 28, 2024',
    author: 'Wiley Jones',
    readTime: '7 min read',
    image: 'https://images.pexels.com/photos/5025637/pexels-photo-5025637.jpeg?auto=compress&cs=tinysrgb&w=1200',
    content: `
      <h2>The Importance of Climate Control</h2>
      <p>Temperature and humidity fluctuations can damage sensitive products, reduce shelf life, and compromise quality. Climate-controlled storage maintains consistent conditions to protect your inventory.</p>
      
      <h2>What Gets Damaged by Poor Climate Control?</h2>
      <p>Many products require climate control:</p>
      <ul>
        <li><strong>Electronics:</strong> Sensitive components require specific temperature ranges</li>
        <li><strong>Pharmaceuticals:</strong> Many medications require precise temperature control</li>
        <li><strong>Food Products:</strong> Perishables require refrigeration or freezing</li>
        <li><strong>Wine & Spirits:</strong> Humidity and temperature affect aging and quality</li>
        <li><strong>Artwork & Antiques:</strong> Climate control prevents warping and deterioration</li>
        <li><strong>Paper Products:</strong> Moisture can cause mold and deterioration</li>
      </ul>

      <h2>How Climate Control Systems Work</h2>
      <p>Modern climate-controlled storage facilities use sophisticated systems:</p>
      <p>Advanced HVAC systems maintain temperature within 2-3 degrees, while dehumidifiers keep humidity at optimal levels (typically 30-50% relative humidity). These systems operate continuously and include backup power.</p>

      <h2>Monitoring and Verification</h2>
      <p>Modern facilities include:</p>
      <ul>
        <li>Real-time temperature and humidity sensors</li>
        <li>Automated alerts for any deviations</li>
        <li>Regular monitoring reports</li>
        <li>Emergency response protocols</li>
      </ul>

      <h2>Cost-Benefit Analysis</h2>
      <p>While climate-controlled storage costs more than standard storage, the protection it provides typically exceeds the additional expense, especially for valuable or sensitive goods.</p>

      <h2>Seaquip's Climate-Controlled Facilities</h2>
      <p>Our state-of-the-art storage facility maintains optimal conditions for all types of products, with 24/7 monitoring and emergency backup systems in place.</p>

      <h2>Conclusion</h2>
      <p>Proper climate control is essential for preserving product quality and value. Choose Seaquip Transport Solutions for professional climate-controlled storage.</p>
    `
  }
}

export function generateStaticParams() {
  return Object.keys(allPosts).map((slug) => ({
    slug: slug,
  }))
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params
  const post = slug ? allPosts[slug] : null

  if (!post) {
    return (
      <>
        <Navigation />
        <div className="min-h-screen bg-gray-50 pt-32 pb-24 flex items-center justify-center">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-black text-primary mb-6 uppercase tracking-tighter">Post Not Found</h1>
            <p className="text-gray-600 mb-10 text-lg md:text-xl font-medium">Sorry, the blog post you're looking for doesn't exist or has been moved.</p>
            <Link href="/blog">
              <button className="bg-accent hover:bg-accent-light text-white font-black py-4 px-10 rounded-sm transition-all duration-300 uppercase tracking-widest text-sm shadow-lg shadow-accent/20">
                Back to Industry Insights
              </button>
            </Link>
          </div>
        </div>
        <Footer />
      </>
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
              <Link href="/blog" className="flex items-center gap-2 text-accent hover:text-accent-light mb-6 font-bold">
                <ArrowLeft className="w-4 h-4" /> Back to Blog
              </Link>
              <div className="flex items-center gap-4 mb-6">
                <span className="bg-accent text-white px-3 py-1 rounded-full text-xs font-black uppercase tracking-widest">
                  {post.category}
                </span>
                <span className="text-white/80">{post.date}</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">{post.title}</h1>
              <div className="flex items-center gap-6 text-white/90">
                <span><strong>By</strong> {post.author}</span>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Featured Image */}
        <section className="relative -mt-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <img 
              src={post.image} 
              alt={post.title} 
              className="w-full h-96 object-cover rounded-2xl shadow-2xl"
            />
          </div>
        </section>

        {/* Content Section */}
        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <article className="prose prose-lg max-w-none">
              <div 
                dangerouslySetInnerHTML={{ __html: post.content }}
                className="text-gray-700 space-y-6 leading-relaxed"
              />
            </article>
          </div>
        </section>

        {/* Related Posts CTA */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <ScrollReveal>
              <h2 className="text-3xl font-black text-primary mb-6">Need Professional Logistics Services?</h2>
              <p className="text-gray-600 text-lg mb-8">
                Contact Seaquip Transport Solutions for tank storage and shipping solutions tailored to your business needs.
              </p>
              <Link href="/contact">
                <button className="bg-accent hover:bg-accent-light text-white font-black py-4 px-12 rounded-sm transition-all duration-300 text-lg">
                  GET A QUOTE
                </button>
              </Link>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
