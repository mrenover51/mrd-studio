"use client";

import { useEffect } from "react";
import {
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { ArrowDownRight } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useMobilePerformance } from "@/hooks/use-mobile-performance";

function MacBook({ simplifyMotion }: { simplifyMotion: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 45, rotateY: -10 }}
      animate={simplifyMotion ? { opacity: 1, y: 0, rotateY: -6, rotateX: 2.5 } : { opacity: 1, y: [0, -4, 0], rotateY: [-6, -3.5, -6], rotateX: [2.5, 1.5, 2.5] }}
      transition={{
        opacity: { duration: 1.3, delay: .25 },
        y: { duration: 8, repeat: Infinity, ease: "easeInOut" },
        rotateY: { duration: 9, repeat: Infinity, ease: "easeInOut" },
        rotateX: { duration: 9, repeat: Infinity, ease: "easeInOut" },
      }}
      className="relative z-20 mx-auto w-[88%] [perspective:1800px] [transform-style:preserve-3d]"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden rounded-[18px]">
        <div className="hero-glow absolute -inset-14 rounded-full bg-accent/[.12] blur-[75px]" />
        <div className="hero-glow absolute inset-x-[3%] -bottom-5 h-14 rounded-[50%] bg-accent/[.11] blur-2xl" />
      </div>
      <div className="pointer-events-none absolute left-[17%] right-[9%] top-[6%] z-30 h-[58%] [perspective:900px]">
        {[12, 31, 54, 76, 91].map((left, index) => (
          <motion.span
            key={left}
            initial={{ scaleY: 0, opacity: 0 }}
            animate={{ scaleY: [0, 1, .82], opacity: [0, .42, .18] }}
            transition={{ duration: 2.2, delay: .55 + index * .1, ease: [0.16, 1, 0.3, 1] }}
            className="absolute bottom-[86%] h-[58%] w-px origin-bottom bg-gradient-to-t from-accent/70 via-accent/20 to-transparent blur-[.2px]"
            style={{ left: `${left}%`, transform: `rotate(${(index - 2) * 5}deg)` }}
          />
        ))}
      </div>

      <div className="relative overflow-hidden rounded-[18px] border border-accent/25 bg-gradient-to-br from-[#718096] via-[#171b24] to-[#343b4b] p-[6px] shadow-[0_68px_110px_rgba(0,0,0,.72),0_18px_52px_rgba(0,217,255,.11),inset_0_1px_1px_rgba(255,255,255,.55)]">
        <span className="absolute left-1/2 top-[2px] z-20 size-1 -translate-x-1/2 rounded-full bg-black ring-1 ring-white/10" />
        <div className="relative aspect-[16/10] overflow-hidden rounded-[12px] border border-black/80 bg-[#060606]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_40%,rgba(0,217,255,.16),transparent_42%),linear-gradient(135deg,#06070a,#10131a_55%,#06070a)]" />
          <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.035)_1px,transparent_1px)] [background-size:38px_38px]" />
          <div className="absolute left-[7%] right-[7%] top-[7%] flex items-center justify-between border-b border-white/10 pb-[3%] text-[5px] uppercase tracking-[.28em] text-white/35 sm:text-[7px]">
            <span className="text-accent">MRD / Studio</span><span>Digital experiences — 2035</span>
          </div>
          <div className="absolute bottom-[13%] left-[7%] z-10">
            <p className="text-[5px] uppercase tracking-[.3em] text-accent sm:text-[7px]">Precision in motion</p>
            <p className="display mt-2 max-w-[220px] text-[clamp(20px,3.2vw,48px)] font-medium leading-[.82] tracking-[-.065em] text-white">Shape the<br />next standard.</p>
          </div>
          <div className="absolute right-[10%] top-[24%] aspect-square w-[38%] rounded-full border border-accent/20 shadow-[inset_0_0_35px_rgba(0,217,255,.07)]">
            <div className="absolute inset-[15%] rounded-full border border-dashed border-white/10" />
            <div className="absolute inset-[31%] rounded-full bg-[radial-gradient(circle_at_35%_30%,#42f5ff,#24327a_25%,#070912_65%)] shadow-[0_0_35px_rgba(0,217,255,.25)]" />
            <span className="absolute left-1/2 top-[-2px] size-1 -translate-x-1/2 rounded-full bg-electric shadow-[0_0_8px_#7a5cff]" />
          </div>
          {!simplifyMotion && <motion.div animate={{ x: ["-130%", "430%"] }} transition={{ duration: 9, repeat: Infinity, repeatDelay: 4, ease: "easeInOut" }} className="pointer-events-none absolute inset-y-[-30%] w-[18%] -skew-x-12 bg-gradient-to-r from-transparent via-white/[.08] to-transparent blur-sm" />}
        </div>
        {!simplifyMotion && <motion.div animate={{ x: ["-120%", "520%"] }} transition={{ duration: 8, repeat: Infinity, repeatDelay: 7, ease: "easeInOut" }} className="pointer-events-none absolute inset-y-[-20%] z-30 w-[12%] -skew-x-12 bg-gradient-to-r from-transparent via-white/[.1] to-transparent opacity-60 blur-sm" />}
      </div>
      <div className="relative mx-auto h-[14px] w-[112%] -translate-x-[5.4%] rounded-b-[65%] border-t border-white/30 bg-gradient-to-b from-[#999] via-[#414141] to-[#111] shadow-[0_20px_28px_rgba(0,0,0,.8)]">
        <span className="absolute left-1/2 top-0 h-[3px] w-[15%] -translate-x-1/2 rounded-b-full bg-[#282828]" />
      </div>
      <div className="mx-auto mt-7 h-5 w-[74%] rounded-[50%] bg-black/90 blur-xl" />
    </motion.div>
  );
}

