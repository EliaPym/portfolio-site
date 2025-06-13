import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex items-center justify-center w-full h-16 bg-neutral">
      <div className="flex items-center justify-between w-full max-w-screen-xl px-4">
        <div className="text-sm">
          &copy; {new Date().getFullYear()} Elia Pym. All rights reserved.
        </div>
        <div className="flex space-x-4">
          <Link
            href="https://www.linkedin.com/in/eliapym/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </Link>
          <Link
            href="https://github.com/EliaPym"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </Link>
        </div>
      </div>
    </footer>
  );
}
