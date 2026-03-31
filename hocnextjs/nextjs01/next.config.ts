import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async rewrites() {
    return [
      {
        source: "/gioi-thieu", //url mới
        destination: "/about", //url cũ
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        hostname: "cdn.dummyjson.com",
      },
    ],
  },
  logging: {
    fetches: {
      fullUrl: true, // Logs the full URL of fetch requests
    },
  },
};

export default nextConfig;
