import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { vendors } from "@/content/vendors"
import { ScrollAnimation, StaggerContainer, StaggerItem } from "@/components/scroll-animation"

export function VendorsSection() {
  return (
    <section className="pt-20 pb-16 bg-card">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <ScrollAnimation animation="fade-up">
          <span className="inline-block text-xs font-medium uppercase tracking-[0.2em] text-accent">
            Network
          </span>
        </ScrollAnimation>
        <ScrollAnimation animation="fade-up" delay={100}>
          <h2 className="mt-4 sm:mt-6 font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-foreground">
            Vendor Network
          </h2>
        </ScrollAnimation>
        <ScrollAnimation animation="fade-up" delay={200}>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Reference vendors for coordination purposes.
          </p>
        </ScrollAnimation>
      </div>
      
      <div className="mx-auto max-w-5xl px-6 mt-10 sm:mt-16">
        <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
          {vendors.slice(0, 6).map((vendor, index) => (
            <StaggerItem 
              key={vendor.id}
              index={index}
              className="group border border-border bg-card aspect-[2.5/1] flex flex-col items-center justify-center transition-all duration-300 hover:border-accent/50"
            >
              <span className="text-sm sm:text-base font-medium text-foreground/90 group-hover:text-foreground transition-colors">
                {vendor.name}
              </span>
              <span className="text-[10px] uppercase tracking-wider text-muted-foreground mt-1">
                {vendor.category}
              </span>
            </StaggerItem>
          ))}
        </StaggerContainer>
        
        <ScrollAnimation animation="fade-in" delay={700}>
          <p className="mt-10 text-xs text-muted-foreground/60 text-center">
            Technology partners for coordination purposes only.
          </p>
        </ScrollAnimation>
        
        <ScrollAnimation animation="fade-up" delay={800} className="mt-8 text-center">
          <Link 
            href="/vendors" 
            className="inline-flex items-center justify-center gap-2 text-xs font-medium uppercase tracking-widest text-foreground/80 transition-colors duration-200 hover:text-accent"
          >
            View All Vendors
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </ScrollAnimation>
      </div>
    </section>
  )
}
