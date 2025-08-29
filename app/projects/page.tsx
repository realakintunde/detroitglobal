"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Building2,
  Users,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  CheckCircle,
  DollarSign,
  Home,
  Building,
  Hammer,
  Filter,
} from "lucide-react"
import Link from "next/link"

const projects = [
  {
    id: 1,
    title: "Luxury Residential Estate",
    category: "residential",
    location: "Victoria Island, Lagos",
    completedDate: "2024",
    budget: "₦2.5B",
    description: "A premium 50-unit residential estate featuring modern amenities and sustainable design.",
    image: "/luxury-residential-estate-modern-apartments-lagos-.png",
    features: ["50 Luxury Units", "Swimming Pool", "Gym & Spa", "24/7 Security", "Solar Power", "Smart Home Features"],
  },
  {
    id: 2,
    title: "Corporate Office Complex",
    category: "commercial",
    location: "Ikoyi, Lagos",
    completedDate: "2023",
    budget: "₦1.8B",
    description: "Modern 15-story office complex with state-of-the-art facilities and green building certification.",
    image: "/modern-office-building-skyscraper-lagos-nigeria-co.png",
    features: ["15 Floors", "Green Certified", "Conference Centers", "Parking Garage", "Fiber Internet", "HVAC System"],
  },
  {
    id: 3,
    title: "Shopping Mall Renovation",
    category: "renovation",
    location: "Surulere, Lagos",
    completedDate: "2023",
    budget: "₦800M",
    description: "Complete renovation of a 20,000 sqm shopping mall with modern retail spaces and entertainment areas.",
    image: "/modern-shopping-mall-interior-renovation-retail-sp.png",
    features: [
      "20,000 sqm",
      "100+ Retail Spaces",
      "Food Court",
      "Cinema Complex",
      "Modern Lighting",
      "Accessibility Features",
    ],
  },
  {
    id: 4,
    title: "Industrial Warehouse",
    category: "commercial",
    location: "Apapa, Lagos",
    completedDate: "2024",
    budget: "₦1.2B",
    description: "Large-scale industrial warehouse with advanced logistics and storage capabilities.",
    image: "/industrial-warehouse-logistics-facility-lagos-nige.png",
    features: ["50,000 sqm", "Loading Docks", "Climate Control", "Security Systems", "Office Spaces", "Truck Access"],
  },
  {
    id: 5,
    title: "Family Home Renovation",
    category: "residential",
    location: "Lekki, Lagos",
    completedDate: "2023",
    budget: "₦150M",
    description: "Complete renovation of a family home with modern design and energy-efficient features.",
    image: "/modern-family-home-renovation-lagos-nigeria-reside.png",
    features: ["5 Bedrooms", "Modern Kitchen", "Solar Panels", "Swimming Pool", "Garden Landscaping", "Smart Security"],
  },
  {
    id: 6,
    title: "Hotel Construction",
    category: "commercial",
    location: "Ikeja, Lagos",
    completedDate: "2022",
    budget: "₦3.2B",
    description: "Luxury 200-room hotel with conference facilities, restaurants, and recreational amenities.",
    image: "/luxury-hotel-building-lagos-nigeria-hospitality.png",
    features: ["200 Rooms", "Conference Center", "Restaurant", "Spa & Fitness", "Rooftop Bar", "Valet Parking"],
  },
  {
    id: 7,
    title: "School Building Project",
    category: "institutional",
    location: "Mainland, Lagos",
    completedDate: "2023",
    budget: "₦600M",
    description: "Modern educational facility with 30 classrooms, laboratories, and sports facilities.",
    image: "/modern-school-building-educational-facility-lagos-.png",
    features: ["30 Classrooms", "Science Labs", "Library", "Sports Hall", "Playground", "Computer Lab"],
  },
  {
    id: 8,
    title: "Residential Complex",
    category: "residential",
    location: "Ajah, Lagos",
    completedDate: "2022",
    budget: "₦1.5B",
    description: "Affordable housing complex with 80 units designed for middle-income families.",
    image: "/residential-apartment-complex-affordable-housing-l.png",
    features: ["80 Units", "Playground", "Community Center", "Parking", "Security", "Water Treatment"],
  },
]

