"use client"

import Link from "next/link"
import Image from "next/image"
import { Phone } from "lucide-react"
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
          <div className="group bg-card rounded-xl p-8 border border-amber-400/50 hover:border-amber-400/70 shadow-sm hover:shadow-amber-100/50 transition-all duration-300">
            <div className="text-center">
              <h3 className="text-xl font-bold text-amber-600/80 dark:text-amber-400/80 mb-6">
                {t("about.leadershipTitle")}
              </h3>

              {/* President Photo */}
              <div className="relative w-40 h-40 mx-auto mb-5">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-accent p-0.5">
                  <div className="w-full h-full rounded-full overflow-hidden bg-card">
                    <Image
                      src={president?.photo || "/members/default.png"}
                      alt={president?.name || "President"}
                      width={160}
                      height={160}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Position */}
              <p className="text-xs font-semibold text-amber-600/80 dark:text-amber-400/80 uppercase tracking-wider mb-2">
                {president?.position || "President"}
              </p>
              
              {/* Name */}
              <h4 className="text-base font-bold text-foreground mb-4">
                {president?.name || "President Name"}
              </h4>

              {/* Contact */}
              {president?.phone && (
                <div className="flex items-center justify-center gap-2 pt-4 border-t border-border/30">
                  <Phone className="w-4 h-4 text-amber-500/70" />
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
