const nextConfig = {
  /* reactStrictMode: true,
  webpack: (config) => {
    config.resolve = {
      ...config.resolve,
      
      fallback: {
        fs: false,
      },
    }, resolve.fallback: { "zlib": false };
    return config;
  },
};
*/
  webpack5: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false, path: false, zlib: false };

    return config;
  },
};
module.exports = nextConfig;
