import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { cn } from "@/lib/utils";

export const MacbookScroll = ({
  src,
  showGradient,
  title,
  badge,
}) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window && window.innerWidth < 768) {
      setIsMobile(true);
    }
  }, []);

  const scaleX = useTransform(
    scrollYProgress,
    [0, 0.3],
    [1.2, isMobile ? 1 : 1.5]
  );
  const scaleY = useTransform(
    scrollYProgress,
    [0, 0.3],
    [0.6, isMobile ? 1 : 1.5]
  );
  const translate = useTransform(scrollYProgress, [0, 0.5, 1], [0, 400, 800]);
  const rotate = useTransform(scrollYProgress, [0.1, 0.12, 0.3], [-28, -28, 0]);
  const textTransform = useTransform(scrollYProgress, [0, 0.3], [0, 100]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const macbookOpacity = useTransform(scrollYProgress, [0.5, 0.7], [1, 0]);

  return (
    <div
      ref={ref}
      className="min-h-[150vh] flex flex-col items-center py-0 md:py-20 justify-start flex-shrink-0 [perspective:800px] transform md:scale-100 scale-[0.35] sm:scale-50 overflow-visible"
    >
      <motion.h2
        style={{
          translateY: textTransform,
          opacity: textOpacity,
        }}
        className="dark:text-white text-neutral-800 text-3xl font-bold mb-10 text-center"
      >
        {title || (
          <span>
            This Macbook is built with Tailwindcss. <br /> No kidding.
          </span>
        )}
      </motion.h2>
      {badge && <div className="mb-10">{badge}</div>}
      <motion.div style={{ opacity: macbookOpacity }} className="relative">
        <Lid
          src={src}
          scaleX={scaleX}
          scaleY={scaleY}
          rotate={rotate}
          translate={translate}
        />
        <div className="h-[18rem] w-[32rem] bg-gray-200 dark:bg-[#272729] rounded-2xl overflow-visible relative -z-10 -mt-1 flex flex-col p-2 pt-1">
        <Keypad />
        <Trackpad />
        <div className="h-2 w-20 mx-auto inset-x-0 absolute bottom-0 bg-gradient-to-t from-[#272729] to-[#050505] rounded-tr-3xl rounded-tl-3xl" />
        {showGradient && (
          <div className="h-40 w-full absolute bottom-0 inset-x-0 bg-gradient-to-t dark:from-black from-white via-white dark:via-black to-transparent z-50"></div>
        )}
        {showGradient && (
          <div className="absolute bottom-0 w-full h-20 md:h-40 bg-gradient-to-t from-white dark:from-black via-white dark:via-black to-transparent z-50"></div>
        )}
      </div>
      </motion.div>
    </div>
  );
};

export const Lid = ({ scaleX, scaleY, rotate, translate, src }) => {
  return (
    <div className="relative [perspective:800px] overflow-visible">
      <div
        style={{
          transform: "perspective(800px) rotateX(-25deg) translateZ(0px)",
          transformOrigin: "bottom",
          transformStyle: "preserve-3d",
        }}
        className="h-[12rem] w-[32rem] bg-[#010101] rounded-2xl p-2 relative"
      >
        <div
          style={{
            boxShadow: "0px 2px 0px 2px var(--neutral-900) inset",
          }}
          className="absolute inset-0 bg-[#010101] rounded-lg flex items-center justify-center"
        >
        </div>
      </div>
      <motion.div
        style={{
          scaleX: scaleX,
          scaleY: scaleY,
          rotateX: rotate,
          translateY: translate,
          transformStyle: "preserve-3d",
          transformOrigin: "top",
        }}
        className="h-96 w-[32rem] absolute inset-0 bg-[#010101] rounded-2xl p-2 overflow-visible z-50"
      >
        <div className="absolute inset-0 bg-[#272729] rounded-lg" />
        <img
          src={src}
          alt="aceternity logo"
          className="object-cover object-left-top absolute rounded-lg inset-0 h-full w-full"
        />
      </motion.div>
    </div>
  );
};

export const Trackpad = () => {
  return (
    <div
      className="w-[40%] mx-auto h-32 rounded-xl my-1"
      style={{
        boxShadow: "0px 0px 1px 1px #00000020 inset",
      }}
    ></div>
  );
};

const KBD = ({ children, className = "", wide = false }) => (
  <div
    className={cn(
      "h-12 bg-[#1a1a1c] rounded-md border border-[#2a2a2c] flex items-center justify-center text-[10px] text-gray-300 font-normal shadow-[inset_0_-1px_0_0_rgba(0,0,0,0.5)]",
      wide ? className : "w-[35px]",
      className
    )}
  >
    {children}
  </div>
);

