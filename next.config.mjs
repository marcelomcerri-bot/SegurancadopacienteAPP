/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Re-adicionando a configuração de origem para garantir que o proxy do Replit funcione
  experimental: {
    serverActions: {
      allowedOrigins: ['*'],
    },
  },
}

export default nextConfig
