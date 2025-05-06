
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BubbleEffect } from './ui/BubbleEffect';

export const ContactCTA = () => {
  return (
    <section id="contact-cta" className="py-20 relative overflow-hidden bg-sunset-gradient-light bg-animate">
      {/* Added bubble effect with blue tint */}
      <BubbleEffect 
        className="z-10" 
        count={30} 
        colors={["rgba(51, 195, 240, 0.3)", "rgba(255, 255, 255, 0.2)"]}
      />
      
      <div className="container-custom relative z-20">
        <div className="max-w-4xl mx-auto glass-card p-8 md:p-12 text-center reveal">
          <h2 className="section-title">Begin Your Island Journey</h2>
          <p className="text-lg md:text-xl text-sunset-light/90 mb-8 max-w-2xl mx-auto">
            Ready to experience the ultimate luxury retreat? Our concierge team is standing by to assist with your booking and answer any questions about your stay.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-lg mx-auto mb-8">
            <div className="glass-card p-4 hover:bg-white/5 transition-all duration-300">
              <p className="font-serif text-lg text-white mb-1">Call Us</p>
              <p className="text-sunset-orange">+971 XX XXX XXXX</p>
            </div>
            
            <div className="glass-card p-4 hover:bg-white/5 transition-all duration-300">
              <p className="font-serif text-lg text-white mb-1">Email Us</p>
              <p className="text-sunset-orange">info@siniyaisland.com</p>
            </div>
          </div>
          
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-md bg-white px-8 py-4 font-medium text-sunset-dark transition-all duration-300 ease-out hover:bg-sunset-light hover:scale-105"
          >
            Contact Us
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};
