import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

export default function ContractToHirePage() {
  return (
    <main className="flex flex-col min-h-screen bg-[#f5f2e9] text-black pt-16">
      {/* Hero Section */}
      <section className="min-h-[70vh] pt-32 flex items-center border-b border-black/10">
        <div className="max-w-[1200px] mx-auto px-6 w-full">
          <h1 className="text-6xl md:text-8xl font-bold mb-6">Contract-to-Hire</h1>
          <p className="text-xl md:text-2xl max-w-2xl text-black/70">
            Try before you commit with our flexible contract-to-hire IT staffing solutions
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-32 bg-[#f5f2e9] border-b border-black/10">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1 relative h-[600px]">
              <Image src="/images/contract-to-hire.jpg" alt="Contract to Hire" fill className="object-cover" />
            </div>

            <div className="order-1 md:order-2">
              <h2 className="text-5xl font-bold mb-6">Evaluate Before Committing</h2>
              <p className="text-xl mb-8 text-black/70">
                Our contract-to-hire model allows you to work with IT professionals on a contract basis with the option
                to convert them to full-time employees. This approach reduces hiring risks and ensures a good fit before
                making a permanent commitment.
              </p>

              <div className="bg-white p-8 mb-8 border border-black/10">
                <h3 className="text-2xl font-bold mb-4">Key Benefits</h3>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <Check className="text-black mr-2 mt-1 flex-shrink-0" size={16} />
                    <span className="text-black/70">
                      Evaluate technical skills and cultural fit in real work scenarios
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-black mr-2 mt-1 flex-shrink-0" size={16} />
                    <span className="text-black/70">Reduce hiring risks and costs</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-black mr-2 mt-1 flex-shrink-0" size={16} />
                    <span className="text-black/70">Accelerate the hiring process for permanent positions</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-black mr-2 mt-1 flex-shrink-0" size={16} />
                    <span className="text-black/70">Flexible conversion options after 3-6 months</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-black mr-2 mt-1 flex-shrink-0" size={16} />
                    <span className="text-black/70">No conversion fees after minimum contract period</span>
                  </li>
                </ul>

                <Link href="/contact">
                  <Button className="bg-black text-[#f5f2e9] hover:bg-black/80">
                    Discuss Contract-to-Hire Options
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-32 bg-[#f5f2e9] border-b border-black/10">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-5xl font-bold mb-16 text-center">How Contract-to-Hire Works</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="bg-white p-8 border border-black/10 relative">
              <div className="absolute -top-5 -left-5 w-10 h-10 bg-black text-[#f5f2e9] rounded-full flex items-center justify-center text-xl font-bold">
                1
              </div>
              <h3 className="text-2xl font-bold mb-4 mt-2">Initial Contract</h3>
              <p className="text-black/70 mb-4">
                We place a qualified IT professional with your team on a contract basis, typically for 3-6 months.
              </p>
              <p className="text-black/70">
                During this period, they work as a contractor through Steel Horizon Solutions, with all administrative
                aspects handled by us.
              </p>
            </div>

            <div className="bg-white p-8 border border-black/10 relative">
              <div className="absolute -top-5 -left-5 w-10 h-10 bg-black text-[#f5f2e9] rounded-full flex items-center justify-center text-xl font-bold">
                2
              </div>
              <h3 className="text-2xl font-bold mb-4 mt-2">Evaluation Period</h3>
              <p className="text-black/70 mb-4">
                You evaluate the contractor's performance, technical skills, and cultural fit with your team in real
                work scenarios.
              </p>
              <p className="text-black/70">
                We provide regular check-ins and support throughout the contract period to ensure satisfaction.
              </p>
            </div>

            <div className="bg-white p-8 border border-black/10 relative">
              <div className="absolute -top-5 -left-5 w-10 h-10 bg-black text-[#f5f2e9] rounded-full flex items-center justify-center text-xl font-bold">
                3
              </div>
              <h3 className="text-2xl font-bold mb-4 mt-2">Conversion Decision</h3>
              <p className="text-black/70 mb-4">
                At the end of the contract period, you can choose to convert the contractor to a full-time employee.
              </p>
              <p className="text-black/70">
                If the fit isn't right, the contract simply ends with no further obligation or conversion fees.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ideal Scenarios Section */}
      <section className="py-32 bg-[#f5f2e9]">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-5xl font-bold mb-16 text-center">Ideal for These Scenarios</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <div className="w-12 h-12 bg-black text-[#f5f2e9] rounded-full flex items-center justify-center mr-4 flex-shrink-0 text-xl font-bold">
                    ✓
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Growing Teams</h3>
                    <p className="text-black/70">
                      When you're expanding your IT department but want to ensure each new hire is the right fit before
                      committing.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-12 h-12 bg-black text-[#f5f2e9] rounded-full flex items-center justify-center mr-4 flex-shrink-0 text-xl font-bold">
                    ✓
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Hard-to-Fill Positions</h3>
                    <p className="text-black/70">
                      For specialized roles where technical skills and team dynamics are equally important to evaluate.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-12 h-12 bg-black text-[#f5f2e9] rounded-full flex items-center justify-center mr-4 flex-shrink-0 text-xl font-bold">
                    ✓
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Budget Flexibility</h3>
                    <p className="text-black/70">
                      When you need to allocate resources from different budgets (contract vs. permanent headcount).
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <div className="w-12 h-12 bg-black text-[#f5f2e9] rounded-full flex items-center justify-center mr-4 flex-shrink-0 text-xl font-bold">
                    ✓
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Uncertain Project Timelines</h3>
                    <p className="text-black/70">
                      When project duration is uncertain but you may need the talent long-term if the project extends.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-12 h-12 bg-black text-[#f5f2e9] rounded-full flex items-center justify-center mr-4 flex-shrink-0 text-xl font-bold">
                    ✓
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Hiring Freeze Workarounds</h3>
                    <p className="text-black/70">
                      When permanent hiring is temporarily restricted but you can bring on contractors.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-12 h-12 bg-black text-[#f5f2e9] rounded-full flex items-center justify-center mr-4 flex-shrink-0 text-xl font-bold">
                    ✓
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Competitive Talent Markets</h3>
                    <p className="text-black/70">
                      When you need to move quickly to secure in-demand talent before competitors.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-black text-[#f5f2e9]">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold mb-6">Ready to try before you hire?</h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto">
            Let's discuss your contract-to-hire needs and find the perfect IT professionals for your team.
          </p>
          <Link href="/contact">
            <Button className="bg-[#f5f2e9] text-black hover:bg-[#f5f2e9]/90 rounded-none px-8 py-3">Contact Us</Button>
          </Link>
        </div>
      </section>
    </main>
  )
}
