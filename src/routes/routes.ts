import { Elysia } from "elysia";
import { getUsers, addUser } from "../controllers/usersController";

export default new Elysia({ prefix: "/users" })
  .get("/", () => getUsers())
  .post("/", ({ body }) => addUser(body));