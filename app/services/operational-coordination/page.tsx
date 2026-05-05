"use client"

import Link from "next/link"
import { ArrowRight, ArrowLeft, CheckCircle2, Settings, FileText, Users, Workflow } from "lucide-react"
import { ScrollAnimation, StaggerContainer, StaggerItem } from "@/components/scroll-animation"

const features = [
  {
    icon: Settings,
    title: "Process Structuring",
    description: "We help structure your operational processes for efficient multi-party coordination and clear documentation flow.",
  },
  {
    icon: FileText,
    title: "Documentation Management",
    description: "Comprehensive support for trade documentation sequencing, ensuring all parties have aligned information.",
  },
  {
    icon: Users,
    title: "Multi-Party Coordination",
    description: "Facilitate communication between suppliers, buyers, logistics providers, and financial institutions.",
  },
  {
    icon: Workflow,
    title: "Workflow Optimization",
    description: "Streamline your operational workflows to reduce delays and improve coordination efficiency.",
  },
]

const benefits = [
  "Structured communication channels between all parties",
  "Clear documentation sequencing and tracking",
  "Reduced operational delays and miscommunication",
  "Improved visibility across the coordination lifecycle",
  "Consistent process standards and procedures",
  "Professional coordination support throughout",
]

export default function OperationalCoordinationPage() {
  return (
    <div className="bg-background pt-20">
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <ScrollAnimation animation="fade-up">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <Link 
              href="/services" 
              className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft className="h-3 w-3" />
              All Services
            </Link>
            <span className="block text-xs font-medium uppercase tracking-[0.2em] text-accent">
              Core Service
            </span>
            <h1 className="mt-6 font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-foreground leading-[1.1]">
              Operational Coordination
            </h1>
            <div className="mt-6 h-px w-16 bg-accent mx-auto" />
            <p className="mt-6 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Structured coordination support for complex B2B trade operations. We help align 
              multiple parties, manage documentation flow, and ensure smooth operational execution.
            </p>
          </div>
        </ScrollAnimation>
      </section>

      {/* Features Grid */}
      <section className="py-12 lg:py-20 border-t border-border">
        <div className="mx-auto max-w-6xl px-6">
          <ScrollAnimation animation="fade-up">
            <div className="text-center mb-12">
              <span className="inline-block text-xs font-medium uppercase tracking-[0.2em] text-accent">
                What We Offer
              </span>
              <h2 className="mt-4 font-serif text-3xl sm:text-4xl font-normal text-foreground">
                Key Capabilities
              </h2>
            </div>
          </ScrollAnimation>
          
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {features.map((feature, index) => (
              <StaggerItem key={feature.title} index={index}>
                <div className="h-full p-6 sm:p-8 bg-card border border-border hover:border-accent/30 transition-colors">
                  <feature.icon className="h-6 w-6 text-accent" strokeWidth={1.5} />
                  <h3 className="mt-4 text-lg font-serif text-foreground">{feature.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 lg:py-24 bg-card">
        <div className="mx-auto max-w-4xl px-6">
          <ScrollAnimation animation="fade-up">
            <div className="text-center mb-12">
              <span className="inline-block text-xs font-medium uppercase tracking-[0.2em] text-accent">
                Benefits
              </span>
              <h2 className="mt-4 font-serif text-3xl sm:text-4xl font-normal text-foreground">
                Why Choose Our Coordination Services
              </h2>
            </div>
          </ScrollAnimation>
          
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <StaggerItem key={benefit} index={index}>
                <div className="flex items-start gap-3 p-4 bg-background border border-border">
                  <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground">{benefit}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <ScrollAnimation animation="fade-up">
        <section className="py-16 lg:py-24 border-t border-border">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-foreground">
              Need Operational Support?
            </h2>
            <p className="mt-4 text-muted-foreground">
              Let us help coordinate your B2B trade operations with professional structured support.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <Link 
                href="/contact" 
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-xs font-medium uppercase tracking-widest bg-white text-black transition-all duration-200 hover:bg-accent hover:text-white"
              >
                Request Introduction
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
              <Link 
                href="/how-we-work" 
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 text-xs font-medium uppercase tracking-widest border border-white/30 text-white transition-all duration-200 hover:border-white hover:bg-white/10"
              >
                Learn Our Process
              </Link>
            </div>
          </div>
        </section>
      </ScrollAnimation>
    </div>
  )
}
