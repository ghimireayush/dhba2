"use client"

import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"
import { memberOrganizations, getMemberOrganization } from "@/lib/member-organizations"
import { Phone, MapPin, Users, Building } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Breadcrumb } from "@/components/breadcrumb"

export default function MembersPage() {
  const { t } = useLanguage()

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-background to-muted">
        <Breadcrumb
          items={[{ label: "Home", href: "/" }, { label: "Members", href: "/members" }]}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Page Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              {t("members.title")}
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              {t("members.relatedOrgs")}
            </p>
          </div>

          {/* Member Organizations Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {memberOrganizations.map((org) => (
              <div
                key={org.id}
                className="group bg-white dark:bg-slate-900 rounded-xl border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl overflow-hidden"
              >
                <Link href={`/members/${org.id}`} className="block h-full">
                  <div className="p-6">
                    {/* Organization Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                          {org.name}
                        </h3>
                        <p className="text-sm text-muted-foreground mt-1">
                          {org.shortName}
                        </p>
                      </div>
                      <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold">
                        {org.committee.length} {t("members.membersCount")}
                      </div>
                    </div>

                    {/* Leadership Preview */}
                    <div className="mb-4">
                      <div className="flex items-center gap-3 text-sm text-muted-foreground mb-2">
                        <Users className="w-4 h-4" />
                        <span>{t("home.committee.executive")}</span>
                      </div>
                      <div className="space-y-2">
                        {org.committee.slice(0, 3).map((member, index) => (
                          <div key={index} className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-xs font-bold">
                              {member.name.charAt(0)}
                            </div>
                            <div>
                              <p className="font-medium text-foreground text-sm">{member.name}</p>
                              <p className="text-xs text-muted-foreground">{member.role}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Contact & Location */}
                    <div className="flex items-center justify-between pt-4 border-t border-border/30">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Phone className="w-4 h-4" />
                        <a
                          href={`tel:+977${org.committee[0]?.phone}`}
                          className="hover:text-primary transition-colors duration-300"
                        >
                          +977 {org.committee[0]?.phone}
                        </a>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Building className="w-4 h-4" />
                        <span className="truncate">{org.committee.length} {t("members.membersCount")}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
