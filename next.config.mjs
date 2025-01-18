const nextConfig = {
    reactStrictMode: true, // Helps with identifying issues during development
    swcMinify: true, // Use SWC for faster builds and minification
    images: {
        domains: ["example.com"], // Add your image domains here
    },
    env: {
        NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL, // Use environment variables
    },
    experimental: {
        appDir: true, // Enable the app directory if using Next.js 13+
    },
    webpack: (config) => {
        // Customize Webpack if needed
        config.resolve.fallback = {
            ...config.resolve.fallback,
            fs: false, // Example: Fix "fs" module issue
        };
        return config;
    },
};

export default nextConfig;
