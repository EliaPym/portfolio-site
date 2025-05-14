"use client";

import Background from "@/app/components/background";
import SocialIcon from "@/app/components/socialicon";
import { LinkedIn, Github, Email } from "@/../public/icons/socialicons";
import { Typewriter } from "react-simple-typewriter";

export default function Home() {
  return (
    <Background>
      <div className="py-[10%] pl-[15%] w-fit flex flex-col">
        <h1 className="text-3xl font-mono">
          <Typewriter
            words={["Hi, I'm Elia"]}
            loop={1}
            cursor
            cursorStyle="_"
            cursorBlinking={true}
          />
        </h1>
        <hr className="my-6 border-t-2 w-[103%] self-center" />
        <p className="text-5xl">
          Aspiring{" "}
          <span className="font-medium bg-gradient-to-r from-cyan-300 to-teal-400 inline-block text-transparent bg-clip-text">
            Software
          </span>{" "}
          &
          <br />
          <span className="font-medium bg-gradient-to-r from-red-400 to-rose-400 inline-block text-transparent bg-clip-text">
            DevOps
          </span>{" "}
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
    </Background>
  );
}
