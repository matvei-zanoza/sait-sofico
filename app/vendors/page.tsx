"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { vendors } from "@/content/vendors"
import { ScrollAnimation, StaggerContainer, StaggerItem } from "@/components/scroll-animation"

export default function VendorsPage() {
  return (
    <div className="bg-background pt-20">
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <ScrollAnimation animation="fade-up">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <span className="inline-block text-xs font-medium uppercase tracking-[0.2em] text-accent">
              Network
            </span>
            <h1 className="mt-6 sm:mt-8 font-serif text-4xl sm:text-5xl lg:text-7xl font-normal text-foreground leading-[1.1]">
              Technology Partners
            </h1>
            <div className="mt-6 sm:mt-8 h-px w-16 bg-accent mx-auto" />
            <p className="mt-6 sm:mt-8 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              Hardware and technology brands we coordinate with for B2B trade operations.
            </p>
          </div>
        </ScrollAnimation>
      </section>

      {/* Vendor Grid */}
      <section className="py-12 lg:py-20 border-t border-border">
        <div className="mx-auto max-w-6xl px-6">
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {vendors.map((vendor, index) => (
              <StaggerItem
                key={vendor.id}
                index={index}
                className="bg-card border border-border aspect-[2.5/1] sm:aspect-[2/1] flex flex-col items-center justify-center p-4 transition-colors hover:border-accent/50"
              >
                <span className="text-sm sm:text-base font-medium text-foreground">
                  {vendor.name}
                </span>
                <span className="text-[10px] uppercase tracking-wider text-muted-foreground mt-1">
                  {vendor.category}
                </span>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Disclaimer */}
          <ScrollAnimation animation="fade-in" delay={400}>
            <div className="mt-10 sm:mt-14 p-6 sm:p-8 md:p-10 bg-card border border-border text-center">
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                Technology partners listed for coordination reference only. 
                No commercial relationship or endorsement is implied.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Information Cards */}
      <section className="py-16 lg:py-32 bg-card">
        <ScrollAnimation animation="fade-up">
          <div className="mx-auto max-w-5xl px-6 text-center">
            <span className="inline-block text-xs font-medium uppercase tracking-[0.2em] text-accent">
              Services
            </span>
            <h2 className="mt-4 sm:mt-6 font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-foreground">
              Vendor Services
            </h2>
          </div>
        </ScrollAnimation>
        
        <div className="mx-auto max-w-6xl px-6 mt-10 sm:mt-16">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <StaggerItem index={0}>
              <div className="h-full bg-background border border-border p-8 sm:p-10 md:p-12">
                <h3 className="text-lg sm:text-xl font-serif text-foreground">
                  Vendor Coordination
                </h3>
                <div className="mt-4 sm:mt-6 h-px w-12 bg-border" />
                <p className="mt-4 sm:mt-6 text-sm text-muted-foreground leading-relaxed">
                  Our vendor coordination services help align supplier capabilities with 
                  your operational requirements. We facilitate communication and 
                  documentation between parties involved in trade activities.
                </p>
              </div>
            </StaggerItem>
            <StaggerItem index={1}>
              <div className="h-full bg-background border border-border p-8 sm:p-10 md:p-12">
                <h3 className="text-lg sm:text-xl font-serif text-foreground">
                  Specification Alignment
                </h3>
                <div className="mt-4 sm:mt-6 h-px w-12 bg-border" />
                <p className="mt-4 sm:mt-6 text-sm text-muted-foreground leading-relaxed">
                  We support the documentation and alignment of technical specifications 
                  between your organization and potential vendors. This includes 
                  requirement structuring and communication facilitation.
                </p>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <ScrollAnimation animation="fade-up">
        <section className="py-16 lg:py-32 border-t border-border">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-foreground">
              Need Vendor Information?
            </h2>
            <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <Link 
                href="/contact" 
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-xs font-medium uppercase tracking-widest bg-white text-black transition-all duration-200 hover:bg-accent hover:text-white"
              >
                Request Information
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
              <Link 
                href="/services" 
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 text-xs font-medium uppercase tracking-widest border border-white/30 text-white transition-all duration-200 hover:border-white hover:bg-white/10"
              >
                View Our Services
              </Link>
            </div>
          </div>
        </section>
      </ScrollAnimation>
    </div>
  )
}
