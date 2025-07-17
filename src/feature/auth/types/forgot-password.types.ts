import { z } from "zod";
import { forgotPasswordSchema } from "../auth.validation";

export type ForgotPasswordFormData = z.infer<typeof forgotPasswordSchema>;

export interface ForgotPasswordRequest {
  email: string;
}

export interface ForgotPasswordResponse {
  message: string;
}
