"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedSection } from "@/components/animations/AnimatedSection";
import { ArrowRight, Play, X } from "lucide-react";

const projects = [
  {
    title: "The Ladder",
    category: "Animation Movie",
    span: "md:col-span-4 md:row-span-2",
    aspect: "aspect-video",
    gradient: "from-blue-900/30 via-indigo-900/20 to-transparent",
    accent: "bg-blue-500/20",
    video: "/videos/The_Ladder_Completed.mp4",
  },
  {
    title: "FIFA Celebration",
    category: "Video Editing",
    span: "md:col-span-2 md:row-span-3",
    aspect: "aspect-[9/16]",
    gradient: "from-emerald-900/30 via-teal-900/20 to-transparent",
    accent: "bg-emerald-500/20",
    video: "/videos/Reel_Edit_01.mp4",
  },
  {
    title: "Vaazha 2",
    category: "Motion Poster",
    span: "md:col-span-2 md:row-span-3",
    aspect: "aspect-[9/16]",
    gradient: "from-orange-900/30 via-red-900/20 to-transparent",
    accent: "bg-orange-500/20",
    video: "/videos/Compressed new.mp4",
  },
  {
    title: "SAAS Visualisation",
    category: "Product Visualisation",
    span: "md:col-span-4 md:row-span-2",
    aspect: "aspect-video",
    gradient: "from-purple-900/30 via-blue-900/20 to-transparent",
    accent: "bg-purple-500/20",
    video: "/videos/laptop.mp4",
  },
];

export function Works() {
  const [activeProject, setActiveProject] = useState<typeof projects[0] | null>(null);

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
                onClick={() => setActiveProject(project)}
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

                {/* Play button overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 z-10">
                  <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white scale-75 group-hover:scale-100 transition-all duration-500">
                    <Play size={24} className="fill-white translate-x-[2px]" />
                  </div>
                </div>

                {/* Desktop hover content — hidden on mobile */}
                <div className="hidden md:flex relative z-10 p-6 md:p-8 h-full flex-col justify-end">
                  <div className="translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                    <p className="text-sm text-white/50 mb-1 font-medium tracking-wide uppercase">
                      {project.category}
                    </p>
                    <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">
                      {project.title}
                    </h3>
                  </div>
                </div>

                {/* Always-visible content for mobile */}
                <div className="flex md:hidden relative z-10 p-5 h-full flex-col justify-end">
                  <p className="text-xs text-white/40 mb-1 uppercase tracking-wider">
                    {project.category}
                  </p>
                  <h3 className="text-base font-bold text-white tracking-tight">
                    {project.title}
                  </h3>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Centered View All Button */}
        <div className="mt-16 flex justify-center">
          <Link
            href="/works"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-bold rounded-full text-sm hover:scale-105 hover:bg-zinc-200 transition-all duration-300 shadow-[0_8px_30px_rgba(255,255,255,0.15)] hover:shadow-[0_8px_30px_rgba(255,255,255,0.3)] cursor-pointer"
          >
            View All Works
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

      {/* Video Modal Player */}
      <AnimatePresence>
        {activeProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 md:p-10"
            onClick={() => setActiveProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className={`relative w-full overflow-hidden bg-zinc-900 border border-white/10 shadow-2xl rounded-2xl ${
                activeProject.aspect === "aspect-[9/16]"
                  ? "max-w-[420px] aspect-[9/16] max-h-[85vh]"
                  : "max-w-5xl aspect-video"
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActiveProject(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/50 border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-black/80 transition-all duration-300 cursor-pointer"
              >
                <X size={20} />
              </button>
              <video
                src={activeProject.video}
                className="w-full h-full object-contain"
                controls
                autoPlay
                playsInline
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
