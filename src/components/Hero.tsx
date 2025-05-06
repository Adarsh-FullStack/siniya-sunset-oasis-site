
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ParallaxBackground } from './ui/ParallaxBackground';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-sunset-gradient bg-animate z-0" />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-sunset-overlay z-10" />
      
      {/* Parallax effect */}
      <ParallaxBackground className="z-20" />
      
      {/* Content */}
      <div className="container-custom relative z-30">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 opacity-0 animate-fade-in">
            Siniya Island by Sobha
          </h1>
          
          <p className="text-xl md:text-2xl text-sunset-light/90 mb-8 max-w-2xl mx-auto opacity-0 animate-fade-in animate-delay-200">
            A private paradise where luxury meets tranquility, nestled in the pristine waters of the Arabian Gulf
          </p>
          
          <Link
            to="/contact"
            className="btn-primary inline-flex items-center opacity-0 animate-fade-in animate-delay-300"
          >
            Book Your Stay
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-30">
        <div className="flex flex-col items-center opacity-0 animate-fade-in animate-delay-500">
          <span className="text-white/70 text-sm mb-2">Scroll to Discover</span>
          <div className="w-0.5 h-16 bg-gradient-to-b from-white/80 to-transparent" />
        </div>
      </div>
    </section>
  );
};
