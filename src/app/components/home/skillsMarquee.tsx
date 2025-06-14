import Marquee from "react-fast-marquee";
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
  },
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
    <li className="flex flex-col items-center justify-center px-2 text-center group text-base-content font-extralight">
      <div className="relative flex items-center justify-center h-16 transition-all duration-300 ease-in-out rounded-lg sm:w-42 w-30 sm:h-20 bg-neutral hover:bg-base-200">
        <div className="flex items-center justify-center w-12 h-12 transition-all duration-200 rounded-lg sm:w-16 sm:h-16 fill-base-content">
          {icon}
        </div>
        <div className="absolute text-transparent opacity-0 sm:text-xl text-md w-[90%] transition-all duration-600 text-shadow-md/70 text-shadow-base-300">
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
              if (iconDiv) iconDiv.style.filter = "blur(3px) opacity(0.6)";
              if (textDiv) {
                textDiv.classList.remove("text-transparent", "opacity-0");
                textDiv.classList.add("text-base-content", "opacity-100");
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
                textDiv.classList.remove("text-base-content", "opacity-100");
              }
            }
          }}
        />
      </div>
    </li>
  );
};

export function SkillsMarquee() {
  const [shuffledSkills, setShuffledSkills] = useState(() =>
    shuffleArray(initialSkills)
  );

  useEffect(() => {
    setShuffledSkills(shuffleArray(initialSkills));
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center w-[97%] ">
      <Marquee
        pauseOnHover
        direction="left"
        gradient
        gradientColor="var(--color-base-100)"
        loop={0}
        className="overflow-clip"
      >
        {shuffledSkills.map((skill, index) => (
          <Card key={`${skill.name}-${index}`} {...skill} />
        ))}
      </Marquee>
    </div>
  );
}
