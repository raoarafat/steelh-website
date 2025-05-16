import Image from "next/image"
import Link from "next/link"

export default function HospitalityPage() {
  return (
    <main className="flex flex-col min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <Image
          src="https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg"
          alt="Hospitality design solutions"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="container relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Hospitality Experience Design</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Creating memorable digital experiences that enhance guest satisfaction and operational efficiency
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-black">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Elevating Guest Experiences Through Design</h2>
              <p className="text-lg mb-6 text-gray-300">
                In the competitive hospitality industry, exceptional digital experiences are crucial for attracting and
                retaining guests. At BlackHives, we help hospitality brands create seamless digital journeys that
                delight guests and streamline operations.
              </p>
              <p className="text-lg text-gray-300">
                From booking platforms to in-room digital experiences, we blend aesthetics with functionality to create
                memorable interactions that build brand loyalty and increase revenue.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/1838554/pexels-photo-1838554.jpeg"
                alt="Hospitality digital experience"
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
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Hospitality Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="bg-black rounded-lg overflow-hidden shadow-lg border border-zinc-800">
              <div className="relative h-64">
                <Image
                  src="https://images.pexels.com/photos/2507010/pexels-photo-2507010.jpeg"
                  alt="Luxury hotel booking platform"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Luxury Hotel Booking Platform</h3>
                <p className="text-gray-400 mb-4">
                  Redesigned the online booking experience for a luxury hotel chain, resulting in a 45% increase in
                  direct bookings and a 30% reduction in booking abandonment.
                </p>
                <Link href="/work/luxury-hotel-booking" className="text-white font-medium hover:underline">
                  View case study →
                </Link>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-black rounded-lg overflow-hidden shadow-lg border border-zinc-800">
              <div className="relative h-64">
                <Image
                  src="https://images.pexels.com/photos/3201763/pexels-photo-3201763.jpeg"
                  alt="Restaurant ordering app"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Restaurant Ordering App</h3>
                <p className="text-gray-400 mb-4">
                  Designed an intuitive mobile ordering experience for a restaurant group, driving a 60% increase in
                  digital orders and improving operational efficiency.
                </p>
                <Link href="/work/restaurant-ordering-app" className="text-white font-medium hover:underline">
                  View case study →
                </Link>
              </div>
            </div>

            {/* Project 3 */}
            <div className="bg-black rounded-lg overflow-hidden shadow-lg border border-zinc-800">
              <div className="relative h-64">
                <Image
                  src="https://images.pexels.com/photos/3771110/pexels-photo-3771110.jpeg"
                  alt="Hotel guest experience platform"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Hotel Guest Experience Platform</h3>
                <p className="text-gray-400 mb-4">
                  Developed a comprehensive digital platform connecting guests with hotel services, increasing guest
                  satisfaction scores by 35% and ancillary revenue by 28%.
                </p>
                <Link href="/work/hotel-guest-platform" className="text-white font-medium hover:underline">
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
          <h2 className="text-3xl font-bold mb-12 text-center">Our Hospitality Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 border border-zinc-800 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Booking Experience Design</h3>
              <p className="text-gray-400">
                Conversion-focused booking platforms that showcase properties effectively and streamline the reservation
                process.
              </p>
            </div>
            <div className="p-6 border border-zinc-800 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Guest Mobile Applications</h3>
              <p className="text-gray-400">
                Intuitive mobile apps that enhance the guest experience before, during, and after their stay.
              </p>
            </div>
            <div className="p-6 border border-zinc-800 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Digital Concierge Services</h3>
              <p className="text-gray-400">
                AI-powered digital concierge solutions that provide personalized recommendations and assistance.
              </p>
            </div>
            <div className="p-6 border border-zinc-800 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Staff Efficiency Tools</h3>
              <p className="text-gray-400">
                Digital tools that streamline operations, improve communication, and enhance service delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-16 bg-black">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg"
                alt="Our approach to hospitality design"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Approach to Hospitality Design</h2>
              <p className="text-lg mb-6 text-gray-300">
                We understand that in hospitality, every touchpoint matters. Our design process begins with deep
                research into guest behaviors, needs, and pain points. We collaborate closely with hospitality
                professionals to ensure our solutions enhance both the guest experience and operational efficiency.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-white text-black rounded-full w-6 h-6 flex items-center justify-center mt-1 mr-3">
                    <span className="text-sm font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">Guest Journey Mapping</h3>
                    <p className="text-gray-400">
                      We map the entire guest journey to identify opportunities for digital enhancement.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-white text-black rounded-full w-6 h-6 flex items-center justify-center mt-1 mr-3">
                    <span className="text-sm font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">Service Design Integration</h3>
                    <p className="text-gray-400">
                      We ensure digital solutions integrate seamlessly with physical service touchpoints.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-white text-black rounded-full w-6 h-6 flex items-center justify-center mt-1 mr-3">
                    <span className="text-sm font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">Brand Experience Alignment</h3>
                    <p className="text-gray-400">
                      We create digital experiences that reinforce and enhance your brand promise.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 bg-black">
        <div className="container">
          <div className="bg-zinc-900 p-12 rounded-lg border border-zinc-800">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="relative w-24 h-24 rounded-full overflow-hidden flex-shrink-0">
                <Image
                  src="https://images.pexels.com/photos/5397723/pexels-photo-5397723.jpeg"
                  alt="Client testimonial"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-xl italic mb-6 text-gray-300">
                  "BlackHives transformed our digital guest experience from an afterthought to a competitive advantage.
                  Their team took the time to understand our brand and our guests, creating intuitive digital
                  touchpoints that have significantly improved satisfaction scores and operational efficiency."
                </p>
                <div>
                  <h4 className="text-lg font-bold">Sarah Johnson</h4>
                  <p className="text-gray-400">Director of Digital Experience, Luxury Hotel Group</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-black">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Guest Experience?</h2>
          <p className="text-xl max-w-2xl mx-auto mb-10 text-gray-300">
            Let's discuss how our design expertise can help your hospitality brand create memorable digital experiences
            that delight guests and drive business results.
          </p>
          <Link href="/contact" className="bg-white text-black hover:bg-gray-200 px-8 py-3 font-medium inline-block">
            Get in Touch
          </Link>
        </div>
      </section>
    </main>
  )
}
