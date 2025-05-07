
import { useEffect, useRef } from 'react';

export const ThreeDIslandModel = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    
    // Create floating island elements
    const createIslandElements = () => {
      // Island base
      const island = document.createElement('div');
      island.className = 'absolute w-64 h-64 rounded-full bg-[#0EA5E9]/20 backdrop-blur-sm';
      Object.assign(island.style, {
        bottom: '20%',
        right: '10%',
        boxShadow: '0 0 60px rgba(14, 165, 233, 0.4)',
        transform: 'perspective(800px) rotateX(60deg) scale(0.8)',
      });
      
      // Island top
      const islandTop = document.createElement('div');
      islandTop.className = 'absolute w-48 h-48 rounded-full bg-[#0EA5E9]/30';
      Object.assign(islandTop.style, {
        bottom: '30%',
        right: '15%',
        boxShadow: '0 0 40px rgba(14, 165, 233, 0.3)',
        transform: 'perspective(800px) rotateX(60deg) scale(0.6)',
      });
      
      // Palm tree
      const palmTree = document.createElement('div');
      palmTree.className = 'absolute w-4 h-20 bg-[#654321]';
      Object.assign(palmTree.style, {
        bottom: '40%',
        right: '25%',
        transform: 'perspective(800px) rotateX(30deg)',
        borderRadius: '2px',
      });
      
      // Palm leaves
      const createLeaf = (rotation: number, translateX: number) => {
        const leaf = document.createElement('div');
        leaf.className = 'absolute w-16 h-6 bg-[#33C3F0]/80';
        Object.assign(leaf.style, {
          bottom: '60%',
          right: `calc(25% + ${translateX}px)`,
          transform: `perspective(800px) rotateX(30deg) rotateZ(${rotation}deg)`,
          borderRadius: '50%',
        });
        return leaf;
      };
      
      // Add elements to container
      container.appendChild(island);
      container.appendChild(islandTop);
      container.appendChild(palmTree);
      container.appendChild(createLeaf(45, -10));
      container.appendChild(createLeaf(-45, 10));
      container.appendChild(createLeaf(0, 0));
      container.appendChild(createLeaf(90, -5));
      container.appendChild(createLeaf(-90, 5));
      
      // Add floating animation
      const elements = [island, islandTop, palmTree];
      elements.forEach((el) => {
        el.style.animation = `float ${5 + Math.random() * 2}s ease-in-out infinite alternate`;
      });
    };
    
    createIslandElements();
    
    // Mouse movement parallax effect
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      const moveX = (clientX - innerWidth / 2) / 50;
      const moveY = (clientY - innerHeight / 2) / 50;
      
      const elements = container.children;
      for (let i = 0; i < elements.length; i++) {
        const el = elements[i] as HTMLElement;
        const depth = i / 5; // Different depths for parallax
        
        el.style.transform = `translateX(${moveX * depth}px) translateY(${moveY * depth}px) ${el.style.transform}`;
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (container) container.innerHTML = '';
    };
  }, []);
  
  return (
    <div 
      ref={containerRef} 
      className="absolute inset-0 overflow-hidden"
    ></div>
  );
};
