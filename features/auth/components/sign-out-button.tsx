"use client";

import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { authClient } from "../lib/auth-client";

export function SignOutButton() {
  const router = useRouter();

  async function onSignOut() {
    await authClient.signOut();
    router.push("/signin");
    router.refresh();
  }

  return (
    <Button
      variant="ghost"
      className="w-full justify-start gap-2"
      onClick={onSignOut}
    >
      <LogOut className="size-4" />
      Sign out
    </Button>
  );
}
