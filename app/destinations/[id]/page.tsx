import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Breadcrumb } from "@/components/breadcrumb"
import { MapPin, Hotel, ArrowRight } from "lucide-react"
import { notFound } from "next/navigation"

// Comprehensive mock destinations database
const mockDestinationsDatabase = [
  {
    id: "1",
    name: "Kathmandu Durbar Square",
    description: "Ancient royal palace complex with stunning architecture",
    longDescription: `Kathmandu Durbar Square, also known as Hanuman Dhoka, is one of three royal squares in the Kathmandu Valley. 
    The square showcases some of the finest architecture and cultural treasures of Nepal. With medieval temples, courtyards, 
    and palaces, this UNESCO World Heritage Site is a testament to Newari architectural brilliance spanning several centuries.`,
    region: "Kathmandu Valley",
    category: "Historical",
    image: "/traditional-nepalese-hotel.jpg",
    gallery: ["/tourism-initiative.jpg", "/bhaktapur-resort-scenic.jpg", "/patan-guesthouse-nepal.jpg"],
    nearbyHotels: [
      { id: "1", name: "Hotel Radisson Blu", distance: "0.5 km" },
      { id: "2", name: "Dwarika's Hotel", distance: "0.8 km" },
      { id: "3", name: "Everest Hotel", distance: "1.2 km" },
    ],
    highlights: [
      "Ancient palace complex",
      "Museum with historical artifacts",
      "Traditional Newari architecture",
      "Shopping and dining nearby",
      "Best visited in the morning",
    ],
  },
  {
    id: "2",
    name: "Swayambhunath Stupa",
    description: "Sacred Buddhist temple atop a hill with panoramic city views",
    longDescription: `Swayambhunath Stupa, also known as the Monkey Temple, is one of the most sacred Buddhist sites in Nepal. 
    Perched atop a hill overlooking Kathmandu Valley, this ancient stupa offers breathtaking panoramic views of the city 
    and surrounding mountains. The site dates back to the 5th century and is adorned with colorful prayer flags and 
    intricate Buddhist architecture.`,
    region: "Kathmandu Valley",
    category: "Religious",
    image: "/tourism-initiative.jpg",
    gallery: ["/traditional-nepalese-hotel.jpg", "/bhaktapur-resort-scenic.jpg", "/patan-guesthouse-nepal.jpg"],
    nearbyHotels: [
      { id: "4", name: "Hotel Himalaya", distance: "1.0 km" },
      { id: "5", name: "Kathmandu Guest House", distance: "1.5 km" },
      { id: "6", name: "Yatri Hotel & Spa", distance: "2.0 km" },
    ],
    highlights: [
      "Sacred Buddhist pilgrimage site",
      "Panoramic city views",
      "Ancient stupa with prayer wheels",
      "Monkey population (hence the name)",
      "Sunset viewing point",
      "Spiritual meditation center",
    ],
  },
  {
    id: "3",
    name: "Boudhanath Stupa",
    description: "One of the largest stupas in the world, center of Tibetan Buddhism",
    longDescription: `Boudhanath Stupa is one of the largest spherical stupas in Nepal and the world, standing as a magnificent 
    testament to Tibetan Buddhist architecture. This UNESCO World Heritage Site serves as a center for Tibetan Buddhism 
    in Nepal and features the iconic eyes of Buddha looking in all four directions. The surrounding area is filled with 
    monasteries, shops, and traditional Tibetan restaurants.`,
    region: "Kathmandu Valley",
    category: "Religious",
    image: "/bhaktapur-resort-scenic.jpg",
    gallery: ["/traditional-nepalese-hotel.jpg", "/tourism-initiative.jpg", "/patan-guesthouse-nepal.jpg"],
    nearbyHotels: [
      { id: "7", name: "Hyatt Regency Kathmandu", distance: "0.3 km" },
      { id: "8", name: "Hotel Malla", distance: "0.7 km" },
      { id: "9", name: "Tibetan Guest House", distance: "1.0 km" },
    ],
    highlights: [
      "One of world's largest stupas",
      "Center of Tibetan Buddhism",
      "UNESCO World Heritage Site",
      "Traditional butter lamp offerings",
      "Monastery visits and teachings",
      "Tibetan shopping and dining",
    ],
  },
  {
    id: "4",
    name: "Patan Durbar Square",
    description: "Beautifully preserved royal palace with intricate Newari craftsmanship",
    longDescription: `Patan Durbar Square, located in the city of Lalitpur, is a masterpiece of Newari architecture and 
    craftsmanship. This royal square is renowned for its stunning temples, palaces, and courtyards that showcase the 
    artistic excellence of ancient Nepal. The square features the famous Krishna Temple with its intricate stone carvings 
    and the Patan Museum which houses an impressive collection of religious art and artifacts.`,
    region: "Patan",
    category: "Historical",
    image: "/patan-guesthouse-nepal.jpg",
    gallery: ["/traditional-nepalese-hotel.jpg", "/tourism-initiative.jpg", "/bhaktapur-resort-scenic.jpg"],
    nearbyHotels: [
      { id: "10", name: "Patan Hotel", distance: "0.2 km" },
      { id: "11", name: "Hotel Himalaya", distance: "0.8 km" },
      { id: "12", name: "Yak & Yeti Hotel", distance: "2.5 km" },
    ],
    highlights: [
      "Newari architectural masterpiece",
      "Krishna Temple with stone carvings",
      "Patan Museum with religious artifacts",
      "Traditional metalwork demonstrations",
      "Golden Temple (Hiranya Varna)",
      "Cultural performances and festivals",
    ],
  },
  {
    id: "5",
    name: "Bhaktapur Durbar Square",
    description: "Ancient city square showcasing traditional Newari architecture",
    longDescription: `Bhaktapur Durbar Square is a UNESCO World Heritage Site that represents the pinnacle of Newari 
    architecture and urban planning. Unlike other durbar squares, Bhaktapur has preserved its medieval character with 
    minimal modern influences. The square features the magnificent 55-Window Palace, Nyatapola Temple (the tallest 
    temple in Nepal), and numerous other architectural marvels that date back to the Malla period.`,
    region: "Bhaktapur",
    category: "Historical",
    image: "/guesthouse-kathmandu-thamel.jpg",
    gallery: ["/traditional-nepalese-hotel.jpg", "/tourism-initiative.jpg", "/bhaktapur-resort-scenic.jpg"],
    nearbyHotels: [
      { id: "13", name: "Bhaktapur Guest House", distance: "0.1 km" },
      { id: "14", name: "Heritage Hotel", distance: "0.5 km" },
      { id: "15", name: "City Hotel Bhaktapur", distance: "1.0 km" },
    ],
    highlights: [
      "55-Window Palace",
      "Nyatapola Temple (tallest in Nepal)",
      "Traditional pottery workshops",
      "Well-preserved medieval city",
      "Local yogurt (king curd) specialty",
      "Peacock Window masterpiece",
    ],
  },
  {
    id: "6",
    name: "Thamel District",
    description: "Vibrant tourist hub with shops, restaurants, and cultural experiences",
    longDescription: `Thamel is the vibrant heart of Kathmandu's tourist scene, a bustling neighborhood known for its 
    colorful streets, diverse shopping options, and international cuisine. This lively area serves as the main hub for 
    travelers, offering everything from trekking gear and souvenirs to cozy cafes and rooftop restaurants. Thamel's 
    unique blend of traditional Nepali culture and international influences creates an energetic atmosphere that's 
    perfect for both exploration and relaxation.`,
    region: "Kathmandu Valley",
    category: "Urban",
    image: "/hotel-excellence.jpg",
    gallery: ["/traditional-nepalese-hotel.jpg", "/tourism-initiative.jpg", "/bhaktapur-resort-scenic.jpg"],
    nearbyHotels: [
      { id: "16", name: "Kathmandu Guest House", distance: "0.1 km" },
      { id: "17", name: "Hotel Thamel", distance: "0.2 km" },
      { id: "18", name: "Yatri Hotel & Spa", distance: "0.5 km" },
    ],
    highlights: [
      "Shopping for trekking gear and souvenirs",
      "International and local restaurants",
      "Rooftop bars with mountain views",
      "Live music venues and cultural shows",
      "Travel agencies and tour operators",
      "24/7 vibrant atmosphere",
    ],
  },
  {
    id: "7",
    name: "Nagarkot Sunrise Point",
    description: "Scenic viewpoint offering breathtaking Himalayan sunrise views",
    longDescription: `Nagarkot is a picturesque hill station located 32 km east of Kathmandu, renowned for its spectacular 
    panoramic views of the Himalayan range, including Mount Everest on clear days. This popular destination is especially 
    famous for its breathtaking sunrise views, where the first rays of sunlight illuminate the snow-capped peaks in a 
    golden glow. The area offers peaceful hiking trails, luxury resorts, and a perfect escape from the city's hustle.`,
    region: "Kathmandu Valley",
    category: "Natural",
    image: "/resort-kathmandu-luxury.jpg",
    gallery: ["/traditional-nepalese-hotel.jpg", "/tourism-initiative.jpg", "/bhaktapur-resort-scenic.jpg"],
    nearbyHotels: [
      { id: "19", name: "Nagarkot Resort", distance: "0.5 km" },
      { id: "20", name: "Club Himalaya Resort", distance: "1.0 km" },
      { id: "21", name: "The Fort Resort", distance: "2.0 km" },
    ],
    highlights: [
      "Panoramic Himalayan views",
      "Spectacular sunrise viewing",
      "Mount Everest visibility on clear days",
      "Peaceful hiking trails",
      "Mountain biking routes",
      "Luxury mountain resorts",
    ],
  },
  {
    id: "8",
    name: "Pashupatinath Temple",
    description: "Sacred Hindu temple complex on the banks of Bagmati River",
    longDescription: `Pashupatinath Temple is one of the most sacred Hindu temples dedicated to Lord Shiva, located on 
    the banks of the holy Bagmati River. This UNESCO World Heritage Site serves as a major pilgrimage center for Hindus 
    worldwide and features stunning pagoda-style architecture with golden roofs. The temple complex includes numerous 
    shrines, ashrams, and the famous cremation ghats where traditional Hindu funeral rites are performed.`,
    region: "Kathmandu Valley",
    category: "Religious",
    image: "/luxury-hotel-kathmandu.jpg",
    gallery: ["/traditional-nepalese-hotel.jpg", "/tourism-initiative.jpg", "/bhaktapur-resort-scenic.jpg"],
    nearbyHotels: [
      { id: "22", name: "Hotel Shanker", distance: "1.0 km" },
      { id: "23", name: "Grand Hotel", distance: "1.5 km" },
      { id: "24", name: "Kathmandu Guest House", distance: "2.0 km" },
    ],
    highlights: [
      "Sacred Shiva pilgrimage site",
      "UNESCO World Heritage Site",
      "Traditional cremation ghats",
      "Sadhu holy men sightings",
      "Maha Shivaratri festival",
      "Bagmati River rituals",
    ],
  },
  {
    id: "9",
    name: "Garden of Dreams",
    description: "Neo-classical garden offering peaceful retreat in the heart of Kathmandu",
    longDescription: `The Garden of Dreams is a beautiful neo-classical garden that provides a serene escape from the 
    bustling streets of Kathmandu. This historic garden, originally created in the 1920s, features elegant pavilions, 
    fountains, and meticulously maintained landscapes. After extensive restoration, the garden now serves as a peaceful 
    retreat where visitors can relax, enjoy nature, and experience a slice of Kathmandu's aristocratic past.`,
    region: "Kathmandu Valley",
    category: "Urban",
    image: "/luxury-hotel-spa.png",
    gallery: ["/traditional-nepalese-hotel.jpg", "/tourism-initiative.jpg", "/bhaktapur-resort-scenic.jpg"],
    nearbyHotels: [
      { id: "25", name: "Hotel Yak & Yeti", distance: "0.2 km" },
      { id: "26", name: "Kathmandu Marriott Hotel", distance: "0.5 km" },
      { id: "27", name: "Hotel Malla", distance: "1.0 km" },
    ],
    highlights: [
      "Peaceful urban oasis",
      "Neo-classical architecture",
      "Historic pavilions and fountains",
      "Cafe and restaurant facilities",
      "Cultural events and exhibitions",
      "Photography paradise",
    ],
  },
]

