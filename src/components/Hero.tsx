
import { ArrowRight, Waves } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ParallaxBackground } from './ui/ParallaxBackground';
import { BubbleEffect } from './ui/BubbleEffect';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden" id="hero">
      {/* Enhanced water-themed background */}
      <div className="absolute inset-0 bg-gradient-to-br from-sunset-dark via-sunset-purple to-[#0EA5E9] bg-animate z-0" />
      
      {/* Background image with parallax effect */}
      <ParallaxBackground 
        className="z-5" 
        backgroundImage="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=60" 
        opacity={0.15}
      />
      
      {/* Animated wave pattern overlay */}
      <div className="absolute inset-0 opacity-30 z-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSI4IiBmaWxsPSJub25lIj48cGF0aCBzdHJva2U9IiNmZmYiIHN0cm9rZS1vcGFjaXR5PSIuMiIgc3Ryb2tlLXdpZHRoPSIuNSIgZD0iTTAgNCBTIDQgOCwgOCA0LCAxNiA4IiBmaWxsPSJub25lIiAvPjwvc3ZnPg==')] animate-gradient-x"></div>
      </div>
      
      {/* Enhanced bubble colors */}
      <BubbleEffect 
        className="z-15" 
        count={40} 
        colors={["rgba(255, 255, 255, 0.3)", "rgba(51, 195, 240, 0.4)", "rgba(209, 213, 219, 0.3)"]}
      />
      
      {/* Enhanced content with animations */}
      <div className="container-custom relative z-30">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-6 relative">
            <Waves className="h-12 w-12 text-[#33C3F0] animate-float absolute -left-16 -top-8 opacity-70" />
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-[#D3E4FD] mb-4 opacity-0 animate-fade-in">
              Siniya Island by Sobha
            </h1>
            <Waves className="h-12 w-12 text-[#33C3F0] animate-float absolute -right-16 -bottom-8 opacity-70" />
          </div>
          
          <p className="text-xl md:text-2xl text-sunset-light/90 mb-8 max-w-2xl mx-auto opacity-0 animate-fade-in animate-delay-200">
            A private paradise where luxury meets tranquility, nestled in the pristine 
            <span className="text-[#33C3F0] font-semibold"> waters </span>
            of the Arabian Gulf
          </p>
          
          <Link
            to="/contact"
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-md bg-gradient-to-r from-sunset-orange to-[#33C3F0] px-8 py-4 font-medium text-white transition-all duration-300 ease-out hover:scale-105 opacity-0 animate-fade-in animate-delay-300"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-[#33C3F0] to-sunset-orange opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100"></span>
            <span className="relative flex items-center">
              Book Your Stay
              <ArrowRight className="ml-2 h-5 w-5 transform transition-transform duration-300 ease-out group-hover:translate-x-1" />
            </span>
          </Link>
        </div>
      </div>
      
      {/* Enhanced scroll indicator with water ripple effect */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-30">
        <div className="flex flex-col items-center opacity-0 animate-fade-in animate-delay-500">
          <span className="text-white/70 text-sm mb-2">Scroll to Discover</span>
          <div className="relative w-6 h-6">
            <span className="absolute inset-0 rounded-full bg-white/30 animate-ping"></span>
            <span className="absolute inset-[25%] rounded-full bg-white/60"></span>
          </div>
        </div>
      </div>
    </section>
  );
};
