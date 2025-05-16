import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function BrandingCategoryPage() {
  return (
    <main className="flex flex-col min-h-screen bg-black text-white pt-16">
      {/* Hero Section */}
      <section className="h-[50vh] flex items-center">
        <div className="max-w-[1200px] mx-auto px-6 w-full">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Branding Insights</h1>
          <p className="text-xl md:text-2xl max-w-2xl text-gray-300 font-light">
            Exploring brand strategy, identity design, and building meaningful connections with audiences
          </p>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-24 bg-black">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-3xl font-bold mb-16">Featured Article</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/6224/hands-people-woman-working.jpg"
                alt="Brand Strategy"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Brand Strategy in the Digital Age: Beyond Logos and Colors</h3>
              <p className="text-gray-400 mb-4">June 5, 2023 • 15 min read</p>
              <p className="text-lg mb-6 text-gray-300">
                In today's digital landscape, brand strategy extends far beyond visual elements. Discover how to build a
                comprehensive brand experience that resonates across all touchpoints.
              </p>
              <Link href="/insights/brand-strategy-digital-age">
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-black rounded-full"
                >
                  Read Article
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-24 bg-black">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-3xl font-bold mb-16">All Branding Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Article 1 */}
            <div className="bg-black rounded-lg overflow-hidden shadow-sm border border-zinc-800">
              <div className="relative h-64">
                <Image
                  src="https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg"
                  alt="Brand Voice"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8">
                <p className="text-gray-400 mb-2">May 20, 2023 • 9 min read</p>
                <h3 className="text-xl font-bold mb-4">Developing a Distinctive Brand Voice</h3>
                <p className="text-gray-400 mb-4">
                  How to create and maintain a consistent brand voice that resonates with your target audience across
                  all communications.
                </p>
                <Link
                  href="/insights/brand-voice-development"
                  className="text-white font-medium hover:underline inline-flex items-center"
                >
                  Read more
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Article 2 */}
            <div className="bg-black rounded-lg overflow-hidden shadow-sm border border-zinc-800">
              <div className="relative h-64">
                <Image
                  src="https://images.pexels.com/photos/6224/hands-people-woman-working.jpg"
                  alt="Brand Identity"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8">
                <p className="text-gray-400 mb-2">May 10, 2023 • 12 min read</p>
                <h3 className="text-xl font-bold mb-4">The Elements of Effective Brand Identity Systems</h3>
                <p className="text-gray-400 mb-4">
                  A comprehensive guide to creating cohesive brand identity systems that work across all applications.
                </p>
                <Link
                  href="/insights/brand-identity-systems"
                  className="text-white font-medium hover:underline inline-flex items-center"
                >
                  Read more
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Article 3 */}
            <div className="bg-black rounded-lg overflow-hidden shadow-sm border border-zinc-800">
              <div className="relative h-64">
                <Image
                  src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg"
                  alt="Brand Positioning"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8">
                <p className="text-gray-400 mb-2">April 25, 2023 • 10 min read</p>
                <h3 className="text-xl font-bold mb-4">Strategic Brand Positioning in Competitive Markets</h3>
                <p className="text-gray-400 mb-4">
                  How to identify and claim a unique position in your market that differentiates your brand from
                  competitors.
                </p>
                <Link
                  href="/insights/brand-positioning"
                  className="text-white font-medium hover:underline inline-flex items-center"
                >
                  Read more
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Article 4 */}
            <div className="bg-black rounded-lg overflow-hidden shadow-sm border border-zinc-800">
              <div className="relative h-64">
                <Image
                  src="https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg"
                  alt="Brand Experience"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8">
                <p className="text-gray-400 mb-2">April 12, 2023 • 11 min read</p>
                <h3 className="text-xl font-bold mb-4">Creating Cohesive Brand Experiences Across Touchpoints</h3>
                <p className="text-gray-400 mb-4">
                  Strategies for ensuring consistent brand experiences from digital platforms to physical interactions.
                </p>
                <Link
                  href="/insights/cohesive-brand-experiences"
                  className="text-white font-medium hover:underline inline-flex items-center"
                >
                  Read more
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Article 5 */}
            <div className="bg-black rounded-lg overflow-hidden shadow-sm border border-zinc-800">
              <div className="relative h-64">
                <Image
                  src="https://images.pexels.com/photos/3182744/pexels-photo-3182744.jpeg"
                  alt="Brand Evolution"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8">
                <p className="text-gray-400 mb-2">March 28, 2023 • 13 min read</p>
                <h3 className="text-xl font-bold mb-4">Brand Evolution: When and How to Refresh Your Brand</h3>
                <p className="text-gray-400 mb-4">
                  A guide to recognizing when your brand needs updating and how to evolve while maintaining brand
                  equity.
                </p>
                <Link
                  href="/insights/brand-evolution"
                  className="text-white font-medium hover:underline inline-flex items-center"
                >
                  Read more
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Article 6 */}
            <div className="bg-black rounded-lg overflow-hidden shadow-sm border border-zinc-800">
              <div className="relative h-64">
                <Image
                  src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg"
                  alt="Brand Measurement"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8">
                <p className="text-gray-400 mb-2">March 15, 2023 • 9 min read</p>
                <h3 className="text-xl font-bold mb-4">Measuring Brand Impact: Metrics That Matter</h3>
                <p className="text-gray-400 mb-4">
                  How to evaluate the effectiveness of your branding efforts using meaningful metrics and KPIs.
                </p>
                <Link
                  href="/insights/measuring-brand-impact"
                  className="text-white font-medium hover:underline inline-flex items-center"
                >
                  Read more
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-black border-t border-zinc-800">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Want to learn more about Branding?</h2>
          <p className="text-xl max-w-2xl mx-auto mb-10 text-gray-300">
            Explore our branding services and discover how we can help build a distinctive, memorable brand for your
            business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/services#branding">
              <Button className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-6">
                Our Branding Services
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-black rounded-full px-8 py-6"
              >
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
