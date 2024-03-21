/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    modularizeImports: {
        "@mui/icons-material": {
            transform: "@mui/icons-material/{{member}}",
        },
    },
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "i.ibb.co",
                pathname: "**",
            },
            {
                protocol: "https",
                hostname: "shorturl.at",
                pathname: "**",
            },
            {
                protocol: "https",
                hostname: "img.freepik.com",
                pathname: "**",
            },
            {
                protocol: "https",
                hostname: "res.cloudinary.com",
                pathname: "**",
            },
            {
                protocol: "https",
                hostname: "lh3.googleusercontent.com",
                pathname: "**",
            },
            {
                protocol: "https",
                hostname: "avatars.githubusercontent.com",
                pathname: "**",
            },
        ],
    },
};

export default nextConfig;
