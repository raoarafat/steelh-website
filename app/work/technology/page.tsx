import Image from "next/image"
import Link from "next/link"
import { HubspotForm } from "@/components/hubspot-form"

export default function TechnologyPage() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <Image
          src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg"
          alt="Technology solutions"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="container relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Technology Solutions</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Innovative digital experiences for technology companies that drive growth and transformation
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Transforming Tech Companies with Strategic Design</h2>
              <p className="text-lg mb-6">
                At BlackHives, we understand the unique challenges and opportunities in the technology sector. Our
                specialized team creates digital experiences that showcase complex products with clarity, engage
                technical and non-technical audiences alike, and position your brand as an industry leader.
              </p>
              <p className="text-lg">
                From SaaS platforms to enterprise solutions, we help technology companies communicate their value
                proposition effectively and create intuitive user experiences that drive adoption and loyalty.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg"
                alt="Technology design strategy"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Technology Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="relative h-64">
                <Image
                  src="https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg"
                  alt="Cloud platform UI redesign"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Cloud Platform UI Redesign</h3>
                <p className="text-gray-600 mb-4">
                  Reimagined the user interface for a leading cloud services provider, improving usability and reducing
                  customer support inquiries by 35%.
                </p>
                <Link href="/work/fintech-platform-redesign" className="text-black font-medium hover:underline">
                  View case study →
                </Link>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="relative h-64">
                <Image
                  src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg"
                  alt="Enterprise software dashboard"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Enterprise Software Dashboard</h3>
                <p className="text-gray-600 mb-4">
                  Created an intuitive analytics dashboard for a B2B software company, resulting in 28% higher user
                  engagement and improved data visualization.
                </p>
                <Link href="/work/fintech-platform-redesign" className="text-black font-medium hover:underline">
                  View case study →
                </Link>
              </div>
            </div>

            {/* Project 3 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="relative h-64">
                <Image
                  src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg"
                  alt="Developer portal redesign"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Developer Portal Redesign</h3>
                <p className="text-gray-600 mb-4">
                  Revamped the developer documentation and resources portal for a tech giant, improving API adoption
                  rates and developer satisfaction.
                </p>
                <Link href="/work/fintech-platform-redesign" className="text-black font-medium hover:underline">
                  View case study →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Technology Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 border border-gray-200 rounded-lg">
              <h3 className="text-xl font-bold mb-3">SaaS UI/UX Design</h3>
              <p className="text-gray-600">
                Intuitive interfaces for software-as-a-service products that drive user adoption and retention.
              </p>
            </div>
            <div className="p-6 border border-gray-200 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Developer Experience</h3>
              <p className="text-gray-600">
                Documentation, portals, and tools designed with developers in mind for seamless API integration.
              </p>
            </div>
            <div className="p-6 border border-gray-200 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Enterprise UX</h3>
              <p className="text-gray-600">
                Complex workflows simplified through thoughtful design for enterprise software solutions.
              </p>
            </div>
            <div className="p-6 border border-gray-200 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Tech Brand Identity</h3>
              <p className="text-gray-600">
                Distinctive visual identities that communicate innovation and reliability in the tech space.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 bg-gray-50">
        <div className="container max-w-4xl">
          <div className="text-center">
            <svg className="w-12 h-12 mx-auto mb-6 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <blockquote className="text-2xl font-medium mb-8">
              "BlackHives transformed our complex product into an intuitive experience that our customers love. Their
              understanding of both design and technology helped us achieve a 40% increase in user engagement."
            </blockquote>
            <div className="flex items-center justify-center">
              <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                <Image
                  src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
                  alt="Sarah Johnson"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-left">
                <p className="font-bold">Sarah Johnson</p>
                <p className="text-gray-600">CPO, TechSolutions Inc.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-black text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to transform your technology product?</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Let's discuss how our design expertise can help your technology company stand out and succeed.
          </p>
          <div className="max-w-md mx-auto">
            <HubspotForm />
          </div>
        </div>
      </section>
    </main>
  )
}
