import Link from "next/link"
import { Container } from "@/components/container"

const serviceItems = [
  { name: "Electronic Product Development", href: "/services#electronic-product-development" },
  { name: "Electronic Design", href: "/services#electronic-design" },
  { name: "Tooling and Mould Manufacturing", href: "/services#tooling-mould-manufacturing" },
  { name: "Electronic Procurement", href: "/services#electronic-procurement" },
  { name: "Electronic Manufacturing", href: "/services#electronic-manufacturing" },
]

export function ServicesListSection() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column - Title */}
          <div className="lg:col-span-4">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
              Services
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-serif text-foreground">
              What We Offer
            </h2>
          </div>
          
          {/* Right Column - List */}
          <div className="lg:col-span-8">
            <ul className="border-t border-border">
              {serviceItems.map((item) => (
                <li key={item.name} className="border-b border-border">
                  <Link 
                    href={item.href}
                    className="block py-5 text-lg text-foreground hover:text-accent transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  )
}
