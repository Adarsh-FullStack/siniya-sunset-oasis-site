
import { ArrowRight, Images } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BubbleEffect } from './ui/BubbleEffect';

export const PricingTeaser = () => {
  return (
    <section id="pricing" className="py-20 relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1600&q=60" 
          alt="Ocean background" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-sunset-gradient-light mix-blend-overlay"></div>
      </div>
      
      {/* Bubbles animation */}
      <BubbleEffect 
        className="z-5" 
        count={40} 
        colors={["rgba(14, 165, 233, 0.3)", "rgba(255, 255, 255, 0.2)"]} 
      />
      
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto glass-card p-8 md:p-12 text-center reveal backdrop-blur-md">
          <h2 className="section-title">Exclusive Packages</h2>
          <p className="section-subtitle mx-auto">
            Experience our island paradise with our carefully curated packages designed to provide the ultimate luxury experience
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 mb-10">
            <div className="border border-white/20 rounded-lg p-6 bg-sunset-dark/40 hover:bg-[#0EA5E9]/20 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-lg hover:shadow-[#33C3F0]/20">
              <div className="flex justify-center mb-4">
                <Images className="h-12 w-12 text-[#33C3F0] opacity-70" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-white mb-2">Weekend Escape</h3>
              <p className="text-3xl font-bold text-sunset-orange mb-1">$2,500</p>
              <p className="text-sm text-sunset-light/70 mb-2">per night</p>
              <ul className="text-left space-y-2 text-sunset-light/80 text-sm my-4">
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-[#33C3F0] rounded-full mr-2"></span>
                  <span>Luxury accommodation</span>
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-[#33C3F0] rounded-full mr-2"></span>
                  <span>Breakfast included</span>
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-[#33C3F0] rounded-full mr-2"></span>
                  <span>One water activity</span>
                </li>
              </ul>
            </div>
            
            <div className="border border-sunset-gold/50 rounded-lg p-6 bg-sunset-dark/40 hover:bg-[#0EA5E9]/20 transition-all duration-300 transform hover:-translate-y-2 scale-105 shadow-lg shadow-sunset-gold/20">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-sunset-gold text-sunset-dark text-xs py-1 px-3 rounded-full">
                MOST POPULAR
              </div>
              <div className="flex justify-center mb-4">
                <Images className="h-12 w-12 text-[#33C3F0] opacity-70" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-white mb-2">Week in Paradise</h3>
              <p className="text-3xl font-bold text-sunset-orange mb-1">$12,000</p>
              <p className="text-sm text-sunset-light/70 mb-2">per week</p>
              <ul className="text-left space-y-2 text-sunset-light/80 text-sm my-4">
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-[#33C3F0] rounded-full mr-2"></span>
                  <span>Premium villa</span>
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-[#33C3F0] rounded-full mr-2"></span>
                  <span>All meals included</span>
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-[#33C3F0] rounded-full mr-2"></span>
                  <span>Daily activities</span>
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-[#33C3F0] rounded-full mr-2"></span>
                  <span>Spa treatment</span>
                </li>
              </ul>
            </div>
            
            <div className="border border-white/20 rounded-lg p-6 bg-sunset-dark/40 hover:bg-[#0EA5E9]/20 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-lg hover:shadow-[#33C3F0]/20">
              <div className="flex justify-center mb-4">
                <Images className="h-12 w-12 text-[#33C3F0] opacity-70" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-white mb-2">Monthly Stay</h3>
              <p className="text-3xl font-bold text-sunset-orange mb-1">$40,000</p>
              <p className="text-sm text-sunset-light/70 mb-2">per month</p>
              <ul className="text-left space-y-2 text-sunset-light/80 text-sm my-4">
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-[#33C3F0] rounded-full mr-2"></span>
                  <span>Exclusive residence</span>
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-[#33C3F0] rounded-full mr-2"></span>
                  <span>Personal concierge</span>
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-[#33C3F0] rounded-full mr-2"></span>
                  <span>All inclusive</span>
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-[#33C3F0] rounded-full mr-2"></span>
                  <span>Weekly excursions</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <img 
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=60" 
                alt="Island view" 
                className="rounded-lg object-cover h-48 hover:scale-105 transition-transform duration-500"
              />
              <img 
                src="https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&w=600&q=60" 
                alt="Water villa" 
                className="rounded-lg object-cover h-48 hover:scale-105 transition-transform duration-500"
              />
              <img 
                src="https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?auto=format&fit=crop&w=600&q=60"
                alt="Luxury interior" 
                className="rounded-lg object-cover h-48 hover:scale-105 transition-transform duration-500"
              />
            </div>
            
            <Link
              to="/pricing"
              className="inline-flex items-center text-[#33C3F0] hover:text-white transition-colors"
            >
              See All Packages
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
