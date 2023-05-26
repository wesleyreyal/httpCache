/** @types {import("next").NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: "standalone",
  serverRuntimeConfig: {
    API_URL: "http://localhost",
  },
  publicRuntimeConfig: {
    API_URL: process.env.DOMAIN,
  },
};

module.exports = nextConfig;
