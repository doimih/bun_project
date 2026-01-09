import { Elysia, t } from "elysia";
import { register, login } from "../controllers/authController";

export default new Elysia({ prefix: "/auth" })
  .post(
    "/register",
    ({ body }) => register(body),
    {
      body: t.Object({
        name: t.String(),
        email: t.String(),
        password: t.String(),
      }),
      detail: {
        summary: "Register",
        tags: ["Auth"],
      },
    }
  )
  .post(
    "/login",
    ({ body }) => login(body),
    {
      body: t.Object({
        email: t.String(),
        password: t.String(),
      }),
      detail: {
        summary: "Login",
        tags: ["Auth"],
      },
    }
  );