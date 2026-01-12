"use client"

import { useState } from "react"
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, MessageSquare, Users, Building, HeadphonesIcon, ArrowRight } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Breadcrumb } from "@/components/breadcrumb"
import Image from "next/image"
import contactConfig from "@/config/contact-config.json"

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

  // Icon mapping
  const iconMap = {
    MapPin, Phone, Mail, Clock, MessageSquare, Users, Building, Send, CheckCircle, ArrowRight
  }

  // Get contact info from config
  const contactInfo = contactConfig.contactInfo.map(item => ({
    ...item,
    icon: iconMap[item.icon as keyof typeof iconMap]
  }))

  const quickContacts = contactConfig.departments
  const heroConfig = contactConfig.hero
  const formConfig = contactConfig.form
  const mapConfig = contactConfig.map

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Contact" }]} />
        
        {/* Hero Section */}
        <section className="relative py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary via-secondary to-accent overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute inset-0">
            <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-48 h-48 bg-white/5 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-accent/10 rounded-full blur-3xl"></div>
          </div>
          
          <div className="relative max-w-6xl mx-auto text-center">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-semibold mb-4">
                {heroConfig.badge}
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"
              dangerouslySetInnerHTML={{ __html: heroConfig.title }}
            />
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed">
              {heroConfig.subtitle}
            </p>
            
            <div className="flex flex-wrap justify-center gap-6">
              {heroConfig.features.map((feature, index) => {
                const Icon = iconMap[feature.icon as keyof typeof iconMap]
                return (
                  <div key={index} className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
                    <Icon className="w-5 h-5 text-white" />
                    <span className="text-white font-semibold">{feature.text}</span>
                  </div>
                )
              })}
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
                      <p className="text-primary font-semibold mb-2 break-words">{contact.details}</p>
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
                      {formConfig.title}
                    </span>
                    <h2 className="text-2xl font-bold text-foreground mb-3">
                      We'd Love to Hear From You
                    </h2>
                    <p className="text-muted-foreground">
                      {formConfig.subtitle}
                    </p>
                  </div>

                  {submitted && (
                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-l-4 border-green-500 px-6 py-4 rounded-xl mb-6 flex items-start gap-4">
                      <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="text-green-600 dark:text-green-400" size={24} />
                      </div>
                      <div>
                        <p className="font-bold text-green-900 dark:text-green-100 mb-1">{formConfig.successMessage.title}</p>
                        <p className="text-green-700 dark:text-green-300">{formConfig.successMessage.text}</p>
                      </div>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-semibold text-foreground mb-2">
                          {formConfig.fields.name.label} <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder={formConfig.fields.name.placeholder}
                          required
                          className="w-full px-4 py-3 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300 bg-background"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-foreground mb-2">
                          {formConfig.fields.organization.label}
                        </label>
                        <input
                          type="text"
                          name="organization"
                          value={formData.organization}
                          onChange={handleChange}
                          placeholder={formConfig.fields.organization.placeholder}
                          className="w-full px-4 py-3 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300 bg-background"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">
                        {formConfig.fields.email.label} <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder={formConfig.fields.email.placeholder}
                        required
                        className="w-full px-4 py-3 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300 bg-background"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">
                        {formConfig.fields.subject.label} <span className="text-red-500">*</span>
                      </label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300 bg-background"
                      >
                        {formConfig.fields.subject.options.map((option, index) => (
                          <option key={index} value={option.value}>{option.text}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">
                        {formConfig.fields.message.label} <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder={formConfig.fields.message.placeholder}
                        required
                        rows={formConfig.fields.message.rows}
                        className="w-full px-4 py-3 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary resize-none transition-all duration-300 bg-background"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-primary to-accent text-white py-3 rounded-xl font-semibold hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-3"
                    >
                      <Send size={20} />
                      {formConfig.submitText}
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
                        <h3 className="text-xl font-bold text-foreground mb-1">{mapConfig.title}</h3>
                        <p className="text-muted-foreground text-sm">{contactConfig.organization.address}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="relative h-80 lg:h-96 bg-muted">
                    <iframe
                      src={mapConfig.embedUrl}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title={`${contactConfig.organization.name} Location Map`}
                      className="rounded-b-2xl"
                    />
                  </div>

                  <div className="p-6 bg-gradient-to-r from-primary/5 to-accent/5 border-t border-border/50">
                    <div className="space-y-3">
                      {mapConfig.features.map((feature, index) => {
                        const Icon = iconMap[feature.icon as keyof typeof iconMap]
                        return (
                          <div key={index} className="flex items-start gap-3">
                            <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                              <Icon className="text-primary" size={16} />
                            </div>
                            <div>
                              <h4 className="font-semibold text-foreground text-sm mb-1">{feature.title}</h4>
                              <p className="text-xs text-muted-foreground">{feature.description}</p>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Department Contacts - Full Width Below */}
            <div className="mt-12">
              <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl p-8 border border-border/50">
                <h3 className="text-2xl font-bold text-foreground mb-8 text-center">{contactConfig.organization.shortName} Department Contacts</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {quickContacts.map((contact, index) => (
                    <div key={index} className="text-center p-6 bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl border border-primary/20">
                      <h4 className="font-semibold text-foreground mb-3">{contact.title}</h4>
                      <div className="space-y-2">
                        <a href={`tel:${contact.phone.replace(/[^0-9]/g, '')}`} className="text-primary hover:text-primary/80 transition-colors block font-medium">
                          {contact.phone}
                        </a>
                        <a href={`mailto:${contact.email}`} className="text-muted-foreground hover:text-primary transition-colors block text-xs break-words">
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