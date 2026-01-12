"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { LanguageToggle } from "./language-toggle"
import { useLanguage } from "@/contexts/language-context"
import { ChevronDown } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useState } from "react"

export function Header() {
  const pathname = usePathname()
  const { t } = useLanguage()
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false)

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href)

  const navLinkClass = (href: string) =>
    `relative px-1 py-2 whitespace-nowrap text-sm transition-all duration-200
     ${
       isActive(href)
         ? "text-primary opacity-100"
         : "text-foreground/80 hover:text-primary"
     }`

  const underlineClass = (href: string) =>
    `absolute left-0 -bottom-0.5 h-0.5 bg-primary transition-all duration-300
     ${isActive(href) ? "w-full" : "w-0 group-hover:w-full"}`

  return (
    <header className="sticky top-0 z-50 border-b border-border backdrop-blur-md bg-background/80">

      {/* ================= DESKTOP ================= */}
      <nav className="hidden md:flex justify-center h-16">
        <div className="grid grid-cols-[auto_1fr_auto] items-center w-full max-w-7xl px-6">

          {/* LEFT: LOGO */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/dbha.png"
                alt="District Hotel Business Association Kathmandu"
                width={150}
                height={40}
                className="h-10 w-auto object-contain"
                priority
              />
            </Link>
          </div>

          {/* CENTER: NAV LINKS (PERFECTLY CENTERED) */}
          <div className="flex items-center justify-center gap-6">
            {[
              { href: "/", label: t("nav.home") },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`group ${navLinkClass(link.href)}`}
              >
                {link.label}
                <span className={underlineClass(link.href)} />
              </Link>
            ))}

            {/* MEMBERS DROPDOWN */}
            <div className="relative group">
              <button
                className={`group flex items-center gap-1 px-1 py-2 whitespace-nowrap text-sm transition-all duration-200
                  ${
                    pathname.startsWith("/members")
                      ? "text-primary opacity-100"
                      : "text-foreground/80 hover:text-primary"
                  }`}
              >
                {t("nav.members")}
                <ChevronDown className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
                <span className={underlineClass("/members")} />
              </button>
              
              {/* Dropdown Content */}
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="bg-popover text-popover-foreground min-w-[200px] rounded-md border p-1 shadow-md">
                  <Link
                    href="/members/balaju"
                    className="relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none w-full hover:bg-accent hover:text-accent-foreground"
                  >
                    {t("members.balaju")}
                  </Link>
                  <Link
                    href="/members/kalanki"
                    className="relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none w-full hover:bg-accent hover:text-accent-foreground"
                  >
                    {t("members.kalanki")}
                  </Link>
                  <Link
                    href="/members/kathmandu"
                    className="relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none w-full hover:bg-accent hover:text-accent-foreground"
                  >
                    {t("members.kathmandu")}
                  </Link>
                  <Link
                    href="/members/nepalguesthouse"
                    className="relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none w-full hover:bg-accent hover:text-accent-foreground"
                  >
                    {t("members.nepalguesthouse")}
                  </Link>
                  <Link
                    href="/members/sundhara"
                    className="relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none w-full hover:bg-accent hover:text-accent-foreground"
                  >
                    {t("members.sundhara")}
                  </Link>
                  <Link
                    href="/members/united"
                    className="relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none w-full hover:bg-accent hover:text-accent-foreground"
                  >
                    {t("members.united")}
                  </Link>
                  <Link
                    href="/members/nepalihotel"
                    className="relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none w-full hover:bg-accent hover:text-accent-foreground"
                  >
                    {t("members.nepalihotel")}
                  </Link>
                </div>
              </div>
            </div>

            {[
              { href: "/hotels", label: t("nav.memberHotels") },
              { href: "/destinations", label: t("nav.destinations") },
              { href: "/events", label: t("nav.events") },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`group ${navLinkClass(link.href)}`}
              >
                {link.label}
                <span className={underlineClass(link.href)} />
              </Link>
            ))}

            {[
              { href: "/resources", label: t("nav.resources") },
              { href: "/careers", label: t("nav.careers") },
              { href: "/about", label: t("nav.about") },
              { href: "/contact", label: t("nav.contact") },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`group ${navLinkClass(link.href)}`}
              >
                {link.label}
                <span className={underlineClass(link.href)} />
              </Link>
            ))}
          </div>

          {/* RIGHT: LANGUAGE + LOGIN */}
          <div className="flex items-center gap-4 justify-end">
            <LanguageToggle />
            <Link
              href="/login"
              className={`px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap
                transition-transform duration-200 hover:scale-[1.03]
                ${
                  isActive("/login")
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "bg-linear-to-r from-primary to-accent text-primary-foreground hover:shadow-lg"
                }`}
            >
              {t("nav.login")}
            </Link>
          </div>

        </div>
      </nav>

      {/* ================= MOBILE ================= */}
      <div className="md:hidden px-4">
        <div className="flex items-center justify-between h-14">
          <Link href="/" className="flex items-center">
            <Image
              src="/dbha.png"
              alt="District Hotel Business Association Kathmandu"
              width={120}
              height={30}
              className="h-8 w-auto object-contain"
              priority
            />
          </Link>

          <div className="flex items-center gap-2">
            <LanguageToggle />
            <Link
              href="/login"
              className="px-3 py-1.5 rounded-full text-sm font-medium bg-primary text-primary-foreground whitespace-nowrap"
            >
              {t("nav.login")}
            </Link>
          </div>
        </div>

        <div className="border-t border-border">
          <div className="flex gap-6 overflow-x-auto scrollbar-hide py-3">
            {[
              { href: "/", label: t("nav.home") },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative whitespace-nowrap text-sm ${
                  isActive(link.href)
                    ? "text-primary font-medium"
                    : "text-foreground/80"
                }`}
              >
                {link.label}
                {isActive(link.href) && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary" />
                )}
              </Link>
            ))}

            {/* MOBILE MEMBERS DROPDOWN */}
            <div className="relative">
              <button
                onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                className={`flex items-center gap-1 whitespace-nowrap text-sm transition-all duration-200
                  ${
                    pathname.startsWith("/members")
                      ? "text-primary font-medium"
                      : "text-foreground/80"
                  }`}
              >
                {t("nav.members")}
                <ChevronDown className={`h-3 w-3 transition-transform duration-200 ${mobileDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {/* Mobile Dropdown Content */}
              <div className={`absolute top-full left-0 mt-1 transition-all duration-200 z-50 min-w-[180px] ${
                mobileDropdownOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
              }`}>
                <div className="bg-popover text-popover-foreground rounded-md border p-1 shadow-md">
                  <Link
                    href="/members/balaju"
                    className="relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none w-full hover:bg-accent hover:text-accent-foreground"
                    onClick={() => setMobileDropdownOpen(false)}
                  >
                    {t("members.balaju")}
                  </Link>
                  <Link
                    href="/members/kalanki"
                    className="relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none w-full hover:bg-accent hover:text-accent-foreground"
                    onClick={() => setMobileDropdownOpen(false)}
                  >
                    {t("members.kalanki")}
                  </Link>
                  <Link
                    href="/members/kathmandu"
                    className="relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none w-full hover:bg-accent hover:text-accent-foreground"
                    onClick={() => setMobileDropdownOpen(false)}
                  >
                    {t("members.kathmandu")}
                  </Link>
                  <Link
                    href="/members/nepalguesthouse"
                    className="relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none w-full hover:bg-accent hover:text-accent-foreground"
                    onClick={() => setMobileDropdownOpen(false)}
                  >
                    {t("members.nepalguesthouse")}
                  </Link>
                  <Link
                    href="/members/sundhara"
                    className="relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none w-full hover:bg-accent hover:text-accent-foreground"
                    onClick={() => setMobileDropdownOpen(false)}
                  >
                    {t("members.sundhara")}
                  </Link>
                  <Link
                    href="/members/united"
                    className="relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none w-full hover:bg-accent hover:text-accent-foreground"
                    onClick={() => setMobileDropdownOpen(false)}
                  >
                    {t("members.united")}
                  </Link>
                  <Link
                    href="/members/nepalihotel"
                    className="relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none w-full hover:bg-accent hover:text-accent-foreground"
                    onClick={() => setMobileDropdownOpen(false)}
                  >
                    {t("members.nepalihotel")}
                  </Link>
                </div>
              </div>
            </div>

            {[
              { href: "/hotels", label: t("nav.memberHotels") },
              { href: "/destinations", label: t("nav.destinations") },
              { href: "/events", label: t("nav.events") },
              { href: "/resources", label: t("nav.resources") },
              { href: "/careers", label: t("nav.careers") },
              { href: "/about", label: t("nav.about") },
              { href: "/contact", label: t("nav.contact") },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative whitespace-nowrap text-sm ${
                  isActive(link.href)
                    ? "text-primary font-medium"
                    : "text-foreground/80"
                }`}
              >
                {link.label}
                {isActive(link.href) && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary" />
                )}
              </Link>
            ))}
          </div>
        </div>
      </div>

    </header>
  )
}
