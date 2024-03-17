/* eslint-disable @typescript-eslint/consistent-type-definitions */
import { JwtPayload } from "jose";

declare global {
    namespace Express {
        interface Request {
            user: JwtPayload | null;
        }
    }
}
