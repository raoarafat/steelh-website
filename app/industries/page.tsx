import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function IndustriesPage() {
  return (
    <main className="flex flex-col min-h-screen bg-[#1a2238] text-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <Image
          src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg"
          alt="Industries We Serve"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="container relative z-10 text-center text-white">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Industries We Serve</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-300">
            Specialized IT staffing solutions for diverse business sectors
          </p>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-24 bg-[#1a2238]">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Finance */}
            <div className="flex flex-col md:flex-row gap-6 items-center p-8 border border-[#2d3a5a] rounded-lg hover:border-[#4d80e4] transition-colors">
              <div className="relative w-full md:w-48 h-48 rounded-lg overflow-hidden">
                <Image
                  src="https://images.pexels.com/photos/210607/pexels-photo-210607.jpeg"
                  alt="Finance"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-3">Finance</h2>
                <p className="text-gray-400 mb-4">
                  We provide specialized IT talent for financial institutions, helping them build secure, compliant, and
                  innovative technology systems.
                </p>
                <Link href="/work/finance" className="text-white font-medium hover:underline inline-flex items-center">
                  Learn more
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Healthcare */}
            <div className="flex flex-col md:flex-row gap-6 items-center p-8 border border-[#2d3a5a] rounded-lg hover:border-[#4d80e4] transition-colors">
              <div className="relative w-full md:w-48 h-48 rounded-lg overflow-hidden">
                <Image
                  src="https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg"
                  alt="Healthcare"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-3">Healthcare</h2>
                <p className="text-gray-400 mb-4">
                  Our healthcare IT staffing solutions focus on providing skilled professionals who understand HIPAA
                  compliance and healthcare-specific technologies.
                </p>
                <Link
                  href="/work/healthcare"
                  className="text-white font-medium hover:underline inline-flex items-center"
                >
                  Learn more
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Technology */}
            <div className="flex flex-col md:flex-row gap-6 items-center p-8 border border-[#2d3a5a] rounded-lg hover:border-[#4d80e4] transition-colors">
              <div className="relative w-full md:w-48 h-48 rounded-lg overflow-hidden">
                <Image
                  src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg"
                  alt="Technology"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-3">Technology</h2>
                <p className="text-gray-400 mb-4">
                  We help technology companies scale quickly with specialized talent across software development, cloud
                  infrastructure, and product engineering.
                </p>
                <Link
                  href="/work/technology"
                  className="text-white font-medium hover:underline inline-flex items-center"
                >
                  Learn more
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Retail */}
            <div className="flex flex-col md:flex-row gap-6 items-center p-8 border border-[#2d3a5a] rounded-lg hover:border-[#4d80e4] transition-colors">
              <div className="relative w-full md:w-48 h-48 rounded-lg overflow-hidden">
                <Image
                  src="https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg"
                  alt="Retail"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-3">Retail</h2>
                <p className="text-gray-400 mb-4">
                  Our retail IT staffing solutions provide talent specialized in e-commerce platforms, POS systems, and
                  omnichannel technology integration.
                </p>
                <Link href="/work/retail" className="text-white font-medium hover:underline inline-flex items-center">
                  Learn more
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Education */}
            <div className="flex flex-col md:flex-row gap-6 items-center p-8 border border-[#2d3a5a] rounded-lg hover:border-[#4d80e4] transition-colors">
              <div className="relative w-full md:w-48 h-48 rounded-lg overflow-hidden">
                <Image
                  src="https://images.pexels.com/photos/256417/pexels-photo-256417.jpeg"
                  alt="Education"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-3">Education</h2>
                <p className="text-gray-400 mb-4">
                  We provide IT professionals who understand the unique technology needs of educational institutions,
                  from LMS platforms to student information systems.
                </p>
                <Link
                  href="/work/education"
                  className="text-white font-medium hover:underline inline-flex items-center"
                >
                  Learn more
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Manufacturing */}
            <div className="flex flex-col md:flex-row gap-6 items-center p-8 border border-[#2d3a5a] rounded-lg hover:border-[#4d80e4] transition-colors">
              <div className="relative w-full md:w-48 h-48 rounded-lg overflow-hidden">
                <Image
                  src="https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg"
                  alt="Manufacturing"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-3">Manufacturing</h2>
                <p className="text-gray-400 mb-4">
                  Our manufacturing IT staffing solutions focus on professionals experienced with ERP systems, IoT,
                  automation, and industrial control systems.
                </p>
                <Link
                  href="/work/manufacturing"
                  className="text-white font-medium hover:underline inline-flex items-center"
                >
                  Learn more
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-24 bg-[#2d3a5a]">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Industry Approach</h2>
              <p className="text-lg mb-6 text-gray-300">
                While we specialize in these industries, our IT staffing methodology is adaptable to any sector. We
                begin each engagement with thorough research to understand the unique technology challenges and
                opportunities in your industry.
              </p>
              <p className="text-lg mb-6 text-gray-300">
                Our team combines industry-specific knowledge with IT expertise to provide talent solutions that address
                your unique business needs while delivering exceptional technical capabilities.
              </p>
              <Link href="/contact">
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-[#1a2238] rounded-full"
                >
                  Discuss Your Industry
                </Button>
              </Link>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg"
                alt="Our approach"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#1a2238] text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to build your IT dream team?</h2>
          <p className="text-xl max-w-2xl mx-auto mb-10 text-gray-300">
            Let's discuss how our industry expertise can help you find the perfect IT talent for your business.
          </p>
          <Link href="/contact">
            <Button className="bg-[#4d80e4] text-white hover:bg-[#3a6ad4] rounded-full px-8 py-6">Get in Touch</Button>
          </Link>
        </div>
      </section>
    </main>
  )
}
