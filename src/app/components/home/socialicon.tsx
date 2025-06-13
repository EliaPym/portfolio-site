import Link from "next/link";
import "@/app/css/globals.css";

export default function SocialIcon(props: {
  link: string;
  variant: "linkedin" | "github" | "email";
  icon: React.ReactNode;
  size: number;
}) {
  const gradientClass = `${props.variant}-gradient`;
  
  return (
    <div className="w-fit h-fit">
      <Link href={props.link} target="_blank">
        <div className={`bg-background w-10 h-10 border-2 rounded-lg flex items-center justify-center hover:cursor-pointer transition-all duration-300 ${gradientClass}`}>
          <div 
            className="flex items-center justify-center rounded-lg fill-base-content"
            style={{ width: `${props.size * 0.25}rem`, height: `${props.size * 0.25}rem` }}
          >
            {props.icon}
          </div>
        </div>
      </Link>
    </div>
  );
}
