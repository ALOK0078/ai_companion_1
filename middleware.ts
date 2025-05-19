import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({ publicRoutes: ["/api/webhook"] });

// export default authMiddleware({  });//this was default
export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"]
};

