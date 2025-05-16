import Image from "next/image"
import Link from "next/link"
import { HubspotForm } from "@/components/hubspot-form"

export default function RealEstatePage() {
  return (
    <main className="flex flex-col min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <Image
          src="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg"
          alt="Real Estate design solutions"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="container relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Real Estate Experience Design</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Creating immersive digital experiences that showcase properties and streamline the buying process
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-black">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Transforming Real Estate Through Digital Design</h2>
              <p className="text-lg mb-6 text-gray-300">
                In today's competitive real estate market, exceptional digital experiences are essential for showcasing
                properties and engaging potential buyers. At BlackHives, we help real estate companies create immersive
                digital experiences that highlight property features and streamline the buying process.
              </p>
              <p className="text-lg text-gray-300">
                From property listing platforms to virtual tours, we blend stunning visuals with intuitive functionality
                to create digital experiences that convert prospects into buyers and renters.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/1546168/pexels-photo-1546168.jpeg"
                alt="Real estate digital experience"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 bg-black">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Real Estate Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="bg-black rounded-lg overflow-hidden shadow-lg border border-zinc-800">
              <div className="relative h-64">
                <Image
                  src="https://images.pexels.com/photos/1546166/pexels-photo-1546166.jpeg"
                  alt="Property listing platform"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Property Listing Platform</h3>
                <p className="text-gray-400 mb-4">
                  Designed and developed a comprehensive property listing platform for a major real estate agency,
                  resulting in a 40% increase in lead generation and improved user engagement.
                </p>
                <Link href="/work/property-listing-platform" className="text-white font-medium hover:underline">
                  View case study →
                </Link>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-black rounded-lg overflow-hidden shadow-lg border border-zinc-800">
              <div className="relative h-64">
                <Image
                  src="https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg"
                  alt="Virtual property tour app"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Virtual Property Tour App</h3>
                <p className="text-gray-400 mb-4">
                  Created an immersive virtual tour application that allows potential buyers to explore properties
                  remotely, increasing viewing requests by 35% and expanding market reach.
                </p>
                <Link href="/work/virtual-property-tour-app" className="text-white font-medium hover:underline">
                  View case study →
                </Link>
              </div>
            </div>

            {/* Project 3 */}
            <div className="bg-black rounded-lg overflow-hidden shadow-lg border border-zinc-800">
              <div className="relative h-64">
                <Image
                  src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg"
                  alt="Real estate CRM system"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Real Estate CRM System</h3>
                <p className="text-gray-400 mb-4">
                  Developed a custom CRM system for a real estate developer, streamlining lead management and improving
                  agent productivity by 25%.
                </p>
                <Link href="/work/real-estate-crm" className="text-white font-medium hover:underline">
                  View case study →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-black">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Real Estate Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 border border-zinc-800 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Property Listing Platforms</h3>
              <p className="text-gray-400">
                User-friendly platforms that showcase properties effectively and generate quality leads.
              </p>
            </div>
            <div className="p-6 border border-zinc-800 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Virtual Tours & 3D Visualization</h3>
              <p className="text-gray-400">
                Immersive digital experiences that allow potential buyers to explore properties remotely.
              </p>
            </div>
            <div className="p-6 border border-zinc-800 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Real Estate CRM Systems</h3>
              <p className="text-gray-400">
                Custom CRM solutions that streamline lead management and improve agent productivity.
              </p>
            </div>
            <div className="p-6 border border-zinc-800 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Real Estate Branding</h3>
              <p className="text-gray-400">
                Distinctive visual identities that help real estate companies stand out in a competitive market.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 bg-black">
        <div className="container max-w-4xl">
          <div className="text-center">
            <svg className="w-12 h-12 mx-auto mb-6 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <blockquote className="text-2xl font-medium mb-8">
              "BlackHives transformed our digital presence with their innovative approach to real estate design. Their
              understanding of both aesthetics and user experience helped us create a platform that truly showcases our
              properties and connects with potential buyers."
            </blockquote>
            <div className="flex items-center justify-center">
              <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                <Image
                  src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
                  alt="Michael Johnson"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-left">
                <p className="font-bold">Michael Johnson</p>
                <p className="text-gray-600">CEO, Premier Properties</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-black text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to transform your real estate digital experience?</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Let's discuss how our design expertise can help showcase your properties and connect with potential buyers.
          </p>
          <div className="max-w-md mx-auto">
            <HubspotForm />
          </div>
        </div>
      </section>
    </main>
  )
}
