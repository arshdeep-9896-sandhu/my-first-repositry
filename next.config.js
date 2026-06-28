/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    dirs: ['app', 'components', 'lib'],
  },
  images: {
    domains: ['images.unsplash.com'],
    minimumCacheTTL: 60,
  },
  poweredByHeader: false,
  securityHeaders: [
    {
      key: 'X-Content-Type-Options',
      value: 'nosniff'
    },
    {
      key: 'X-Frame-Options',
      value: 'SAMEORIGIN'
    },
    {
      key: 'X-XSS-Protection',
      value: '1; mode=block'
    }
  ],
}

module.exports = nextConfig
