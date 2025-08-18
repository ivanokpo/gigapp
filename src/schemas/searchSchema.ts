import { z } from "zod";

export const searchSchema = z.string().min(1, "Search query is required").max(30, "Too long");

export type SearchFormData = z.infer<typeof searchSchema>;
