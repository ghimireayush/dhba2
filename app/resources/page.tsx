import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BookOpen, FileText, Video, Award, TrendingUp } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function ResourcesPage() {
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
      title: "UNITY Membership Guidelines",
      description: "Complete guide to UNITY membership benefits, requirements, and application process.",
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

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow">
        {/* ================= HERO ================= */}
        <section className="relative bg-gradient-to-br from-primary/10 via-background to-accent/5 pt-20 pb-10 px-4">
          <div className="max-w-7xl mx-auto text-center">
            

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-4">
              Resources & Learning Center
            </h1>

            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-6">
              Access training materials, blog posts, industry guides, and valuable resources to enhance your hospitality business
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search resources..."
                  className="w-full px-6 py-4 rounded-full border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-gradient-to-r from-primary to-accent text-white px-6 py-2 rounded-full font-semibold">
                  Search
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ================= CATEGORIES ================= */}
        <section className="py-4 px-4 border-b border-border -mt-4">
          <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                className="px-5 py-2 rounded-full border border-border hover:border-primary hover:bg-primary/5 transition font-medium text-sm"
              >
                {category}
              </button>
            ))}
          </div>
        </section>

        {/* ================= RESOURCES GRID ================= */}
        <section className="pt-8 pb-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {resources.map((resource) => (
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
