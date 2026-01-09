import jwt from "jsonwebtoken";
import { Elysia } from "elysia";

const JWT_SECRET = process.env.JWT_SECRET || "dev_secret";

export const authMiddleware = new Elysia()
  .derive(async ({ request, set }) => {
    const auth = request.headers.get("authorization");

    if (!auth || !auth.startsWith("Bearer ")) {
      set.status = 401;
      throw new Error("Unauthorized");
    }

    const token = auth.split(" ")[1];
    
    if (!token) {
      set.status = 401;
      throw new Error("Unauthorized");
    }

    try {
      const decoded = jwt.verify(token, JWT_SECRET) as { id: number; email: string };
      return { user: decoded };
    } catch {
      set.status = 401;
      throw new Error("Invalid token");
    }
  });