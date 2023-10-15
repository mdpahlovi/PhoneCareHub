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
        domains: [
            "i.ibb.co",
            "shorturl.at",
            "img.freepik.com",
            "res.cloudinary.com",
            "lh3.googleusercontent.com",
            "avatars.githubusercontent.com",
        ],
    },
};

module.exports = nextConfig;
