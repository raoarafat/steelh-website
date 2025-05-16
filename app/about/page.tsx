import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <main className="flex flex-col min-h-screen bg-[#f7f3e9] text-black pt-32">
      {/* Hero Section */}
      <section className="h-[70vh] flex items-center border-b border-black/10">
        <div className="max-w-[1200px] mx-auto px-6 w-full">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
          <p className="text-xl md:text-2xl max-w-2xl text-black/70">
            Building bridges between exceptional IT talent and innovative businesses
          </p>
        </div>
      </section>

      {/* About Categories Section */}
      <section className="py-20 bg-[#f7f3e9] border-b border-black/10">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Company */}
            <div className="bg-white p-8 border border-black/10 hover:border-black transition-colors">
              <h3 className="text-2xl font-bold mb-6">Company</h3>
              <ul className="space-y-4 mb-8">
                <li>
                  <Link href="/about#our-story" className="flex items-center text-black/70 hover:text-[#4d80e4]">
                    <span className="w-2 h-2 bg-black rounded-full mr-3"></span>
                    Our Story
                  </Link>
                </li>
                <li>
                  <Link href="/about#mission-vision" className="flex items-center text-black/70 hover:text-[#4d80e4]">
                    <span className="w-2 h-2 bg-black rounded-full mr-3"></span>
                    Mission & Vision
                  </Link>
                </li>
                <li>
                  <Link href="/about#team" className="flex items-center text-black/70 hover:text-[#4d80e4]">
                    <span className="w-2 h-2 bg-black rounded-full mr-3"></span>
                    Our Team
                  </Link>
                </li>
              </ul>
            </div>

            {/* Global Presence */}
            <div className="bg-white p-8 border border-black/10 hover:border-black transition-colors">
              <h3 className="text-2xl font-bold mb-6">Global Presence</h3>
              <ul className="space-y-4 mb-8">
                <li>
                  <Link href="/about#global-presence" className="flex items-center text-black/70 hover:text-[#4d80e4]">
                    <span className="w-2 h-2 bg-black rounded-full mr-3"></span>
                    Our Global Network
                  </Link>
                </li>
                <li>
                  <Link href="/about#global-presence" className="flex items-center text-black/70 hover:text-[#4d80e4]">
                    <span className="w-2 h-2 bg-black rounded-full mr-3"></span>
                    Talent Regions
                  </Link>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div className="bg-white p-8 border border-black/10 hover:border-black transition-colors">
              <h3 className="text-2xl font-bold mb-6">Resources</h3>
              <ul className="space-y-4 mb-8">
                <li>
                  <Link href="/about#core-values" className="flex items-center text-black/70 hover:text-[#4d80e4]">
                    <span className="w-2 h-2 bg-black rounded-full mr-3"></span>
                    Core Values
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-32 bg-[#f7f3e9]" id="our-story">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Story</h2>
              <p className="text-lg mb-6 text-black/70">
                Steel Horizon Solutions was founded in 2025 with a clear mission: to bridge the gap between exceptional
                IT talent and businesses seeking innovation. We recognized the challenges companies face in finding
                skilled technology professionals, while also understanding the wealth of untapped talent in regions like
                Pakistan and Southeast Asia.
              </p>
              <p className="text-lg mb-6 text-black/70">
                Our founders, with backgrounds in both technology and recruitment, built Steel Horizon Solutions to
                create meaningful connections that benefit both businesses and IT professionals. Today, we're proud to
                be a trusted partner for companies ranging from startups to enterprises, helping them build
                high-performing technology teams.
              </p>
            </div>
            <div className="relative h-[500px]">
              <Image src="/images/about-us-team.jpg" alt="Our team" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-32 bg-[#f7f3e9] border-t border-black/10" id="mission-vision">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Vision</h2>
              <p className="text-lg mb-6 text-black/70">
                To become a trusted regional leader in providing talent for digital innovation & bridging global demand
                with trending technologies like Blockchain, Advanced CyberSec, A.I., FinTech and more.
              </p>
              <div className="relative h-[300px]">
                <Image src="/images/vision.jpg" alt="Our vision" fill className="object-cover" />
              </div>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Mission</h2>
              <p className="text-lg mb-6 text-black/70">
                To empower businesses through advanced digital solutions and specialized manpower by:
              </p>
              <ul className="space-y-4 mb-6 text-black/70">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-black rounded-full mr-3 mt-2"></span>
                  <span>
                    Delivering secure, scalable & sustainable trending technologies to excel on the requirements of
                    users.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-black rounded-full mr-3 mt-2"></span>
                  <span>
                    Supplying top-tier Pakistani tech professionals to meet evolving client needs with agility and
                    excellence.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-black rounded-full mr-3 mt-2"></span>
                  <span>
                    Creating opportunities for talented individuals to work with global companies and advance their
                    careers.
                  </span>
                </li>
              </ul>
              <div className="relative h-[300px]">
                <Image src="/images/mission.jpg" alt="Our mission" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-32 bg-[#f7f3e9] border-t border-black/10" id="core-values">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="border border-black/20 p-8 hover:border-black transition-colors">
              <h3 className="text-xl font-bold mb-4">Excellence</h3>
              <p className="text-black/70">
                We are committed to delivering exceptional quality in everything we do, from the talent we source to the
                service we provide to our clients and candidates.
              </p>
            </div>

            <div className="border border-black/20 p-8 hover:border-black transition-colors">
              <h3 className="text-xl font-bold mb-4">Integrity</h3>
              <p className="text-black/70">
                We operate with honesty, transparency, and ethical practices in all our interactions, building trust
                with our clients, candidates, and partners.
              </p>
            </div>

            <div className="border border-black/20 p-8 hover:border-black transition-colors">
              <h3 className="text-xl font-bold mb-4">Innovation</h3>
              <p className="text-black/70">
                We embrace new technologies and approaches to stay ahead of industry trends and provide cutting-edge
                solutions to our clients.
              </p>
            </div>

            <div className="border border-black/20 p-8 hover:border-black transition-colors">
              <h3 className="text-xl font-bold mb-4">Collaboration</h3>
              <p className="text-black/70">
                We believe in the power of teamwork and partnership, working closely with our clients and candidates to
                achieve shared goals.
              </p>
            </div>

            <div className="border border-black/20 p-8 hover:border-black transition-colors">
              <h3 className="text-xl font-bold mb-4">Diversity</h3>
              <p className="text-black/70">
                We value diverse perspectives, backgrounds, and experiences, recognizing that they drive innovation and
                better outcomes for everyone.
              </p>
            </div>

            <div className="border border-black/20 p-8 hover:border-black transition-colors">
              <h3 className="text-xl font-bold mb-4">Empowerment</h3>
              <p className="text-black/70">
                We empower both our clients and the professionals we place, providing them with the resources, support,
                and opportunities they need to succeed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Global Presence - Updated to only show Malaysia and Pakistan */}
      <section className="py-32 bg-[#f7f3e9] border-t border-black/10" id="global-presence">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Global Presence</h2>
              <p className="text-lg mb-6 text-black/70">
                With our headquarters in Malaysia and strong connections in Pakistan, we're strategically positioned to
                connect businesses with exceptional IT talent.
              </p>
              <div className="grid grid-cols-1 gap-8 mt-8">
                <div>
                  <h3 className="text-xl font-bold mb-4">Headquarters</h3>
                  <p className="text-black/70">
                    No. B-09-21, Boulevard 51,
                    <br />
                    Jalan SS9A/18, Seksyen 51A,
                    <br />
                    47300 Petaling Jaya,
                    <br />
                    Selangor, Malaysia
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4">Talent Network</h3>
                  <p className="text-black/70">
                    Our extensive network in Pakistan allows us to source highly skilled IT professionals across various
                    specializations, providing our clients with access to top-tier talent at competitive rates.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative h-[500px]">
              <Image src="/images/global-map.jpg" alt="Our global presence" fill className="object-contain" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-[#333] text-[#f7f3e9]">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-archivo font-bold mb-6">Ready to work with us?</h2>
          <p className="text-lg max-w-2xl mx-auto mb-12">
            Let's discuss how our IT manpower solutions can help your business innovate and grow.
          </p>
          <div className="flex justify-center">
            <Link href="/contact">
              <Button className="bg-[#f7f3e9] text-[#333] hover:bg-[#f7f3e9]/90 rounded-none px-8 py-6">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
