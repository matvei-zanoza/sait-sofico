"use client"

import { useState, useRef, useEffect } from "react"

declare global {
  interface Window {
    hcaptcha?: {
      render: (container: string | HTMLElement, options: Record<string, unknown>) => string
      getResponse: (widgetId: string) => string
      reset: (widgetId: string) => void
    }
    onHCaptchaLoad?: () => void
  }
}

const HCAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")
  const [captchaToken, setCaptchaToken] = useState("")
  const captchaRef = useRef<HTMLDivElement>(null)
  const widgetIdRef = useRef<string | null>(null)

  useEffect(() => {
    if (!HCAPTCHA_SITE_KEY || !captchaRef.current) return

    const renderCaptcha = () => {
      if (window.hcaptcha && captchaRef.current && widgetIdRef.current === null) {
        widgetIdRef.current = window.hcaptcha.render(captchaRef.current, {
          sitekey: HCAPTCHA_SITE_KEY,
          callback: (token: string) => setCaptchaToken(token),
          "expired-callback": () => setCaptchaToken(""),
          theme: "dark",
        })
      }
    }

    if (window.hcaptcha) {
      renderCaptcha()
    } else {
      window.onHCaptchaLoad = renderCaptcha
      const script = document.createElement("script")
      script.src = "https://js.hcaptcha.com/1/api.js?onload=onHCaptchaLoad&render=explicit"
      script.async = true
      document.head.appendChild(script)
    }
  }, [])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    const formData = new FormData(e.currentTarget)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          companyName: formData.get("companyName"),
          contactPerson: formData.get("contactPerson"),
          email: formData.get("email"),
          message: formData.get("message"),
          captchaToken,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        setError(data.error || "Submission failed. Please try again.")
        setIsSubmitting(false)
        return
      }

      setIsSubmitting(false)
      setIsSubmitted(true)
    } catch {
      setError("An error occurred. Please try again.")
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="mt-8 p-8 bg-muted border border-border text-center">
        <h3 className="text-xl font-serif text-foreground">
          Inquiry Submitted
        </h3>
        <p className="mt-4 text-sm text-muted-foreground">
          Thank you for your inquiry. We will review your submission and respond 
          via corporate email.
        </p>
        <button
          className="mt-6 inline-flex items-center justify-center px-8 py-3.5 text-xs font-medium uppercase tracking-widest border border-white/30 text-white transition-all duration-200 hover:border-white hover:bg-white/10"
          onClick={() => {
            setIsSubmitted(false)
            setCaptchaToken("")
            widgetIdRef.current = null
          }}
        >
          Submit Another Inquiry
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 space-y-6">
      <div className="space-y-2">
        <label htmlFor="companyName" className="text-sm font-medium text-foreground">
          Company Name
        </label>
        <input
          id="companyName"
          name="companyName"
          type="text"
          required
          placeholder="Enter company name"
          className="w-full h-12 px-4 bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="contactPerson" className="text-sm font-medium text-foreground">
          Contact Person
        </label>
        <input
          id="contactPerson"
          name="contactPerson"
          type="text"
          required
          placeholder="Enter contact person name"
          className="w-full h-12 px-4 bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="email" className="text-sm font-medium text-foreground">
          Corporate Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="Enter corporate email address"
          className="w-full h-12 px-4 bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors"
        />
        <p className="text-xs text-muted-foreground">
          Personal email addresses (gmail, yahoo, etc.) are not accepted.
        </p>
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium text-foreground">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Describe your inquiry or operational coordination requirements"
          className="w-full px-4 py-4 bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors resize-none"
        />
      </div>

      {HCAPTCHA_SITE_KEY && (
        <div className="flex justify-center">
          <div ref={captchaRef} />
        </div>
      )}

      {error && (
        <p className="text-sm text-red-500 text-center">{error}</p>
      )}

      <div className="pt-4">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full inline-flex items-center justify-center px-8 py-3.5 text-xs font-medium uppercase tracking-widest bg-white text-black transition-all duration-200 hover:bg-accent hover:text-white disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Submitting..." : "Submit Inquiry"}
        </button>
      </div>
    </form>
  )
}
