"use client"

import { Phone, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useLanguage } from "@/contexts/language-context"
import { workingCommittee } from "@/lib/committee-data"
import { useEffect, useState } from "react"

// Top leadership positions to show on homepage (first 4)
const topLeadership = workingCommittee.slice(0, 4)

export function CentralCommittee() {
  const { t } = useLanguage()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-background to-secondary/5">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-block mb-4">
            <span className="text-primary font-semibold text-sm tracking-widest uppercase">{t("members.title")}</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">{t("home.committee.title")}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t("home.committee.subtitle")}</p>
        </div>

        {/* Top Leadership - Show only 5 key positions */}
        <div className="mb-12">
          <h3
            className={`text-2xl font-bold text-primary mb-8 flex items-center gap-3 transition-all duration-700 transform ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            <div className="w-1 h-8 bg-gradient-to-b from-primary to-primary/50 rounded-full"></div>
            {t("home.committee.executive")}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {topLeadership.map((member, index) => {
              const isPresident = member.position === "President"
              return (
                <div
                  key={index}
                  className={`group relative rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl ${
                    isPresident 
                      ? "bg-white dark:bg-slate-900 border border-primary/60 hover:border-primary/80" 
                      : "bg-white dark:bg-slate-900 border border-border/50 hover:border-primary/50"
                  } transform transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
                  }`}
                  style={{ transitionDelay: `${300 + index * 100}ms` }}
                >
                  {/* Premium Diagonal Ribbon for President */}
                  {isPresident && (
                    <div className="absolute top-0 right-0 w-24 h-24 overflow-hidden z-20">
                      <div className="absolute top-[12px] right-[-32px] w-[140px] transform rotate-45 bg-gradient-to-r from-primary via-secondary to-accent text-white text-[10px] font-bold py-1.5 text-center shadow-lg tracking-wider uppercase">
                        PRESIDENT
                      </div>
                    </div>
                  )}
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                    isPresident 
                      ? "bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10" 
                      : "bg-gradient-to-br from-primary/5 to-transparent"
                  }`}></div>

                  <div className="p-6 relative z-10">
                    <div className="flex flex-col items-center text-center mb-4">
                      {/* Member Photo */}
                      <div className="relative w-24 h-24 mb-4 group-hover:scale-110 transition-transform duration-300">
                        <div className={`absolute inset-0 rounded-full p-1 ${
                          isPresident 
                            ? "bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10" 
                            : "bg-gradient-to-br from-primary to-accent"
                        }`}>
                          <div className="w-full h-full rounded-full overflow-hidden bg-white dark:bg-slate-900">
                            <Image
                              src={member.photo || "/placeholder-user.jpg"}
                              alt={member.name}
                              width={96}
                              height={96}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                      </div>
                      
                      <p className={`text-xs font-semibold uppercase tracking-wider mb-2 ${
                        isPresident ? "text-primary" : "text-primary"
                      }`}>
                        {member.position}
                      </p>
                      <h4 className="text-base font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                        {member.name}
                      </h4>
                    </div>

                    <div className={`flex items-center justify-center gap-2 pt-4 border-t ${
                      isPresident ? "border-primary/30" : "border-border/30"
                    }`}>
                      <Phone className={`w-4 h-4 shrink-0 ${isPresident ? "text-primary" : "text-primary/70"}`} />
                      <a
                        href={`tel:+977${member.phone}`}
                        className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300 group-hover:font-medium"
                      >
                        +977 {member.phone}
                      </a>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* View All Button */}
        <div
          className={`text-center transition-all duration-700 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '700ms' }}
        >
          <Link
            href="/about"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-accent text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105 group"
          >
            {t("common.viewAll")} {t("members.title")}
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </section>
  )
}
