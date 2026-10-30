/** @type {import('next').NextConfig} */
const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), geolocation=(), microphone=()" },
]

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/duphxfug7/image/upload/**",
      },
    ],
    formats: ["image/avif", "image/webp"],
  },
  async headers() {
    const headers = [...securityHeaders]
    if (process.env.NODE_ENV === "production") {
      headers.push({ key: "Strict-Transport-Security", value: "max-age=63072000" })
    }

    return [{ source: "/:path*", headers }]
  },
}

export default nextConfig
