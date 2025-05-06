
import { useEffect } from 'react';
import { Hero } from '../components/Hero';
import { Features } from '../components/Features';
import { PricingTeaser } from '../components/Pricing';

const Index = () => {
  useEffect(() => {
    // Enhanced scroll reveal animation
    const handleScroll = () => {
      const reveals = document.querySelectorAll('.reveal');
      
      reveals.forEach((reveal, index) => {
        const windowHeight = window.innerHeight;
        const elementTop = reveal.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
          // Add staggered delay based on index
          setTimeout(() => {
            reveal.classList.add('active');
          }, index * 100); // Staggered effect for multiple elements
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    // Trigger once on mount
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <>
      <Hero />
      <Features />
      <PricingTeaser />
    </>
  );
};

export default Index;
