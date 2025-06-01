"use client";

import { FlickeringGrid } from "./components/background";
import SocialIcon from "@/app/components/socialicon";
import { LinkedIn, Github, Email } from "@/../public/icons/socialicons";
import { Typewriter } from "react-simple-typewriter";
import { SkillsMarquee } from "./components/skillsMarquee";
import { AnimatedGradientText } from "./components/gradientText";
import "@/app/css/globals.css";

export default function Home() {
  return (
    <div className="relative flex flex-col">
      <div className="relative">
        <FlickeringGrid
          className="absolute inset-0 z-[-1] [mask-image:radial-gradient(ellipse_at_center,white_0%,transparent_77%)]"
          squareSize={5}
          gridGap={6}
          color="#60A5FA"
          maxOpacity={0.5}
          flickerChance={0.1}
        />
        <div className="py-[10%] pl-[15%] w-fit flex flex-col">
          <h1 className="text-3xl font-roboto-mono">
            {"C:/> "}
            <Typewriter
              words={["Hi, I'm Elia"]}
              loop={1}
              cursor
              cursorStyle="_"
              cursorBlinking={true}
              typeSpeed={120}
            />
          </h1>
          <hr className="border-t-2 w-[103%] self-center" />
          <p className="text-5xl font-light">
            Aspiring{" "}
            <AnimatedGradientText
              className="font-[475]"
              colorFrom="var(--highlight-cyan-celeste)"
              colorTo="var(--highlight-medium-aquamarine)"
              speed={0.7}
            >
              Software
            </AnimatedGradientText>{" "}
            &
            <br />
            <AnimatedGradientText
              className="font-[475]"
              colorFrom="var(--highlight-red-salmon)"
              colorTo="var(--highlight-red-strawberry)"
              speed={0.7}
            >
              DevOps
            </AnimatedGradientText>{" "}
            Engineer
          </p>
          <div className="flex flex-row space-x-6 mt-6">
            <SocialIcon
              link="https://www.linkedin.com/in/eliapym/"
              variant="linkedin"
              icon={<LinkedIn />}
              size={6}
            />
            <SocialIcon
              link="https://github.com/EliaPym"
              variant="github"
              icon={<Github />}
              size={7}
            />
            <SocialIcon
              link="mailto:eliapym@hotmail.com"
              variant="email"
              icon={<Email />}
              size={6}
            />
          </div>
        </div>
      </div>
      <div className="w-full h-fit flex items-center justify-center m-[-17px]">
        <SkillsMarquee />
      </div>
    </div>
  );
}