export const Keypad = () => {
  const fnRow = ["esc", "F1", "F2", "F3", "F4", "F5", "F6", "F7", "F8", "F9", "F10", "F11", "F12", "⏻"];
  const numberRow = ["`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "delete"];
  const qwertyRow = ["tab", "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "[", "]", "\\"];
  const homeRow = ["caps lock", "A", "S", "D", "F", "G", "H", "J", "K", "L", ";", "'", "return"];
  const bottomRow = ["shift", "Z", "X", "C", "V", "B", "N", "M", ",", ".", "/", "shift"];

  return (
    <div className="mx-0 flex-1 flex flex-col justify-start p-2" style={{ backgroundColor: 'transparent' }}>
      {/* Function row */}
      <div className="flex gap-[3px] mb-[5px]">
        {fnRow.map((key, i) => (
          <KBD key={`fn-${i}`} className={i === 0 ? "w-[55px] text-[9px]" : i === fnRow.length - 1 ? "w-[55px]" : "w-[35px] text-[9px]"}>
            {key}
          </KBD>
        ))}
      </div>
      {/* Number row */}
      <div className="flex gap-[3px] mb-[5px]">
        {numberRow.map((key, i) => (
          <KBD
            key={`num-${i}`}
            className={i === numberRow.length - 1 ? "w-[70px] text-[8px]" : "w-[35px]"}
          >
            {key}
          </KBD>
        ))}
      </div>
      {/* QWERTY row */}
      <div className="flex gap-[3px] mb-[5px]">
        <KBD className="w-[52px] text-[8px]">{qwertyRow[0]}</KBD>
        {qwertyRow.slice(1).map((key, i) => (
          <KBD key={`qw-${i}`} className="w-[35px]">{key}</KBD>
        ))}
      </div>
      {/* Home row */}
      <div className="flex gap-[3px] mb-[5px]">
        <KBD className="w-[65px] text-[8px]">{homeRow[0]}</KBD>
        {homeRow.slice(1, -1).map((key, i) => (
          <KBD key={`home-${i}`} className="w-[35px]">{key}</KBD>
        ))}
        <KBD className="w-[65px] text-[8px]">{homeRow[homeRow.length - 1]}</KBD>
      </div>
      {/* Bottom letter row */}
      <div className="flex gap-[3px] mb-[5px]">
        <KBD className="w-[80px] text-[8px]">{bottomRow[0]}</KBD>
        {bottomRow.slice(1, -1).map((key, i) => (
          <KBD key={`bot-${i}`} className="w-[35px]">{key}</KBD>
        ))}
        <KBD className="w-[80px] text-[8px]">{bottomRow[bottomRow.length - 1]}</KBD>
      </div>
      {/* Space bar row */}
      <div className="flex gap-[3px]">
        <KBD className="w-[40px] text-[8px]">fn</KBD>
        <KBD className="w-[40px] text-[9px]">⌃</KBD>
        <KBD className="w-[40px] text-[9px]">⌥</KBD>
        <KBD className="w-[50px] text-[9px]">⌘</KBD>
        <KBD className="flex-1 min-w-0" wide></KBD>
        <KBD className="w-[50px] text-[9px]">⌘</KBD>
        <KBD className="w-[40px] text-[9px]">⌥</KBD>
        <KBD className="w-[35px] text-[10px]">◀</KBD>
        <KBD className="w-[35px] h-[24px] text-[10px] flex flex-col items-center justify-center">
          <div className="text-[8px] leading-none">▲</div>
          <div className="text-[8px] leading-none">▼</div>
        </KBD>
        <KBD className="w-[35px] text-[10px]">▶</KBD>
      </div>
    </div>
  );
};

export const SpeakerGrid = () => {
  return (
    <div
      className="flex h-40 gap-[2px] px-[0.5px] w-full flex-col"
      style={{
        backgroundImage:
          "radial-gradient(circle, #08080A 0.5px, transparent 0.5px)",
        backgroundSize: "3px 3px",
      }}
    ></div>
  );
};

export const AceternityLogo = () => {
  return (
    <svg
      width="66"
      height="65"
      viewBox="0 0 66 65"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-3 w-3 text-white"
    >
      <path
        d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
        stroke="currentColor"
        strokeWidth="15"
        strokeMiterlimit="3.86874"
        strokeLinecap="round"
      />
    </svg>
  );
};
