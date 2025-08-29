"use client"

import type React from "react"

import { useState } from "react"
import { Users, MapPin, Clock, DollarSign, Briefcase, GraduationCap, ArrowRight, Send } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const jobOpenings = [
  {
    id: 1,
    title: "Senior Project Manager",
    department: "Project Management",
    location: "Lagos, Nigeria",
    type: "Full-time",
    experience: "5+ years",
    salary: "₦8M - ₦12M annually",
    description:
      "Lead complex construction projects from planning to completion. Manage teams, budgets, and client relationships.",
    requirements: [
      "Bachelor's degree in Civil Engineering or Construction Management",
      "5+ years of project management experience in construction",
      "PMP certification preferred",
      "Strong leadership and communication skills",
      "Experience with construction software and tools",
    ],
  },
  {
    id: 2,
    title: "Civil Engineer",
    department: "Engineering",
    location: "Lagos, Nigeria",
    type: "Full-time",
    experience: "2-4 years",
    salary: "₦4M - ₦6M annually",
    description:
      "Design and oversee construction projects, ensure compliance with building codes and safety standards.",
    requirements: [
      "Bachelor's degree in Civil Engineering",
      "2-4 years of experience in construction or engineering",
      "Professional registration with COREN",
      "Proficiency in AutoCAD and other design software",
      "Knowledge of Nigerian building codes and regulations",
    ],
  },
  {
    id: 3,
    title: "Site Supervisor",
    department: "Operations",
    location: "Lagos, Nigeria",
    type: "Full-time",
    experience: "3+ years",
    salary: "₦3M - ₦5M annually",
    description:
      "Supervise daily construction activities, ensure quality control and safety compliance on construction sites.",
    requirements: [
      "Diploma or degree in Construction Management or related field",
      "3+ years of site supervision experience",
      "Strong knowledge of construction processes and safety protocols",
      "Excellent problem-solving and leadership skills",
      "Ability to work in challenging outdoor conditions",
    ],
  },
  {
    id: 4,
    title: "Quantity Surveyor",
    department: "Cost Management",
    location: "Lagos, Nigeria",
    type: "Full-time",
    experience: "2-5 years",
    salary: "₦3.5M - ₦7M annually",
    description: "Manage project costs, prepare estimates, and handle procurement processes for construction projects.",
    requirements: [
      "Bachelor's degree in Quantity Surveying",
      "2-5 years of experience in quantity surveying",
      "Professional membership with NIQS",
      "Proficiency in cost estimation software",
      "Strong analytical and negotiation skills",
    ],
  },
  {
    id: 5,
    title: "Architect",
    department: "Design",
    location: "Lagos, Nigeria",
    type: "Full-time",
    experience: "3+ years",
    salary: "₦4M - ₦8M annually",
    description: "Create architectural designs and plans for residential and commercial construction projects.",
    requirements: [
      "Bachelor's degree in Architecture",
      "3+ years of architectural design experience",
      "Professional registration with ARCON",
      "Proficiency in design software (AutoCAD, Revit, SketchUp)",
      "Creative problem-solving and attention to detail",
    ],
  },
  {
    id: 6,
    title: "Construction Intern",
    department: "Various",
    location: "Lagos, Nigeria",
    type: "Internship",
    experience: "Entry level",
    salary: "₦150K - ₦250K monthly",
    description: "Gain hands-on experience in construction operations, project management, and engineering practices.",
    requirements: [
      "Currently pursuing or recently completed degree in Engineering, Architecture, or Construction Management",
      "Strong academic performance",
      "Eagerness to learn and contribute to projects",
      "Good communication and teamwork skills",
      "Basic knowledge of construction principles",
    ],
  },
]

