/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.instagram.com',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;
