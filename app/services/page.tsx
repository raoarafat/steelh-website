import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

export default function ServicesPage() {
  return (
    <main className="flex flex-col min-h-screen bg-[#f7f3e9] text-black pt-16">
      {/* Hero Section */}
      <section className="min-h-[70vh] pt-32 flex items-center border-b border-black/10">
        <div className="max-w-[1200px] mx-auto px-6 w-full">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl md:text-2xl max-w-2xl text-black/70">
            Comprehensive IT manpower solutions to power your digital innovation
          </p>
        </div>
      </section>

      {/* Service Categories Section */}
      <section className="py-20 bg-[#f5f2e9] border-b border-black/10">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Service Categories</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* IT Staffing */}
            <div className="bg-white p-8 border border-black/10 hover:border-black transition-colors">
              <h3 className="text-2xl font-bold mb-6">IT Staffing</h3>
              <ul className="space-y-4 mb-8">
                <li>
                  <Link
                    href="/services/temporary-staffing"
                    className="flex items-center text-black/70 hover:text-[#4d80e4]"
                  >
                    <Check className="text-black mr-2 flex-shrink-0" size={16} />
                    Temporary Staffing
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/contract-to-hire"
                    className="flex items-center text-black/70 hover:text-[#4d80e4]"
                  >
                    <Check className="text-black mr-2 flex-shrink-0" size={16} />
                    Contract-to-Hire
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/direct-placement"
                    className="flex items-center text-black/70 hover:text-[#4d80e4]"
                  >
                    <Check className="text-black mr-2 flex-shrink-0" size={16} />
                    Direct Placement
                  </Link>
                </li>
              </ul>
              <Link href="/services#staff-augmentation">
                <Button className="w-full bg-[#333] text-[#f7f3e9] hover:bg-black/80">Learn More</Button>
              </Link>
            </div>

            {/* Remote Teams */}
            <div className="bg-white p-8 border border-black/10 hover:border-black transition-colors">
              <h3 className="text-2xl font-bold mb-6">Remote Teams</h3>
              <ul className="space-y-4 mb-8">
                <li>
                  <Link
                    href="/services/dedicated-development-teams"
                    className="flex items-center text-black/70 hover:text-[#4d80e4]"
                  >
                    <Check className="text-black mr-2 flex-shrink-0" size={16} />
                    Dedicated Development Teams
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/team-extension"
                    className="flex items-center text-black/70 hover:text-[#4d80e4]"
                  >
                    <Check className="text-black mr-2 flex-shrink-0" size={16} />
                    Team Extension
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/project-based-teams"
                    className="flex items-center text-black/70 hover:text-[#4d80e4]"
                  >
                    <Check className="text-black mr-2 flex-shrink-0" size={16} />
                    Project-Based Teams
                  </Link>
                </li>
              </ul>
              <Link href="/services#dedicated-teams">
                <Button className="w-full bg-[#333] text-[#f7f3e9] hover:bg-black/80">Learn More</Button>
              </Link>
            </div>

            {/* Digital Nomad Solutions */}
            <div className="bg-white p-8 border border-black/10 hover:border-black transition-colors">
              <h3 className="text-2xl font-bold mb-6">Digital Nomad Solutions</h3>
              <ul className="space-y-4 mb-8">
                <li>
                  <Link
                    href="/services/global-compliance"
                    className="flex items-center text-black/70 hover:text-[#4d80e4]"
                  >
                    <Check className="text-black mr-2 flex-shrink-0" size={16} />
                    Global Compliance
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/remote-work-management"
                    className="flex items-center text-black/70 hover:text-[#4d80e4]"
                  >
                    <Check className="text-black mr-2 flex-shrink-0" size={16} />
                    Remote Work Management
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/global-payroll"
                    className="flex items-center text-black/70 hover:text-[#4d80e4]"
                  >
                    <Check className="text-black mr-2 flex-shrink-0" size={16} />
                    Global Payroll
                  </Link>
                </li>
              </ul>
              <Link href="/services#service-options">
                <Button className="w-full bg-[#333] text-[#f7f3e9] hover:bg-black/80">Learn More</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Staff Augmentation Section */}
      <section id="staff-augmentation" className="py-32 bg-[#f5f2e9] border-b border-black/10">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Staff Augmentation</h2>
              <p className="text-xl mb-8 text-black/70">
                Enhance your existing team with skilled IT professionals for short to long-term projects without the
                overhead of permanent hiring.
              </p>

              <div className="bg-white p-8 mb-8 border border-black/10">
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <Check className="text-black mr-2 mt-1 flex-shrink-0" size={16} />
                    <span className="text-black/70">Flexible engagement models (hourly, part-time, full-time)</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-black mr-2 mt-1 flex-shrink-0" size={16} />
                    <span className="text-black/70">Pre-vetted IT professionals</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-black mr-2 mt-1 flex-shrink-0" size={16} />
                    <span className="text-black/70">No recruitment or onboarding hassles</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-black mr-2 mt-1 flex-shrink-0" size={16} />
                    <span className="text-black/70">Dedicated account manager</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-black mr-2 mt-1 flex-shrink-0" size={16} />
                    <span className="text-black/70">Seamless integration with your team</span>
                  </li>
                </ul>

                <Link href="/contact">
                  <Button className="bg-black text-[#f5f2e9] hover:bg-black/80">Request a Quote</Button>
                </Link>
              </div>
            </div>

            <div className="relative h-[600px]">
              <Image src="/images/staff-augmentation.jpg" alt="Staff Augmentation" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Dedicated Teams Section */}
      <section id="dedicated-teams" className="py-32 bg-[#f5f2e9] border-b border-black/10">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="md:order-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Dedicated Teams</h2>
              <p className="text-xl mb-8 text-black/70">
                Build complete offshore development teams that work exclusively on your projects with full-time
                dedication.
              </p>

              <div className="bg-white p-8 mb-8 border border-black/10">
                <h3 className="text-2xl font-bold mb-4">Custom Team Solutions</h3>
                <p className="text-black/70 mb-6">Tailored to your specific project requirements</p>

                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <Check className="text-black mr-2 mt-1 flex-shrink-0" size={16} />
                    <span className="text-black/70">Full-time dedicated resources</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-black mr-2 mt-1 flex-shrink-0" size={16} />
                    <span className="text-black/70">Complete team composition (developers, QA, PM, etc.)</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-black mr-2 mt-1 flex-shrink-0" size={16} />
                    <span className="text-black/70">Direct communication channels</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-black mr-2 mt-1 flex-shrink-0" size={16} />
                    <span className="text-black/70">Transparent reporting and management</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-black mr-2 mt-1 flex-shrink-0" size={16} />
                    <span className="text-black/70">Scalable team size as needed</span>
                  </li>
                </ul>

                <Link href="/contact">
                  <Button className="bg-black text-[#f5f2e9] hover:bg-black/80">Discuss Your Needs</Button>
                </Link>
              </div>
            </div>

            <div className="md:order-1 relative h-[600px]">
              <Image src="/images/dedicated-teams.jpg" alt="Dedicated Teams" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Service Options Section */}
      <section id="service-options" className="py-32 bg-[#f5f2e9]">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Service Options</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Project-Based */}
            <div className="bg-[#f5f2e9] p-12 border border-black/20 hover:border-black transition-colors">
              <h3 className="text-2xl font-bold mb-2">Project-Based</h3>
              <p className="text-3xl font-bold mb-6">Solutions</p>
              <p className="text-black/70 mb-8">Complete end-to-end project delivery with expert teams</p>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <Check className="text-black mr-2 mt-1 flex-shrink-0" size={16} />
                  <span className="text-black/70">Fixed scope and timeline</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-black mr-2 mt-1 flex-shrink-0" size={16} />
                  <span className="text-black/70">Predictable pricing</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-black mr-2 mt-1 flex-shrink-0" size={16} />
                  <span className="text-black/70">Dedicated project manager</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-black mr-2 mt-1 flex-shrink-0" size={16} />
                  <span className="text-black/70">Regular progress updates</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-black mr-2 mt-1 flex-shrink-0" size={16} />
                  <span className="text-black/70">Quality assurance</span>
                </li>
              </ul>
            </div>

            {/* Specialized Talent */}
            <div className="bg-[#f5f2e9] p-12 border border-black relative">
              <div className="absolute top-0 right-0 bg-black text-[#f5f2e9] px-4 py-1 text-sm font-medium">
                POPULAR
              </div>
              <h3 className="text-2xl font-bold mb-2">Specialized</h3>
              <p className="text-3xl font-bold mb-6">Talent</p>
              <p className="text-black/70 mb-8">Access to professionals with niche skills in emerging technologies</p>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <Check className="text-black mr-2 mt-1 flex-shrink-0" size={16} />
                  <span className="text-black/70">AI & Machine Learning experts</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-black mr-2 mt-1 flex-shrink-0" size={16} />
                  <span className="text-black/70">Blockchain developers</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-black mr-2 mt-1 flex-shrink-0" size={16} />
                  <span className="text-black/70">Cybersecurity specialists</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-black mr-2 mt-1 flex-shrink-0" size={16} />
                  <span className="text-black/70">DevOps engineers</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-black mr-2 mt-1 flex-shrink-0" size={16} />
                  <span className="text-black/70">Cloud architects</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-black mr-2 mt-1 flex-shrink-0" size={16} />
                  <span className="text-black/70">Data scientists</span>
                </li>
              </ul>
            </div>

            {/* IT Consulting */}
            <div className="bg-[#f5f2e9] p-12 border border-black/20 hover:border-black transition-colors">
              <h3 className="text-2xl font-bold mb-2">IT</h3>
              <p className="text-3xl font-bold mb-6">Consulting</p>
              <p className="text-black/70 mb-8">Strategic guidance on technology adoption and workforce planning</p>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <Check className="text-black mr-2 mt-1 flex-shrink-0" size={16} />
                  <span className="text-black/70">Technology roadmap development</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-black mr-2 mt-1 flex-shrink-0" size={16} />
                  <span className="text-black/70">Digital transformation strategy</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-black mr-2 mt-1 flex-shrink-0" size={16} />
                  <span className="text-black/70">IT workforce planning</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-black mr-2 mt-1 flex-shrink-0" size={16} />
                  <span className="text-black/70">Technology stack assessment</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-black mr-2 mt-1 flex-shrink-0" size={16} />
                  <span className="text-black/70">Process optimization</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Global Talent Pool Section */}
      <section id="global-talent" className="py-32 bg-[#f5f2e9] border-t border-black/10">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Our Global Talent Pool</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <p className="text-xl mb-8 text-black/70">
                We connect you with exceptional IT professionals from around the world, with a focus on regions known
                for their technical expertise and competitive rates.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4">South Asia</h3>
                  <ul className="space-y-2 text-black/70">
                    <li>Pakistan</li>
                    <li>India</li>
                    <li>Bangladesh</li>
                    <li>Sri Lanka</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4">Southeast Asia</h3>
                  <ul className="space-y-2 text-black/70">
                    <li>Vietnam</li>
                    <li>Philippines</li>
                    <li>Malaysia</li>
                    <li>Indonesia</li>
                  </ul>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-8 mt-8">
                <div>
                  <h3 className="text-xl font-bold mb-4">Eastern Europe</h3>
                  <ul className="space-y-2 text-black/70">
                    <li>Ukraine</li>
                    <li>Poland</li>
                    <li>Romania</li>
                    <li>Bulgaria</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4">Africa</h3>
                  <ul className="space-y-2 text-black/70">
                    <li>Nigeria</li>
                    <li>Kenya</li>
                    <li>Egypt</li>
                    <li>South Africa</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="relative h-[500px]">
              <Image src="/images/world-map.jpg" alt="Global talent map" fill className="object-contain" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-[#333] text-[#f7f3e9]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-archivo font-bold mb-6">Ready to build your IT dream team?</h2>
              <p className="text-xl mb-12">
                Let's discuss how our IT manpower solutions can help you find the right talent for your technology
                needs.
              </p>
              <Link href="/contact">
                <Button className="bg-[#f7f3e9] text-[#333] hover:bg-[#f7f3e9]/90 rounded-none px-8 py-3">
                  Get in Touch
                </Button>
              </Link>
            </div>

            <div className="bg-[#f5f2e9]/10 p-8">
              <h3 className="text-2xl font-bold mb-4 text-[#f5f2e9]">Our Process</h3>
              <ol className="space-y-6">
                <li className="flex">
                  <span className="bg-[#f5f2e9] text-black w-8 h-8 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    1
                  </span>
                  <div>
                    <h4 className="font-bold mb-1">Needs Assessment</h4>
                    <p className="text-[#f5f2e9]/70">We understand your technical requirements and team dynamics</p>
                  </div>
                </li>
                <li className="flex">
                  <span className="bg-[#f5f2e9] text-black w-8 h-8 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    2
                  </span>
                  <div>
                    <h4 className="font-bold mb-1">Talent Sourcing</h4>
                    <p className="text-[#f5f2e9]/70">We identify qualified candidates from our extensive network</p>
                  </div>
                </li>
                <li className="flex">
                  <span className="bg-[#f5f2e9] text-black w-8 h-8 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    3
                  </span>
                  <div>
                    <h4 className="font-bold mb-1">Rigorous Screening</h4>
                    <p className="text-[#f5f2e9]/70">We evaluate technical skills, experience, and cultural fit</p>
                  </div>
                </li>
                <li className="flex">
                  <span className="bg-[#f5f2e9] text-black w-8 h-8 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    4
                  </span>
                  <div>
                    <h4 className="font-bold mb-1">Placement & Support</h4>
                    <p className="text-[#f5f2e9]/70">We facilitate onboarding and provide ongoing support</p>
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
