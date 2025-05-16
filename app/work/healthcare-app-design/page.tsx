import Image from "next/image"
import Link from "next/link"
import { HubspotForm } from "@/components/hubspot-form"

export default function HealthcareAppDesignPage() {
  return (
    <main className="flex flex-col min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <Image
          src="https://images.pexels.com/photos/1170979/pexels-photo-1170979.jpeg"
          alt="Healthcare App Design"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="container relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Healthcare App Design</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Creating an intuitive mobile experience that improves patient outcomes and streamlines healthcare delivery
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-black">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Project Overview</h2>
              <p className="text-lg mb-6 text-gray-300">
                Our client, a leading healthcare provider, needed a mobile application that would improve patient
                engagement, streamline appointment scheduling, and provide easy access to medical records and resources.
              </p>
              <p className="text-lg text-gray-300">
                We designed an intuitive, accessible mobile experience that puts patients in control of their healthcare
                journey while maintaining strict compliance with healthcare regulations and privacy standards.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/7089401/pexels-photo-7089401.jpeg"
                alt="Healthcare app overview"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-16 bg-black">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">The Challenge</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-black p-8 rounded-lg border border-zinc-800">
              <h3 className="text-xl font-bold mb-4">Complex Information Architecture</h3>
              <p className="text-gray-400">
                Organizing a vast amount of medical information and functionality in a way that's intuitive and
                accessible to users of all ages and technical abilities.
              </p>
            </div>
            <div className="bg-black p-8 rounded-lg border border-zinc-800">
              <h3 className="text-xl font-bold mb-4">Regulatory Compliance</h3>
              <p className="text-gray-400">
                Ensuring the app meets strict healthcare regulations including HIPAA compliance while maintaining a
                seamless user experience.
              </p>
            </div>
            <div className="bg-black p-8 rounded-lg border border-zinc-800">
              <h3 className="text-xl font-bold mb-4">Integration Complexity</h3>
              <p className="text-gray-400">
                Designing an interface that integrates with multiple backend systems including electronic health
                records, appointment scheduling, and payment processing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-black">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="order-2 md:order-1">
              <h3 className="text-2xl font-bold mb-4">Research & Discovery</h3>
              <p className="text-gray-300 mb-6">
                We conducted extensive user research including interviews with patients, healthcare providers, and
                administrative staff to understand their needs, pain points, and workflows.
              </p>
              <p className="text-gray-300 mb-6">
                Our team analyzed competitor apps and healthcare industry best practices to identify opportunities for
                innovation and improvement.
              </p>
              <p className="text-gray-300">
                We worked closely with compliance experts to ensure our design approach would meet all regulatory
                requirements while maintaining a focus on user experience.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden order-1 md:order-2">
              <Image
                src="https://images.pexels.com/photos/7089020/pexels-photo-7089020.jpeg"
                alt="Healthcare app research"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-16">
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/7088530/pexels-photo-7088530.jpeg"
                alt="Healthcare app design"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Design & Prototyping</h3>
              <p className="text-gray-300 mb-6">
                We created a comprehensive information architecture that organized complex medical information in an
                intuitive, user-friendly way.
              </p>
              <p className="text-gray-300 mb-6">
                Our design team developed wireframes and interactive prototypes, focusing on accessibility and ease of
                use for users of all ages and abilities.
              </p>
              <p className="text-gray-300">
                We conducted multiple rounds of usability testing with diverse user groups, iterating on our designs
                based on feedback to ensure the final product would meet user needs.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-16">
            <div className="order-2 md:order-1">
              <h3 className="text-2xl font-bold mb-4">Development & Implementation</h3>
              <p className="text-gray-300 mb-6">
                We worked closely with the development team to ensure our designs were implemented accurately and
                efficiently.
              </p>
              <p className="text-gray-300 mb-6">
                Our team created a comprehensive design system that ensured consistency across the app while enabling
                the development team to work efficiently.
              </p>
              <p className="text-gray-300">
                We conducted regular quality assurance testing throughout the development process to identify and
                address any usability issues.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden order-1 md:order-2">
              <Image
                src="https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg"
                alt="Healthcare app implementation"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16 bg-black">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">Results</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-black p-8 rounded-lg border border-zinc-800 text-center">
              <h3 className="text-4xl font-bold mb-4">35%</h3>
              <p className="text-gray-400">Increase in patient satisfaction scores</p>
            </div>
            <div className="bg-black p-8 rounded-lg border border-zinc-800 text-center">
              <h3 className="text-4xl font-bold mb-4">40%</h3>
              <p className="text-gray-400">Reduction in appointment no-shows</p>
            </div>
            <div className="bg-black p-8 rounded-lg border border-zinc-800 text-center">
              <h3 className="text-4xl font-bold mb-4">25%</h3>
              <p className="text-gray-400">Decrease in administrative workload</p>
            </div>
          </div>

          <div className="mt-16">
            <h3 className="text-2xl font-bold mb-6">Key Outcomes</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-start">
                <svg
                  className="w-6 h-6 text-white mr-4 flex-shrink-0 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <p className="text-gray-300">
                  Streamlined appointment scheduling process, reducing patient wait times and administrative workload
                </p>
              </div>
              <div className="flex items-start">
                <svg
                  className="w-6 h-6 text-white mr-4 flex-shrink-0 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <p className="text-gray-300">
                  Improved medication adherence through intuitive medication tracking and reminder features
                </p>
              </div>
              <div className="flex items-start">
                <svg
                  className="w-6 h-6 text-white mr-4 flex-shrink-0 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <p className="text-gray-300">
                  Enhanced patient-provider communication through secure messaging and telehealth integration
                </p>
              </div>
              <div className="flex items-start">
                <svg
                  className="w-6 h-6 text-white mr-4 flex-shrink-0 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <p className="text-gray-300">
                  Increased patient engagement with health education resources and preventive care recommendations
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 bg-black">
        <div className="container max-w-4xl">
          <div className="text-center">
            <svg className="w-12 h-12 mx-auto mb-6 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <blockquote className="text-2xl font-medium mb-8">
              "BlackHives transformed our patient experience with their innovative app design. Their deep understanding
              of healthcare workflows and user needs resulted in a solution that has significantly improved patient
              satisfaction and operational efficiency."
            </blockquote>
            <div className="flex items-center justify-center">
              <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                <Image
                  src="https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg"
                  alt="Dr. Jennifer Lee"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-left">
                <p className="font-bold">Dr. Jennifer Lee</p>
                <p className="text-gray-600">Chief Digital Officer, Metropolitan Health System</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Next Project Section */}
      <section className="py-16 bg-black">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">Explore More Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link href="/work/fintech-platform-redesign" className="group">
              <div className="relative h-[300px] mb-4 overflow-hidden rounded-lg">
                <Image
                  src="https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg"
                  alt="Fintech Platform Redesign"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <p className="text-white text-xl font-bold">View Project</p>
                </div>
              </div>
              <h3 className="text-xl font-bold">Fintech Platform Redesign</h3>
              <p className="text-gray-400">Financial Technology</p>
            </Link>
            <Link href="/work/ecommerce-website-redesign" className="group">
              <div className="relative h-[300px] mb-4 overflow-hidden rounded-lg">
                <Image
                  src="https://images.pexels.com/photos/6214476/pexels-photo-6214476.jpeg"
                  alt="E-commerce Website Redesign"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <p className="text-white text-xl font-bold">View Project</p>
                </div>
              </div>
              <h3 className="text-xl font-bold">E-commerce Website Redesign</h3>
              <p className="text-gray-400">Retail</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-black text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to transform your healthcare experience?</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Let's discuss how our design expertise can help your healthcare organization improve patient outcomes and
            operational efficiency.
          </p>
          <div className="max-w-md mx-auto">
            <HubspotForm />
          </div>
        </div>
      </section>
    </main>
  )
}
