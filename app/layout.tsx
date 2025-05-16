import type React from "react"
import type { Metadata } from "next"
import { Archivo_Black } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { HubspotChat } from "@/components/hubspot-chat"
import { ThemeProvider } from "@/components/theme-provider"

// Load Archivo Black font using Next.js font optimization
const archivoBlack = Archivo_Black({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-archivo-black",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Steel Horizon Solutions | IT Manpower Services",
  description:
    "Connecting businesses with exceptional IT professionals worldwide, enabling remote work excellence and digital innovation.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${archivoBlack.variable} font-garet`}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <Navigation />
          {children}
          <Footer />
          <HubspotChat />
        </ThemeProvider>
      </body>
    </html>
  )
}
