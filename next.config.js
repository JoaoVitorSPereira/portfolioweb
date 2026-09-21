const isProd = process.env.NODE_ENV === 'production';
// GitHub Pages serves under /portfolioweb; Vercel (VERCEL=1) serves from the root.
const basePath = isProd && !process.env.VERCEL ? '/portfolioweb' : '';

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
