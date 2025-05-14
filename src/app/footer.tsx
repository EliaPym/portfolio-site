export default function Footer() {
  return (
    <footer className="flex items-center justify-center w-full h-16 bg-gray-800 text-white">
      <div className="flex items-center justify-between w-full max-w-screen-xl px-4">
        <div className="text-sm">
          &copy; {new Date().getFullYear()} E-P.dev. All rights reserved.
        </div>
        <div className="flex space-x-4">
          <a
            href="https://www.linkedin.com/in/eliapym/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
