"use client"

import Link from "next/link"

interface MegaMenuProps {
  isOpen: boolean
  onClose: () => void
  activeMenu: string | null
  onMouseEnter: () => void
  onMouseLeave: () => void
}

export function MegaMenu({ isOpen, onClose, activeMenu, onMouseEnter, onMouseLeave }: MegaMenuProps) {
  if (!isOpen) return null

  const renderContent = () => {
    switch (activeMenu) {
      case "roles":
        return (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-archivo text-2xl mb-6 text-[#333]">Developers</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/roles/front-end-web-developer"
                    className="text-[#333] hover:text-black font-medium text-base"
                    onClick={onClose}
                  >
                    Front-end Web Developer
                  </Link>
                </li>
                <li>
                  <Link
                    href="/roles/front-end-mobile-developer"
                    className="text-[#333] hover:text-black font-medium text-base"
                    onClick={onClose}
                  >
                    Front-end Mobile Developer
                  </Link>
                </li>
                <li>
                  <Link
                    href="/roles/back-end-developer"
                    className="text-[#333] hover:text-black font-medium text-base"
                    onClick={onClose}
                  >
                    Back-end Developer
                  </Link>
                </li>
                <li>
                  <Link
                    href="/roles/full-stack-developer"
                    className="text-[#333] hover:text-black font-medium text-base"
                    onClick={onClose}
                  >
                    Full Stack Developer
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-archivo text-2xl mb-6 text-[#333]">Testers & Designers</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/roles/qa-engineer"
                    className="text-[#333] hover:text-black font-medium text-base"
                    onClick={onClose}
                  >
                    QA Engineer
                  </Link>
                </li>
                <li>
                  <Link
                    href="/roles/qa-automation-engineer"
                    className="text-[#333] hover:text-black font-medium text-base"
                    onClick={onClose}
                  >
                    QA Automation Engineer
                  </Link>
                </li>
                <li>
                  <Link
                    href="/roles/ui-ux-designer"
                    className="text-[#333] hover:text-black font-medium text-base"
                    onClick={onClose}
                  >
                    UI/UX Designer
                  </Link>
                </li>
                <li>
                  <Link
                    href="/roles/graphic-designer"
                    className="text-[#333] hover:text-black font-medium text-base"
                    onClick={onClose}
                  >
                    Graphic Designer
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-archivo text-2xl mb-6 text-[#333]">Management & Specialized</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/roles/project-manager"
                    className="text-[#333] hover:text-black font-medium text-base"
                    onClick={onClose}
                  >
                    Project Manager
                  </Link>
                </li>
                <li>
                  <Link
                    href="/roles/scrum-master"
                    className="text-[#333] hover:text-black font-medium text-base"
                    onClick={onClose}
                  >
                    Scrum Master
                  </Link>
                </li>
                <li>
                  <Link
                    href="/roles/dev-ops-engineer"
                    className="text-[#333] hover:text-black font-medium text-base"
                    onClick={onClose}
                  >
                    DevOps Engineer
                  </Link>
                </li>
                <li>
                  <Link
                    href="/roles/data-science-engineer"
                    className="text-[#333] hover:text-black font-medium text-base"
                    onClick={onClose}
                  >
                    Data Science Engineer
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div
      className="absolute left-0 w-full bg-[#f7f3e9] shadow-md border-t border-gray-200 z-50"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="max-w-[1200px] mx-auto px-6 py-4">{renderContent()}</div>
    </div>
  )
}
