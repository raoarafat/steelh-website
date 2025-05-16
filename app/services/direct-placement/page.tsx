import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

export default function DirectPlacementPage() {
  return (
    <main className="flex flex-col min-h-screen bg-[#f5f2e9] text-black pt-16">
      {/* Hero Section */}
      <section className="min-h-[70vh] pt-32 flex items-center border-b border-black/10">
        <div className="max-w-[1200px] mx-auto px-6 w-full">
          <h1 className="text-6xl md:text-8xl font-bold mb-6">Direct Placement</h1>
          <p className="text-xl md:text-2xl max-w-2xl text-black/70">
            Find your next permanent IT team member with our specialized recruitment services
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-32 bg-[#f5f2e9] border-b border-black/10">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl font-bold mb-6">Permanent Talent Solutions</h2>
              <p className="text-xl mb-8 text-black/70">
                Our direct placement services help you find and hire full-time IT professionals who match your technical
                requirements, company culture, and long-term vision. We handle the entire recruitment process, allowing
                you to focus on your core business.
              </p>

              <div className="bg-white p-8 mb-8 border border-black/10">
                <h3 className="text-2xl font-bold mb-4">Key Benefits</h3>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <Check className="text-black mr-2 mt-1 flex-shrink-0" size={16} />
                    <span className="text-black/70">Access to passive candidates not actively job hunting</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-black mr-2 mt-1 flex-shrink-0" size={16} />
                    <span className="text-black/70">Thorough technical and cultural fit assessment</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-black mr-2 mt-1 flex-shrink-0" size={16} />
                    <span className="text-black/70">Reduced time-to-hire and recruitment costs</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-black mr-2 mt-1 flex-shrink-0" size={16} />
                    <span className="text-black/70">Industry-specific expertise and market insights</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-black mr-2 mt-1 flex-shrink-0" size={16} />
                    <span className="text-black/70">Replacement guarantee for all placements</span>
                  </li>
                </ul>

                <Link href="/contact">
                  <Button className="bg-black text-[#f5f2e9] hover:bg-black/80">Start Your Search</Button>
                </Link>
              </div>
            </div>

            <div className="relative h-[600px]">
              <Image src="/images/direct-placement.jpg" alt="Direct Placement" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-32 bg-[#f5f2e9] border-b border-black/10">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-5xl font-bold mb-16 text-center">Our Recruitment Process</h2>

          <div className="space-y-12">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-full md:w-1/3 bg-black text-[#f5f2e9] p-8 flex flex-col items-center text-center">
                <span className="text-4xl font-bold mb-4">01</span>
                <h3 className="text-2xl font-bold mb-2">Needs Analysis</h3>
                <p className="text-[#f5f2e9]/80">
                  We work closely with you to understand your technical requirements, team dynamics, company culture,
                  and growth objectives.
                </p>
              </div>
              <div className="w-full md:w-2/3">
                <p className="text-black/70">
                  Our process begins with a comprehensive consultation to understand not just the technical skills
                  required, but also the soft skills, cultural attributes, and long-term potential you're looking for in
                  a candidate. We analyze your team structure, work environment, and company values to ensure we find
                  candidates who will thrive in your organization.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-full md:w-1/3 bg-black text-[#f5f2e9] p-8 flex flex-col items-center text-center">
                <span className="text-4xl font-bold mb-4">02</span>
                <h3 className="text-2xl font-bold mb-2">Talent Sourcing</h3>
                <p className="text-[#f5f2e9]/80">
                  We leverage our extensive network, advanced sourcing techniques, and industry connections to identify
                  qualified candidates.
                </p>
              </div>
              <div className="w-full md:w-2/3">
                <p className="text-black/70">
                  Our specialized IT recruiters use a multi-channel approach to source candidates, including our
                  proprietary database, professional networks, referral programs, and targeted outreach to passive
                  candidates. We don't just post jobs and wait—we proactively identify and engage with top talent who
                  match your specific requirements.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-full md:w-1/3 bg-black text-[#f5f2e9] p-8 flex flex-col items-center text-center">
                <span className="text-4xl font-bold mb-4">03</span>
                <h3 className="text-2xl font-bold mb-2">Rigorous Screening</h3>
                <p className="text-[#f5f2e9]/80">
                  We conduct thorough technical assessments, behavioral interviews, and reference checks to ensure
                  quality.
                </p>
              </div>
              <div className="w-full md:w-2/3">
                <p className="text-black/70">
                  Our screening process includes technical skill verification, problem-solving assessments, and in-depth
                  interviews to evaluate both technical capabilities and soft skills. We verify credentials, check
                  references, and assess cultural fit to ensure we only present candidates who meet all your
                  requirements and have the potential to excel in your organization.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-full md:w-1/3 bg-black text-[#f5f2e9] p-8 flex flex-col items-center text-center">
                <span className="text-4xl font-bold mb-4">04</span>
                <h3 className="text-2xl font-bold mb-2">Candidate Presentation</h3>
                <p className="text-[#f5f2e9]/80">
                  We present a shortlist of qualified candidates with detailed profiles and our assessment notes.
                </p>
              </div>
              <div className="w-full md:w-2/3">
                <p className="text-black/70">
                  Rather than overwhelming you with resumes, we present a carefully selected shortlist of candidates who
                  best match your requirements. Each candidate profile includes our detailed assessment notes,
                  highlighting their technical strengths, relevant experience, cultural fit indicators, and potential
                  growth areas. This focused approach saves you time and helps you make informed decisions.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-full md:w-1/3 bg-black text-[#f5f2e9] p-8 flex flex-col items-center text-center">
                <span className="text-4xl font-bold mb-4">05</span>
                <h3 className="text-2xl font-bold mb-2">Interview Support</h3>
                <p className="text-[#f5f2e9]/80">
                  We coordinate interviews, provide guidance, and collect feedback to refine the search if needed.
                </p>
              </div>
              <div className="w-full md:w-2/3">
                <p className="text-black/70">
                  We handle all interview scheduling and logistics, prepare candidates for the interview process, and
                  provide you with structured interview questions and evaluation frameworks. After each interview, we
                  collect feedback from both you and the candidate to refine our search criteria if necessary and ensure
                  alignment of expectations.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-full md:w-1/3 bg-black text-[#f5f2e9] p-8 flex flex-col items-center text-center">
                <span className="text-4xl font-bold mb-4">06</span>
                <h3 className="text-2xl font-bold mb-2">Offer & Onboarding</h3>
                <p className="text-[#f5f2e9]/80">
                  We assist with offer negotiation, closing the candidate, and ensuring a smooth transition.
                </p>
              </div>
              <div className="w-full md:w-2/3">
                <p className="text-black/70">
                  Once you've selected your preferred candidate, we help with offer preparation, salary negotiation, and
                  addressing any candidate concerns. We maintain regular communication with both you and the candidate
                  throughout the notice period and onboarding process to ensure a smooth transition and successful
                  integration into your team.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Roles We Place Section */}
      <section className="py-32 bg-[#f5f2e9]">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-5xl font-bold mb-16 text-center">IT Roles We Place</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 border border-black/10">
              <h3 className="text-2xl font-bold mb-6">Development</h3>
              <ul className="space-y-3 text-black/70">
                <li className="flex items-center">
                  <Check className="text-black mr-2 flex-shrink-0" size={16} />
                  <span>Full Stack Developers</span>
                </li>
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
                  <span>Mobile Developers</span>
                </li>
                <li className="flex items-center">
                  <Check className="text-black mr-2 flex-shrink-0" size={16} />
                  <span>DevOps Engineers</span>
                </li>
                <li className="flex items-center">
                  <Check className="text-black mr-2 flex-shrink-0" size={16} />
                  <span>Software Architects</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 border border-black/10">
              <h3 className="text-2xl font-bold mb-6">Data & Analytics</h3>
              <ul className="space-y-3 text-black/70">
                <li className="flex items-center">
                  <Check className="text-black mr-2 flex-shrink-0" size={16} />
                  <span>Data Scientists</span>
                </li>
                <li className="flex items-center">
                  <Check className="text-black mr-2 flex-shrink-0" size={16} />
                  <span>Data Engineers</span>
                </li>
                <li className="flex items-center">
                  <Check className="text-black mr-2 flex-shrink-0" size={16} />
                  <span>Business Intelligence Analysts</span>
                </li>
                <li className="flex items-center">
                  <Check className="text-black mr-2 flex-shrink-0" size={16} />
                  <span>Database Administrators</span>
                </li>
                <li className="flex items-center">
                  <Check className="text-black mr-2 flex-shrink-0" size={16} />
                  <span>Machine Learning Engineers</span>
                </li>
                <li className="flex items-center">
                  <Check className="text-black mr-2 flex-shrink-0" size={16} />
                  <span>AI Specialists</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 border border-black/10">
              <h3 className="text-2xl font-bold mb-6">Leadership & Specialized</h3>
              <ul className="space-y-3 text-black/70">
                <li className="flex items-center">
                  <Check className="text-black mr-2 flex-shrink-0" size={16} />
                  <span>IT Directors & Managers</span>
                </li>
                <li className="flex items-center">
                  <Check className="text-black mr-2 flex-shrink-0" size={16} />
                  <span>Project & Product Managers</span>
                </li>
                <li className="flex items-center">
                  <Check className="text-black mr-2 flex-shrink-0" size={16} />
                  <span>UX/UI Designers</span>
                </li>
                <li className="flex items-center">
                  <Check className="text-black mr-2 flex-shrink-0" size={16} />
                  <span>QA & Test Engineers</span>
                </li>
                <li className="flex items-center">
                  <Check className="text-black mr-2 flex-shrink-0" size={16} />
                  <span>Cybersecurity Specialists</span>
                </li>
                <li className="flex items-center">
                  <Check className="text-black mr-2 flex-shrink-0" size={16} />
                  <span>Cloud Architects</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-black text-[#f5f2e9]">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold mb-6">Find your next IT star</h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto">
            Let's discuss your permanent hiring needs and find the perfect IT professionals for your team.
          </p>
          <Link href="/contact">
            <Button className="bg-[#f5f2e9] text-black hover:bg-[#f5f2e9]/90 rounded-none px-8 py-3">
              Start Recruiting
            </Button>
          </Link>
        </div>
      </section>
    </main>
  )
}
