import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { ScrollAnimation } from "@/components/scroll-animation"

export function AboutSection() {
  return (
    <section className="pt-20 pb-16 border-t border-border">
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Column - Title */}
          <div>
            <ScrollAnimation animation="fade-up">
              <span className="inline-block text-xs font-medium uppercase tracking-[0.2em] text-accent">
                About Us
              </span>
            </ScrollAnimation>
            <ScrollAnimation animation="fade-up" delay={100}>
              <h2 className="mt-6 font-serif text-4xl sm:text-5xl font-normal text-foreground">
                Your Partner in Global Trade
              </h2>
            </ScrollAnimation>
          </div>
          
          {/* Right Column - Content */}
          <div className="lg:pt-8">
            <ScrollAnimation animation="fade-up" delay={200}>
              <p className="text-lg text-muted-foreground leading-relaxed">
                SoFiCo Services Limited is a Hong Kong-based company specializing in B2B equipment sourcing, trade finance, and supplier coordination for businesses worldwide.
              </p>
            </ScrollAnimation>
            <ScrollAnimation animation="fade-up" delay={300}>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                We connect businesses with leading manufacturers of server hardware, telecommunications equipment, and microelectronic components, providing end-to-end support from supplier selection to fulfillment monitoring.
              </p>
            </ScrollAnimation>
            <ScrollAnimation animation="fade-up" delay={400}>
              <Link 
                href="/about" 
                className="inline-flex items-center gap-2 mt-8 text-sm font-medium text-accent hover:text-accent/80 transition-colors"
              >
                Learn More About Us
                <ArrowRight className="h-4 w-4" />
              </Link>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </section>
  )
}
