"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X } from "lucide-react";

const categories = [
  "All",
  "Video Editing",
  "Animation Movie",
  "Motion Poster",
  "Product Visualisation",
];

const projectsByCategory: Record<
  string,
  Array<{
    title: string;
    category: string;
    span: string;
    aspect: string;
    gradient: string;
    accent: string;
    video: string;
  }>
> = {
  All: [
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
  ],
  "Video Editing": [
    {
      title: "School Documentary",
      category: "Video Editing",
      span: "md:col-span-4 md:row-span-2",
      aspect: "aspect-video",
      gradient: "from-emerald-900/30 via-teal-900/20 to-transparent",
      accent: "bg-emerald-500/20",
      video: "/videos/PTMHSS school .mp4",
    },
    {
      title: "FIFA Celebration",
      category: "Video Editing",
      span: "md:col-span-2 md:row-span-3",
      aspect: "aspect-[9/16]",
      gradient: "from-blue-900/30 via-indigo-900/20 to-transparent",
      accent: "bg-blue-500/20",
      video: "/videos/Reel_Edit_01.mp4",
    },
    {
      title: "School Event Highlights",
      category: "Video Editing",
      span: "md:col-span-2 md:row-span-3",
      aspect: "aspect-[9/16]",
      gradient: "from-purple-900/30 via-pink-900/20 to-transparent",
      accent: "bg-purple-500/20",
      video: "/videos/PTMHSS Completed.mp4",
    },
    {
      title: "Save the Date",
      category: "Video Editing",
      span: "md:col-span-4 md:row-span-2",
      aspect: "aspect-video",
      gradient: "from-orange-900/30 via-red-900/20 to-transparent",
      accent: "bg-orange-500/20",
      video: "/videos/Save the date.mp4",
    },
  ],
  "Animation Movie": [
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
      title: "Character Reel",
      category: "Animation Movie",
      span: "md:col-span-2 md:row-span-3",
      aspect: "aspect-[9/16]",
      gradient: "from-emerald-900/30 via-teal-900/20 to-transparent",
      accent: "bg-emerald-500/20",
      video: "/videos/Reel_Edit_01.mp4",
    },
    {
      title: "Vaazha Animation",
      category: "Animation Movie",
      span: "md:col-span-2 md:row-span-3",
      aspect: "aspect-[9/16]",
      gradient: "from-orange-900/30 via-red-900/20 to-transparent",
      accent: "bg-orange-500/20",
      video: "/videos/Compressed new.mp4",
    },
    {
      title: "Building VFX Breakdown",
      category: "Animation Movie",
      span: "md:col-span-4 md:row-span-2",
      aspect: "aspect-video",
      gradient: "from-purple-900/30 via-blue-900/20 to-transparent",
      accent: "bg-purple-500/20",
      video: "/videos/Building VFX.mp4",
    },
  ],
  "Motion Poster": [
    {
      title: "The Ladder Teaser",
      category: "Motion Poster",
      span: "md:col-span-4 md:row-span-2",
      aspect: "aspect-video",
      gradient: "from-purple-900/30 via-blue-900/20 to-transparent",
      accent: "bg-purple-500/20",
      video: "/videos/The_Ladder_Completed.mp4",
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
      title: "FIFA Poster Edit",
      category: "Motion Poster",
      span: "md:col-span-2 md:row-span-3",
      aspect: "aspect-[9/16]",
      gradient: "from-emerald-900/30 via-teal-900/20 to-transparent",
      accent: "bg-emerald-500/20",
      video: "/videos/Reel_Edit_01.mp4",
    },
    {
      title: "SAAS Poster Visual",
      category: "Motion Poster",
      span: "md:col-span-4 md:row-span-2",
      aspect: "aspect-video",
      gradient: "from-blue-900/30 via-indigo-900/20 to-transparent",
      accent: "bg-blue-500/20",
      video: "/videos/laptop.mp4",
    },
  ],
  "Product Visualisation": [
    {
      title: "SAAS Visualisation",
      category: "Product Visualisation",
      span: "md:col-span-4 md:row-span-2",
      aspect: "aspect-video",
      gradient: "from-purple-900/30 via-blue-900/20 to-transparent",
      accent: "bg-purple-500/20",
      video: "/videos/laptop.mp4",
    },
    {
      title: "Visualization 02",
      category: "Product Visualisation",
      span: "md:col-span-2 md:row-span-3",
      aspect: "aspect-[9/16]",
      gradient: "from-emerald-900/30 via-teal-900/20 to-transparent",
      accent: "bg-emerald-500/20",
      video: "/videos/Reel_Edit_01.mp4",
    },
    {
      title: "Visualization 05",
      category: "Product Visualisation",
      span: "md:col-span-2 md:row-span-3",
      aspect: "aspect-[9/16]",
      gradient: "from-orange-900/30 via-red-900/20 to-transparent",
      accent: "bg-orange-500/20",
      video: "/videos/Compressed new.mp4",
    },
    {
      title: "Architectural Showcase",
      category: "Product Visualisation",
      span: "md:col-span-4 md:row-span-2",
      aspect: "aspect-video",
      gradient: "from-blue-900/30 via-indigo-900/20 to-transparent",
      accent: "bg-blue-500/20",
      video: "/videos/Visualization_02.mov",
    },
  ],
};

