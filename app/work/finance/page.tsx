import Image from "next/image"
import Link from "next/link"
import { HubspotForm } from "@/components/hubspot-form"

export default function FinancePage() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <Image
          src="https://images.pexels.com/photos/210607/pexels-photo-210607.jpeg"
          alt="Finance design solutions"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="container relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Financial Experience Design</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Creating intuitive digital solutions that build trust and simplify complex financial processes
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Transforming Finance Through Design</h2>
              <p className="text-lg mb-6">
                At BlackHives, we understand the unique challenges and opportunities in the financial sector. Our
                specialized team creates digital experiences that balance security and compliance requirements with
                user-friendly interfaces that build trust and engagement.
              </p>
              <p className="text-lg">
                From banking applications to investment platforms, we design solutions that simplify complex financial
                concepts, making them accessible to users while maintaining the sophistication expected in the industry.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg"
                alt="Finance digital experience"
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
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Finance Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="relative h-64">
                <Image
                  src="https://images.pexels.com/photos/6347729/pexels-photo-6347729.jpeg"
                  alt="Banking app redesign"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Banking App Redesign</h3>
                <p className="text-gray-600 mb-4">
                  Reimagined the mobile banking experience for a leading financial institution, resulting in a 40%
                  increase in user engagement and a 25% reduction in support calls.
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
                  src="https://images.pexels.com/photos/7821487/pexels-photo-7821487.jpeg"
                  alt="Investment platform"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Investment Platform</h3>
                <p className="text-gray-600 mb-4">
                  Designed an intuitive investment platform that simplified complex financial data, increasing user
                  confidence and driving a 35% increase in new account openings.
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
                  src="https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg"
                  alt="Financial education platform"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Financial Education Platform</h3>
                <p className="text-gray-600 mb-4">
                  Created an engaging financial literacy platform that made complex topics accessible, resulting in
                  improved customer knowledge and increased product adoption.
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
          <h2 className="text-3xl font-bold mb-12 text-center">Our Finance Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 border border-gray-200 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Banking UX/UI Design</h3>
              <p className="text-gray-600">
                User-centered design for banking applications that balance security with usability and engagement.
              </p>
            </div>
            <div className="p-6 border border-gray-200 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Fintech Product Design</h3>
              <p className="text-gray-600">
                Innovative design solutions for financial technology products that disrupt traditional models.
              </p>
            </div>
            <div className="p-6 border border-gray-200 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Financial Data Visualization</h3>
              <p className="text-gray-600">
                Clear, intuitive visualizations that make complex financial data accessible and actionable.
              </p>
            </div>
            <div className="p-6 border border-gray-200 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Financial Brand Identity</h3>
              <p className="text-gray-600">
                Strategic brand development that communicates trust, security, and innovation in the financial space.
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
              "BlackHives transformed our digital banking experience with their innovative design approach. Their team's
              understanding of both financial requirements and user needs helped us create a solution that truly
              resonates with our customers."
            </blockquote>
            <div className="flex items-center justify-center">
              <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                <Image
                  src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
                  alt="Michael Thompson"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-left">
                <p className="font-bold">Michael Thompson</p>
                <p className="text-gray-600">Chief Digital Officer, Global Financial Group</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-black text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to transform your financial experience?</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Let's discuss how our finance design expertise can help your organization build trust and engagement with
            your customers.
          </p>
          <div className="max-w-md mx-auto">
            <HubspotForm />
          </div>
        </div>
      </section>
    </main>
  )
}
