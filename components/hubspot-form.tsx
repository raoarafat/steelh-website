"use client"

import { useEffect } from "react"

export const HUBSPOT_REGION = "na1"
export const HUBSPOT_PORTAL_ID = "39890630"
export const HUBSPOT_FORM_ID = "af6666e4-1e63-415a-9a94-8327859c2a6e"

export function HubspotForm() {
  useEffect(() => {
    const script = document.createElement("script")
    script.src = "//js.hsforms.net/forms/embed/v2.js"
    script.async = true
    script.onload = () => {
      // @ts-ignore
      if (window.hbspt) {
        // @ts-ignore
        window.hbspt.forms.create({
          region: HUBSPOT_REGION,
          portalId: HUBSPOT_PORTAL_ID,
          formId: HUBSPOT_FORM_ID,
          target: "#hubspotForm",
          cssClass: "form-left-aligned",
        })
      }
    }
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <div className="relative w-full mt-6">
      <div id="hubspotForm" className="text-left w-full" />

      {/* Bottom Overlay */}
      <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-100 text-white p-4 text-center translate-y-4">
        <div className="text-sm sm:text-base text-transparent">
          <strong>+60 12-221 9647</strong>
        </div>
      </div>
    </div>
  )
}
