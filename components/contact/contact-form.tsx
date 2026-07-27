"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Check, LoaderCircle } from "lucide-react";
import { budgets, contactSchema, projectTypes, type ContactFormData } from "@/lib/contact-schema";
import { PremiumSelect } from "@/components/ui/premium-select";

function FieldError({ id, message }: { id: string; message?: string }) {
  return <AnimatePresence>{message && <motion.p id={id} role="alert" initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="mt-2 text-[11px] text-[#e2a186]">{message}</motion.p>}</AnimatePresence>;
}

const inputClass = "peer h-14 w-full rounded-[16px] border border-accent/20 bg-panel px-4 text-sm text-paper outline-none shadow-[0_8px_28px_rgba(0,217,255,.05)] transition-all duration-500 placeholder:text-white/45 hover:border-accent/35 focus:-translate-y-0.5 focus:border-accent/65 focus:shadow-[0_12px_38px_rgba(0,217,255,.14),0_0_0_1px_rgba(122,92,255,.1)]";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [serverMessage, setServerMessage] = useState("");
  const [formStartedAt] = useState(Date.now);
  const { register, control, handleSubmit, reset, formState: { errors } } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", company: "", phone: "", email: "", projectType: undefined, budget: "", message: "", website: "", submittedAt: formStartedAt },
  });

  const onSubmit = async (data: ContactFormData) => {
    setStatus("loading");
    setServerMessage("");
    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 15_000);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
        signal: controller.signal,
      });
      const payload = await response.json();
      if (!response.ok) throw new Error(payload.message);
      setStatus("success");
      setServerMessage(payload.message);
      reset({ name: "", company: "", phone: "", email: "", projectType: undefined, budget: "", message: "", website: "", submittedAt: formStartedAt });
    } catch (error) {
      setStatus("error");
      setServerMessage(error instanceof DOMException && error.name === "AbortError"
        ? "Le délai d’envoi est dépassé. Vérifiez votre connexion puis réessayez."
        : error instanceof Error ? error.message : "L’envoi n’a pas pu aboutir.");
    } finally {
      window.clearTimeout(timeout);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="premium-card rounded-[28px] p-6 sm:p-10 lg:p-12">
      <div className="pointer-events-none absolute -right-32 -top-32 size-80 rounded-full bg-accent/[.07] blur-[90px]" />
      <div className="relative mb-10"><p className="eyebrow mb-4">Votre demande</p><h2 className="display text-4xl tracking-[-.035em] sm:text-5xl">Parlez-nous de votre ambition.</h2><p className="mt-4 max-w-xl text-sm leading-7 text-muted">Quelques détails suffisent pour commencer. Les champs marqués d’un astérisque sont requis.</p></div>
      <div className="relative grid gap-x-5 gap-y-6 md:grid-cols-2">
        <label className="block"><span className="mb-2 block text-[11px] text-muted">Nom *</span><input {...register("name")} autoComplete="name" placeholder="Votre nom" className={inputClass} aria-invalid={!!errors.name} aria-describedby={errors.name ? "name-error" : undefined} /><FieldError id="name-error" message={errors.name?.message} /></label>
        <label className="block"><span className="mb-2 block text-[11px] text-muted">Entreprise</span><input {...register("company")} autoComplete="organization" placeholder="Nom de votre entreprise" className={inputClass} aria-describedby={errors.company ? "company-error" : undefined} /><FieldError id="company-error" message={errors.company?.message} /></label>
        <label className="block"><span className="mb-2 block text-[11px] text-muted">Téléphone *</span><input {...register("phone")} type="tel" autoComplete="tel" placeholder="06 00 00 00 00" className={inputClass} aria-invalid={!!errors.phone} aria-describedby={errors.phone ? "phone-error" : undefined} /><FieldError id="phone-error" message={errors.phone?.message} /></label>
        <label className="block"><span className="mb-2 block text-[11px] text-muted">Email *</span><input {...register("email")} type="email" autoComplete="email" placeholder="vous@entreprise.fr" className={inputClass} aria-invalid={!!errors.email} aria-describedby={errors.email ? "email-error" : undefined} /><FieldError id="email-error" message={errors.email?.message} /></label>
        <div><span className="mb-2 block text-[11px] text-muted">Type de projet *</span><Controller name="projectType" control={control} render={({ field }) => <PremiumSelect ariaLabel="Type de projet" value={field.value} onValueChange={field.onChange} placeholder="Sélectionner" invalid={!!errors.projectType} options={projectTypes.map(value => ({ label: value, value }))} />} /><FieldError id="project-error" message={errors.projectType?.message} /></div>
        <div><span className="mb-2 block text-[11px] text-muted">Budget estimatif</span><Controller name="budget" control={control} render={({ field }) => <PremiumSelect ariaLabel="Budget estimatif" value={field.value} onValueChange={field.onChange} placeholder="À définir ensemble" invalid={!!errors.budget} options={budgets.map(value => ({ label: value, value }))} />} /><FieldError id="budget-error" message={errors.budget?.message} /></div>
        <label className="block md:col-span-2"><span className="mb-2 block text-[11px] text-muted">Message *</span><textarea {...register("message")} rows={6} placeholder="Votre projet, vos objectifs, vos délais…" className={`${inputClass} h-auto min-h-40 resize-y py-4`} aria-invalid={!!errors.message} aria-describedby={errors.message ? "message-error" : undefined} /><FieldError id="message-error" message={errors.message?.message} /></label>
        <input {...register("website")} tabIndex={-1} autoComplete="off" className="absolute -left-[9999px]" aria-hidden />
        <input {...register("submittedAt", { valueAsNumber: true })} type="hidden" />
      </div>
      <div className="relative mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
        <button type="submit" disabled={status === "loading" || status === "success"} className="future-button group h-16 min-w-64 px-9 disabled:cursor-wait disabled:opacity-80">
          {status === "loading" ? <><LoaderCircle size={17} className="animate-spin" /> Envoi en cours</> : status === "success" ? <><Check size={17} /> Demande envoyée</> : <>Envoyer ma demande <ArrowUpRight size={16} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></>}
        </button>
        <AnimatePresence>{serverMessage && <motion.p role="status" initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} className={`text-xs ${status === "error" ? "text-[#e2a186]" : "text-accent"}`}>{serverMessage}</motion.p>}</AnimatePresence>
      </div>
    </form>
  );
}
