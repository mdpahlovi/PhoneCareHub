/* eslint-disable no-undef */
import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join(process.cwd(), ".env") });

export default {
    port: process.env.PORT,
    env: process.env.NODE_ENV,
    secret: process.env.SECRET,
    client_url: process.env.CLIENT_URL,
    server_url: process.env.SERVER_URL,
    database_url: process.env.DATABASE_URL,
    cloud: {
        name: process.env.CLOUDINARY_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_API_SECRET,
    },
    stripe: {
        publishable_key: process.env.STRIPE_PUBLISHABLE_KEY,
        secret_key: process.env.STRIPE_SECRET_KEY,
    },
};
