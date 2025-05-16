"use client"

import { createContext, useContext, useState, type ReactNode } from "react"
import { HubspotFormPopup } from "./hubspot-form-popup"

interface PopupContextType {
  openPopup: (title: string, subtitle?: string) => void
  closePopup: () => void
}

const PopupContext = createContext<PopupContextType | undefined>(undefined)

export function PopupProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const [popupTitle, setPopupTitle] = useState("")
  const [popupSubtitle, setPopupSubtitle] = useState<string | undefined>(undefined)

  const openPopup = (title: string, subtitle?: string) => {
    setPopupTitle(title)
    setPopupSubtitle(subtitle)
    setIsOpen(true)
  }

  const closePopup = () => {
    setIsOpen(false)
  }

  return (
    <PopupContext.Provider value={{ openPopup, closePopup }}>
      {children}
      <HubspotFormPopup isOpen={isOpen} onClose={closePopup} title={popupTitle} subtitle={popupSubtitle} />
    </PopupContext.Provider>
  )
}

export function usePopup() {
  const context = useContext(PopupContext)
  if (context === undefined) {
    throw new Error("usePopup must be used within a PopupProvider")
  }
  return context
}
