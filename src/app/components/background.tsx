"use client";
import "@/app/css/background.css";

export default function Background({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative w-full h-full">
      <div className="absolute inset-0 z-0">
        <div className="el w-full h-full"></div>
      </div>
      
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </div>
  );
}
