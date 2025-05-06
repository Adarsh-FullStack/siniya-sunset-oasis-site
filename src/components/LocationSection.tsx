
import { MapPin } from 'lucide-react';
import { ParallaxBackground } from './ui/ParallaxBackground';

export const LocationSection = () => {
  return (
    <section id="location" className="py-24 relative overflow-hidden">
      <ParallaxBackground 
        className="z-5" 
        backgroundImage="https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?auto=format&fit=crop&w=1600&q=60" 
        opacity={0.2}
      />
      
      <div className="absolute inset-0 bg-sunset-dark/80 backdrop-blur-sm z-10"></div>
      
      <div className="container-custom relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="reveal">
            <h2 className="section-title">Location</h2>
            <p className="text-sunset-light/90 mb-6">
              Nestled in the pristine waters of Umm Al Quwain, Siniya Island is a secluded paradise 
              accessible only by private boat or helicopter, ensuring privacy and exclusivity 
              for our esteemed guests.
            </p>
            
            <div className="glass-card p-6 mb-6">
              <div className="flex items-start mb-4">
                <MapPin className="h-5 w-5 text-sunset-orange mr-2 flex-shrink-0 mt-1" />
                <span className="text-white">Siniya Island, Umm Al Quwain, United Arab Emirates</span>
              </div>
              
              <div className="space-y-2 text-sunset-light/70">
                <p>• 45-minute drive from Dubai International Airport</p>
                <p>• 30-minute boat ride from the mainland marina</p>
                <p>• 15-minute helicopter transfer available</p>
              </div>
            </div>
            
            <button className="btn-primary">
              Get Directions
            </button>
          </div>
          
          <div className="h-[400px] rounded-xl overflow-hidden relative glass-card reveal">
            {/* This would be a map component in a real application */}
            <div className="absolute inset-0 bg-sunset-purple/20 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-12 w-12 text-sunset-orange mx-auto mb-4" />
                <p className="text-white font-serif text-xl">Interactive Map</p>
                <p className="text-sunset-light/70">Map visualization would appear here</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
