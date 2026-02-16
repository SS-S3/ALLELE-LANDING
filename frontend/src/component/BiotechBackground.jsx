import React, { useMemo } from 'react';
import { motion } from 'motion/react';
import { useMobileOptimization } from '../hooks/useMobileOptimization';

/**
 * BiotechBackground - Genes, Genome & Pathogen themed living background
 * Features live animated DNA helices, pathogen particles, gene sequences,
 * and molecular networks for Allele 7.0
 */

/* Floating pathogen cell - virus-like particle with spikes */
const PathogenParticle = ({ x, y, size, delay, color, duration }) => (
  <motion.div
    className="fixed pointer-events-none"
    style={{ left: `${x}%`, top: `${y}%` }}
    animate={{
      y: [0, -30, 10, -20, 0],
      x: [0, 15, -10, 5, 0],
      rotate: [0, 360],
      scale: [0.8, 1.1, 0.9, 1.05, 0.8],
    }}
    transition={{
      duration: duration || 25,
      delay,
      repeat: Infinity,
      ease: "easeInOut"
    }}
  >
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
      {/* Pathogen body */}
      <circle cx="20" cy="20" r="8" fill={color} fillOpacity="0.15" stroke={color} strokeOpacity="0.35" strokeWidth="0.8" />
      <circle cx="20" cy="20" r="5" fill={color} fillOpacity="0.08" />
      {/* Spike proteins */}
      <line x1="20" y1="12" x2="20" y2="5" stroke={color} strokeOpacity="0.3" strokeWidth="0.7" />
      <circle cx="20" cy="4" r="1.5" fill={color} fillOpacity="0.25" />
      <line x1="28" y1="20" x2="35" y2="20" stroke={color} strokeOpacity="0.3" strokeWidth="0.7" />
      <circle cx="36" cy="20" r="1.5" fill={color} fillOpacity="0.25" />
      <line x1="12" y1="20" x2="5" y2="20" stroke={color} strokeOpacity="0.3" strokeWidth="0.7" />
      <circle cx="4" cy="20" r="1.5" fill={color} fillOpacity="0.25" />
      <line x1="20" y1="28" x2="20" y2="35" stroke={color} strokeOpacity="0.3" strokeWidth="0.7" />
      <circle cx="20" cy="36" r="1.5" fill={color} fillOpacity="0.25" />
      {/* Diagonal spikes */}
      <line x1="26" y1="14" x2="31" y2="9" stroke={color} strokeOpacity="0.2" strokeWidth="0.5" />
      <circle cx="32" cy="8" r="1" fill={color} fillOpacity="0.2" />
      <line x1="14" y1="26" x2="9" y2="31" stroke={color} strokeOpacity="0.2" strokeWidth="0.5" />
      <circle cx="8" cy="32" r="1" fill={color} fillOpacity="0.2" />
    </svg>
  </motion.div>
);

/* Base pair letter floating along a path */
const BasePairLetter = ({ letter, color, x, y, delay, drift, speed }) => (
  <motion.span
    className="fixed font-mono text-xs pointer-events-none select-none"
    style={{ 
      left: `${x}%`, 
      top: `${y}%`, 
      color,
      fontWeight: 600,
      textShadow: `0 0 8px ${color}`,
    }}
    animate={{
      opacity: [0, 0.5, 0.3, 0.6, 0],
      y: [0, -60],
      x: [0, drift],
    }}
    transition={{
      duration: speed,
      delay,
      repeat: Infinity,
      ease: "easeOut"
    }}
  >
    {letter}
  </motion.span>
);

