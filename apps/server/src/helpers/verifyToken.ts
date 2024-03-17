import hkdf from "@panva/hkdf";
import { jwtDecrypt, JWTPayload } from "jose";

async function getDerivedEncryptionKey(secret: string | Buffer) {
    return await hkdf("sha256", secret, "", "NextAuth.js Generated Encryption Key", 32);
}

export async function verifyToken(token: string, secret: string): Promise<JWTPayload | null> {
    if (!token) return null;
    const encryptionSecret = await getDerivedEncryptionKey(secret);
    const { payload } = await jwtDecrypt(token, encryptionSecret, { clockTolerance: 15 });
    return payload;
}
