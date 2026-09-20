const isProd = process.env.NODE_ENV === 'production';
const basePath = isProd ? '/portfolioweb' : '';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath,
  assetPrefix: basePath,
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
  images: { unoptimized: true },
  compiler: {
    styledComponents: true,
  },
  turbopack: {
    root: __dirname,
  },
};

module.exports = nextConfig;
