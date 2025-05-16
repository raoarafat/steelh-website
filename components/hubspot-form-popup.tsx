"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"
import { HubspotForm } from "./hubspot-form"

interface HubspotFormPopupProps {
  isOpen: boolean
  onClose: () => void
  title?: string
  subtitle?: string
}

export function HubspotFormPopup({ isOpen, onClose, title = "Get Started", subtitle }: HubspotFormPopupProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    if (isOpen) {
      document.body.style.overflow = "hidden"
    }

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isOpen])

  if (!mounted || !isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 p-4">
      <div className="bg-black border border-zinc-800 rounded-lg w-full max-w-lg p-8 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
          aria-label="Close popup"
        >
          <X size={24} />
        </button>

        <h2 className="text-3xl font-bold mb-2">{title}</h2>
        {subtitle && <p className="text-gray-400 mb-6">{subtitle}</p>}

        <HubspotForm />
      </div>
    </div>
  )
}
