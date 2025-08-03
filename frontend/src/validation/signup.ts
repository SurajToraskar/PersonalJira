import * as z from "zod";

export const LoginSchema = z
  .object({
    firstName: z.string(),
    lastName: z.string(),
    email: z.email(),
    password: z
      .string()
      .min(8, { message: "Password is too short" })
      .max(10, { message: "Password is too long" }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export type LoginProps = z.infer<typeof LoginSchema>;
