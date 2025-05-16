import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { notFound } from "next/navigation"

interface RolePageProps {
  params: {
    role: string
  }
}

export default function RolePage({ params }: RolePageProps) {
  const roleSlug = params.role
  const roleName = roleSlug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")

  // This would typically come from a database or CMS
  const roleDescriptions: Record<string, string> = {
    "front-end-web-developer":
      "Front-end web developers create the user interfaces of websites and web applications, focusing on HTML, CSS, JavaScript, and modern frameworks like React, Vue, or Angular.",
    "front-end-mobile-developer":
      "Front-end mobile developers build user interfaces for mobile applications using technologies like React Native, Flutter, or native iOS/Android development.",
    "back-end-developer":
      "Back-end developers create server-side logic, databases, and APIs that power applications, using languages like Node.js, Python, Java, or PHP.",
    "full-stack-developer":
      "Full stack developers work on both client and server sides, handling everything from user interfaces to databases and server configuration.",
    "software-engineer":
      "Software engineers design, develop, and maintain software systems using engineering principles and best practices.",
    "tech-lead-architect":
      "Tech leads and architects design system architecture, make technology decisions, and guide development teams in implementing solutions.",
    // Add descriptions for other roles as needed
  }

  // If the role doesn't exist in our system, return 404
  if (
    !Object.keys(roleDescriptions).includes(roleSlug) &&
    !roleSlug.includes("qa") &&
    !roleSlug.includes("designer") &&
    !roleSlug.includes("project-manager") &&
    !roleSlug.includes("system-analyst") &&
    !roleSlug.includes("scrum-master") &&
    !roleSlug.includes("business-analyst") &&
    !roleSlug.includes("site-reliability-engineer") &&
    !roleSlug.includes("database-engineer") &&
    !roleSlug.includes("dev-ops-engineer") &&
    !roleSlug.includes("data-science-engineer")
  ) {
    notFound()
  }

  // Default description for roles without specific descriptions
  const roleDescription =
    roleDescriptions[roleSlug] ||
    `Our ${roleName}s are highly skilled professionals with expertise in their domain, ready to help your business succeed with the latest technologies and best practices.`

  return (
    <main className="flex flex-col min-h-screen bg-[#f7f3e9] text-[#333] pt-32">
      <div className="max-w-[1200px] mx-auto px-6 py-16">
        <div className="mb-8">
          <Link href="/roles" className="text-[#4d80e4] hover:underline">
            ← Back to all roles
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <h1 className="text-4xl font-bold mb-6">{roleName}</h1>
            <p className="text-lg mb-8 text-[#555]">{roleDescription}</p>

            <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
              <h2 className="text-xl font-bold mb-4">Key Skills</h2>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-[#4d80e4] mr-2">•</span>
                  <span>Technical expertise in relevant technologies</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#4d80e4] mr-2">•</span>
                  <span>Problem-solving and analytical thinking</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#4d80e4] mr-2">•</span>
                  <span>Effective communication and collaboration</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#4d80e4] mr-2">•</span>
                  <span>Remote work proficiency</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#4d80e4] mr-2">•</span>
                  <span>Adaptability and continuous learning</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-bold mb-4">Why Choose Our {roleName}s</h2>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-[#4d80e4] mr-2">•</span>
                  <span>Rigorous vetting process ensures top quality</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#4d80e4] mr-2">•</span>
                  <span>Experience working with global teams</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#4d80e4] mr-2">•</span>
                  <span>Competitive rates with flexible engagement models</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#4d80e4] mr-2">•</span>
                  <span>Ongoing support and performance monitoring</span>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
              <h2 className="text-xl font-bold mb-6">Hire a {roleName}</h2>
              <p className="mb-6 text-[#555]">
                Looking for a skilled {roleName} for your team? Contact us to discuss your requirements and how we can
                help.
              </p>
              <Link href="/contact">
                <Button className="w-full bg-[#4d80e4] text-white hover:bg-[#3a6ad4]">Contact Us</Button>
              </Link>
            </div>

            <div className="relative h-[300px] rounded-lg overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg"
                alt={`${roleName} working`}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
