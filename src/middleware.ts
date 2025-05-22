// src/middleware.ts
import { clerkMiddleware, createRouteMatcher } from "@clerk/astro/server";

// Rutas que requieren login
const isProtected = createRouteMatcher(["/dashboard(.*)"]);

// Rutas de auth “públicas” (index, login, register)
const isAuthPage = createRouteMatcher(["/", "/login", "/register"]);

export const onRequest = clerkMiddleware((auth, context) => {
  const { userId, redirectToSignIn } = auth();
  const req = context.request;

  // 1. Protejo /dashboard/* si NO está logueado
  if (isProtected(req) && !userId) {
    return redirectToSignIn();
  }

  // 2. Si ya está logueado y va a /, /login o /register, lo mando a /dashboard/Inicio
  if (isAuthPage(req) && userId) {
    return new Response(null, {
      status: 302,
      headers: { "Location": "/dashboard/Inicio" }
    });
  }

  // 3. En cualquier otro caso, dejo pasar la petición
  return;
});
