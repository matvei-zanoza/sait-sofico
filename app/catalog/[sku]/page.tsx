import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

import { Container } from "@/components/container"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table"
import { getCatalogItemBySku, catalogItems } from "@/content/catalog"

export const metadata: Metadata = {
  title: "Product Reference",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
}

type Props = {
  params: Promise<{ sku: string }>
}

// Generate static params for all catalog items
export async function generateStaticParams() {
  return catalogItems.map((item) => ({
    sku: item.sku,
  }))
}

export default async function CatalogItemPage({ params }: Props) {
  const resolvedParams = await params
  const item = getCatalogItemBySku(resolvedParams.sku)

  if (!item) {
    return (
      <div className="bg-background pt-20">
        <section className="py-20 lg:py-28">
          <Container>
            <div className="max-w-3xl border border-border p-8 bg-card">
              <h1 className="text-2xl font-semibold text-foreground">Not Found</h1>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                No product reference found for this identifier.
              </p>
              <Link 
                href="/"
                className="mt-6 inline-flex items-center gap-2 text-sm text-accent hover:text-accent/80 transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
                Return to Home
              </Link>
            </div>
          </Container>
        </section>
      </div>
    )
  }

  return (
    <div className="bg-background pt-20">
      <section className="py-16 lg:py-24">
        <Container>
          <div className="max-w-4xl">
            <Link 
              href="/"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
            
            <span className="block text-xs font-medium uppercase tracking-[0.2em] text-accent">
              {item.category}
            </span>
            <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-serif text-foreground">
              {item.name}
            </h1>
            <p className="mt-2 text-sm text-muted-foreground">
              SKU: {item.sku}
            </p>
          </div>
        </Container>
      </section>

      <section className="pb-20">
        <Container>
          <Card className="border border-border overflow-hidden max-w-4xl">
            <div className="relative aspect-[16/9] bg-muted">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover"
                priority
              />
            </div>
            <CardHeader>
              <CardTitle className="text-lg font-serif">{item.name}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              <p className="text-muted-foreground leading-relaxed">{item.description}</p>

              <div>
                <h2 className="text-sm font-semibold text-foreground uppercase tracking-wider">Specifications</h2>
                <div className="mt-4 border border-border overflow-hidden">
                  <Table>
                    <TableBody>
                      {Object.entries(item.specifications).map(([k, v]) => (
                        <TableRow key={k}>
                          <TableCell className="font-medium w-1/3 bg-card">{k}</TableCell>
                          <TableCell className="text-muted-foreground">{v}</TableCell>
                        </TableRow>
                      ))}
                      <TableRow>
                        <TableCell className="font-medium bg-card">MOQ</TableCell>
                        <TableCell className="text-muted-foreground">{item.moq}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium bg-card">Price</TableCell>
                        <TableCell className="text-muted-foreground">{item.price}</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </div>

              <div className="border border-border p-6 bg-card">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">Compliance note:</strong> This reference card is provided for 
                  operational coordination purposes only. It is not an offer to sell and does not include 
                  payment or custody services. Contact us for detailed specifications and availability.
                </p>
              </div>

              <div className="pt-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 text-xs font-medium uppercase tracking-widest bg-white text-black transition-all duration-200 hover:bg-accent hover:text-white"
                >
                  Request Quote
                </Link>
              </div>
            </CardContent>
          </Card>
        </Container>
      </section>
    </div>
  )
}
