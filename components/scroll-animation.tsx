"use client"

import { useEffect, useRef, useState, type ReactNode } from "react"

interface ScrollAnimationProps {
  children: ReactNode
  className?: string
  animation?: "fade-up" | "fade-in" | "fade-left" | "fade-right" | "scale-in"
  delay?: number
  duration?: number
  threshold?: number
}

export function ScrollAnimation({
  children,
  className = "",
  animation = "fade-up",
  delay = 0,
  duration = 600,
  threshold = 0.1
}: ScrollAnimationProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [threshold])

  const getAnimationStyles = () => {
    const baseStyles = {
      transition: `opacity ${duration}ms ease-out, transform ${duration}ms ease-out`,
      transitionDelay: `${delay}ms`,
    }

    if (!isVisible) {
      switch (animation) {
        case "fade-up":
          return { ...baseStyles, opacity: 0, transform: "translateY(40px)" }
        case "fade-in":
          return { ...baseStyles, opacity: 0 }
        case "fade-left":
          return { ...baseStyles, opacity: 0, transform: "translateX(40px)" }
        case "fade-right":
          return { ...baseStyles, opacity: 0, transform: "translateX(-40px)" }
        case "scale-in":
          return { ...baseStyles, opacity: 0, transform: "scale(0.95)" }
        default:
          return { ...baseStyles, opacity: 0 }
      }
    }

    return { ...baseStyles, opacity: 1, transform: "translateY(0) translateX(0) scale(1)" }
  }

  return (
    <div ref={ref} className={className} style={getAnimationStyles()}>
      {children}
    </div>
  )
}

interface StaggerContainerProps {
  children: ReactNode
  className?: string
  staggerDelay?: number
  threshold?: number
}

export function StaggerContainer({
  children,
  className = "",
  staggerDelay = 100,
  threshold = 0.1
}: StaggerContainerProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [threshold])

  return (
    <div ref={ref} className={className} data-visible={isVisible} data-stagger-delay={staggerDelay}>
      {children}
    </div>
  )
}

interface StaggerItemProps {
  children: ReactNode
  className?: string
  index: number
  baseDelay?: number
}

export function StaggerItem({
  children,
  className = "",
  index,
  baseDelay = 100
}: StaggerItemProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const parent = ref.current?.closest("[data-visible]")
    if (parent?.getAttribute("data-visible") === "true") {
      const timer = setTimeout(() => setIsVisible(true), index * baseDelay)
      return () => clearTimeout(timer)
    }
    
    const observer = new MutationObserver(() => {
      if (parent?.getAttribute("data-visible") === "true") {
        const timer = setTimeout(() => setIsVisible(true), index * baseDelay)
        return () => clearTimeout(timer)
      }
    })

    if (parent) {
      observer.observe(parent, { attributes: true })
    }

    return () => observer.disconnect()
  }, [index, baseDelay])

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(30px)",
        transition: "opacity 500ms ease-out, transform 500ms ease-out"
      }}
    >
      {children}
    </div>
  )
}
