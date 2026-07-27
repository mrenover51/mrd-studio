"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const [active, setActive] = useState(false);
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
      setActive(Boolean(target.closest("a, button")));
    };
    window.addEventListener("mousemove", move, { passive: true });
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[100] hidden rounded-full border border-accent/80 bg-accent/25 shadow-[0_0_16px_rgba(0,217,255,.45)] md:block"
      style={{ x: smoothX, y: smoothY, translateX: "-50%", translateY: "-50%" }}
      animate={{ width: active ? 38 : 8, height: active ? 38 : 8, opacity: active ? .78 : 1, boxShadow: active ? "0 0 24px rgba(122,92,255,.45)" : "0 0 14px rgba(0,217,255,.5)" }}
      transition={{ duration: .55, ease: [0.16, 1, 0.3, 1] }}
    />
  );
}
