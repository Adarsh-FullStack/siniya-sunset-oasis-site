
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
      <div className="relative">
        <Hero />
        <div className="absolute top-0 right-0 w-full h-full z-10 pointer-events-none">
          <ThreeDIslandModel />
        </div>
      </div>
      
      {/* Features section */}
      <Features />
      
      {/* Property Details section */}
      <section id="property-details" className="py-24 relative overflow-hidden">
        <BubbleEffect colors={["rgba(14, 165, 233, 0.3)", "rgba(51, 195, 240, 0.2)"]} />
        <PropertyDetailsSection />
      </section>
      
      {/* Amenities section */}
      <Amenities />
      
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
      <Testimonials />
      
      {/* Location section */}
      <LocationSection />
      
      {/* Pricing section */}
      <PricingTeaser />
      
      {/* FAQ section */}
      <FAQ />
      
      {/* Contact CTA */}
      <ContactCTA />
      
      {/* Wave Footer containing Footer component */}
      <WaveFooter />
    </div>
  );
};

export default Index;
