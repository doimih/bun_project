import { z } from "zod";
import type { Request, Response } from "express";
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

export const createUserController = async (req: Request, res: Response) => {
  const user = await createUser({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });
  res.status(201).json(user);
};