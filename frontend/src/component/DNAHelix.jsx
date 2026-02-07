import React from 'react';

export const DNAHelix = ({ position = 'left' }) => {
  const isLeft = position === 'left';
  
  return (
    <div 
      className={`fixed top-0 ${isLeft ? 'left-0' : 'right-0'} h-full w-16 pointer-events-none z-0 opacity-20`}
      style={{ perspective: '1000px' }}
    >
      <div className="relative h-full w-full overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-full"
            style={{
              top: `${i * 5}%`,
              animation: `dna-float ${3 + (i % 3)}s ease-in-out infinite`,
              animationDelay: `${i * 0.2}s`,
            }}
          >
            {/* DNA Base Pair */}
            <div className="relative flex items-center justify-center">
              {/* Left Backbone */}
              <div 
                className="w-2 h-2 rounded-full"
                style={{
                  backgroundColor: i % 4 === 0 ? '#00d4aa' : i % 4 === 1 ? '#0ea5e9' : i % 4 === 2 ? '#8b5cf6' : '#f59e0b',
                  boxShadow: `0 0 10px ${i % 4 === 0 ? '#00d4aa' : i % 4 === 1 ? '#0ea5e9' : i % 4 === 2 ? '#8b5cf6' : '#f59e0b'}40`,
                  transform: `translateX(${Math.sin(i * 0.5) * 20}px)`,
                }}
              />
              {/* Connection Line */}
              <div 
                className="h-[1px] bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent"
                style={{
                  width: `${30 + Math.abs(Math.sin(i * 0.5)) * 20}px`,
                }}
              />
              {/* Right Backbone */}
              <div 
                className="w-2 h-2 rounded-full"
                style={{
                  backgroundColor: i % 4 === 0 ? '#f59e0b' : i % 4 === 1 ? '#8b5cf6' : i % 4 === 2 ? '#0ea5e9' : '#00d4aa',
                  boxShadow: `0 0 10px ${i % 4 === 0 ? '#f59e0b' : i % 4 === 1 ? '#8b5cf6' : i % 4 === 2 ? '#0ea5e9' : '#00d4aa'}40`,
                  transform: `translateX(${-Math.sin(i * 0.5) * 20}px)`,
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
  const bases = ['A', 'T', 'G', 'C'];
  const sequence = [...Array(100)].map(() => bases[Math.floor(Math.random() * 4)]);
  
  return (
    <div className="fixed bottom-0 left-0 w-full h-8 pointer-events-none z-0 overflow-hidden opacity-10">
      <div 
        className="whitespace-nowrap font-mono text-xs tracking-widest"
        style={{
          animation: 'sequence-scroll 60s linear infinite',
        }}
      >
        {sequence.map((base, i) => (
          <span 
            key={i}
            className={`
              ${base === 'A' ? 'text-[#00d4aa]' : ''}
              ${base === 'T' ? 'text-[#f59e0b]' : ''}
              ${base === 'G' ? 'text-[#0ea5e9]' : ''}
              ${base === 'C' ? 'text-[#8b5cf6]' : ''}
            `}
          >
            {base}
          </span>
        ))}
        {sequence.map((base, i) => (
          <span 
            key={`dup-${i}`}
            className={`
              ${base === 'A' ? 'text-[#00d4aa]' : ''}
              ${base === 'T' ? 'text-[#f59e0b]' : ''}
              ${base === 'G' ? 'text-[#0ea5e9]' : ''}
              ${base === 'C' ? 'text-[#8b5cf6]' : ''}
            `}
          >
            {base}
          </span>
        ))}
      </div>
      <style>{`
        @keyframes sequence-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
};

export default DNAHelix;
