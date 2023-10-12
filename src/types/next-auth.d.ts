import { Role } from "@prisma/client";
import type { JWT, DefaultJWT } from "next-auth/jwt";
import type { DefaultSession, DefaultUser } from "next-auth";

declare module "next-auth" {
    interface Session {
        user?: {
            role?: Role;
        } & DefaultSession["user"];
        token?: string;
    }

    interface User extends DefaultUser {
        role?: Role;
    }
}

declare module "next-auth/jwt" {
    interface JWT extends DefaultJWT {
        role?: Role;
    }
}
