import { headers } from "next/headers";
import { createTRPCContext } from "./context";
import { appRouter } from "./routers/_app";

export const serverClient = appRouter.createCaller(async () =>
  createTRPCContext({ headers: await headers() }),
);
