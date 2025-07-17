import { z } from "zod";
import { confirmEmailSchema } from "../auth.validation";

export type ConfirmEmailFormData = z.infer<typeof confirmEmailSchema>;

export interface ConfirmEmailRequest {
  token: string;
}

export interface ConfirmEmailResponse {
  message: string;
}
