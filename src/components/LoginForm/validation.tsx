import * as zod from "zod";

export const loginSchema = zod.object({
  email: zod.string().nonempty("Please enter your email address"),
  password: zod.string().nonempty("Please enter your password")
});

export type loginFormData = zod.infer<typeof loginSchema>;