"use client"

import { useState } from "react"
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, MessageSquare, Users, Building, HeadphonesIcon, ArrowRight } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Breadcrumb } from "@/components/breadcrumb"
import Image from "next/image"

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
    setFormData({ name: "", organization: "", email: "", subject: "", message: "" })
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Our Office",
      details: "P92M+YC3, Kathmandu 44600, Nepal",
      description: "Strategically located in the heart of Kathmandu's hospitality district",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+977 01-4586327",
      description: "Available during business hours for immediate assistance",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: "ekatahotel2069@gmail.com",
      description: "Send us your inquiries and we'll respond promptly",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: "Sun-Fri: 9:00 AM - 5:00 PM",
      description: "Saturday: Closed",
      color: "from-orange-500 to-red-500"
    }
  ]

  const quickContacts = [
    { title: "Membership Inquiries", phone: "+977 01-4586327", email: "membership@ekatahotel.com" },
    { title: "Partnership Opportunities", phone: "+977 01-4586327", email: "partnership@ekatahotel.com" },
    { title: "Technical Support", phone: "+977 01-4586327", email: "support@ekatahotel.com" },
    { title: "General Inquiries", phone: "+977 01-4586327", email: "info@ekatahotel.com" }
  ]

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Contact" }]} />
        
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary via-primary/90 to-accent/90 overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute inset-0">
            <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-48 h-48 bg-white/5 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-accent/10 rounded-full blur-3xl"></div>
          </div>
          
          <div className="relative max-w-6xl mx-auto text-center">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-semibold mb-4">
                Get In Touch
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Connect With Unity Hotel<br />& Guest House Association
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed">
              We're here to support your hospitality journey. Reach out to us for membership, partnerships, or any inquiries.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6">
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
                <MessageSquare className="w-5 h-5 text-white" />
                <span className="text-white font-semibold">Quick Response</span>
              </div>
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
                <Users className="w-5 h-5 text-white" />
                <span className="text-white font-semibold">Expert Support</span>
              </div>
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
                <Building className="w-5 h-5 text-white" />
                <span className="text-white font-semibold">500+ Members</span>
              </div>
            </div>
          </div>
        </section>



        {/* Contact Methods Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
                Multiple Ways to Reach Us
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Choose Your Preferred Contact Method
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Whether you prefer to call, email, or visit us in person, we're always ready to assist you with your hospitality needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {contactInfo.map((contact, index) => {
                const Icon = contact.icon
                return (
                  <div key={index} className="group relative">
                    <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 border border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 h-full">
                      <div className={`w-16 h-16 bg-gradient-to-br ${contact.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-3">{contact.title}</h3>
                      <p className="text-primary font-semibold mb-2">{contact.details}</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">{contact.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
        {/* Main Contact Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-secondary/5">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form - Takes 1 column */}
              <div>
                <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl p-6 border border-border/50">
                  <div className="mb-6">
                    <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
                      Send Us a Message
                    </span>
                    <h2 className="text-2xl font-bold text-foreground mb-3">
                      We'd Love to Hear From You
                    </h2>
                    <p className="text-muted-foreground">
                      Fill out the form below and our team will get back to you as soon as possible.
                    </p>
                  </div>

                  {submitted && (
                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-l-4 border-green-500 px-6 py-4 rounded-xl mb-6 flex items-start gap-4">
                      <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="text-green-600 dark:text-green-400" size={24} />
                      </div>
                      <div>
                        <p className="font-bold text-green-900 dark:text-green-100 mb-1">Message Sent Successfully!</p>
                        <p className="text-green-700 dark:text-green-300">Thank you for reaching out. Our team will respond within 24 hours.</p>
                      </div>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-semibold text-foreground mb-2">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Enter your full name"
                          required
                          className="w-full px-4 py-3 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300 bg-background"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-foreground mb-2">
                          Organization
                        </label>
                        <input
                          type="text"
                          name="organization"
                          value={formData.organization}
                          onChange={handleChange}
                          placeholder="Your hotel/organization name"
                          className="w-full px-4 py-3 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300 bg-background"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        required
                        className="w-full px-4 py-3 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300 bg-background"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">
                        Subject <span className="text-red-500">*</span>
                      </label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300 bg-background"
                      >
                        <option value="">Select a subject</option>
                        <option value="membership">Membership Inquiry</option>
                        <option value="partnership">Partnership Opportunity</option>
                        <option value="support">Technical Support</option>
                        <option value="feedback">Feedback & Suggestions</option>
                        <option value="complaint">Complaints</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">
                        Message <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us more about your inquiry..."
                        required
                        rows={5}
                        className="w-full px-4 py-3 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary resize-none transition-all duration-300 bg-background"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-primary to-accent text-white py-3 rounded-xl font-semibold hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-3"
                    >
                      <Send size={20} />
                      Send Message
                      <ArrowRight size={20} />
                    </button>
                  </form>
                </div>
              </div>

              {/* Map Section - Takes 1 column */}
              <div>
                <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl overflow-hidden border border-border/50 h-full">
                  <div className="p-6 border-b border-border/50 bg-gradient-to-r from-primary/5 to-accent/5">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center">
                        <MapPin className="text-white" size={24} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-foreground mb-1">Find Our Office</h3>
                        <p className="text-muted-foreground text-sm">P92M+YC3, Kathmandu 44600, Nepal</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="relative h-80 lg:h-96 bg-muted">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.4567890123456!2d85.3508272!3d27.7058835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1981e4290e07:0xf62e653d652cfb9d!2sPalagya+Hotel!5e0!3m2!1sen!2snp"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Unity Hotel and Guest House Professionals Association Location Map"
                      className="rounded-b-2xl"
                    />
                  </div>

                  <div className="p-6 bg-gradient-to-r from-primary/5 to-accent/5 border-t border-border/50">
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                          <MapPin className="text-primary" size={16} />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground text-sm mb-1">Strategic Location</h4>
                          <p className="text-xs text-muted-foreground">Centrally located in Kathmandu's hospitality hub</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Clock className="text-primary" size={16} />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground text-sm mb-1">Business Hours</h4>
                          <p className="text-xs text-muted-foreground">Sunday-Friday: 9AM-5PM, Saturday: Closed</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Phone className="text-primary" size={16} />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground text-sm mb-1">Call Ahead</h4>
                          <p className="text-xs text-muted-foreground">+977 01-4586327 for appointments</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Department Contacts - Full Width Below */}
            <div className="mt-12">
              <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl p-8 border border-border/50">
                <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Department Contacts</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {quickContacts.map((contact, index) => (
                    <div key={index} className="text-center p-6 bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl border border-primary/20">
                      <h4 className="font-semibold text-foreground mb-3">{contact.title}</h4>
                      <div className="space-y-2">
                        <a href={`tel:${contact.phone.replace(/[^0-9]/g, '')}`} className="text-primary hover:text-primary/80 transition-colors block font-medium">
                          {contact.phone}
                        </a>
                        <a href={`mailto:${contact.email}`} className="text-muted-foreground hover:text-primary transition-colors block text-sm">
                          {contact.email}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        </main>
      <Footer />
    </div>
  )
}