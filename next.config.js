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
        domains: ["img.freepik.com", "avatars.githubusercontent.com", "lh3.googleusercontent.com", "res.cloudinary.com", "shorturl.at"],
    },
};

module.exports = nextConfig;