const categories = [
  { id: "all", label: "All Projects", icon: Building2 },
  { id: "residential", label: "Residential", icon: Home },
  { id: "commercial", label: "Commercial", icon: Building },
  { id: "renovation", label: "Renovation", icon: Hammer },
  { id: "institutional", label: "Institutional", icon: Users },
]

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("all")

  const filteredProjects =
    activeCategory === "all" ? projects : projects.filter((project) => project.category === activeCategory)

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="bg-white border-b border-border sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link href="/">
                <img src="/detroit-global-services-logo.png" alt="Detroit Global Services" className="h-12 w-auto" />
              </Link>
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
              <Link href="/projects" className="text-accent font-medium">
                Projects
              </Link>
              <Link href="/contact" className="text-primary hover:text-accent transition-colors">
                Contact
              </Link>
            </div>
            <Link href="/quote">
              <Button className="hidden md:inline-flex">Get Quote</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <Badge variant="secondary" className="w-fit mx-auto">
            Our Projects
          </Badge>
          <h1 className="text-4xl lg:text-5xl font-bold text-balance">Portfolio of Excellence</h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto text-pretty">
            Explore our diverse portfolio of completed construction projects across Lagos, showcasing our commitment to
            quality, innovation, and client satisfaction.
          </p>
          <div className="flex items-center justify-center gap-8 pt-4">
            <div className="text-center">
              <div className="text-3xl font-bold">500+</div>
              <div className="text-sm text-primary-foreground/80">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">₦50B+</div>
              <div className="text-sm text-primary-foreground/80">Total Project Value</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">100%</div>
              <div className="text-sm text-primary-foreground/80">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center">
            <div className="flex items-center gap-2 p-1 bg-card rounded-lg border">
              <Filter className="h-4 w-4 text-muted-foreground ml-3" />
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={activeCategory === category.id ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center gap-2 ${
                    activeCategory === category.id ? "bg-accent text-accent-foreground" : "hover:bg-muted"
                  }`}
                >
                  <category.icon className="h-4 w-4" />
                  {category.label}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Card key={project.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="aspect-video bg-muted relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="capitalize">
                      {project.category}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge variant="outline" className="bg-background/90 text-foreground border-background/20">
                      {project.completedDate}
                    </Badge>
                  </div>
                </div>

                <CardHeader className="space-y-3">
                  <CardTitle className="text-xl group-hover:text-accent transition-colors">{project.title}</CardTitle>
                  <CardDescription className="leading-relaxed">{project.description}</CardDescription>

                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {project.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <DollarSign className="h-4 w-4" />
                      {project.budget}
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <h4 className="font-medium text-sm">Key Features:</h4>
                    <div className="grid grid-cols-2 gap-1">
                      {project.features.slice(0, 4).map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-1 text-xs">
                          <CheckCircle className="h-3 w-3 text-accent flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                    {project.features.length > 4 && (
                      <p className="text-xs text-muted-foreground">+{project.features.length - 4} more features</p>
                    )}
                  </div>

                  <Button className="w-full bg-accent hover:bg-accent/90 group-hover:bg-accent/80">
                    View Project Details
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <Building2 className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">No projects found</h3>
              <p className="text-muted-foreground">Try selecting a different category to view projects.</p>
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">Project Statistics</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Our track record speaks for itself with consistent delivery of quality projects across various sectors.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Residential Projects",
                count: "200+",
                description: "Custom homes and residential developments",
                icon: Home,
              },
              {
                title: "Commercial Buildings",
                count: "150+",
                description: "Office buildings, hotels, and retail spaces",
                icon: Building,
              },
              {
                title: "Renovation Projects",
                count: "100+",
                description: "Modernization and upgrade projects",
                icon: Hammer,
              },
              {
                title: "Institutional Projects",
                count: "50+",
                description: "Schools, hospitals, and public buildings",
                icon: Users,
              },
            ].map((stat, index) => (
              <Card key={index} className="text-center group hover:shadow-lg transition-all duration-300">
                <CardHeader className="space-y-4">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto group-hover:bg-accent/20 transition-colors">
                    <stat.icon className="h-8 w-8 text-accent" />
                  </div>
                  <div className="space-y-2">
                    <div className="text-3xl font-bold text-accent">{stat.count}</div>
                    <CardTitle className="text-lg">{stat.title}</CardTitle>
                    <CardDescription className="leading-relaxed">{stat.description}</CardDescription>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-balance">Ready to Start Your Next Project?</h2>
          <p className="text-xl text-primary-foreground/90 text-pretty">
            Join our portfolio of successful projects. Contact us today to discuss your construction needs and get a
            detailed project proposal.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call for Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center">
                <img src="/detroit-global-services-logo.png" alt="Detroit Global Services" className="h-10 w-auto" />
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
