import { FlickeringGrid } from "@/app/components/backgrounds/background";

export default function BackgroundWrapper() {
  return (
    <FlickeringGrid
      className="absolute inset-0 z-[-1] [mask-image:radial-gradient(ellipse_at_center,white_0%,transparent_77%)]"
      squareSize={5}
      gridGap={6}
      color="#60A5FA"
      maxOpacity={0.5}
      flickerChance={0.1}
    />
  );
}
