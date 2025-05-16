import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

export default function ProjectBasedTeamsPage() {
  return (
    <main className="flex flex-col min-h-screen bg-[#f5f2e9] text-black pt-32">
      {/* Hero Section */}
      <section className="py-16 border-b border-black/10">
        <div className="max-w-[1200px] mx-auto px-6 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6">Project-Based Teams</h1>
              <p className="text-xl mb-8 text-black/70">
                Assemble specialized teams dedicated to completing specific projects with defined timelines and
                deliverables.
              </p>
              <Link href="/contact">
                <Button className="bg-black text-[#f5f2e9] hover:bg-black/80">Request a Consultation</Button>
              </Link>
            </div>
            <div className="relative h-[400px]">
              <Image src="/placeholder.svg?key=30yz3" alt="Project-Based Teams" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-[#f5f2e9]">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center">Benefits of Project-Based Teams</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 border border-black/10">
              <h3 className="text-2xl font-bold mb-4">Focused Expertise</h3>
              <p className="text-black/70 mb-6">
                Teams assembled specifically for your project requirements, with the exact skill sets needed for
                success.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="text-black mr-2 mt-1 flex-shrink-0" size={16} />
                  <span className="text-black/70">Specialized skill matching</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-black mr-2 mt-1 flex-shrink-0" size={16} />
                  <span className="text-black/70">Industry-specific experience</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-black mr-2 mt-1 flex-shrink-0" size={16} />
                  <span className="text-black/70">Technical depth</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 border border-black/10">
              <h3 className="text-2xl font-bold mb-4">Cost Efficiency</h3>
              <p className="text-black/70 mb-6">
                Pay only for the duration of your project, without the overhead of permanent hires.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="text-black mr-2 mt-1 flex-shrink-0" size={16} />
                  <span className="text-black/70">Predictable project budgeting</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-black mr-2 mt-1 flex-shrink-0" size={16} />
                  <span className="text-black/70">No long-term commitments</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-black mr-2 mt-1 flex-shrink-0" size={16} />
                  <span className="text-black/70">Reduced recruitment costs</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 border border-black/10">
              <h3 className="text-2xl font-bold mb-4">Faster Delivery</h3>
              <p className="text-black/70 mb-6">
                Accelerate project timelines with teams that can hit the ground running.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="text-black mr-2 mt-1 flex-shrink-0" size={16} />
                  <span className="text-black/70">Rapid team formation</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-black mr-2 mt-1 flex-shrink-0" size={16} />
                  <span className="text-black/70">Pre-established workflows</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-black mr-2 mt-1 flex-shrink-0" size={16} />
                  <span className="text-black/70">Dedicated project focus</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center">How It Works</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <ol className="space-y-8">
                <li className="flex">
                  <span className="bg-black text-white w-8 h-8 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    1
                  </span>
                  <div>
                    <h4 className="font-bold text-xl mb-2">Project Assessment</h4>
                    <p className="text-black/70">
                      We analyze your project requirements, scope, timeline, and technical needs to understand exactly
                      what skills are required.
                    </p>
                  </div>
                </li>

                <li className="flex">
                  <span className="bg-black text-white w-8 h-8 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    2
                  </span>
                  <div>
                    <h4 className="font-bold text-xl mb-2">Team Assembly</h4>
                    <p className="text-black/70">
                      We curate a team of specialists with the exact skills and experience needed for your specific
                      project.
                    </p>
                  </div>
                </li>

                <li className="flex">
                  <span className="bg-black text-white w-8 h-8 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    3
                  </span>
                  <div>
                    <h4 className="font-bold text-xl mb-2">Project Execution</h4>
                    <p className="text-black/70">
                      Your dedicated team works exclusively on your project, with regular updates and transparent
                      communication.
                    </p>
                  </div>
                </li>

                <li className="flex">
                  <span className="bg-black text-white w-8 h-8 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    4
                  </span>
                  <div>
                    <h4 className="font-bold text-xl mb-2">Project Completion & Handover</h4>
                    <p className="text-black/70">
                      Upon completion, we ensure proper documentation, knowledge transfer, and a smooth handover
                      process.
                    </p>
                  </div>
                </li>
              </ol>
            </div>

            <div className="order-1 md:order-2 relative h-[500px]">
              <Image src="/placeholder.svg?key=cpvqg" alt="Project workflow" fill className="object-contain" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to launch your project?</h2>
          <p className="text-xl max-w-2xl mx-auto mb-12 text-white/70">
            Let's discuss how our project-based teams can help you deliver your next initiative on time and on budget.
          </p>
          <Link href="/contact">
            <Button className="bg-[#f5f2e9] text-black hover:bg-[#f5f2e9]/90 px-8 py-3">Get Started</Button>
          </Link>
        </div>
      </section>
    </main>
  )
}
