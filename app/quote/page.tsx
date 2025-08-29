"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { Calculator, CheckCircle, FileText, ArrowRight, Hammer, Users, Mail, Phone, MapPin } from "lucide-react"
import Link from "next/link"

export default function QuotePage() {
  const [formData, setFormData] = useState({
    // Personal Information
    name: "",
    email: "",
    phone: "",
    company: "",

    // Project Details
    projectType: "",
    projectSize: "",
    location: "",
    timeline: "",
    budget: "",

    // Project Description
    description: "",

    // Services
    services: [] as string[],

    // Additional Information
    hasPlans: false,
    needsPermits: false,
    urgentProject: false,
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleServiceChange = (service: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      services: checked ? [...prev.services, service] : prev.services.filter((s) => s !== service),
    }))
  }

  const handleCheckboxChange = (name: string, checked: boolean) => {
    setFormData((prev) => ({ ...prev, [name]: checked }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 3000))

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Card className="max-w-lg mx-auto text-center">
          <CardHeader className="space-y-4">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
            <CardTitle className="text-2xl">Quote Request Submitted!</CardTitle>
            <CardDescription className="text-base">
              Thank you for your detailed quote request. Our team will review your project requirements and provide you
              with a comprehensive estimate within 2-3 business days.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-muted/50 p-4 rounded-lg text-left">
              <h4 className="font-medium mb-2">What happens next?</h4>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• Our team reviews your project details</li>
                <li>• We may contact you for additional information</li>
                <li>• You'll receive a detailed quote via email</li>
                <li>• We'll schedule a consultation if needed</li>
              </ul>
            </div>
            <Button onClick={() => setIsSubmitted(false)} className="w-full">
              Submit Another Quote Request
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  const services = [
    "Residential Construction",
    "Commercial Construction",
    "Renovation & Remodeling",
    "Project Management",
    "Architectural Design",
    "Interior Design",
    "Landscaping",
    "Electrical Work",
    "Plumbing",
    "HVAC Installation",
  ]

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
              <Link href="/contact" className="text-primary hover:text-accent transition-colors">
                Contact
              </Link>
            </div>
            <Button variant="default" size="sm" className="hidden md:inline-flex">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <Badge variant="secondary" className="w-fit mx-auto">
            Free Quote
          </Badge>
          <h1 className="text-4xl lg:text-5xl font-bold text-balance">Get Your Project Quote</h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto text-pretty">
            Tell us about your construction project and receive a detailed, personalized quote within 2-3 business days.
            No hidden fees, no obligations.
          </p>
          <div className="flex items-center justify-center gap-8 pt-4">
            <div className="text-center">
              <div className="text-2xl font-bold">Free</div>
              <div className="text-sm text-primary-foreground/80">No Cost Estimates</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">2-3 Days</div>
              <div className="text-sm text-primary-foreground/80">Quick Response</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">Detailed</div>
              <div className="text-sm text-primary-foreground/80">Comprehensive Quotes</div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card>
            <CardHeader className="text-center space-y-4">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                <Calculator className="h-8 w-8 text-accent" />
              </div>
              <CardTitle className="text-2xl">Project Quote Request</CardTitle>
              <CardDescription className="text-base">
                Please provide as much detail as possible to help us give you an accurate estimate. All fields marked
                with * are required.
              </CardDescription>
            </CardHeader>

            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Personal Information */}
                <div className="space-y-6">
                  <div className="flex items-center gap-2 pb-2 border-b">
                    <Users className="h-5 w-5 text-accent" />
                    <h3 className="text-lg font-semibold">Personal Information</h3>
                  </div>

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
                </div>

                {/* Project Details */}
                <div className="space-y-6">
                  <div className="flex items-center gap-2 pb-2 border-b">
                    <FileText className="h-5 w-5 text-accent" />
                    <h3 className="text-lg font-semibold">Project Details</h3>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="projectType">Project Type *</Label>
                      <Select onValueChange={(value) => handleSelectChange("projectType", value)} required>
                        <SelectTrigger>
                          <SelectValue placeholder="Select project type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="residential-new">New Residential Construction</SelectItem>
                          <SelectItem value="residential-renovation">Residential Renovation</SelectItem>
                          <SelectItem value="commercial-new">New Commercial Building</SelectItem>
                          <SelectItem value="commercial-renovation">Commercial Renovation</SelectItem>
                          <SelectItem value="institutional">Institutional Building</SelectItem>
                          <SelectItem value="industrial">Industrial Construction</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="projectSize">Project Size *</Label>
                      <Select onValueChange={(value) => handleSelectChange("projectSize", value)} required>
                        <SelectTrigger>
                          <SelectValue placeholder="Select project size" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="small">Small (Under 1,000 sqm)</SelectItem>
                          <SelectItem value="medium">Medium (1,000 - 5,000 sqm)</SelectItem>
                          <SelectItem value="large">Large (5,000 - 20,000 sqm)</SelectItem>
                          <SelectItem value="extra-large">Extra Large (Over 20,000 sqm)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="location">Project Location *</Label>
                      <Input
                        id="location"
                        name="location"
                        value={formData.location}
                        onChange={handleInputChange}
                        placeholder="City, State (e.g., Lagos, Nigeria)"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="timeline">Desired Timeline *</Label>
                      <Select onValueChange={(value) => handleSelectChange("timeline", value)} required>
                        <SelectTrigger>
                          <SelectValue placeholder="Select timeline" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="asap">As soon as possible</SelectItem>
                          <SelectItem value="1-3months">1-3 months</SelectItem>
                          <SelectItem value="3-6months">3-6 months</SelectItem>
                          <SelectItem value="6-12months">6-12 months</SelectItem>
                          <SelectItem value="1year+">More than 1 year</SelectItem>
                          <SelectItem value="flexible">Flexible</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="budget">Estimated Budget Range</Label>
                    <Select onValueChange={(value) => handleSelectChange("budget", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select budget range (optional)" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="under-50m">Under ₦50M</SelectItem>
                        <SelectItem value="50m-100m">₦50M - ₦100M</SelectItem>
                        <SelectItem value="100m-500m">₦100M - ₦500M</SelectItem>
                        <SelectItem value="500m-1b">₦500M - ₦1B</SelectItem>
                        <SelectItem value="1b-5b">₦1B - ₦5B</SelectItem>
                        <SelectItem value="over-5b">Over ₦5B</SelectItem>
                        <SelectItem value="not-sure">Not sure yet</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Services Needed */}
                <div className="space-y-6">
                  <div className="flex items-center gap-2 pb-2 border-b">
                    <Hammer className="h-5 w-5 text-accent" />
                    <h3 className="text-lg font-semibold">Services Needed</h3>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    {services.map((service) => (
                      <div key={service} className="flex items-center space-x-2">
                        <Checkbox
                          id={service}
                          checked={formData.services.includes(service)}
                          onCheckedChange={(checked) => handleServiceChange(service, checked as boolean)}
                        />
                        <Label htmlFor={service} className="text-sm font-normal">
                          {service}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Project Description */}
                <div className="space-y-6">
                  <div className="flex items-center gap-2 pb-2 border-b">
                    <FileText className="h-5 w-5 text-accent" />
                    <h3 className="text-lg font-semibold">Project Description</h3>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">Detailed Project Description *</Label>
                    <Textarea
                      id="description"
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      placeholder="Please provide a detailed description of your project, including specific requirements, materials preferences, design style, and any other important details..."
                      rows={6}
                      required
                    />
                  </div>
                </div>

                {/* Additional Information */}
                <div className="space-y-6">
                  <div className="flex items-center gap-2 pb-2 border-b">
                    <CheckCircle className="h-5 w-5 text-accent" />
                    <h3 className="text-lg font-semibold">Additional Information</h3>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="hasPlans"
                        checked={formData.hasPlans}
                        onCheckedChange={(checked) => handleCheckboxChange("hasPlans", checked as boolean)}
                      />
                      <Label htmlFor="hasPlans" className="text-sm font-normal">
                        I have architectural plans or drawings available
                      </Label>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="needsPermits"
                        checked={formData.needsPermits}
                        onCheckedChange={(checked) => handleCheckboxChange("needsPermits", checked as boolean)}
                      />
                      <Label htmlFor="needsPermits" className="text-sm font-normal">
                        I need assistance with permits and approvals
                      </Label>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="urgentProject"
                        checked={formData.urgentProject}
                        onCheckedChange={(checked) => handleCheckboxChange("urgentProject", checked as boolean)}
                      />
                      <Label htmlFor="urgentProject" className="text-sm font-normal">
                        This is an urgent project
                      </Label>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-6">
                  <Button
                    type="submit"
                    className="w-full bg-accent hover:bg-accent/90 text-lg py-6"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Submitting Quote Request..."
                    ) : (
                      <>
                        Submit Quote Request
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </Button>
                  <p className="text-center text-sm text-muted-foreground mt-4">
                    By submitting this form, you agree to be contacted by Detroit Global Services regarding your
                    project.
                  </p>
                </div>
              </form>
            </CardContent>
          </Card>
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
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <a href="mailto:info@detroitglobalservices.com" className="hover:text-accent transition-colors">
                    info@detroitglobalservices.com
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <span>+2348024469300</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>Lagos, Nigeria</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center text-primary-foreground/60">
            <p>&copy; 2024 Detroit Global Services. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
