"use client"

import { useState, useEffect } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import {
  Briefcase,
  MapPin,
  Search,
  Clock,
  DollarSign,
  Filter,
  Bookmark,
  ChevronDown,
  X,
} from "lucide-react"
import Link from "next/link"

export default function CareersPage() {
  const jobs = [
    {
      id: 1,
      title: "Hotel Manager",
      company: "Luxury Hotel Kathmandu",
      location: "Thamel, Kathmandu",
      type: "Full-time",
      salary: "NPR 80,000 - 120,000",
      experience: "5+ years",
      posted: "2 days ago",
      description:
        "Seeking experienced hotel manager to oversee daily operations of our 5-star property.",
      featured: true,
    },
    {
      id: 2,
      title: "Front Desk Supervisor",
      company: "Resort Kathmandu Luxury",
      location: "Balaju, Kathmandu",
      type: "Full-time",
      salary: "NPR 40,000 - 60,000",
      experience: "3+ years",
      posted: "5 days ago",
      description:
        "Looking for a friendly and professional front desk supervisor to lead our reception team.",
      featured: false,
    },
    {
      id: 3,
      title: "Executive Chef",
      company: "Traditional Nepalese Hotel",
      location: "Sundhara, Kathmandu",
      type: "Full-time",
      salary: "NPR 70,000 - 100,000",
      experience: "7+ years",
      posted: "1 week ago",
      description:
        "Experienced executive chef needed to lead our kitchen team and create innovative menus.",
      featured: true,
    },
  ]

  /* ---------------- SAVE JOB STATE ---------------- */
  const [savedJobs, setSavedJobs] = useState<number[]>([])
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedLocation, setSelectedLocation] = useState("")
  const [selectedType, setSelectedType] = useState("")
  const [showLocationDropdown, setShowLocationDropdown] = useState(false)
  const [showFilterDropdown, setShowFilterDropdown] = useState(false)

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("savedJobs") || "[]")
    setSavedJobs(stored)
  }, [])

  const toggleSaveJob = (jobId: number) => {
    let updated
    if (savedJobs.includes(jobId)) {
      updated = savedJobs.filter((id) => id !== jobId)
    } else {
      updated = [...savedJobs, jobId]
    }
    setSavedJobs(updated)
    localStorage.setItem("savedJobs", JSON.stringify(updated)) // FIXED: was "JON.stringify"
  }

  // Get unique locations for filter
  const locations = Array.from(new Set(jobs.map(job => job.location)))
  
  // Filter jobs based on search, location, and type
  const filteredJobs = jobs.filter(job => {
    const matchesSearch = !searchTerm || 
                        job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        job.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesLocation = !selectedLocation || job.location === selectedLocation
    const matchesType = !selectedType || job.type === selectedType
    
    return matchesSearch && matchesLocation && matchesType
  })

  return (
    <div className="flex flex-col min-h-screen bg-muted/20">
      <Header />

      <main className="flex-grow">
        {/* SEARCH + FILTER BAR */}
        <section className="bg-card border-b border-border sticky top-16 z-40 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <div className="flex gap-3">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search jobs..."
                  className="w-full pl-12 pr-4 py-3 rounded-lg border-2 border-border focus:border-primary bg-background"
                />
              </div>

              {/* Location Dropdown */}
              <div className="relative">
                <button 
                  onClick={() => setShowLocationDropdown(!showLocationDropdown)}
                  className="px-5 py-3 border-2 border-border rounded-lg flex items-center gap-2 hover:border-primary transition-colors bg-background"
                >
                  <MapPin size={18} />
                  <span>{selectedLocation || "Location"}</span>
                  <ChevronDown size={16} />
                </button>
                
                {showLocationDropdown && (
                  <div className="absolute top-full left-0 mt-1 bg-card border-2 border-border rounded-lg shadow-lg z-50 min-w-[200px]">
                    <button
                      onClick={() => {
                        setSelectedLocation("")
                        setShowLocationDropdown(false)
                      }}
                      className="w-full px-4 py-2 text-left hover:bg-muted transition-colors"
                    >
                      All Locations
                    </button>
                    {locations.map((location) => (
                      <button
                        key={location}
                        onClick={() => {
                          setSelectedLocation(location)
                          setShowLocationDropdown(false)
                        }}
                        className="w-full px-4 py-2 text-left hover:bg-muted transition-colors"
                      >
                        {location}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Job Type Filter Dropdown */}
              <div className="relative">
                <button 
                  onClick={() => setShowFilterDropdown(!showFilterDropdown)}
                  className="px-5 py-3 border-2 border-border rounded-lg flex items-center gap-2 hover:border-primary transition-colors bg-background"
                >
                  <Filter size={18} />
                  <span>{selectedType || "Type"}</span>
                  <ChevronDown size={16} />
                </button>
                
                {showFilterDropdown && (
                  <div className="absolute top-full left-0 mt-1 bg-card border-2 border-border rounded-lg shadow-lg z-50 min-w-[200px]">
                    <button
                      onClick={() => {
                        setSelectedType("")
                        setShowFilterDropdown(false)
                      }}
                      className="w-full px-4 py-2 text-left hover:bg-muted transition-colors"
                    >
                      All Types
                    </button>
                    <button
                      onClick={() => {
                        setSelectedType("Full-time")
                        setShowFilterDropdown(false)
                      }}
                      className="w-full px-4 py-2 text-left hover:bg-muted transition-colors"
                    >
                      Full-time
                    </button>
                    <button
                      onClick={() => {
                        setSelectedType("Part-time")
                        setShowFilterDropdown(false)
                      }}
                      className="w-full px-4 py-2 text-left hover:bg-muted transition-colors"
                    >
                      Part-time
                    </button>
                  </div>
                )}
              </div>

              <button 
                onClick={() => {
                  setSearchTerm("")
                  setSelectedLocation("")
                  setSelectedType("")
                }}
                className="px-6 py-3 bg-primary text-white rounded-lg font-bold hover:opacity-90 transition-opacity"
              >
                Clear Filters
              </button>
            </div>

            {/* Active Filters Display */}
            {(searchTerm || selectedLocation || selectedType) && (
              <div className="flex flex-wrap gap-2 mt-3">
                {searchTerm && (
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium flex items-center gap-1.5">
                    Search: {searchTerm}
                    <button 
                      onClick={() => setSearchTerm("")}
                      className="hover:bg-primary/20 rounded-full p-0.5 transition-colors"
                    >
                      <X size={12} />
                    </button>
                  </span>
                )}
                {selectedLocation && (
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium flex items-center gap-1.5">
                    Location: {selectedLocation}
                    <button 
                      onClick={() => setSelectedLocation("")}
                      className="hover:bg-primary/20 rounded-full p-0.5 transition-colors"
                    >
                      <X size={12} />
                    </button>
                  </span>
                )}
                {selectedType && (
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium flex items-center gap-1.5">
                    Type: {selectedType}
                    <button 
                      onClick={() => setSelectedType("")}
                      className="hover:bg-primary/20 rounded-full p-0.5 transition-colors"
                    >
                      <X size={12} />
                    </button>
                  </span>
                )}
              </div>
            )}
          </div>
        </section>

        {/* JOB LIST */}
        <section className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-2xl font-bold mb-6">
            {filteredJobs.length} Jobs Available
            {filteredJobs.length !== jobs.length && (
              <span className="text-sm text-muted-foreground font-normal ml-2">
                (of {jobs.length} total)
              </span>
            )}
          </h1>

          {filteredJobs.length === 0 ? (
            <div className="text-center py-12">
              <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
                <Briefcase className="w-10 h-10 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                No jobs found
              </h3>
              <p className="text-muted-foreground mb-4">
                Try adjusting your search or filters to find what you're looking for.
              </p>
              <button 
                onClick={() => {
                  setSearchTerm("")
                  setSelectedLocation("")
                  setSelectedType("")
                }}
                className="px-6 py-2 bg-primary text-white rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                Clear All Filters
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredJobs.map((job) => (
              <Link
                key={job.id}
                href={`/careers/${job.id}`}
                className="block bg-card border-2 border-border rounded-xl p-6 hover:border-primary hover:shadow-lg transition relative"
              >
                {/* FEATURED BADGE (FIXED POSITION) */}
                {job.featured && (
                  <div className="absolute top-0 left-4 z-3">
                    <span className="px-2 py-0.5 h-8 bg-accent text-white rounded-full text-xs font-bold">
                      FEATURED
                    </span>
                  </div>
                )}

                <div className="flex gap-5">
                  <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Briefcase className="text-primary" />
                  </div>

                  <div className="flex-1">
                    <div className="flex justify-between gap-4 mb-3">
                      <div>
                        <h2 className="text-xl font-bold">{job.title}</h2>
                        <p className="text-muted-foreground">
                          {job.company}
                        </p>
                      </div>

                      {/* SAVE BUTTON (WORKING) */}
                      <button
                        onClick={(e) => {
                          e.preventDefault()
                          e.stopPropagation()
                          toggleSaveJob(job.id)
                        }}
                        className="p-2 rounded-lg hover:bg-muted"
                      >
                        <Bookmark
                          className={`w-5 h-5 ${
                            savedJobs.includes(job.id)
                              ? "text-primary fill-primary"
                              : "text-muted-foreground"
                          }`}
                        />
                      </button>
                    </div>

                    <div className="flex flex-wrap gap-4 text-sm mb-3">
                      <span className="flex items-center gap-1">
                        <MapPin size={14} /> {job.location}
                      </span>
                      <span className="flex items-center gap-1">
                         {job.salary}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={14} /> {job.posted}
                      </span>
                    </div>

                    <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                      {job.description}
                    </p>

                    <span className="text-primary font-semibold">
                      View Details →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          )}
        </section>
      </main>

      <Footer />
    </div>
  )
}