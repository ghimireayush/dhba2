"use client"

import { getMemberOrganization, memberOrganizations } from "@/lib/member-organizations"
import { Breadcrumb } from "@/components/breadcrumb"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Phone, Users, MapPin, Calendar, Globe, Star } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { notFound, useParams } from "next/navigation"
import { useLanguage } from "@/contexts/language-context"

export default function ClientPage() {
  const { id } = useParams<{ id: string }>()
  const organization = getMemberOrganization(id)
  const { t } = useLanguage()

  if (!organization) {
    notFound()
  }

  // Separate president/leadership from regular members
  const leadership = organization.committee.filter(m => 
    m.role.toLowerCase().includes('president') || 
    m.role.toLowerCase().includes('secretary') || 
    m.role.toLowerCase().includes('treasurer')
  )
  const regularMembers = organization.committee.filter(m => 
    m.role.toLowerCase() === 'member'
  )

  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Breadcrumb
          items={[{ label: "Home", href: "/" }, { label: "Members", href: "/members" }, { label: organization.shortName }]}
        />

        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary via-primary/90 to-accent/90 overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute inset-0">
            <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-48 h-48 bg-white/5 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-accent/10 rounded-full blur-3xl"></div>
          </div>
          
          <div className="relative max-w-6xl mx-auto text-center">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-semibold mb-4">
                Established {organization.established}
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              {organization.name}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed">
              {organization.description}
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <Users className="w-8 h-8 text-white mb-3 mx-auto" />
                <div className="text-3xl font-bold text-white mb-1">{organization.committee.length}</div>
                <div className="text-white/80 text-sm">Committee Members</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <MapPin className="w-8 h-8 text-white mb-3 mx-auto" />
                <div className="text-xl font-bold text-white mb-1">{organization.location}</div>
                <div className="text-white/80 text-sm">Location</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 col-span-2 md:col-span-1">
                <Globe className="w-8 h-8 text-white mb-3 mx-auto" />
                <div className="text-3xl font-bold text-white mb-1">DHBA</div>
                <div className="text-white/80 text-sm">Parent Organization</div>
              </div>
            </div>
          </div>
        </section>
         {/* About Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="mb-6">
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
                    About Us
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                    Leading Kathmandu's Hospitality DHBA Front
                  </h2>
                </div>
                
                <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    The District Hotel Business Association Kathmandu (DHBA) is a dedicated organization representing hospitality sector in Kathmandu. Established in 2074 B.S., DHBA serves as umbrella organization for seven active hotel business associations (units) operating in key areas of Kathmandu, including <strong>Kalanki</strong>, <strong>Sundhara</strong>, <strong>Bagbazar</strong>, <strong>Koteshwor</strong>, <strong>Airport</strong>, <strong>Chabahil</strong>, <strong>New Bus Park</strong>, and <strong>Balaju</strong>.
                  </p>
                  <p>
                    Our association is committed to fostering growth, collaboration, and excellence in hotel industry by uniting hotel owners, managers, and hospitality professionals to enhance service quality, promote tourism, and advocate for the interests of our members. With our central office located in Balaju, Kathmandu, we work closely with tourism authorities, government bodies, and industry stakeholders to ensure that our members receive the necessary support and opportunities for growth.
                  </p>
                  <p>
                    DHBA actively works to protect and promote the professional rights of hoteliers, advocating for favorable government policies, coordinating with relevant authorities on matters of peace and security, contributing to the state through taxation, and collaborating with local bodies to create a business-friendly environment. Additionally, we conduct regular training and workshops to enhance the skills and knowledge of hoteliers. We welcome all hotels, lodges, and guesthouses to join us in making Kathmandu a premier hospitality destination. Together, we strive to elevate industry standards and contribute to Nepal's tourism-driven economy.
                  </p>
                </div>
                
                <div className="grid grid-cols-3 gap-4 mt-8">
                  <div className="text-center p-4 bg-primary/5 rounded-lg">
                    <Star className="w-8 h-8 text-primary mx-auto mb-2" />
                    <div className="text-sm font-semibold">Quality Standards</div>
                  </div>
                  <div className="text-center p-4 bg-accent/5 rounded-lg">
                    <Star className="w-8 h-8 text-accent mx-auto mb-2" />
                    <div className="text-sm font-semibold">Community Focus</div>
                  </div>
                  <div className="text-center p-4 bg-primary/5 rounded-lg">
                    <Star className="w-8 h-8 text-primary mx-auto mb-2" />
                    <div className="text-sm font-semibold">Global Excellence</div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 border border-primary/20">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                        <Phone className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">Phone</div>
                        <div className="font-semibold text-foreground">+977 01-4981882</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                        <Phone className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">Email Us</div>
                        <div className="font-semibold text-foreground">ktmhotelbusinessassociation@gmail.com</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">Visit Us</div>
                        <div className="font-semibold text-foreground">Balaju-16, Kathmandu</div>
                      </div>
                    </div>
                  </div>
                   
                  <div className="mt-8 p-6 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl border border-primary/20">
                    <div className="flex items-center gap-3 mb-2">
                      <Star className="w-5 h-5 text-primary" />
                      <span className="font-semibold text-primary">Excellence Since 2074</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Committed service to Nepal's hospitality industry
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

       

       
         {/* President's Message */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/5 to-accent/5">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-semibold mb-4">
                Message from The Chairperson
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                A Vision of Hospitality Excellence & Collaboration
              </h2>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8 items-center">
              <div className="lg:col-span-2">
                <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl p-8 border border-primary/10 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-2xl"></div>
                   
                  <div className="relative z-10">
                    <div className="mb-6">
                      <p className="text-2xl font-light text-foreground mb-2 italic">
                        "{organization.presidentMessage?.greeting || "Dear Esteemed Members, Partners, and Valued Stakeholders,"}"
                      </p>
                    </div>
                    
                    <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                      {(organization.presidentMessage?.paragraphs || [
                        "As President of our association, I am honored to lead an organization committed to the growth and excellence of our hospitality industry.",
                        "I encourage all hoteliers to actively engage with our initiatives and utilize our resources to strengthen their businesses. Through collaboration, professionalism, and innovation, we can elevate our reputation as a premier hospitality destination."
                      ]).map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                      ))}
                    </div>
                    
                    <div className="mt-8 pt-6 border-t border-border">
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                          <Star className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <p className="font-bold text-xl text-foreground">{organization.presidentMessage?.presidentName || "President"}</p>
                          <p className="text-primary font-semibold">{organization.presidentMessage?.presidentTitle || "President"}</p>
                          <p className="text-sm text-muted-foreground">{organization.presidentMessage?.organization || organization.name}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl p-6 border border-primary/20">
                  <Star className="w-8 h-8 text-primary mb-3" />
                  <h4 className="font-bold text-primary mb-2">Leadership Commitment</h4>
                  <p className="text-sm text-muted-foreground">
                    Dedicated to advancing the interests of our members and uplifting the entire hospitality sector
                  </p>
                </div>
                
                <div className="bg-gradient-to-br from-secondary/10 to-primary/10 rounded-xl p-6 border border-secondary/20">
                  <Star className="w-8 h-8 text-secondary mb-3" />
                  <h4 className="font-bold text-secondary mb-2">Strategic Vision</h4>
                  <p className="text-sm text-muted-foreground">
                    Building a collective voice for Kathmandu's hospitality community
                  </p>
                </div>
                
                <div className="bg-gradient-to-br from-accent/10 to-primary/10 rounded-xl p-6 border border-accent/20">
                  <Star className="w-8 h-8 text-accent mb-3" />
                  <h4 className="font-bold text-accent mb-2">Community First</h4>
                  <p className="text-sm text-muted-foreground">
                    Fostering collaboration and mutual growth among all members
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Committee Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-secondary/5">
          <div className="max-w-7xl mx-auto">
            {/* Leadership Section */}
            <div className="text-center mb-16">
              <div className="inline-block mb-4">
                <span className="text-primary font-semibold text-sm tracking-widest uppercase">Leadership</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Executive Committee</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
                Meet the dedicated leaders driving {organization.shortName}'s vision forward
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-8 mb-20">
              {leadership.map((member, index) => {
                const isPresident = member.role.toLowerCase() === "president"
                return (
                  <div
                    key={index}
                    className={`group relative rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 w-full sm:w-[calc(50%-1rem)] md:w-[calc(33.333%-1.5rem)] lg:w-[calc(25%-1.5rem)] max-w-[280px] ${
                      isPresident 
                        ? "bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 border-2 border-primary/60 hover:border-primary/80 shadow-lg" 
                        : "bg-white dark:bg-slate-900 border border-border/50 hover:border-primary/50 shadow-lg"
                    }`}
                  >
                    {/* Premium Diagonal Ribbon for President */}
                    {isPresident && (
                      <div className="absolute top-0 right-0 w-24 h-24 overflow-hidden z-20">
                        <div className="absolute top-[12px] right-[-32px] w-[140px] transform rotate-45 bg-gradient-to-r from-primary via-secondary to-accent text-white text-[10px] font-bold py-1.5 text-center shadow-lg tracking-wider uppercase">
                          PRESIDENT
                        </div>
                      </div>
                    )}
                    <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                      isPresident 
                        ? "bg-gradient-to-br from-primary/10 to-accent/10" 
                        : "bg-gradient-to-br from-primary/10 to-accent/10"
                    }`}></div>
                    
                    <div className="p-8 relative z-10">
                      <div className="flex flex-col items-center text-center mb-6">
                        {/* Member Photo */}
                        <div className="relative w-36 h-36 mb-6 group-hover:scale-110 transition-transform duration-500">
                          <div className={`absolute inset-0 rounded-full p-1 ${
                            isPresident 
                              ? "bg-gradient-to-br from-primary via-secondary to-accent shadow-lg" 
                              : "bg-gradient-to-br from-primary to-accent shadow-lg"
                          }`}>
                            <div className="w-full h-full rounded-full overflow-hidden bg-white dark:bg-slate-900 flex items-center justify-center">
                              <Image
                                src={member.photo || "/dbha.png"}
                                alt={member.name}
                                width={144}
                                height={144}
                                className={member.photo ? "w-full h-full object-cover" : "w-3/4 h-3/4 object-contain"}
                              />
                            </div>
                          </div>
                          {isPresident && (
                            <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-secondary to-accent rounded-full flex items-center justify-center shadow-lg">
                              <Star className="w-4 h-4 text-white" />
                            </div>
                          )}
                        </div>
                        
                        <p className={`text-sm font-bold uppercase tracking-wider mb-3 ${
                          isPresident ? "text-primary" : "text-primary"
                        }`}>
                          {member.role}
                        </p>
                        <h4 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-500 mb-2">
                          {member.name}
                        </h4>
                      </div>

                      {member.phone && (
                        <div className={`flex items-center justify-center gap-3 pt-6 border-t ${
                          isPresident ? "border-primary/30" : "border-border/30"
                        }`}>
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                            isPresident ? "bg-primary/20" : "bg-primary/10"
                          }`}>
                            <Phone className={`w-4 h-4 ${isPresident ? "text-primary" : "text-primary"}`} />
                          </div>
                          <a
                            href={`tel:+977${member.phone}`}
                            className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300 group-hover:font-medium"
                          >
                            +977 {member.phone}
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Regular Members Section */}
            {regularMembers.length > 0 && (
              <>
                <div className="text-center mb-16">
                  <div className="inline-block mb-4">
                    <span className="text-primary font-semibold text-sm tracking-widest uppercase">Team</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Committee Members</h2>
                  <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
                    Dedicated members contributing to the growth and success of our association
                  </p>
                </div>

                <div className="flex flex-wrap justify-center gap-8">
                  {regularMembers.map((member, index) => (
                    <div
                      key={index}
                      className="group relative bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 w-full sm:w-[calc(50%-1rem)] md:w-[calc(33.333%-1.5rem)] lg:w-[calc(25%-1.5rem)] max-w-[280px]"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      <div className="p-8 relative z-10">
                        <div className="flex flex-col items-center text-center mb-6">
                          {/* Member Photo */}
                          <div className="relative w-32 h-32 mb-6 group-hover:scale-110 transition-transform duration-500">
                            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-accent p-1 shadow-lg">
                              <div className="w-full h-full rounded-full overflow-hidden bg-white dark:bg-slate-900 flex items-center justify-center">
                                <Image
                                  src={member.photo || "/dbha.png"}
                                  alt={member.name}
                                  width={128}
                                  height={128}
                                  className={member.photo ? "w-full h-full object-cover" : "w-3/4 h-3/4 object-contain"}
                                />
                              </div>
                            </div>
                          </div>
                          
                          <p className="text-xs font-bold text-primary uppercase tracking-wider mb-3">
                            {member.role}
                          </p>
                          <h4 className="text-base font-bold text-foreground group-hover:text-primary transition-colors duration-500">
                            {member.name}
                          </h4>
                        </div>

                        {member.phone && (
                          <div className="flex items-center justify-center gap-3 pt-6 border-t border-border/30">
                            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                              <Phone className="w-4 h-4 text-primary" />
                            </div>
                            <a
                              href={`tel:+977${member.phone}`}
                              className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300 group-hover:font-medium"
                            >
                              +977 {member.phone}
                            </a>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}

            {/* Advisors Section */}
            {organization.advisors && organization.advisors.length > 0 && (
              <>
                <div className="text-center mb-16 mt-20">
                  <div className="inline-block mb-4">
                    <span className="text-primary font-semibold text-sm tracking-widest uppercase">Guidance</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Honorary Advisors</h2>
                  <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
                    Esteemed experts providing strategic guidance and wisdom
                  </p>
                </div>

                <div className="flex flex-wrap justify-center gap-8 mb-20">
                  {organization.advisors.map((member, index) => (
                    <div
                      key={index}
                      className="group relative bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 w-full sm:w-[calc(50%-1rem)] md:w-[calc(33.333%-1.5rem)] lg:w-[calc(25%-1.5rem)] max-w-[280px]"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      <div className="p-8 relative z-10">
                        <div className="flex flex-col items-center text-center mb-6">
                          <div className="relative w-32 h-32 mb-6 group-hover:scale-110 transition-transform duration-500">
                            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-accent p-1 shadow-lg">
                              <div className="w-full h-full rounded-full overflow-hidden bg-white dark:bg-slate-900 flex items-center justify-center">
                                <Image
                                  src={member.photo || "/dbha.png"}
                                  alt={member.name}
                                  width={128}
                                  height={128}
                                  className={member.photo ? "w-full h-full object-cover" : "w-3/4 h-3/4 object-contain"}
                                />
                              </div>
                            </div>
                          </div>
                          
                          <p className="text-xs font-bold text-primary uppercase tracking-wider mb-3">
                            {member.role}
                          </p>
                          <h4 className="text-base font-bold text-foreground group-hover:text-primary transition-colors duration-500">
                            {member.name}
                          </h4>
                        </div>

                        {member.phone && (
                          <div className="flex items-center justify-center gap-3 pt-6 border-t border-border/30">
                            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                              <Phone className="w-4 h-4 text-primary" />
                            </div>
                            <a
                              href={`tel:+977${member.phone}`}
                              className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300 group-hover:font-medium"
                            >
                              +977 {member.phone}
                            </a>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}

            {/* Staff Section */}
            {organization.staff && organization.staff.length > 0 && (
              <>
                <div className="text-center mb-16 mt-20">
                  <div className="inline-block mb-4">
                    <span className="text-primary font-semibold text-sm tracking-widest uppercase">Support</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Dedicated Staff</h2>
                  <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
                    The backbone of our association, ensuring smooth operations
                  </p>
                </div>

                <div className="flex flex-wrap justify-center gap-8">
                  {organization.staff.map((member, index) => (
                    <div
                      key={index}
                      className="group relative bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 w-full sm:w-[calc(50%-1rem)] md:w-[calc(33.333%-1.5rem)] lg:w-[calc(25%-1.5rem)] max-w-[280px]"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      <div className="p-8 relative z-10">
                        <div className="flex flex-col items-center text-center mb-6">
                          <div className="relative w-32 h-32 mb-6 group-hover:scale-110 transition-transform duration-500">
                            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-accent p-1 shadow-lg">
                              <div className="w-full h-full rounded-full overflow-hidden bg-white dark:bg-slate-900 flex items-center justify-center">
                                <Image
                                  src={member.photo || "/dbha.png"}
                                  alt={member.name}
                                  width={128}
                                  height={128}
                                  className={member.photo ? "w-full h-full object-cover" : "w-3/4 h-3/4 object-contain"}
                                />
                              </div>
                            </div>
                          </div>
                          
                          <p className="text-xs font-bold text-primary uppercase tracking-wider mb-3">
                            {member.role}
                          </p>
                          <h4 className="text-base font-bold text-foreground group-hover:text-primary transition-colors duration-500">
                            {member.name}
                          </h4>
                        </div>

                        {member.phone && (
                          <div className="flex items-center justify-center gap-3 pt-6 border-t border-border/30">
                            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                              <Phone className="w-4 h-4 text-primary" />
                            </div>
                            <a
                              href={`tel:+977${member.phone}`}
                              className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300 group-hover:font-medium"
                            >
                              +977 {member.phone}
                            </a>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </section>

        {/* Location Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block mb-4">
                <span className="text-primary font-semibold text-sm tracking-widest uppercase">Location</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Find Our Office</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
                Visit our central office in Kathmandu's hospitality district
              </p>
            </div>
            
            <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl overflow-hidden border border-border/50">
              <div className="p-6 border-b border-border/50 bg-gradient-to-r from-primary/5 to-accent/5">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center">
                    <MapPin className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-1">District Hotel Business Association Kathmandu</h3>
                    <p className="text-muted-foreground text-sm">Balaju, 16, Kathmandu</p>
                  </div>
                </div>
              </div>
              
              <div className="relative h-80 lg:h-96 bg-muted">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.4567890123456!2d85.3508272!3d27.7058835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1981e4290e07:0xf62e653d652cfb9d!2sPalagya+Hotel!5e0!3m2!1sen!2snp"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="District Hotel Business Association Kathmandu Location Map"
                  className="rounded-b-2xl"
                />
              </div>

              <div className="p-6 bg-gradient-to-r from-primary/5 to-accent/5 border-t border-border/50">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <MapPin className="text-primary" size={16} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground text-sm mb-1">Strategic Location</h4>
                      <p className="text-xs text-muted-foreground">Centrally located in Kathmandu's hospitality hub</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Phone className="text-primary" size={16} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground text-sm mb-1">Contact Information</h4>
                      <p className="text-xs text-muted-foreground">01-4981882 / 9851040296 for appointments</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Phone className="text-primary" size={16} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground text-sm mb-1">Business Hours</h4>
                      <p className="text-xs text-muted-foreground">Sunday-Friday: 9AM-5PM, Saturday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Organizations */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block mb-4">
                <span className="text-primary font-semibold text-sm tracking-widest uppercase">Network</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{t("members.relatedOrgs")}</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
                Explore other member organizations under DHBA
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {memberOrganizations
                .filter((org) => org.id !== organization.id)
                .map((org) => (
                  <Link
                    key={org.id}
                    href={`/members/${org.id}`}
                    className="group p-6 bg-white dark:bg-slate-900 border border-border/50 rounded-2xl hover:border-primary/50 hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                        <Users className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-foreground group-hover:text-primary transition-colors duration-300 mb-2">
                          {org.name}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {org.committee.length} {t("members.membersCount")}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
