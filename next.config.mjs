/** @type {import('next').NextConfig} */
import withNextIntl from 'next-intl/plugin';

const isProduction = process.env.NODE_ENV === 'production';

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['sensitiky.github.io'],
  },
};

const finalConfig = withNextIntl()(nextConfig);

export default isProduction ? finalConfig : nextConfig;