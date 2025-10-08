"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, MessageSquare, Users, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Card className="max-w-md mx-auto text-center">
          <CardHeader className="space-y-4">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
            <CardTitle className="text-2xl">Message Sent Successfully!</CardTitle>
            <CardDescription>
              Thank you for contacting Detroit Services Canada Incorporated. We'll get back to you within 24 hours.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button onClick={() => setIsSubmitted(false)} className="w-full">
              Send Another Message
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="bg-white text-primary sticky top-0 z-50 shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <img src="/detroit-global-services-logo.png" alt="Detroit Global Services Logo" className="h-12 w-auto" />
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-primary hover:text-accent transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-primary hover:text-accent transition-colors">
                About
              </Link>
              <Link href="/services" className="text-primary hover:text-accent transition-colors">
                Services
              </Link>
              <Link href="/projects" className="text-primary hover:text-accent transition-colors">
                Projects
              </Link>
              <Link href="/contact" className="text-accent font-medium">
                Contact
              </Link>
            </div>
            <Button variant="default" size="sm" className="hidden md:inline-flex">
              <Link href="/quote">Get Quote</Link>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <Badge variant="secondary" className="w-fit mx-auto">
            Contact Us
          </Badge>
          <h1 className="text-4xl lg:text-5xl font-bold text-balance">Get in Touch</h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto text-pretty">
            Ready to start your construction project? Contact our expert team for professional consultation and
            personalized solutions tailored to your needs.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold">Send us a Message</h2>
                <p className="text-muted-foreground text-lg">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MessageSquare className="h-5 w-5" />
                    Contact Form
                  </CardTitle>
                  <CardDescription>All fields marked with * are required</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Enter your full name"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="Enter your email"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+2348024469300"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="company">Company (Optional)</Label>
                        <Input
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          placeholder="Your company name"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject *</Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="What is this regarding?"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us about your project or inquiry..."
                        rows={6}
                        required
                      />
                    </div>

                    <Button type="submit" className="w-full bg-accent hover:bg-accent/90" disabled={isSubmitting}>
                      {isSubmitting ? (
                        "Sending Message..."
                      ) : (
                        <>
                          Send Message
                          <Send className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold">Contact Information</h2>
                <p className="text-muted-foreground text-lg">
                  Reach out to us through any of these channels. We're here to help with your construction needs.
                </p>
              </div>

              <div className="space-y-6">
                {/* Contact Cards */}
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Phone className="h-6 w-6 text-accent" />
                      </div>
                      <div className="space-y-1">
                        <h3 className="font-semibold">Phone</h3>
                        <p className="text-muted-foreground">Call us for immediate assistance</p>
                        <div className="space-y-1">
                          <p className="font-medium text-sm">Canada: +1 416 858 7484</p>
                          <p className="font-medium text-sm">Nigeria: +234 802 446 9300</p>
                        </div>
                        <p className="text-sm text-muted-foreground">Mon-Fri: 8:00 AM - 6:00 PM</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Mail className="h-6 w-6 text-accent" />
                      </div>
                      <div className="space-y-1">
                        <h3 className="font-semibold">Email</h3>
                        <p className="text-muted-foreground">Send us a detailed message</p>
                        <p className="font-medium">info@detroitglobalservices.com</p>
                        <p className="text-sm text-muted-foreground">We respond within 24 hours</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-6 w-6 text-accent" />
                      </div>
                      <div className="space-y-1">
                        <h3 className="font-semibold">Office Locations</h3>
                        <p className="text-muted-foreground">Visit our offices</p>
                        <div className="space-y-2 text-sm">
                          <div>
                            <p className="font-medium">Canada Headquarters:</p>
                            <p>
                              1285 Whetherfield Street
                              <br />
                              London, Ontario N6H 0E5
                            </p>
                          </div>
                          <div>
                            <p className="font-medium">Nigeria Branch Office:</p>
                            <p>Lagos, Nigeria</p>
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground">By appointment only</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Clock className="h-6 w-6 text-accent" />
                      </div>
                      <div className="space-y-1">
                        <h3 className="font-semibold">Business Hours</h3>
                        <p className="text-muted-foreground">When we're available</p>
                        <div className="space-y-1 text-sm">
                          <p>
                            <span className="font-medium">Mon-Fri:</span> 8:00 AM - 6:00 PM
                          </p>
                          <p>
                            <span className="font-medium">Saturday:</span> 9:00 AM - 4:00 PM
                          </p>
                          <p>
                            <span className="font-medium">Sunday:</span> Closed
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Quick Quote CTA */}
              <Card className="bg-accent/5 border-accent/20">
                <CardContent className="p-6 text-center space-y-4">
                  <Users className="h-12 w-12 text-accent mx-auto" />
                  <h3 className="text-xl font-semibold">Need a Project Quote?</h3>
                  <p className="text-muted-foreground">
                    Get a detailed estimate for your construction project with our comprehensive quote form.
                  </p>
                  <Button asChild className="bg-accent hover:bg-accent/90">
                    <Link href="/quote">
                      Get Free Quote
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center">
                <img
                  src="/detroit-global-services-logo.png"
                  alt="Detroit Global Services Logo"
                  className="h-10 w-auto"
                />
              </div>
              <p className="text-primary-foreground/80 leading-relaxed">
                Building excellence in Lagos, Nigeria with over 15 years of construction expertise and unwavering
                commitment to quality.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Services</h3>
              <ul className="space-y-2 text-primary-foreground/80">
                <li>
                  <Link href="/services" className="hover:text-accent transition-colors">
                    Residential Construction
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-accent transition-colors">
                    Commercial Projects
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-accent transition-colors">
                    Renovations
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-accent transition-colors">
                    Project Management
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Company</h3>
              <ul className="space-y-2 text-primary-foreground/80">
                <li>
                  <Link href="/about" className="hover:text-accent transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/projects" className="hover:text-accent transition-colors">
                    Our Projects
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-accent transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/quote" className="hover:text-accent transition-colors">
                    Get Quote
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Contact Info</h3>
              <div className="space-y-3 text-primary-foreground/80">
                <div>
                  <div className="font-semibold text-primary-foreground mb-2">Canada Headquarters</div>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 flex-shrink-0 mt-0.5" />
                      <span>
                        1285 Whetherfield Street
                        <br />
                        London, Ontario N6H 0E5
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4 flex-shrink-0" />
                      <a href="tel:+14168587484" className="hover:text-accent transition-colors">
                        +1 416 858 7484
                      </a>
                    </div>
                  </div>
                </div>
                <div className="pt-2">
                  <div className="font-semibold text-primary-foreground mb-2">Nigeria Branch Office</div>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 flex-shrink-0" />
                      <span>Lagos, Nigeria</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4 flex-shrink-0" />
                      <a href="tel:+2348024469300" className="hover:text-accent transition-colors">
                        +234 802 446 9300
                      </a>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 pt-2">
                  <Mail className="h-4 w-4" />
                  <a href="mailto:info@detroitglobalservices.com" className="hover:text-accent transition-colors">
                    info@detroitglobalservices.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center text-primary-foreground/60">
            <p>&copy; 2025 Detroit Services Canada Incorporated. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
