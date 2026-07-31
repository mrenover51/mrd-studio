"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const [mode, setMode] = useState<"idle" | "interactive" | "cta">("idle");
  const modeRef = useRef(mode);
  const x = useMotionValue(-40);
  const y = useMotionValue(-40);
  const spring = { damping: 28, stiffness: 420, mass: 0.3 };
  const smoothX = useSpring(x, spring);
  const smoothY = useSpring(y, spring);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    const move = (event: MouseEvent) => {
      x.set(event.clientX);
      y.set(event.clientY);
      const target = event.target as HTMLElement;
      const nextMode = target.closest(".future-button") ? "cta" : target.closest("a, button") ? "interactive" : "idle";
      if (nextMode !== modeRef.current) {
        modeRef.current = nextMode;
        setMode(nextMode);
      }
    };
    window.addEventListener("mousemove", move, { passive: true });
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[100] hidden size-2 rounded-full border border-accent/80 bg-accent/25 shadow-[0_0_16px_rgba(0,217,255,.45)] will-change-transform md:block"
      style={{ x: smoothX, y: smoothY, translateX: "-50%", translateY: "-50%" }}
      animate={{ scale: mode === "cta" ? 4.5 : mode === "interactive" ? 3.5 : 1, opacity: mode === "idle" ? 1 : .72 }}
      transition={{ duration: .3, ease: [0.16, 1, 0.3, 1] }}
    />
  );
}
