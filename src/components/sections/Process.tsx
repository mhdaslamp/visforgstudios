"use client";

import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/animations/AnimatedSection";
import {
  FileText,
  Layers,
  Box,
  Video,
  Sliders,
  CheckCircle,
} from "lucide-react";

const steps = [
  {
    title: "Discovery & Creative Planning",
    description:
      "Defining project goals, audience, creative direction, references, visual style, and production roadmap.",
    icon: FileText,
    // Percentage positions where icon CENTER sits on the SVG path
    x: "16.67%",
    y: "21.54%",
  },
  {
    title: "Concept Development & Storyboarding",
    description:
      "Creating concepts, scripts, moodboards, storyboards, animatics, and planning the visual narrative.",
    icon: Layers,
    x: "50%",
    y: "21.54%",
  },
  {
    title: "Asset Creation & Design",
    description:
      "Designing graphics, illustrations, UI elements, 3D models, environments, textures, and production assets.",
    icon: Box,
    x: "83.33%",
    y: "21.54%",
  },
  {
    title: "Animation & Motion Production",
    description:
      "Animating scenes, motion graphics, 3D sequences, camera movements, simulations, and dynamic visual compositions.",
    icon: Video,
    x: "16.67%",
    y: "69.23%",
  },
  {
    title: "Editing & Visual Effects",
    description:
      "Video editing, compositing, VFX integration, transitions, tracking, cleanup, and cinematic enhancements.",
    icon: Sliders,
    x: "50%",
    y: "69.23%",
  },
  {
    title: "Color, Sound & Final Delivery",
    description:
      "Color grading, sound design, voice-over integration, audio mixing, rendering, optimization, and final deployment across platforms.",
    icon: CheckCircle,
    x: "83.33%",
    y: "69.23%",
  },
];

// SVG path that runs through the icon centers
// ViewBox 1000×650: top row icons at y=140, bottom row at y=450, midpoint at y=295
const svgPath =
  "M 166.7 140 L 833.3 140 C 940 140, 940 295, 833.3 295 L 166.7 295 C 60 295, 60 450, 166.7 450 L 833.3 450";

export function Process() {
  return (
    <section id="process" className="py-32 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter text-white">
            Our Creative Process
          </h2>
        </AnimatedSection>

        {/* ── Desktop Serpentine Timeline ── */}
        <div className="hidden md:block relative w-full aspect-[1000/650]">
          {/* SVG connector line — runs through icon centers */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 1000 650"
            fill="none"
            preserveAspectRatio="xMidYMid meet"
          >
            {/* Faint background path */}
            <path
              d={svgPath}
              stroke="rgba(255, 255, 255, 0.06)"
              strokeWidth="3"
              strokeLinecap="round"
            />
            {/* -8?'. , m.ṁṬnimated glowing path */}
            <motion.path
              d={svgPath}
              stroke="rgba(255, 255, 255, 0.25)"
              strokeWidth="3"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 2.5, ease: "easeInOut" }}
            />
          </svg>

          {/* Step nodes — icon center pinned on the SVG path */}
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={step.title}
                className="absolute flex flex-col items-center text-center w-[260px]"
                style={{
                  left: step.x,
                  top: step.y,
                  /* translate X by -50% to center horizontally,
                     translate Y by -32px (half the 64px icon) so the
                     icon CENTER sits exactly on the path coordinate */
                  transform: "translate(-50%, -32px)",
                }}
              >
                {/* Icon circle — its center is on the SVG line */}
                <motion.div
                  className="w-16 h-16 rounded-full flex items-center justify-center bg-[#0A0A0A] border-2 border-white/15 hover:border-white/50 hover:shadow-[0_0_25px_rgba(255,255,255,0.1)] transition-all duration-500 relative z-10 cursor-pointer group"
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.15 + 0.3,
                    duration: 0.5,
                    ease: "backOut",
                  }}
                >
                  <Icon
                    size={24}
                    className="text-white/60 group-hover:text-white transition-colors duration-300"
                    strokeWidth={1.5}
                  />
                </motion.div>

                {/* Title + description below the icon */}
                <motion.div
                  className="mt-5"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 + 0.5, duration: 0.5 }}
                >
                  <h3 className="text-base font-bold text-white mb-1.5 tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-xs text-white/40 leading-relaxed px-2">
                    {step.description}
                  </p>
                </motion.div>
              </div>
            );
          })}
        </div>

        {/* ── Mobile Vertical Timeline ── */}
        <div className="md:hidden relative pl-12 space-y-14">
          {/* Vertical connector line */}
          <div className="absolute left-[18px] top-2 bottom-2 w-[1px] bg-white/10" />

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <AnimatedSection
                key={step.title}
                delay={index * 0.1}
                direction="up"
                className="relative flex items-start gap-5"
              >
                {/* Icon node sitting on the vertical line */}
                <div className="absolute -left-12 z-10 flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center bg-[#0A0A0A] border border-white/15">
                  <Icon size={16} className="text-white/60" strokeWidth={1.5} />
                </div>

                {/* Step info */}
                <div>
                  <h3 className="text-lg font-bold text-white tracking-tight mb-1">
                    {step.title}
                  </h3>
                  <p className="text-sm text-white/40 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
