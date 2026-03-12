export type DeployEnv = "preview" | "production"

export function getDeployEnv(): DeployEnv {
  const raw = process.env.NEXT_PUBLIC_SITE_ENV || process.env.NEXT_PUBLIC_DEPLOY_ENV
  return raw === "production" ? "production" : "preview"
}

export function getSiteUrl(): URL {
  const raw = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"

  try {
    return new URL(raw)
  } catch {
    return new URL("http://localhost:3000")
  }
}

export function getAdminUsername(): string | undefined {
  return process.env.ADMIN_USERNAME
}

export function getAdminPassword(): string | undefined {
  return process.env.ADMIN_PASSWORD
}

export function getCatalogAccessKey(): string | undefined {
  return process.env.CATALOG_ACCESS_KEY
}
