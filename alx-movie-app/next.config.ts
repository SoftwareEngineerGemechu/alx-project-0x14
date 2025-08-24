import withPWAInit from "@ducanh2912/next-pwa";

/** @type {import('next').NextConfig} */
const withPWA = withPWAInit({
  dest: "public", // service worker + manifest will be generated in /public
});

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["m.media-amazon.com"],
  },
};

export default withPWA({
  ...nextConfig,
});
