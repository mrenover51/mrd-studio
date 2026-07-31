"use client";

import type { MouseEvent, PointerEvent } from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

export function Button({ href, children, variant = "primary", className }: Props) {
  const trackLight = (event: PointerEvent<HTMLAnchorElement>) => {
    if (event.pointerType !== "mouse") return;
    const rect = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty("--button-x", `${event.clientX - rect.left}px`);
    event.currentTarget.style.setProperty("--button-y", `${event.clientY - rect.top}px`);
  };

  const ripple = (event: MouseEvent<HTMLAnchorElement>) => {
    const target = event.currentTarget;
    const rect = target.getBoundingClientRect();
    target.style.setProperty("--ripple-x", `${event.clientX - rect.left}px`);
    target.style.setProperty("--ripple-y", `${event.clientY - rect.top}px`);
    target.classList.remove("is-rippling");
    requestAnimationFrame(() => target.classList.add("is-rippling"));
  };

  return (
    <a
      href={href}
      onPointerMove={trackLight}
      onClick={ripple}
      className={cn(
        "future-button group",
        variant === "secondary" && "future-button-secondary",
        className,
      )}
    >
      <span aria-hidden className="button-sheen" />
      <span className="relative z-10">{children}</span>
      <ArrowUpRight size={15} className="relative z-10 transition-transform duration-300 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
    </a>
  );
}
