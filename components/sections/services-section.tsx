import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { ScrollAnimation, StaggerContainer, StaggerItem } from "@/components/scroll-animation"

const services = [
  {
    title: "Operational Coordination",
    description: "Structured coordination of cross-border trade operations with systematic documentation and process alignment.",
  },
  {
    title: "Supplier Alignment",
    description: "Vendor assessment, specification matching, and multi-party communication facilitation for trade activities.",
  },
  {
    title: "Documentation Support",
    description: "Comprehensive documentation workflows including contract structuring and compliance documentation.",
  },
]

export function ServicesSection() {
  return (
    <section className="pt-20 pb-16 border-t border-border">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <ScrollAnimation animation="fade-up">
          <span className="inline-block text-xs font-medium uppercase tracking-[0.2em] text-accent">
            What We Do
          </span>
        </ScrollAnimation>
        <ScrollAnimation animation="fade-up" delay={100}>
          <h2 className="mt-6 font-serif text-4xl sm:text-5xl font-normal text-foreground">
            Services
          </h2>
        </ScrollAnimation>
        <ScrollAnimation animation="fade-up" delay={200}>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive operational coordination for B2B trade activities.
          </p>
        </ScrollAnimation>
      </div>
      
      <div className="mx-auto max-w-6xl px-6 mt-12 sm:mt-16 lg:mt-20">
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
          {services.map((service, index) => (
            <StaggerItem key={service.title} index={index} className="bg-background p-8 sm:p-10 md:p-12 text-center">
              <h3 className="text-lg sm:text-xl font-serif text-foreground">{service.title}</h3>
              <div className="mt-4 sm:mt-6 h-px w-12 bg-border mx-auto" />
              <p className="mt-4 sm:mt-6 text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </StaggerItem>
          ))}
        </StaggerContainer>
        
        <ScrollAnimation animation="fade-up" delay={400} className="mt-12 text-center">
          <Link 
            href="/services" 
            className="inline-flex items-center justify-center gap-2 px-6 py-2.5 text-xs font-medium uppercase tracking-widest border border-border text-foreground transition-all duration-200 hover:border-primary hover:bg-muted"
          >
            View All Services
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </ScrollAnimation>
      </div>
    </section>
  )
}
