import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function UXDesignCategoryPage() {
  return (
    <main className="flex flex-col min-h-screen bg-black text-white pt-16">
      {/* Hero Section */}
      <section className="h-[50vh] flex items-center">
        <div className="max-w-[1200px] mx-auto px-6 w-full">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">UX Design Insights</h1>
          <p className="text-xl md:text-2xl max-w-2xl text-gray-300 font-light">
            Exploring user experience principles, methodologies, and best practices
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
                src="https://images.pexels.com/photos/3182746/pexels-photo-3182746.jpeg"
                alt="The Future of UX Design"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">The Future of UX Design: Trends to Watch in 2023</h3>
              <p className="text-gray-400 mb-4">June 15, 2023 • 12 min read</p>
              <p className="text-lg mb-6 text-gray-300">
                As technology evolves, so does the field of UX design. From voice interfaces to immersive experiences,
                discover the trends shaping the future of how users interact with digital products.
              </p>
              <Link href="/insights/future-of-ux-design">
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
          <h2 className="text-3xl font-bold mb-16">All UX Design Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Article 1 */}
            <div className="bg-black rounded-lg overflow-hidden shadow-sm border border-zinc-800">
              <div className="relative h-64">
                <Image
                  src="https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg"
                  alt="User Research Methods"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8">
                <p className="text-gray-400 mb-2">May 28, 2023 • 8 min read</p>
                <h3 className="text-xl font-bold mb-4">User Research Methods: Choosing the Right Approach</h3>
                <p className="text-gray-400 mb-4">
                  A comprehensive guide to different user research methodologies and when to apply them for maximum
                  insight.
                </p>
                <Link
                  href="/insights/user-research-methods"
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
                  src="https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg"
                  alt="Accessibility in UX"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8">
                <p className="text-gray-400 mb-2">May 15, 2023 • 10 min read</p>
                <h3 className="text-xl font-bold mb-4">Accessibility in UX: Designing for All Users</h3>
                <p className="text-gray-400 mb-4">
                  How to create inclusive digital experiences that work for users of all abilities and backgrounds.
                </p>
                <Link
                  href="/insights/accessibility-in-ux"
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
                  alt="UX Writing"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8">
                <p className="text-gray-400 mb-2">April 30, 2023 • 7 min read</p>
                <h3 className="text-xl font-bold mb-4">The Art of UX Writing: Creating Meaningful Microcopy</h3>
                <p className="text-gray-400 mb-4">
                  How thoughtful UX writing can enhance user experience and guide users through your product.
                </p>
                <Link
                  href="/insights/ux-writing-microcopy"
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
                  src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg"
                  alt="UX Metrics"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8">
                <p className="text-gray-400 mb-2">April 15, 2023 • 9 min read</p>
                <h3 className="text-xl font-bold mb-4">Measuring UX Success: Key Metrics and KPIs</h3>
                <p className="text-gray-400 mb-4">
                  How to define and track the right metrics to evaluate the effectiveness of your UX design.
                </p>
                <Link
                  href="/insights/measuring-ux-success"
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
                  alt="UX Research"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8">
                <p className="text-gray-400 mb-2">March 28, 2023 • 11 min read</p>
                <h3 className="text-xl font-bold mb-4">From Insights to Implementation: Applying UX Research</h3>
                <p className="text-gray-400 mb-4">
                  Strategies for translating user research findings into actionable design decisions.
                </p>
                <Link
                  href="/insights/applying-ux-research"
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
                  alt="UX Team Collaboration"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8">
                <p className="text-gray-400 mb-2">March 15, 2023 • 8 min read</p>
                <h3 className="text-xl font-bold mb-4">Building Effective UX Teams: Roles and Collaboration</h3>
                <p className="text-gray-400 mb-4">
                  How to structure and nurture UX teams that collaborate effectively with product and development.
                </p>
                <Link
                  href="/insights/effective-ux-teams"
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
          <h2 className="text-3xl font-bold mb-6">Want to learn more about UX Design?</h2>
          <p className="text-xl max-w-2xl mx-auto mb-10 text-gray-300">
            Explore our UX design services and discover how we can help elevate your digital products.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/services#ux-design">
              <Button className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-6">Our UX Services</Button>
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
