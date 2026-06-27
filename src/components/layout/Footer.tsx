"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Instagram, Linkedin, Mail } from "lucide-react";

const footerLinks = [
  { label: "Works", href: "#works" },
  { label: "Process", href: "#process" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  {
    icon: Instagram,
    href: "https://instagram.com/visforgstudio",
    label: "Instagram",
  },
  {
    icon: Linkedin,
    href: "https://linkedin.com/company/visforgstudio",
    label: "LinkedIn",
  },
  { icon: Mail, href: "mailto:hello@visforgstudio.com", label: "Email" },
];

export function Footer() {
  const pathname = usePathname();

  return (
    <footer className="py-16 border-t border-white/10 relative z-10 bg-black">
      <div className="max-w-7xl mx-auto px-6 mb-12 flex flex-col md:flex-row items-center justify-between gap-8">
        <Link
          href="/"
          className="text-2xl font-bold tracking-tighter text-white hover:opacity-80 transition-opacity"
        >
          Visforg Studio<span className="text-white/30">.</span>
        </Link>

        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
          {footerLinks.map((link) => (
            <a
              key={link.label}
              href={pathname === "/" ? link.href : `/${link.href}`}
              className="text-sm font-medium text-white/50 hover:text-white transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex gap-4">
          {socialLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-all duration-300"
                aria-label={link.label}
              >
                <Icon size={18} />
              </a>
            );
          })}
        </div>
      </div>

      <div className="pt-8 border-t border-white/5 text-center">
        <p className="text-white/30 text-sm">
          © 2026 Visforg Studio. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
