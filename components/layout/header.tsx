"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useMobilePerformance } from "@/hooks/use-mobile-performance";

const links = [
  ["Accueil", "/#accueil"],
  ["Philosophie", "/#philosophie"],
  ["Méthode", "/#methode"],
  ["Concepts", "/#concepts"],
  ["Contact", "/contact"],
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const frame = useRef(0);
  const simplifyMotion = useMobilePerformance();

  useEffect(() => {
    const update = () => {
      frame.current = 0;
      setScrolled((current) => {
        const next = window.scrollY > 32;
        return current === next ? current : next;
      });
    };
    const onScroll = () => {
      if (!frame.current) frame.current = requestAnimationFrame(update);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame.current) cancelAnimationFrame(frame.current);
    };
  }, []);

  return (
    <>
    <a href="#contenu-principal" className="fixed left-4 top-3 z-[120] -translate-y-24 rounded-full bg-accent px-5 py-3 text-xs font-semibold text-ink shadow-[0_8px_30px_rgba(0,217,255,.25)] transition-transform duration-300 focus:translate-y-0">Aller au contenu principal</a>
    <header className={`fixed inset-x-0 top-0 z-50 px-3 transition-[padding,transform] duration-700 ease-out ${scrolled ? "translate-y-3 sm:px-5" : "translate-y-5 sm:px-7"}`}>
      <div
        className={`relative mx-auto flex max-w-[1320px] items-center justify-between overflow-hidden rounded-full border px-5 transition-[height,max-width,background-color,border-color,box-shadow] duration-700 ease-out sm:px-7 ${
          scrolled
            ? "h-[64px] max-w-[1160px] border-electric/25 bg-[#10131a]/72 shadow-[0_18px_65px_rgba(0,0,0,.55),inset_0_1px_0_rgba(255,255,255,.075),inset_0_-1px_0_rgba(122,92,255,.1),0_0_34px_rgba(0,217,255,.035)] backdrop-blur-[28px]"
            : "h-[76px] border-accent/15 bg-[#10131a]/48 shadow-[0_24px_80px_rgba(0,0,0,.32),inset_0_1px_0_rgba(255,255,255,.06),inset_0_-1px_0_rgba(122,92,255,.06)] backdrop-blur-[20px]"
        }`}
      >
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/[.035] to-transparent" />
        <motion.span
          aria-hidden
          animate={simplifyMotion ? undefined : { x: ["-130%", "430%"] }}
          transition={{ duration: 8, repeat: Infinity, repeatDelay: 6, ease: "easeInOut" }}
          className="pointer-events-none absolute inset-y-0 left-0 w-[22%] -skew-x-12 bg-gradient-to-r from-transparent via-electric/[.075] to-transparent blur-[1px]"
        />
        <span className="pointer-events-none absolute inset-x-[9%] bottom-0 h-px bg-[linear-gradient(90deg,transparent,rgba(0,217,255,.25)_40%,rgba(122,92,255,.25)_62%,transparent)]" />

        <Link href="/#accueil" aria-label="MRD Studio — Accueil" className="group relative z-10 block h-[52px] w-[78px] shrink-0 overflow-hidden">
          <Image src="/logo.png" alt="MRD Studio" fill priority quality={75} sizes="78px" className="object-contain drop-shadow-[0_0_7px_rgba(0,217,255,.12)] transition-[filter,opacity] duration-700 group-hover:brightness-110 group-hover:drop-shadow-[0_0_11px_rgba(0,217,255,.24)]" />
        </Link>

        <nav className={`absolute left-1/2 z-10 hidden -translate-x-1/2 items-center transition-all duration-700 lg:flex ${scrolled ? "gap-7" : "gap-9"}`} aria-label="Navigation principale">
          {links.map(([label, href], index) => (
            <Link key={label} href={href} className="group relative py-3 text-[10px] tracking-[.03em] text-white/48 transition-colors duration-500 hover:text-paper">
              <span className="relative z-10">{label}</span>
              <span className="absolute -bottom-0.5 left-1/2 size-1 -translate-x-1/2 scale-0 rounded-full bg-accent opacity-0 shadow-[0_0_9px_#00d9ff] transition-all duration-500 group-hover:scale-100 group-hover:opacity-100" />
              <span className="absolute inset-x-0 bottom-0 h-px origin-center scale-x-0 bg-gradient-to-r from-transparent via-accent/65 to-transparent transition-transform duration-500 group-hover:scale-x-100" />
              <span className="absolute -left-2 top-1/2 text-[6px] text-accent/0 transition-all duration-500 group-hover:-translate-x-1 group-hover:text-accent/45">0{index + 1}</span>
            </Link>
          ))}
        </nav>

        <Link href="/contact" className="group relative z-10 hidden h-10 items-center gap-2 overflow-hidden rounded-full border border-electric/50 bg-gradient-to-br from-[#42f5ff] via-accent via-[55%] to-electric px-5 text-[9px] font-semibold uppercase tracking-[.12em] text-ink shadow-[inset_0_1px_0_rgba(255,255,255,.65),inset_0_-8px_18px_rgba(30,31,80,.18),-4px_8px_24px_rgba(0,217,255,.16),5px_9px_28px_rgba(122,92,255,.2)] transition-all duration-500 hover:-translate-y-0.5 hover:border-electric/70 hover:from-[#9a83ff] hover:to-electric hover:shadow-[inset_0_1px_0_rgba(255,255,255,.75),0_12px_38px_rgba(122,92,255,.3)] sm:flex">
          <span className="pointer-events-none absolute left-[18%] top-0 h-1/2 w-2/3 rounded-full bg-white/35 blur-md" />
          <motion.span animate={simplifyMotion ? undefined : { x: ["-180%", "360%"] }} transition={{ duration: 4.5, repeat: Infinity, repeatDelay: 5 }} className="pointer-events-none absolute inset-y-[-30%] w-8 rotate-12 bg-white/25 blur-sm" />
          <span className="relative">Commencer un projet</span>
          <ArrowUpRight size={12} className="relative transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </Link>

        <button className="relative z-10 grid size-9 place-items-center rounded-full border border-white/10 bg-white/[.025] text-paper lg:hidden" aria-label={open ? "Fermer le menu" : "Ouvrir le menu"} aria-expanded={open} aria-controls="navigation-mobile" onClick={() => setOpen(!open)}>
          {open ? <X size={17} /> : <Menu size={17} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="navigation-mobile"
            initial={{ opacity: 0, y: -12, scale: .98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: .98 }}
            transition={{ duration: .35, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mt-2 max-w-[1160px] overflow-hidden rounded-[28px] border border-white/[.09] bg-[#080808]/88 px-5 shadow-[0_24px_70px_rgba(0,0,0,.55),inset_0_1px_0_rgba(255,255,255,.05)] backdrop-blur-[28px] lg:hidden"
          >
            <div className="flex flex-col py-4">
              {links.map(([label, href], index) => (
                <Link key={label} href={href} onClick={() => setOpen(false)} className="group flex items-center justify-between border-b border-white/[.06] py-4 text-xs text-muted last:border-0">
                  <span>{label}</span><span className="text-[8px] tracking-[.2em] text-accent/45">0{index + 1}</span>
                </Link>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
    </>
  );
}
