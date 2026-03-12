import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { ScrollAnimation } from "@/components/scroll-animation"

export function CTASection() {
  return (
    <section className="pt-20 pb-16 border-t border-border">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <ScrollAnimation animation="fade-up">
          <span className="inline-block text-xs font-medium uppercase tracking-[0.2em] text-accent">
            Get Started
          </span>
        </ScrollAnimation>
        <ScrollAnimation animation="fade-up" delay={100}>
          <h2 className="mt-4 sm:mt-6 font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-foreground">
            Ready to Begin?
          </h2>
        </ScrollAnimation>
        <ScrollAnimation animation="fade-in" delay={200}>
          <div className="mt-6 sm:mt-8 h-px w-16 bg-accent mx-auto" />
        </ScrollAnimation>
        <ScrollAnimation animation="fade-up" delay={300}>
          <p className="mt-6 sm:mt-8 text-base sm:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Request a business introduction to discuss your operational 
            coordination requirements.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animation="fade-up" delay={400} className="mt-8 sm:mt-12 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <Link 
            href="/contact" 
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 sm:py-3 text-xs font-medium uppercase tracking-widest bg-white text-black transition-all duration-200 hover:bg-accent hover:text-white"
          >
            Request Introduction
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
          <Link 
            href="/services" 
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 sm:py-3 text-xs font-medium uppercase tracking-widest border border-white/30 text-white transition-all duration-200 hover:border-white hover:bg-white/10"
          >
            View Services
          </Link>
        </ScrollAnimation>
      </div>
    </section>
  )
}
