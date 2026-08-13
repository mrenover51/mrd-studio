import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import type { Project } from "@/lib/realisations-data";

export function ProjectShowcase({ projects }: { projects: readonly Project[] }) {
  return (
    <div className="mt-14 space-y-16 sm:mt-20 sm:space-y-24">
      {projects.map((project, index) => {
        const reverse = index % 2 === 1;
        return (
          <Reveal key={project.slug}>
            <article className="group grid items-center gap-8 border-t border-white/[.09] pt-8 lg:grid-cols-[1.15fr_.85fr] lg:gap-14 lg:pt-12">
              <div className={`relative ${reverse ? "lg:order-2" : ""}`}>
                <div className="pointer-events-none absolute -inset-5 -z-10 bg-[radial-gradient(circle_at_50%_50%,rgba(0,229,255,.08),rgba(139,92,246,.04)_42%,transparent_72%)]" />
                <div className="overflow-hidden rounded-[22px] border border-white/[.1] bg-[#0b0e15] p-2 shadow-[0_28px_80px_rgba(0,0,0,.38)] sm:p-3">
                  <div className="flex h-7 items-center gap-1.5 border-b border-white/[.07] px-2">
                    <span className="size-1.5 rounded-full bg-accent/55" />
                    <span className="size-1.5 rounded-full bg-electric/45" />
                    <span className="ml-2 truncate text-[7px] tracking-[.08em] text-white/25">{project.url.replace("https://www.", "")}</span>
                  </div>
                  <div className="relative aspect-[16/10] overflow-hidden rounded-b-[14px] bg-[#080a0f]">
                    <Image
                      src={project.image}
                      alt={project.imageAlt}
                      fill
                      sizes="(max-width: 1023px) calc(100vw - 56px), 56vw"
                      className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.015]"
                    />
                    <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/[.035]" />
                  </div>
                </div>
              </div>

              <div className={reverse ? "lg:order-1" : ""}>
                <div className="flex items-center gap-4 text-[9px] uppercase tracking-[.2em] text-white/35">
                  <span className="text-accent">0{index + 1}</span>
                  <span className="h-px w-9 bg-white/15" />
                  <span>{project.category}</span>
                </div>
                <h3 className="display mt-7 text-[clamp(38px,5vw,68px)] leading-[.9] tracking-[-.05em]">{project.name}</h3>
                <p className="mt-5 text-[10px] uppercase tracking-[.16em] text-electric">{project.activity}</p>
                <p className="mt-7 max-w-xl text-sm leading-7 text-muted sm:text-[15px] sm:leading-8">{project.positioning}</p>
                {project.technologies.length > 0 && (
                  <div className="mt-7 flex flex-wrap gap-2" aria-label="Technologies utilisées">
                    {project.technologies.map((technology) => <span key={technology} className="rounded-full border border-white/10 px-3 py-1.5 text-[9px] text-white/55">{technology}</span>)}
                  </div>
                )}
                <div className="mt-9 flex flex-wrap items-center gap-5">
                  <Link href={`/realisations/${project.slug}`} className="inline-flex min-h-11 items-center gap-2 rounded-full border border-accent/35 bg-accent/[.07] px-5 text-[9px] uppercase tracking-[.14em] text-paper transition-[border-color,background-color] duration-300 hover:border-accent/65 hover:bg-accent/[.11]">
                    Découvrir le projet <ArrowUpRight size={13} />
                  </Link>
                  <a href={project.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[9px] uppercase tracking-[.14em] text-white/45 transition-colors duration-300 hover:text-accent">
                    Visiter le site <ArrowUpRight size={12} />
                  </a>
                </div>
              </div>
            </article>
          </Reveal>
        );
      })}
    </div>
  );
}
