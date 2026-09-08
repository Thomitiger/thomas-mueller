/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    // Nur lokale Bilder aus /public. Keine externen Loader, keine Remote-Patterns.
    formats: ['image/avif', 'image/webp'],
  },
};

export default nextConfig;
