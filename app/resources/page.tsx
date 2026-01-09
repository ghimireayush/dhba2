"use client"

import { useState, useMemo } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Breadcrumb } from "@/components/breadcrumb"
import { BookOpen, FileText, Video, Award, TrendingUp, Search, Filter } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function ResourcesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("")

  const resources = [
    {
      id: 1,
      category: "Training",
      title: "Hospitality Excellence Training Program",
      description: "Comprehensive training program for hotel staff to enhance service quality and guest satisfaction.",
      image: "/hotel-excellence.jpg",
      date: "2025-01-15",
      type: "Training",
      icon: Award,
    },
    {
      id: 2,
      category: "Blog",
      title: "Best Practices in Hotel Management",
      description: "Learn the latest strategies and techniques for effective hotel management in the modern era.",
      image: "/luxury-hotel-lobby.png",
      date: "2025-01-10",
      type: "Blog Post",
      icon: BookOpen,
    },
    {
      id: 3,
      category: "Guide",
      title: "Tourism Industry Growth in Nepal",
      description: "Comprehensive analysis of tourism trends and opportunities in Nepal's hospitality sector.",
      image: "/tourism-initiative.jpg",
      date: "2025-01-05",
      type: "Industry Report",
      icon: TrendingUp,
    },
    {
      id: 4,
      category: "Video",
      title: "Customer Service Excellence Workshop",
      description: "Video series on delivering exceptional customer service in the hospitality industry.",
      image: "/luxury-hotel-restaurant.png",
      date: "2024-12-20",
      type: "Video Tutorial",
      icon: Video,
    },
    {
      id: 5,
      category: "Document",
      title: "DHBA Membership Guidelines",
      description: "Complete guide to DHBA membership benefits, requirements, and application process.",
      image: "/hotelassociation-logo.jpg",
      date: "2024-12-15",
      type: "PDF Document",
      icon: FileText,
    },
    {
      id: 6,
      category: "Training",
      title: "Food Safety and Hygiene Standards",
      description: "Essential training on maintaining food safety and hygiene standards in hotels and restaurants.",
      image: "/luxury-hotel-spa.png",
      date: "2024-12-10",
      type: "Training",
      icon: Award,
    },
  ]

  const categories = ["All", "Training", "Blog", "Guide", "Video", "Document"]

  const filteredResources = useMemo(() => {
    return resources.filter((resource) => {
      const matchesSearch =
        resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        resource.description.toLowerCase().includes(searchTerm.toLowerCase())

      const matchesCategory = !selectedCategory || selectedCategory === "All" || resource.category === selectedCategory

      return matchesSearch && matchesCategory
    })
  }, [searchTerm, selectedCategory])

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow">
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Resources" }]} />

        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12 text-center bg-gradient-to-r from-green-900 via-green-700 to-orange-700 text-white py-12 px-4 rounded-lg">
              <h1 className="text-4xl font-bold mb-2">Resources & Learning Center</h1>
              <p className="text-lg opacity-90">Access training materials, blog posts, industry guides, and valuable resources to enhance your hospitality business</p>
            </div>

            {/* Search and Filters */}
            <div className="bg-white border border-border rounded-lg p-4 mb-8">
              <div className="flex flex-col sm:flex-row items-center gap-4">
                {/* Search */}
                <div className="relative flex-1 w-full sm:w-auto">
                  <Search size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Search resources..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                {/* Category Filter */}
                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <Filter size={16} className="text-muted-foreground shrink-0" />
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full sm:w-48 px-3 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">All Categories</option>
                    {categories.map((cat) => (
                      <option key={cat} value={cat}>
                        {cat}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Clear */}
                <button
                  onClick={() => {
                    setSearchTerm("")
                    setSelectedCategory("")
                  }}
                  className="text-primary hover:text-primary/80 font-semibold text-sm transition whitespace-nowrap"
                >
                  Clear Filters
                </button>
              </div>
            </div>

            {/* Resources Grid */}
            {filteredResources.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredResources.map((resource) => (
                  <Link
                    key={resource.id}
                    href={
                      resource.category === "Blog"
                        ? `/resources/blog/${resource.id}`
                        : `/resources/${resource.id}`
                    }
                    className="group bg-card border border-border rounded-xl overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1"
                  >
                    {/* Image */}
                    <div className="relative h-48">
                      <Image
                        src={resource.image}
                        alt={resource.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform"
                      />
                      <span className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-xs font-semibold">
                        {resource.category}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                        <resource.icon size={16} />
                        <span>{resource.type}</span>
                        <span>•</span>
                        <span>{new Date(resource.date).toLocaleDateString()}</span>
                      </div>

                      <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition">
                        {resource.title}
                      </h3>

                      <p className="text-sm text-muted-foreground line-clamp-3">
                        {resource.description}
                      </p>

                      <div className="mt-4 text-primary font-semibold text-sm flex items-center">
                        Read More →
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-muted/30 rounded-lg">
                <p className="text-lg text-muted-foreground">No resources found. Try adjusting your filters.</p>
              </div>
            )}

            {/* Load More */}
            <div className="text-center mt-10">
              <button className="bg-gradient-to-r from-primary to-accent text-white px-8 py-4 rounded-full font-semibold">
                Load More Resources
              </button>
            </div>
          </div>
        </section>

        {/* ================= CTA ================= */}
        <section className="py-16 px-4 bg-gradient-to-br from-primary/10 to-accent/10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Need Specific Training or Resources?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Contact us to request custom training programs or specific resources for your hotel
            </p>
            <Link
              href="/contact"
              className="inline-block bg-gradient-to-r from-primary to-accent text-white px-8 py-4 rounded-full font-semibold"
            >
              Contact Us
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
