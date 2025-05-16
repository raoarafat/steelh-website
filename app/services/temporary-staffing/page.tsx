import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

export default function TemporaryStaffingPage() {
  return (
    <main className="flex flex-col min-h-screen bg-[#f5f2e9] text-black pt-16">
      {/* Hero Section */}
      <section className="min-h-[70vh] pt-32 flex items-center border-b border-black/10">
        <div className="max-w-[1200px] mx-auto px-6 w-full">
          <h1 className="text-6xl md:text-8xl font-bold mb-6">Temporary Staffing</h1>
          <p className="text-xl md:text-2xl max-w-2xl text-black/70">
            Flexible IT talent solutions for short-term projects and immediate needs
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-32 bg-[#f5f2e9] border-b border-black/10">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl font-bold mb-6">Agile Workforce Solutions</h2>
              <p className="text-xl mb-8 text-black/70">
                Our temporary staffing services provide skilled IT professionals for short-term projects, seasonal
                peaks, or to fill in during employee absences. Get the expertise you need, exactly when you need it,
                without the long-term commitment.
              </p>

              <div className="bg-white p-8 mb-8 border border-black/10">
                <h3 className="text-2xl font-bold mb-4">Key Benefits</h3>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <Check className="text-black mr-2 mt-1 flex-shrink-0" size={16} />
                    <span className="text-black/70">Immediate access to qualified professionals</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-black mr-2 mt-1 flex-shrink-0" size={16} />
                    <span className="text-black/70">Flexible engagement periods (weeks to months)</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-black mr-2 mt-1 flex-shrink-0" size={16} />
                    <span className="text-black/70">No long-term commitments or overhead</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-black mr-2 mt-1 flex-shrink-0" size={16} />
                    <span className="text-black/70">Pre-vetted talent ready to contribute</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-black mr-2 mt-1 flex-shrink-0" size={16} />
                    <span className="text-black/70">Simplified billing and administration</span>
                  </li>
                </ul>

                <Link href="/contact">
                  <Button className="bg-black text-[#f5f2e9] hover:bg-black/80">Request Temporary Staff</Button>
                </Link>
              </div>
            </div>

            <div className="relative h-[600px]">
              <Image src="/images/temporary-staffing.jpg" alt="Temporary Staffing" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-32 bg-[#f5f2e9] border-b border-black/10">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-5xl font-bold mb-16 text-center">When To Use Temporary Staffing</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 border border-black/10">
              <h3 className="text-2xl font-bold mb-4">Project Surges</h3>
              <p className="text-black/70 mb-6">
                Quickly scale your team for time-sensitive projects or development sprints without the long-term
                commitment.
              </p>
              <ul className="space-y-2 text-black/70">
                <li className="flex items-start">
                  <Check className="text-black mr-2 mt-1 flex-shrink-0" size={16} />
                  <span>Product launches</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-black mr-2 mt-1 flex-shrink-0" size={16} />
                  <span>System migrations</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-black mr-2 mt-1 flex-shrink-0" size={16} />
                  <span>Development sprints</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 border border-black/10">
              <h3 className="text-2xl font-bold mb-4">Staff Augmentation</h3>
              <p className="text-black/70 mb-6">
                Fill temporary gaps in your team due to leaves, transitions, or while searching for permanent hires.
              </p>
              <ul className="space-y-2 text-black/70">
                <li className="flex items-start">
                  <Check className="text-black mr-2 mt-1 flex-shrink-0" size={16} />
                  <span>Parental leaves</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-black mr-2 mt-1 flex-shrink-0" size={16} />
                  <span>Interim positions</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-black mr-2 mt-1 flex-shrink-0" size={16} />
                  <span>Seasonal support</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 border border-black/10">
              <h3 className="text-2xl font-bold mb-4">Specialized Skills</h3>
              <p className="text-black/70 mb-6">
                Access niche technical expertise for specific initiatives without having to hire full-time specialists.
              </p>
              <ul className="space-y-2 text-black/70">
                <li className="flex items-start">
                  <Check className="text-black mr-2 mt-1 flex-shrink-0" size={16} />
                  <span>Security audits</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-black mr-2 mt-1 flex-shrink-0" size={16} />
                  <span>Performance optimization</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-black mr-2 mt-1 flex-shrink-0" size={16} />
                  <span>Legacy system maintenance</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-32 bg-[#f5f2e9]">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-5xl font-bold mb-16 text-center">Our Staffing Process</h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-black text-[#f5f2e9] rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                1
              </div>
              <h3 className="text-2xl font-bold mb-4">Requirements Analysis</h3>
              <p className="text-black/70">
                We work with you to understand your specific needs, technical requirements, and team dynamics.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-black text-[#f5f2e9] rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                2
              </div>
              <h3 className="text-2xl font-bold mb-4">Talent Matching</h3>
              <p className="text-black/70">
                Our recruiters identify pre-vetted candidates from our extensive talent pool who match your
                requirements.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-black text-[#f5f2e9] rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                3
              </div>
              <h3 className="text-2xl font-bold mb-4">Client Approval</h3>
              <p className="text-black/70">
                You interview and select the candidates that best fit your team and project needs.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-black text-[#f5f2e9] rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                4
              </div>
              <h3 className="text-2xl font-bold mb-4">Onboarding & Support</h3>
              <p className="text-black/70">
                We handle all administrative aspects and provide ongoing support throughout the engagement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-black text-[#f5f2e9]">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold mb-6">Need temporary IT staff?</h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto">
            Let's discuss your temporary staffing needs and find the right IT professionals for your project.
          </p>
          <Link href="/contact">
            <Button className="bg-[#f5f2e9] text-black hover:bg-[#f5f2e9]/90 rounded-none px-8 py-3">
              Get Started
            </Button>
          </Link>
        </div>
      </section>
    </main>
  )
}
