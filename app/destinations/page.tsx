"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Breadcrumb } from "@/components/breadcrumb"
import { Search, MapPin, Filter } from "lucide-react"

// Mock destinations data
const mockDestinations = [
  {
    id: "1",
    name: "Kathmandu Durbar Square",
    description: "Ancient royal palace complex with stunning architecture and cultural significance",
    region: "Kathmandu Valley",
    category: "Historical",
    image: "/traditional-nepalese-hotel.jpg",
    featured: true,
  },
  {
    id: "2",
    name: "Swayambhunath Stupa",
    description: "Sacred Buddhist temple atop a hill with panoramic city views",
    region: "Kathmandu Valley",
    category: "Religious",
    image: "/tourism-initiative.jpg",
    featured: true,
  },
  {
    id: "3",
    name: "Boudhanath Stupa",
    description: "One of the largest stupas in the world, center of Tibetan Buddhism",
    region: "Kathmandu Valley",
    category: "Religious",
    image: "/bhaktapur-resort-scenic.jpg",
    featured: true,
  },
  {
    id: "4",
    name: "Patan Durbar Square",
    description: "Beautifully preserved royal palace with intricate Newari craftsmanship",
    region: "Patan",
    category: "Historical",
    image: "/patan-guesthouse-nepal.jpg",
    featured: false,
  },
  {
    id: "5",
    name: "Bhaktapur Durbar Square",
    description: "Ancient city square showcasing traditional Newari architecture",
    region: "Bhaktapur",
    category: "Historical",
    image: "/guesthouse-kathmandu-thamel.jpg",
    featured: false,
  },
  {
    id: "6",
    name: "Thamel District",
    description: "Vibrant tourist hub with shops, restaurants, and cultural experiences",
    region: "Kathmandu Valley",
    category: "Urban",
    image: "/hotel-excellence.jpg",
    featured: false,
  },
  {
    id: "7",
    name: "Nagarkot Sunrise Point",
    description: "Scenic viewpoint offering breathtaking Himalayan sunrise views",
    region: "Kathmandu Valley",
    category: "Natural",
    image: "/resort-kathmandu-luxury.jpg",
    featured: true,
  },
  {
    id: "8",
    name: "Pashupatinath Temple",
    description: "Sacred Hindu temple complex on the banks of Bagmati River",
    region: "Kathmandu Valley",
    category: "Religious",
    image: "/luxury-hotel-kathmandu.jpg",
    featured: true,
  },
  {
    id: "9",
    name: "Garden of Dreams",
    description: "Neo-classical garden offering peaceful retreat in the heart of Kathmandu",
    region: "Kathmandu Valley",
    category: "Urban",
    image: "/luxury-hotel-spa.png",
    featured: false,
  },
]

export default function DestinationsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedRegion, setSelectedRegion] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("")

  const regions = ["Kathmandu Valley", "Patan", "Bhaktapur"]
  const categories = ["Historical", "Religious", "Urban", "Natural"]

  const filteredDestinations = useMemo(() => {
    return mockDestinations.filter((destination) => {
      const matchesSearch =
        destination.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        destination.description.toLowerCase().includes(searchTerm.toLowerCase())

      const matchesRegion = !selectedRegion || destination.region === selectedRegion
      const matchesCategory = !selectedCategory || destination.category === selectedCategory

      return matchesSearch && matchesRegion && matchesCategory
    })
  }, [searchTerm, selectedRegion, selectedCategory])

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Destinations" }]} />

        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12 text-center bg-gradient-to-r from-green-900 via-green-700 to-orange-700 text-white py-12 px-4 rounded-lg">
              <h1 className="text-4xl font-bold mb-2"> Tourist Destinations</h1>
              <p className="text-lg opacity-90">
                Discover the top attractions and destinations in and around Kathmandu
              </p>
            </div>

            {/* Search and Filters */}
            <div className="bg-white border border-border rounded-lg p-4 mb-8">
              <div className="flex flex-col lg:flex-row gap-4">
                {/* Search */}
                <div className="flex-1">
                  <div className="relative">
                    <Search size={18} className="absolute left-3 top-2.5 text-muted-foreground" />
                    <input
                      type="text"
                      placeholder="Search destinations..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-9 pr-3 py-2 text-sm border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                </div>

                {/* Filters */}
                <div className="flex gap-2">
                  {/* Region Filter */}
                  <select
                    value={selectedRegion}
                    onChange={(e) => setSelectedRegion(e.target.value)}
                    className="px-3 py-2 text-sm border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary min-w-0"
                  >
                    <option value="">All Regions</option>
                    {regions.map((region) => (
                      <option key={region} value={region}>
                        {region}
                      </option>
                    ))}
                  </select>

                  {/* Category Filter */}
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="px-3 py-2 text-sm border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary min-w-0"
                  >
                    <option value="">All Categories</option>
                    {categories.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>

                  {/* Clear Filters */}
                  {(searchTerm || selectedRegion || selectedCategory) && (
                    <button
                      onClick={() => {
                        setSearchTerm("")
                        setSelectedRegion("")
                        setSelectedCategory("")
                      }}
                      className="px-3 py-2 text-sm text-primary hover:text-primary/80 font-medium border border-input rounded-lg hover:bg-muted transition whitespace-nowrap"
                    >
                      Clear
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* Destinations Grid */}
            {filteredDestinations.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredDestinations.map((destination) => (
                  <Link
                    key={destination.id}
                    href={`/destinations/${destination.id}`}
                    className="group bg-white border border-border rounded-lg overflow-hidden hover:shadow-lg transition"
                  >
                    <div className="relative aspect-video overflow-hidden bg-muted">
                      <img
                        src={destination.image || "/placeholder.svg"}
                        alt={destination.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition"
                      />
                      {destination.featured && (
                        <div className="absolute top-3 right-3 bg-accent text-white px-3 py-1 rounded-full text-xs font-semibold">
                          Featured
                        </div>
                      )}
                    </div>
                    <div className="p-4">
                      <div className="flex gap-2 mb-2 flex-wrap">
                        <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded">
                          {destination.category}
                        </span>
                        <span className="text-xs font-semibold text-muted-foreground bg-muted px-2 py-1 rounded flex items-center gap-1">
                          <MapPin size={12} />
                          {destination.region}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition">
                        {destination.name}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">{destination.description}</p>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-muted/30 rounded-lg">
                <p className="text-lg text-muted-foreground">No destinations found. Try adjusting your filters.</p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
