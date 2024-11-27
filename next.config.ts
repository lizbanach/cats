import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn2.thecatapi.com',
      },
    ],
  },
  env: {
    apiKey:
      'live_1umyvrf5l68R2RHMKEJKKiorPQltbm0RMdvi4A2DN3KWVNH1tNcNWnboxdkCZV2d',
  },
};

export default nextConfig;
