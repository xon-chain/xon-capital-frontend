export { default } from "next-auth/middleware";

// Only protect /dashboard and its subroutes
export const config = {
  matcher: ["/dashboard/:path*"],
};
