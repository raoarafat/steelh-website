import Image from 'next/image';
import Link from 'next/link';
import { HubspotForm } from '@/components/hubspot-form';

export default function HealthcarePage() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <Image
          src="https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg"
          alt="Healthcare design solutions"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="container relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Healthcare Experience Design
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Creating intuitive digital solutions that improve patient outcomes
            and streamline provider workflows
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Transforming Healthcare Through Design
              </h2>
              <p className="text-lg mb-6">
                At BlackHives, we understand the unique challenges and
                opportunities in the healthcare sector. Our specialized team
                creates digital experiences that prioritize accessibility,
                privacy, and empathy while meeting the complex regulatory
                requirements of the industry.
              </p>
              <p className="text-lg">
                From patient portals to provider platforms, we design solutions
                that enhance the healthcare journey for all stakeholders,
                ultimately contributing to better health outcomes and more
                efficient care delivery.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/1170979/pexels-photo-1170979.jpeg"
                alt="Healthcare digital experience"
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
          <h2 className="text-3xl font-bold mb-12 text-center">
            Featured Healthcare Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="relative h-64">
                <Image
                  src="https://images.pexels.com/photos/7089401/pexels-photo-7089401.jpeg"
                  alt="Patient portal redesign"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">
                  Patient Portal Redesign
                </h3>
                <p className="text-gray-600 mb-4">
                  Reimagined the digital experience for patients, resulting in a
                  45% increase in portal usage and improved satisfaction scores.
                </p>
                <Link
                  href="/work/fintech-platform-redesign"
                  className="text-black font-medium hover:underline"
                >
                  View case study →
                </Link>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="relative h-64">
                <Image
                  src="https://images.pexels.com/photos/7089020/pexels-photo-7089020.jpeg"
                  alt="Telemedicine platform"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">
                  Telemedicine Platform
                </h3>
                <p className="text-gray-600 mb-4">
                  Designed an intuitive telemedicine experience that increased
                  virtual visit completion rates by 60% and reduced technical
                  support calls.
                </p>
                <Link
                  href="/work/fintech-platform-redesign"
                  className="text-black font-medium hover:underline"
                >
                  View case study →
                </Link>
              </div>
            </div>

            {/* Project 3 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="relative h-64">
                <Image
                  src="https://images.pexels.com/photos/7088530/pexels-photo-7088530.jpeg"
                  alt="Provider workflow optimization"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">
                  Provider Workflow Optimization
                </h3>
                <p className="text-gray-600 mb-4">
                  Streamlined clinical workflows through thoughtful UX design,
                  reducing documentation time by 25% and improving provider
                  satisfaction.
                </p>
                <Link
                  href="/work/fintech-platform-redesign"
                  className="text-black font-medium hover:underline"
                >
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
          <h2 className="text-3xl font-bold mb-12 text-center">
            Our Healthcare Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 border border-gray-200 rounded-lg">
              <h3 className="text-xl font-bold mb-3">
                Patient Experience Design
              </h3>
              <p className="text-gray-600">
                User-centered design for patient-facing applications that
                enhance engagement and improve health outcomes.
              </p>
            </div>
            <div className="p-6 border border-gray-200 rounded-lg">
              <h3 className="text-xl font-bold mb-3">
                Clinical Workflow Design
              </h3>
              <p className="text-gray-600">
                Intuitive interfaces for healthcare providers that streamline
                workflows and reduce administrative burden.
              </p>
            </div>
            <div className="p-6 border border-gray-200 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Healthcare Branding</h3>
              <p className="text-gray-600">
                Strategic brand development that communicates trust, expertise,
                and compassion in the healthcare space.
              </p>
            </div>
            <div className="p-6 border border-gray-200 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Health Tech UX/UI</h3>
              <p className="text-gray-600">
                Specialized design for health technology products that balance
                innovation with usability and compliance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 bg-gray-50">
        <div className="container max-w-4xl">
          <div className="text-center">
            <svg
              className="w-12 h-12 mx-auto mb-6 text-gray-400"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <blockquote className="text-2xl font-medium mb-8">
              "BlackHives truly understands the unique challenges of healthcare
              design. Their work on our patient portal not only improved the
              user experience but also helped us achieve meaningful engagement
              with our patients."
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
                <p className="text-gray-600">
                  Chief Digital Officer, Metropolitan Health System
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-black text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to transform your healthcare experience?
          </h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Let's discuss how our healthcare design expertise can help your
            organization improve patient outcomes and provider satisfaction.
          </p>
          <div className="max-w-md mx-auto">
            <HubspotForm />
          </div>
        </div>
      </section>
    </main>
  );
}
