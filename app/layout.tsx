import { Analytics } from "@vercel/analytics/next"
import type { Metadata, Viewport } from "next"
import "./globals.css"

const siteTitle = "Uttam Seervi — Site Reliability Engineer at Cohesity"
const siteDescription =
  "Portfolio of Uttam Seervi, Site Reliability Engineer at Cohesity. Explore software projects, experience, and a practical engineering toolkit."

export const metadata: Metadata = {
  title: siteTitle,
  description: siteDescription,
  applicationName: "Uttam Seervi Portfolio",
  authors: [{ name: "Uttam Seervi" }],
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: siteTitle,
    description: siteDescription,
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "light",
  themeColor: "#F5F7FA",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}
