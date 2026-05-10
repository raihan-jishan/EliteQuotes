const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*",
      },
    ],
  },

  allowedDevOrigins: ["192.168.1.7"],
};

export default nextConfig;