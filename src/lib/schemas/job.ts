import { z } from "zod";

export const jobFormSchema = z.object({
  title: z
    .string()
    .min(1, { message: "タイトルは必須です" })
    .max(80, { message: "タイトルは80文字以内で入力してください" }),
  company: z
    .string()
    .min(1, { message: "会社名は必須です" })
    .max(80, { message: "会社名は80文字以内で入力してください" }),
  description: z
    .string()
    .min(1, { message: "説明は必須です" })
    .max(500, { message: "説明は500文字以内で入力してください" }),
});

export type JobFormValues = z.infer<typeof jobFormSchema>;
