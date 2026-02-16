import React from 'react';
import { useMobileOptimization } from '../hooks/useMobileOptimization';

export const DNAHelix = ({ position = 'left' }) => {
  const { shouldReduceEffects } = useMobileOptimization();
  const isLeft = position === 'left';

  // Don't render on mobile
  if (shouldReduceEffects) {
    return null;
  }

  // Simplified helix with fewer elements
  return (
    <div 
      className={`fixed top-0 ${isLeft ? 'left-0' : 'right-0'} h-full w-12 pointer-events-none z-0 opacity-15`}
    >
      <div className="relative h-full w-full overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-full flex items-center justify-center"
            style={{
              top: `${i * 12}%`,
              animation: `dna-float ${4 + (i % 2)}s ease-in-out infinite`,
              animationDelay: `${i * 0.3}s`,
            }}
          >
            {/* Simple DNA base pairs */}
            <div className="flex items-center gap-2">
              <div 
                className="w-1.5 h-1.5 rounded-full"
                style={{
                  backgroundColor: i % 4 === 0 ? '#06b6d4' : i % 4 === 1 ? '#8b5cf6' : i % 4 === 2 ? '#10b981' : '#f59e0b',
                }}
              />
              <div 
                className="h-[1px] w-6 bg-gradient-to-r from-cyan-500/20 to-purple-500/20"
              />
              <div 
                className="w-1.5 h-1.5 rounded-full"
                style={{
                  backgroundColor: i % 4 === 0 ? '#8b5cf6' : i % 4 === 1 ? '#06b6d4' : i % 4 === 2 ? '#f59e0b' : '#10b981',
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const GenomicSequence = () => {
  const { shouldReduceEffects } = useMobileOptimization();

  if (shouldReduceEffects) {
    return null;
  }

  const sequence = 'ATCGATCGATCGATCGATCGATCGATCG';
  
  return (
    <div className="fixed bottom-0 left-0 w-full h-6 pointer-events-none z-0 overflow-hidden opacity-[0.08]">
      <div 
        className="whitespace-nowrap font-mono text-xs tracking-wider text-cyan-400/30"
        style={{
          animation: 'sequence-scroll 30s linear infinite',
        }}
      >
        {sequence.repeat(10)}
      </div>
    </div>
  );
};

export default DNAHelix;
