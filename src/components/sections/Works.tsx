"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedSection } from "@/components/animations/AnimatedSection";
import { X, Volume2, VolumeX } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "The Ladder",
    category: "Animation Movie",
    span: "md:col-span-4 md:row-span-2",
    aspect: "aspect-video",
    gradient: "from-blue-900/30 via-indigo-900/20 to-transparent",
    accent: "bg-blue-500/20",
    youtubeId: "BwNHhlfvlE4",
    isShort: false,
  },
  {
    id: 2,
    title: "Kerala Paints Promo",
    category: "Video Editing",
    span: "md:col-span-2 md:row-span-3",
    aspect: "aspect-[9/16]",
    gradient: "from-emerald-900/30 via-teal-900/20 to-transparent",
    accent: "bg-emerald-500/20",
    youtubeId: "d9jqGtE2eG0",
    isShort: true,
  },
  {
    id: 3,
    title: "Vaazha 2",
    category: "Motion Poster",
    span: "md:col-span-2 md:row-span-3",
    aspect: "aspect-[9/16]",
    gradient: "from-orange-900/30 via-red-900/20 to-transparent",
    accent: "bg-orange-500/20",
    youtubeId: "bUb1RDkV1IE",
    isShort: true,
  },
  {
    id: 4,
    title: "Laptop Visualisation",
    category: "Product Visualisation",
    span: "md:col-span-4 md:row-span-2",
    aspect: "aspect-video",
    gradient: "from-purple-900/30 via-blue-900/20 to-transparent",
    accent: "bg-purple-500/20",
    youtubeId: "vsD9XBb0CeU",
    isShort: false,
  },
];

function VideoCard({
  project,
  index,
  isMuted,
  onToggleMute,
}: {
  project: typeof projects[0];
  index: number;
  isMuted: boolean;
  onToggleMute: (projectId: number) => void;
}) {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    onToggleMute(project.id);
  };

  // Update iframe mute state
  useEffect(() => {
    if (iframeRef.current && iframeRef.current.contentWindow) {
      const message = isMuted
        ? '{"event":"command","func":"mute","args":""}'
        : '{"event":"command","func":"unMute","args":""}';
      iframeRef.current.contentWindow.postMessage(message, "*");
    }
  }, [isMuted]);

  const embedUrl = `https://www.youtube.com/embed/${project.youtubeId}?autoplay=1&mute=1&loop=1&playlist=${project.youtubeId}&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&enablejsapi=1`;

  return (
    <AnimatedSection
      delay={index * 0.15}
      className={`${project.span}`}
    >
      <div
        className={`group relative overflow-hidden rounded-2xl bg-zinc-900 border border-white/[0.06] ${project.aspect} min-h-[200px]`}
      >
        {/* YouTube embed */}
        <iframe
          ref={iframeRef}
          src={embedUrl}
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          allow="autoplay; encrypted-media"
          style={{ border: 'none' }}
        />

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />

        {/* Mute/Unmute button */}
        <button
          onClick={toggleMute}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-black/80 transition-all duration-300 cursor-pointer"
        >
          {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
        </button>

        {/* Desktop hover content */}
        <div className="hidden md:flex relative z-10 p-6 md:p-8 h-full flex-col justify-end pointer-events-none">
          <div className="translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
            <p className="text-sm text-white/60 mb-1 font-medium tracking-wide uppercase">
              {project.category}
            </p>
            <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">
              {project.title}
            </h3>
          </div>
        </div>

        {/* Always-visible content for mobile */}
        <div className="flex md:hidden relative z-10 p-5 h-full flex-col justify-end pointer-events-none">
          <p className="text-xs text-white/50 mb-1 uppercase tracking-wider">
            {project.category}
          </p>
          <h3 className="text-base font-bold text-white tracking-tight">
            {project.title}
          </h3>
        </div>
      </div>
    </AnimatedSection>
  );
}

export function Works() {
  const [activeProject, setActiveProject] = useState<typeof projects[0] | null>(null);
  const [unmutedProjectId, setUnmutedProjectId] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  // Mute all videos when user scrolls out of the section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            setUnmutedProjectId(null); // Mute all videos when section is out of view
          }
        });
      },
      { threshold: 0.1 } // Triggers when less than 10% of section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleToggleMute = (projectId: number) => {
    if (unmutedProjectId === projectId) {
      setUnmutedProjectId(null);
    } else {
      setUnmutedProjectId(projectId);
    }
  };

  return (
    <section id="works" ref={sectionRef} className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter text-white">
            Selected Works
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
          {projects.map((project, index) => (
            <VideoCard
              key={project.id}
              project={project}
              index={index}
              isMuted={unmutedProjectId !== project.id}
              onToggleMute={handleToggleMute}
            />
          ))}
        </div>
      </div>

      {/* Video Modal Player (optional - for full screen view if needed later) */}
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
              <iframe
                src={`https://www.youtube.com/embed/${activeProject.youtubeId}?autoplay=1&mute=0&controls=1&enablejsapi=1`}
                className="w-full h-full"
                allow="autoplay; encrypted-media"
                style={{ border: 'none' }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
