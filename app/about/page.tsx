"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Breadcrumb } from "@/components/breadcrumb"
import { Phone } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { ASSOCIATION_CONFIG } from "@/config/associations"

export default function AboutPage() {
  const { t } = useLanguage()
  const leadership = [
    { name: "Mr. Suresh Baral", position: "President", phone: "9851040296", photo: "/sarojale.jpeg" },
    { name: "Bhavishwar Dubey", position: "Senior Vice President", phone: "9841505124", photo: "/ektalogo.png" },
    { name: "Mr. Jitendra Giri", position: "Vice President", phone: "9841222185", photo: "/ektalogo.png" },
    { name: "Mr. Manohari Kandel", position: "Vice President", phone: "9851061883", photo: "/ektalogo.png" },
    { name: "Mr. Vishnu Prasad Ghimire", position: "Vice President", phone: "9857030807", photo: "/ektalogo.png" },
    { name: "Mr. Mahendra Rai", position: "Vice President", phone: "9849451826", photo: "/ektalogo.png" },
    { name: "Mr. Kumar Shrestha", position: "Vice President", phone: "9851113741", photo: "/ektalogo.png" },
    { name: "Mr. Vishnu Prasad Upadhyay", position: "Vice President", phone: "9851060656", photo: "/ektalogo.png" },
    { name: "Mr. Sailendra Bikram Thapa", position: "General Secretary", phone: "9766868845", photo: "/ektalogo.png" },
    { name: "Mr. Shivalal Giri", position: "Deputy General Secretary", phone: "9851069163", photo: "/ektalogo.png" },
    { name: "Mr. Hari Prasad Aryal", position: "Secretary", phone: "9851217148", photo: "/ektalogo.png" },
    { name: "Ms. Devaki Bhandari", position: "Secretary", phone: "9843108533", photo: "/ektalogo.png" },
    { name: "Mr. Jayalal Shrestha", position: "Secretary", phone: "9841072094", photo: "/ektalogo.png" },
    { name: "Mr. Lal Bahadur Bania (Anish)", position: "Secretary", phone: "9851108710", photo: "/ektalogo.png" },
    { name: "Mr. Shalikram Thapa", position: "Treasurer", phone: "9841416176", photo: "/ektalogo.png" },
    { name: "Mr. Lekhanath Kharal", position: "Assistant Treasurer", phone: "9851018353", photo: "/ektalogo.png" },
  ]

  const members = [
    { name: "Mr. Numakant Pathak",position:"Member", phone: "9860571964", photo: "/ektalogo.png" },
    { name: "Mr. Captain Adhikari",position:"Member", phone: "9766433991", photo: "/ektalogo.png" },
    { name: "Mr. Nabin Adhikari",position:"Member", phone: "9846704805", photo: "/ektalogo.png" },
    { name: "Mr. Santosh Paudel",position:"Member", phone: "9823513561", photo: "/ektalogo.png" },
    { name: "Mr. Khemraj Upreti",position:"Member", phone: "9841814655", photo: "/ektalogo.png" },
    { name: "Mr. Madhav Prasad Gautam",position:"Member", phone: "9855068315", photo: "/ektalogo.png" },
    { name: "Mr. Sher Bahadur Bista",position:"Member", phone: "9844904684", photo: "/ektalogo.png" },
    { name: "Ms. Sharada Khadka",position:"Member", phone: "9849425774", photo: "/ektalogo.png" },
    { name: "Mr. Dil Bahadur Kshetri",position:"Member", phone: "9851082116", photo: "/ektalogo.png" },
    { name: "Mr. Lalit Bahadur Shrestha",position:"Member", phone: "9841185560", photo: "/ektalogo.png" },
    { name: "Ms. Renuka Yasko Limbu",position:"Member", phone: "9849384428", photo: "/ektalogo.png" },
    { name: "Ms. Sujata Maya Tamang",position:"Member", phone: "9849492825", photo: "/ektalogo.png" },
    { name: "Ms. Apsara Thapa",position:"Member", phone: "9840835193", photo: "/ektalogo.png" },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "About" }]} />

        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/10 to-accent/10 border-b border-border">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-6">About Unity  Hotel Kathmandu</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Unity  Hotel and guesthouse Business Association of Nepal is a dedicated organization representing the
              hospitality sector in Kathmandu. Established in 2074 B.S.,  serves as the umbrella organization for
              {t("about.fullDescription", { count: ASSOCIATION_CONFIG.totalAssociations })}
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              {t("about.serviceAreas")}
            </p>
            <div className="flex gap-4 mt-6">
              <div>
                <p className="text-sm text-muted-foreground">Phone</p>
                <p className="text-lg font-semibold text-foreground">+977 985-1170835</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Location</p>
                <p className="text-lg font-semibold text-foreground">Kathmandu, Nepal</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-primary/5 to-accent/5 border border-primary/20 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">Message from the President</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Dear Members, Partners, and Valued Stakeholders,
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                As President of the Unity Hotel and Guesthouse Business Association of Nepal, I am honored to lead an organization
                committed to the growth and excellence of our hospitality industry. Kathmandu, as Nepal's tourism hub,
                is home to a diverse range of hotels catering to global travelers.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our association advocates for hotel owners' rights, upholds service standards, and collaborates with
                tourism authorities to enhance the industry's overall development.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                I encourage all hoteliers to actively engage with Unity  initiatives and utilize our resources to
                strengthen their businesses. Through unity, professionalism, and innovation, we can elevate Kathmandu's
                reputation as a world-class destination while contributing to Nepal's tourism growth.
              </p>
              <div>
                <p className="font-semibold text-foreground">Mr.Saroj Ale</p>
                <p className="text-muted-foreground">President,  Unity Hotel and Guesthouse Business Association of Nepal</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Our Mission</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Unity Hotel and guesthouse Business Association of Nepalis dedicated to fostering excellence in the hospitality
                  industry. We unite hotel owners and managers to promote professional standards, sustainable practices,
                  and collaborative growth.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Our Vision</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To establish Kathmandu as the premier hospitality destination in South Asia through innovation,
                  quality service, and community engagement.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">What We Do</h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span>Represent member interests to government and tourism organizations</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span>Organize training and professional development programs</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span>Facilitate networking and collaboration among members</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span>Promote sustainable tourism and community development</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span>Maintain and enhance quality standards in the industry</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

       <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
  <div className="max-w-7xl mx-auto">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold text-foreground mb-2">Central Community Leadership</h2>
      <p className="text-muted-foreground">Meet the dedicated leaders driving forward</p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
      {leadership.map((member, index) => (
        <div
          key={index}
          className="bg-card border border-border rounded-lg p-6 hover:shadow-md transition flex flex-col items-center gap-4"
        >
          {/* Member Photo */}
          <img
            src={member.photo} // Ensure member object has photo URL
            alt={member.name}
            className="w-24 h-24 rounded-full object-cover"
          />
          {/* Member Info */}
          <div className="text-center">
            <h3 className="font-bold text-foreground mb-1">{member.name}</h3>
            <p className="text-primary font-semibold text-sm mb-2">{member.position}</p>
            <div className="flex justify-center items-center gap-2 text-muted-foreground text-sm">
              <Phone size={16} />
              <a href="tel:{member.phone}">{member.phone}</a> 
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

<section className="py-16 px-4 sm:px-6 lg:px-8">
  <div className="max-w-7xl mx-auto">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold text-foreground mb-2">General Members</h2>
      <p className="text-muted-foreground">Valued contributors to our association</p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
      {members.map((member, index) => (
        <div
          key={index}
          className="bg-gradient-to-r from-primary/5 to-accent/5 border border-border rounded-lg p-6 flex flex-col items-center gap-3"
        >
          {/* Member Photo */}
          <img
            src={member.photo} // Ensure member object has photo URL
            alt={member.name}
            className="w-20 h-20 rounded-full object-cover"
          />
          {/* Member Info */}
          <div className="text-center">
            <p className="font-semibold text-foreground mb-1">{member.name}</p>
             <p className="text-primary font-semibold text-sm mb-2">{member.position}</p>
            <div className="flex justify-center items-center gap-2 text-muted-foreground text-sm">
              <Phone size={14} />
              <a href="tel:{member.phone}">{member.phone}</a>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
      </main>
      <Footer />
    </div>
  )
}
