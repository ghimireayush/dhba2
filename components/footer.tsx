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
                  src="/dbha.png"
                  alt="DHBA"
                  width={120}
                  height={48}
                  className="h-12 w-auto max-w-[120px] object-contain"
                />
              </div>
              <div className="hidden sm:block">
                <span className="text-base font-bold text-foreground leading-tight">
                  {t("footer.orgName")}<br/>{t("footer.country")}
                </span>
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
                   <a href="tel:+977014981882" className="text-muted-foreground">+977 01-4981882</a>
                   <br/>
                   <a href="tel:+9779851040296" className="text-muted-foreground">+977 9851040296</a>
                </div>
              </li>
              <li className="flex gap-3 items-start">
                <Mail size={18} className="text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs text-muted-foreground">{t("footer.email")}</p>  
                  <a href="mailto:ktmhotelbusinessassociation@gmail.com" className="text-foreground/90 text-sm font-medium">ktmhotelbusinessassociation@gmail.com</a>
                </div>
              </li>
              <li className="flex gap-3 items-start">
                <MapPin size={18} className="text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs text-muted-foreground">{t("footer.location")}</p>
                  <a 
                    href="https://www.google.com/maps/place/Palagya+Hotel/@27.7058835,85.3508272,17z/data=!3m1!4b1!4m9!3m8!1s0x39eb1981e4290e07:0xf62e653d652cfb9d!5m2!4m1!1i2!8m2!3d27.7058835!4d85.3508272!16s%2Fg%2F1233610wp!17m2!4m1!1e3!18m1!1e1?entry=ttu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/90 text-sm font-medium hover:text-primary transition-colors"
                  >
                    Balaju-16, Kathmandu
                  </a>
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
    © {currentYear} District Hotel Business  Association {t("footer.rights")}
  </p>
</div>

      </div>
    </footer>
  )
}
