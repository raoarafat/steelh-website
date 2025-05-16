import Image from "next/image"
import Link from "next/link"
import { HubspotForm } from "@/components/hubspot-form"

export default function RetailPage() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <Image
          src="https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg"
          alt="Retail design solutions"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="container relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Retail Experience Design</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Creating seamless omnichannel experiences that drive customer engagement and sales
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Elevating Retail Brands in the Digital Age</h2>
              <p className="text-lg mb-6">
                In today's competitive retail landscape, exceptional digital experiences are no longer optional. At
                BlackHives, we help retail brands create cohesive omnichannel journeys that delight customers and drive
                conversions.
              </p>
              <p className="text-lg">
                From e-commerce platforms to in-store digital touchpoints, we blend aesthetics with functionality to
                create memorable shopping experiences that build brand loyalty and increase revenue.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg"
                alt="Retail digital experience"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Retail Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="relative h-64">
                <Image
                  src="https://images.pexels.com/photos/6214476/pexels-photo-6214476.jpeg"
                  alt="Luxury e-commerce redesign"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Luxury E-commerce Redesign</h3>
                <p className="text-gray-600 mb-4">
                  Reimagined the online shopping experience for a luxury fashion retailer, resulting in a 45% increase
                  in average order value.
                </p>
                <Link href="/work/fintech-platform-redesign" className="text-black font-medium hover:underline">
                  View case study →
                </Link>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="relative h-64">
                <Image
                  src="https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg"
                  alt="Mobile shopping app"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Mobile Shopping App</h3>
                <p className="text-gray-600 mb-4">
                  Designed an intuitive mobile shopping experience for a major retailer, driving a 60% increase in
                  mobile conversions.
                </p>
                <Link href="/work/fintech-platform-redesign" className="text-black font-medium hover:underline">
                  View case study →
                </Link>
              </div>
            </div>

            {/* Project 3 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="relative h-64">
                <Image
                  src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg"
                  alt="Omnichannel retail strategy"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Omnichannel Retail Strategy</h3>
                <p className="text-gray-600 mb-4">
                  Developed a cohesive digital strategy connecting online and in-store experiences, increasing customer
                  retention by 32%.
                </p>
                <Link href="/work/fintech-platform-redesign" className="text-black font-medium hover:underline">
                  View case study →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Retail Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 border border-gray-200 rounded-lg">
              <h3 className="text-xl font-bold mb-3">E-commerce Design</h3>
              <p className="text-gray-600">
                Conversion-focused online shopping experiences that showcase products effectively.
              </p>
            </div>
            <div className="p-6 border border-gray-200 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Mobile Shopping Apps</h3>
              <p className="text-gray-600">
                Intuitive mobile applications that make shopping on-the-go seamless and enjoyable.
              </p>
            </div>
            <div className="p-6 border border-gray-200 rounded-lg">
              <h3 className="text-xl font-bold mb-3">In-store Digital</h3>
              <p className="text-gray-600">
                Digital touchpoints that enhance the physical shopping experience and drive engagement.
              </p>
            </div>
            <div className="p-6 border border-gray-200 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Retail Brand Identity</h3>
              <p className="text-gray-600">
                Distinctive visual identities that help retail brands stand out in a crowded marketplace.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 bg-gray-50">
        <div className="container max-w-4xl">
          <div className="text-center">
            <svg className="w-12 h-12 mx-auto mb-6 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <blockquote className="text-2xl font-medium mb-8">
              "BlackHives completely transformed our digital presence. Their understanding of retail customer behavior
              helped us create an online experience that truly represents our brand and drives results."
            </blockquote>
            <div className="flex items-center justify-center">
              <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                <Image
                  src="https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg"
                  alt="Emily Rodriguez"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-left">
                <p className="font-bold">Emily Rodriguez</p>
                <p className="text-gray-600">Digital Director, Urban Retail Group</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-black text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to elevate your retail brand?</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Let's create digital experiences that delight your customers and drive your business forward.
          </p>
          <div className="max-w-md mx-auto">
            <HubspotForm />
          </div>
        </div>
      </section>
    </main>
  )
}
