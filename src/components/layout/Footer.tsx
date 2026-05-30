import Link from "next/link";
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
  return (
    <footer className="py-16 border-t border-white/10 relative">
      <div className="pt-8 border-t border-white/5 text-center">
        <p className="text-white/30 text-sm">
          © 2026 Visforg Studio. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
