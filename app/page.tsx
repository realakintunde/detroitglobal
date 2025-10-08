import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building2, Users, Award, Phone, Mail, MapPin, ArrowRight, CheckCircle, Star } from "lucide-react"
import Link from "next/link"
import { MobileNav } from "@/components/mobile-nav"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="bg-white text-primary sticky top-0 z-50 shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <img
                src="/detroit-global-services-logo.png"
                alt="Detroit Global Services Logo"
                className="h-10 sm:h-12 w-auto"
              />
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-accent font-medium">
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
            <div className="flex items-center gap-2">
              <Button variant="default" size="sm" className="hidden md:inline-flex">
                <Link href="/quote">Get Quote</Link>
              </Button>
              <MobileNav currentPath="/" />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary/95 to-blue-600 text-primary-foreground py-16 sm:py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/10 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6 lg:space-y-8 text-center lg:text-left">
              <div className="space-y-4">
                <Badge variant="secondary" className="w-fit mx-auto lg:mx-0">
                  Trusted Construction Partner
                </Badge>
                <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight text-balance">
                  Building Excellence Across Canada & Nigeria
                </h1>
                <p className="text-lg sm:text-xl text-primary-foreground/90 leading-relaxed text-pretty">
                  Detroit Services Canada Incorporated delivers world-class construction solutions with over a decade of
                  experience. From residential projects to commercial developments, we build your vision with precision
                  and quality.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground min-h-[48px]">
                  <Link href="/quote" className="flex items-center">
                    Start Your Project
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent min-h-[48px]"
                >
                  <Link href="/projects">View Our Work</Link>
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-4 sm:gap-8 pt-4 text-center">
                <div>
                  <div className="text-2xl sm:text-3xl font-bold">500+</div>
                  <div className="text-xs sm:text-sm text-primary-foreground/80">Projects Completed</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-bold">15+</div>
                  <div className="text-xs sm:text-sm text-primary-foreground/80">Years Experience</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-bold">100%</div>
                  <div className="text-xs sm:text-sm text-primary-foreground/80">Client Satisfaction</div>
                </div>
              </div>
            </div>
            <div className="relative order-first lg:order-last">
              <img
                src="/modern-construction-site-in-lagos-nigeria-with-wor.png"
                alt="Detroit Global Services construction site"
                className="rounded-lg shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 sm:py-20 bg-blue-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12 sm:mb-16">
            <Badge variant="outline" className="w-fit mx-auto">
              Our Services
            </Badge>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-balance">
              Comprehensive Construction Solutions
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              From foundation to finish, we provide end-to-end construction services tailored to meet your specific
              needs and exceed your expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: "Residential Construction",
                description: "Custom homes, renovations, and residential developments built to the highest standards.",
                icon: Building2,
                features: ["Custom Home Design", "Renovations", "Interior Finishing"],
              },
              {
                title: "Commercial Projects",
                description: "Office buildings, retail spaces, and commercial complexes designed for success.",
                icon: Users,
                features: ["Office Buildings", "Retail Spaces", "Warehouses"],
              },
              {
                title: "Project Management",
                description: "End-to-end project oversight ensuring timely delivery and quality results.",
                icon: Award,
                features: ["Timeline Management", "Quality Control", "Budget Oversight"],
              },
            ].map((service, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 bg-card">
                <CardHeader className="space-y-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <service.icon className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle className="text-lg sm:text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-sm sm:text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
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
                  <Button variant="ghost" className="w-full justify-between group-hover:bg-accent/10 min-h-[44px]">
                    Learn More
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-6 lg:space-y-8 order-2 lg:order-1">
              <div className="space-y-4 text-center lg:text-left">
                <Badge variant="outline" className="w-fit mx-auto lg:mx-0">
                  Why Choose Us
                </Badge>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-balance">
                  Your Trusted Construction Partner in Canada & Nigeria
                </h2>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed text-pretty">
                  With over 15 years of experience in the construction industry, Detroit Services Canada Incorporated
                  has built a reputation for excellence, reliability, and innovation across North America and West
                  Africa.
                </p>
              </div>

              <div className="space-y-4 sm:space-y-6">
                {[
                  {
                    title: "Licensed & Insured",
                    description:
                      "Fully licensed construction company with comprehensive insurance coverage for your peace of mind.",
                  },
                  {
                    title: "International Expertise",
                    description:
                      "Deep understanding of Canadian and Nigerian building codes, regulations, and local construction practices.",
                  },
                  {
                    title: "Quality Materials",
                    description:
                      "We source only the finest materials from trusted suppliers to ensure lasting durability.",
                  },
                  {
                    title: "Timely Delivery",
                    description: "Proven track record of completing projects on time and within budget.",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex gap-3 sm:gap-4">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 sm:mt-3 flex-shrink-0"></div>
                    <div className="space-y-1">
                      <h3 className="font-semibold text-base sm:text-lg">{item.title}</h3>
                      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative order-1 lg:order-2">
              <img
                src="/professional-construction-team-in-lagos-nigeria-we.png"
                alt="Detroit Global Services team"
                className="rounded-lg shadow-xl w-full h-auto"
              />
              <div className="absolute -bottom-4 sm:-bottom-6 -left-4 sm:-left-6 bg-card p-4 sm:p-6 rounded-lg shadow-lg border max-w-[200px] sm:max-w-none">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="flex -space-x-1 sm:-space-x-2">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="w-6 h-6 sm:w-8 sm:h-8 bg-accent rounded-full border-2 border-background flex items-center justify-center"
                      >
                        <Star className="h-3 w-3 sm:h-4 sm:w-4 text-accent-foreground fill-current" />
                      </div>
                    ))}
                  </div>
                  <div>
                    <div className="font-semibold text-sm sm:text-base">5.0 Rating</div>
                    <div className="text-xs sm:text-sm text-muted-foreground">From 200+ clients</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 sm:space-y-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-balance">
            Ready to Start Your Construction Project?
          </h2>
          <p className="text-lg sm:text-xl text-primary-foreground/90 text-pretty">
            Get in touch with our expert team today for a free consultation and detailed project quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground min-h-[48px]">
              <Link href="/quote" className="flex items-center">
                Get Free Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent min-h-[48px]"
            >
              <Link href="/contact" className="flex items-center">
                <Phone className="mr-2 h-5 w-5" />
                Call Us Now
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="space-y-4 sm:col-span-2 lg:col-span-1">
              <div className="flex items-center justify-center sm:justify-start">
                <img
                  src="/detroit-global-services-logo.png"
                  alt="Detroit Global Services Logo"
                  className="h-8 sm:h-10 w-auto"
                />
              </div>
              <p className="text-primary-foreground/80 leading-relaxed text-center sm:text-left text-sm sm:text-base">
                Building excellence in Lagos, Nigeria with over 15 years of construction expertise and unwavering
                commitment to quality.
              </p>
            </div>

            <div className="space-y-4 text-center sm:text-left">
              <h3 className="font-semibold text-base sm:text-lg">Services</h3>
              <ul className="space-y-2 text-primary-foreground/80 text-sm sm:text-base">
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

            <div className="space-y-4 text-center sm:text-left">
              <h3 className="font-semibold text-base sm:text-lg">Company</h3>
              <ul className="space-y-2 text-primary-foreground/80 text-sm sm:text-base">
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

            <div className="space-y-4 text-center sm:text-left">
              <h3 className="font-semibold text-base sm:text-lg">Contact Info</h3>
              <div className="space-y-3 text-primary-foreground/80 text-sm sm:text-base">
                <div>
                  <div className="font-semibold text-primary-foreground mb-2">Canada Headquarters</div>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2 justify-center sm:justify-start">
                      <MapPin className="h-4 w-4 flex-shrink-0 mt-0.5" />
                      <span>
                        1285 Whetherfield Street
                        <br />
                        London, Ontario N6H 0E5
                      </span>
                    </div>
                    <div className="flex items-center gap-2 justify-center sm:justify-start">
                      <Phone className="h-4 w-4 flex-shrink-0" />
                      <a href="tel:+14168587484" className="hover:text-accent transition-colors">
                        +1 416 858 7484
                      </a>
                    </div>
                  </div>
                </div>
                <div className="pt-2">
                  <div className="font-semibold text-primary-foreground mb-2">Nigeria Branch Office</div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 justify-center sm:justify-start">
                      <MapPin className="h-4 w-4 flex-shrink-0" />
                      <span>Lagos, Nigeria</span>
                    </div>
                    <div className="flex items-center gap-2 justify-center sm:justify-start">
                      <Phone className="h-4 w-4 flex-shrink-0" />
                      <a href="tel:+2348024469300" className="hover:text-accent transition-colors">
                        +234 802 446 9300
                      </a>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 justify-center sm:justify-start pt-2">
                  <Mail className="h-4 w-4 flex-shrink-0" />
                  <a
                    href="mailto:info@detroitglobalservices.com"
                    className="hover:text-accent transition-colors break-all"
                  >
                    info@detroitglobalservices.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 mt-8 sm:mt-12 pt-6 sm:pt-8 text-center text-primary-foreground/60 text-sm">
            <p>&copy; 2025 Detroit Services Canada Incorporated. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
