import { z } from "zod";
import { CreateUserDto } from "../dto/user.dto";
import { createUser, listUsers } from "../services/usersService";

export const getUsers = async () => {
  return await listUsers();
};

export const addUser = async (body: any) => {
  const parsed = CreateUserDto.safeParse(body);

  if (!parsed.success) {
    return {
      error: "Invalid input",
      details: z.treeifyError(parsed.error),
    };
  }

  return await createUser(parsed.data);
};