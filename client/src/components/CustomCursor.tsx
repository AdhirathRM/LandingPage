import { useEffect, useState } from 'react';
import { motion, useMotionValue } from 'framer-motion';

export const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false);
  
  // Motion values bypass React state for 60fps+ movement
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      // Detect interactive elements for state-based visual changes
      const target = e.target as HTMLElement;
      setIsHovering(
        !!target.closest('button, a, .carousel-item, [role="button"]')
      );
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999] flex items-center justify-center"
      style={{ 
        x: mouseX, 
        y: mouseY, 
        translateX: '-50%', 
        translateY: '-50%',
        width: isHovering ? 60 : 30,
        height: isHovering ? 60 : 30,
      }}
      transition={{ type: 'spring', stiffness: 500, damping: 28, mass: 0.5 }}
    >
      {/* The Central Point */}
      <div className={`w-1 h-1 rounded-full transition-colors duration-300 ${isHovering ? 'bg-red-500 shadow-[0_0_10px_#ef4444]' : 'bg-[#FFD700]'}`} />

      {/* The Outer Reticle Brackets */}
      <div className={`absolute inset-0 border transition-all duration-300 rounded-sm ${isHovering ? 'border-red-500/50 rotate-45 scale-110' : 'border-[#00F5FF]/20 rotate-0 scale-100'}`} />
      
      {/* Tactical Crosshair Lines (Only visible on hover) */}
      {isHovering && (
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          className="absolute inset-0"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-2 bg-red-500" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1px] h-2 bg-red-500" />
          <div className="absolute left-0 top-1/2 -translate-y-1/2 h-[1px] w-2 bg-red-500" />
          <div className="absolute right-0 top-1/2 -translate-y-1/2 h-[1px] w-2 bg-red-500" />
        </motion.div>
      )}
    </motion.div>
  );
};