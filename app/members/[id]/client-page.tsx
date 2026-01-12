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
                        ? "bg-gradient-to-br from-amber-50 via-white to-yellow-50 dark:from-amber-900/30 dark:via-slate-900 dark:to-yellow-900/30 border-2 border-amber-300/60 hover:border-amber-400/80 shadow-lg" 
                        : "bg-white dark:bg-slate-900 border border-border/50 hover:border-primary/50 shadow-lg"
                    }`}
                  >
                    <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                      isPresident 
                        ? "bg-gradient-to-br from-amber-400/10 to-yellow-400/10" 
                        : "bg-gradient-to-br from-primary/10 to-accent/10"
                    }`}></div>
                    
                    <div className="p-8 relative z-10">
                      <div className="flex flex-col items-center text-center mb-6">
                        {/* Member Photo */}
                        <div className="relative w-36 h-36 mb-6 group-hover:scale-110 transition-transform duration-500">
                          <div className={`absolute inset-0 rounded-full p-1 ${
                            isPresident 
                              ? "bg-gradient-to-br from-amber-400 via-yellow-500 to-amber-500 shadow-lg" 
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
                            <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-full flex items-center justify-center shadow-lg">
                              <Star className="w-4 h-4 text-white" />
                            </div>
                          )}
                        </div>
                        
                        <p className={`text-sm font-bold uppercase tracking-wider mb-3 ${
                          isPresident ? "text-amber-600 dark:text-amber-400" : "text-primary"
                        }`}>
                          {member.role}
                        </p>
                        <h4 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-500 mb-2">
                          {member.name}
                        </h4>
                        {isPresident && (
                          <div className="inline-flex items-center gap-1 px-3 py-1 bg-amber-100 dark:bg-amber-900/30 rounded-full">
                            <Star className="w-3 h-3 text-amber-600 dark:text-amber-400" />
                            <span className="text-xs font-semibold text-amber-700 dark:text-amber-300">President</span>
                          </div>
                        )}
                      </div>

                      {member.phone && (
                        <div className={`flex items-center justify-center gap-3 pt-6 border-t ${
                          isPresident ? "border-amber-200/50" : "border-border/30"
                        }`}>
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                            isPresident ? "bg-amber-100 dark:bg-amber-900/30" : "bg-primary/10"
                          }`}>
                            <Phone className={`w-4 h-4 ${isPresident ? "text-amber-600 dark:text-amber-400" : "text-primary"}`} />
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
