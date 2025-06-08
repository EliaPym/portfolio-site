"use client";

import { FlickeringGrid } from "./components/background";
import SocialIcon from "@/app/components/socialicon";
import { LinkedIn, Github, Email } from "@/../public/icons/socialicons";
import { Typewriter } from "react-simple-typewriter";
import { SkillsMarquee } from "./components/skillsMarquee";
import { AnimatedGradientText } from "./components/gradientText";
import "@/app/css/globals.css";

import {
  AnimatedSpan,
  Terminal,
  TypingAnimation,
} from "@/app/components/terminal";

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
        <div className="flex lg:flex-row flex-col items-center justify-center gap-32">
          <div className="py-[10%] w-fit flex flex-col">
            <h1 className="sm:text-3xl text-2xl font-roboto-mono">
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
            <hr className="border-t-2 w-[103%] m-[20px] self-center" />
            <p className="sm:text-5xl text-3xl font-light">
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
            <div className="flex flex-row sm:justify-start justify-center space-x-6 mt-6">
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
          <Terminal>
            <TypingAnimation>
              $ sudo find ~/ -name &quot;career_path&quot;
            </TypingAnimation>

            <AnimatedSpan delay={3800} className="text-green-500 pl-4">
              <span>find: /home/elia/tech/software_engineering</span>
            </AnimatedSpan>

            <AnimatedSpan delay={4000} className="text-green-500 pl-4">
              <span>find: /home/elia/tech/devops</span>
            </AnimatedSpan>

            <AnimatedSpan delay={4200} className="text-green-500 pl-4">
              <span>find: /home/elia/tech/security</span>
            </AnimatedSpan>

            <TypingAnimation delay={5600}>
              $ git commit -m &quot;minor changes&quot;
            </TypingAnimation>

            <AnimatedSpan delay={9000} className="pl-4">
              <span>[prod 42e1f97] minor changes</span>
            </AnimatedSpan>

            <AnimatedSpan delay={9200}>
              <span className="pl-4">
                <span className="text-yellow-500">13 files</span> changed,{" "}
                <span className="text-green-500">42 753</span> insertions(+),{" "}
                <span className="text-red-500">2 823</span> deletions(-)
              </span>
            </AnimatedSpan>

            <TypingAnimation delay={10000}>
              $ git push origin prod
            </TypingAnimation>

            <AnimatedSpan delay={12000} className="text-red-500 pl-4">
              <span>Error: Cannot push to production on Friday at 4:59 PM</span>
            </AnimatedSpan>

            <AnimatedSpan delay={12200} className="text-yellow-500 pl-4">
              <span>Reason: Sod&apos;s Law Protection Enabled</span>
            </AnimatedSpan>

            <TypingAnimation delay={13200}>
              $ git push origin prod --force
            </TypingAnimation>

            <AnimatedSpan delay={16000} className="text-green-500 pl-4">
              64d5297...42e1f97 prod -&gt; prod (forced update)
            </AnimatedSpan>

            <TypingAnimation delay={17000}>$ sudo rm -rf /*</TypingAnimation>

            <AnimatedSpan
              delay={17000}
              className="text-muted-foreground border-t pt-2"
            >
              <span>Welcome to portfolio v1.0.0 - Ready to collaborate!</span>
            </AnimatedSpan>
          </Terminal>
        </div>
      </div>
      <div className="w-full h-fit flex items-center justify-center lg:m-[-17px] m-[20px]">
        <SkillsMarquee />
      </div>
    </div>
  );
}
