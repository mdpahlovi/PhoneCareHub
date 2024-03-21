import { compare } from "bcrypt";
import { encode } from "next-auth/jwt";
import { exclude } from "@/libs/exclude";
import type { NextAuthOptions } from "next-auth";
import { PrismaClient, Provider } from "@prisma/client";
import GithubProvider, { type GithubProfile } from "next-auth/providers/github";
import GoogleProvider, { type GoogleProfile } from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

const prisma = new PrismaClient({ errorFormat: "minimal" });
const select = { id: true, name: true, role: true, image: true, email: true, password: true };

export const authOptions: NextAuthOptions = {
    providers: [
        GithubProvider({
            profile(profile: GithubProfile) {
                return {
                    id: profile.id.toString(),
                    name: profile.name ?? profile.login,
                    image: profile.avatar_url,
                    email: profile.email,
                    role: profile.role ?? "user",
                };
            },
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET,
        }),
        GoogleProvider({
            profile(profile: GoogleProfile) {
                return {
                    id: profile.sub,
                    name: profile.name,
                    image: profile.picture,
                    email: profile.email,
                    role: profile.role ?? "user",
                };
            },
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
        CredentialsProvider({
            type: "credentials",
            credentials: {},
            async authorize(credentials, req) {
                const { email, password } = credentials as { email: string; password: string };

                let isUserExist;
                const user = await prisma.user.findUnique({ where: { email }, select });
                const admin = await prisma.admin.findUnique({ where: { email }, select });

                if (!user && !admin) throw new Error("User doesn't exist...!");
                if (user || admin) isUserExist = admin || user;

                if (!isUserExist?.password || !(await compare(password, isUserExist.password))) {
                    throw new Error("Password doesn't match...!");
                }

                const result = exclude(isUserExist, ["password"]);
                return result;
            },
        }),
    ],
    pages: { signIn: "/login", error: "/error" },
    callbacks: {
        async signIn({ user, account }) {
            if (account?.type === "oauth") {
                const payload = { name: user?.name!, image: user?.image!, email: user?.email!, provider: account?.provider as Provider };

                let result = await prisma.user.findUnique({ where: { email: payload.email }, select });
                if (!result) result = await prisma.user.create({ data: { ...payload }, select });

                user.id = result.id;
                return true;
            } else {
                return true;
            }
        },
        async jwt({ token, user, trigger, session }) {
            if (user) token.role = user.role;
            if (trigger === "update") {
                if (session.name) token.name = session.name;
                if (session.image) token.picture = session.image;
            }
            return token;
        },
        async session({ session, token }) {
            const secret = process.env.NEXTAUTH_SECRET;
            session.token = await encode({ token, secret });
            if (session?.user) session.user.role = token.role;

            return session;
        },
    },
};
