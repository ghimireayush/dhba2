"use client"

import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function Footer() {
  const { t } = useLanguage()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-b from-muted/50 to-foreground/5 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Brand column */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="relative h-12 w-auto flex items-center justify-center flex-shrink-0">
                <Image
                  src="/ektalogo.png"
                  alt="Ekata Hotel"
                  width={120}
                  height={48}
                  className="h-12 w-auto max-w-[120px] object-contain"
                />
              </div>
              <div className="hidden sm:block">
                <span className="text-base font-bold text-foreground leading-tight">Unity Hotel and Guesthouse</span>
                <p className="text-xs text-muted-foreground">Business Association of Nepal</p>
              </div>
            </div>
            <p className="text-foreground/70 text-sm leading-relaxed">{t("footer.brand")}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-foreground mb-6">{t("footer.quickLinks")}</h4>
            <ul className="space-y-3">
              {[
                { href: "/hotels", label: t("nav.hotels") },
                { href: "/destinations", label: t("nav.destinations") },
                { href: "/events", label: t("nav.events") },
                { href: "/about", label: t("nav.about") },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-foreground/70 hover:text-primary transition-smooth text-sm font-medium"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-bold text-foreground mb-6">{t("footer.resources")}</h4>
            <ul className="space-y-3">
              {[
                { href: "/gallery", label: t("nav.gallery") },
                { href: "/member-portal", label: t("nav.memberPortal") },
                { href: "/contact", label: t("nav.contact") },
                { href: "/", label: "Privacy Policy" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-foreground/70 hover:text-primary transition-smooth text-sm font-medium"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-foreground mb-6">{t("footer.contact")}</h4>
            <ul className="space-y-4">
              <li className="flex gap-3 items-start">
                <Phone size={18} className="text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs text-muted-foreground">{t("footer.phone")}</p>
                   <a href="tel:+9779851170835" className="text-muted-foreground">+977 985-1170835 </a>
                   <br/>
                   <a href="tel:+014566866" className="text-muted-foreground">+977 014566866</a>
                </div>
              </li>
              <li className="flex gap-3 items-start">
                <Mail size={18} className="text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs text-muted-foreground">{t("footer.email")}</p>  
                  <a href="mailto:info@ekata.org.np"         className="text-foreground/90 text-sm font-medium">info@ekata.org.np</a>
                </div>
              </li>
              <li className="flex gap-3 items-start">
                <MapPin size={18} className="text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs text-muted-foreground">{t("footer.location")}</p>
                  <p className="text-foreground/90 text-sm font-medium">  Near Tribhuvan International Airport <br/> Pasupatinath  Kathmandu,  </p>
                </div>
              </li>
            </ul>
            <div className="mt-6 p-3 bg-accent/10 rounded-lg border border-accent/20">
              <p className="text-xs text-foreground/70">
                <span className="font-semibold text-accent">{t("footer.officeHours")}</span>
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="flex flex-col items-center justify-center text-center gap-6">
  <p className="text-foreground/60 text-sm">
    © {currentYear} Unity Hotel and Guesthouse Business Association of Nepal. {t("footer.rights")}
  </p>
</div>

      </div>
    </footer>
  )
}
