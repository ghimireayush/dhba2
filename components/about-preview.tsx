"use client"

import Link from "next/link"
import Image from "next/image"
import { Phone, Star } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { workingCommittee } from "@/lib/committee-data"


export function AboutPreview() {
  const { t } = useLanguage()
  
  // Get president data from committee
  const president = workingCommittee.find(member => member.position === "President")
  
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Text Section */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              DHBA - District Hotel Business Association
            </h2>
            <p className="text-lg text-muted-foreground mb-4 leading-relaxed text-justify">
              {t("about.previewDescription")}
            </p>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed text-justify">
              {t("about.serviceAreas")}
            </p>
            <Link
              href="/about"
              className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:opacity-90 transition"
            >
              {t("about.readFullStory")}
            </Link>
          </div>

          {/* Right Leadership Card */}
          <div className="group relative bg-card rounded-xl p-8 border border-primary/50 hover:border-primary/70 shadow-sm hover:shadow-primary/50 transition-all duration-300 overflow-hidden">
            {/* Premium Diagonal Ribbon */}
            <div className="absolute top-0 right-0 w-24 h-24 overflow-hidden z-20">
              <div className="absolute top-[12px] right-[-32px] w-[140px] transform rotate-45 bg-gradient-to-r from-primary via-secondary to-accent text-white text-[10px] font-bold py-1.5 text-center shadow-lg tracking-wider uppercase">
                PRESIDENT
              </div>
            </div>
            
            <div className="text-center">
              <h3 className="text-xl font-bold text-primary mb-6">
                {t("about.leadershipTitle")}
              </h3>

              {/* President Photo */}
              <div className="relative w-40 h-40 mx-auto mb-5">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary via-secondary to-accent p-1 shadow-lg">
                  <div className="w-full h-full rounded-full overflow-hidden bg-card">
                    <Image
                      src={president?.photo || "/dbha.png"}
                      alt={president?.name || "President"}
                      width={160}
                      height={160}
                      className={president?.photo ? "w-full h-full object-cover" : "w-3/4 h-3/4 object-contain mx-auto mt-3"}
                    />
                  </div>
                </div>
                {/* Star Badge */}
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-secondary to-accent rounded-full flex items-center justify-center shadow-lg">
                  <Star className="w-4 h-4 text-white" />
                </div>
              </div>

              {/* Position */}
              <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">
                {president?.position || "President"}
              </p>
              
              {/* Name */}
              <h4 className="text-base font-bold text-foreground mb-4">
                {president?.name || "President Name"}
              </h4>

              {/* Contact */}
              {president?.phone && (
                <div className="flex items-center justify-center gap-2 pt-4 border-t border-border/30">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <Phone className="w-4 h-4 text-primary" />
                  </div>
                  <a href={`tel:+977${president.phone.replace(/[^0-9]/g, '')}`} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    +977 {president.phone}
                  </a>
                </div>
              )}

              {/* Quote */}
              <p className="text-sm text-muted-foreground italic mt-4 pt-4 border-t border-border/30">
                "Through DHBA, professionalism, and innovation, we can elevate Kathmandu's reputation as a world-class destination."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
