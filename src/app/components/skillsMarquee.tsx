import { cn } from "@/lib/utils";
import { Marquee } from "@/app/components/marquee";

import * as SkillsIcons from "@/../public/icons/skillsIcons";

const skills = [
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
    name: "Amazon Web Services",
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
    name: "Microsoft 365 Admin",
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

const firstRow = skills.slice(0, skills.length);

const Card = ({
  icon,
  name,
  colour_bl,
  colour_tr,
}: {
  icon: React.ReactNode;
  name: string;
  colour_bl: string;
  colour_tr: string;
}) => {
  return (
    <li className="group flex flex-col items-center justify-center text-center">
      <div className="w-42 h-20 rounded-lg flex items-center justify-center bg-gradient-to-b from-slate-700 to-slate-800 relative">
        <div
          className="w-16 h-16 rounded-lg flex items-center justify-center fill-white transition-all duration-200"
          style={{ width: "4rem", height: "4rem", filter: "blur(0px)" }}
        >
          {icon}
        </div>
        <div className="absolute text-transparent opacity-0 text-2xl w-42 transition-all duration-600 text-shadow-md/70 text-shadow-black">
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
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:40s]">
        {firstRow.map((skill) => (
          <Card key={skill.name} {...skill} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
    </div>
  );
}
