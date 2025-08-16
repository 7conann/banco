// next.config.mjs
export default {
  // Necessário para exportar site estático (gera a pasta /out)
  output: 'export',

  experimental: {
    optimizeCss: false,
    optimizePackageImports: ['lucide-react', '@radix-ui/react-icons'],
  },

  images: {
    // Obrigatório no export estático
    unoptimized: true,

    // Pode manter suas preferências:
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
trailingSlash: true,
  compress: true,

  // ⚠️ Headers/redirects/rewrites não funcionam com `output: 'export'`.
  // Aplique isso no servidor (ex.: .htaccess na Locaweb) se precisar.

  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      config.optimization.splitChunks = {
        chunks: 'all',
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
          },
        },
      };
    }
    return config;
  },

  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
};
