"use client";

import { AnimatedSection } from "@/components/animations/AnimatedSection";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    title: "Cinematic Brand Film",
    category: "Video Production",
    span: "md:col-span-4 md:row-span-2",
    aspect: "aspect-video",
    gradient: "from-purple-900/30 via-blue-900/20 to-transparent",
    accent: "bg-purple-500/20",
  },
  {
    title: "Product Animation",
    category: "3D / Animation",
    span: "md:col-span-2 md:row-span-3",
    aspect: "aspect-[9/16]",
    gradient: "from-emerald-900/30 via-teal-900/20 to-transparent",
    accent: "bg-emerald-500/20",
  },
  {
    title: "Motion Graphics Reel",
    category: "Motion Design",
    span: "md:col-span-2 md:row-span-3",
    aspect: "aspect-[9/16]",
    gradient: "from-orange-900/30 via-red-900/20 to-transparent",
    accent: "bg-orange-500/20",
  },
  {
    title: "Social Media Campaign",
    category: "Content Creation",
    span: "md:col-span-4 md:row-span-2",
    aspect: "aspect-video",
    gradient: "from-blue-900/30 via-indigo-900/20 to-transparent",
    accent: "bg-blue-500/20",
  },
];

export function Works() {
  return (
    <section id="works" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter text-white">
            Selected Works
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
          {projects.map((project, index) => (
            <AnimatedSection
              key={project.title}
              delay={index * 0.15}
              className={`${project.span}`}
            >
              <div
                className={`group relative overflow-hidden rounded-2xl bg-zinc-900 border border-white/[0.06] ${project.aspect} min-h-[200px] cursor-pointer`}
              >
                {/* Stylized placeholder background */}
                <div className="absolute inset-0">
                  {/* Abstract gradient bg */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`} />
                  <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 ${project.accent} rounded-full blur-3xl opacity-30 group-hover:opacity-50 transition-opacity duration-700`} />
                  {/* Subtle pattern */}
                  <div
                    className="absolute inset-0 opacity-[0.04]"
                    style={{
                      backgroundImage:
                        "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
                      backgroundSize: "24px 24px",
                    }}
                  />
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />

                {/* Desktop hover content — hidden on mobile */}
                <div className="hidden md:flex relative z-10 p-6 md:p-8 h-full flex-col justify-end">
                  <div className="translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                    <p className="text-sm text-white/50 mb-1 font-medium tracking-wide uppercase">
                      {project.category}
                    </p>
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-4 tracking-tight">
                      {project.title}
                    </h3>
                    <span className="inline-flex items-center gap-2 px-5 py-2 bg-white text-black font-bold rounded-full text-sm hover:scale-105 transition-transform">
                      View Project <ArrowRight size={16} />
                    </span>
                  </div>
                </div>

                {/* Always-visible content for mobile */}
                <div className="flex md:hidden relative z-10 p-5 h-full flex-col justify-end">
                  <p className="text-xs text-white/40 mb-1 uppercase tracking-wider">
                    {project.category}
                  </p>
                  <h3 className="text-base font-bold text-white tracking-tight mb-3">
                    {project.title}
                  </h3>
                  <span className="inline-flex items-center gap-2 px-4 py-2 bg-white text-black font-bold rounded-full text-xs w-fit">
                    View Project <ArrowRight size={14} />
                  </span>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
