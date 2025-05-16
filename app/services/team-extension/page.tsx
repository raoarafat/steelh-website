import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

export default function TeamExtensionPage() {
  return (
    <main className="flex flex-col min-h-screen bg-[#f5f2e9] text-black pt-16">
      {/* Hero Section */}
      <section className="min-h-[70vh] pt-32 flex items-center border-b border-black/10">
        <div className="max-w-[1200px] mx-auto px-6 w-full">
          <h1 className="text-6xl md:text-8xl font-bold mb-6">Team Extension</h1>
          <p className="text-xl md:text-2xl max-w-2xl text-black/70">
            Seamlessly expand your development capacity with our team extension services
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-32 bg-[#f5f2e9] border-b border-black/10">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl font-bold mb-6">Scale Your Team On Demand</h2>
              <p className="text-xl mb-8 text-black/70">
                Our team extension service allows you to quickly add skilled IT professionals to your existing team,
                helping you scale development capacity, add specialized expertise, or accelerate project timelines
                without the overhead of traditional hiring.
              </p>

              <div className="bg-white p-8 mb-8 border border-black/10">
                <h3 className="text-2xl font-bold mb-4">Key Benefits</h3>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <Check className="text-black mr-2 mt-1 flex-shrink-0" size={16} />
                    <span className="text-black/70">Seamless integration with your existing team and workflows</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-black mr-2 mt-1 flex-shrink-0" size={16} />
                    <span className="text-black/70">Flexible scaling up or down based on project needs</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-black mr-2 mt-1 flex-shrink-0" size={16} />
                    <span className="text-black/70">Access to specialized skills not available in-house</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-black mr-2 mt-1 flex-shrink-0" size={16} />
                    <span className="text-black/70">Reduced recruitment and onboarding time</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-black mr-2 mt-1 flex-shrink-0" size={16} />
                    <span className="text-black/70">Cost-effective alternative to full-time hiring</span>
                  </li>
                </ul>

                <Link href="/contact">
                  <Button className="bg-black text-[#f5f2e9] hover:bg-black/80">Extend Your Team</Button>
                </Link>
              </div>
            </div>

            <div className="relative h-[600px]">
              <Image src="/images/team-extension.jpg" alt="Team Extension" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-32 bg-[#f5f2e9] border-b border-black/10">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-5xl font-bold mb-16 text-center">When To Use Team Extension</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 border border-black/10">
              <h3 className="text-2xl font-bold mb-4">Scaling Challenges</h3>
              <p className="text-black/70 mb-6">
                When you need to quickly scale your development capacity to meet project deadlines or handle increased
                workload.
              </p>
              <ul className="space-y-2 text-black/70">
                <li className="flex items-start">
                  <Check className="text-black mr-2 mt-1 flex-shrink-0" size={16} />
                  <span>Accelerated development timelines</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-black mr-2 mt-1 flex-shrink-0" size={16} />
                  <span>Multiple concurrent projects</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-black mr-2 mt-1 flex-shrink-0" size={16} />
                  <span>Seasonal development peaks</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 border border-black/10">
              <h3 className="text-2xl font-bold mb-4">Skill Gaps</h3>
              <p className="text-black/70 mb-6">
                When your team needs specialized expertise for specific project components or technologies.
              </p>
              <ul className="space-y-2 text-black/70">
                <li className="flex items-start">
                  <Check className="text-black mr-2 mt-1 flex-shrink-0" size={16} />
                  <span>Emerging technology implementation</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-black mr-2 mt-1 flex-shrink-0" size={16} />
                  <span>Legacy system integration</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-black mr-2 mt-1 flex-shrink-0" size={16} />
                  <span>Specialized development needs</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 border border-black/10">
              <h3 className="text-2xl font-bold mb-4">Cost Optimization</h3>
              <p className="text-black/70 mb-6">
                When you need to optimize development costs while maintaining quality and velocity.
              </p>
              <ul className="space-y-2 text-black/70">
                <li className="flex items-start">
                  <Check className="text-black mr-2 mt-1 flex-shrink-0" size={16} />
                  <span>Budget constraints</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-black mr-2 mt-1 flex-shrink-0" size={16} />
                  <span>Avoiding permanent overhead</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-black mr-2 mt-1 flex-shrink-0" size={16} />
                  <span>Resource optimization</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Process Section */}
      <section className="py-32 bg-[#f5f2e9] border-b border-black/10">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-5xl font-bold mb-16 text-center">Seamless Integration Process</h2>

          <div className="space-y-12">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-full md:w-1/3 bg-black text-[#f5f2e9] p-8 flex flex-col items-center text-center">
                <span className="text-4xl font-bold mb-4">01</span>
                <h3 className="text-2xl font-bold mb-2">Requirements Analysis</h3>
                <p className="text-[#f5f2e9]/80">
                  We work with you to understand your technical needs, team structure, and project requirements.
                </p>
              </div>
              <div className="w-full md:w-2/3">
                <p className="text-black/70">
                  Our process begins with a thorough assessment of your current team composition, technical stack,
                  development processes, and specific skill requirements. We identify the exact profiles needed to
                  complement your existing team and accelerate your development efforts.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-full md:w-1/3 bg-black text-[#f5f2e9] p-8 flex flex-col items-center text-center">
                <span className="text-4xl font-bold mb-4">02</span>
                <h3 className="text-2xl font-bold mb-2">Talent Matching</h3>
                <p className="text-[#f5f2e9]/80">
                  We select pre-vetted professionals with the specific skills and experience your project requires.
                </p>
              </div>
              <div className="w-full md:w-2/3">
                <p className="text-black/70">
                  Our talent acquisition team identifies candidates from our extensive pool of pre-vetted IT
                  professionals who match your technical requirements and can seamlessly integrate with your team
                  culture. We conduct technical assessments and interviews to ensure they have the right skills and
                  experience.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-full md:w-1/3 bg-black text-[#f5f2e9] p-8 flex flex-col items-center text-center">
                <span className="text-4xl font-bold mb-4">03</span>
                <h3 className="text-2xl font-bold mb-2">Onboarding & Integration</h3>
                <p className="text-[#f5f2e9]/80">
                  We facilitate a smooth onboarding process to integrate the extended team members with your workflows.
                </p>
              </div>
              <div className="w-full md:w-2/3">
                <p className="text-black/70">
                  We handle all administrative aspects of onboarding and work with you to integrate the extended team
                  members into your development environment, communication channels, and project management tools. We
                  ensure they understand your processes, coding standards, and project objectives.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-full md:w-1/3 bg-black text-[#f5f2e9] p-8 flex flex-col items-center text-center">
                <span className="text-4xl font-bold mb-4">04</span>
                <h3 className="text-2xl font-bold mb-2">Ongoing Support</h3>
                <p className="text-[#f5f2e9]/80">
                  We provide continuous support while you manage the day-to-day work and technical direction.
                </p>
              </div>
              <div className="w-full md:w-2/3">
                <p className="text-black/70">
                  Throughout the engagement, we handle all administrative aspects, provide infrastructure and technical
                  support, and ensure the extended team members remain productive and aligned with your goals. We
                  conduct regular performance reviews and address any concerns promptly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Available Roles Section */}
      <section className="py-32 bg-[#f5f2e9]">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-5xl font-bold mb-16 text-center">Available Team Extension Roles</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 border-b border-black pb-2">Development</h3>
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
                <li className="flex items-center">
                  <Check className="text-black mr-2 flex-shrink-0" size={16} />
                  <span>Blockchain Developers</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6 border-b border-black pb-2">Design & QA</h3>
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
                  <span>QA Engineers</span>
                </li>
                <li className="flex items-center">
                  <Check className="text-black mr-2 flex-shrink-0" size={16} />
                  <span>QA Automation Engineers</span>
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

            <div>
              <h3 className="text-2xl font-bold mb-6 border-b border-black pb-2">Specialized & Management</h3>
              <ul className="space-y-3 text-black/70">
                <li className="flex items-center">
                  <Check className="text-black mr-2 flex-shrink-0" size={16} />
                  <span>Data Engineers</span>
                </li>
                <li className="flex items-center">
                  <Check className="text-black mr-2 flex-shrink-0" size={16} />
                  <span>Machine Learning Engineers</span>
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
                <li className="flex items-center">
                  <Check className="text-black mr-2 flex-shrink-0" size={16} />
                  <span>Technical Writers</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-black text-[#f5f2e9]">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold mb-6">Need to extend your team?</h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto">
            Let's discuss how our team extension services can help you scale your development capacity and accelerate
            your projects.
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
