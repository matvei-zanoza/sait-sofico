import { HeroSection } from "@/components/sections/hero-section"
import { AboutSection } from "@/components/sections/about-section"
import { ProcessSection } from "@/components/sections/process-section"
import { ComplianceSection } from "@/components/sections/compliance-section"
import { ServicesListSection } from "@/components/sections/services-list-section"
import { VendorsSection } from "@/components/sections/vendors-section"
import { CTASection } from "@/components/sections/cta-section"
import { SectionDivider } from "@/components/section-divider"

export default function HomePage() {
  return (
    <div className="bg-background">
      <HeroSection />
      <SectionDivider />
      <AboutSection />
      <SectionDivider />
      <ProcessSection />
      <SectionDivider />
      <ComplianceSection />
      <SectionDivider />
      <ServicesListSection />
      <SectionDivider />
      <VendorsSection />
      <SectionDivider />
      <CTASection />
    </div>
  )
}
