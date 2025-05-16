import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check, DollarSign, Clock, Shield } from "lucide-react"

export default function GlobalPayrollPage() {
  return (
    <main className="flex flex-col min-h-screen bg-[#f5f2e9] text-black pt-32">
      {/* Hero Section */}
      <section className="py-16 border-b border-black/10">
        <div className="max-w-[1200px] mx-auto px-6 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6">Global Payroll Solutions</h1>
              <p className="text-xl mb-8 text-black/70">
                Streamline international payments and ensure compliance when compensating your global workforce.
              </p>
              <Link href="/contact">
                <Button className="bg-black text-[#f5f2e9] hover:bg-black/80">Request Information</Button>
              </Link>
            </div>
            <div className="relative h-[400px]">
              <Image
                src="/placeholder.svg?height=800&width=800&query=global payroll and international payments"
                alt="Global Payroll Solutions"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-[#f5f2e9]">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center">Benefits of Our Global Payroll Solution</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 border border-black/10">
              <DollarSign className="text-black mb-4" size={32} />
              <h3 className="text-2xl font-bold mb-4">Cost Efficiency</h3>
              <p className="text-black/70 mb-6">
                Reduce the overhead of managing multiple local payroll providers and banking relationships.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="text-black mr-2 mt-1 flex-shrink-0" size={16} />
                  <span className="text-black/70">Consolidated billing</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-black mr-2 mt-1 flex-shrink-0" size={16} />
                  <span className="text-black/70">Reduced transaction fees</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-black mr-2 mt-1 flex-shrink-0" size={16} />
                  <span className="text-black/70">Optimized currency exchange</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 border border-black/10">
              <Clock className="text-black mb-4" size={32} />
              <h3 className="text-2xl font-bold mb-4">Time Savings</h3>
              <p className="text-black/70 mb-6">
                Eliminate the administrative burden of managing payroll across multiple countries.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="text-black mr-2 mt-1 flex-shrink-0" size={16} />
                  <span className="text-black/70">Centralized management</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-black mr-2 mt-1 flex-shrink-0" size={16} />
                  <span className="text-black/70">Automated calculations</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-black mr-2 mt-1 flex-shrink-0" size={16} />
                  <span className="text-black/70">Streamlined reporting</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 border border-black/10">
              <Shield className="text-black mb-4" size={32} />
              <h3 className="text-2xl font-bold mb-4">Compliance Assurance</h3>
              <p className="text-black/70 mb-6">
                Stay compliant with local tax regulations, reporting requirements, and labor laws.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="text-black mr-2 mt-1 flex-shrink-0" size={16} />
                  <span className="text-black/70">Tax withholding</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-black mr-2 mt-1 flex-shrink-0" size={16} />
                  <span className="text-black/70">Statutory filings</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-black mr-2 mt-1 flex-shrink-0" size={16} />
                  <span className="text-black/70">Regulatory updates</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center">How Our Global Payroll Works</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <ol className="space-y-8">
                <li className="flex">
                  <span className="bg-black text-white w-8 h-8 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    1
                  </span>
                  <div>
                    <h4 className="font-bold text-xl mb-2">Onboarding</h4>
                    <p className="text-black/70">
                      We collect all necessary information about your global team members and set up their profiles in
                      our system.
                    </p>
                  </div>
                </li>

                <li className="flex">
                  <span className="bg-black text-white w-8 h-8 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    2
                  </span>
                  <div>
                    <h4 className="font-bold text-xl mb-2">Payroll Processing</h4>
                    <p className="text-black/70">
                      You submit hours, salaries, and any variable compensation through our platform, and we handle all
                      calculations.
                    </p>
                  </div>
                </li>

                <li className="flex">
                  <span className="bg-black text-white w-8 h-8 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    3
                  </span>
                  <div>
                    <h4 className="font-bold text-xl mb-2">Compliance Management</h4>
                    <p className="text-black/70">
                      We calculate all required tax withholdings, social contributions, and other statutory deductions
                      based on local laws.
                    </p>
                  </div>
                </li>

                <li className="flex">
                  <span className="bg-black text-white w-8 h-8 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    4
                  </span>
                  <div>
                    <h4 className="font-bold text-xl mb-2">Payment Distribution</h4>
                    <p className="text-black/70">
                      We distribute payments to your team members in their local currencies, with options for various
                      payment methods.
                    </p>
                  </div>
                </li>

                <li className="flex">
                  <span className="bg-black text-white w-8 h-8 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    5
                  </span>
                  <div>
                    <h4 className="font-bold text-xl mb-2">Reporting & Documentation</h4>
                    <p className="text-black/70">
                      Access comprehensive reports and documentation for your records, audits, and financial planning.
                    </p>
                  </div>
                </li>
              </ol>
            </div>

            <div className="order-1 md:order-2 relative h-[500px]">
              <Image
                src="/placeholder.svg?height=1000&width=800&query=global payroll process workflow"
                alt="Global Payroll Process"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-[#f5f2e9]">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center">Key Features</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 border border-black/10">
              <h3 className="text-2xl font-bold mb-4">Multi-Currency Support</h3>
              <p className="text-black/70">
                Pay your team members in their preferred currencies, with competitive exchange rates and transparent
                fees.
              </p>
            </div>

            <div className="bg-white p-8 border border-black/10">
              <h3 className="text-2xl font-bold mb-4">Flexible Payment Methods</h3>
              <p className="text-black/70">
                Support for bank transfers, digital wallets, and other local payment methods preferred in different
                regions.
              </p>
            </div>

            <div className="bg-white p-8 border border-black/10">
              <h3 className="text-2xl font-bold mb-4">Contractor & Employee Support</h3>
              <p className="text-black/70">
                Manage payments for both contractors and employees through a single platform, with appropriate
                compliance handling for each.
              </p>
            </div>

            <div className="bg-white p-8 border border-black/10">
              <h3 className="text-2xl font-bold mb-4">Tax Documentation</h3>
              <p className="text-black/70">
                Generation and distribution of required tax forms and documentation for both your company and your team
                members.
              </p>
            </div>

            <div className="bg-white p-8 border border-black/10">
              <h3 className="text-2xl font-bold mb-4">Benefits Administration</h3>
              <p className="text-black/70">
                Management of benefits packages across different countries, with support for local statutory benefits
                and custom offerings.
              </p>
            </div>

            <div className="bg-white p-8 border border-black/10">
              <h3 className="text-2xl font-bold mb-4">Expense Reimbursement</h3>
              <p className="text-black/70">
                Integrated expense management for your global team, with approval workflows and compliance checks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Simplify your global payroll today</h2>
          <p className="text-xl max-w-2xl mx-auto mb-12 text-white/70">
            Let us handle the complexity of international payments while you focus on growing your business.
          </p>
          <Link href="/contact">
            <Button className="bg-[#f5f2e9] text-black hover:bg-[#f5f2e9]/90 px-8 py-3">Request a Demo</Button>
          </Link>
        </div>
      </section>
    </main>
  )
}
