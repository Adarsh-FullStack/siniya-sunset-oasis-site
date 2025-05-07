
import { useEffect } from 'react';
import { Hero } from '../components/Hero';
import { Features } from '../components/Features';
import { PricingTeaser } from '../components/Pricing';
import { Testimonials } from '../components/Testimonials';
import { Amenities } from '../components/Amenities';
import { Gallery } from '../components/Gallery';
import { LocationSection } from '../components/LocationSection';
import { ContactCTA } from '../components/ContactCTA';
import { FAQ } from '../components/FAQ';
import { WaveFooter } from '../components/WaveFooter';
import { BubbleEffect } from '../components/ui/BubbleEffect';
import { StorySection } from '../components/StorySection';
import { EnhancedGallery } from '../components/EnhancedGallery';
import { PropertyDetailsSection } from '../components/PropertyDetailsSection';
import { ThreeDIslandModel } from '../components/ThreeDIslandModel';

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
    <div className="relative overflow-hidden">
      {/* Hero section with 3D component */}
      <section id="hero" className="relative">
        <Hero />
        <div className="absolute top-0 right-0 w-full h-full z-10 pointer-events-none">
          <ThreeDIslandModel />
        </div>
      </section>
      
      {/* Features section */}
      <section id="features" className="relative py-24">
        <BubbleEffect colors={["rgba(14, 165, 233, 0.2)", "rgba(51, 195, 240, 0.1)"]} />
        <Features />
      </section>
      
      {/* Property Details section */}
      <section id="property-details" className="py-24 relative overflow-hidden">
        <BubbleEffect colors={["rgba(14, 165, 233, 0.3)", "rgba(51, 195, 240, 0.2)"]} />
        <PropertyDetailsSection />
      </section>
      
      {/* Amenities section */}
      <section id="amenities" className="relative py-24">
        <ParallaxBackground 
          className="z-5" 
          backgroundImage="https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=1600&q=60" 
          opacity={0.1}
        />
        <Amenities />
      </section>
      
      {/* Enhanced Gallery section */}
      <section id="gallery" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-sunset-dark to-[#0EA5E9]/20 z-0"></div>
        <EnhancedGallery />
      </section>
      
      {/* Story section */}
      <section id="story" className="py-24 relative overflow-hidden">
        <BubbleEffect colors={["rgba(14, 165, 233, 0.2)", "rgba(255, 255, 255, 0.1)"]} />
        <StorySection />
      </section>
      
      {/* Testimonials */}
      <section id="testimonials" className="relative">
        <Testimonials />
      </section>
      
      {/* Location section */}
      <section id="location" className="relative py-24">
        <BubbleEffect colors={["rgba(14, 165, 233, 0.15)", "rgba(51, 195, 240, 0.1)"]} />
        <LocationSection />
      </section>
      
      {/* Pricing section */}
      <section id="pricing" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-sunset-dark to-[#0EA5E9]/10 z-0"></div>
        <PricingTeaser />
      </section>
      
      {/* FAQ section */}
      <section id="faq" className="py-24 relative">
        <BubbleEffect colors={["rgba(14, 165, 233, 0.15)", "rgba(51, 195, 240, 0.1)"]} />
        <FAQ />
      </section>
      
      {/* Contact CTA */}
      <section id="contact-cta" className="relative">
        <ContactCTA />
      </section>
      
      {/* Wave Footer containing Footer component */}
      <WaveFooter />
      
      {/* Mouse interaction ripple effect */}
      <div 
        className="fixed inset-0 pointer-events-none z-50"
        onClick={(e) => {
          const ripple = document.createElement('div');
          ripple.className = 'ripple';
          ripple.style.left = `${e.clientX}px`;
          ripple.style.top = `${e.clientY}px`;
          document.body.appendChild(ripple);
          
          setTimeout(() => {
            document.body.removeChild(ripple);
          }, 1500);
        }}
      />
    </div>
  );
};

export default Index;
