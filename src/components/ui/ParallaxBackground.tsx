
import { useEffect, useRef } from 'react';

interface ParallaxBackgroundProps {
  className?: string;
}

export const ParallaxBackground = ({ className }: ParallaxBackgroundProps) => {
  const backgroundRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (!backgroundRef.current) return;
      
      const { clientX, clientY } = event;
      const { innerWidth, innerHeight } = window;
      
      // Calculate the percentage of mouse position
      const x = (clientX / innerWidth) * 100;
      const y = (clientY / innerHeight) * 100;
      
      // Create subtle movement (only a few pixels)
      const moveX = ((x - 50) * 0.05).toFixed(2);
      const moveY = ((y - 50) * 0.05).toFixed(2);
      
      backgroundRef.current.style.transform = `translate(${moveX}px, ${moveY}px)`;
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  return (
    <div 
      ref={backgroundRef}
      className={`absolute inset-0 z-0 transition-transform duration-300 ease-out ${className}`}
    >
      {/* Enhanced Particles */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white/30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 6 + 1}px`,
              height: `${Math.random() * 6 + 1}px`,
              opacity: Math.random() * 0.7,
              animation: `float ${Math.random() * 8 + 4}s ease-in-out infinite`
            }}
          />
        ))}
      </div>
    </div>
  );
};
