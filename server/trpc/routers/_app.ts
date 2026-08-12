import { authRouter } from "@/features/auth/server/auth-router";
import { createTRPCRouter } from "../trpc";

export const appRouter = createTRPCRouter({
  auth: authRouter,
});

export type AppRouter = typeof appRouter;