/* Genome sequencing data stream - flowing bar pattern */
const SequenceStream = ({ top, delay, direction = 1, speed = 25 }) => (
  <motion.div
    className="fixed pointer-events-none h-[2px] z-0"
    style={{
      top: `${top}%`,
      left: direction > 0 ? '-20%' : '120%',
      width: '140%',
      background: `repeating-linear-gradient(
        ${direction > 0 ? '90deg' : '270deg'},
        transparent 0px,
        rgba(0, 200, 150, 0.4) 2px,
        rgba(0, 200, 150, 0.4) 4px,
        transparent 4px,
        transparent 8px,
        rgba(80, 140, 240, 0.35) 8px,
        rgba(80, 140, 240, 0.35) 12px,
        transparent 12px,
        transparent 18px,
        rgba(160, 100, 240, 0.3) 18px,
        rgba(160, 100, 240, 0.3) 20px,
        transparent 20px,
        transparent 26px,
        rgba(0, 180, 210, 0.35) 26px,
        rgba(0, 180, 210, 0.35) 30px,
        transparent 30px,
        transparent 40px
      )`,
      opacity: 0.5,
    }}
    animate={{
      x: direction > 0 ? ['0%', '-30%'] : ['0%', '30%'],
    }}
    transition={{
      duration: speed,
      delay,
      repeat: Infinity,
      ease: "linear"
    }}
  />
);

/* Molecular bond connecting two points */
const MolecularBond = ({ x1, y1, x2, y2, delay }) => (
  <motion.div
    className="fixed pointer-events-none z-0"
    style={{
      left: 0,
      top: 0,
      width: '100vw',
      height: '100vh',
    }}
  >
    <svg width="100%" height="100%" className="absolute inset-0" style={{ overflow: 'visible' }}>
      <motion.line
        x1={`${x1}%`} y1={`${y1}%`}
        x2={`${x2}%`} y2={`${y2}%`}
        stroke="rgba(0, 200, 160, 0.15)"
        strokeWidth="0.5"
        strokeDasharray="4 6"
        animate={{
          strokeOpacity: [0.1, 0.3, 0.1],
          strokeDashoffset: [0, -20],
        }}
        transition={{
          strokeOpacity: { duration: 6, repeat: Infinity, ease: "easeInOut", delay },
          strokeDashoffset: { duration: 8, repeat: Infinity, ease: "linear", delay },
        }}
      />
      <motion.circle
        cx={`${x1}%`} cy={`${y1}%`}
        r="3"
        fill="rgba(0, 200, 160, 0.25)"
        animate={{ r: [2, 4, 2], fillOpacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay }}
      />
      <motion.circle
        cx={`${x2}%`} cy={`${y2}%`}
        r="3"
        fill="rgba(80, 140, 240, 0.25)"
        animate={{ r: [2, 4, 2], fillOpacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: delay + 1.5 }}
      />
    </svg>
  </motion.div>
);

