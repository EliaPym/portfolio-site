"use client";
import React, { useState } from "react";
import "./css/globals.css";

import CountUp from "./components/counter";

export default function NotFound() {
  const [message404, setMessage404] = useState(
    React.createElement("h1", { className: "" }, " ")
  );

  async function onCountFinish(): Promise<void> {
    await new Promise((f) => setTimeout(f, 1500));
    setMessage404(
      React.createElement(
        "h1",
        { className: "fade-in" },
        "The page you are looking for does not exist"
      )
    );
  }

  return (
    <div className="font-roboto">
      {/* Credit: CuiCui - https://cuicui.day/other/patterns */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:35px_34px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] -z-10" />
      <div className="p-[10%] flex flex-col items-center relative z-10">
        <div className="count-up-text font-light font-roboto-mono text-[10rem]">
          
          <CountUp
            from={0}
            to={404}
            direction="up"
            duration={0.25}
            onEnd={onCountFinish}
            minLength={3}
          />
        </div>
        <div className="text-2xl font-extralight text-center">{message404}</div>
      </div>
    </div>
  );
}
