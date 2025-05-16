"use client"

import { useEffect } from "react"
import { MessageSquare } from "lucide-react"

export function HubspotChat() {
  useEffect(() => {
    const script = document.createElement("script")
    script.src = "//js.hs-scripts.com/39890630.js"
    script.async = true
    script.defer = true
    script.id = "hs-script-loader"
    document.body.appendChild(script)

    return () => {
      if (document.getElementById("hs-script-loader")) {
        document.body.removeChild(script)
      }
    }
  }, [])

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        className="bg-[#4d80e4] text-white p-3 rounded-full shadow-lg hover:bg-[#3a6ad4] transition-colors"
        aria-label="Chat with us"
        onClick={() => {
          // This is a fallback in case the HubSpot chat doesn't load
          // The actual chat will be controlled by HubSpot
          if (window.HubSpotConversations) {
            window.HubSpotConversations.widget.open()
          }
        }}
      >
        <MessageSquare size={24} />
      </button>
    </div>
  )
}
