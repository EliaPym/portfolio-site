"use client";

import SocialIcon from "@/app/components/home/socialicon";
import { LinkedIn, Github, Email } from "@/../public/icons/socialicons";
import { Typewriter } from "react-simple-typewriter";
import { AnimatedGradientText } from "@/app/components/text-effects/gradientText";

export default function IntroSection() {
    return (
        <div className="py-[10%] w-fit flex flex-col">
            <h1 className="text-2xl sm:text-3xl font-roboto-mono">
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
            <p className="text-3xl font-light sm:text-5xl">
              Aspiring{" "}
              <AnimatedGradientText
                className="font-[475]"
                colorFrom="var(--color-highlight-cyan-celeste)"
                colorTo="var(--color-highlight-medium-aquamarine)"
                speed={0.7}
              >
                Software
              </AnimatedGradientText>{" "}
              &
              <br />
              <AnimatedGradientText
                className="font-[475]"
                colorFrom="var(--color-highlight-red-salmon)"
                colorTo="var(--color-highlight-red-strawberry)"
                speed={0.7}
              >
                DevOps
              </AnimatedGradientText>{" "}
              Engineer
            </p>
            <div className="flex flex-row justify-center mt-6 space-x-6 sm:justify-start">
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
    )
};