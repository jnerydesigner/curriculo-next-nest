/** @type {import('next').NextConfig} */
const nextConfig = {
    logging: {
        fetches: {
            fullUrl: true
        }
    },
    cacheMaxMemorySize: 0,
    images: {
        remotePatterns: [
            {
                hostname: 's3.amazonaws.com'
            },
            {
                hostname: "images.dog.ceo"
            }
        ]
    }
};

export default nextConfig;
