import { Elysia } from "elysia";

export const logger = new Elysia()
    .onRequest(({ request }) => {
        const time = new Date().toISOString();
        console.log(`[${time}] Incoming request: ${request.method} ${request.url}`);
    });