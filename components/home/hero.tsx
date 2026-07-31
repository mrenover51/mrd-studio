"use client";

import { useEffect } from "react";
import {
  type MotionValue,
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

function MacBook({ simplifyMotion, reflectionX }: { simplifyMotion: boolean; reflectionX: MotionValue<number> }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18, scale: .985, rotateY: -4 }}
      animate={{ opacity: 1, y: 0, scale: 1, rotateY: -4, rotateX: 2 }}
      transition={{
        duration: simplifyMotion ? .01 : .75,
        delay: simplifyMotion ? 0 : .08,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="relative z-20 mx-auto w-[88%] [perspective:1800px] [transform-style:preserve-3d]"
    >
      <div className="relative overflow-hidden rounded-[18px] border border-accent/25 bg-gradient-to-br from-[#718096] via-[#171b24] to-[#343b4b] p-[6px] shadow-[0_42px_72px_rgba(0,0,0,.58),0_18px_46px_rgba(79,70,229,.13),0_8px_32px_rgba(0,229,255,.09),inset_0_1px_1px_rgba(255,255,255,.55)]">
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
            <div className="absolute inset-[35%] rounded-full bg-[radial-gradient(circle_at_32%_28%,#dffcff,#00e5ff_18%,#8b5cf6_44%,#070912_72%)] shadow-[0_0_24px_rgba(0,229,255,.2),0_0_38px_rgba(139,92,246,.12)]" />
          </div>
          <motion.div style={{ x: reflectionX }} className="pointer-events-none absolute inset-y-[-22%] right-[18%] w-[14%] -skew-x-12 bg-gradient-to-r from-transparent via-white/[.07] to-transparent opacity-60 will-change-transform" />
        </div>
      </div>
      <div className="relative mx-auto h-[14px] w-[112%] -translate-x-[5.4%] rounded-b-[65%] border-t border-white/30 bg-gradient-to-b from-[#999] via-[#414141] to-[#111] shadow-[0_20px_28px_rgba(0,0,0,.8)]">
        <span className="absolute left-1/2 top-0 h-[3px] w-[15%] -translate-x-1/2 rounded-b-full bg-[#282828]" />
      </div>
      <div className="mx-auto mt-7 h-5 w-[74%] rounded-[50%] bg-black/90 blur-xl" />
    </motion.div>
  );
}

