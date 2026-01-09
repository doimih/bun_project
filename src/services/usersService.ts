import { prisma } from "../config/prisma";

export const listUsers = () => {
  return prisma.user.findMany();
};

export const createUser = (data: { name: string; email: string; password: string }) => {
  return prisma.user.create({ data });
};