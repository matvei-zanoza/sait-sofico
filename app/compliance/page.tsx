"use client"

import Link from "next/link"
import { ArrowRight, Shield, AlertTriangle, FileCheck, Users } from "lucide-react"
import { ScrollAnimation, StaggerContainer, StaggerItem } from "@/components/scroll-animation"

const complianceSections = [
  {
    id: "01",
    title: "Not a Licensed Bank",
    icon: Shield,
    content: [
      "SoFiCo Services Limited is not a licensed bank and does not operate as a deposit-taking or credit institution.",
      "The company does not provide regulated financial services.",
      "Any references to trade or commercial activities relate to operational coordination and documentation support.",
    ],
  },
  {
    id: "02",
    title: "No Custody of Client Funds",
    icon: AlertTriangle,
    content: [
      "SoFiCo Services Limited does not hold, manage, or take custody of client funds under any circumstances.",
      "We do not operate client accounts, hold deposits, or process payments on behalf of clients.",
      "Any payments related to trade activities are conducted directly between the relevant parties.",
    ],
  },
  {
    id: "03",
    title: "Export Control & Sanctions",
    icon: FileCheck,
    content: [
      "SoFiCo Services Limited maintains operational awareness of export control and sanctions considerations.",
      "We may request documentation related to end-use and end-user information as part of coordination workflows.",
      "We do not provide regulatory advice. Clients remain responsible for their own compliance.",
    ],
  },
  {
    id: "04",
    title: "AML / KYC Cooperation",
    icon: Users,
    content: [
      "SoFiCo Services Limited cooperates with reasonable AML and KYC-related due diligence.",
      "We may request corporate documentation as part of onboarding and ongoing relationship management.",
      "We maintain appropriate record-keeping practices and cooperate with authorities where legally required.",
    ],
  },
]

export default function CompliancePage() {
  return (
    <div className="bg-background pt-20">
      {/* Hero Section */}
      <section className="py-24 lg:py-32">
        <ScrollAnimation animation="fade-up">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <span className="inline-block text-xs font-medium uppercase tracking-[0.2em] text-accent">
              Regulatory
            </span>
            <h1 className="mt-8 font-serif text-5xl sm:text-6xl lg:text-7xl font-normal text-foreground leading-[1.1]">
              Compliance
            </h1>
            <div className="mt-8 h-px w-16 bg-accent mx-auto" />
            <p className="mt-8 text-lg text-muted-foreground max-w-2xl mx-auto">
              Compliance information and regulatory positioning for SoFiCo Services Limited.
            </p>
          </div>
        </ScrollAnimation>
      </section>

      {/* Compliance Cards */}
      <section className="py-16 lg:py-20 border-t border-border">
        <div className="mx-auto max-w-6xl px-6">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {complianceSections.map((section, index) => (
              <StaggerItem key={section.id} index={index}>
                <div className="h-full p-8 md:p-10 bg-card border border-border">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                      <section.icon className="h-5 w-5 text-accent" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3">
                        <span className="text-sm font-medium text-accent/60">{section.id}</span>
                        <h2 className="text-xl font-serif text-foreground">
                          {section.title}
                        </h2>
                      </div>
                      <div className="mt-4 space-y-3">
                        {section.content.map((paragraph, pIndex) => (
                          <p key={pIndex} className="text-sm text-muted-foreground leading-relaxed">
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Due Diligence Support */}
      <ScrollAnimation animation="fade-up">
        <section className="py-24 lg:py-32 bg-card">
          <div className="mx-auto max-w-5xl px-6 text-center">
            <span className="inline-block text-xs font-medium uppercase tracking-[0.2em] text-accent">
              Support
            </span>
            <h2 className="mt-6 font-serif text-4xl sm:text-5xl font-normal text-foreground">
              Due Diligence Support
            </h2>
          </div>
          
          <div className="mx-auto max-w-4xl px-6 mt-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-8 md:p-10 bg-background border border-border">
                <h3 className="text-lg font-serif text-foreground">
                  Documentation
                </h3>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                  We understand that our business partners may need to conduct due 
                  diligence on our company. We are prepared to provide reasonable 
                  documentation to support enhanced due diligence processes.
                </p>
              </div>
              <div className="p-8 md:p-10 bg-background border border-border">
                <h3 className="text-lg font-serif text-foreground">
                  Questions
                </h3>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                  For questions regarding our compliance position or to request 
                  additional information for due diligence purposes, please contact 
                  us through our standard inquiry process.
                </p>
              </div>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Disclaimer */}
      <ScrollAnimation animation="fade-in">
        <section className="py-16 border-y border-border">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <p className="text-xs text-muted-foreground/60 leading-relaxed">
              The information on this page is provided for informational purposes only and 
              does not constitute professional advice. This information should not be relied upon 
              as a substitute for appropriate professional counsel.
            </p>
          </div>
        </section>
      </ScrollAnimation>

      {/* CTA */}
      <ScrollAnimation animation="fade-up">
        <section className="py-24 lg:py-32">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <h2 className="font-serif text-4xl sm:text-5xl font-normal text-foreground">
              Have Questions?
            </h2>
            <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <Link 
                href="/contact" 
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-xs font-medium uppercase tracking-widest bg-white text-black transition-all duration-200 hover:bg-accent hover:text-white"
              >
                Submit Inquiry
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
              <Link 
                href="/about" 
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 text-xs font-medium uppercase tracking-widest border border-white/30 text-white transition-all duration-200 hover:border-white hover:bg-white/10"
              >
                Learn About Us
              </Link>
            </div>
          </div>
        </section>
      </ScrollAnimation>
    </div>
  )
}
