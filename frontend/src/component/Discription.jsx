import { TypewriterEffectSmooth } from "../ui/typewriter-effect";

export function TypewriterLine() {
  const words = [
    { text: "Decode" },
    { text: "disease" },
    { text: "risk" },
    { text: "with" },
    {
      text: "Genomic intelligence.",
      className: "text-blue-500 font-bold dark:text-blue-500 mx-auto",
    },
  ];

  return (
    <div className="flex text-xs items-center justify-center">
      <TypewriterEffectSmooth words={words} delay={0} duration={4} />
    </div>
  );
}