import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for SoFiCo Services Limited.",
}

const sections = [
  {
    title: "1. Introduction",
    content: [
      'This Privacy Policy describes how SoFiCo Services Limited ("Company," "we," "us," or "our") collects, uses, and shares information in connection with our website and business communications.',
      "By accessing our website or contacting us, you acknowledge that you have read and understood this Privacy Policy.",
    ],
  },
  {
    title: "2. Information We Collect",
    content: [
      "We may collect information that you provide directly to us, including:",
      "Company name and basic corporate details",
      "Contact person name and role",
      "Corporate email address",
      "Business inquiry details and correspondence",
      "Any other information you choose to provide",
      "We may also receive technical information automatically when you access the website (for example, browser information or basic request logs) as part of standard web operations.",
    ],
  },
  {
    title: "3. Use of Information",
    content: [
      "We use information to:",
      "Respond to inquiries and communicate with you",
      "Operate and secure the website",
      "Maintain internal records and support business operations",
      "Comply with applicable legal obligations where required",
    ],
  },
  {
    title: "4. Information Sharing",
    content: [
      "We do not sell personal information.",
      "We may share information with service providers supporting our operations (for example, hosting or email infrastructure), and where required to comply with lawful requests.",
    ],
  },
  {
    title: "5. Data Retention",
    content: [
      "We retain information for as long as necessary for the purposes described above and to meet applicable record-keeping obligations.",
    ],
  },
  {
    title: "6. Data Security",
    content: [
      "We implement reasonable technical and organizational measures designed to protect information. No method of transmission or storage is completely secure.",
    ],
  },
  {
    title: "7. Contact Information",
    content: [
      "For questions regarding this Privacy Policy, please contact us at: contact@sofico.example (placeholder)",
    ],
  },
]

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-background pt-20">
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-semibold tracking-tight text-foreground lg:text-5xl text-balance">
              Privacy Policy
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
              href="/terms-of-use"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Terms of Use
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
