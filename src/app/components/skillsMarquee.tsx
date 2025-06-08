/*
    Credit: Magic UI - https://magicui.design/ (Modified by me)
    Source: https://magicui.design/docs/components/marquee
*/

import { Marquee } from "@/app/components/marquee";
import { useEffect, useState } from "react";

import * as SkillsIcons from "@/../public/icons/skillsIcons";

const initialSkills = [
  {
    icon: <SkillsIcons.JavaIcon />,
    name: "Java",
  },
  {
    icon: <SkillsIcons.CsharpIcon />,
    name: "C#",
  },
  {
    icon: <SkillsIcons.MySQLIcon />,
    name: "MySQL",
  },
  {
    icon: <SkillsIcons.AWSIcon />,
    name: "Amazon Web Services",
  },
  {
    icon: <SkillsIcons.ReactIcon />,
    name: "React",
  },
  {
    icon: <SkillsIcons.TypescriptIcon />,
    name: "Typescript",
  },
  {
    icon: <SkillsIcons.MicrosoftIcon />,
    name: "Microsoft 365 Admin",
  },
  {
    icon: <SkillsIcons.PowershellIcon />,
    name: "Powershell",
  },
  {
    icon: <SkillsIcons.PythonIcon />,
    name: "Python",
  },
  {
    icon: <SkillsIcons.GoogleSheetsIcon />,
    name: "Google Sheets",
  },
  {
    icon: <SkillsIcons.AWSRDSIcon />,
    name: "AWS RDS",
  },
  {
    icon: <SkillsIcons.AWSLambdaIcon />,
    name: "AWS Lambda",
  },
  {
    icon: <SkillsIcons.AWSCloudfrontIcon />,
    name: "AWS Cloudfront",
  },
  {
    icon: <SkillsIcons.AWSAPIGatewayIcon />,
    name: "AWS API Gateway",
  }
];

// Fisher-Yates shuffle algorithm
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const shuffleArray = (array: any[]) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const Card = ({
  icon,
  name,
}: {
  icon: React.ReactNode;
  name: string;
  colour_bl: string;
  colour_tr: string;
}) => {
  return (
    <li className="group flex flex-col items-center justify-center text-center text-primary font-extralight">
      <div className="sm:w-42 w-30 sm:h-20 h-16 rounded-lg flex items-center justify-center bg-gradient-to-b from-slate-700 to-slate-800 relative">
        <div
          className="sm:w-16 sm:h-16 w-12 h-12 rounded-lg flex items-center justify-center fill-white transition-all duration-200"
        >
          {icon}
        </div>
        <div className="absolute text-transparent opacity-0 sm:text-xl text-md w-[90%] transition-all duration-600 text-shadow-md/70 text-shadow-black">
          {name}
        </div>
        <div
          className="absolute inset-0 hover:bg-transparent"
          onMouseEnter={(e) => {
            const parent = e.currentTarget.parentElement;
            if (parent) {
              const iconDiv = parent.querySelector(
                "div:first-of-type"
              ) as HTMLElement;
              const textDiv = parent.querySelector("div:nth-of-type(2)");
              if (iconDiv) iconDiv.style.filter = "blur(5px)";
              if (textDiv) {
                textDiv.classList.remove("text-transparent", "opacity-0");
                textDiv.classList.add("text-primary", "opacity-100");
              }
            }
          }}
          onMouseLeave={(e) => {
            const parent = e.currentTarget.parentElement;
            if (parent) {
              const iconDiv = parent.querySelector(
                "div:first-of-type"
              ) as HTMLElement;
              const textDiv = parent.querySelector("div:nth-of-type(2)");
              if (iconDiv) iconDiv.style.filter = "blur(0px)";
              if (textDiv) {
                textDiv.classList.add("text-transparent", "opacity-0");
                textDiv.classList.remove("text-primary", "opacity-100");
              }
            }
          }}
        />
      </div>
    </li>
  );
};

export function SkillsMarquee() {
  const [shuffledSkills, setShuffledSkills] = useState(() => shuffleArray(initialSkills));
  
  useEffect(() => {
    setShuffledSkills(shuffleArray(initialSkills));
  }, []);

  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:40s]">
        {shuffledSkills.map((skill, index) => (
          <Card key={`${skill.name}-${index}`} {...skill} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
    </div>
  );
}
