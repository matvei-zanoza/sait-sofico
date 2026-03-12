import { NextResponse } from "next/server"

const RESEND_API_KEY = process.env.RESEND_API_KEY
const HCAPTCHA_SECRET_KEY = process.env.HCAPTCHA_SECRET_KEY
const CONTACT_TO_EMAIL = process.env.CONTACT_TO_EMAIL || "info@sofico.hk"

// Blocked personal email domains
const BLOCKED_DOMAINS = [
  "gmail.com", "yahoo.com", "hotmail.com", "outlook.com",
  "aol.com", "icloud.com", "mail.com", "protonmail.com",
  "zoho.com", "yandex.com", "gmx.com", "live.com",
]

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { companyName, contactPerson, email, message, captchaToken } = body

    // Validate required fields
    if (!companyName || !contactPerson || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      )
    }

    // Validate corporate email
    const emailDomain = email.split("@")[1]?.toLowerCase()
    if (!emailDomain || BLOCKED_DOMAINS.includes(emailDomain)) {
      return NextResponse.json(
        { error: "Please use a corporate email address." },
        { status: 400 }
      )
    }

    // Verify hCaptcha if configured
    if (HCAPTCHA_SECRET_KEY) {
      if (!captchaToken) {
        return NextResponse.json(
          { error: "Please complete the captcha verification." },
          { status: 400 }
        )
      }

      const captchaResponse = await fetch("https://api.hcaptcha.com/siteverify", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `response=${captchaToken}&secret=${HCAPTCHA_SECRET_KEY}`,
      })
      const captchaData = await captchaResponse.json()

      if (!captchaData.success) {
        return NextResponse.json(
          { error: "Captcha verification failed." },
          { status: 400 }
        )
      }
    }

    // Send email via Resend if configured
    if (RESEND_API_KEY) {
      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${RESEND_API_KEY}`,
        },
        body: JSON.stringify({
          from: "SoFiCo Website <noreply@sofico.hk>",
          to: [CONTACT_TO_EMAIL],
          subject: `New Inquiry from ${companyName}`,
          html: `
            <h2>New Business Inquiry</h2>
            <p><strong>Company:</strong> ${companyName}</p>
            <p><strong>Contact Person:</strong> ${contactPerson}</p>
            <p><strong>Email:</strong> ${email}</p>
            <hr />
            <p><strong>Message:</strong></p>
            <p>${message.replace(/\n/g, "<br />")}</p>
          `,
        }),
      })
    }

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json(
      { error: "An error occurred. Please try again." },
      { status: 500 }
    )
  }
}
