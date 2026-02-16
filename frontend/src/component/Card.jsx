import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { variantReports } from "./Variantdata";

export function ExpandableCardDemo() {
  const [active, setActive] = useState(null);
  const ref = useRef(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm h-full w-full z-10" />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0  grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-slate-800 rounded-full h-6 w-6"
              onClick={() => setActive(null)}>
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px] max-h-[90vh] flex flex-col bg-slate-900/95 border border-slate-700/50 sm:rounded-3xl overflow-hidden">
              <motion.div layoutId={`image-${active.title}-${id}`} className={`flex-shrink-0 ${active.id === cards[2].id ? 'bg-white' : 'bg-slate-800/50'}`}>
                <img
                  width={200}
                  height={200}
                  src={active.src}
                  alt={active.title}
                  className={`w-full h-48 sm:rounded-tr-lg sm:rounded-tl-lg ${active.id === cards[2].id ? 'object-contain bg-white p-3' : 'object-contain bg-slate-700 p-3'}`} />
              </motion.div>

              <div className="flex-1 flex flex-col overflow-hidden">
                <div className="flex justify-between items-start p-4 flex-shrink-0">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-bold text-white">
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-slate-300">
                      {active.description}
                    </motion.p>
                  </div>

                  <motion.button
                    layoutId={`button-${active.title}-${id}`}
                    onClick={(e) => e.preventDefault()}
                    className={`px-4 py-3 text-sm rounded-full font-bold text-white flex items-center ${
                      active.id === 'pathogenic' ? 'bg-red-500 hover:bg-red-600 justify-start' :
                      active.id === 'vus' ? 'bg-gray-500 hover:bg-gray-600 justify-center' :
                      'bg-green-500 hover:bg-green-600 justify-center'
                    }`}>
                    {active.ctaText}
                  </motion.button>
                </div>
                <div className="flex-1 overflow-y-auto px-4 pb-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-slate-200 text-xs md:text-sm lg:text-base flex flex-col items-start gap-4">
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="max-w-3xl mx-auto w-full gap-4">
        {cards.map((card, index) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={`card-${card.title}-${id}`}
            onClick={() => setActive(card)}
            className="p-5 flex flex-col md:flex-row justify-between items-center hover:bg-slate-700/20 rounded-xl cursor-pointer mb-4 transition-colors">
            <div className="flex gap-5 flex-col md:flex-row ">
              <motion.div layoutId={`image-${card.title}-${id}`}>
                <img
                  width={100}
                  height={100}
                  src={card.src}
                  alt={card.title}
                  className="h-44 w-44 md:h-16 md:w-16 rounded-lg object-cover object-top bg-white border border-gray-200 p-1" />
              </motion.div>
              <div className="">
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="font-medium text-lg text-white text-center md:text-left">
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.description}-${id}`}
                  className="text-base text-slate-300 text-center md:text-left">
                  {card.description}
                </motion.p>
              </div>
            </div>
            <motion.button
              layoutId={`button-${card.title}-${id}`}
              className={`px-5 py-2.5 text-base rounded-full font-bold mt-4 md:mt-0 w-28 text-center ${
                index === 0 ? 'bg-red-500 hover:bg-red-600 text-white' : 
                index === 1 ? 'bg-gray-500 hover:bg-gray-600 text-white' : 
                'bg-green-500 hover:bg-green-600 text-white'
              }`}>
              {card.ctaText}
            </motion.button>
          </motion.div>
        ))}}
      </ul>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-white">
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const cards = variantReports.map((variant, index) => ({
  id: variant.id,
  description: variant.confidence,
  title: variant.title,
  src: variant.src,
  ctaText: variant.classification,
  ctaLink: "https://ui.aceternity.com/templates",
  content: () => {
    return (
      <div>
        <p><strong>Clinical Significance:</strong> {variant.classification}</p>
        <p><strong>Evidence Strength:</strong> {variant.evidence}</p>
        <br />
        <p><strong>Description:</strong></p>
        <p>{variant.description}</p>
        <br />
        {variant.sections.map((section, idx) => (
          <div key={idx}>
            <p><strong>{section.heading}:</strong></p>
            <p>{section.content}</p>
            <br />
          </div>
        ))}
      </div>
    );
  },
}));