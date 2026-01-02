"use client"

import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"
import { ASSOCIATION_CONFIG } from "@/config/associations"

export function AboutPreview() {
  const { t } = useLanguage()
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Text Section */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              {t("about.previewTitle")}
            </h2>
            <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
              {t("about.previewDescription", { count: ASSOCIATION_CONFIG.totalAssociations })}
            </p>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              {t("about.serviceAreas")}
            </p>
            <Link
              href="/about"
              className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:opacity-90 transition"
            >
              {t("about.readFullStory")}
            </Link>
          </div>

          {/* Right Leadership Card with Image */}
          <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg p-8 border border-primary/20">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                {t("about.leadershipTitle")}
              </h3>

              {/*  Photo */}
              <img
                src="/sarojale.jpeg"
                alt="Mr. Saroj Ale"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-primary/40"
              />

              <p className="text-3xl font-bold text-primary mb-2">Mr. Saroj Ale</p>
              <p className="text-muted-foreground mb-4">{t("about.presidentTitle")}</p>
              <p className="text-muted-foreground">
                Phone: <a href="tel:+9779851170835">+977 985-1170835</a>
              </p>

              <p className="text-sm text-muted-foreground mt-6 italic">
                "Through unity, professionalism, and innovation, we can elevate Kathmandu's reputation as a world-class
                destination."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
