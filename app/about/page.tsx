"use client"

import Link from "next/link"
import { ArrowRight, FileText, Users, Settings, CheckCircle2 } from "lucide-react"
import { ScrollAnimation, StaggerContainer, StaggerItem } from "@/components/scroll-animation"

const features = [
  {
    icon: FileText,
    title: "Documentation Support",
    description: "Coordination of documentation workflows for trade activities, including specification alignment and document sequencing.",
  },
  {
    icon: Users,
    title: "Vendor Coordination", 
    description: "Alignment of vendor requirements with operational specifications and coordination of multi-party interactions.",
  },
  {
    icon: Settings,
    title: "Process Structuring",
    description: "Development of structured operational processes for trade coordination and workflow optimization.",
  },
]

const values = [
  "Systematic approach to trade coordination",
  "Clear operational boundaries",
  "Transparent communication",
  "Professional documentation practices",
  "Regulatory awareness",
  "Client-focused service delivery",
]

export default function AboutPage() {
  return (
    <div className="bg-background pt-20">
      {/* Hero Section */}
      <section className="py-24 lg:py-32">
        <ScrollAnimation animation="fade-up">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <span className="inline-block text-xs font-medium uppercase tracking-[0.2em] text-accent">
              About Us
            </span>
            <h1 className="mt-8 font-serif text-5xl sm:text-6xl lg:text-7xl font-normal text-foreground leading-[1.1]">
              Who We Are
            </h1>
            <div className="mt-8 h-px w-16 bg-accent mx-auto" />
            <p className="mt-8 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              SoFiCo Services Limited provides operational coordination and structured 
              support services for B2B companies engaged in international trade activities.
            </p>
          </div>
        </ScrollAnimation>
      </section>

      {/* Corporate Positioning */}
      <section className="py-16 lg:py-20 border-t border-border">
        <div className="mx-auto max-w-6xl px-6">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <StaggerItem index={0}>
              <div className="h-full p-8 md:p-10 bg-card border border-border">
                <span className="inline-block text-xs font-medium uppercase tracking-[0.2em] text-accent">
                  Overview
                </span>
                <h2 className="mt-4 text-2xl font-serif text-foreground">
                  Corporate Positioning
                </h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Our company operates as an operational coordination entity, providing 
                  structured support services for businesses involved in cross-border 
                  trade. We focus on documentation coordination, supplier alignment, 
                  and process structuring.
                </p>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  We work with established businesses that require systematic approaches 
                  to trade coordination.
                </p>
              </div>
            </StaggerItem>
            <StaggerItem index={1}>
              <div className="h-full p-8 md:p-10 bg-card border border-border">
                <span className="inline-block text-xs font-medium uppercase tracking-[0.2em] text-accent">
                  Focus
                </span>
                <h2 className="mt-4 text-2xl font-serif text-foreground">
                  Operational Focus
                </h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Our operational model centers on coordination activities rather than 
                  direct commercial execution. We provide support services that help 
                  businesses navigate the operational aspects of international trade.
                </p>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  This includes documentation sequencing, vendor alignment, specification 
                  coordination, and operational workflow support.
                </p>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Coordination Model */}
      <ScrollAnimation animation="fade-up">
        <section className="py-24 lg:py-32 bg-card">
          <div className="mx-auto max-w-5xl px-6 text-center">
            <span className="inline-block text-xs font-medium uppercase tracking-[0.2em] text-accent">
              Approach
            </span>
            <h2 className="mt-6 font-serif text-4xl sm:text-5xl font-normal text-foreground">
              Coordination Model
            </h2>
          </div>
          <div className="mx-auto max-w-5xl px-6 mt-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {features.map((feature) => (
                <div 
                  key={feature.title} 
                  className="p-8 bg-background border border-border"
                >
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                    <feature.icon className="h-4 w-4 text-accent" />
                  </div>
                  <h3 className="text-lg font-serif text-foreground">
                    {feature.title}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Values */}
      <section className="py-24 lg:py-32 border-t border-border">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <ScrollAnimation animation="fade-right">
              <div>
                <span className="inline-block text-xs font-medium uppercase tracking-[0.2em] text-accent">
                  Principles
                </span>
                <h2 className="mt-6 font-serif text-4xl sm:text-5xl font-normal text-foreground">
                  Our Values
                </h2>
                <p className="mt-6 text-muted-foreground leading-relaxed">
                  We operate with a clear set of principles that guide our interactions 
                  with clients and partners. Our approach emphasizes transparency, 
                  systematic processes, and clear operational boundaries.
                </p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation animation="fade-left">
              <div className="p-8 md:p-10 bg-card border border-border">
                <ul className="space-y-4">
                  {values.map((value) => (
                    <li key={value} className="flex items-center gap-3 text-foreground">
                      <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0" />
                      {value}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Risk & Responsibility */}
      <ScrollAnimation animation="fade-up">
        <section className="py-24 lg:py-32 bg-card">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <span className="inline-block text-xs font-medium uppercase tracking-[0.2em] text-accent">
              Responsibility
            </span>
            <h2 className="mt-6 font-serif text-4xl sm:text-5xl font-normal text-foreground">
              Risk & Responsibility
            </h2>
            <div className="mt-12 p-8 md:p-10 bg-background border border-border text-left">
              <p className="text-muted-foreground leading-relaxed">
                SoFiCo Services Limited is not a licensed financial institution and 
                does not provide banking, payment, or custody services. Our operational 
                activities are limited to coordination and documentation support services. 
                We do not hold client funds, process payments, or engage in activities 
                that would constitute regulated financial services.
              </p>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                Clients are responsible for their own regulatory compliance, due diligence, 
                and commercial decisions. Our coordination services are provided on a 
                non-advisory basis, and we do not provide legal, financial, or regulatory advice.
              </p>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* CTA */}
      <ScrollAnimation animation="fade-up">
        <section className="py-24 lg:py-32 border-t border-border">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <h2 className="font-serif text-4xl sm:text-5xl font-normal text-foreground">
              Ready to Learn More?
            </h2>
            <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <Link 
                href="/services" 
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-xs font-medium uppercase tracking-widest bg-white text-black transition-all duration-200 hover:bg-accent hover:text-white"
              >
                View Our Services
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
              <Link 
                href="/contact" 
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 text-xs font-medium uppercase tracking-widest border border-white/30 text-white transition-all duration-200 hover:border-white hover:bg-white/10"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </ScrollAnimation>
    </div>
  )
}
