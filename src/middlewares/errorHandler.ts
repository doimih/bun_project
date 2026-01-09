import { Elysia } from "elysia";

export const errorHandler = new Elysia()
  .onError(({ code, error }) => {
    const message = error instanceof Error ? error.message : String(error);
    console.error("Error:", code, message);

    return new Response(
      JSON.stringify({
        success: false,
        error: message,
        code
      }),
      { status: 500 }
    );
  });