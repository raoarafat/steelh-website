import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function DevelopmentCategoryPage() {
  return (
    <main className="flex flex-col min-h-screen bg-black text-white pt-16">
      {/* Hero Section */}
      <section className="h-[50vh] flex items-center">
        <div className="max-w-[1200px] mx-auto px-6 w-full">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Development Insights</h1>
          <p className="text-xl md:text-2xl max-w-2xl text-gray-300 font-light">
            Exploring web development trends, best practices, and innovative technologies
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
                src="https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg"
                alt="Modern Web Architecture"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Modern Web Architecture: Building for Performance and Scale</h3>
              <p className="text-gray-400 mb-4">June 8, 2023 • 16 min read</p>
              <p className="text-lg mb-6 text-gray-300">
                Explore the latest approaches to web architecture that prioritize performance, scalability, and
                maintainability in today's complex digital landscape.
              </p>
              <Link href="/insights/modern-web-architecture">
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
          <h2 className="text-3xl font-bold mb-16">All Development Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Article 1 */}
            <div className="bg-black rounded-lg overflow-hidden shadow-sm border border-zinc-800">
              <div className="relative h-64">
                <Image
                  src="https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg"
                  alt="Frontend Frameworks"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8">
                <p className="text-gray-400 mb-2">May 22, 2023 • 14 min read</p>
                <h3 className="text-xl font-bold mb-4">Frontend Frameworks in 2023: Choosing the Right Tool</h3>
                <p className="text-gray-400 mb-4">
                  A comparative analysis of modern frontend frameworks and how to select the best one for your project.
                </p>
                <Link
                  href="/insights/frontend-frameworks-2023"
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
                  alt="API Design"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8">
                <p className="text-gray-400 mb-2">May 15, 2023 • 12 min read</p>
                <h3 className="text-xl font-bold mb-4">RESTful API Design: Best Practices for Developers</h3>
                <p className="text-gray-400 mb-4">
                  Guidelines for creating intuitive, efficient, and maintainable APIs that developers will love to use.
                </p>
                <Link
                  href="/insights/restful-api-design"
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
                  alt="Web Performance"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8">
                <p className="text-gray-400 mb-2">April 28, 2023 • 10 min read</p>
                <h3 className="text-xl font-bold mb-4">Web Performance Optimization: A Practical Guide</h3>
                <p className="text-gray-400 mb-4">
                  Techniques and strategies for improving website performance and delivering better user experiences.
                </p>
                <Link
                  href="/insights/web-performance-optimization"
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
                  alt="Serverless Architecture"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8">
                <p className="text-gray-400 mb-2">April 15, 2023 • 13 min read</p>
                <h3 className="text-xl font-bold mb-4">Serverless Architecture: Benefits and Implementation</h3>
                <p className="text-gray-400 mb-4">
                  How serverless computing is changing web development and when it makes sense for your projects.
                </p>
                <Link
                  href="/insights/serverless-architecture"
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
                  alt="Accessibility Development"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8">
                <p className="text-gray-400 mb-2">March 30, 2023 • 11 min read</p>
                <h3 className="text-xl font-bold mb-4">Implementing Web Accessibility: A Developer's Guide</h3>
                <p className="text-gray-400 mb-4">
                  Practical approaches to building accessible websites that comply with WCAG standards.
                </p>
                <Link
                  href="/insights/web-accessibility-implementation"
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
                  alt="DevOps Practices"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8">
                <p className="text-gray-400 mb-2">March 15, 2023 • 15 min read</p>
                <h3 className="text-xl font-bold mb-4">DevOps Best Practices for Modern Web Development</h3>
                <p className="text-gray-400 mb-4">
                  How to implement effective DevOps processes that improve collaboration and streamline deployment.
                </p>
                <Link
                  href="/insights/devops-best-practices"
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
          <h2 className="text-3xl font-bold mb-6">Want to learn more about Development?</h2>
          <p className="text-xl max-w-2xl mx-auto mb-10 text-gray-300">
            Explore our development services and discover how we can help bring your digital products to life with
            clean, efficient code.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/services#development">
              <Button className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-6">
                Our Development Services
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
