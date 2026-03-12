"use client"

import { useEffect, useRef, createContext, useContext } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

const GSAPContext = createContext<boolean>(false)

export function GSAPProvider({ children }: { children: React.ReactNode }) {
  const initialized = useRef(false)

  useEffect(() => {
    if (initialized.current) return
    initialized.current = true

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    
    if (prefersReducedMotion) {
      gsap.set('.gsap-fade-up, .gsap-fade-in, .gsap-scale-in, .gsap-slide-left, .gsap-slide-right, .gsap-line-grow', {
        opacity: 1,
        transform: 'none'
      })
      return
    }

    // Fade up animations - plays on scroll down, reverses on scroll up
    gsap.utils.toArray('.gsap-fade-up').forEach((el) => {
      gsap.fromTo(el as Element, 
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el as Element,
            start: 'top 85%',
            end: 'top 20%',
            toggleActions: 'play none none none'
          }
        }
      )
    })

    // Fade in animations
    gsap.utils.toArray('.gsap-fade-in').forEach((el) => {
      gsap.fromTo(el as Element,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el as Element,
            start: 'top 85%',
            end: 'top 20%',
            toggleActions: 'play none none none'
          }
        }
      )
    })

    // Scale in animations
    gsap.utils.toArray('.gsap-scale-in').forEach((el) => {
      gsap.fromTo(el as Element,
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el as Element,
            start: 'top 85%',
            end: 'top 20%',
            toggleActions: 'play none none none'
          }
        }
      )
    })

    // Slide from left
    gsap.utils.toArray('.gsap-slide-left').forEach((el) => {
      gsap.fromTo(el as Element,
        { opacity: 0, x: -60 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el as Element,
            start: 'top 85%',
            end: 'top 20%',
            toggleActions: 'play none none none'
          }
        }
      )
    })

    // Slide from right
    gsap.utils.toArray('.gsap-slide-right').forEach((el) => {
      gsap.fromTo(el as Element,
        { opacity: 0, x: 60 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el as Element,
            start: 'top 85%',
            end: 'top 20%',
            toggleActions: 'play none none none'
          }
        }
      )
    })

    // Line grow animations
    gsap.utils.toArray('.gsap-line-grow').forEach((el) => {
      gsap.fromTo(el as Element,
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 0.8,
          ease: 'power2.inOut',
          scrollTrigger: {
            trigger: el as Element,
            start: 'top 90%',
            end: 'top 20%',
            toggleActions: 'play none none none'
          }
        }
      )
    })

    // Stagger groups animation
    gsap.utils.toArray('.gsap-stagger').forEach((container) => {
      const items = (container as Element).querySelectorAll('.gsap-stagger-item')
      
      gsap.fromTo(items,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: container as Element,
            start: 'top 85%',
            toggleActions: 'play none none none'
          }
        }
      )
    })

    // Counter/Number animations
    gsap.utils.toArray('.gsap-counter').forEach((el) => {
      gsap.fromTo(el as Element,
        { opacity: 0, y: 30, scale: 0.8 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          ease: 'back.out(1.5)',
          scrollTrigger: {
            trigger: el as Element,
            start: 'top 85%',
            end: 'top 20%',
            toggleActions: 'play none none none'
          }
        }
      )
    })

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill())
    }
  }, [])

  return (
    <GSAPContext.Provider value={true}>
      {children}
    </GSAPContext.Provider>
  )
}

export function useGSAPContext() {
  return useContext(GSAPContext)
}