function OpticalStage({ simplifyMotion }: { simplifyMotion: boolean }) {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[700px]">
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden rounded-full">
        <div className="hero-glow absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(139,92,246,.3)_0%,rgba(139,92,246,.14)_30%,rgba(93,48,180,.06)_50%,transparent_72%)] blur-[62px]" />
        <div className="hero-glow absolute -right-[4%] top-[12%] size-[38%] rounded-full bg-[radial-gradient(circle,rgba(0,229,255,.2),transparent_68%)] blur-[34px]" />
        <div className="hero-glow absolute bottom-[12%] left-[2%] size-[26%] rounded-full bg-[radial-gradient(circle,rgba(0,229,255,.15),transparent_70%)] blur-[28px]" />
        <motion.div initial={{ opacity: 0, scale: .75 }} animate={simplifyMotion ? { opacity: 1, scale: 1 } : { opacity: 1, scale: [1, 1.05, 1] }} transition={{ opacity: { duration: .6 }, scale: { duration: 11, repeat: Infinity, ease: "easeInOut" } }} className="hero-glow absolute inset-[12%] rounded-full bg-[radial-gradient(circle,rgba(0,217,255,.2),rgba(0,217,255,.055)_34%,transparent_70%)] blur-[35px]" />
        <div className="hero-glow absolute inset-[18%] rounded-full bg-[radial-gradient(circle,rgba(139,92,246,.22),rgba(0,229,255,.1)_45%,transparent_72%)] blur-[70px]" />
      </div>
      <div className="absolute inset-[1%] rounded-full border border-white/[.035]" />
      <motion.div animate={simplifyMotion ? undefined : { rotate: 360 }} transition={{ duration: 52, repeat: Infinity, ease: "linear" }} className="absolute inset-[6%] rounded-full border border-dashed border-accent/[.16] shadow-[inset_0_0_60px_rgba(0,217,255,.025)]">
        <span className="absolute left-1/2 top-[-2px] h-1 w-10 -translate-x-1/2 rounded-full bg-accent/65 shadow-[0_0_12px_rgba(0,217,255,.6)] blur-[.5px]" />
      </motion.div>
      <motion.div animate={simplifyMotion ? undefined : { rotate: -360 }} transition={{ duration: 76, repeat: Infinity, ease: "linear" }} className="absolute inset-[14%] rounded-full border border-white/[.075]">
        <span className="absolute bottom-[13%] right-[3%] h-px w-12 rotate-45 bg-gradient-to-r from-transparent to-electric/70" />
      </motion.div>
      <motion.div animate={simplifyMotion ? undefined : { rotate: 360, scaleX: [1, .96, 1] }} transition={{ rotate: { duration: 110, repeat: Infinity, ease: "linear" }, scaleX: { duration: 12, repeat: Infinity, ease: "easeInOut" } }} className="absolute inset-x-[12%] bottom-[17%] h-[25%] rounded-[50%] border border-accent/20 shadow-[0_0_30px_rgba(0,217,255,.08),inset_0_0_24px_rgba(122,92,255,.06)]" />
      <div className="absolute inset-[24%] rounded-full border border-white/[.045] before:absolute before:left-1/2 before:top-[-7px] before:h-[14px] before:w-px before:bg-accent/45 after:absolute after:bottom-[-7px] after:left-1/2 after:h-[14px] after:w-px after:bg-accent/30" />
      <div className="absolute right-[6%] top-[31%] h-px w-[18%] bg-gradient-to-r from-accent/50 to-transparent"><span className="absolute -top-3 right-0 text-[6px] tracking-[.2em] text-accent/40">X 2035.01</span></div>
      <div className="absolute bottom-[29%] left-[5%] h-[12%] w-px bg-gradient-to-b from-transparent via-electric/45 to-transparent"><span className="absolute -left-3 -top-4 text-[6px] tracking-[.18em] text-white/25">Y 042</span></div>
      <div className="absolute left-[3%] top-1/2 h-px w-[94%] bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
      <div className="absolute left-1/2 top-[3%] h-[94%] w-px bg-gradient-to-b from-transparent via-white/[.09] to-transparent" />
      <div className="absolute left-[5%] top-[22%] rounded-full border border-white/[.08] bg-black/20 px-3 py-2 text-[7px] uppercase tracking-[.25em] text-white/35 backdrop-blur-md">Optical system / 01</div>
      <div className="absolute bottom-[15%] right-[4%] flex items-center gap-2 text-[7px] uppercase tracking-[.22em] text-accent/60"><span className="size-1 rounded-full bg-accent shadow-[0_0_9px_#00d9ff]" />Signal stable</div>
      <div className="absolute inset-x-[-4%] top-[25%]">
        <MacBook simplifyMotion={simplifyMotion} />
      </div>
      <div className="absolute inset-x-[12%] bottom-[9%] z-10 h-[11%] rounded-[50%] border border-accent/25 bg-[radial-gradient(ellipse,rgba(0,217,255,.14),rgba(16,19,26,.85)_54%,rgba(6,7,10,.95)_72%)] shadow-[0_0_45px_rgba(0,217,255,.16),inset_0_1px_0_rgba(66,245,255,.3)]">
        <div className="absolute inset-x-[16%] top-1/2 h-px bg-gradient-to-r from-transparent via-accent/70 to-transparent" />
        <div className="absolute inset-[18%] rounded-[50%] border border-dashed border-white/10" />
      </div>
    </div>
  );
}

