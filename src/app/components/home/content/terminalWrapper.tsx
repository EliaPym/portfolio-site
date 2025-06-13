import React from "react";
import {
  Terminal,
  TypingAnimation,
  AnimatedSpan,
} from "@/app/components/home/terminal";

export default function TerminalWrapper() {
  return (
    <Terminal className="text-base-content">
      <TypingAnimation>
        $ sudo find ~/ -name &quot;career_path&quot;
      </TypingAnimation>

      <AnimatedSpan delay={3800} className="pl-4 text-success">
        <span>find: /home/elia/tech/software_engineering</span>
      </AnimatedSpan>

      <AnimatedSpan delay={4000} className="pl-4 text-success">
        <span>find: /home/elia/tech/devops</span>
      </AnimatedSpan>

      <AnimatedSpan delay={4200} className="pl-4 text-success">
        <span>find: /home/elia/tech/security</span>
      </AnimatedSpan>

      <TypingAnimation delay={5600}>
        $ git commit -m &quot;minor changes&quot;
      </TypingAnimation>

      <AnimatedSpan delay={9000} className="pl-4">
        <span>[prod 42e1f97] minor changes</span>
      </AnimatedSpan>

      <AnimatedSpan delay={9200}>
        <span className="pl-4">
          <span className="text-warning">13 files</span> changed,{" "}
          <span className="text-success">42 753</span> insertions(+),{" "}
          <span className="text-error">2 823</span> deletions(-)
        </span>
      </AnimatedSpan>

      <TypingAnimation delay={10000}>$ git push origin prod</TypingAnimation>

      <AnimatedSpan delay={12000} className="pl-4 text-error">
        <span>Error: Cannot push to production on Friday at 4:59 PM</span>
      </AnimatedSpan>

      <AnimatedSpan delay={12200} className="pl-4 text-warning">
        <span>Reason: Sod&apos;s Law Protection Enabled</span>
      </AnimatedSpan>

      <TypingAnimation delay={13200}>
        $ git push origin prod --force
      </TypingAnimation>

      <AnimatedSpan delay={16000} className="pl-4 text-success">
        64d5297...42e1f97 prod -&gt; prod (forced update)
      </AnimatedSpan>

      <TypingAnimation delay={17000}>$ sudo rm -rf /*</TypingAnimation>

      <AnimatedSpan
        delay={17000}
        className="pt-2 border-t text-muted-foreground"
      >
        <span>Welcome to portfolio v1.0.0 - Ready to collaborate!</span>
      </AnimatedSpan>
    </Terminal>
  );
}
