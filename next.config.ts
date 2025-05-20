import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cs3.wettercomassets.com',
        port: '',
        pathname: '/images/interview/**',
      },
    ],
  },
  async rewrites() {
    return [
      {
        /***
         Matches forecast URLs following the documented schema in the readme:
             - Supports only "3-days" or "7-days" in the path
             - Accepts either "forecast" or "this-is-the-forecast-page" as the base path
             - Restricts the file extension to ".html" (or none)
             - Ignores other extensions like .json or .xml

         Url redirection better to be handled through proxy server
         */
        source:
          '/(forecast|this-is-the-forecast-page)/:number(3|7)-days/:locationCode([^/.]+)(\\.html)?',
        destination: '/forecast/days/:number/:locationCode',
      },
    ];
  },
};

export default nextConfig;
