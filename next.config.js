/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Linting is enforced on every build. Fix errors instead of disabling this.
    ignoreDuringBuilds: false,
  },
  images: {
    // Next.js image optimization is enabled (Vercel serves this natively).
    // Pexels is whitelisted because a small number of stock photos are
    // still referenced by remote URL rather than self-hosted.
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
      },
    ],
  },
};

module.exports = nextConfig;
