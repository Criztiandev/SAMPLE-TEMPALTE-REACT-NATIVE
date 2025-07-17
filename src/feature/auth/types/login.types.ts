import { User } from "@/core/types";
import { z } from "zod";
import { loginSchema } from "../auth.validation";

export type LoginFormData = z.infer<typeof loginSchema>;

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  user: User;
  token: string;
}
