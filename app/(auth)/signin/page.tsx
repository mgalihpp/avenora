import type { Metadata } from "next";
import Link from "next/link";
import { SignInForm } from "./_components/sign-in-form";

export const metadata: Metadata = { title: "Sign in" };

export default function SignInPage() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-6">
      <div className="flex flex-col gap-2 text-center">
        <h1 className="text-2xl font-semibold">Welcome back</h1>
        <p className="text-sm text-muted-foreground">
          Don&apos;t have an account?{" "}
          <Link
            href="/signup"
            className="text-foreground underline underline-offset-4"
          >
            Sign up
          </Link>
        </p>
      </div>
      <SignInForm />
    </div>
  );
}
