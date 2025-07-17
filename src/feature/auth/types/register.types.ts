import { User } from "@/core/types";
import { z } from "zod";
import { registerSchema } from "../auth.validation";

export type RegisterFormData = z.infer<typeof registerSchema>;

export interface RegisterRequest
  extends Omit<User, "id" | "createdAt" | "updatedAt"> {
  password: string;
}

export interface RegisterResponse {
  user: User;
  token: string;
}
