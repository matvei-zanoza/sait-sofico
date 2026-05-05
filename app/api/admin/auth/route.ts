import { NextRequest, NextResponse } from "next/server"

// Default credentials - override with ADMIN_USERNAME and ADMIN_PASSWORD env vars
const DEFAULT_USERNAME = "admin"
const DEFAULT_PASSWORD = "sofico2024"

export async function POST(request: NextRequest) {
  try {
    const { username, password } = await request.json()
    
    // Use env vars if set, otherwise use defaults
    const adminUsername = process.env.ADMIN_USERNAME || DEFAULT_USERNAME
    const adminPassword = process.env.ADMIN_PASSWORD || DEFAULT_PASSWORD

    if (username === adminUsername && password === adminPassword) {
      return NextResponse.json({ success: true })
    }

    return NextResponse.json(
      { error: "Invalid credentials" },
      { status: 401 }
    )
  } catch {
    return NextResponse.json(
      { error: "Authentication failed" },
      { status: 500 }
    )
  }
}