function OpticalStage({ simplifyMotion, reflectionX }: { simplifyMotion: boolean; reflectionX: MotionValue<number> }) {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[700px]">
      <div className="absolute inset-x-[-4%] top-[25%]">
        <MacBook simplifyMotion={simplifyMotion} reflectionX={reflectionX} />
      </div>
      <div className="absolute inset-x-[12%] bottom-[9%] z-10 h-[11%] rounded-[50%] border border-accent/25 bg-[radial-gradient(ellipse,rgba(223,252,255,.16),rgba(0,229,255,.13)_22%,rgba(139,92,246,.11)_48%,rgba(6,7,10,.96)_74%)] shadow-[0_0_32px_rgba(0,229,255,.14),0_8px_48px_rgba(79,70,229,.14),inset_0_1px_0_rgba(255,255,255,.28)]">
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
  const backgroundX = useTransform(smoothX, [-17, 17], [-1.5, 1.5]);
  const backgroundY = useTransform(smoothY, [-14, 14], [-1, 1]);
  const logoX = useTransform(smoothX, [-17, 17], [-3, 3]);
  const logoY = useTransform(smoothY, [-14, 14], [-2, 2]);
  const haloX = useTransform(smoothX, [-17, 17], [-5, 5]);
  const haloY = useTransform(smoothY, [-14, 14], [-4, 4]);
  const haloScale = useTransform(smoothX, [-17, 8, 17], [1, 1.05, 1.02]);
  const haloOpacity = useTransform(smoothX, [-17, 8, 17], [.94, 1, .97]);
  const macX = useTransform(smoothX, [-17, 17], [-5, 5]);
  const macY = useTransform(smoothY, [-14, 14], [-4, 4]);
  const macRotateY = useTransform(smoothX, [-17, 17], [-2.5, 2.5]);
  const macRotateX = useTransform(smoothY, [-14, 14], [2, -2]);
  const reflectionX = useTransform(smoothX, [-17, 17], [-5, 5]);
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
    <section id="accueil" className="relative isolate flex min-h-[75svh] items-center overflow-hidden [contain:paint] pb-4 pt-24 sm:min-h-[100svh] sm:pb-12 sm:pt-28 lg:pb-20 lg:pt-32">
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div style={{ x: backgroundX, y: backgroundY }} className="absolute -inset-2 bg-[radial-gradient(ellipse_56%_64%_at_82%_48%,rgba(139,92,246,.19),transparent_68%),radial-gradient(ellipse_38%_48%_at_92%_38%,rgba(0,229,255,.12),transparent_66%),radial-gradient(ellipse_42%_52%_at_8%_54%,rgba(139,92,246,.1),transparent_72%),linear-gradient(125deg,#06070a_18%,#111321_58%,#06070a)] will-change-transform" />
        <motion.div style={{ x: haloX, y: haloY, scale: haloScale, opacity: haloOpacity }} className="absolute -right-[8%] top-[8%] size-[min(78vw,980px)] overflow-hidden rounded-full will-change-transform">
          <div className="hero-glow absolute inset-[2%] rounded-full bg-[radial-gradient(ellipse_at_42%_58%,rgba(0,229,255,.19),rgba(0,229,255,.055)_38%,transparent_72%)] blur-[48px]" />
          <div className="hero-glow absolute inset-[10%] translate-x-[14%] -translate-y-[8%] rounded-full bg-[radial-gradient(ellipse_at_50%_50%,rgba(139,92,246,.24),rgba(79,70,229,.07)_42%,transparent_72%)] blur-[64px]" />
        </motion.div>
      </div>
      <div className="pointer-events-none absolute left-[60%] top-[46%] z-[5] hidden aspect-[3/2] w-[clamp(900px,97vw,1590px)] -translate-x-1/2 -translate-y-1/2 overflow-hidden md:block lg:left-[73%]">
        <motion.div initial={{ opacity: .7, scale: 1.05 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .6, ease: [0.16, 1, 0.3, 1] }} style={{ x: logoX, y: logoY }} className="relative size-full will-change-transform">
          <Image src="/logo.png" alt="" fill loading="lazy" quality={70} sizes="(max-width: 1024px) 72vw, 1180px" className="object-contain opacity-[.12] mix-blend-screen drop-shadow-[0_0_42px_rgba(0,217,255,.14)]" />
        </motion.div>
      </div>
      <div className="particles pointer-events-none absolute inset-0 opacity-30" />
      <div className="pointer-events-none absolute inset-y-0 right-[4%] w-[48%] opacity-35 [background-image:linear-gradient(90deg,rgba(0,217,255,.045)_1px,transparent_1px)] [background-size:96px_100%] [mask-image:linear-gradient(to_left,black,transparent)]" />
      <div className="pointer-events-none absolute inset-x-[5%] top-[20%] h-px bg-gradient-to-r from-transparent via-white/[.06] to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-accent/25 to-transparent" />

      <div className="container-wide relative grid items-center gap-0 lg:grid-cols-[1.02fr_.98fr] lg:grid-rows-[auto_auto] lg:gap-x-6">
        <motion.div data-animate initial={false} animate={{ opacity: 1, y: 0, filter: "blur(0px)" }} transition={{ duration: .65, ease: "easeOut" }} className="relative z-30 py-3 sm:py-5 lg:col-start-1 lg:row-start-1 lg:self-end lg:pb-0 lg:pt-10">
          <div className="relative mb-6 inline-flex max-w-full items-center gap-2.5 overflow-hidden rounded-full border border-white/[.09] bg-[#0d1018]/78 px-3.5 py-2 text-[8px] tracking-[.08em] text-white/65 shadow-[inset_0_1px_0_rgba(255,255,255,.08),0_8px_24px_rgba(0,0,0,.14)] sm:mb-7 sm:px-4 sm:text-[9px] sm:backdrop-blur-[14px]"><span aria-hidden className="pointer-events-none absolute inset-x-[12%] top-0 h-px bg-gradient-to-r from-transparent via-white/35 to-transparent" />✨ <span className="relative">Studio créatif premium • Sites web • SEO • Identité digitale</span></div>
          <motion.h1
            initial={{ opacity: .82, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .6, delay: .08, ease: [0.16, 1, 0.3, 1] }}
            className="display max-w-[920px] font-medium tracking-[-.058em] text-paper"
          >
            <span className="block text-[clamp(30px,8vw,64px)] leading-[1.05] tracking-[-.045em]">Des sites <span className="text-[#42e9ff]">web</span> qui</span>
            <span className="relative mt-2 block overflow-hidden bg-gradient-to-r from-[#00e5ff] via-[#42dff5] via-[38%] to-[#8b5cf6] bg-clip-text text-[clamp(43px,12.4vw,108px)] leading-[.88] tracking-[-.065em] text-transparent drop-shadow-[0_0_24px_rgba(139,92,246,.13)] sm:mt-3">
              MARQUENT LES ESPRITS.
              {!simplifyMotion && <motion.span aria-hidden className="pointer-events-none absolute inset-y-0 left-0 w-[18%] -skew-x-12 bg-gradient-to-r from-transparent via-white/[.055] to-transparent mix-blend-screen will-change-transform" animate={{ x: ["-140%", "680%"] }} transition={{ duration: 2.2, repeat: Infinity, repeatDelay: 7.2, ease: "easeInOut" }} />}
            </span>
          </motion.h1>
        </motion.div>
        <motion.div style={{ y: simplifyMotion ? 0 : stageY }} className="relative z-10 h-[180px] sm:h-[340px] lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:h-auto">
          <div className="origin-top scale-[.64] sm:scale-[.88] lg:scale-100">
            <motion.div style={{ x: macX, y: macY, rotateX: macRotateX, rotateY: macRotateY, transformPerspective: 1400 }} className="will-change-transform"><OpticalStage simplifyMotion={simplifyMotion} reflectionX={reflectionX} /></motion.div>
          </div>
        </motion.div>
        <div className="relative z-30 lg:col-start-1 lg:row-start-2 lg:self-start lg:pb-10">
          <p className="mt-3 max-w-[590px] text-[14px] leading-6 text-muted sm:mt-6 sm:text-[16px] sm:leading-8">Nous concevons des sites internet haut de gamme qui associent design, performance et stratégie digitale pour transformer vos visiteurs en clients et valoriser durablement votre entreprise.</p>
          <div className="mt-5 flex flex-col gap-3 sm:mt-8 sm:flex-row"><Button href="#contact" className="shadow-[0_12px_36px_rgba(0,229,255,.14),0_10px_42px_rgba(139,92,246,.15)] hover:scale-[1.02] hover:shadow-[0_16px_44px_rgba(0,229,255,.17),0_14px_48px_rgba(139,92,246,.2)]">Parler de votre projet</Button><Button href="#concepts" variant="secondary" className="border-white/10 bg-transparent">Découvrir nos réalisations</Button></div>
          <div className="mt-7 flex items-center gap-5 text-[9px] uppercase tracking-[.2em] text-white/50 sm:mt-10"><span>Avize / Grand Est</span><span className="h-px w-12 bg-white/20" /><span>Projets à distance</span></div>
        </div>
      </div>
      <div className="absolute bottom-7 right-8 hidden items-center gap-3 text-[9px] uppercase tracking-[.24em] text-white/35 lg:flex"><span>Découvrir le studio</span><ArrowDownRight size={14} className="text-accent" /></div>
    </section>
  );
}
