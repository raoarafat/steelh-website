import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { HubspotForm } from "@/components/hubspot-form"

export default function InsightsPage() {
  return (
    <main className="flex flex-col min-h-screen bg-[#f7f3e9] text-[#333]">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <Image
          src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg"
          alt="Insights"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="container relative z-10 text-center text-white">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Insights</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-300">
            Thoughts, perspectives, and expertise from our team
          </p>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-24 bg-black text-white">
        <div className="container">
          <h2 className="text-3xl font-bold mb-16 text-center">Featured Article</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/6168/hands-woman-laptop-notebook.jpg"
                alt="The Digital Nomad Revolution"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">
                The Digital Nomad Revolution: Transforming Work in the Global Economy
              </h3>
              <p className="text-gray-400 mb-4">May 15, 2023 • 10 min read</p>
              <p className="text-lg mb-6 text-gray-300">
                The rise of digital nomadism is reshaping how businesses operate and talent is sourced. Discover how
                companies are leveraging global talent pools while professionals embrace location independence for
                better work-life balance.
              </p>
              <Link href="/insights/digital-nomad-revolution">
                <Button
                  variant="outline"
                  className="border-[#333] text-[#333] hover:bg-[#333] hover:text-[#f7f3e9] rounded-full"
                >
                  Read Article
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Articles */}
      <section className="py-24 bg-black">
        <div className="container">
          <h2 className="text-3xl font-bold mb-16 text-center">Recent Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Article 1 - Digital Nomad Cost Efficiency */}
            <div className="bg-[#f7f3e9] rounded-lg overflow-hidden shadow-sm border border-[#333]/20">
              <div className="relative h-64">
                <Image
                  src="https://images.pexels.com/photos/3760529/pexels-photo-3760529.jpeg"
                  alt="Cost Efficiency of Digital Nomad Teams"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8">
                <p className="text-gray-400 mb-2">April 28, 2023 • 7 min read</p>
                <h3 className="text-xl font-bold mb-4">The Cost Efficiency of Digital Nomad Teams</h3>
                <p className="text-gray-400 mb-4">
                  How distributed teams can significantly reduce operational costs while maintaining or improving
                  productivity and work quality.
                </p>
                <Link
                  href="/insights/digital-nomad-cost-efficiency"
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

            {/* Article 2 - Global Talent Access */}
            <div className="bg-[#f7f3e9] rounded-lg overflow-hidden shadow-sm border border-[#333]/20">
              <div className="relative h-64">
                <Image
                  src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg"
                  alt="Accessing Global Talent Pools"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8">
                <p className="text-gray-400 mb-2">April 15, 2023 • 8 min read</p>
                <h3 className="text-xl font-bold mb-4">Accessing Global Talent: The Digital Nomad Advantage</h3>
                <p className="text-gray-400 mb-4">
                  How embracing remote work opens up unprecedented access to specialized skills and diverse perspectives
                  from around the world.
                </p>
                <Link
                  href="/insights/global-talent-access"
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

            {/* Article 3 - Building Remote Culture */}
            <div className="bg-[#f7f3e9] rounded-lg overflow-hidden shadow-sm border border-[#333]/20">
              <div className="relative h-64">
                <Image
                  src="https://images.pexels.com/photos/3153198/pexels-photo-3153198.jpeg"
                  alt="Building Strong Remote Culture"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8">
                <p className="text-gray-400 mb-2">March 30, 2023 • 6 min read</p>
                <h3 className="text-xl font-bold mb-4">Building Strong Culture in Distributed Teams</h3>
                <p className="text-gray-400 mb-4">
                  Strategies for fostering connection, collaboration, and shared purpose among team members working
                  across different time zones and cultures.
                </p>
                <Link
                  href="/insights/remote-team-culture"
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

      {/* More Digital Nomad Articles */}
      <section className="py-24 bg-black">
        <div className="container">
          <h2 className="text-3xl font-bold mb-16 text-center">Digital Nomad Insights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Article 4 */}
            <div className="flex flex-col md:flex-row gap-8">
              <div className="relative w-full md:w-48 h-48 flex-shrink-0 rounded-lg overflow-hidden">
                <Image
                  src="https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg"
                  alt="Digital Nomad Tools"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-gray-400 mb-2">March 15, 2023 • 5 min read</p>
                <h3 className="text-xl font-bold mb-3">Essential Tools for Digital Nomad Teams</h3>
                <p className="text-gray-400 mb-4">
                  A comprehensive guide to the software and platforms that make remote collaboration seamless and
                  productive.
                </p>
                <Link
                  href="/insights/digital-nomad-tools"
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
            <div className="flex flex-col md:flex-row gap-8">
              <div className="relative w-full md:w-48 h-48 flex-shrink-0 rounded-lg overflow-hidden">
                <Image
                  src="https://images.pexels.com/photos/3987020/pexels-photo-3987020.jpeg"
                  alt="Legal Considerations"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-gray-400 mb-2">February 28, 2023 • 9 min read</p>
                <h3 className="text-xl font-bold mb-3">Legal Considerations for Global Remote Teams</h3>
                <p className="text-gray-400 mb-4">
                  Navigating the complex legal landscape of international employment, taxes, and compliance for
                  distributed teams.
                </p>
                <Link
                  href="/insights/legal-considerations-remote-teams"
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
            <div className="flex flex-col md:flex-row gap-8">
              <div className="relative w-full md:w-48 h-48 flex-shrink-0 rounded-lg overflow-hidden">
                <Image
                  src="https://images.pexels.com/photos/4065876/pexels-photo-4065876.jpeg"
                  alt="Remote Work Productivity"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-gray-400 mb-2">February 15, 2023 • 6 min read</p>
                <h3 className="text-xl font-bold mb-3">Maximizing Productivity in Remote Work Environments</h3>
                <p className="text-gray-400 mb-4">
                  Strategies and best practices for maintaining high productivity and focus while working remotely from
                  anywhere in the world.
                </p>
                <Link
                  href="/insights/remote-productivity"
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

            {/* Article 7 */}
            <div className="flex flex-col md:flex-row gap-8">
              <div className="relative w-full md:w-48 h-48 flex-shrink-0 rounded-lg overflow-hidden">
                <Image
                  src="https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg"
                  alt="Digital Nomad Lifestyle"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-gray-400 mb-2">January 30, 2023 • 7 min read</p>
                <h3 className="text-xl font-bold mb-3">The Digital Nomad Lifestyle: Balancing Work and Exploration</h3>
                <p className="text-gray-400 mb-4">
                  How to successfully blend professional responsibilities with the freedom to explore new cultures and
                  environments.
                </p>
                <Link
                  href="/insights/digital-nomad-lifestyle"
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

      {/* Categories */}
      <section className="py-24 bg-black text-white">
        <div className="container">
          <h2 className="text-3xl font-bold mb-16 text-center">Browse by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link
              href="/insights/category/ux-design"
              className="bg-black p-8 rounded-lg text-center hover:bg-zinc-900 transition-colors border border-zinc-800"
            >
              <h3 className="text-xl font-bold mb-2">UX Design</h3>
              <p className="text-gray-400">12 articles</p>
            </Link>
            <Link
              href="/insights/category/ui-design"
              className="bg-black p-8 rounded-lg text-center hover:bg-zinc-900 transition-colors border border-zinc-800"
            >
              <h3 className="text-xl font-bold mb-2">UI Design</h3>
              <p className="text-gray-400">8 articles</p>
            </Link>
            <Link
              href="/insights/category/development"
              className="bg-black p-8 rounded-lg text-center hover:bg-zinc-900 transition-colors border border-zinc-800"
            >
              <h3 className="text-xl font-bold mb-2">Development</h3>
              <p className="text-gray-400">9 articles</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 bg-[#f7f3e9] text-[#333]">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">Subscribe to Our Newsletter</h2>
          <p className="text-xl max-w-2xl mx-auto mb-10 text-gray-300">
            Stay up to date with the latest insights, trends, and news from our team.
          </p>
          <div className="max-w-md mx-auto">
            <HubspotForm />
          </div>
        </div>
      </section>
    </main>
  )
}
