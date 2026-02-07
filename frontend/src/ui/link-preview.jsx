import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";

export const LinkPreview = ({ children, url, className, imageSrc }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    window.open(url, '_blank');
  };

  return (
    <>
      <span
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        onClick={handleClick}
        className={cn(
          "relative inline-block cursor-pointer",
          className
        )}
      >
        {children}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.6 }}
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
              exit={{ opacity: 0, y: 20, scale: 0.6 }}
              className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-2 z-50"
            >
              <div className="bg-white dark:bg-black border border-neutral-200 dark:border-neutral-800 rounded-xl shadow-xl overflow-hidden">
                <div className="p-4 w-[300px]">
                  <div className="text-sm text-neutral-600 dark:text-neutral-400 mb-2">
                    Preview
                  </div>
                  <div className="text-xs text-neutral-500 dark:text-neutral-500 break-all">
                    {url}
                  </div>
                  <div className="mt-3 h-[150px] bg-neutral-100 dark:bg-neutral-900 rounded-lg flex items-center justify-center overflow-hidden">
                    {imageSrc ? (
                      <img 
                        src={imageSrc} 
                        alt="Preview" 
                        className="w-full h-full object-fill"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                    ) : null}
                    <div className={`text-neutral-400 text-sm ${imageSrc ? 'hidden' : 'flex'} items-center justify-center w-full h-full`}>
                      Link Preview
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </span>
    </>
  );
};
