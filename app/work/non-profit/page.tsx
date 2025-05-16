import Image from "next/image"
import Link from "next/link"
import { HubspotForm } from "@/components/hubspot-form"

export default function NonProfitPage() {
  return (
    <main className="flex flex-col min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <Image
          src="https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg"
          alt="Non-Profit design solutions"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="container relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Non-Profit Experience Design</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Creating impactful digital experiences that amplify your mission and drive engagement
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-black">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Amplifying Your Mission Through Design</h2>
              <p className="text-lg mb-6 text-gray-300">
                For non-profit organizations, effective digital experiences are crucial for communicating your mission,
                engaging supporters, and driving donations. At BlackHives, we help non-profits create compelling digital
                experiences that inspire action and maximize impact.
              </p>
              <p className="text-lg text-gray-300">
                From donation platforms to awareness campaigns, we blend purpose-driven design with strategic thinking
                to create digital solutions that advance your cause and connect with your audience.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg"
                alt="Non-profit digital experience"
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
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Non-Profit Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="bg-black rounded-lg overflow-hidden shadow-lg border border-zinc-800">
              <div className="relative h-64">
                <Image
                  src="https://images.pexels.com/photos/6994992/pexels-photo-6994992.jpeg"
                  alt="Donation platform redesign"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Donation Platform Redesign</h3>
                <p className="text-gray-400 mb-4">
                  Redesigned the donation experience for an environmental non-profit, resulting in a 50% increase in
                  online donations and improved donor retention.
                </p>
                <Link href="/work/donation-platform-redesign" className="text-white font-medium hover:underline">
                  View case study →
                </Link>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-black rounded-lg overflow-hidden shadow-lg border border-zinc-800">
              <div className="relative h-64">
                <Image
                  src="https://images.pexels.com/photos/6646919/pexels-photo-6646919.jpeg"
                  alt="Awareness campaign website"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Awareness Campaign Website</h3>
                <p className="text-gray-400 mb-4">
                  Developed an interactive campaign website for a human rights organization, driving engagement and
                  increasing volunteer sign-ups by 35%.
                </p>
                <Link href="/work/awareness-campaign-website" className="text-white font-medium hover:underline">
                  View case study →
                </Link>
              </div>
            </div>

            {/* Project 3 */}
            <div className="bg-black rounded-lg overflow-hidden shadow-lg border border-zinc-800">
              <div className="relative h-64">
                <Image
                  src="https://images.pexels.com/photos/6647037/pexels-photo-6647037.jpeg"
                  alt="Volunteer management app"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Volunteer Management App</h3>
                <p className="text-gray-400 mb-4">
                  Created a mobile application for volunteer coordination, improving operational efficiency and
                  volunteer satisfaction for a community service organization.
                </p>
                <Link href="/work/volunteer-management-app" className="text-white font-medium hover:underline">
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
          <h2 className="text-3xl font-bold mb-12 text-center">Our Non-Profit Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 border border-zinc-800 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Donation Platforms</h3>
              <p className="text-gray-400">
                User-friendly donation experiences that maximize conversion and build donor relationships.
              </p>
            </div>
            <div className="p-6 border border-zinc-800 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Campaign Websites</h3>
              <p className="text-gray-400">
                Compelling campaign sites that communicate your mission and inspire action.
              </p>
            </div>
            <div className="p-6 border border-zinc-800 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Impact Visualization</h3>
              <p className="text-gray-400">
                Interactive data visualizations that demonstrate your organization's impact and outcomes.
              </p>
            </div>
            <div className="p-6 border border-zinc-800 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Non-Profit Branding</h3>
              <p className="text-gray-400">
                Purpose-driven brand identities that communicate your values and connect with supporters.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Special Offer Section */}
      <section className="py-16 bg-black">
        <div className="container">
          <div className="bg-zinc-900 p-12 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Special Non-Profit Package</h2>
                <p className="text-lg mb-6 text-gray-300">
                  We're committed to supporting organizations that make a positive impact. Our special non-profit
                  package offers comprehensive digital solutions at a reduced rate to help you maximize your resources.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-white mr-2 mt-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-300">8-page responsive website</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-white mr-2 mt-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-300">Donation integration</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-white mr-2 mt-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-300">Basic brand identity</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-white mr-2 mt-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-300">Social media integration</span>
                  </li>
                </ul>
                <p className="text-2xl font-bold mb-6">$2,999</p>
                <Link href="/services#non-profit-package" className="bg-white text-black px-6 py-3 inline-block">
                  Learn More
                </Link>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="https://images.pexels.com/photos/6646871/pexels-photo-6646871.jpeg"
                  alt="Non-profit special offer"
                  fill
                  className="object-cover"
                />
              </div>
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
              "BlackHives understood our mission from day one and created a digital experience that truly resonates with
              our supporters. Their work has significantly increased our online donations and helped us reach a broader
              audience."
            </blockquote>
            <div className="flex items-center justify-center">
              <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                <Image
                  src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg"
                  alt="Sarah Williams"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-left">
                <p className="font-bold">Sarah Williams</p>
                <p className="text-gray-600">Executive Director, Global Hope Initiative</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-black text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to amplify your mission?</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Let's discuss how our design expertise can help your non-profit organization create meaningful digital
            experiences that drive engagement and support.
          </p>
          <div className="max-w-md mx-auto">
            <HubspotForm />
          </div>
        </div>
      </section>
    </main>
  )
}
