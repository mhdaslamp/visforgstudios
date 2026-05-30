"use client";

import { AnimatedSection } from "@/components/animations/AnimatedSection";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { MessageCircle, Instagram, Linkedin, Globe } from "lucide-react";

const socialLinks = [
  { icon: MessageCircle, label: "WhatsApp", href: "https://wa.me/7511152194" },
  {
    icon: Instagram,
    label: "Instagram",
    href: "https://instagram.com/visforgstudio",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/company/visforgstudio",
  },
  { icon: Globe, label: "Behance", href: "https://behance.net/visforgstudio" },
];

export function Contact() {
  return (
    <section id="contact" className="py-32 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 md:items-center">
          <AnimatedSection direction="left">
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-8 text-white tracking-tighter">
              Let&apos;s Create
              <br />
              Something
              <br />
              <span className="text-white/50">Extraordinary</span>
            </h2>
            <p className="text-lg text-white/40 leading-relaxed max-w-md mb-10">
              Whether you need cinematic video editing, eye-catching animations,
              or premium design solutions, Visforg Studio is ready to bring your
              vision to life.
            </p>
            <MagneticButton
              href="https://wa.me/7511152194"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-gray-100 transition-all duration-300 text-sm tracking-wide"
            >
              <MessageCircle size={20} />
              Start a Project
            </MagneticButton>
          </AnimatedSection>

          <AnimatedSection direction="right">
            <div className="relative p-10 rounded-3xl bg-white/[0.03] border border-white/[0.06]">
              <h3 className="text-2xl font-bold text-white mb-8 tracking-tight">
                Get in Touch
              </h3>
              <div className="space-y-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 px-6 py-4 rounded-2xl border border-white/[0.06] hover:bg-white/[0.05] hover:border-white/[0.12] transition-all duration-300 group"
                  >
                    <social.icon
                      size={20}
                      className="text-white/40 group-hover:text-white transition-colors duration-300"
                    />
                    <span className="text-white/60 group-hover:text-white font-medium transition-colors duration-300">
                      {social.label}
                    </span>
                    <span className="ml-auto text-white/20 group-hover:text-white/60 transition-colors duration-300 text-sm">
                      →
                    </span>
                  </a>
                ))}
              </div>

              {/* Decorative glow */}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
