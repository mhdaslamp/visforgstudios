"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { MagneticButton } from "@/components/ui/MagneticButton";

export function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden  pt-20"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0">
        {/* Floating glass elements */}
        <div
          className="absolute top-1/4 left-[15%] w-64 h-64 rounded-full border border-white/5 backdrop-blur-sm"
          style={{ animation: "float 8s ease-in-out infinite" }}
        />
        <div
          className="absolute bottom-1/3 right-[10%] w-48 h-48 rounded-full border border-white/5 backdrop-blur-sm"
          style={{ animation: "floatSlow 12s ease-in-out infinite" }}
        />
        <div
          className="absolute top-[60%] left-[60%] w-32 h-32 rounded-full bg-white/[0.02] border border-white/5"
          style={{ animation: "float 10s ease-in-out infinite reverse" }}
        />
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <motion.div
        className="relative z-10 max-w-5xl mx-auto px-6 text-center"
        style={{ y, opacity }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 2.4,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          <span className="inline-block text-white/40 text-sm font-medium tracking-[0.3em] uppercase mb-6">
            Video Editing · Animation · Design
          </span>
        </motion.div>

        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white mb-8 leading-[1.2] md:leading-[1.15]"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 2.6,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          Turning Ideas Into
          <br />
          <span className="text-white/50">Visual Experiences</span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto mb-12 leading-relaxed font-medium"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 2.8,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          We craft cinematic edits, motion graphics, animations, and digital
          experiences that help brands tell stories that people remember.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-8 sm:gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 3.0,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          <MagneticButton
            href="#works"
            className="px-8 py-4 border border-white/20 text-white font-semibold rounded-full hover:bg-white/5 transition-all duration-300 text-sm tracking-wide"
          >
            View Our Work
          </MagneticButton>
          <MagneticButton
            href="#contact"
            className="px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-gray-100 transition-all duration-300 hover:scale-105 text-sm tracking-wide"
          >
            Let&apos;s Talk
          </MagneticButton>
        </motion.div>
      </motion.div>

      {/* Bottom gradient fade */}
    </section>
  );
}
