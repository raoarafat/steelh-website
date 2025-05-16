import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#f7f3e9] text-[#333]">
      <div className="max-w-[1200px] mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Column 1: Logo and About */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <Image src="/images/logo.png" alt="Steel Horizon" width={200} height={55} />
            </Link>
            <p className="text-gray-600 mb-6">
              Connecting businesses with exceptional IT professionals worldwide, enabling remote work excellence and
              digital innovation.
            </p>
            {/* Social media links removed as requested */}
          </div>

          {/* Column 2: Services */}
          <div>
            <h3 className="text-lg font-bold mb-6">Services</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/services#it-staffing" className="text-gray-600 hover:text-black transition-colors">
                  IT Staffing
                </Link>
              </li>
              <li>
                <Link href="/services#remote-teams" className="text-gray-600 hover:text-black transition-colors">
                  Remote Teams
                </Link>
              </li>
              <li>
                <Link
                  href="/services#digital-nomad-solutions"
                  className="text-gray-600 hover:text-black transition-colors"
                >
                  Digital Nomad Solutions
                </Link>
              </li>
              <li>
                <Link href="/services#project-based" className="text-gray-600 hover:text-black transition-colors">
                  Project-Based Solutions
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Roles */}
          <div>
            <h3 className="text-lg font-bold mb-6">Roles</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/roles#developers" className="text-gray-600 hover:text-black transition-colors">
                  Developers
                </Link>
              </li>
              <li>
                <Link href="/roles#testers" className="text-gray-600 hover:text-black transition-colors">
                  Testers
                </Link>
              </li>
              <li>
                <Link href="/roles#designers" className="text-gray-600 hover:text-black transition-colors">
                  Designers
                </Link>
              </li>
              <li>
                <Link href="/roles#project-management" className="text-gray-600 hover:text-black transition-colors">
                  Project Management
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="text-lg font-bold mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-2 text-gray-600 flex-shrink-0 mt-1" size={18} />
                <span className="text-gray-600">
                  No. B-09-21, Boulevard 51, Jalan SS9A/18, Seksyen 51A, 47300 Petaling Jaya, Selangor, Malaysia
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 text-gray-600" size={18} />
                <a href="tel:+60122219647" className="text-gray-600 hover:text-black transition-colors">
                  +60 12-221 9647
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 text-gray-600" size={18} />
                <a href="mailto:info@steelhs.com" className="text-gray-600 hover:text-black transition-colors">
                  info@steelhs.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-300 mt-12 pt-8 text-center text-gray-600">
          <p>&copy; {new Date().getFullYear()} Steel Horizon Solutions Sdn Bhd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
