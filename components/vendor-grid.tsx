import { vendorPlaceholders } from "@/content/vendors"

type Props = {
  dense?: boolean
}

export function VendorGrid({ dense }: Props) {
  return (
    <div
      className={
        dense
          ? "grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6"
          : "grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4"
      }
    >
      {vendorPlaceholders.map((vendor) => (
        <div
          key={vendor.id}
          className={`group border border-border/50 bg-foreground/5 flex items-center justify-center transition-all duration-300 hover:border-accent/50 hover:bg-foreground/10 ${
            dense ? "h-20" : "h-24"
          }`}
        >
          <div
            className="h-6 w-20 rounded bg-foreground/20 group-hover:bg-foreground/30 transition-colors"
            aria-label={vendor.name}
          />
        </div>
      ))}
    </div>
  )
}
