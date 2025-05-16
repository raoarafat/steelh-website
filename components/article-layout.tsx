import type React from "react"
import Image from "next/image"
import Link from "next/link"
import { HubspotForm } from "@/components/hubspot-form"

interface Author {
  name: string
  role: string
  image: string
}

interface ArticleProps {
  title: string
  date: string
  readTime: string
  heroImage: string
  author: Author
  children: React.ReactNode
  category: {
    name: string
    slug: string
  }
  relatedArticles: {
    title: string
    slug: string
    image: string
    excerpt: string
    date: string
    readTime: string
  }[]
}

export function ArticleLayout({
  title,
  date,
  readTime,
  heroImage,
  author,
  children,
  category,
  relatedArticles,
}: ArticleProps) {
  return (
    <main className="flex flex-col min-h-screen bg-black text-white pt-24">
      {/* Hero Section */}
      <section className="py-12 md:py-20 bg-black">
        <div className="max-w-[800px] mx-auto px-6">
          <Link
            href={`/insights/category/${category.slug}`}
            className="text-sm text-gray-400 hover:text-white transition-colors mb-4 inline-block"
          >
            {category.name}
          </Link>
          <h1 className="text-3xl md:text-5xl font-bold mb-6">{title}</h1>
          <div className="flex items-center justify-between flex-wrap gap-4 mb-12">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                <Image
                  src={author.image || "/placeholder.svg"}
                  alt={author.name}
                  width={40}
                  height={40}
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-sm font-medium">{author.name}</p>
                <p className="text-xs text-gray-400">{author.role}</p>
              </div>
            </div>
            <div className="text-sm text-gray-400">
              {date} • {readTime}
            </div>
          </div>
          <div className="relative w-full h-[400px] rounded-lg overflow-hidden mb-12">
            <Image src={heroImage || "/placeholder.svg"} alt={title} fill className="object-cover" priority />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12 bg-black">
        <div className="max-w-[800px] mx-auto px-6">
          <article className="prose prose-lg prose-invert max-w-none">{children}</article>
        </div>
      </section>

      {/* Author Bio */}
      <section className="py-12 bg-black border-t border-zinc-800">
        <div className="max-w-[800px] mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6 bg-zinc-900 p-8 rounded-lg">
            <div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0">
              <Image
                src={author.image || "/placeholder.svg"}
                alt={author.name}
                width={80}
                height={80}
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2 text-center md:text-left">{author.name}</h3>
              <p className="text-sm text-gray-400 mb-4 text-center md:text-left">{author.role}</p>
              <p className="text-gray-300">
                A passionate writer and expert in digital transformation, specializing in remote work trends and
                strategies for building effective distributed teams.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-12 bg-black border-t border-zinc-800">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-2xl font-bold mb-8">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedArticles.map((article, index) => (
              <div key={index} className="bg-black rounded-lg overflow-hidden shadow-sm border border-zinc-800">
                <div className="relative h-48">
                  <Image src={article.image || "/placeholder.svg"} alt={article.title} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <p className="text-gray-400 mb-2 text-sm">
                    {article.date} • {article.readTime}
                  </p>
                  <h3 className="text-lg font-bold mb-3">{article.title}</h3>
                  <p className="text-gray-400 mb-4 text-sm">{article.excerpt}</p>
                  <Link
                    href={`/insights/${article.slug}`}
                    className="text-white font-medium hover:underline inline-flex items-center text-sm"
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
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-black border-t border-zinc-800">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-lg max-w-2xl mx-auto mb-8 text-gray-300">
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
