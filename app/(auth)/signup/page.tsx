import type { Metadata } from "next";
import Link from "next/link";
import { SignUpForm } from "./_components/sign-up-form";

export const metadata: Metadata = { title: "Sign up" };

export default function SignUpPage() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-6">
      <div className="flex flex-col gap-2 text-center">
        <h1 className="text-2xl font-semibold">Create an account</h1>
        <p className="text-sm text-muted-foreground">
          Already have an account?{" "}
          <Link
            href="/signin"
            className="text-foreground underline underline-offset-4"
          >
            Sign in
          </Link>
        </p>
      </div>
      <SignUpForm />
    </div>
  );
}
