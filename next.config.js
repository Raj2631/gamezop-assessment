/** @type {import('next').NextConfig} */
/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa")({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
});

module.exports = withPWA({
  // config
  reactStrictMode: false,
  typescript: {
    ignoreBuildErrors: true,
  },
});
