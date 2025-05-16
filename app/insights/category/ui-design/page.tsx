import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function UIDesignCategoryPage() {
  return (
    <main className="flex flex-col min-h-screen bg-black text-white pt-16">
      {/* Hero Section */}
      <section className="h-[50vh] flex items-center">
        <div className="max-w-[1200px] mx-auto px-6 w-full">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">UI Design Insights</h1>
          <p className="text-xl md:text-2xl max-w-2xl text-gray-300 font-light">
            Exploring visual design principles, trends, and techniques for creating beautiful interfaces
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
                src="https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg"
                alt="Design Systems"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Building Scalable Design Systems for Modern Products</h3>
              <p className="text-gray-400 mb-4">June 10, 2023 • 14 min read</p>
              <p className="text-lg mb-6 text-gray-300">
                Design systems have become essential for creating consistent, scalable user interfaces. Learn how to
                build and maintain a design system that grows with your product.
              </p>
              <Link href="/insights/scalable-design-systems">
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
          <h2 className="text-3xl font-bold mb-16">All UI Design Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Article 1 */}
            <div className="bg-black rounded-lg overflow-hidden shadow-sm border border-zinc-800">
              <div className="relative h-64">
                <Image
                  src="https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg"
                  alt="Color Theory"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8">
                <p className="text-gray-400 mb-2">May 25, 2023 • 9 min read</p>
                <h3 className="text-xl font-bold mb-4">Color Theory in UI Design: Creating Effective Color Systems</h3>
                <p className="text-gray-400 mb-4">
                  How to use color psychology and theory to create meaningful, accessible color palettes for digital
                  products.
                </p>
                <Link
                  href="/insights/color-theory-ui-design"
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
                  src="https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg"
                  alt="Typography in UI"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8">
                <p className="text-gray-400 mb-2">May 12, 2023 • 8 min read</p>
                <h3 className="text-xl font-bold mb-4">Typography Fundamentals for Digital Interfaces</h3>
                <p className="text-gray-400 mb-4">
                  A guide to selecting and using typography effectively to enhance readability and brand identity.
                </p>
                <Link
                  href="/insights/typography-fundamentals"
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
                  alt="Micro-interactions"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8">
                <p className="text-gray-400 mb-2">April 28, 2023 • 7 min read</p>
                <h3 className="text-xl font-bold mb-4">The Power of Micro-interactions in UI Design</h3>
                <p className="text-gray-400 mb-4">
                  How small, thoughtful animations and interactions can significantly enhance user experience.
                </p>
                <Link
                  href="/insights/micro-interactions"
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
                  alt="Dark Mode Design"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8">
                <p className="text-gray-400 mb-2">April 15, 2023 • 10 min read</p>
                <h3 className="text-xl font-bold mb-4">Designing for Dark Mode: Best Practices and Considerations</h3>
                <p className="text-gray-400 mb-4">
                  A comprehensive guide to creating effective dark mode versions of your digital products.
                </p>
                <Link
                  href="/insights/dark-mode-design"
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
                  alt="UI Animation"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8">
                <p className="text-gray-400 mb-2">March 30, 2023 • 9 min read</p>
                <h3 className="text-xl font-bold mb-4">Principles of Motion: Animation in User Interfaces</h3>
                <p className="text-gray-400 mb-4">
                  How to use animation purposefully to enhance usability and create delightful experiences.
                </p>
                <Link
                  href="/insights/ui-animation-principles"
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
                  alt="UI Trends"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8">
                <p className="text-gray-400 mb-2">March 15, 2023 • 11 min read</p>
                <h3 className="text-xl font-bold mb-4">UI Design Trends: Balancing Innovation and Usability</h3>
                <p className="text-gray-400 mb-4">
                  How to incorporate current design trends while maintaining a focus on user needs and business goals.
                </p>
                <Link
                  href="/insights/ui-design-trends"
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
          <h2 className="text-3xl font-bold mb-6">Want to learn more about UI Design?</h2>
          <p className="text-xl max-w-2xl mx-auto mb-10 text-gray-300">
            Explore our UI design services and discover how we can help create beautiful, effective interfaces for your
            products.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/services#ui-design">
              <Button className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-6">Our UI Services</Button>
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
