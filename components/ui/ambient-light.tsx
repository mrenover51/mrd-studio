"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function AmbientLight() {
  const x = useMotionValue(-500);
  const y = useMotionValue(-500);
  const smoothX = useSpring(x, { stiffness: 22, damping: 32, mass: 2.4 });
  const smoothY = useSpring(y, { stiffness: 22, damping: 32, mass: 2.4 });

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    const move = (event: PointerEvent) => {
      x.set(event.clientX - 350);
      y.set(event.clientY - 350);
    };
    window.addEventListener("pointermove", move, { passive: true });
    return () => window.removeEventListener("pointermove", move);
  }, [x, y]);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-[1] hidden overflow-hidden lg:block">
      <motion.div
        className="absolute left-0 top-0 size-[700px] rounded-full bg-[radial-gradient(circle,rgba(0,217,255,.075),transparent_68%)] blur-md will-change-transform"
        style={{ x: smoothX, y: smoothY }}
      />
      <div className="absolute -right-[22vw] top-[18vh] size-[66vw] rounded-full bg-[radial-gradient(circle,rgba(139,92,246,.065),rgba(79,70,229,.025)_42%,transparent_70%)]" />
      <div className="absolute -left-[24vw] bottom-[-34vw] size-[62vw] rounded-full bg-[radial-gradient(circle,rgba(0,229,255,.035),transparent_69%)]" />
    </div>
  );
}
