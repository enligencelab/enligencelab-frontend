/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["127.0.0.1", process.env.NEXT_PUBLIC_API_URL],
    },
}

module.exports = nextConfig
