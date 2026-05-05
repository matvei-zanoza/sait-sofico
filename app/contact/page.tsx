"use client"

import { ContactForm } from "@/components/contact-form"
import { Mail, Clock, FileText } from "lucide-react"
import { ScrollAnimation, StaggerContainer, StaggerItem } from "@/components/scroll-animation"

const infoCards = [
  {
    icon: Mail,
    title: "Communication Policy",
    description: "Communication is conducted via corporate email only. We do not accept inquiries via personal email addresses or social media.",
  },
  {
    icon: Clock,
    title: "Response Time",
    description: "We review inquiries as part of standard business operations. Response times vary depending on inquiry nature and completeness.",
  },
  {
    icon: FileText,
    title: "Inquiry Scope",
    description: "We accept inquiries related to operational coordination, supplier alignment, and trade documentation support services.",
  },
]

export default function ContactPage() {
  return (
    <div className="bg-background pt-20">
      {/* Hero Section */}
      <section className="py-20 lg:py-28">
        <ScrollAnimation animation="fade-up">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <span className="inline-block text-xs font-medium uppercase tracking-[0.2em] text-accent">
              Get in Touch
            </span>
            <h1 className="mt-8 font-serif text-5xl sm:text-6xl lg:text-7xl font-normal text-foreground leading-[1.1]">
              Contact
            </h1>
            <div className="mt-8 h-px w-16 bg-accent mx-auto" />
            <p className="mt-8 text-lg text-muted-foreground max-w-2xl mx-auto">
              Request a business introduction or submit an inquiry.
            </p>
          </div>
        </ScrollAnimation>
      </section>

      {/* Info Cards */}
      <section className="py-12 border-t border-border">
        <div className="mx-auto max-w-6xl px-6">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {infoCards.map((card, index) => (
              <StaggerItem key={card.title} index={index}>
                <div className="h-full p-6 md:p-8 bg-card border border-border">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                      <card.icon className="h-4 w-4 text-accent" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-base font-serif text-foreground">
                        {card.title}
                      </h3>
                      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                        {card.description}
                      </p>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <ScrollAnimation animation="fade-up">
            <div className="p-8 md:p-12 bg-card border border-border">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-serif text-foreground">
                  Business Inquiry
                </h2>
                <p className="mt-3 text-sm text-muted-foreground">
                  Complete the form below to submit an inquiry.
                </p>
              </div>
              <ContactForm />
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Disclaimer */}
      <ScrollAnimation animation="fade-in">
        <section className="py-16 bg-card border-y border-border">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <p className="text-sm text-muted-foreground/70 leading-relaxed">
              Submission of an inquiry does not create a client relationship or contractual 
              obligation. All information provided will be handled in accordance with our 
              privacy policy. We reserve the right to decline inquiries at our discretion.
            </p>
          </div>
        </section>
      </ScrollAnimation>
    </div>
  )
}
