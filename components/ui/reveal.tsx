"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useMobilePerformance } from "@/hooks/use-mobile-performance";

export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const simplifyMotion = useMobilePerformance();

  return (
    <motion.div
      className={cn(className)}
      initial={simplifyMotion ? { opacity: 0, y: 12 } : { opacity: 0, y: 46, scale: .988, filter: "blur(10px)" }}
      whileInView={simplifyMotion ? { opacity: 1, y: 0 } : { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
      viewport={{ once: true, margin: simplifyMotion ? "80px 0px" : "-70px 0px -70px" }}
      transition={{ duration: simplifyMotion ? .32 : 1.35, delay: simplifyMotion ? 0 : delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
