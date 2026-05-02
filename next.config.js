/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "iili.io",
      },
    ],
  },
  env: {
    ALLOWED_ORIGINS: process.env.ALLOWED_ORIGINS || "",
  },
  experimental: {
    serverActions: {
      allowedOrigins: (process.env.ALLOWED_ORIGINS || "").split(",").filter(Boolean),
    },
  },
};

module.exports = nextConfig;
