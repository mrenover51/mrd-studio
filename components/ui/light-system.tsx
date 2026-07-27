"use client";

import { useEffect } from "react";

export function LightSystem() {
  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;

    let frame = 0;
    let clientX = window.innerWidth / 2;
    let clientY = window.innerHeight / 2;
    let activeSurface: HTMLElement | null = null;

    const render = () => {
      frame = 0;
      const root = document.documentElement;
      root.style.setProperty("--light-x", `${clientX}px`);
      root.style.setProperty("--light-y", `${clientY}px`);
      root.style.setProperty("--light-nx", `${clientX / window.innerWidth}`);
      root.style.setProperty("--light-ny", `${clientY / window.innerHeight}`);

      if (activeSurface) {
        const rect = activeSurface.getBoundingClientRect();
        activeSurface.style.setProperty("--surface-x", `${clientX - rect.left}px`);
        activeSurface.style.setProperty("--surface-y", `${clientY - rect.top}px`);
        activeSurface.style.setProperty("--button-x", `${clientX - rect.left}px`);
        activeSurface.style.setProperty("--button-y", `${clientY - rect.top}px`);
      }
    };

    const move = (event: PointerEvent) => {
      clientX = event.clientX;
      clientY = event.clientY;
      const target = event.target as HTMLElement;
      activeSurface = target.closest<HTMLElement>(".premium-card, .future-button, [data-light-surface]");
      if (!frame) frame = requestAnimationFrame(render);
    };

    window.addEventListener("pointermove", move, { passive: true });
    return () => {
      window.removeEventListener("pointermove", move);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return <div aria-hidden className="intelligent-light pointer-events-none fixed inset-0 z-[2] hidden lg:block" />;
}
