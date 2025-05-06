
import { useEffect, useRef } from 'react';

interface BubbleEffectProps {
  className?: string;
  count?: number;
  colors?: string[];
}

export const BubbleEffect = ({ 
  className = "", 
  count = 25, 
  colors = ["rgba(255, 255, 255, 0.3)", "rgba(51, 195, 240, 0.3)"] 
}: BubbleEffectProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    
    // Create and add bubbles
    for (let i = 0; i < count; i++) {
      const bubble = document.createElement('div');
      
      // Random size between 5px and 30px
      const size = Math.random() * 25 + 5;
      
      // Random position
      const left = Math.random() * 100;
      
      // Random animation duration between 8s and 20s
      const animationDuration = Math.random() * 12 + 8;
      
      // Random animation delay
      const animationDelay = Math.random() * 5;
      
      // Random color from colors array
      const color = colors[Math.floor(Math.random() * colors.length)];
      
      // Random opacity between 0.1 and 0.3
      const opacity = Math.random() * 0.2 + 0.1;
      
      // Apply styles
      bubble.className = 'absolute rounded-full';
      Object.assign(bubble.style, {
        width: `${size}px`,
        height: `${size}px`,
        left: `${left}%`,
        bottom: '-50px',
        backgroundColor: color,
        opacity: opacity.toString(),
        animation: `float-up ${animationDuration}s ease-in-out ${animationDelay}s infinite`
      });
      
      container.appendChild(bubble);
    }
    
    return () => {
      // Clean up bubbles when component unmounts
      if (container) {
        container.innerHTML = '';
      }
    };
  }, [count, colors]);
  
  return (
    <div 
      ref={containerRef}
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
    ></div>
  );
};
