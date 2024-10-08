/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export', // This enables static export
  images: { unoptimized: true }, // This helps to avoid Next.js image optimization issues when exporting
};

export default nextConfig;