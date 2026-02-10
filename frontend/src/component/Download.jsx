import React from "react";
import { motion } from "motion/react";
import { useMobileOptimization } from "../hooks/useMobileOptimization";

export function DownloadSection() {
  const { shouldReduceEffects } = useMobileOptimization();

  return (
    <div
      id="download"
      className="relative flex flex-col items-center justify-center py-20 px-4 bg-transparent"
    >
      {/* Background Effects - only on desktop */}
      {!shouldReduceEffects && (
        <>
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-500/5 pointer-events-none" />
          <div className="absolute top-20 left-1/4 w-32 h-32 bg-cyan-400/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-1/4 w-40 h-40 bg-blue-400/10 rounded-full blur-3xl animate-pulse delay-1000" />
        </>
      )}
      
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative text-3xl md:text-4xl font-bold text-center mb-4 text-white bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"
      >
        Download AlleleRank 7.0
      </motion.h2>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative text-lg text-center mb-12 text-neutral-300 max-w-2xl"
      >
        Offline genomic analysis platform. No internet required after installation.
      </motion.p>

      {/* Download Buttons */}
      <div className="relative flex flex-col md:flex-row gap-6">
        {/* Windows Button */}
        <motion.button
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 700, damping: 20 }}
          whileHover={shouldReduceEffects ? {} : {
            scale: 1.06,
            y: -4,
            boxShadow: "0 20px 40px -12px rgba(6,182,212,0.4)",
          }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-600 to-cyan-700 hover:from-cyan-500 hover:to-cyan-600 text-white rounded-xl font-semibold text-lg shadow-[0_0_20px_rgba(6,182,212,0.3)] border border-cyan-400/20"
        >
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
            <path d="M3 12V6.75l6-1.32v6.48L3 12zm17-9v8.75l-10 .15V5.21L20 3zM3 13l6 .09v6.81l-6-1.15V13zm17 .25V22l-10-1.91V13.1l10 .15z" />
          </svg>
          Download for Windows
        </motion.button>

        {/* macOS Button */}
        <motion.button
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 700, damping: 20 }}
          whileHover={shouldReduceEffects ? {} : {
            scale: 1.06,
            y: -4,
            boxShadow: "0 20px 40px -12px rgba(59,130,246,0.4)",
          }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white rounded-xl font-semibold text-lg shadow-[0_0_20px_rgba(59,130,246,0.3)] border border-blue-400/20"
        >
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
          </svg>
          Download for Mac
        </motion.button>
      </div>

      {/* System Requirements */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="relative mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl w-full"
      >
        {/* Windows Requirements */}
        <div className={`rounded-xl border border-cyan-400/20 p-6 bg-black/50 shadow-[0_0_30px_rgba(6,182,212,0.15)] hover:shadow-[0_0_40px_rgba(6,182,212,0.25)] hover:border-cyan-400/30 transition-all duration-300 group ${!shouldReduceEffects ? 'backdrop-blur-xl' : ''}`}>
          <div className="flex items-center gap-3 mb-4">
            <div className={`w-3 h-3 bg-gradient-to-r from-cyan-400 to-cyan-300 rounded-full shadow-[0_0_10px_rgba(6,182,212,0.5)] ${!shouldReduceEffects ? 'animate-pulse' : ''}`}></div>
            <h4 className="font-semibold text-white group-hover:text-cyan-300 transition-colors">
              Windows Requirements
            </h4>
          </div>
          <ul className="text-sm text-neutral-300 space-y-3">
            <li className="flex items-center gap-3 hover:text-cyan-300 transition-colors">
              <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full shadow-[0_0_4px_rgba(6,182,212,0.8)]"></span>
              Windows 10 or later (64-bit)
            </li>
            <li className="flex items-center gap-3 hover:text-cyan-300 transition-colors">
              <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full shadow-[0_0_4px_rgba(6,182,212,0.8)]"></span>
              Minimum 8 GB RAM
            </li>
            <li className="flex items-center gap-3 hover:text-cyan-300 transition-colors">
              <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full shadow-[0_0_4px_rgba(6,182,212,0.8)]"></span>
              2 GB free disk space
            </li>
            <li className="flex items-center gap-3 hover:text-cyan-300 transition-colors">
              <span className="w-1.5 h-1.5 bg-green-400 rounded-full shadow-[0_0_4px_rgba(34,197,94,0.8)]"></span>
              No internet connection required
            </li>
          </ul>
        </div>

        {/* macOS Requirements */}
        <div className={`rounded-xl border border-blue-400/20 p-6 bg-black/50 shadow-[0_0_30px_rgba(59,130,246,0.15)] hover:shadow-[0_0_40px_rgba(59,130,246,0.25)] hover:border-blue-400/30 transition-all duration-300 group ${!shouldReduceEffects ? 'backdrop-blur-xl' : ''}`}>
          <div className="flex items-center gap-3 mb-4">
            <div className={`w-3 h-3 bg-gradient-to-r from-blue-400 to-blue-300 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)] ${!shouldReduceEffects ? 'animate-pulse' : ''}`}></div>
            <h4 className="font-semibold text-white group-hover:text-blue-300 transition-colors">
              macOS Requirements
            </h4>
          </div>
          <ul className="text-sm text-neutral-300 space-y-3">
            <li className="flex items-center gap-3 hover:text-blue-300 transition-colors">
              <span className="w-1.5 h-1.5 bg-blue-400 rounded-full shadow-[0_0_4px_rgba(59,130,246,0.8)]"></span>
              macOS 10.14 (Mojave) or later
            </li>
            <li className="flex items-center gap-3 hover:text-blue-300 transition-colors">
              <span className="w-1.5 h-1.5 bg-blue-400 rounded-full shadow-[0_0_4px_rgba(59,130,246,0.8)]"></span>
              Minimum 8 GB RAM
            </li>
            <li className="flex items-center gap-3 hover:text-blue-300 transition-colors">
              <span className="w-1.5 h-1.5 bg-blue-400 rounded-full shadow-[0_0_4px_rgba(59,130,246,0.8)]"></span>
              2 GB free disk space
            </li>
            <li className="flex items-center gap-3 hover:text-blue-300 transition-colors">
              <span className="w-1.5 h-1.5 bg-green-400 rounded-full shadow-[0_0_4px_rgba(34,197,94,0.8)]"></span>
              No internet connection required
            </li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
}