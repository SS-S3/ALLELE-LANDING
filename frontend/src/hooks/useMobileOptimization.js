import { useState, useEffect } from 'react';

/**
 * Mobile optimization hook - detects device capabilities and preferences
 * Returns flags to conditionally render heavy effects
 */
export function useMobileOptimization() {
  const [isMobile, setIsMobile] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isLowPowerMode, setIsLowPowerMode] = useState(false);

  useEffect(() => {
    // Detect mobile device
    const checkMobile = () => {
      const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      const isSmallScreen = window.innerWidth < 768;
      const isMobileUA = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );
      setIsMobile(isTouchDevice && (isSmallScreen || isMobileUA));
    };

    // Detect reduced motion preference
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(motionQuery.matches);

    const handleMotionChange = (e) => setPrefersReducedMotion(e.matches);
    motionQuery.addEventListener('change', handleMotionChange);

    // Detect low-end device (rough heuristic)
    const checkLowPower = () => {
      const memory = navigator.deviceMemory; // GB of RAM (Chrome only)
      const cores = navigator.hardwareConcurrency;
      setIsLowPowerMode(
        (memory && memory <= 4) || (cores && cores <= 4) || isMobile
      );
    };

    checkMobile();
    checkLowPower();

    window.addEventListener('resize', checkMobile);

    return () => {
      window.removeEventListener('resize', checkMobile);
      motionQuery.removeEventListener('change', handleMotionChange);
    };
  }, []);

  // Should disable heavy effects?
  const shouldReduceEffects = isMobile || prefersReducedMotion || isLowPowerMode;

  return {
    isMobile,
    prefersReducedMotion,
    isLowPowerMode,
    shouldReduceEffects,
  };
}

/**
 * Simple mobile check without state (for initial render)
 */
export function getIsMobile() {
  if (typeof window === 'undefined') return false;
  return (
    window.innerWidth < 768 ||
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
  );
}

export default useMobileOptimization;
