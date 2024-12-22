import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    dirs: ['src']
  },
  experimental: {
    serverActions: {
      bodySizeLimit: '1024mb' // Set desired value here
    }
  },
  images: {
    loader: 'default', // Por defecto (puedes cambiar a custom si quieres más control)
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**' // Esto significa wildcard ilimitadox
      }
    ]
  }
}

export default nextConfig
