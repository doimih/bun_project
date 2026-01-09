import { Elysia, t } from "elysia";
import { getUsers } from "../controllers/usersController";
import { authMiddleware } from "../middlewares/auth";

export default new Elysia({ prefix: "/users" })
  .use(authMiddleware)
  .get(
    "/",
    async () => {
      return await getUsers();
    },
    {
      detail: {
        summary: "Get all users (protected)",
        tags: ["Users"],
        security: [{ bearerAuth: [] }],
      },
    }
  );