import { Elysia } from "elysia";
import swagger from "@elysiajs/swagger";

import authRoutes from "./routes/auth";
import usersRoutes from "./routes/users";

const app = new Elysia()
  .use(
    swagger({
      documentation: {
        info: {
          title: "Bun API",
          version: "1.0.0",
        },
        components: {
          securitySchemes: {
            bearerAuth: {
              type: "http",
              scheme: "bearer",
              bearerFormat: "JWT",
            },
          },
        },
      },
    })
  )
  .use(authRoutes)
  .use(usersRoutes);

app.listen(3000);

console.log("Server running at http://localhost:3000");
console.log("Swagger docs at http://localhost:3000/swagger");