"use client"

import { Users, Building2, Calendar, Award } from "lucide-react"
import { AnimatedCounter } from "./animated-counter"
import { useLanguage } from "@/contexts/language-context" 
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export function StatisticsSection() {
  const { language } = useLanguage()
  const router = useRouter()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  const stats = [
  {
    icon: Users,
    value: 29,
    label: language === "en" ? "Committee Members" : "समिति सदस्यहरू",
    suffix: "+",
    isDate: false,
    route: "/about#central-community-leadership",
  },
  {
    icon: Building2,
    value: 250,
    label: language === "en" ? "Member Hotels" : "सदस्य होटलहरू",
    suffix: "+",
    isDate: false,
    route: "/hotels",
  },
  {
    icon: Calendar,
    value: 50,
    label: language === "en" ? "Annual Events" : "वार्षिक कार्यक्रमहरू",
    suffix: "+",
    isDate: false,
    route: "/events",
  },
  {
    icon: Award,
    value: 2069,
    label: language === "en" ? "Established (B.S.)" : "स्थापना (बि.स.)",
    suffix: ".",
    isDate: true,
    route: null, // no redirect
  },
]

  return (
    <section className="py-16 px-4 md:px-8 bg-gradient-to-br from-primary/5 via-background to-accent/5 relative overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              onClick={() => stat.route && router.push(stat.route)}
              className={`text-center group transition-all duration-700 transform ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 mb-4 rounded-2xl bg-gradient-to-br from-primary to-accent text-white transition-all duration-300 shadow-lg ${
                stat.route ? " cursor-pointer hover:scale-110" : ""
              } ${isVisible ? 'scale-100' : 'scale-90'}`}
              style={{ transitionDelay: `${index * 100 + 200}ms` }}
              >
                <stat.icon size={32} />
              </div>

              <div className="text-4xl md:text-5xl font-bold text-foreground mb-2">
                {stat.isDate ? (
                  <span>{stat.value}</span>
                ) : (
                  <AnimatedCounter
                    end={stat.value}
                    suffix={stat.suffix}
                    duration={2500}
                  />
                )}
              </div>

              <p className="text-sm md:text-base text-muted-foreground font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
