/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'www.w3.org',
            },
            {
                protocol: 'https',
                hostname: 'c4.wallpaperflare.com',
            },
            {
                protocol: 'https',
                hostname: 'drive.google.com',
            },
            {
                protocol: 'https',
                hostname: 'lh3.googleusercontent.com',
            },
            {
                protocol: 'https',
                hostname: "res.cloudinary.com"
            }
        ],
    }
}

module.exports = nextConfig
