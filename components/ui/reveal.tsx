"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      data-reveal
      className={cn(className)}
      initial={false}
      whileInView={{ opacity: [.78, 1], y: [24, 0] }}
      viewport={{ once: true, margin: "-40px 0px -40px" }}
      transition={{ duration: .6, delay: Math.min(delay, .1), ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
