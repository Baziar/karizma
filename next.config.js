const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack']
    });

    return config;
  },
  compiler: {
    styledComponents: true
  },
  pageExtensions: ['page.tsx', 'page.ts']
};

module.exports = nextConfig;
