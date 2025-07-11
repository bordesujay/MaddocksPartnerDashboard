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
  webpack: (config, { isServer }) => {
    // Comprehensive workaround for WasmHash issue in Next.js 15.2.4
    config.experiments = {
      ...config.experiments,
      asyncWebAssembly: false,
    };
    
    // Use MD4 hash function instead of WASM hash to avoid the bug
    config.output.hashFunction = 'md4';
    config.output.hashDigest = 'hex';
    
    // Disable problematic optimizations
    config.optimization = {
      ...config.optimization,
      moduleIds: 'deterministic',
      chunkIds: 'deterministic',
    };
    
    return config;
  },
}

export default nextConfig
