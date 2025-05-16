import Image from "next/image"
import Link from "next/link"
import { HubspotForm } from "@/components/hubspot-form"

export default function EducationPage() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <Image
          src="https://images.pexels.com/photos/256417/pexels-photo-256417.jpeg"
          alt="Education design solutions"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="container relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Education Experience Design</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Creating engaging digital learning experiences that inspire and educate
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Transforming Education Through Design</h2>
              <p className="text-lg mb-6">
                At BlackHives, we understand the unique challenges and opportunities in educational technology. Our
                specialized team creates digital experiences that make learning more accessible, engaging, and effective
                for students of all ages.
              </p>
              <p className="text-lg">
                From K-12 platforms to higher education portals and corporate learning systems, we design solutions that
                enhance the educational journey and improve outcomes for learners and educators alike.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg"
                alt="Digital learning experience"
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
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Education Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="relative h-64">
                <Image
                  src="https://images.pexels.com/photos/4145153/pexels-photo-4145153.jpeg"
                  alt="K-12 learning platform"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">K-12 Learning Platform</h3>
                <p className="text-gray-600 mb-4">
                  Designed an engaging digital platform for K-12 students, increasing student engagement by 40% and
                  improving learning outcomes.
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
                  src="https://images.pexels.com/photos/4144222/pexels-photo-4144222.jpeg"
                  alt="University portal redesign"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">University Portal Redesign</h3>
                <p className="text-gray-600 mb-4">
                  Reimagined the digital experience for a leading university, improving student satisfaction scores by
                  35% and streamlining administrative processes.
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
                  src="https://images.pexels.com/photos/4145190/pexels-photo-4145190.jpeg"
                  alt="Corporate learning system"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Corporate Learning System</h3>
                <p className="text-gray-600 mb-4">
                  Developed an intuitive learning management system for corporate training, resulting in 50% higher
                  course completion rates.
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
          <h2 className="text-3xl font-bold mb-12 text-center">Our Education Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 border border-gray-200 rounded-lg">
              <h3 className="text-xl font-bold mb-3">EdTech UX/UI Design</h3>
              <p className="text-gray-600">
                User-centered design for educational technology platforms that enhance learning experiences.
              </p>
            </div>
            <div className="p-6 border border-gray-200 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Learning Experience Design</h3>
              <p className="text-gray-600">
                Strategic design of digital learning journeys that improve engagement and outcomes.
              </p>
            </div>
            <div className="p-6 border border-gray-200 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Educational Content Design</h3>
              <p className="text-gray-600">
                Visual design for educational content that makes complex information accessible and engaging.
              </p>
            </div>
            <div className="p-6 border border-gray-200 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Accessibility Optimization</h3>
              <p className="text-gray-600">
                Ensuring educational platforms are accessible to all learners, regardless of abilities.
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
              "BlackHives transformed our outdated learning platform into an engaging, intuitive experience. Their
              understanding of educational design principles helped us create a solution that truly resonates with both
              students and educators."
            </blockquote>
            <div className="flex items-center justify-center">
              <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                <Image
                  src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
                  alt="Dr. Michael Chen"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-left">
                <p className="font-bold">Dr. Michael Chen</p>
                <p className="text-gray-600">Director of Digital Learning, Horizon University</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-black text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to transform your educational platform?</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Let's create digital learning experiences that inspire and educate.
          </p>
          <div className="max-w-md mx-auto">
            <HubspotForm />
          </div>
        </div>
      </section>
    </main>
  )
}
