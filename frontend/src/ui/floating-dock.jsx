import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { cn } from "@/lib/utils";

export const FloatingDock = ({ items, desktopClassName, mobileClassName }) => {
  return (
    <>
      <FloatingDockDesktop items={items} className={desktopClassName} />
      <FloatingDockMobile items={items} className={mobileClassName} />
    </>
  );
};

const FloatingDockMobile = ({ items, className }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={cn("relative block md:hidden", className)}>
      <button
        onClick={() => setOpen(!open)}
        className="h-10 w-10 rounded-full bg-gray-50 dark:bg-neutral-800 flex items-center justify-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-5 w-5 text-neutral-500 dark:text-neutral-400"
        >
          <path d="M3 12h18M3 6h18M3 18h18" />
        </svg>
      </button>
      {open && (
        <div className="absolute bottom-full mb-2 inset-x-0 flex flex-col gap-2">
          {items.map((item, idx) => (
            <a
              key={item.title}
              href={item.href}
              className="h-10 w-10 rounded-full bg-gray-50 dark:bg-neutral-800 flex items-center justify-center"
            >
              <div className="h-4 w-4">{item.icon}</div>
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

const FloatingDockDesktop = ({ items, className }) => {
  let mouseX = useMotionValue(Infinity);
  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={cn(
        "mx-auto hidden md:flex h-16 gap-4 items-end rounded-2xl bg-gray-50 dark:bg-neutral-900 px-4 pb-3",
        className
      )}
    >
      {items.map((item) => (
        <IconContainer mouseX={mouseX} key={item.title} {...item} />
      ))}
    </motion.div>
  );
};

function IconContainer({ mouseX, title, icon, href }) {
  let ref = useRef(null);

  let distance = useTransform(mouseX, (val) => {
    let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  let widthTransform = useTransform(distance, [-150, 0, 150], [40, 100, 40]);
  let heightTransform = useTransform(distance, [-150, 0, 150], [40, 100, 40]);

  let widthTransformIcon = useTransform(distance, [-150, 0, 150], [20, 50, 20]);
  let heightTransformIcon = useTransform(
    distance,
    [-150, 0, 150],
    [20, 50, 20]
  );

  let scaleTransform = useTransform(
    distance,
    [-150, 0, 150],
    [1, 1.5, 1]
  );

  let width = useSpring(widthTransform, {
    mass: 0.1,
    stiffness: 200,
    damping: 15,
  });
  let height = useSpring(heightTransform, {
    mass: 0.1,
    stiffness: 200,
    damping: 15,
  });

  let widthIcon = useSpring(widthTransformIcon, {
    mass: 0.1,
    stiffness: 200,
    damping: 15,
  });
  let heightIcon = useSpring(heightTransformIcon, {
    mass: 0.1,
    stiffness: 200,
    damping: 15,
  });

  let scale = useSpring(scaleTransform, {
    mass: 0.1,
    stiffness: 200,
    damping: 15,
  });

  const [hovered, setHovered] = useState(false);

  return (
    <a href={href} className="relative">
      <motion.div
        ref={ref}
        style={{ width, height, scale }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="aspect-square rounded-full bg-gray-200 dark:bg-neutral-800 flex items-center justify-center relative transition-all duration-300"
      >
        <motion.div
          style={{ width: widthIcon, height: heightIcon }}
          className="flex items-center justify-center"
        >
          {icon}
        </motion.div>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, y: 10, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, y: 2, x: "-50%" }}
            className="px-2 py-0.5 whitespace-pre rounded-md bg-gray-100 border dark:bg-neutral-800 dark:border-neutral-900 dark:text-white border-gray-200 text-neutral-700 absolute left-1/2 -translate-x-1/2 -top-8 w-fit text-xs z-50"
          >
            {title}
          </motion.div>
        )}
      </motion.div>
    </a>
  );
}
