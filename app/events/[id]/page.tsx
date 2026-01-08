import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Breadcrumb } from "@/components/breadcrumb"
import { Calendar, Share2, ArrowLeft, MapPin, Clock, Users, Ticket, ArrowRight } from "lucide-react"
import { notFound } from "next/navigation"

// Comprehensive mock events database
const mockEventsDatabase = [
  {
    id: "1",
    title: "Annual Hotel Summit 2024",
    excerpt: "Join us for an exclusive gathering of hotel industry leaders",
    content: `The Annual Hotel Summit 2024 is a premier gathering of hospitality industry leaders, 
    innovators, and professionals. This year's event will focus on emerging trends in tourism, 
    sustainable hospitality practices, and digital transformation in the hotel industry.

    Key topics include:
    - Post-pandemic recovery and growth strategies
    - Sustainability and eco-friendly hotel operations
    - Digital marketing and online presence
    - Staff training and development
    - Customer experience enhancement

    Join us to network with fellow hotel professionals, learn from industry experts, 
    and discover new opportunities for your business.`,
    date: "2024-12-15",
    category: "Events",
    image: "/traditional-nepalese-hotel.jpg",
    gallery: [
      "/tourism-initiative.jpg", 
      "/bhaktapur-resort-scenic.jpg", 
      "/patan-guesthouse-nepal.jpg",
      "/guesthouse-kathmandu-thamel.jpg"
    ],
    time: "9:00 AM - 5:00 PM",
    location: "Kathmandu Convention Center",
    registrationLink: "#",
    organizer: "Hotel Association of Nepal",
    expectedAttendees: "500+",
    registrationFee: "NPR 5,000",
    highlights: [
      "Keynote speeches from industry leaders",
      "Interactive workshops and sessions",
      "Networking opportunities with 500+ professionals",
      "Exhibition of latest hospitality technologies",
      "Cultural program and gala dinner",
      "Certificate of participation"
    ],
    relatedEvents: [
      { id: "2", title: "Hospitality Training Workshop", date: "2024-10-25" },
      { id: "3", title: "International Guest Exchange Program", date: "2024-10-15" },
      { id: "4", title: "Tourism Recovery Initiative Launched", date: "2024-11-10" },
    ],
    speakers: [
      { name: "Rajesh Sharma", title: "CEO, Kathmandu Hotels Group", image: "/hotel-excellence.jpg" },
      { name: "Sarah Thompson", title: "Hospitality Consultant, International", image: "/resort-kathmandu-luxury.jpg" },
      { name: "Prakash Gurung", title: "Tourism Ministry Secretary", image: "/luxury-hotel-kathmandu.jpg" },
    ]
  },
  {
    id: "2",
    title: "Tourism Recovery Initiative Launched",
    excerpt: "UNITY partners with government to boost tourism sector growth",
    content: `UNITY Hotel Association has launched a comprehensive tourism recovery initiative in partnership with the Nepal Tourism Board. This groundbreaking program aims to revitalize the hospitality sector following recent challenges.

    The initiative includes:
    - Marketing campaigns to promote domestic and international tourism
    - Training programs for hotel staff on new safety protocols
    - Financial assistance packages for member hotels
    - Digital transformation support for small and medium establishments
    - Partnership with travel agencies and tour operators

    This collaborative effort represents a significant investment in the future of Nepal's tourism industry and demonstrates our commitment to sustainable growth.`,
    date: "2024-11-10",
    category: "News",
    image: "/tourism-initiative.jpg",
    gallery: [
      "/traditional-nepalese-hotel.jpg", 
      "/bhaktapur-resort-scenic.jpg", 
      "/patan-guesthouse-nepal.jpg",
      "/guesthouse-kathmandu-thamel.jpg"
    ],
    time: "11:00 AM",
    location: "UNITY Headquarters, Kathmandu",
    organizer: "UNITY Hotel Association",
    expectedAttendees: "N/A",
    registrationFee: "N/A",
    highlights: [
      "Government partnership for tourism growth",
      "Marketing campaigns worth NPR 10 million",
      "Training programs for 1000+ staff members",
      "Financial assistance for affected hotels",
      "Digital transformation support",
      "Expected to boost tourism by 25%"
    ],
    relatedEvents: [
      { id: "1", title: "Annual Hotel Summit 2024", date: "2024-12-15" },
      { id: "3", title: "Member Spotlight: Excellence in Service", date: "2024-11-05" },
      { id: "5", title: "Tourism Safety Alert", date: "2024-10-20" },
    ],
    speakers: [
      { name: "Bikash Thapa", title: "President, UNITY Hotel Association", image: "/hotel-excellence.jpg" },
      { name: "Anita Sharma", title: "Director, Nepal Tourism Board", image: "/resort-kathmandu-luxury.jpg" },
    ]
  },
  {
    id: "3",
    title: "Member Spotlight: Excellence in Service",
    excerpt: "Meet the hotels leading by example in customer experience",
    content: `This month, we shine the spotlight on three outstanding member hotels that have demonstrated exceptional commitment to customer service and operational excellence. These establishments have gone above and beyond in creating memorable experiences for their guests.

    Featured Hotels:
    1. **Mountain View Resort** - Recognized for their personalized guest services and sustainable practices
    2. **Heritage Palace Hotel** - Excellence in preserving cultural heritage while providing modern amenities
    3. **City Center Inn** - Outstanding performance in staff training and guest satisfaction

    Each of these hotels has implemented innovative approaches to hospitality, from eco-friendly operations to digital guest services, setting new standards for the industry.`,
    date: "2024-11-05",
    category: "News",
    image: "/bhaktapur-resort-scenic.jpg",
    gallery: [
      "/traditional-nepalese-hotel.jpg", 
      "/tourism-initiative.jpg", 
      "/patan-guesthouse-nepal.jpg",
      "/guesthouse-kathmandu-thamel.jpg"
    ],
    time: "Published Online",
    location: "UNITY Website",
    organizer: "UNITY Hotel Association",
    expectedAttendees: "N/A",
    registrationFee: "N/A",
    highlights: [
      "Three hotels recognized for excellence",
      "Guest satisfaction scores above 95%",
      "Innovative service implementations",
      "Sustainability practices highlighted",
      "Staff training programs showcased",
      "Digital transformation success stories"
    ],
    relatedEvents: [
      { id: "1", title: "Annual Hotel Summit 2024", date: "2024-12-15" },
      { id: "2", title: "Tourism Recovery Initiative Launched", date: "2024-11-10" },
      { id: "4", title: "Hospitality Training Workshop", date: "2024-10-25" },
    ],
    speakers: []
  },
  {
    id: "4",
    title: "Hospitality Training Workshop",
    excerpt: "Professional development program for hotel staff",
    content: `Join us for an intensive hospitality training workshop designed to elevate the skills and knowledge of your hotel staff. This comprehensive program covers all aspects of modern hotel operations and customer service excellence.

    Workshop Modules:
    - Front desk operations and guest relations
    - Housekeeping standards and protocols
    - Food and beverage service excellence
    - Safety and emergency procedures
    - Digital booking systems and technology
    - Cross-cultural communication

    Participants will receive hands-on training from industry experts and certification upon completion. This workshop is ideal for new staff members and experienced professionals looking to update their skills.`,
    date: "2024-10-25",
    category: "Events",
    image: "/patan-guesthouse-nepal.jpg",
    gallery: [
      "/traditional-nepalese-hotel.jpg", 
      "/tourism-initiative.jpg", 
      "/bhaktapur-resort-scenic.jpg",
      "/guesthouse-kathmandu-thamel.jpg"
    ],
    time: "10:00 AM - 4:00 PM",
    location: "UNITY Training Center, Kathmandu",
    organizer: "UNITY Hotel Association",
    expectedAttendees: "50",
    registrationFee: "NPR 2,500",
    highlights: [
      "6 comprehensive training modules",
      "Hands-on practical sessions",
      "Expert trainers from 5-star hotels",
      "Certificate of completion",
      "Networking lunch included",
      "Follow-up support provided"
    ],
    relatedEvents: [
      { id: "1", title: "Annual Hotel Summit 2024", date: "2024-12-15" },
      { id: "3", title: "Member Spotlight: Excellence in Service", date: "2024-11-05" },
      { id: "6", title: "International Guest Exchange Program", date: "2024-10-15" },
    ],
    speakers: [
      { name: "Ramesh Koirala", title: "Training Director, UNITY", image: "/hotel-excellence.jpg" },
      { name: "Maya Gurung", title: "HR Manager, 5-Star Hotel", image: "/resort-kathmandu-luxury.jpg" },
    ]
  },
  {
    id: "5",
    title: "Tourism Safety Alert",
    excerpt: "Important guidelines for hotel operations",
    content: `IMPORTANT: New safety guidelines have been issued for all hotel operations in the Kathmandu Valley. All member hotels are required to implement these protocols immediately to ensure guest and staff safety.

    Mandatory Safety Protocols:
    - Enhanced cleaning and disinfection procedures
    - Staff health monitoring and screening
    - Guest registration and contact tracing
    - Emergency response plans
    - Safety equipment and PPE requirements
    - Regular safety audits and inspections

    Compliance Deadline: November 15, 2024

    Non-compliance may result in penalties and possible suspension of membership privileges. UNITY will conduct random inspections to ensure adherence to these guidelines.`,
    date: "2024-10-20",
    category: "Alerts",
    image: "/guesthouse-kathmandu-thamel.jpg",
    gallery: [
      "/traditional-nepalese-hotel.jpg", 
      "/tourism-initiative.jpg", 
      "/bhaktapur-resort-scenic.jpg",
      "/patan-guesthouse-nepal.jpg"
    ],
    time: "Immediate Effect",
    location: "All Member Hotels",
    organizer: "UNITY Safety Committee",
    expectedAttendees: "All Members",
    registrationFee: "N/A",
    highlights: [
      "Mandatory safety protocols",
      "Compliance deadline: November 15, 2024",
      "Random inspections planned",
      "Penalties for non-compliance",
      "Training sessions available",
      "24/7 helpline established"
    ],
    relatedEvents: [
      { id: "2", title: "Tourism Recovery Initiative Launched", date: "2024-11-10" },
      { id: "4", title: "Hospitality Training Workshop", date: "2024-10-25" },
      { id: "6", title: "International Guest Exchange Program", date: "2024-10-15" },
    ],
    speakers: []
  },
  {
    id: "6",
    title: "International Guest Exchange Program",
    excerpt: "Networking opportunity with global hospitality professionals",
    content: `UNITY is pleased to announce the International Guest Exchange Program, bringing together hospitality professionals from around the world for knowledge sharing and networking.

    Program Highlights:
    - Delegates from 15 countries participating
    - Cultural exchange sessions
    - Best practices sharing workshops
    - Partnership opportunities
    - Site visits to leading hotels in Kathmandu
    - Gala dinner and cultural program

    This unique opportunity allows our members to learn from international experts and establish valuable connections for future collaborations. The program includes both formal presentations and informal networking sessions.`,
    date: "2024-10-15",
    category: "Events",
    image: "/hotel-excellence.jpg",
    gallery: [
      "/traditional-nepalese-hotel.jpg", 
      "/tourism-initiative.jpg", 
      "/bhaktapur-resort-scenic.jpg",
      "/patan-guesthouse-nepal.jpg"
    ],
    time: "9:00 AM - 9:00 PM",
    location: "Hotel Radisson Blu, Kathmandu",
    organizer: "UNITY International Relations Committee",
    expectedAttendees: "200",
    registrationFee: "NPR 3,000",
    highlights: [
      "15 countries represented",
      "International guest speakers",
      "Cultural exchange sessions",
      "Partnership opportunities",
      "Hotel site visits included",
      "International networking dinner"
    ],
    relatedEvents: [
      { id: "1", title: "Annual Hotel Summit 2024", date: "2024-12-15" },
      { id: "4", title: "Hospitality Training Workshop", date: "2024-10-25" },
      { id: "5", title: "Tourism Safety Alert", date: "2024-10-20" },
    ],
    speakers: [
      { name: "John Smith", title: "Hospitality Director, USA", image: "/hotel-excellence.jpg" },
      { name: "Maria Garcia", title: "Hotel Manager, Spain", image: "/resort-kathmandu-luxury.jpg" },
      { name: "Li Wei", title: "Tourism Expert, China", image: "/luxury-hotel-kathmandu.jpg" },
      { name: "Raj Patel", title: "Hotel Owner, India", image: "/traditional-nepalese-hotel.jpg" },
    ]
  }
]

