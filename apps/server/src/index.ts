import app from "./app";
import config from "./config";
import { Server } from "http";
import { v2 as cloudinary } from "cloudinary";

async function bootstrap() {
    const server: Server = app.listen(5000, () => {
        console.log(`Server running on port ${5000}`);
    });

    const exitHandler = () => {
        if (server) server.close(() => console.log("Server closed"));
        process.exit(1);
    };

    cloudinary.config({
        cloud_name: config.cloud.name,
        api_key: config.cloud.api_key,
        api_secret: config.cloud.api_secret,
    });

    const unexpectedErrorHandler = (error: unknown) => {
        console.log(error);
        exitHandler();
    };

    process.on("uncaughtException", unexpectedErrorHandler);
    process.on("unhandledRejection", unexpectedErrorHandler);

    process.on("SIGTERM", () => {
        console.log("SIGTERM received");
        if (server) server.close();
    });
}

bootstrap();
