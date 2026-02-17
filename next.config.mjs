import { withPayload } from '@payloadcms/next/withPayload';

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    qualities: [75, 80, 90, 95],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'framerusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'ayushbhusal.com.np',
      },
    ],
  },

  experimental: {
    reactCompiler: false, // required for Payload
  },
};

// Wrap config with Payload plugin
export default withPayload(nextConfig);
