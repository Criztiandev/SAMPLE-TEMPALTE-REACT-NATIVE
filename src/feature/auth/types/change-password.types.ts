import { z } from "zod";
import { changePasswordSchema } from "../auth.validation";

export type ChangePasswordFormData = z.infer<typeof changePasswordSchema>;

export interface ChangePasswordRequest {
  currentPassword: string;
  newPassword: string;
}

export interface ChangePasswordResponse {
  message: string;
}
