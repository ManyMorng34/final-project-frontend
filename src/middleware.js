export { default } from "next-auth/middleware";

// Define the route that you wish to protect
export const config = {
  matcher: [
    "/employee/dashboard",
    "/employee/profile",
    "/employee/calendar",
    "/employee/project-card",
    "/employee/project-list",
    "/employee/setting",
  ],
};
