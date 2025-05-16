"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

export function JobSearchForm() {
  const [jobTitle, setJobTitle] = useState("")
  const [location, setLocation] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle search logic here - for static site, this could redirect to a pre-built results page
    console.log("Searching for:", { jobTitle, location })
    // window.location.href = `/roles?search=${encodeURIComponent(jobTitle)}`
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-2">
      <div className="flex-1">
        <Input
          type="text"
          placeholder="Role or skills (e.g. React Developer)"
          className="bg-white border-gray-300 h-12 rounded-md"
          value={jobTitle}
          onChange={(e) => setJobTitle(e.target.value)}
        />
      </div>
      <div className="flex-1">
        <Input
          type="text"
          placeholder="Location or 'Remote'"
          className="bg-white border-gray-300 h-12 rounded-md"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>
      <Button type="submit" className="bg-[#4d80e4] hover:bg-[#3a6ad4] h-12 px-6">
        <Search className="w-5 h-5" />
      </Button>
    </form>
  )
}
