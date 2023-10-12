namespace NodeJS {
    interface ProcessEnv extends NodeJS.ProcessEnv {
        NEXTAUTH_URL: string;
        NEXTAUTH_SECRET: string;
        GITHUB_CLIENT_ID: string;
        GITHUB_CLIENT_SECRET: string;
        GOOGLE_CLIENT_ID: string;
        GOOGLE_CLIENT_SECRET: string;
        CLOUDINARY_NAME: string;
        CLOUDINARY_API_KEY: string;
        CLOUDINARY_API_SECRET: string;
    }
}
