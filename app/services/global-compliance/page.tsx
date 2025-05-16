import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check, Shield } from "lucide-react"

export default function GlobalCompliancePage() {
  return (
    <main className="flex flex-col min-h-screen bg-[#f5f2e9] text-black pt-32">
      {/* Hero Section */}
      <section className="py-16 border-b border-black/10">
        <div className="max-w-[1200px] mx-auto px-6 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6">Global Compliance Solutions</h1>
              <p className="text-xl mb-8 text-black/70">
                Navigate international employment regulations with confidence when hiring remote talent across borders.
              </p>
              <Link href="/contact">
                <Button className="bg-black text-[#f5f2e9] hover:bg-black/80">Schedule a Consultation</Button>
              </Link>
            </div>
            <div className="relative h-[400px]">
              <Image src="/placeholder.svg?key=ncljk" alt="Global Compliance" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Key Challenges Section */}
      <section className="py-20 bg-[#f5f2e9]">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center">Key Compliance Challenges</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 border border-black/10">
              <Shield className="text-black mb-4" size={32} />
              <h3 className="text-2xl font-bold mb-4">Employment Laws</h3>
              <p className="text-black/70">
                Each country has unique employment regulations, including contract requirements, termination procedures,
                and worker protections.
              </p>
            </div>

            <div className="bg-white p-8 border border-black/10">
              <Shield className="text-black mb-4" size={32} />
              <h3 className="text-2xl font-bold mb-4">Tax Compliance</h3>
              <p className="text-black/70">
                International tax obligations can be complex, with potential for double taxation or unexpected
                liabilities.
              </p>
            </div>

            <div className="bg-white p-8 border border-black/10">
              <Shield className="text-black mb-4" size={32} />
              <h3 className="text-2xl font-bold mb-4">Benefits & Compensation</h3>
              <p className="text-black/70">
                Mandatory benefits, minimum wage requirements, and overtime regulations vary significantly by country.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Solutions Section */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center">Our Compliance Solutions</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <Check className="text-black mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-bold text-xl mb-2">Employer of Record (EOR) Services</h4>
                    <p className="text-black/70">
                      We act as the legal employer for your international team members, handling all compliance
                      requirements while you maintain day-to-day management.
                    </p>
                  </div>
                </li>

                <li className="flex items-start">
                  <Check className="text-black mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-bold text-xl mb-2">Compliant Contracts</h4>
                    <p className="text-black/70">
                      We provide legally sound employment contracts tailored to each country's requirements, protecting
                      both you and your team members.
                    </p>
                  </div>
                </li>

                <li className="flex items-start">
                  <Check className="text-black mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-bold text-xl mb-2">Tax Management</h4>
                    <p className="text-black/70">
                      Our experts ensure proper tax withholding, reporting, and compliance with local tax regulations in
                      each jurisdiction.
                    </p>
                  </div>
                </li>

                <li className="flex items-start">
                  <Check className="text-black mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-bold text-xl mb-2">Risk Assessment</h4>
                    <p className="text-black/70">
                      We identify potential compliance risks in your target countries and provide strategies to mitigate
                      them.
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="relative h-[500px]">
              <Image src="/placeholder.svg?key=ps8ux" alt="Compliance Solutions" fill className="object-contain" />
            </div>
          </div>
        </div>
      </section>

      {/* Countries Coverage Section */}
      <section className="py-20 bg-[#f5f2e9]">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center">Global Coverage</h2>
          <p className="text-xl text-center max-w-3xl mx-auto mb-12 text-black/70">
            Our compliance solutions cover 40+ countries across multiple regions, allowing you to hire with confidence
            anywhere your ideal talent is located.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Asia Pacific</h3>
              <ul className="space-y-2 text-black/70">
                <li>Pakistan</li>
                <li>India</li>
                <li>Malaysia</li>
                <li>Philippines</li>
                <li>Singapore</li>
                <li>Australia</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Europe</h3>
              <ul className="space-y-2 text-black/70">
                <li>United Kingdom</li>
                <li>Germany</li>
                <li>Poland</li>
                <li>Ukraine</li>
                <li>Romania</li>
                <li>Spain</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Americas</h3>
              <ul className="space-y-2 text-black/70">
                <li>United States</li>
                <li>Canada</li>
                <li>Mexico</li>
                <li>Brazil</li>
                <li>Argentina</li>
                <li>Colombia</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Africa & Middle East</h3>
              <ul className="space-y-2 text-black/70">
                <li>South Africa</li>
                <li>Nigeria</li>
                <li>Kenya</li>
                <li>Egypt</li>
                <li>UAE</li>
                <li>Saudi Arabia</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Hire globally without the compliance headaches</h2>
          <p className="text-xl max-w-2xl mx-auto mb-12 text-white/70">
            Let us handle the complex legal requirements while you focus on building your international team.
          </p>
          <Link href="/contact">
            <Button className="bg-[#f5f2e9] text-black hover:bg-[#f5f2e9]/90 px-8 py-3">
              Contact Our Compliance Team
            </Button>
          </Link>
        </div>
      </section>
    </main>
  )
}
