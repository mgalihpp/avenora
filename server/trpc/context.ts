import { auth } from "@/features/auth/lib/auth";
import { db } from "@/lib/db";

export async function createTRPCContext(opts: { headers: Headers }) {
  const session = await auth.api.getSession({ headers: opts.headers });
  return { db, headers: opts.headers, session };
}
