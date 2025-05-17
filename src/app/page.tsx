"use client";

import Background from "@/app/components/background";
import SocialIcon from "@/app/components/socialicon";
import { LinkedIn, Github, Email } from "@/../public/icons/socialicons";
import * as SkillsIcons from "@/../public/icons/skillsIcons";
import { Typewriter } from "react-simple-typewriter";
import { InfiniteMovingCards } from "@/app/components/cardCarousel";

export default function Home() {
  const skillsIcons = [
    {
      icon: <SkillsIcons.JavaIcon />,
      name: "Java",
      colour_bl: "#fce4ec",
      colour_tr: "#f0f4c3",
    },
    {
      icon: <SkillsIcons.CsharpIcon />,
      name: "C#",
      colour_bl: "#fce4ec",
      colour_tr: "#f0f4c3",
    },
    {
      icon: <SkillsIcons.MySQLIcon />,
      name: "MySQL",
      colour_bl: "#fce4ec",
      colour_tr: "#f0f4c3",
    },
    {
      icon: <SkillsIcons.AWSIcon />,
      name: "AWS",
      colour_bl: "#fce4ec",
      colour_tr: "#f0f4c3",
    },
    {
      icon: <SkillsIcons.ReactIcon />,
      name: "React",
      colour_bl: "#fce4ec",
      colour_tr: "#f0f4c3",
    },
    {
      icon: <SkillsIcons.TypescriptIcon />,
      name: "Typescript",
      colour_bl: "#fce4ec",
      colour_tr: "#f0f4c3",
    },
    {
      icon: <SkillsIcons.MicrosoftIcon />,
      name: "Microsoft",
      colour_bl: "#fce4ec",
      colour_tr: "#f0f4c3",
    },
    {
      icon: <SkillsIcons.PowershellIcon />,
      name: "Powershell",
      colour_bl: "#fce4ec",
      colour_tr: "#f0f4c3",
    },
    {
      icon: <SkillsIcons.PythonIcon />,
      name: "Python",
      colour_bl: "#fce4ec",
      colour_tr: "#f0f4c3",
    },
    {
      icon: <SkillsIcons.GoogleSheetsIcon />,
      name: "Google Sheets",
      colour_bl: "#fce4ec",
      colour_tr: "#f0f4c3",
    },
  ];

  return (
    <>
      <Background>
        <div className="py-[10%] pl-[15%] w-fit flex flex-col">
          <h1 className="text-3xl font-mono">
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
      <div className="w-full h-fit flex items-center justify-center">
        <InfiniteMovingCards
          items={skillsIcons}
          direction="left"
          speed="slow"
        />
      </div>
    </>
  );
}
