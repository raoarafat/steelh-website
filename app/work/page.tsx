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
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#333]">
              Featured Projects
            </h2>
            <p className="text-lg text-[#555]">
              Real client success stories showcasing our IT staffing expertise
            </p>
          </div>

          {/* Project 1 - AirAsia (Featured) */}
          <div className="mb-32">
            <div className="bg-gradient-to-r from-[#d30b1b] to-[#ff0000] p-3 inline-block mb-4">
              <span className="text-white font-bold text-sm">
                FEATURED PROJECT
              </span>
            </div>
            <div className="relative h-[600px] mb-8 overflow-hidden group">
              <Image
                src="https://images.pexels.com/photos/723240/pexels-photo-723240.jpeg"
                alt="AirAsia Database Metadata System"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <div className="p-8">
                  <h3 className="text-4xl font-bold text-white mb-2">
                    AirAsia Airlines
                  </h3>
                  <p className="text-xl text-white/90">
                    Database Metadata & Data Dictionary System
                  </p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-2xl font-bold mb-4 text-[#333]">Client</h4>
                <p className="text-lg text-[#555] mb-2">AirAsia Airlines</p>
                <p className="text-sm text-[#555]">
                  Aviation Industry | Malaysia
                </p>
              </div>
              <div>
                <h4 className="text-2xl font-bold mb-4 text-[#333]">
                  Project Overview
                </h4>
                <p className="text-[#555] mb-6">
                  Steel Horizon Solutions assembled a specialized team of
                  database engineers and developers to design and implement a
                  comprehensive Database Metadata and Data Dictionary system for
                  AirAsia, Southeast Asia's leading low-cost carrier.
                </p>
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div>
                    <p className="text-2xl font-bold text-[#4d80e4]">8</p>
                    <p className="text-sm text-[#555]">Team Members</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-[#4d80e4]">16</p>
                    <p className="text-sm text-[#555]">Weeks Duration</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-[#4d80e4]">100%</p>
                    <p className="text-sm text-[#555]">Coverage Achieved</p>
                  </div>
                </div>
                <Link href="/work/airasia-database-metadata">
                  <Button className="bg-[#333] text-[#f7f3e9] hover:bg-black">
                    View Full Case Study →
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* More Projects Coming Soon */}
          <div className="bg-white p-12 text-center border-2 border-dashed border-gray-300">
            <h3 className="text-2xl font-bold mb-4 text-[#333]">
              More Success Stories Coming Soon
            </h3>
            <p className="text-[#555] mb-6 max-w-2xl mx-auto">
              We're currently working with several clients across different
              industries. Check back soon for more detailed case studies
              showcasing our IT staffing expertise.
            </p>
            <Link href="/contact">
              <Button className="bg-[#4d80e4] text-white hover:bg-[#3a6ad4]">
                Become Our Next Success Story
              </Button>
            </Link>
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
