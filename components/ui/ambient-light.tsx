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
        animate={{ scale: [1, 1.09, 1], opacity: [.65, 1, .65] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -right-[18vw] top-[28vh] size-[58vw] rounded-full bg-[radial-gradient(circle,rgba(122,92,255,.05),transparent_67%)] blur-2xl"
        animate={{ x: [0, -45, 0], y: [0, 28, 0], scale: [1, 1.12, 1] }}
        transition={{ duration: 29, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -left-[16vw] bottom-[-30vw] size-[52vw] rounded-full border border-accent/[.035]"
        animate={{ scale: [1, 1.08, 1], opacity: [.35, .7, .35] }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut", delay: 3 }}
      />
    </div>
  );
}
