"use client";

import { AnimatedSection } from "@/components/animations/AnimatedSection";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Marketing Director",
    text: "Visforg Studio transformed our product launch campaign with stunning visuals. Their attention to detail is unmatched.",
  },
  {
    name: "James Chen",
    role: "Startup Founder",
    text: "The animations and editing quality exceeded our expectations. They truly understood our brand vision.",
  },
  {
    name: "Priya Sharma",
    role: "Brand Manager",
    text: "Professional, creative, and always delivers on time. Visforg Studio is our go-to for all visual content.",
  },
  {
    name: "Alex Rodriguez",
    role: "Creative Director",
    text: "Working with Visforg was seamless. The 3D product visualizations they created were absolutely stunning and elevated our entire campaign.",
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
