"use client"

import { useState } from "react"
import { Lock, Package, Settings, FileText } from "lucide-react"
// Admin Dashboard
import { Container } from "@/components/container"
import { catalogItems } from "@/content/catalog"

export default function AdminPage() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    try {
      const response = await fetch("/api/admin/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      })

      const data = await response.json()
      
      if (response.ok && data.success) {
        setIsAuthenticated(true)
      } else {
        setError(data.error || "Invalid credentials")
      }
    } catch {
      setError("Authentication failed")
    } finally {
      setIsLoading(false)
    }
  }

  if (!isAuthenticated) {
    return (
      <div className="bg-background pt-20 min-h-screen">
        <section className="py-20 lg:py-28">
          <Container>
            <div className="max-w-md mx-auto">
              <div className="border border-border p-8 sm:p-10 bg-card">
                <div className="flex items-center gap-3 mb-6">
                  <Lock className="h-5 w-5 text-accent" />
                  <h1 className="text-xl font-semibold text-foreground">Admin Access</h1>
                </div>
                <p className="text-sm text-muted-foreground mb-8">
                  Enter your credentials to access the dashboard.
                </p>

                <form onSubmit={handleLogin} className="space-y-6">
                  <div>
                    <label htmlFor="username" className="block text-xs font-medium uppercase tracking-wider text-foreground mb-2">
                      Username
                    </label>
                    <input
                      id="username"
                      type="text"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      className="w-full px-4 py-3 bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors"
                      placeholder="Enter username"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="password" className="block text-xs font-medium uppercase tracking-wider text-foreground mb-2">
                      Password
                    </label>
                    <input
                      id="password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full px-4 py-3 bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors"
                      placeholder="Enter password"
                      required
                    />
                  </div>

                  {error && (
                    <p className="text-sm text-red-500">{error}</p>
                  )}

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full px-6 py-3.5 text-xs font-medium uppercase tracking-widest bg-white text-black transition-all duration-200 hover:bg-accent hover:text-white disabled:opacity-50"
                  >
                    {isLoading ? "Authenticating..." : "Login"}
                  </button>
                </form>
              </div>
            </div>
          </Container>
        </section>
      </div>
    )
  }

  return (
    <div className="bg-background pt-20 min-h-screen">
      <section className="py-16 lg:py-24">
        <Container>
          <div className="max-w-5xl mx-auto text-center">
            <span className="inline-block text-xs font-medium uppercase tracking-[0.2em] text-accent">
              Dashboard
            </span>
            <h1 className="mt-4 text-3xl sm:text-4xl font-serif text-foreground">
              Admin Panel
            </h1>
            <p className="mt-4 text-muted-foreground">
              Manage catalog entries and site settings.
            </p>
          </div>
        </Container>
      </section>

      <section className="pb-20">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Stats Cards */}
            <div className="border border-border p-6 bg-card">
              <div className="flex items-center gap-3 mb-4">
                <Package className="h-5 w-5 text-accent" />
                <span className="text-sm font-medium text-foreground">Catalog Items</span>
              </div>
              <p className="text-3xl font-semibold text-foreground">{catalogItems.length}</p>
              <p className="mt-1 text-xs text-muted-foreground">Active products</p>
            </div>

            <div className="border border-border p-6 bg-card">
              <div className="flex items-center gap-3 mb-4">
                <FileText className="h-5 w-5 text-accent" />
                <span className="text-sm font-medium text-foreground">Categories</span>
              </div>
              <p className="text-3xl font-semibold text-foreground">
                {[...new Set(catalogItems.map(i => i.category))].length}
              </p>
              <p className="mt-1 text-xs text-muted-foreground">Product categories</p>
            </div>

            <div className="border border-border p-6 bg-card">
              <div className="flex items-center gap-3 mb-4">
                <Settings className="h-5 w-5 text-accent" />
                <span className="text-sm font-medium text-foreground">Status</span>
              </div>
              <p className="text-lg font-semibold text-green-500">Active</p>
              <p className="mt-1 text-xs text-muted-foreground">System operational</p>
            </div>
          </div>

          {/* Catalog Table */}
          <div className="mt-12 max-w-5xl mx-auto">
            <h2 className="text-lg font-semibold text-foreground mb-6">Catalog Overview</h2>
            <div className="border border-border overflow-hidden">
              <table className="w-full">
                <thead className="bg-card">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-medium uppercase tracking-wider text-muted-foreground">SKU</th>
                    <th className="px-6 py-4 text-left text-xs font-medium uppercase tracking-wider text-muted-foreground">Name</th>
                    <th className="px-6 py-4 text-left text-xs font-medium uppercase tracking-wider text-muted-foreground">Category</th>
                    <th className="px-6 py-4 text-left text-xs font-medium uppercase tracking-wider text-muted-foreground">MOQ</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {catalogItems.map((item) => (
                    <tr key={item.sku} className="hover:bg-card/50 transition-colors">
                      <td className="px-6 py-4 text-sm font-mono text-accent">{item.sku}</td>
                      <td className="px-6 py-4 text-sm text-foreground">{item.name}</td>
                      <td className="px-6 py-4 text-sm text-muted-foreground">{item.category}</td>
                      <td className="px-6 py-4 text-sm text-muted-foreground">{item.moq}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-8 border border-border p-6 bg-card">
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">Note:</strong> Full catalog editing functionality 
                will be available in a future update. Currently displaying read-only catalog data.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
}
