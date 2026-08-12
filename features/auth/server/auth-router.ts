import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "@/server/trpc/trpc";
import { auth } from "../lib/auth";
import { changePasswordSchema, updateProfileSchema } from "../lib/schemas";

export const authRouter = createTRPCRouter({
  me: publicProcedure.query(async ({ ctx }) => {
    if (!ctx.session?.user) return null;
    return { user: ctx.session.user };
  }),

  updateProfile: protectedProcedure
    .input(updateProfileSchema)
    .mutation(async ({ ctx, input }) => {
      return ctx.db.user.update({
        where: { id: ctx.user.id },
        data: { name: input.name },
      });
    }),

  changePassword: protectedProcedure
    .input(changePasswordSchema)
    .mutation(async ({ ctx, input }) => {
      return auth.api.changePassword({
        body: {
          currentPassword: input.currentPassword,
          newPassword: input.newPassword,
        },
        headers: ctx.headers,
      });
    }),
});
