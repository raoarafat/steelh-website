import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check, Users, Clock, Globe } from "lucide-react"

export default function RemoteWorkManagementPage() {
  return (
    <main className="flex flex-col min-h-screen bg-[#f5f2e9] text-black pt-32">
      {/* Hero Section */}
      <section className="py-16 border-b border-black/10">
        <div className="max-w-[1200px] mx-auto px-6 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6">Remote Work Management</h1>
              <p className="text-xl mb-8 text-black/70">
                Comprehensive solutions to help you build, manage, and optimize distributed teams across time zones and
                borders.
              </p>
              <Link href="/contact">
                <Button className="bg-black text-[#f5f2e9] hover:bg-black/80">Get Started</Button>
              </Link>
            </div>
            <div className="relative h-[400px]">
              <Image src="/placeholder.svg?key=zfzrx" alt="Remote Work Management" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Key Challenges Section */}
      <section className="py-20 bg-[#f5f2e9]">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center">Remote Work Challenges</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 border border-black/10">
              <Clock className="text-black mb-4" size={32} />
              <h3 className="text-2xl font-bold mb-4">Time Zone Coordination</h3>
              <p className="text-black/70">
                Managing teams across multiple time zones creates challenges for meetings, collaboration, and project
                timelines.
              </p>
            </div>

            <div className="bg-white p-8 border border-black/10">
              <Users className="text-black mb-4" size={32} />
              <h3 className="text-2xl font-bold mb-4">Team Cohesion</h3>
              <p className="text-black/70">
                Building strong team culture and maintaining engagement can be difficult when team members are
                geographically dispersed.
              </p>
            </div>

            <div className="bg-white p-8 border border-black/10">
              <Globe className="text-black mb-4" size={32} />
              <h3 className="text-2xl font-bold mb-4">Operational Complexity</h3>
              <p className="text-black/70">
                Managing equipment, security, productivity tracking, and communication across borders adds operational
                overhead.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Solutions Section */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center">Our Remote Work Solutions</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="bg-[#f5f2e9] p-8">
              <h3 className="text-2xl font-bold mb-6">Remote Team Setup</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Check className="text-black mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-bold mb-1">Onboarding Systems</h4>
                    <p className="text-black/70">
                      Structured remote onboarding processes to get new team members productive quickly.
                    </p>
                  </div>
                </li>

                <li className="flex items-start">
                  <Check className="text-black mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-bold mb-1">Equipment Management</h4>
                    <p className="text-black/70">
                      Coordination of hardware, software, and home office setup for distributed teams.
                    </p>
                  </div>
                </li>

                <li className="flex items-start">
                  <Check className="text-black mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-bold mb-1">Security Protocols</h4>
                    <p className="text-black/70">
                      Implementation of robust security measures for remote work environments.
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-[#f5f2e9] p-8">
              <h3 className="text-2xl font-bold mb-6">Remote Team Management</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Check className="text-black mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-bold mb-1">Productivity Frameworks</h4>
                    <p className="text-black/70">
                      Systems for tracking progress, managing deliverables, and ensuring accountability.
                    </p>
                  </div>
                </li>

                <li className="flex items-start">
                  <Check className="text-black mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-bold mb-1">Communication Protocols</h4>
                    <p className="text-black/70">
                      Structured communication systems to overcome time zone and cultural differences.
                    </p>
                  </div>
                </li>

                <li className="flex items-start">
                  <Check className="text-black mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-bold mb-1">Team Building</h4>
                    <p className="text-black/70">
                      Virtual team building activities and strategies to foster connection and engagement.
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-[#f5f2e9] p-8">
              <h3 className="text-2xl font-bold mb-6">Remote Work Tools</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Check className="text-black mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-bold mb-1">Collaboration Platforms</h4>
                    <p className="text-black/70">
                      Implementation of tools for seamless collaboration across time zones.
                    </p>
                  </div>
                </li>

                <li className="flex items-start">
                  <Check className="text-black mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-bold mb-1">Project Management</h4>
                    <p className="text-black/70">
                      Systems for tracking progress, managing deliverables, and ensuring accountability.
                    </p>
                  </div>
                </li>

                <li className="flex items-start">
                  <Check className="text-black mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-bold mb-1">Documentation</h4>
                    <p className="text-black/70">
                      Knowledge management systems to ensure information is accessible to all team members.
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-[#f5f2e9] p-8">
              <h3 className="text-2xl font-bold mb-6">Remote Work Training</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Check className="text-black mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-bold mb-1">Manager Training</h4>
                    <p className="text-black/70">Training for leaders on effective remote team management practices.</p>
                  </div>
                </li>

                <li className="flex items-start">
                  <Check className="text-black mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-bold mb-1">Remote Work Skills</h4>
                    <p className="text-black/70">
                      Training for team members on productivity, communication, and collaboration in remote settings.
                    </p>
                  </div>
                </li>

                <li className="flex items-start">
                  <Check className="text-black mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-bold mb-1">Cultural Awareness</h4>
                    <p className="text-black/70">
                      Training on cross-cultural communication and collaboration for global teams.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-20 bg-[#f5f2e9]">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center">Success Story</h2>

          <div className="bg-white p-8 border border-black/10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              <div className="col-span-2">
                <h3 className="text-2xl font-bold mb-4">FinTech Startup Scales with Global Remote Team</h3>
                <p className="text-black/70 mb-4">
                  A growing FinTech company needed to scale their engineering team quickly but faced local talent
                  shortages. We helped them build and manage a distributed team across three continents.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-black rounded-full mr-3"></span>
                    <span className="text-black/70">
                      Implemented asynchronous work processes to handle 16-hour time zone spread
                    </span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-black rounded-full mr-3"></span>
                    <span className="text-black/70">
                      Created documentation-first culture to reduce meeting dependency
                    </span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-black rounded-full mr-3"></span>
                    <span className="text-black/70">
                      Established virtual team rituals to build culture across borders
                    </span>
                  </li>
                </ul>
                <p className="font-bold">
                  Result: 40% faster product development with 30% cost savings compared to local hiring.
                </p>
              </div>
              <div className="relative h-[200px]">
                <Image
                  src="/placeholder.svg?height=400&width=400&query=global remote team collaboration"
                  alt="Remote Team Success"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to optimize your remote work strategy?</h2>
          <p className="text-xl max-w-2xl mx-auto mb-12 text-white/70">
            Let us help you build and manage high-performing distributed teams that drive your business forward.
          </p>
          <Link href="/contact">
            <Button className="bg-[#f5f2e9] text-black hover:bg-[#f5f2e9]/90 px-8 py-3">Schedule a Consultation</Button>
          </Link>
        </div>
      </section>
    </main>
  )
}
