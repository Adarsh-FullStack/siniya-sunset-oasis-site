
import { useEffect, useRef } from 'react';

export const AquaHeroRipple = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    
    // Create ripple effect on mouse move
    const handleMouseMove = (e: MouseEvent) => {
      const ripple = document.createElement('div');
      ripple.className = 'ripple';
      
      const rect = container.getBoundingClientRect();
      const size = Math.random() * 100 + 50;
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;
      
      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;
      ripple.style.width = `${size}px`;
      ripple.style.height = `${size}px`;
      
      container.appendChild(ripple);
      
      // Remove ripple after animation completes
      setTimeout(() => {
        if (ripple.parentNode === container) {
          container.removeChild(ripple);
        }
      }, 1500);
    };
    
    // Create occasional random ripples
    const createRandomRipple = () => {
      if (!container) return;
      
      const rect = container.getBoundingClientRect();
      const size = Math.random() * 100 + 30;
      const x = Math.random() * rect.width;
      const y = Math.random() * rect.height;
      
      const ripple = document.createElement('div');
      ripple.className = 'ripple';
      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;
      ripple.style.width = `${size}px`;
      ripple.style.height = `${size}px`;
      
      container.appendChild(ripple);
      
      // Remove ripple after animation completes
      setTimeout(() => {
        if (ripple.parentNode === container) {
          container.removeChild(ripple);
        }
      }, 1500);
    };
    
    container.addEventListener('mousemove', handleMouseMove);
    
    // Create random ripples periodically
    const intervalId = setInterval(createRandomRipple, 3000);
    
    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      clearInterval(intervalId);
    };
  }, []);
  
  return (
    <div 
      ref={containerRef}
      className="absolute inset-0 z-20 pointer-events-none overflow-hidden"
    ></div>
  );
};
