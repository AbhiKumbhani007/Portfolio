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
};

module.exports = nextConfig;