export function Hero() {
  const simplifyMotion = useMobilePerformance();
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const smoothX = useSpring(pointerX, { stiffness: 30, damping: 28 });
  const smoothY = useSpring(pointerY, { stiffness: 30, damping: 28 });
  const backgroundX = useTransform(smoothX, [-17, 17], [-4, 4]);
  const backgroundY = useTransform(smoothY, [-14, 14], [-3, 3]);
  const textX = useTransform(smoothX, [-17, 17], [-2, 2]);
  const logoX = useTransform(smoothX, [-17, 17], [-8, 8]);
  const logoY = useTransform(smoothY, [-14, 14], [-6, 6]);
  const haloX = useTransform(smoothX, [-17, 17], [-12, 12]);
  const haloY = useTransform(smoothY, [-14, 14], [-9, 9]);
  const macX = useTransform(smoothX, [-17, 17], [-14, 14]);
  const macY = useTransform(smoothY, [-14, 14], [-10, 10]);
  const { scrollY } = useScroll();
  const stageY = useTransform(scrollY, [0, 900], [0, 110]);

  useEffect(() => {
    if (simplifyMotion || !window.matchMedia("(pointer: fine)").matches) return;
    const move = (event: PointerEvent) => {
      pointerX.set((event.clientX / window.innerWidth - .5) * 34);
      pointerY.set((event.clientY / window.innerHeight - .5) * 28);
    };
    window.addEventListener("pointermove", move, { passive: true });
    return () => window.removeEventListener("pointermove", move);
  }, [pointerX, pointerY, simplifyMotion]);

  return (
    <section id="accueil" className="relative isolate flex min-h-[100svh] items-center overflow-hidden [contain:paint] pb-8 pt-24 sm:pb-12 sm:pt-28 lg:pb-20 lg:pt-32">
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div style={{ x: backgroundX, y: backgroundY }} className="absolute -inset-2 bg-[radial-gradient(ellipse_56%_64%_at_82%_48%,rgba(139,92,246,.19),transparent_68%),radial-gradient(ellipse_38%_48%_at_92%_38%,rgba(0,229,255,.12),transparent_66%),radial-gradient(ellipse_42%_52%_at_8%_54%,rgba(139,92,246,.1),transparent_72%),linear-gradient(125deg,#06070a_18%,#111321_58%,#06070a)] will-change-transform" />
        <motion.div style={{ x: haloX, y: haloY }} className="absolute -right-[calc(8%+150px)] top-[5%] size-[64vw] overflow-hidden rounded-full will-change-transform">
          <div className="hero-glow absolute inset-[4%] rounded-full bg-[radial-gradient(circle,rgba(0,217,255,.1),transparent_64%)] blur-2xl" />
          <div className="hero-glow absolute inset-[18%] translate-x-[8%] rounded-full bg-[radial-gradient(circle,rgba(66,245,255,.08),transparent_62%)] blur-[50px]" />
          <div className="hero-glow absolute inset-[20%] -translate-y-[8%] translate-x-[18%] rounded-full bg-[radial-gradient(circle,rgba(139,92,246,.24),transparent_66%)] blur-[70px]" />
        </motion.div>
      </div>
      <div className="pointer-events-none absolute left-[60%] top-[46%] z-[5] hidden aspect-[3/2] w-[clamp(900px,97vw,1590px)] -translate-x-1/2 -translate-y-1/2 overflow-hidden md:block lg:left-[73%]">
        <motion.div style={{ x: logoX, y: logoY }} animate={{ scale: [1, 1.018, 1], opacity: [.88, 1, .88] }} transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }} className="relative size-full will-change-transform">
          <div className="hero-glow absolute inset-[12%] rounded-full bg-[radial-gradient(circle,rgba(0,217,255,.13),rgba(122,92,255,.06)_42%,transparent_72%)] blur-[70px]" />
          <Image src="/logo.png" alt="" fill loading="lazy" quality={70} sizes="(max-width: 1024px) 72vw, 1180px" className="object-contain opacity-[.12] mix-blend-screen drop-shadow-[0_0_42px_rgba(0,217,255,.14)]" />
        </motion.div>
      </div>
      <div className="particles pointer-events-none absolute inset-0 opacity-30" />
      <div className="pointer-events-none absolute inset-y-0 right-[4%] w-[48%] opacity-35 [background-image:linear-gradient(90deg,rgba(0,217,255,.045)_1px,transparent_1px)] [background-size:96px_100%] [mask-image:linear-gradient(to_left,black,transparent)]" />
      <div className="pointer-events-none absolute inset-x-[5%] top-[20%] h-px bg-gradient-to-r from-transparent via-white/[.06] to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-accent/25 to-transparent" />

      <div className="container-wide relative grid items-center gap-6 lg:grid-cols-[1.02fr_.98fr]">
        <motion.div data-animate style={{ x: textX }} initial={false} animate={{ opacity: 1, y: 0, filter: "blur(0px)" }} transition={{ duration: .7, ease: "easeOut" }} className="relative z-30 py-10 will-change-transform">
          <div className="mb-7 flex items-center gap-4"><span className="size-1.5 rounded-full bg-accent shadow-[0_0_15px_#00d9ff]" /><span className="eyebrow">Independent digital atelier — France</span></div>
          <h1 className="display max-w-[740px] text-[clamp(45px,6vw,91px)] font-medium leading-[.82] tracking-[-.058em] text-paper">
            Le digital,<br /><span className="bg-gradient-to-r from-accent via-[#42f5ff] via-[58%] to-[#8b6cff] bg-clip-text text-transparent drop-shadow-[0_0_26px_rgba(122,92,255,.12)]">en avance</span><br />sur son temps.
          </h1>
          <p className="mt-7 max-w-[620px] text-[15px] leading-7 text-muted sm:text-[17px] sm:leading-8">Nous concevons des identités et des expériences digitales haute précision — pensées pour captiver aujourd’hui et rester pertinentes demain.</p>
          <div className="mt-11 flex flex-col gap-3 sm:flex-row"><Button href="#concepts">Explorer nos créations</Button><Button href="#contact" variant="secondary">Initier un projet</Button></div>
          <div className="mt-14 flex items-center gap-5 text-[9px] uppercase tracking-[.2em] text-white/35"><span>Avize / Grand Est</span><span className="h-px w-12 bg-white/15" /><span>Projets à distance</span></div>
        </motion.div>
        <motion.div style={{ y: stageY }} className="relative z-10 h-[250px] sm:h-[410px] lg:h-auto">
          <div className="origin-top scale-[.72] sm:scale-[.88] lg:scale-100">
            <motion.div style={{ x: macX, y: macY }} className="will-change-transform"><OpticalStage simplifyMotion={simplifyMotion} /></motion.div>
          </div>
        </motion.div>
      </div>
      <div className="absolute bottom-7 right-8 hidden items-center gap-3 text-[9px] uppercase tracking-[.24em] text-white/35 lg:flex"><span>Découvrir le studio</span><ArrowDownRight size={14} className="text-accent" /></div>
    </section>
  );
}
