import { Elysia } from "elysia";
import { users } from "./users";

export const routes = new Elysia()
  .get("/", () => "API Bun + Elysia funcționează")
  .use(users);