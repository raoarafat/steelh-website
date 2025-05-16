import Link from "next/link"
import { ChevronRight } from "lucide-react"

export function RoleCategories() {
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
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {roleCategories.map((category, index) => (
        <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-bold mb-4 text-[#333]">{category.title}</h3>
          <ul className="space-y-3">
            {category.roles.map((role, roleIndex) => (
              <li key={roleIndex} className="flex items-center justify-between">
                <span>{role}</span>
                <Link href={`/roles/${role.toLowerCase().replace(/\s+/g, "-")}`} className="text-[#4d80e4]">
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}
