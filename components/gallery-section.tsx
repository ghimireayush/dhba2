"use client"

import { Play, Image as ImageIcon, ArrowRight, X, ZoomIn, ChevronLeft, ChevronRight, Share2 } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [selectedVideo, setSelectedVideo] = useState<number | null>(null)

  const photos = [
    { id: 1, src: "/luxury-hotel-kathmandu.jpg", title: "Luxury Hotel Kathmandu", large: true },
    { id: 2, src: "/luxury-hotel-lobby.png", title: "Hotel Lobby", large: true },
    { id: 3, src: "/luxury-hotel-room.png", title: "Luxury Room", large: false },
    { id: 4, src: "/luxury-hotel-restaurant.png", title: "Fine Dining Restaurant", large: false },
    { id: 5, src: "/tourism-initiative.jpg", title: "Tourism Initiative", large: false },
    { id: 6, src: "/traditional-nepalese-hotel.jpg", title: "Traditional Hotel", large: false },
  ]

  const videos = [
    {
      id: 1,
      title: "Eakata Annual Conference 2024",
      type: "Trailer",
      thumbnail: "/luxury-hotel-lobby.png",
      duration: "2:17",
      views: "4K",
      likes: "1.3K",
      videoId: "oerd3LVEyPs",
      featured: true,
    },
    {
      id: 2,
      title: "Hospitality Excellence in Nepal",
      type: "Trailer",
      thumbnail: "/luxury-hotel-kathmandu.jpg",
      duration: "2:01",
      views: "5.9K",
      likes: "1.6K",
      videoId: "zjFvdA4eDrw",
      featured: true,
    },
    {
      id: 3,
      title: "Hotel Industry Leaders Discussion",
      type: "Clip",
      thumbnail: "/tourism-initiative.jpg",
      duration: "2:58",
      views: "434",
      likes: "196",
      videoId: "oerd3LVEyPs",
      overlay: "DHBA Exclusive",
      featured: false,
    },
    {
      id: 4,
      title: "Luxury Hotel Tour - Kathmandu",
      type: "Clip",
      thumbnail: "/traditional-nepalese-hotel.jpg",
      duration: "0:58",
      views: "38",
      likes: "12",
      videoId: "zjFvdA4eDrw",
      featured: false,
    },
    {
      id: 5,
      title: "Traditional Nepalese Hospitality",
      type: "Clip",
      thumbnail: "/resort-kathmandu-luxury.jpg",
      duration: "1:25",
      views: "79",
      likes: "36",
      videoId: "oerd3LVEyPs",
      featured: false,
    },
    {
      id: 6,
      title: "Culinary Excellence Showcase",
      type: "Featurette",
      thumbnail: "/luxury-hotel-restaurant.png",
      duration: "0:45",
      views: "81",
      likes: "47",
      videoId: "zjFvdA4eDrw",
      featured: false,
    },
  ]

  return (
    <>
      <section className="py-4 px-2 sm:px-3 md:px-4 lg:px-6 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-3">Gallery</h3>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Explore our collection of photos and videos showcasing the best of Kathmandu's hospitality industry
            </p>
          </div>

          {/* Photos Section */}
          <div className="mb-16">
            <div className="flex items-center justify-between mb-6">
              <h4 className="text-2xl font-bold text-foreground">
                Photos 
              </h4>
              
              <Link 
                href="/gallery/photos"
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold transition-colors"
              >
                View more
                <ArrowRight size={16} />
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {photos.map((photo, index) => (
                <div
                  key={photo.id}
                  onClick={() => setSelectedImage(index)}
                  className={`group relative cursor-pointer overflow-hidden rounded-lg bg-muted ${
                    photo.large ? 'md:col-span-2' : ''
                  }`}
                >
                  <div className={photo.large ? 'aspect-video' : 'aspect-square'}>
                    <Image
                      src={photo.src}
                      alt={photo.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />

                  {/* +Many More Overlay on last photo */}
                  {index === photos.length - 1 && (
                    <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                      <span className="text-white font-bold text-2xl">+Many More </span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Videos Section */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <h4 className="text-2xl font-bold text-foreground">Videos</h4>
              <Link 
                href="/gallery/videos"
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold transition-colors"
              >
                View more
                <ArrowRight size={16} />
              </Link>
            </div>

            {/* Featured Trailers */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {videos.filter(v => v.featured).map((video, index) => (
                <div 
                  key={video.id} 
                  className="group cursor-pointer"
                  onClick={() => setSelectedVideo(index)}
                >
                  <div className="relative aspect-video rounded-lg overflow-hidden bg-muted">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                    
                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center">
                        <Play className="w-8 h-8 text-black ml-1" fill="currentColor" />
                      </div>
                    </div>
                    
                    {/* Duration Badge */}
                    <div className="absolute bottom-3 left-3 bg-black/80 px-2 py-1 rounded text-white text-sm font-semibold">
                      {video.type} {video.duration}
                    </div>
                  </div>
                  
                  <div className="mt-3">
                    <h5 className="font-bold text-foreground text-lg mb-1 group-hover:text-primary transition-colors">
                      {video.title}
                    </h5>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span>{video.views} views</span>
                      <span>{video.likes} likes</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Smaller Clips */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {videos.filter(v => !v.featured).map((video, index) => (
                <div 
                  key={video.id} 
                  className="group cursor-pointer"
                  onClick={() => setSelectedVideo(videos.findIndex(v => v.id === video.id))}
                >
                  <div className="relative aspect-video rounded-lg overflow-hidden bg-muted">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                    
                    {/* IMDb Overlay */}
                    {video.overlay && (
                      <div className="absolute top-2 left-2 bg-yellow-500 text-black px-2 py-1 rounded text-xs font-bold">
                        {video.overlay}
                      </div>
                    )}
                    
                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center">
                        <Play className="w-6 h-6 text-black ml-1" fill="currentColor" />
                      </div>
                    </div>
                    
                    {/* Duration Badge */}
                    <div className="absolute bottom-2 left-2 bg-black/80 px-1.5 py-0.5 rounded text-white text-xs font-semibold">
                      {video.type} {video.duration}
                    </div>
                  </div>
                  
                  <div className="mt-2">
                    <h5 className="font-semibold text-foreground text-sm mb-1 group-hover:text-primary transition-colors line-clamp-2">
                      {video.title}
                    </h5>
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <span>{video.views} views</span>
                      <span>{video.likes} likes</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox for Photo Zoom */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black z-50 flex flex-col">
          {/* Top Bar */}
          <div className="flex items-center justify-between p-4 text-white">
            <button
              onClick={() => setSelectedImage(null)}
              className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors font-semibold"
            >
              Close
            </button>
            
            <div className="flex items-center gap-4">
              <span className="font-medium">
                {selectedImage + 1} of {photos.length}
              </span>
              <button className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors">
                <Share2 className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Main Image Container */}
          <div className="flex-1 flex items-center justify-center relative px-4">
            {/* Previous Button */}
            <button
              onClick={(e) => {
                e.stopPropagation()
                setSelectedImage((prev) => (prev! > 0 ? prev! - 1 : photos.length - 1))
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors text-white"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Image */}
            <div className="relative max-w-6xl max-h-[70vh] w-full aspect-video">
              <Image
                src={photos[selectedImage].src}
                alt={photos[selectedImage].title}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
              />
            </div>

            {/* Next Button */}
            <button
              onClick={(e) => {
                e.stopPropagation()
                setSelectedImage((prev) => (prev! < photos.length - 1 ? prev! + 1 : 0))
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors text-white"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      )}

      {/* Video Player Modal */}
      {selectedVideo !== null && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4">
          <button
            onClick={() => setSelectedVideo(null)}
            className="absolute top-4 right-4 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors z-10"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          <div className="relative max-w-6xl w-full">
            <div className="aspect-video rounded-xl overflow-hidden bg-black">
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${videos[selectedVideo].videoId}?autoplay=1`}
                title={videos[selectedVideo].title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            
            <div className="mt-6 text-center">
              <h2 className="text-2xl font-bold text-white mb-2">
                {videos[selectedVideo].title}
              </h2>
            </div>
          </div>

          {/* Navigation */}
          {videos.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  setSelectedVideo((prev) => (prev! > 0 ? prev! - 1 : videos.length - 1))
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-4 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
              >
                <span className="text-white text-2xl">←</span>
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  setSelectedVideo((prev) => (prev! < videos.length - 1 ? prev! + 1 : 0))
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-4 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
              >
                <span className="text-white text-2xl">→</span>
              </button>
            </>
          )}
        </div>
      )}
    </>
  )
}
