"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Breadcrumb } from "@/components/breadcrumb"
import { Phone, MapPin, Mail, Users, Target, Lightbulb, Award, Calendar, Star, Heart, Globe, Shield } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { workingCommittee, advisors, employees } from "@/lib/committee-data"
import Image from "next/image"

export default function AboutPage() {
  const { t } = useLanguage()
  
  const stats = [
    { number: "500+", label: "Member Hotels", icon: Users },
    { number: "8", label: "Key Locations", icon: MapPin },
    { number: "12+", label: "Years of Service", icon: Calendar },
    { number: "1000s", label: "Tourists Served", icon: Globe }
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "About" }]} />

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
                Established 2069 B.S.
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Unity Hotel & Guest House<br />Professional Association
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed">
              Pioneering excellence in Kathmandu's hospitality sector through unity, innovation, and sustainable growth
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {stats.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                    <Icon className="w-8 h-8 text-white mb-3 mx-auto" />
                    <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
                    <div className="text-white/80 text-sm">{stat.label}</div>
                  </div>
                )
              })}
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
                    Leading Kathmandu's Hospitality Revolution
                  </h2>
                </div>
                
                <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    Unity Hotel and Guest House Professional Association of Nepal stands as the cornerstone of Kathmandu's thriving hospitality landscape. Since our establishment in 2069 B.S., we have been the unwavering voice and collective strength for hundreds of hotels and guest houses across the valley.
                  </p>
                  <p>
                    Our strategic presence in key tourism hubs—including <strong>Naya Basti Tilaganga</strong>, <strong>Airport Sinamangal</strong>, <strong>Gausala Pingalasthan</strong>, <strong>Gyaneshwor</strong>, <strong>Sukedhara</strong>, <strong>Chakrapath</strong>, <strong>Basundhara</strong>, and <strong>Lazimpat</strong>—positions us at the heart of Nepal's tourism gateway.
                  </p>
                  <p>
                    We are more than an association; we are a family of hospitality professionals dedicated to elevating Kathmandu's status as a world-class destination while preserving our rich cultural heritage and ensuring sustainable growth for all stakeholders.
                  </p>
                </div>
                
                <div className="grid grid-cols-3 gap-4 mt-8">
                  <div className="text-center p-4 bg-primary/5 rounded-lg">
                    <Shield className="w-8 h-8 text-primary mx-auto mb-2" />
                    <div className="text-sm font-semibold">Quality Standards</div>
                  </div>
                  <div className="text-center p-4 bg-accent/5 rounded-lg">
                    <Heart className="w-8 h-8 text-accent mx-auto mb-2" />
                    <div className="text-sm font-semibold">Community Focus</div>
                  </div>
                  <div className="text-center p-4 bg-primary/5 rounded-lg">
                    <Globe className="w-8 h-8 text-primary mx-auto mb-2" />
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
                        <div className="text-sm text-muted-foreground">24/7 Support</div>
                        <div className="font-semibold text-foreground">+977 01-4586327</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                        <Mail className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">Email Us</div>
                        <div className="font-semibold text-foreground">ekatahotel2069@gmail.com</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">Visit Us</div>
                        <div className="font-semibold text-foreground">Kathmandu, Nepal</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8 p-6 bg-gradient-to-r from-amber-50 to-yellow-50 dark:from-amber-900/20 dark:to-yellow-900/20 rounded-xl border border-amber-200/50">
                    <div className="flex items-center gap-3 mb-2">
                      <Star className="w-5 h-5 text-amber-600" />
                      <span className="font-semibold text-amber-800 dark:text-amber-200">Excellence Since 2069</span>
                    </div>
                    <p className="text-sm text-amber-700 dark:text-amber-300">
                      Over a decade of dedicated service to Nepal's hospitality industry
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
                President's Message
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                A Vision of Unity & Excellence
              </h2>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8 items-center">
              <div className="lg:col-span-2">
                <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl p-8 border border-primary/10 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-2xl"></div>
                  
                  <div className="relative z-10">
                    <div className="mb-6">
                      <p className="text-2xl font-light text-foreground mb-2 italic">
                        "Dear Esteemed Members, Partners, and Valued Stakeholders,"
                      </p>
                    </div>
                    
                    <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                      <p>
                        It is with profound honor and unwavering commitment that I serve as President of the Unity Hotel and Guest House Professional Association, Nepal. Our association stands as a beacon of excellence in Kathmandu's vibrant hospitality landscape—a sector that forms the backbone of Nepal's tourism industry.
                      </p>
                      <p>
                        In my capacity as your President, I have witnessed firsthand the incredible resilience, innovation, and dedication that defines our members. From the bustling streets of Airport Sinamangal to the cultural heart of Gyaneshwor, our member establishments are not just businesses—they are ambassadors of Nepali hospitality, custodians of our rich culture, and pillars of our local economy.
                      </p>
                      <p>
                        Our mission extends far beyond mere representation. We are architects of sustainable tourism, champions of quality standards, and facilitators of collective growth. Through strategic advocacy, professional development, and community engagement, we are building a future where Kathmandu stands as South Asia's premier hospitality destination.
                      </p>
                      <p>
                        I call upon every hotelier and hospitality professional to actively participate in our initiatives. Together, we can overcome challenges, seize opportunities, and create an ecosystem where excellence thrives, traditions are preserved, and innovation flourishes.
                      </p>
                    </div>
                    
                    <div className="mt-8 pt-6 border-t border-border">
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                          <Award className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <p className="font-bold text-xl text-foreground">Mr. Saroj Ale</p>
                          <p className="text-primary font-semibold">President</p>
                          <p className="text-sm text-muted-foreground">Unity Hotel & Guest House Professional Association, Nepal</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-amber-50 to-yellow-50 dark:from-amber-900/20 dark:to-yellow-900/20 rounded-xl p-6 border border-amber-200/50">
                  <Star className="w-8 h-8 text-amber-600 mb-3" />
                  <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-2">Leadership Commitment</h4>
                  <p className="text-sm text-amber-700 dark:text-amber-300">
                    Dedicated to advancing the interests of our members and uplifting the entire hospitality sector
                  </p>
                </div>
                
                <div className="bg-gradient-to-br from-blue-50 to-primary/10 dark:from-blue-900/20 dark:to-primary/20 rounded-xl p-6 border border-blue-200/50">
                  <Target className="w-8 h-8 text-blue-600 mb-3" />
                  <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-2">Strategic Vision</h4>
                  <p className="text-sm text-blue-700 dark:text-blue-300">
                    Building a unified voice for Kathmandu's hospitality community
                  </p>
                </div>
                
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl p-6 border border-green-200/50">
                  <Heart className="w-8 h-8 text-green-600 mb-3" />
                  <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">Community First</h4>
                  <p className="text-sm text-green-700 dark:text-green-300">
                    Fostering collaboration and mutual growth among all members
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission, Vision & Values */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
                Our Foundation
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Mission, Vision & Values
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                The guiding principles that shape our actions and drive our commitment to excellence
              </p>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Mission */}
              <div>
                <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8 border border-primary/20 h-full">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mb-6">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    To unite and empower Kathmandu's hospitality professionals through advocacy, education, and collaboration, fostering an ecosystem of excellence that benefits our members, guests, and the broader community.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-muted-foreground">Champion member interests at all levels</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-muted-foreground">Elevate service standards through training</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-muted-foreground">Promote sustainable tourism practices</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              {/* Vision */}
              <div>
                <div className="bg-gradient-to-br from-accent/5 to-primary/5 rounded-2xl p-8 border border-accent/20 h-full">
                  <div className="w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-2xl flex items-center justify-center mb-6">
                    <Lightbulb className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    To establish Kathmandu as South Asia's premier hospitality destination, where traditional Nepali warmth meets world-class excellence, setting new benchmarks in guest satisfaction and sustainable tourism.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-muted-foreground">Global recognition for Kathmandu hospitality</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-muted-foreground">Innovation-driven service excellence</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-muted-foreground">Sustainable growth for all stakeholders</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              {/* Values */}
              <div>
                <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8 border border-primary/20 h-full">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mb-6">
                    <Heart className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">Our Values</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Our core values guide every decision and action, ensuring we remain true to our purpose while adapting to evolving industry needs.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-muted-foreground"><strong>Unity:</strong> Strength in collaboration</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-muted-foreground"><strong>Excellence:</strong> Pursuit of quality</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-muted-foreground"><strong>Integrity:</strong> Trust in every action</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

       {/* Team Sections */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-secondary/5">
          <div className="max-w-7xl mx-auto">
            {/* Working Committee Section */}
            <div className="text-center mb-16">
              <div className="inline-block mb-4">
                <span className="text-primary font-semibold text-sm tracking-widest uppercase">Leadership</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Working Committee</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
                Meet the distinguished leaders who drive our association's vision and champion the interests of Kathmandu's hospitality community
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-8 mb-20">
              {workingCommittee.map((member, index) => {
                const isPresident = member.position === "President"
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
                            <div className="w-full h-full rounded-full overflow-hidden bg-white dark:bg-slate-900">
                              <Image
                                src={member.photo || "/placeholder-user.jpg"}
                                alt={member.name}
                                width={144}
                                height={144}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
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
                        }`} dangerouslySetInnerHTML={{ __html: member.position }}></p>
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

            {/* Advisors Section */}
            <div className="text-center mb-16">
              <div className="inline-block mb-4">
                <span className="text-primary font-semibold text-sm tracking-widest uppercase">Guidance</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Honorary Advisors</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
                Esteemed experts providing strategic guidance and wisdom to shape our association's future
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-8 mb-20">
              {advisors.map((member, index) => (
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
                          <div className="w-full h-full rounded-full overflow-hidden bg-white dark:bg-slate-900">
                            <Image
                              src={member.photo || "/placeholder-user.jpg"}
                              alt={member.name}
                              width={128}
                              height={128}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-xs font-bold text-primary uppercase tracking-wider mb-3" dangerouslySetInnerHTML={{ __html: member.position }}></p>
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

            {/* Employees Section */}
            <div className="text-center mb-12">
              <div className="inline-block mb-4">
                <span className="text-primary font-semibold text-sm tracking-widest uppercase">Support</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Dedicated Staff</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
                The backbone of our association, ensuring smooth operations and exceptional member services
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-8">
              {employees.map((member, index) => (
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
                          <div className="w-full h-full rounded-full overflow-hidden bg-white dark:bg-slate-900">
                            <Image
                              src={member.photo || "/placeholder-user.jpg"}
                              alt={member.name}
                              width={128}
                              height={128}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-xs font-bold text-primary uppercase tracking-wider mb-3" dangerouslySetInnerHTML={{ __html: member.position }}></p>
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
          </div>
        </section>

</main>
      <Footer />
    </div>
  )
}
