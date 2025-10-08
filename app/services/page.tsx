import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Award,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  CheckCircle,
  Home,
  Building,
  Wrench,
  Hammer,
  PaintBucket,
  Zap,
  Package,
} from "lucide-react"
import Link from "next/link"

export default function ServicesPage() {
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
              <Link href="/services" className="text-accent font-medium">
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
              Get Quote
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <Badge variant="secondary" className="w-fit mx-auto">
            Our Services
          </Badge>
          <h1 className="text-4xl lg:text-5xl font-bold text-balance">Comprehensive Construction Solutions</h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto text-pretty">
            From residential homes to commercial complexes, we deliver exceptional construction services tailored to
            meet your specific needs and exceed your expectations.
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-8">
            {[
              {
                title: "Residential Construction",
                description:
                  "Custom homes, luxury residences, and residential developments built with precision and care.",
                icon: Home,
                features: [
                  "Custom Home Design & Build",
                  "Luxury Residential Projects",
                  "Multi-family Housing",
                  "Residential Renovations",
                  "Interior & Exterior Finishing",
                  "Landscaping & Outdoor Spaces",
                ],
                image: "/residential-construction-lagos-nigeria.png",
              },
              {
                title: "Commercial Construction",
                description: "Office buildings, retail spaces, and commercial complexes designed for business success.",
                icon: Building,
                features: [
                  "Office Buildings",
                  "Retail & Shopping Centers",
                  "Warehouses & Industrial",
                  "Hotels & Hospitality",
                  "Educational Facilities",
                  "Healthcare Buildings",
                ],
                image: "/commercial-construction-lagos-nigeria.png",
              },
              {
                title: "Engineering Procurement",
                description:
                  "Comprehensive procurement solutions for all your construction material and equipment needs.",
                icon: Package,
                features: [
                  "Construction Materials Sourcing",
                  "Heavy Equipment Supply",
                  "Specialized Engineering Supplies",
                  "Quality Assurance & Testing",
                  "Logistics & Delivery Management",
                  "Vendor Management Services",
                ],
                image: "/engineering-procurement-construction-materials-equ.jpg",
              },
              {
                title: "Renovation & Remodeling",
                description: "Transform existing spaces with our expert renovation and remodeling services.",
                icon: Hammer,
                features: [
                  "Home Renovations",
                  "Office Remodeling",
                  "Kitchen & Bathroom Upgrades",
                  "Structural Modifications",
                  "Accessibility Improvements",
                  "Energy Efficiency Upgrades",
                ],
                image: "/renovation-remodeling-lagos-nigeria.png",
              },
            ].map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="aspect-video bg-muted relative overflow-hidden">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/10 transition-colors"></div>
                  <div className="absolute top-4 left-4">
                    <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                      <service.icon className="h-6 w-6 text-accent-foreground" />
                    </div>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-accent hover:bg-accent/90">
                    Request Quote
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">Additional Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Beyond construction, we offer comprehensive services to support your project from start to finish.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Project Management",
                description: "End-to-end project oversight ensuring timely delivery and quality results.",
                icon: Award,
              },
              {
                title: "Electrical Services",
                description: "Complete electrical installation, maintenance, and safety inspections.",
                icon: Zap,
              },
              {
                title: "Plumbing Services",
                description: "Professional plumbing installation, repairs, and maintenance services.",
                icon: Wrench,
              },
              {
                title: "Painting & Finishing",
                description: "Interior and exterior painting with premium materials and finishes.",
                icon: PaintBucket,
              },
            ].map((service, index) => (
              <Card key={index} className="text-center group hover:shadow-lg transition-all duration-300">
                <CardHeader className="space-y-4">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto group-hover:bg-accent/20 transition-colors">
                    <service.icon className="h-8 w-8 text-accent" />
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                  <CardDescription className="leading-relaxed">{service.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="outline" className="w-fit mx-auto">
              Our Process
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">How We Work</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Our proven process ensures your project is completed on time, within budget, and to the highest standards.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Consultation",
                description: "We meet to discuss your vision, requirements, and budget to create a tailored plan.",
              },
              {
                step: "02",
                title: "Design & Planning",
                description: "Our team develops detailed plans, permits, and timelines for your project.",
              },
              {
                step: "03",
                title: "Construction",
                description: "Skilled craftsmen execute the project with regular updates and quality checks.",
              },
              {
                step: "04",
                title: "Completion",
                description: "Final inspection, handover, and ongoing support to ensure your satisfaction.",
              },
            ].map((process, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="w-16 h-16 bg-accent text-accent-foreground rounded-full flex items-center justify-center mx-auto text-xl font-bold">
                  {process.step}
                </div>
                <h3 className="text-xl font-semibold">{process.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-balance">Ready to Start Your Project?</h2>
          <p className="text-xl text-primary-foreground/90 text-pretty">
            Contact us today for a free consultation and detailed quote for your construction project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              Get Free Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call Now
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
