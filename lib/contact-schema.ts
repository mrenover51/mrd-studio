import { z } from "zod";

export const projectTypes = [
  "Site vitrine Premium",
  "Refonte de site",
  "Référencement SEO",
  "Réseaux sociaux",
  "Identité visuelle",
  "Maintenance",
  "Hébergement",
  "Autre",
] as const;

export const budgets = [
  "< 2 000 €",
  "2 000 € - 5 000 €",
  "5 000 € - 10 000 €",
  "+ 10 000 €",
] as const;

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Indiquez votre nom."),
  company: z.string().trim().max(100, "Le nom est trop long.").optional(),
  phone: z.string().trim().min(8, "Indiquez un numéro valide.").max(30, "Indiquez un numéro valide."),
  email: z.email("Indiquez une adresse email valide."),
  projectType: z.enum(projectTypes, { message: "Sélectionnez un type de projet." }),
  budget: z.enum(budgets).optional().or(z.literal("")),
  message: z.string().trim().min(20, "Décrivez votre projet en quelques phrases.").max(3000, "Votre message est trop long."),
  website: z.string().max(0).optional(),
  submittedAt: z.number().int().positive(),
});

export type ContactFormData = z.infer<typeof contactSchema>;
