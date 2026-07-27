"use client";

type Props = {
  id: string;
  title: string;
  service?: string;
  description: string;
  checked: boolean;
  disabled?: boolean;
  onChange?: (checked: boolean) => void;
};

export function CookieCategory({ id, title, service, description, checked, disabled, onChange }: Props) {
  return (
    <div className="rounded-[20px] border border-white/[.08] bg-white/[.025] p-5 transition-colors duration-500 hover:border-accent/20 sm:p-6">
      <div className="flex items-start justify-between gap-5">
        <div>
          <label htmlFor={id} className="block cursor-pointer text-sm font-medium text-paper">{title}</label>
          {service && <p className="mt-1 text-[10px] uppercase tracking-[.14em] text-accent/75">{service}</p>}
        </div>
        <button
          id={id}
          type="button"
          role="switch"
          aria-checked={checked}
          aria-describedby={`${id}-description`}
          disabled={disabled}
          onClick={() => onChange?.(!checked)}
          className={`relative h-7 w-12 shrink-0 rounded-full border transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0c12] ${
            checked
              ? "border-accent/50 bg-accent/25 shadow-[0_0_18px_rgba(0,217,255,.15)]"
              : "border-white/15 bg-white/[.04]"
          } disabled:cursor-not-allowed disabled:opacity-75`}
        >
          <span className={`absolute top-[3px] size-5 rounded-full transition-transform duration-500 ${checked ? "translate-x-[23px] bg-accent shadow-[0_0_12px_rgba(0,217,255,.45)]" : "translate-x-[3px] bg-white/55"}`} />
          <span className="sr-only">{checked ? "Activé" : "Désactivé"}</span>
        </button>
      </div>
      <p id={`${id}-description`} className="mt-4 text-xs leading-6 text-muted">{description}</p>
      <p className="mt-3 text-[9px] uppercase tracking-[.14em] text-white/35">{disabled ? "Toujours actifs" : checked ? "Autorisé" : "Refusé"}</p>
    </div>
  );
}
