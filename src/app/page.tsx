"use client";

import Background from "@/app/components/background";
import SocialIcon from "@/app/components/socialicon";
import { LinkedIn, Github, Email } from "@/../public/icons/socialicons";

export default function Home() {
  return (
    <Background>
      <div className="py-[10%] pl-[15%] w-fit flex flex-col">
        <h1 className="text-3xl font-bold">Hi, I&apos;m Elia</h1>
        <hr className="my-6 border-t-2 w-[103%] self-center" />
        <p className="text-5xl">
          Aspiring <span className="text-cyan-300 font-bold">Software</span> &
          <br />
          <span className="text-red-400 font-bold">DevOps</span> Engineer
        </p>
        <div className="flex flex-row space-x-6">
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
