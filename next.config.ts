import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  serverExternalPackages: [
    "@prisma/client",
    "@prisma/adapter-pg",
    "@prisma/adapter-mariadb",
    "@prisma/adapter-better-sqlite3",
    "pg",
    "mariadb",
    "better-sqlite3",
  ],
};

export default nextConfig;
