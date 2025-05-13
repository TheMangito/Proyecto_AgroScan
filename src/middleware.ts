// src/middleware.ts
import { clerkMiddleware, createRouteMatcher } from "@clerk/astro/server";

const isProtected = createRouteMatcher(["/dashboard(.*)"]);

export const onRequest = clerkMiddleware(
  (auth, context) => {
    const { userId, redirectToSignIn } = auth();

    if (!userId && isProtected(context.request)) {
      return redirectToSignIn();
    }

  },
  {
    // Aquí van opciones válidas
  }
);
