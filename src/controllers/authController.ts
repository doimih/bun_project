import { RegisterDto, LoginDto } from "../dto/auth.dto";
import { registerUser, loginUser } from "../services/authService";

export const register = async (body: any) => {
  const parsed = RegisterDto.safeParse(body);
  if (!parsed.success) {
    return { error: "Invalid input", details: parsed.error.flatten() };
  }

  const { name, email, password } = parsed.data as { name: string; email: string; password: string };

  return await registerUser({ name, email, password });
};

export const login = async (body: any) => {
  const parsed = LoginDto.safeParse(body);
  if (!parsed.success) {
    return { error: "Invalid input", details: parsed.error.flatten() };
  }

  const { email, password } = parsed.data as { email: string; password: string };

  return await loginUser({ email, password });
};