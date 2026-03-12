import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Lock } from "lucide-react"

import { Container } from "@/components/container"
import { catalogItems } from "@/content/catalog"
import { getCatalogAccessKey } from "@/lib/env"

type Props = {
  searchParams?: Promise<Record<string, string | string[] | undefined>>
}

function getKey(searchParams?: Record<string, string | string[] | undefined>): string | undefined {
  const raw = searchParams?.k
  return typeof raw === "string" ? raw : undefined
}

export default async function CatalogPage({ searchParams }: Props) {
  const resolvedSearchParams = await searchParams
  const requiredKey = getCatalogAccessKey()
  const key = getKey(resolvedSearchParams)
  const allowed = !!requiredKey && key === requiredKey

  return (
    <div className="bg-background pt-20">
      <section className="py-16 lg:py-24">
        <Container>
          <div className="max-w-3xl">
            <span className="inline-block text-xs font-medium uppercase tracking-[0.2em] text-accent">
              B2B Catalog
            </span>
            <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-serif text-foreground">
              Product Reference
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Restricted access catalog for B2B coordination purposes.
            </p>
          </div>
        </Container>
      </section>

      <section className="pb-20">
        <Container>
          {!allowed ? (
            <div className="border border-border p-8 sm:p-12 bg-card max-w-2xl">
              <div className="flex items-center gap-3 mb-4">
                <Lock className="h-5 w-5 text-accent" />
                <h2 className="text-xl font-semibold text-foreground">Restricted Access</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                This catalog section is not publicly browsable. Access requires a valid 
                authorization key. Individual product reference cards can be accessed 
                via direct links provided by our team.
              </p>
              <div className="mt-8 pt-6 border-t border-border">
                <p className="text-sm text-muted-foreground mb-4">
                  Need access? Contact our team for authorization.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-medium uppercase tracking-widest bg-white text-black transition-all duration-200 hover:bg-accent hover:text-white"
                >
                  Request Access
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          ) : (
            <div className="space-y-8">
              {/* Table Header */}
              <div className="hidden md:grid grid-cols-12 gap-4 px-4 py-3 border-b border-border text-xs font-medium uppercase tracking-wider text-muted-foreground">
                <div className="col-span-2">Photo</div>
                <div className="col-span-3">SKU / Part Number</div>
                <div className="col-span-5">Description</div>
                <div className="col-span-2">Price</div>
              </div>

              {/* Product Rows */}
              <div className="space-y-4">
                {catalogItems.map((item) => (
                  <Link
                    key={item.sku}
                    href={`/catalog/${encodeURIComponent(item.sku)}`}
                    className="group grid grid-cols-1 md:grid-cols-12 gap-4 p-4 border border-border bg-card transition-all duration-300 hover:border-accent/50 hover:bg-card/80"
                  >
                    {/* Photo */}
                    <div className="col-span-1 md:col-span-2">
                      <div className="relative aspect-square md:aspect-[4/3] bg-muted overflow-hidden">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                    </div>

                    {/* SKU / Part Number */}
                    <div className="col-span-1 md:col-span-3 flex flex-col justify-center">
                      <span className="text-[10px] uppercase tracking-wider text-accent md:hidden">
                        SKU / Part Number
                      </span>
                      <h3 className="text-base font-medium text-foreground group-hover:text-accent transition-colors">
                        {item.name}
                      </h3>
                      <p className="mt-1 text-sm text-muted-foreground font-mono">
                        {item.sku}
                      </p>
                      <span className="mt-2 inline-block text-[10px] uppercase tracking-wider text-accent/70">
                        {item.category}
                      </span>
                    </div>

                    {/* Description */}
                    <div className="col-span-1 md:col-span-5 flex flex-col justify-center">
                      <span className="text-[10px] uppercase tracking-wider text-accent md:hidden mb-1">
                        Description
                      </span>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    {/* Price */}
                    <div className="col-span-1 md:col-span-2 flex flex-col justify-center">
                      <span className="text-[10px] uppercase tracking-wider text-accent md:hidden mb-1">
                        Price
                      </span>
                      <p className="text-base font-medium text-foreground">
                        {item.price}
                      </p>
                      <div className="mt-2 flex items-center gap-1 text-xs font-medium text-accent">
                        View Details
                        <ArrowRight className="h-3 w-3" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
              
              <div className="border border-border p-6 bg-card text-center max-w-2xl mx-auto">
                <p className="text-sm text-muted-foreground">
                  This catalog is for B2B coordination reference only. 
                  Contact us for detailed specifications and availability.
                </p>
              </div>
            </div>
          )}
        </Container>
      </section>
    </div>
  )
}
