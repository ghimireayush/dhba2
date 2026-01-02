"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { ASSOCIATION_CONFIG } from "@/config/associations"
import { Meteors } from "@/components/ui/meteors"
import { NepalMap } from "@/components/ui/nepal-map"

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)
  const { t } = useLanguage()

  // Business card ads with images
  const ads = [
    {
      id: 1,
      title: "About Us",
      description: "Representing hospitality sector since 2074 B.S.",
      image: "/ektalogo.png",
      link: "/about",
    },
    {
      id: 2,
      title: "Annual General Meeting",
      description: "Join us for networking opportunities",
      image: "/luxury-hotel-lobby.png",
      link: "/events",
    },
    {
      id: 3,
      title: "Tourism Growth 2025",
      description: "Latest industry insights and statistics",
      image: "/tourism-initiative.jpg",
      link: "/news",
    },
    {
      id: 4,
      title: "Hospitality Excellence",
      description: "Best practices for hotel management",
      image: "/hotel-excellence.jpg",
      link: "/blogs",
    },
    {
      id: 5,
      title: "Our Member Units",
      description: "7 associations across Kathmandu",
      image: "/traditional-nepalese-hotel.jpg",
      link: "/members",
    },
    {
      id: 6,
      title: "Luxury Accommodations",
      description: "Discover premium hotels in Kathmandu",
      image: "/luxury-hotel-room.png",
      link: "/hotels",
    },
    {
      id: 7,
      title: "Fine Dining Experience",
      description: "Explore world-class restaurants",
      image: "/luxury-hotel-restaurant.png",
      link: "/destinations",
    },
    {
      id: 8,
      title: "Wellness & Spa",
      description: "Rejuvenate at premium spa facilities",
      image: "/luxury-hotel-spa.png",
      link: "/hotels",
    },
  ]

  const slides = [
    {
      title: t("home.hero.title"),
      subtitle: t("home.hero.subtitle", { count: ASSOCIATION_CONFIG.totalAssociations }),
      cta: t("home.hero.cta"),
      ctaLink: "/members",
      image: "/luxury-hotel-kathmandu.jpg",
    },
    
  ]

  useEffect(() => {
    if (!isAutoPlay) return
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [isAutoPlay])

  return (
    <section className="relative">
      {/* Top Part: Modern Business Card Ticker */}
      <div className="bg-background border-b border-border overflow-hidden py-2">
        <div className="ticker-wrapper">
          <div className="ticker-content">
            {[...ads, ...ads].map((ad, index) => (
              <Link
                key={`${ad.id}-${index}`}
                href={ad.link}
                className="ticker-card inline-block mx-2 group"
              >
                <div className="relative w-[200px] h-[80px] rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105">
                  {/* Card Image */}
                  <Image
                    src={ad.image}
                    alt={ad.title}
                    fill
                    className="object-cover"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-2">
                    <h3 className="text-white font-bold text-xs mb-0.5 line-clamp-1">{ad.title}</h3>
                    <p className="text-white/90 text-[10px] line-clamp-1">{ad.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Part: Hero Content with Video Background */}
      <div
        className="relative h-[calc(85h-48px)] md:h-[550px] overflow-hidden"
        onMouseEnter={() => setIsAutoPlay(false)}
        onMouseLeave={() => setIsAutoPlay(true)}
      >
        {/* Background Video */}
        <div className="absolute inset-0">
          <iframe
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[56.25vw] min-h-[100vh] min-w-[177.77vh] pointer-events-none"
            src="https://www.youtube.com/embed/oerd3LVEyPs?autoplay=1&mute=1&loop=1&playlist=oerd3LVEyPs&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1"
            title="Hero background video"
            allow="autoplay; encrypted-media"
          />
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
        </div>


        {/* Content */}
        <div className="relative h-full flex flex-col items-center justify-center text-center px-4 py-8 z-10">
          <div className="max-w-4xl">
            
          

            {/* Title with animation */}
            <h1
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 text-balance leading-tight animate-fadeInUp drop-shadow-lg"
              style={{ animationDelay: "0.1s" }}
            >
              {slides[currentSlide].title}
            </h1>

            {/* Subtitle */}
            <p
              className="text-lg sm:text-xl text-white/90 mb-10 text-balance leading-relaxed animate-fadeInUp drop-shadow-md"
              style={{ animationDelay: "0.2s" }}
            >
              {slides[currentSlide].subtitle}
            </p>

            {/* CTA Buttons */}
            <div className="flex gap-4 justify-center flex-wrap animate-fadeInUp" style={{ animationDelay: "0.3s" }}>
              <Link
                href={slides[currentSlide].ctaLink}
                className="bg-gradient-to-r from-primary to-accent text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-smooth flex items-center gap-2 group"
              >
                {slides[currentSlide].cta}
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-smooth" />
              </Link>
              <Link
                href="/about"
                className="border-2 border-white/80 text-white px-8 py-4 rounded-full font-semibold hover:border-white hover:bg-white/10 transition-smooth backdrop-blur-sm"
              >
                {t("home.hero.learnMore")}
              </Link>
            </div>
          </div>
        </div>

        
       
      </div>

      <style jsx>{`
        .ticker-wrapper {
          width: 100%;
          overflow: hidden;
        }
        
        .ticker-content {
          display: inline-flex;
          animation: ticker 40s linear infinite;
        }
        
        @keyframes ticker {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .ticker-wrapper:hover .ticker-content {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}
