"use client";

import { AnimatedSection } from "@/components/animations/AnimatedSection";
import { Video, Sparkles, Palette, Box, PenTool, Share2 } from "lucide-react";

const specialties = [
  {
    icon: Video,
    title: "Video Editing",
    description: "Cinematic edits that captivate audiences and drive engagement.",
  },
  {
    icon: Sparkles,
    title: "Motion Graphics",
    description: "Dynamic animations that bring your brand story to life.",
  },
  {
    icon: Palette,
    title: "Animation",
    description: "Custom 2D & 3D animations crafted with precision.",
  },
  {
    icon: Box,
    title: "3D Product Visualization",
    description: "Photorealistic 3D renders that showcase products beautifully.",
  },
  {
    icon: PenTool,
    title: "Graphic Design",
    description: "Visual identities and designs that leave lasting impressions.",
  },
  {
    icon: Share2,
    title: "Social Media Content",
    description: "Scroll-stopping content optimized for every platform.",
  },
];

export function About() {
  return (
    <section id="about" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter text-white mb-8">
            Creative Solutions for
            <br />
            <span className="text-white/50">Modern Brands</span>
          </h2>
          <p className="text-lg text-white/50 max-w-3xl mx-auto leading-relaxed">
            Visforg Studio combines creativity, storytelling, and design to produce
            visuals that connect with audiences. From engaging social media content to
            cinematic brand films and 3D product showcases, we create work that
            captures attention and drives impact.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {specialties.map((specialty, index) => (
            <AnimatedSection key={specialty.title} delay={index * 0.1}>
              <div className="group relative p-8 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.06] hover:border-white/[0.12] transition-all duration-500 h-full">
                <div className="w-12 h-12 rounded-xl bg-white/[0.06] flex items-center justify-center mb-6 group-hover:bg-white/[0.1] transition-colors duration-500">
                  <specialty.icon size={24} className="text-white/70" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 tracking-tight">
                  {specialty.title}
                </h3>
                <p className="text-white/40 text-sm leading-relaxed">
                  {specialty.description}
                </p>
                {/* Subtle corner glow on hover */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/[0.02] rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -translate-y-1/2 translate-x-1/2" />
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
