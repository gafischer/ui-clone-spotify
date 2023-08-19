/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'dailymix-images.scdn.co',
        port: '',
        pathname: '**',
      },
    ],
  },
}

module.exports = nextConfig
