import Link from "next/link"
import { ChevronRight } from "lucide-react"

export default function RolesPage() {
  const roleCategories = [
    {
      title: "Developers",
      roles: [
        "Front-end Web Developer",
        "Front-end Mobile Developer",
        "Back-end Developer",
        "Full Stack Developer",
        "Software Engineer",
        "Tech Lead / Architect",
      ],
    },
    {
      title: "Testers",
      roles: [
        "QA Engineer",
        "Lead QA Engineer",
        "QA Automation Engineer",
        "Lead QA Automation Engineer",
        "QA Performance Engineer",
      ],
    },
    {
      title: "Designers",
      roles: ["UI/UX Designer", "Lead UI/UX Designer", "Graphic Designer"],
    },
    {
      title: "Project Management",
      roles: ["Project Manager", "System Analyst", "Scrum Master", "Business Analyst"],
    },
    {
      title: "Others",
      roles: ["Site Reliability Engineer", "Database Engineer", "Dev Ops Engineer", "Data Science Engineer"],
    },
  ]

  return (
    <main className="flex flex-col min-h-screen bg-[#f7f3e9] text-[#333] pt-32">
      <div className="max-w-[1200px] mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold mb-12">IT Roles We Provide</h1>

        <div className="space-y-12">
          {roleCategories.map((category, index) => (
            <div key={index}>
              <h2 className="text-xl font-bold mb-6 pb-2 border-b border-gray-200">{category.title}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.roles.map((role, roleIndex) => (
                  <Link
                    key={roleIndex}
                    href={`/roles/${role.toLowerCase().replace(/\s+/g, "-")}`}
                    className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow flex justify-between items-center border border-[#333]/10 hover:border-[#333]"
                  >
                    <span className="font-medium">{role}</span>
                    <ChevronRight className="w-4 h-4 text-[#4d80e4]" />
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
