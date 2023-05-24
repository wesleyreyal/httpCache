/** @types {import("next").NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: "standalone",
  serverRuntimeConfig: {
    API_URL: "http://api",
  },
  publicRuntimeConfig: {
    API_URL: process.env.DOMAIN ?? "http://localhost",
  },
};

module.exports = nextConfig;
