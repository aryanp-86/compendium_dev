export { default } from "next-auth/middleware";

export const config = {
  matcher: ["/v1/admin", "/v1/register"],
};
