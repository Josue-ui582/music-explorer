import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['cdn-images.dzcdn.net'], // 👈 ajoute ce domaine autorisé
  },
};

export default nextConfig;
