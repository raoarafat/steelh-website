import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

export default function DedicatedDevelopmentTeamsPage() {
  return (
    <main className="flex flex-col min-h-screen bg-[#f5f2e9] text-black pt-16">
      {/* Hero Section */}
      <section className="min-h-[70vh] pt-32 flex items-center border-b border-black/10">
        <div className="max-w-[1200px] mx-auto px-6 w-full">
          <h1 className="text-6xl md:text-8xl font-bold mb-6">Dedicated Development Teams</h1>
          <p className="text-xl md:text-2xl max-w-2xl text-black/70">
            Build your offshore development center with fully dedicated IT professionals
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-32 bg-[#f5f2e9] border-b border-black/10">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1 relative h-[600px]">
              <Image
                src="/images/dedicated-teams.jpg"
                alt="Dedicated Development Teams"
                fill
                className="object-cover"
              />
            </div>

            <div className="order-1 md:order-2">
              <h2 className="text-5xl font-bold mb-6">Your Extended Engineering Team</h2>
              <p className="text-xl mb-8 text-black/70">
                Our dedicated development teams function as an extension of your in-house team, working exclusively on
                your projects with full-time dedication. This model provides the stability and commitment of permanent
                employees with the flexibility and cost advantages of an offshore team.
              </p>

              <div className="bg-white p-8 mb-8 border border-black/10">
                <h3 className="text-2xl font-bold mb-4">Key Benefits</h3>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <Check className="text-black mr-2 mt-1 flex-shrink-0" size={16} />
                    <span className="text-black/70">Full-time dedicated resources working exclusively for you</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-black mr-2 mt-1 flex-shrink-0" size={16} />
                    <span className="text-black/70">Complete team composition (developers, QA, designers, PM)</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-black mr-2 mt-1 flex-shrink-0" size={16} />
                    <span className="text-black/70">Direct communication and management control</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-black mr-2 mt-1 flex-shrink-0" size={16} />
                    <span className="text-black/70">Significant cost savings compared to local hiring</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-black mr-2 mt-1 flex-shrink-0" size={16} />
                    <span className="text-black/70">Scalable team size as your needs evolve</span>
                  </li>
                </ul>

                <Link href="/contact">
                  <Button className="bg-black text-[#f5f2e9] hover:bg-black/80">Build Your Team</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-32 bg-[#f5f2e9] border-b border-black/10">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-5xl font-bold mb-16 text-center">How It Works</h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-white p-8 border border-black/10 relative">
              <div className="absolute -top-5 -left-5 w-10 h-10 bg-black text-[#f5f2e9] rounded-full flex items-center justify-center text-xl font-bold">
                1
              </div>
              <h3 className="text-2xl font-bold mb-4 mt-2">Team Design</h3>
              <p className="text-black/70">
                We work with you to understand your technical requirements, project scope, and team structure needs.
              </p>
            </div>

            <div className="bg-white p-8 border border-black/10 relative">
              <div className="absolute -top-5 -left-5 w-10 h-10 bg-black text-[#f5f2e9] rounded-full flex items-center justify-center text-xl font-bold">
                2
              </div>
              <h3 className="text-2xl font-bold mb-4 mt-2">Talent Selection</h3>
              <p className="text-black/70">
                We recruit and vet professionals with the specific skills and experience your project requires.
              </p>
            </div>

            <div className="bg-white p-8 border border-black/10 relative">
              <div className="absolute -top-5 -left-5 w-10 h-10 bg-black text-[#f5f2e9] rounded-full flex items-center justify-center text-xl font-bold">
                3
              </div>
              <h3 className="text-2xl font-bold mb-4 mt-2">Team Integration</h3>
              <p className="text-black/70">
                We integrate the team with your processes, tools, and existing team members.
              </p>
            </div>

            <div className="bg-white p-8 border border-black/10 relative">
              <div className="absolute -top-5 -left-5 w-10 h-10 bg-black text-[#f5f2e9] rounded-full flex items-center justify-center text-xl font-bold">
                4
              </div>
              <h3 className="text-2xl font-bold mb-4 mt-2">Ongoing Support</h3>
              <p className="text-black/70">
                We provide administrative support, infrastructure, and retention strategies while you manage the
                day-to-day work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Composition Section */}
      <section className="py-32 bg-[#f5f2e9] border-b border-black/10">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-5xl font-bold mb-16 text-center">Flexible Team Composition</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 border border-black/10">
              <h3 className="text-2xl font-bold mb-4">Development Team</h3>
              <ul className="space-y-3 text-black/70">
                <li className="flex items-center">
                  <Check className="text-black mr-2 flex-shrink-0" size={16} />
                  <span>Front-End Developers</span>
                </li>
                <li className="flex items-center">
                  <Check className="text-black mr-2 flex-shrink-0" size={16} />
                  <span>Back-End Developers</span>
                </li>
                <li className="flex items-center">
                  <Check className="text-black mr-2 flex-shrink-0" size={16} />
                  <span>Full Stack Developers</span>
                </li>
                <li className="flex items-center">
                  <Check className="text-black mr-2 flex-shrink-0" size={16} />
                  <span>Mobile Developers</span>
                </li>
                <li className="flex items-center">
                  <Check className="text-black mr-2 flex-shrink-0" size={16} />
                  <span>DevOps Engineers</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 border border-black/10">
              <h3 className="text-2xl font-bold mb-4">Quality Assurance</h3>
              <ul className="space-y-3 text-black/70">
                <li className="flex items-center">
                  <Check className="text-black mr-2 flex-shrink-0" size={16} />
                  <span>QA Engineers</span>
                </li>
                <li className="flex items-center">
                  <Check className="text-black mr-2 flex-shrink-0" size={16} />
                  <span>QA Automation Engineers</span>
                </li>
                <li className="flex items-center">
                  <Check className="text-black mr-2 flex-shrink-0" size={16} />
                  <span>Test Analysts</span>
                </li>
                <li className="flex items-center">
                  <Check className="text-black mr-2 flex-shrink-0" size={16} />
                  <span>Performance Testers</span>
                </li>
                <li className="flex items-center">
                  <Check className="text-black mr-2 flex-shrink-0" size={16} />
                  <span>Security Testers</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 border border-black/10">
              <h3 className="text-2xl font-bold mb-4">Design & Management</h3>
              <ul className="space-y-3 text-black/70">
                <li className="flex items-center">
                  <Check className="text-black mr-2 flex-shrink-0" size={16} />
                  <span>UI/UX Designers</span>
                </li>
                <li className="flex items-center">
                  <Check className="text-black mr-2 flex-shrink-0" size={16} />
                  <span>Product Designers</span>
                </li>
                <li className="flex items-center">
                  <Check className="text-black mr-2 flex-shrink-0" size={16} />
                  <span>Project Managers</span>
                </li>
                <li className="flex items-center">
                  <Check className="text-black mr-2 flex-shrink-0" size={16} />
                  <span>Scrum Masters</span>
                </li>
                <li className="flex items-center">
                  <Check className="text-black mr-2 flex-shrink-0" size={16} />
                  <span>Business Analysts</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Engagement Models Section */}
      <section className="py-32 bg-[#f5f2e9]">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-5xl font-bold mb-16 text-center">Engagement Models</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="bg-white p-12 border border-black/10">
              <h3 className="text-3xl font-bold mb-6">Managed Team</h3>
              <p className="text-black/70 mb-8">
                We provide a complete team with a dedicated project manager who oversees the day-to-day operations,
                reporting, and delivery.
              </p>
              <h4 className="text-xl font-bold mb-4">Ideal for:</h4>
              <ul className="space-y-3 text-black/70 mb-8">
                <li className="flex items-start">
                  <Check className="text-black mr-2 mt-1 flex-shrink-0" size={16} />
                  <span>Companies without technical management capacity</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-black mr-2 mt-1 flex-shrink-0" size={16} />
                  <span>Projects with well-defined requirements</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-black mr-2 mt-1 flex-shrink-0" size={16} />
                  <span>Organizations seeking a turnkey solution</span>
                </li>
              </ul>
              <Link href="/contact">
                <Button className="bg-black text-[#f5f2e9] hover:bg-black/80 w-full">Learn More</Button>
              </Link>
            </div>

            <div className="bg-white p-12 border border-black/10">
              <h3 className="text-3xl font-bold mb-6">Self-Managed Team</h3>
              <p className="text-black/70 mb-8">
                You directly manage the team while we handle recruitment, infrastructure, HR, and administrative
                support.
              </p>
              <h4 className="text-xl font-bold mb-4">Ideal for:</h4>
              <ul className="space-y-3 text-black/70 mb-8">
                <li className="flex items-start">
                  <Check className="text-black mr-2 mt-1 flex-shrink-0" size={16} />
                  <span>Companies with strong technical leadership</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-black mr-2 mt-1 flex-shrink-0" size={16} />
                  <span>Projects requiring tight integration with in-house teams</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-black mr-2 mt-1 flex-shrink-0" size={16} />
                  <span>Organizations seeking maximum control and flexibility</span>
                </li>
              </ul>
              <Link href="/contact">
                <Button className="bg-black text-[#f5f2e9] hover:bg-black/80 w-full">Learn More</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-black text-[#f5f2e9]">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold mb-6">Ready to build your dedicated team?</h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto">
            Let's discuss your project requirements and design the perfect dedicated development team for your needs.
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
