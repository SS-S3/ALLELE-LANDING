import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";

export const Tooltip = ({ children, content, containerClassName }) => {
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
            <div className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-lg shadow-xl p-4 max-w-xs">
              {content}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
