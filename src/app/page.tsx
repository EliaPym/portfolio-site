import React from "react";
import { Metadata } from "next";

import BackgroundWrapper from "@/app/components/home/content/backgroundWrapper";
import TerminalWrapper from "@/app/components/home/content/terminalWrapper";
import IntroSection from "@/app/components/home/content/introSection";
import SkillsMarqueeWrapper from "./components/home/content/skillsMarqueeWrapper";

export const metadata: Metadata = {
  title: "Home - E-P.dev",
  description:
    "Welcome to my portfolio website, showcasing my skills and projects as a Software and DevOps Engineer.",
  openGraph: {
    title: "Home - E-P.dev",
    description:
      "Welcome to my portfolio website, showcasing my skills and projects as a Software and DevOps Engineer.",
    url: "https://www.e-p.dev",
    siteName: "E-P.dev",
    images: [
      {
        url: "",
        width: 1200,
        height: 630,
        alt: "E-P.dev - Home Page",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function Home() {
  return (
    <div className="relative flex flex-col">
      <div className="relative">
        <BackgroundWrapper />
        <div className="flex flex-col items-center justify-center gap-32 lg:flex-row">
          <IntroSection />
          <TerminalWrapper />
        </div>
      </div>
      <div className="flex items-center justify-center">
        <SkillsMarqueeWrapper />
      </div>
    </div>
  );
}
