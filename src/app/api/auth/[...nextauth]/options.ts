import { encode } from "next-auth/jwt";
import { baseAxios } from "@/exports/axios";
import type { NextAuthOptions } from "next-auth";
import GithubProvider, { type GithubProfile } from "next-auth/providers/github";
import GoogleProvider, { type GoogleProfile } from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

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

                try {
                    const res = await baseAxios.post("/auth/signin", { email, password });
                    return res.data;
                } catch (error: any) {
                    throw new Error(error.message);
                }
            },
        }),
    ],
    pages: { signIn: "/login", error: "/error" },
    callbacks: {
        async signIn({ user, account }) {
            if (account?.type === "oauth") {
                const payload = { name: user?.name!, image: user?.image!, email: user?.email!, provider: account?.provider };

                try {
                    const res = await baseAxios.post("/auth/social-signin", payload);
                    user.id = res.data.id;
                    return true;
                } catch (error: any) {
                    throw new Error(error.message);
                }
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
