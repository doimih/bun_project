import { PrismaClient } from "@prisma/client";
import { PrismaMariaDb } from '@prisma/adapter-mariadb';

// Parse DATABASE_URL: mysql://root:1004MunkMunk.@localhost:3306/bun_api
const databaseUrl = process.env.DATABASE_URL || "mysql://root:1004MunkMunk.@localhost:3306/bun_api";

const url = new URL(databaseUrl);

const adapter = new PrismaMariaDb({
  host: url.hostname,
  port: parseInt(url.port) || 3306,
  user: url.username,
  password: url.password,
  database: url.pathname.slice(1), // Remove leading '/'
});

export const prisma = new PrismaClient({ adapter });