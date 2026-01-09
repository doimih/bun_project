import { z } from "zod";

export const CreateUserDto = z.object({
  name: z.string().min(2).max(50),
  email: z.string().email(),
});

export type CreateUserInput = z.infer<typeof CreateUserDto>;