export { default } from "next-auth/middleware";

export const config = { matcher: ["/appointment/:path*", "/dashboard", "/dashboard/:path*"] };
