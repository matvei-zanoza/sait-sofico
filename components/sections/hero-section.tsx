"use client"

import Link from "next/link"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ArrowRight } from "lucide-react"
import LightPillar from "@/components/background"

export function HeroSection() {
  const heroRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

      tl.from('.hero-eyebrow', {
        opacity: 0,
        y: 20,
        duration: 0.6,
        delay: 0.2
      })
        .from('.hero-title', {
          opacity: 0,
          y: 40,
          duration: 0.8,
        }, '-=0.3')
        .from('.hero-description', {
          opacity: 0,
          y: 30,
          duration: 0.6,
        }, '-=0.4')
        .from('.hero-cta', {
          opacity: 0,
          y: 20,
          duration: 0.6,
        }, '-=0.3')
        .from('.hero-scroll', {
          opacity: 0,
          duration: 0.6,
        }, '-=0.2')
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={heroRef} className="relative h-screen flex flex-col bg-black overflow-hidden">
      {/* LightPillar Background */}
      <div className="absolute inset-0 w-full h-full z-0">
        <LightPillar
          topColor="#3B82F6"
          bottomColor="#000000"
          intensity={1}
          rotationSpeed={0.8}
          glowAmount={0.003}
          pillarWidth={5}
          pillarHeight={0.4}
          noiseIntensity={0.4}
          pillarRotation={25}
          interactive={true}
          mixBlendMode="screen"
          quality="high"
        />
      </div>

      {/* Main content - centered with padding for header and scroll indicator */}
      <div className="relative z-10 flex-1 flex items-center justify-center pt-20 pb-28">
        <div className="mx-auto max-w-4xl px-6 text-center">
          {/* Eyebrow */}
          <div className="hero-eyebrow">
            <span className="inline-block text-xs font-medium uppercase tracking-[0.2em] text-white/80 border border-white/20 px-4 py-2 backdrop-blur-sm">
              B2B Trade Services
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="hero-title mt-6 font-serif text-4xl sm:text-5xl lg:text-7xl font-normal text-white leading-[1.1]">
            Precision in Global Trade
          </h1>

          {/* Description */}
          <p className="hero-description mt-6 text-base sm:text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
            Operational coordination and structured support for enterprises engaged in international commerce.
            We bridge the gap between complex trade requirements and seamless execution.
          </p>

          {/* CTA Buttons */}
          <div className="hero-cta mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full px-4 sm:px-0">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 sm:py-3 text-xs font-medium uppercase tracking-widest bg-white text-black transition-all duration-200 hover:bg-accent hover:text-white"
            >
              Get Started
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
            <Link
              href="/about"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 sm:py-3 text-xs font-medium uppercase tracking-widest border border-white/30 text-white transition-all duration-200 hover:border-white hover:bg-white/10"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - anchored at bottom of viewport */}
      <div className="hero-scroll absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
        <span className="text-[10px] uppercase tracking-[0.3em] text-white/40 font-medium">
          Scroll
        </span>
        <div className="w-px h-8 bg-gradient-to-b from-white/30 to-transparent animate-pulse" />
      </div>
    </section>
  )
}
