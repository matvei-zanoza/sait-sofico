import Link from "next/link"
import { ArrowRight, Shield } from "lucide-react"
import { ScrollAnimation } from "@/components/scroll-animation"

export function ComplianceSection() {
  return (
    <section className="pt-20 pb-16 border-t border-border">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <ScrollAnimation animation="scale-in">
          <Shield className="h-10 w-10 sm:h-12 sm:w-12 text-accent mx-auto" strokeWidth={1} />
        </ScrollAnimation>
        
        <ScrollAnimation animation="fade-up" delay={100}>
          <span className="mt-6 sm:mt-8 inline-block text-xs font-medium uppercase tracking-[0.2em] text-accent">
            Compliance
          </span>
        </ScrollAnimation>
        <ScrollAnimation animation="fade-up" delay={200}>
          <h2 className="mt-4 sm:mt-6 font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-foreground">
            Built on Integrity
          </h2>
        </ScrollAnimation>
        <ScrollAnimation animation="fade-in" delay={300}>
          <div className="mt-6 sm:mt-8 h-px w-16 bg-accent mx-auto" />
        </ScrollAnimation>
        <ScrollAnimation animation="fade-up" delay={400}>
          <p className="mt-6 sm:mt-8 text-base sm:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Our operations are structured with regulatory awareness and compliance 
            at their foundation. We maintain clear boundaries regarding our 
            operational scope and regulatory positioning.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animation="fade-up" delay={500} className="mt-12">
          <Link 
            href="/compliance" 
            className="inline-flex items-center justify-center gap-2 px-6 py-2.5 text-xs font-medium uppercase tracking-widest border border-border text-foreground transition-all duration-200 hover:border-primary hover:bg-muted"
          >
            View Compliance Information
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </ScrollAnimation>
      </div>
    </section>
  )
}
