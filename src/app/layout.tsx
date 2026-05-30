import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import { LoadingScreen } from "@/components/ui/LoadingScreen";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { GradientBackground } from "@/components/ui/GradientBackground";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Visforg Studio | Premium Video Editing, Animation & Design",
  description:
    "We craft cinematic edits, motion graphics, animations, and digital experiences that help brands tell stories that people remember.",
  keywords: [
    "Video Editing",
    "Motion Graphics",
    "Animation",
    "3D Product Visualization",
    "Graphic Design",
    "Visforg Studio",
    "Creative Agency",
    "Brand Films",
  ],
  authors: [{ name: "Visforg Studio" }],
  creator: "Visforg Studio",
  robots: "index, follow",
  openGraph: {
    title: "Visforg Studio | Premium Video Editing, Animation & Design",
    description:
      "We craft cinematic edits, motion graphics, animations, and digital experiences that help brands tell stories that people remember.",
    url: "https://visforgstudio.com",
    siteName: "Visforg Studio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Visforg Studio | Premium Video Editing, Animation & Design",
    description:
      "We craft cinematic edits, motion graphics, animations, and digital experiences that help brands tell stories that people remember.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} antialiased`}>
        <GradientBackground />
        <LoadingScreen />
        <CustomCursor />
        <SmoothScrollProvider>
          <Navbar />
          <main className="min-h-screen relative z-[1]">{children}</main>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
