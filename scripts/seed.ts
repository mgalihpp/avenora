import { randomUUID } from "node:crypto";
import { db } from "../lib/db";

async function main() {
  const user = await db.user.upsert({
    where: { email: "admin@example.com" },
    update: {},
    create: { id: randomUUID(), email: "admin@example.com", name: "Admin" },
  });
  console.log(`Seeded user: ${user.email}`);
}

main().finally(() => db.$disconnect());