export default async function EventDetailPage({ params }: { params: Promise<{ id: string }> }) {
  // Await the params in Next.js 13+ App Router
  const resolvedParams = await params
  // Find the event by ID
  const event = mockEventsDatabase.find(e => e.id === resolvedParams.id)

  // If event not found, show 404
  if (!event) {
    notFound()
  }
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Events & News", href: "/events" },
            { label: event.title },
          ]}
        />

        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Back Button */}
            <Link
              href="/events"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold mb-6 transition"
            >
              <ArrowLeft size={20} />
              Back to Events
            </Link>

            {/* Hero Image */}
            <div className="mb-8 rounded-lg overflow-hidden h-96">
              <img
                src={event.image || "/placeholder.svg"}
                alt={event.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Header */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                  {event.category}
                </span>
              </div>

              <h1 className="text-4xl font-bold text-foreground mb-4">{event.title}</h1>

              <div className="space-y-2 text-muted-foreground mb-6">
                <div className="flex items-center gap-3">
                  <Calendar size={20} />
                  <span>
                    {new Date(event.date).toLocaleDateString("en-US", {
                      weekday: "long",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}{" "}
                    • {event.time}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin size={20} />
                  <span>{event.location}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users size={20} />
                  <span>{event.expectedAttendees} attendees</span>
                </div>
                <div className="flex items-center gap-3">
                  <Ticket size={20} />
                  <span>{event.registrationFee}</span>
                </div>
              </div>

              {/* Share Buttons */}
              <div className="flex gap-4 pb-6 border-b border-border">
                <button className="flex items-center gap-2 px-4 py-2 border border-border rounded-lg hover:bg-muted transition">
                  <Share2 size={18} />
                  Share
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-8">
                {/* Description */}
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">About</h2>
                  <p className="text-muted-foreground text-lg leading-relaxed whitespace-pre-line">{event.content}</p>
                </div>

                {/* Highlights */}
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Event Highlights</h2>
                  <ul className="space-y-3">
                    {event.highlights.map((highlight: string, i: number) => (
                      <li key={i} className="flex gap-3">
                        <span className="text-primary font-bold flex-shrink-0">•</span>
                        <span className="text-foreground">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Speakers */}
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Featured Speakers</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {event.speakers.map((speaker: any, i: number) => (
                      <div key={i} className="flex items-center gap-4 p-4 bg-muted/30 rounded-lg">
                        <div className="w-16 h-16 rounded-full overflow-hidden bg-muted">
                          <img
                            src={speaker.image || "/placeholder.svg"}
                            alt={speaker.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground">{speaker.name}</h3>
                          <p className="text-sm text-muted-foreground">{speaker.title}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Gallery */}
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Gallery</h2>
                  <div className="grid grid-cols-2 gap-4">
                    {event.gallery.map((image: string, i: number) => (
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
                {/* Registration Card */}
                <div className="bg-primary text-primary-foreground rounded-lg p-6 sticky top-24">
                  <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                    <Calendar size={20} />
                    Event Details
                  </h3>

                  <div className="space-y-3 mb-6 text-sm">
                    <div>
                      <span className="font-semibold">Organizer:</span>
                      <p>{event.organizer}</p>
                    </div>
                    <div>
                      <span className="font-semibold">Expected Attendees:</span>
                      <p>{event.expectedAttendees}</p>
                    </div>
                    <div>
                      <span className="font-semibold">Registration Fee:</span>
                      <p>{event.registrationFee}</p>
                    </div>
                  </div>

                  {event.category === "Events" && (
                    <button className="w-full bg-accent text-white py-3 rounded-lg font-semibold hover:opacity-90 transition mb-4">
                      Register Now
                    </button>
                  )}

                  <Link
                    href="/events"
                    className="w-full flex items-center justify-center gap-2 bg-primary-foreground/10 py-2 rounded-lg font-semibold hover:bg-primary-foreground/20 transition"
                  >
                    View All Events
                    <ArrowRight size={16} />
                  </Link>
                </div>

                {/* Related Events */}
                <div className="mt-6">
                  <h3 className="text-lg font-bold text-foreground mb-4">Related Events</h3>
                  <div className="space-y-3">
                    {event.relatedEvents.map((relatedEvent: any) => (
                      <Link
                        key={relatedEvent.id}
                        href={`/events/${relatedEvent.id}`}
                        className="block p-3 bg-muted/30 rounded-lg hover:bg-muted/50 transition"
                      >
                        <p className="font-semibold text-sm text-foreground">{relatedEvent.title}</p>
                        <p className="text-xs text-muted-foreground">
                          {new Date(relatedEvent.date).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </p>
                      </Link>
                    ))}
                  </div>
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
