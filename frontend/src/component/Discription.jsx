import { TypewriterEffectSmooth } from "../ui/typewriter-effect";

export function TypewriterLine() {
  const words = [
    { text: "Build" },
    { text: "awesome" },
    { text: "apps" },
    { text: "with" },
    {
      text: "Aceternity.",
      className: "text-blue-500 dark:text-blue-500 mx-auto",
    },
  ];

  return (
    <div className="flex text-sm items-center justify-center">
      <TypewriterEffectSmooth words={words} delay={0} duration={4} />
    </div>
  );
}