export const BiotechBackground = ({ children }) => {
  const { shouldReduceEffects } = useMobileOptimization();

  // Generate base pair letters with stable random values
  const basePairs = useMemo(() => {
    const letters = [
      { letter: 'A', color: 'rgba(0, 200, 150, 0.6)' },
      { letter: 'T', color: 'rgba(80, 140, 240, 0.55)' },
      { letter: 'G', color: 'rgba(160, 100, 240, 0.5)' },
      { letter: 'C', color: 'rgba(0, 180, 210, 0.55)' },
    ];
    const pairs = [];
    for (let i = 0; i < 28; i++) {
      const bp = letters[i % 4];
      // Pre-compute random drift and speed so they're stable across re-renders
      const seed = (i * 7 + 3) % 17;
      pairs.push({
        ...bp,
        x: 3 + (i * 3.5) % 94,
        y: 15 + (i * 17) % 75,
        delay: i * 0.7,
        drift: (seed / 17 - 0.5) * 20,
        speed: 8 + (seed / 17) * 4,
        key: i,
      });
    }
    return pairs;
  }, []);

  // Generate pathogen positions
  const pathogens = useMemo(() => [
    { x: 8, y: 15, size: 36, delay: 0, color: '#ff5050', duration: 28 },
    { x: 72, y: 8, size: 28, delay: 4, color: '#ff9832', duration: 22 },
    { x: 88, y: 55, size: 32, delay: 8, color: '#dc3c64', duration: 30 },
    { x: 25, y: 70, size: 24, delay: 2, color: '#ff5050', duration: 26 },
    { x: 55, y: 42, size: 20, delay: 6, color: '#ff9832', duration: 20 },
    { x: 40, y: 88, size: 30, delay: 10, color: '#dc3c64', duration: 32 },
    { x: 15, y: 45, size: 22, delay: 3, color: '#ff6040', duration: 24 },
    { x: 82, y: 82, size: 26, delay: 7, color: '#ff5050', duration: 27 },
  ], []);

  // Molecular bond connections
  const bonds = useMemo(() => [
    { x1: 12, y1: 20, x2: 28, y2: 35, delay: 0 },
    { x1: 45, y1: 10, x2: 62, y2: 25, delay: 2 },
    { x1: 70, y1: 40, x2: 88, y2: 30, delay: 4 },
    { x1: 20, y1: 60, x2: 40, y2: 75, delay: 1 },
    { x1: 55, y1: 65, x2: 75, y2: 80, delay: 3 },
    { x1: 30, y1: 45, x2: 50, y2: 55, delay: 5 },
    { x1: 80, y1: 65, x2: 92, y2: 78, delay: 2.5 },
  ], []);

  // Mobile: simplified version
  if (shouldReduceEffects) {
    return (
      <div className="relative min-h-screen bg-gradient-to-br from-[#030810] via-[#051420] to-[#030810]">
        <div className="absolute inset-0 opacity-15">
          <div className="h-full w-full bg-gradient-to-br from-teal-500/20 via-transparent to-violet-500/15" />
        </div>
        <div className="relative z-10">{children}</div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Deep genomic base gradient */}
      <div className="fixed inset-0 bg-gradient-to-br from-[#030810] via-[#051420] to-[#040c18]" />

      {/* Animated DNA double helix SVG background */}
      <motion.div
        className="fixed inset-0 pointer-events-none z-0 opacity-20"
        animate={{ backgroundPosition: ['0px 0px', '150px 300px'] }}
        transition={{ duration: 55, repeat: Infinity, ease: "linear" }}
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'150\' height=\'150\' viewBox=\'0 0 150 150\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\'%3E%3Cpath d=\'M35 5c0 22 25 22 25 45s-25 22-25 45s25 22 25 45s-25 22-25 45\' stroke=\'%2300c8a0\' stroke-opacity=\'0.55\' stroke-width=\'1.2\'/%3E%3Cpath d=\'M85 5c0 22-25 22-25 45s25 22 25 45s-25 22-25 45s25 22 25 45\' stroke=\'%23508cf0\' stroke-opacity=\'0.5\' stroke-width=\'1.2\'/%3E%3Cline x1=\'35\' y1=\'28\' x2=\'85\' y2=\'28\' stroke=\'%23b478ff\' stroke-opacity=\'0.3\' stroke-width=\'0.8\'/%3E%3Cline x1=\'35\' y1=\'73\' x2=\'85\' y2=\'73\' stroke=\'%2300b4d2\' stroke-opacity=\'0.25\' stroke-width=\'0.8\'/%3E%3Cline x1=\'35\' y1=\'118\' x2=\'85\' y2=\'118\' stroke=\'%23b478ff\' stroke-opacity=\'0.28\' stroke-width=\'0.8\'/%3E%3Ccircle cx=\'35\' cy=\'28\' r=\'2.5\' fill=\'%2300c8a0\' fill-opacity=\'0.45\'/%3E%3Ccircle cx=\'85\' cy=\'28\' r=\'2.5\' fill=\'%23508cf0\' fill-opacity=\'0.4\'/%3E%3Ccircle cx=\'35\' cy=\'73\' r=\'2\' fill=\'%2300c8a0\' fill-opacity=\'0.4\'/%3E%3Ccircle cx=\'85\' cy=\'73\' r=\'2\' fill=\'%23508cf0\' fill-opacity=\'0.35\'/%3E%3Ccircle cx=\'35\' cy=\'118\' r=\'2.5\' fill=\'%2300c8a0\' fill-opacity=\'0.45\'/%3E%3Ccircle cx=\'85\' cy=\'118\' r=\'2.5\' fill=\'%23508cf0\' fill-opacity=\'0.4\'/%3E%3C/g%3E%3C/svg%3E")',
          backgroundSize: '150px 150px',
        }}
      />

      {/* Genome sequencing scan lines - flowing data streams */}
      <SequenceStream top={12} delay={0} direction={1}  speed={22} />
      <SequenceStream top={28} delay={3} direction={-1} speed={28} />
      <SequenceStream top={48} delay={1.5} direction={1} speed={24} />
      <SequenceStream top={67} delay={5} direction={-1} speed={30} />
      <SequenceStream top={85} delay={2} direction={1}  speed={26} />

      {/* Molecular bond network */}
      {bonds.map((bond, i) => (
        <MolecularBond key={`bond-${i}`} {...bond} />
      ))}

      {/* Floating pathogen particles */}
      {pathogens.map((p, i) => (
        <PathogenParticle key={`pathogen-${i}`} {...p} />
      ))}

      {/* Base pair letters (A, T, G, C) */}
      {basePairs.map((bp) => (
        <BasePairLetter key={`bp-${bp.key}`} {...bp} />
      ))}

      {/* Pulsing genomic network nodes */}
      <motion.div
        className="fixed inset-0 pointer-events-none z-0"
        animate={{ opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        style={{
          backgroundImage: `
            radial-gradient(circle at 15% 25%, rgba(0, 200, 150, 0.5) 2px, transparent 5px),
            radial-gradient(circle at 42% 12%, rgba(160, 100, 240, 0.45) 2px, transparent 5px),
            radial-gradient(circle at 72% 32%, rgba(0, 180, 210, 0.5) 2px, transparent 5px),
            radial-gradient(circle at 28% 58%, rgba(80, 140, 240, 0.45) 2px, transparent 5px),
            radial-gradient(circle at 88% 72%, rgba(160, 100, 240, 0.5) 2px, transparent 5px),
            radial-gradient(circle at 58% 88%, rgba(0, 200, 150, 0.4) 2px, transparent 5px),
            radial-gradient(circle at 8% 78%, rgba(80, 140, 240, 0.4) 2px, transparent 5px),
            radial-gradient(circle at 95% 18%, rgba(0, 180, 210, 0.4) 2px, transparent 5px)
          `,
          backgroundSize: '250px 250px',
        }}
      />

      {/* Gene expression heat clouds */}
      <motion.div
        className="fixed inset-0 pointer-events-none z-0"
        animate={{
          opacity: [0.15, 0.35, 0.15],
          scale: [1, 1.02, 1],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        style={{
          background: `
            radial-gradient(ellipse 55% 35% at 25% 20%, rgba(0, 200, 160, 0.12), transparent),
            radial-gradient(ellipse 45% 50% at 75% 75%, rgba(160, 100, 240, 0.1), transparent),
            radial-gradient(ellipse 60% 40% at 50% 50%, rgba(0, 180, 210, 0.08), transparent),
            radial-gradient(ellipse 40% 30% at 85% 25%, rgba(80, 140, 240, 0.09), transparent)
          `,
        }}
      />

      {/* Pathogen danger zones - red/amber glow areas */}
      <motion.div
        className="fixed inset-0 pointer-events-none z-0"
        animate={{ opacity: [0.08, 0.2, 0.08] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        style={{
          background: `
            radial-gradient(ellipse 25% 20% at 10% 28%, rgba(255, 70, 70, 0.12), transparent),
            radial-gradient(ellipse 20% 18% at 78% 12%, rgba(255, 160, 50, 0.1), transparent),
            radial-gradient(ellipse 22% 22% at 85% 68%, rgba(220, 60, 100, 0.1), transparent),
            radial-gradient(ellipse 18% 15% at 30% 82%, rgba(255, 70, 70, 0.08), transparent)
          `,
        }}
      />

      {/* Content layer */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};