import { serverClient } from "@/server/trpc/server";

export default async function DashboardPage() {
  const me = await serverClient.auth.me();

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">Dashboard</h1>
      <p className="text-muted-foreground">
        Hello, {me?.user.name}. This page is a Server Component that fetches
        data through tRPC.
      </p>
    </div>
  );
}
