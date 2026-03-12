import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms of Use for SoFiCo Services Limited.",
}

const sections = [
  {
    title: "1. Acceptance of Terms",
    content: [
      'By accessing or using the website of SoFiCo Services Limited ("Company," "we," "us," or "our"), you agree to these Terms of Use.',
      "If you do not agree, you should not use this website.",
    ],
  },
  {
    title: "2. Description of Services",
    content: [
      "SoFiCo Services Limited provides operational coordination and documentation support services for B2B trade activities.",
      "Our services do not include banking, payment processing, custody of funds, or regulated financial services.",
    ],
  },
  {
    title: "3. Use of Website",
    content: [
      "You agree to use the website only for lawful purposes.",
      "You agree not to attempt unauthorized access, disrupt operation, or introduce malicious code.",
    ],
  },
  {
    title: "4. Intellectual Property",
    content: [
      "Website content is owned by SoFiCo Services Limited or its licensors and is protected by applicable intellectual property laws.",
    ],
  },
  {
    title: "5. Disclaimers",
    content: [
      "This website is provided on an \"as is\" and \"as available\" basis.",
      "We make no warranties that the website will be uninterrupted or error-free.",
    ],
  },
  {
    title: "6. Limitation of Liability",
    content: [
      "To the maximum extent permitted by applicable law, SoFiCo Services Limited is not liable for indirect or consequential damages arising from use of this website.",
    ],
  },
  {
    title: "7. Governing Law",
    content: [
      "These Terms of Use are governed by the laws of [Jurisdiction placeholder].",
    ],
  },
  {
    title: "8. Contact Information",
    content: [
      "For questions regarding these Terms of Use, please contact us at: contact@sofico.example (placeholder)",
    ],
  },
]

export default function TermsOfUsePage() {
  return (
    <div className="bg-background pt-20">
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-semibold tracking-tight text-foreground lg:text-5xl text-balance">
              Terms of Use
            </h1>
            <p className="mt-6 text-sm text-muted-foreground">Last updated: [Date placeholder]</p>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl space-y-10">
            {sections.map((section) => (
              <div key={section.title}>
                <h2 className="text-xl font-semibold text-foreground">{section.title}</h2>
                <div className="mt-4 space-y-3">
                  {section.content.map((paragraph, index) => (
                    <p key={index} className="text-muted-foreground leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-muted/30 border-t border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-wrap gap-6">
            <Link
              href="/privacy-policy"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/cookie-policy"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Cookie Policy
            </Link>
            <Link
              href="/compliance"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Compliance
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
