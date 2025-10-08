import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Award, Phone, Mail, MapPin, ArrowRight, Target, Eye, Heart, Shield, Clock, Star } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
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
              <Link href="/about" className="text-accent font-medium">
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
              Get Quote
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge variant="secondary" className="w-fit">
                About Detroit Services Canada Incorporated
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-bold text-balance">Building Dreams, Creating Legacies</h1>
              <p className="text-xl text-primary-foreground/90 leading-relaxed text-pretty">
                For over 15 years, Detroit Services Canada Incorporated has been a trusted construction partner across
                Canada and Nigeria, delivering exceptional projects that stand the test of time and exceed client
                expectations.
              </p>
              <div className="flex items-center gap-8 pt-4">
                <div className="text-center">
                  <div className="text-3xl font-bold">2009</div>
                  <div className="text-sm text-primary-foreground/80">Founded</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">500+</div>
                  <div className="text-sm text-primary-foreground/80">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">50+</div>
                  <div className="text-sm text-primary-foreground/80">Team Members</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/detroit-global-services-team-lagos-nigeria.png"
                alt="Detroit Global Services team"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <Badge variant="outline" className="w-fit">
                Our Story
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-balance">From Vision to Reality</h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Detroit Services Canada Incorporated was founded in 2009 with a simple yet ambitious vision: to
                  deliver world-class construction services across North America and West Africa through innovation,
                  quality, and unwavering commitment to excellence.
                </p>
                <p>
                  What started as a small team of passionate builders in Canada has grown into an international
                  construction company with operations in London, Ontario and Lagos, Nigeria, completing over 500
                  projects across residential, commercial, and industrial sectors.
                </p>
                <p>
                  Our success is built on strong relationships with clients, suppliers, and the community. We believe
                  that every project is an opportunity to create something meaningful that will serve generations to
                  come.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="/construction-progress-lagos-nigeria-before-after.png"
                alt="Construction progress showcase"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-card p-6 rounded-lg shadow-lg border">
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent">15+</div>
                  <div className="text-sm text-muted-foreground">Years of Excellence</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">Our Foundation</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              The principles that guide everything we do and drive us to deliver exceptional results.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="text-center group hover:shadow-lg transition-all duration-300">
              <CardHeader className="space-y-4">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto group-hover:bg-accent/20 transition-colors">
                  <Target className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="text-2xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  To deliver exceptional construction services that exceed client expectations while contributing to the
                  development and growth of Lagos's infrastructure and communities.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-lg transition-all duration-300">
              <CardHeader className="space-y-4">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto group-hover:bg-accent/20 transition-colors">
                  <Eye className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="text-2xl">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  To be West Africa's leading construction company, recognized for innovation, quality, and sustainable
                  building practices that shape the future of urban development.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-lg transition-all duration-300">
              <CardHeader className="space-y-4">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto group-hover:bg-accent/20 transition-colors">
                  <Heart className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="text-2xl">Our Values</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Integrity, excellence, innovation, and community. These core values guide our decisions and ensure we
                  build lasting relationships alongside lasting structures.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="outline" className="w-fit mx-auto">
              Why Choose Us
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">What Sets Us Apart</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Our commitment to excellence and client satisfaction has made us Lagos's preferred construction partner.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Licensed & Certified",
                description: "Fully licensed with all necessary certifications and insurance coverage.",
                icon: Shield,
              },
              {
                title: "On-Time Delivery",
                description: "Proven track record of completing projects on schedule and within budget.",
                icon: Clock,
              },
              {
                title: "Quality Assurance",
                description: "Rigorous quality control processes ensure exceptional results every time.",
                icon: Star,
              },
              {
                title: "Expert Team",
                description: "Skilled professionals with decades of combined construction experience.",
                icon: Users,
              },
            ].map((feature, index) => (
              <Card key={index} className="text-center group hover:shadow-lg transition-all duration-300">
                <CardHeader className="space-y-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto group-hover:bg-accent/20 transition-colors">
                    <feature.icon className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                  <CardDescription className="leading-relaxed">{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">Leadership Team</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Meet the experienced professionals leading Detroit Services Canada Incorporated to new heights.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Adebayo Johnson",
                role: "Chief Executive Officer",
                experience: "20+ years in construction management",
                image: "/ceo-detroit-global-services-lagos.png",
              },
              {
                name: "Funmi Adebayo",
                role: "Chief Operations Officer",
                experience: "15+ years in project operations",
                image: "/coo-detroit-global-services-lagos.png",
              },
              {
                name: "Emeka Okafor",
                role: "Chief Technical Officer",
                experience: "18+ years in construction engineering",
                image: "/cto-detroit-global-services-lagos.png",
              },
            ].map((member, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
                <div className="aspect-square bg-muted relative overflow-hidden">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader className="text-center">
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <CardDescription className="text-accent font-medium">{member.role}</CardDescription>
                  <p className="text-sm text-muted-foreground">{member.experience}</p>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Awards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="outline" className="w-fit mx-auto">
              Recognition
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">Certifications & Awards</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Our commitment to excellence has been recognized by industry leaders and regulatory bodies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Licensed Building Contractor",
              "ISO 9001:2015 Certified",
              "Lagos State Safety Award 2023",
              "Best Construction Company 2022",
              "Green Building Certification",
              "COREN Professional Membership",
              "Excellence in Innovation 2021",
              "Client Satisfaction Award",
            ].map((certification, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-lg text-center border group hover:shadow-md transition-all duration-300"
              >
                <Award className="h-8 w-8 text-accent mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <p className="font-medium text-sm">{certification}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-balance">Ready to Work With Us?</h2>
          <p className="text-xl text-primary-foreground/90 text-pretty">
            Join hundreds of satisfied clients who have trusted Detroit Services Canada Incorporated with their
            construction projects.
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
              Contact Us
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
              <div className="space-y-3 text-primary-foreground/80 text-sm sm:text-base">
                <div>
                  <div className="font-semibold text-primary-foreground mb-2">Canada Headquarters</div>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
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
                  <div className="space-y-2">
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
                  <Mail className="h-4 w-4 flex-shrink-0" />
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
