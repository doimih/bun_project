import { prisma } from "../config/prisma";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "dev_secret";

export const registerUser = async (data: {
  name: string;
  email: string;
  password: string;
}) => {
  const existing = await prisma.user.findUnique({
    where: { email: data.email },
  });

  if (existing) {
    return { error: "Email already exists" };
  }

  const hashed = await bcrypt.hash(data.password, 10);

  const user = await prisma.user.create({
    data: {
      name: data.name,
      email: data.email,
      password: hashed,
    },
  });

  return { id: user.id, email: user.email };
};

export const loginUser = async (data: {
  email: string;
  password: string;
}) => {
  const user = await prisma.user.findUnique({
    where: { email: data.email },
  });

  if (!user) return { error: "Invalid credentials" };

  const valid = await bcrypt.compare(data.password, user.password);
  if (!valid) return { error: "Invalid credentials" };

  const token = jwt.sign(
    { id: user.id, email: user.email },
    JWT_SECRET,
    { expiresIn: "7d" }
  );

  return { token };
};