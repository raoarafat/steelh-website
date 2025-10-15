import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function WorkPage() {
  return (
    <main className="flex flex-col min-h-screen bg-[#f7f3e9] text-[#333] pt-16">
      {/* Hero Section */}
      <section className="h-[70vh] flex items-center justify-center bg-[#f7f3e9] relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg"
            alt="Our Work"
            fill
            className="object-cover opacity-40"
            priority
          />
        </div>
        <div className="max-w-[1200px] mx-auto px-6 w-full relative z-10 text-center">
          <h1 className="text-3xl md:text-5xl font-semibold mb-6 tracking-tight">
            Case Studies
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto text-gray-300">
            Transforming businesses through strategic IT staffing and workforce
            solutions
          </p>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 bg-[#f7f3e9]">
        <div className="max-w-[1200px] mx-auto px-6">
          {/* Project 1 */}
          <div className="mb-32">
            <div className="relative h-[600px] mb-8 overflow-hidden group">
              <Image
                src="https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg"
                alt="Financial Services IT Transformation"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-3xl font-medium mb-2">
                  Financial Services IT Transformation
                </h3>
                <p className="text-gray-400">Banking & Financial Services</p>
              </div>
              <div>
                <p className="text-gray-300 mb-6">
                  We helped a leading financial institution build a specialized
                  team of 25 IT professionals to modernize their legacy systems,
                  resulting in a 40% improvement in processing times and
                  enhanced security protocols.
                </p>
                <Link href="/work/financial-services-transformation">
                  <Button
                    variant="outline"
                    className="border-[#333] text-[#333] hover:bg-[#333] hover:text-[#f7f3e9] rounded-full"
                  >
                    View Case Study
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="mb-32">
            <div className="relative h-[600px] mb-8 overflow-hidden group">
              <Image
                src="https://images.pexels.com/photos/1170979/pexels-photo-1170979.jpeg"
                alt="Healthcare IT Staffing"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-3xl font-medium mb-2">
                  Healthcare IT Staffing
                </h3>
                <p className="text-gray-400">Healthcare</p>
              </div>
              <div>
                <p className="text-gray-300 mb-6">
                  We provided a healthcare provider with a dedicated team of IT
                  specialists to implement a new electronic health records
                  system, improving patient data management and reducing
                  administrative overhead by 35%.
                </p>
                <Link href="/work/healthcare-it-staffing">
                  <Button
                    variant="outline"
                    className="border-[#333] text-[#333] hover:bg-[#333] hover:text-[#f7f3e9] rounded-full"
                  >
                    View Case Study
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Project 3 */}
          <div>
            <div className="relative h-[600px] mb-8 overflow-hidden group">
              <Image
                src="https://images.pexels.com/photos/6214476/pexels-photo-6214476.jpeg"
                alt="E-commerce Platform Development"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-3xl font-medium mb-2">
                  E-commerce Platform Development
                </h3>
                <p className="text-gray-400">Retail</p>
              </div>
              <div>
                <p className="text-gray-300 mb-6">
                  We assembled a specialized team of developers, architects, and
                  QA engineers to help a retail brand build a scalable
                  e-commerce platform, resulting in a 30% increase in online
                  sales and improved customer experience.
                </p>
                <Link href="/work/ecommerce-platform-development">
                  <Button
                    variant="outline"
                    className="border-[#333] text-[#333] hover:bg-[#333] hover:text-[#f7f3e9] rounded-full"
                  >
                    View Case Study
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-24 bg-[#f7f3e9]">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-4xl font-semibold mb-16 text-center">
            Industries We Serve
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Finance */}
            <Link href="/work/finance" className="group">
              <div className="relative h-[400px] mb-4 overflow-hidden">
                <Image
                  src="https://images.pexels.com/photos/210607/pexels-photo-210607.jpeg"
                  alt="Finance"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <h3 className="text-2xl font-medium">Finance</h3>
            </Link>

            {/* Healthcare */}
            <Link href="/work/healthcare" className="group">
              <div className="relative h-[400px] mb-4 overflow-hidden">
                <Image
                  src="https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg"
                  alt="Healthcare"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <h3 className="text-2xl font-medium">Healthcare</h3>
            </Link>

            {/* Technology */}
            <Link href="/work/technology" className="group">
              <div className="relative h-[400px] mb-4 overflow-hidden">
                <Image
                  src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg"
                  alt="Technology"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <h3 className="text-2xl font-medium">Technology</h3>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#333]">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <h2 className="text-4xl font-archivo font-semibold mb-6 text-[#f7f3e9]">
            Ready to build your IT dream team?
          </h2>
          <p className="text-xl max-w-2xl mx-auto mb-12 text-[#f7f3e9]/80">
            Let's discuss how our IT staffing expertise can help your business
            innovate and grow.
          </p>
          <Link href="/contact">
            <Button className="bg-[#f7f3e9] text-[#333] hover:bg-[#f7f3e9]/90 rounded-full px-8 py-6">
              Get in Touch
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