export default function WorksPage() {
  const [activeTab, setActiveTab] = useState("All");
  const [activeProject, setActiveProject] = useState<
    (typeof projectsByCategory)["All"][0] | null
  >(null);

  const displayProjects = projectsByCategory[activeTab] || projectsByCategory["All"];

  return (
    <div className="min-h-screen bg-black text-white pt-32 pb-24 relative overflow-hidden">
      {/* Background glowing decorations */}
      <div className="absolute top-1/4 left-[-10%] w-[500px] h-[500px] rounded-full bg-blue-500/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-[-10%] w-[500px] h-[500px] rounded-full bg-purple-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Heading (Centered) */}
        <div className="mb-16 text-center">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-6">
            All Works
          </h1>
          <p className="text-white/50 text-lg max-w-2xl leading-relaxed mx-auto">
            Explore our curated showcase of video productions, animations, motion posters, and 3D visualizations crafted with precision and creativity.
          </p>
        </div>

        {/* Tabs Filter (Centered) */}
        <div className="flex flex-wrap justify-center pb-4 mb-12 gap-3 border-b border-white/5">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 whitespace-nowrap cursor-pointer ${
                activeTab === category
                  ? "bg-white text-black shadow-[0_4px_20px_rgba(255,255,255,0.15)]"
                  : "bg-white/5 text-white/60 hover:text-white hover:bg-white/10 border border-white/[0.03]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Works Grid (Matching homepage layout) */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
          <AnimatePresence mode="wait">
            {displayProjects.map((project, index) => (
              <motion.div
                key={`${activeTab}-${project.title}-${index}`}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                className={`${project.span}`}
              >
                <div
                  onClick={() => setActiveProject(project)}
                  className={`group relative overflow-hidden rounded-2xl bg-zinc-900 border border-white/[0.06] ${project.aspect} cursor-pointer`}
                >
                  {/* Stylized background */}
                  <div className="absolute inset-0">
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`} />
                    <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 ${project.accent} rounded-full blur-3xl opacity-30 group-hover:opacity-50 transition-opacity duration-700`} />
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

                  {/* Desktop Hover Info */}
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

                  {/* Mobile Always-Visible Info */}
                  <div className="flex md:hidden relative z-10 p-5 h-full flex-col justify-end">
                    <p className="text-xs text-white/40 mb-1 uppercase tracking-wider">
                      {project.category}
                    </p>
                    <h3 className="text-base font-bold text-white tracking-tight">
                      {project.title}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
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
    </div>
  );
}
