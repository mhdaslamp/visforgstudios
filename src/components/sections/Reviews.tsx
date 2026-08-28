"use client";

import { AnimatedSection } from "@/components/animations/AnimatedSection";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Armaan Zeyad",
    role: "Head of Products at Flamingo",
    text: "Visforg Studios did a great job visualising Franklead.io. They transformed our SaaS product into a clear, engaging, and visually impressive video.",
  },
  {
    name: "Mubashir",
    role: "Client",
    text: "Great video editing and attention to detail. The final output was creative, polished, and exactly what we were looking for.",
  },
  {
    name: "Gangadas",
    role: "KGECO Products",
    text: "Visforg Studios created an excellent product visualisation video that presented our product clearly and professionally.",
  },
  {
    name: "Zidan",
    role: "Client",
    text: "Excellent video editing with smooth visuals and creative execution. The final video turned out really impressive.",
  },
];

export function Reviews() {
  return (
    <section id="reviews" className="py-32 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter text-white">
            What Clients Say
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection key={testimonial.name} delay={index * 0.1}>
              <div className="relative p-8 rounded-3xl bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.05] hover:border-white/[0.1] transition-all duration-500 h-full">
                <Quote
                  size={32}
                  className="text-white/[0.06] absolute top-8 right-8"
                  strokeWidth={1}
                />
                <div className="mb-6">
                  <div className="w-12 h-12 rounded-full bg-white/[0.08] flex items-center justify-center mb-4">
                    <span className="text-lg font-bold text-white/60">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white leading-tight">
                    {testimonial.name}
                  </h3>
                  <p className="text-white/40 text-sm font-medium uppercase tracking-wide">
                    {testimonial.role}
                  </p>
                </div>
                <p className="text-white/50 leading-relaxed italic">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