export default async function DestinationDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  // Await the params in Next.js 13+ App Router
  const resolvedParams = await params
  // Find the destination by ID
  const destination = mockDestinationsDatabase.find(d => d.id === resolvedParams.id)

  // If destination not found, show 404
  if (!destination) {
    notFound()
  }
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Destinations", href: "/destinations" },
            { label: destination.name },
          ]}
        />

        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Hero Image */}
            <div className="mb-8 rounded-lg overflow-hidden h-96">
              <img
                src={destination.image || "/placeholder.svg"}
                alt={destination.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Header */}
            <div className="mb-8">
              <h1 className="text-4xl font-bold text-foreground mb-4">{destination.name}</h1>
              <div className="flex flex-wrap gap-4 text-lg text-muted-foreground">
                <div className="flex items-center gap-2">
                  <MapPin size={20} />
                  <span>{destination.region}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-primary font-semibold">{destination.category}</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-8">
                {/* Description */}
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">About</h2>
                  <p className="text-muted-foreground text-lg leading-relaxed">{destination.longDescription}</p>
                </div>

                {/* Highlights */}
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Highlights</h2>
                  <ul className="space-y-3">
                    {destination.highlights.map((highlight: string, i: number) => (
                      <li key={i} className="flex gap-3">
                        <span className="text-primary font-bold flex-shrink-0">•</span>
                        <span className="text-foreground">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Gallery */}
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Gallery</h2>
                  <div className="grid grid-cols-2 gap-4">
                    {destination.gallery.map((image: string, i: number) => (
                      <div
                        key={i}
                        className="aspect-square rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition"
                      >
                        <img
                          src={image || "/placeholder.svg"}
                          alt={`Gallery ${i + 1}`}
                          className="w-full h-full object-cover hover:scale-105 transition"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                {/* Nearby Hotels */}
                <div className="bg-primary text-primary-foreground rounded-lg p-6 sticky top-24">
                  <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                    <Hotel size={20} />
                    Hotels Nearby
                  </h3>

                  <div className="space-y-3 mb-6">
                    {destination.nearbyHotels.map((hotel: any) => (
                      <Link
                        key={hotel.id}
                        href={`/hotels/${hotel.id}`}
                        className="block p-3 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 transition"
                      >
                        <p className="font-semibold text-sm">{hotel.name}</p>
                        <p className="text-xs opacity-80">{hotel.distance} away</p>
                      </Link>
                    ))}
                  </div>

                  <Link
                    href="/hotels"
                    className="w-full flex items-center justify-center gap-2 bg-accent text-white py-2 rounded-lg font-semibold hover:opacity-90 transition"
                  >
                    View All Hotels
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
