import path from 'path';
import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  webpack: (config) => {
    // Configurar alias para `@` apuntando a `src/`
    config.resolve.alias['@'] = path.resolve(__dirname, 'src');
    return config;
  },
};

export default nextConfig;
