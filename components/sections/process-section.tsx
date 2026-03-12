import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { ScrollAnimation, StaggerContainer, StaggerItem } from "@/components/scroll-animation"

const processSteps = [
  { number: "01", title: "Assessment", description: "Comprehensive review of operational requirements and trade objectives." },
  { number: "02", title: "Design", description: "Development of customized coordination frameworks and documentation flows." },
  { number: "03", title: "Execution", description: "Systematic implementation with ongoing alignment and process optimization." },
  { number: "04", title: "Support", description: "Continuous coordination throughout the trade lifecycle." },
]

export function ProcessSection() {
  return (
    <section className="pt-20 pb-16 bg-card">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <ScrollAnimation animation="fade-up">
          <span className="inline-block text-xs font-medium uppercase tracking-[0.2em] text-accent">
            Our Approach
          </span>
        </ScrollAnimation>
        <ScrollAnimation animation="fade-up" delay={100}>
          <h2 className="mt-6 font-serif text-4xl sm:text-5xl font-normal text-foreground">
            How We Work
          </h2>
        </ScrollAnimation>
        <ScrollAnimation animation="fade-up" delay={200}>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            A structured methodology designed for clarity and precision.
          </p>
        </ScrollAnimation>
      </div>
      
      <div className="mx-auto max-w-6xl px-6 mt-12 sm:mt-16 lg:mt-20">
        <StaggerContainer className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-8">
          {processSteps.map((step, index) => (
            <StaggerItem key={step.number} index={index} className="text-center">
              <span className="text-5xl sm:text-6xl lg:text-7xl font-serif text-accent/60">{step.number}</span>
              <h3 className="mt-3 sm:mt-4 text-lg sm:text-xl font-serif text-foreground">{step.title}</h3>
              <p className="mt-2 sm:mt-3 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </StaggerItem>
          ))}
        </StaggerContainer>
        
        <ScrollAnimation animation="fade-up" delay={500} className="mt-20 text-center">
          <Link 
            href="/how-we-work" 
            className="inline-flex items-center justify-center gap-2 px-6 py-2.5 text-xs font-medium uppercase tracking-widest border border-border text-foreground transition-all duration-200 hover:border-primary hover:bg-muted"
          >
            Explore Our Process
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </ScrollAnimation>
      </div>
    </section>
  )
}
