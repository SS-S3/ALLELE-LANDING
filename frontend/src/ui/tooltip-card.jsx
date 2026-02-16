import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";

export const Tooltip = ({ children, content, containerClassName, maxWidth }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-block">
      <span
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        className={cn("cursor-pointer", containerClassName)}
      >
        {children}
      </span>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
              transition: {
                type: "spring",
                stiffness: 260,
                damping: 20,
              },
            }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-2 z-50"
          >
            <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-900 border border-purple-500/30 dark:border-neutral-700 rounded-xl shadow-2xl shadow-purple-500/20 dark:shadow-black/40 p-4 w-52 h-auto min-h-[5rem] flex items-center justify-center text-center text-sm text-white dark:text-neutral-200 backdrop-blur-sm">
              {content}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
