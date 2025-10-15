import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import { RoleCategories } from '@/components/role-categories';

export default function HomePage() {
  return (
    <main className="flex flex-col min-h-screen bg-[#f7f3e9] text-[#333]">
      {/* Hero Section */}
      <section className="pt-56 pb-16 bg-gradient-to-r from-[#e6e0d0] to-[#f7f3e9] border-b border-gray-200">
        <div className="max-w-[1200px] mx-auto px-6 w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-[#333]">
              Connect With Global IT Talent
            </h1>
            <p className="text-lg mb-8 text-[#555] max-w-xl">
              Steel Horizon Solutions bridges businesses with exceptional IT
              professionals worldwide, enabling remote work excellence and
              digital innovation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button className="bg-[#333] text-[#f7f3e9] hover:bg-black px-6 py-3">
                  Get in Touch
                </Button>
              </Link>
              <Link href="/roles">
                <Button
                  variant="outline"
                  className="border-[#333] text-[#333] hover:bg-[#333] hover:text-[#f7f3e9] px-6 py-3"
                >
                  Browse Roles
                </Button>
              </Link>
            </div>
          </div>
          <div className="hidden md:block relative h-[400px]">
            <Image
              src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg"
              alt="IT professionals collaborating"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Roles Section */}
      <section className="py-16 bg-[#f7f3e9]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-[#333]">
              IT Roles We Provide
            </h2>
            <Link
              href="/roles"
              className="text-[#4d80e4] hover:underline flex items-center"
            >
              View All Roles
              <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
          </div>

          <RoleCategories />
        </div>
      </section>

      {/* Spotlight Section */}
      <section className="py-16 bg-[#f0ece2]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-[#333]">Featured Project</h2>
            <Link
              href="/work"
              className="text-[#4d80e4] hover:underline flex items-center"
            >
              View All Projects
              <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="bg-gradient-to-br from-[#d30b1b] to-[#ff0000] p-8 rounded-lg shadow-lg text-white">
              <div className="mb-4">
                <span className="bg-white/20 text-white px-3 py-1 text-xs font-bold">
                  SUCCESS STORY
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-2">AirAsia Airlines</h3>
              <h4 className="text-lg mb-4 text-white/90">
                Database Metadata & Data Dictionary System
              </h4>
              <p className="text-white/90 mb-6">
                We assembled a specialized team of database engineers to develop
                a comprehensive metadata management system for Southeast Asia's
                leading airline.
              </p>
              <div className="grid grid-cols-3 gap-4 mb-6 text-center">
                <div className="bg-white/10 p-3 rounded">
                  <p className="text-2xl font-bold">8</p>
                  <p className="text-xs text-white/80">Team Members</p>
                </div>
                <div className="bg-white/10 p-3 rounded">
                  <p className="text-2xl font-bold">16</p>
                  <p className="text-xs text-white/80">Weeks</p>
                </div>
                <div className="bg-white/10 p-3 rounded">
                  <p className="text-2xl font-bold">100%</p>
                  <p className="text-xs text-white/80">Coverage</p>
                </div>
              </div>
              <Link href="/work/airasia-database-metadata">
                <Button className="bg-white text-[#d30b1b] hover:bg-gray-100 w-full">
                  View Full Case Study →
                </Button>
              </Link>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://images.pexels.com/photos/723240/pexels-photo-723240.jpeg"
                alt="AirAsia project"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-[#f7f3e9]">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-2xl font-bold mb-12 text-[#333]">Our Services</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-[#4d80e4] text-white flex items-center justify-center mb-6 rounded-lg">
                <span className="text-xl font-bold">01</span>
              </div>
              <h3 className="text-xl font-bold mb-4">IT Staffing</h3>
              <p className="text-[#555] mb-6">
                Flexible staffing solutions to meet your technology needs, from
                short-term projects to long-term engagements with global talent.
              </p>
              <Link
                href="/services#it-staffing"
                className="text-[#4d80e4] hover:underline flex items-center"
              >
                Learn more
                <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-[#4d80e4] text-white flex items-center justify-center mb-6 rounded-lg">
                <span className="text-xl font-bold">02</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Remote Teams</h3>
              <p className="text-[#555] mb-6">
                Build and manage dedicated remote development teams that work
                exclusively on your projects with full-time commitment.
              </p>
              <Link
                href="/services#remote-teams"
                className="text-[#4d80e4] hover:underline flex items-center"
              >
                Learn more
                <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-[#4d80e4] text-white flex items-center justify-center mb-6 rounded-lg">
                <span className="text-xl font-bold">03</span>
              </div>
              <h3 className="text-xl font-bold mb-4">
                Digital Nomad Solutions
              </h3>
              <p className="text-[#555] mb-6">
                Specialized services for hiring and managing digital nomads,
                including compliance, payments, and remote work best practices.
              </p>
              <Link
                href="/services#digital-nomad-solutions"
                className="text-[#4d80e4] hover:underline flex items-center"
              >
                Learn more
                <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Talent Regions Section */}
      <section className="py-16 bg-[#f0ece2]">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-2xl font-bold mb-8 text-[#333]">
            Our Global Presence
          </h2>

          <div className="relative h-[400px] mb-8 rounded-lg overflow-hidden">
            <Image
              src="/images/world-map.jpg"
              alt=""
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#000]/30 to-transparent flex items-center">
              <div className="p-8">
                <h3 className="text-3xl font-bold text-white mb-4">
                  Malaysia & Pakistan
                </h3>
                <p className="text-white/90 max-w-md mb-6">
                  With headquarters in Malaysia and a strong talent network in
                  Pakistan, we connect businesses with exceptional IT
                  professionals.
                </p>
                <Link href="/contact">
                  <Button className="bg-white text-[#333] hover:bg-white/90">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-bold">Malaysia Headquarters</h4>
              <p className="text-sm text-[#555]">
                No. B-09-21, Boulevard 51, Jalan SS9A/18, Seksyen 51A, 47300
                Petaling Jaya, Selangor, Malaysia
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-bold">Pakistan Talent Network</h4>
              <p className="text-sm text-[#555]">
                Connecting with top IT professionals across Pakistan
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* For Employers Section */}
      <section className="py-16 bg-[#f7f3e9]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h3 className="text-2xl font-bold mb-6">For Employers</h3>
            <p className="text-[#555] mb-6">
              Access our global network of vetted IT professionals to build your
              remote team quickly and efficiently.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <span className="text-[#4d80e4] mr-2">✓</span>
                <span>Pre-screened candidates with verified skills</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#4d80e4] mr-2">✓</span>
                <span>
                  Flexible hiring models: full-time, part-time, project-based
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-[#4d80e4] mr-2">✓</span>
                <span>Compliance and payroll management for global teams</span>
              </li>
            </ul>
            <Link href="/contact">
              <Button className="bg-[#4d80e4] text-white hover:bg-[#3a6ad4]">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#333] text-[#f7f3e9]">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <h2 className="text-3xl font-archivo font-bold mb-6">
            Ready to build your global IT team?
          </h2>
          <p className="text-lg max-w-2xl mx-auto mb-8 text-[#f7f3e9]/80">
            Let's discuss how our IT manpower expertise can help your business
            innovate and grow with global talent.
          </p>
          <Link href="/contact">
            <Button className="bg-[#f7f3e9] text-[#333] hover:bg-[#f7f3e9]/90 px-8 py-6">
              Get in Touch
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
