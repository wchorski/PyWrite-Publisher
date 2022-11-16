/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  images: {
    remotePatterns:[
      {
        protocol: 'https',
        hostname: 'images.dog.ceo',
        port: '80',
        pathname: '/**',
      },
    ]
  },
  output: 'standalone',
}


module.exports = nextConfig
