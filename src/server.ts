import { Elysia } from "elysia";
import swagger from "@elysiajs/swagger";
import { join } from "path";

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
  .use(usersRoutes)
  // Test API endpoint
  .get("/api/hello", () => {
    return {
      message: "Hello, world!",
      method: "GET",
    };
  })
  .put("/api/hello", () => {
    return {
      message: "Hello, world!",
      method: "PUT",
    };
  })
  .get("/api/hello/:name", ({ params }) => {
    return {
      message: `Hello, ${params.name}!`,
    };
  })
  // Serve static files from src directory for development
  .get("/logo.svg", async () => {
    const file = Bun.file(join(import.meta.dir, "logo.svg"));
    return new Response(file, {
      headers: { "Content-Type": "image/svg+xml" },
    });
  })
  .get("/react.svg", async () => {
    const file = Bun.file(join(import.meta.dir, "react.svg"));
    return new Response(file, {
      headers: { "Content-Type": "image/svg+xml" },
    });
  })
  // Bundle and serve frontend JavaScript files
  .get("/frontend.tsx", async () => {
    const result = await Bun.build({
      entrypoints: [join(import.meta.dir, "frontend.tsx")],
      format: "esm",
      minify: false,
    });
    
    if (!result.success || !result.outputs[0]) {
      return new Response("Build failed", { status: 500 });
    }
    
    const output = result.outputs[0];
    return new Response(await output.text(), {
      headers: { "Content-Type": "application/javascript" },
    });
  })
  .get("/index.css", async () => {
    const file = Bun.file(join(import.meta.dir, "index.css"));
    return new Response(file, {
      headers: { "Content-Type": "text/css" },
    });
  })
  // Serve index.html for root and all non-API routes
  .get("/", async () => {
    const html = Bun.file(join(import.meta.dir, "index.html"));
    return new Response(html, {
      headers: { "Content-Type": "text/html" },
    });
  });

app.listen(3000);

console.log("🚀 Server running at http://localhost:3000");
console.log("📚 Swagger docs at http://localhost:3000/swagger");