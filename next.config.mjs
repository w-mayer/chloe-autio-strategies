/** @type {import('next').NextConfig} */
const nextConfig = {
  // Image optimization configuration
  images: {
    // Enable WebP and AVIF formats for better compression
    formats: ['image/webp', 'image/avif'],
    
    // Configure image sizes for responsive images
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    
    // Set minimum cache TTL for images (in seconds)
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
    
    // Enable blur placeholder
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    
    // Configure remote patterns if needed for external images
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  
  // Handle client modules properly
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
      };
    }
    return config;
  },
};

export default nextConfig;
