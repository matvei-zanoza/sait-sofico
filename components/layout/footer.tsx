import Link from "next/link"

const footerLinks = {
  services: {
    title: "Services",
    links: [
      { name: "Product Development", href: "/services#electronic-product-development" },
      { name: "Electronic Design", href: "/services#electronic-design" },
      { name: "Tooling & Mould", href: "/services#tooling-mould-manufacturing" },
      { name: "Procurement", href: "/services#electronic-procurement" },
      { name: "Manufacturing", href: "/services#electronic-manufacturing" },
    ]
  },
  company: {
    title: "Company",
    links: [
      { name: "About Us", href: "/about" },
      { name: "How We Work", href: "/how-we-work" },
      { name: "Vendor Network", href: "/vendors" },
      { name: "Contact", href: "/contact" },
    ]
  },
  legal: {
    title: "Legal",
    links: [
      { name: "Compliance", href: "/compliance" },
      { name: "Privacy Policy", href: "/privacy-policy" },
      { name: "Terms of Use", href: "/terms-of-use" },
      { name: "Cookie Policy", href: "/cookie-policy" },
    ]
  }
}

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block">
              <span 
                className="text-3xl text-foreground"
                style={{ 
                  fontFamily: "'Brush Script MT', 'Segoe Script', 'Bradley Hand', cursive",
                  letterSpacing: "-0.02em"
                }}
              >
                SoFiCo
              </span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-sm">
              Operational coordination and structured support for enterprises engaged in international commerce.
            </p>
            <div className="mt-6 space-y-2">
              <p className="text-sm text-muted-foreground">
                <span className="text-foreground/70">Email:</span>{" "}
                <a href="mailto:info@sofico.hk" className="text-accent hover:text-accent/80 transition-colors">
                  info@sofico.hk
                </a>
              </p>
              <p className="text-sm text-muted-foreground">
                <span className="text-foreground/70">Location:</span>{" "}
                Hong Kong
              </p>
            </div>
          </div>
          
          {/* Services Column */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              {footerLinks.services.title}
            </h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.services.links.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Company Column */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              {footerLinks.company.title}
            </h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.company.links.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Legal Column */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              {footerLinks.legal.title}
            </h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.legal.links.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="mt-12 lg:mt-16 pt-8 border-t border-border/50">
          <div className="flex flex-col items-center text-center gap-2">
            <p className="text-xs text-muted-foreground/60">
              © {new Date().getFullYear()} SoFiCo Services Limited. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground/60 leading-relaxed">
              Registration No: 3127845 · Not a bank. Does not provide payment services or hold client funds.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