export default function CareersPage() {
  const [selectedJob, setSelectedJob] = useState<number | null>(null)
  const [applicationData, setApplicationData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    experience: "",
    coverLetter: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setApplicationData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setApplicationData((prev) => ({ ...prev, [name]: value }))
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
              <Briefcase className="h-8 w-8 text-green-600" />
            </div>
            <CardTitle className="text-2xl">Application Submitted!</CardTitle>
            <CardDescription>
              Thank you for your interest in joining Detroit Global Services. We'll review your application and get back
              to you soon.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button onClick={() => setIsSubmitted(false)} className="w-full">
              Submit Another Application
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
              <Link href="/contact" className="text-primary hover:text-accent transition-colors">
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
            Join Our Team
          </Badge>
          <h1 className="text-4xl lg:text-5xl font-bold text-balance">Build Your Career With Us</h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto text-pretty">
            Join Detroit Global Services and be part of a team that's shaping Lagos' skyline. We offer competitive
            compensation, professional growth opportunities, and the chance to work on exciting construction projects.
          </p>
          <div className="flex items-center justify-center gap-8 pt-4">
            <div className="text-center">
              <div className="text-2xl font-bold">15+</div>
              <div className="text-sm text-primary-foreground/80">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">100+</div>
              <div className="text-sm text-primary-foreground/80">Team Members</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">500+</div>
              <div className="text-sm text-primary-foreground/80">Projects Completed</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">Why Choose Detroit Global Services?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              We believe in investing in our people and creating an environment where everyone can thrive and grow.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Competitive Benefits",
                description: "Comprehensive health insurance, retirement plans, and performance bonuses",
                icon: DollarSign,
              },
              {
                title: "Professional Growth",
                description: "Training programs, certifications, and clear career advancement paths",
                icon: GraduationCap,
              },
              {
                title: "Exciting Projects",
                description: "Work on diverse, challenging projects that shape Lagos' construction landscape",
                icon: Briefcase,
              },
              {
                title: "Team Environment",
                description: "Collaborative culture with experienced professionals and supportive management",
                icon: Users,
              },
              {
                title: "Work-Life Balance",
                description: "Flexible schedules and time off policies that respect your personal life",
                icon: Clock,
              },
              {
                title: "Modern Tools",
                description: "Access to latest construction technology, software, and equipment",
                icon: Briefcase,
              },
            ].map((benefit, index) => (
              <Card key={index} className="text-center group hover:shadow-lg transition-all duration-300">
                <CardHeader className="space-y-4">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto group-hover:bg-accent/20 transition-colors">
                    <benefit.icon className="h-8 w-8 text-accent" />
                  </div>
                  <CardTitle className="text-lg">{benefit.title}</CardTitle>
                  <CardDescription className="leading-relaxed">{benefit.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">Current Job Openings</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Explore our available positions and find the perfect role to advance your construction career.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {jobOpenings.map((job) => (
              <Card key={job.id} className="group hover:shadow-lg transition-all duration-300">
                <CardHeader className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <CardTitle className="text-xl group-hover:text-accent transition-colors">{job.title}</CardTitle>
                      <Badge variant="outline">{job.department}</Badge>
                    </div>
                    <Badge variant="secondary">{job.type}</Badge>
                  </div>

                  <CardDescription className="leading-relaxed">{job.description}</CardDescription>

                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-accent" />
                      {job.location}
                    </div>
                    <div className="flex items-center gap-2">
                      <Briefcase className="h-4 w-4 text-accent" />
                      {job.experience}
                    </div>
                    <div className="flex items-center gap-2 col-span-2">
                      <DollarSign className="h-4 w-4 text-accent" />
                      {job.salary}
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <h4 className="font-medium text-sm">Key Requirements:</h4>
                    <ul className="space-y-1">
                      {job.requirements.slice(0, 3).map((req, idx) => (
                        <li key={idx} className="text-xs text-muted-foreground flex items-start gap-1">
                          <div className="w-1 h-1 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                          {req}
                        </li>
                      ))}
                    </ul>
                    {job.requirements.length > 3 && (
                      <p className="text-xs text-muted-foreground">+{job.requirements.length - 3} more requirements</p>
                    )}
                  </div>

                  <Button
                    className="w-full bg-accent hover:bg-accent/90"
                    onClick={() => {
                      setSelectedJob(job.id)
                      setApplicationData((prev) => ({ ...prev, position: job.title }))
                      document.getElementById("application-form")?.scrollIntoView({ behavior: "smooth" })
                    }}
                  >
                    Apply for this Position
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="application-form" className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card>
            <CardHeader className="text-center space-y-4">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                <Send className="h-8 w-8 text-accent" />
              </div>
              <CardTitle className="text-2xl">Apply for a Position</CardTitle>
              <CardDescription className="text-base">
                Fill out the form below to submit your application. We'll review it and get back to you within 5
                business days.
              </CardDescription>
            </CardHeader>

            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={applicationData.name}
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
                      value={applicationData.email}
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
                      value={applicationData.phone}
                      onChange={handleInputChange}
                      placeholder="+2348024469300"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="position">Position Applied For *</Label>
                    <Select
                      onValueChange={(value) => handleSelectChange("position", value)}
                      value={applicationData.position}
                      required
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select position" />
                      </SelectTrigger>
                      <SelectContent>
                        {jobOpenings.map((job) => (
                          <SelectItem key={job.id} value={job.title}>
                            {job.title}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="experience">Years of Experience *</Label>
                  <Select onValueChange={(value) => handleSelectChange("experience", value)} required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select experience level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="entry">Entry Level (0-1 years)</SelectItem>
                      <SelectItem value="junior">Junior (1-3 years)</SelectItem>
                      <SelectItem value="mid">Mid-Level (3-5 years)</SelectItem>
                      <SelectItem value="senior">Senior (5-10 years)</SelectItem>
                      <SelectItem value="expert">Expert (10+ years)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="coverLetter">Cover Letter *</Label>
                  <Textarea
                    id="coverLetter"
                    name="coverLetter"
                    value={applicationData.coverLetter}
                    onChange={handleInputChange}
                    placeholder="Tell us why you're interested in this position and what makes you a great fit for our team..."
                    rows={6}
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-accent hover:bg-accent/90 text-lg py-6"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Submitting Application..."
                  ) : (
                    <>
                      Submit Application
                      <Send className="ml-2 h-5 w-5" />
                    </>
                  )}
                </Button>
                <p className="text-center text-sm text-muted-foreground">
                  By submitting this application, you agree to our terms and conditions.
                </p>
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
                  <Link href="/careers" className="hover:text-accent transition-colors">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Legal</h3>
              <ul className="space-y-2 text-primary-foreground/80">
                <li>
                  <Link href="/privacy" className="hover:text-accent transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:text-accent transition-colors">
                    Terms of Service
                  </Link>
                </li>
              </ul>
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
