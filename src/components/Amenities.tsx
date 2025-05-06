
import { Bed, Utensils, Sun, Waves } from 'lucide-react';
import { BubbleEffect } from './ui/BubbleEffect';

export const Amenities = () => {
  return (
    <section id="amenities" className="py-24 relative overflow-hidden bg-sunset-purple/10">
      {/* Background image with opacity */}
      <div className="absolute inset-0 bg-cover bg-center opacity-10" 
           style={{backgroundImage: "url('https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1600&q=60')"}} />
      
      {/* Enhanced water effect */}
      <BubbleEffect className="z-10" count={30} />
      
      <div className="container-custom relative z-20">
        <div className="text-center mb-16 reveal">
          <h2 className="section-title text-transparent bg-clip-text bg-gradient-to-r from-white via-[#33C3F0] to-white">
            Island Amenities
          </h2>
          <p className="section-subtitle mx-auto">
            Indulge in our world-class facilities designed for your comfort and enjoyment
          </p>
          <div className="w-24 h-1 mx-auto mt-6 bg-gradient-to-r from-sunset-orange to-[#33C3F0] rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="glass-card p-6 md:p-8 flex items-start space-x-4 reveal">
            <div className="bg-gradient-to-br from-sunset-purple/20 to-[#33C3F0]/20 p-4 rounded-full flex-shrink-0">
              <Bed className="h-8 w-8 text-sunset-orange" />
            </div>
            <div>
              <h3 className="font-serif text-xl font-semibold text-white mb-2">Luxury Accommodations</h3>
              <p className="text-sunset-light/80">
                Choose from our collection of beachfront villas, water bungalows, and exclusive suites, 
                each offering breathtaking views and personalized service.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center text-white/70">
                  <span className="w-1.5 h-1.5 rounded-full bg-sunset-orange mr-2"></span>
                  Private pools and sundecks
                </li>
                <li className="flex items-center text-white/70">
                  <span className="w-1.5 h-1.5 rounded-full bg-sunset-orange mr-2"></span>
                  Premium bedding and amenities
                </li>
                <li className="flex items-center text-white/70">
                  <span className="w-1.5 h-1.5 rounded-full bg-sunset-orange mr-2"></span>
                  24/7 butler service
                </li>
              </ul>
            </div>
          </div>
          
          <div className="glass-card p-6 md:p-8 flex items-start space-x-4 reveal">
            <div className="bg-gradient-to-br from-sunset-purple/20 to-[#33C3F0]/20 p-4 rounded-full flex-shrink-0">
              <Utensils className="h-8 w-8 text-sunset-gold" />
            </div>
            <div>
              <h3 className="font-serif text-xl font-semibold text-white mb-2">Fine Dining</h3>
              <p className="text-sunset-light/80">
                Experience culinary excellence at our gourmet restaurants featuring international cuisines 
                prepared by award-winning chefs using locally-sourced ingredients.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center text-white/70">
                  <span className="w-1.5 h-1.5 rounded-full bg-sunset-gold mr-2"></span>
                  Five signature restaurants
                </li>
                <li className="flex items-center text-white/70">
                  <span className="w-1.5 h-1.5 rounded-full bg-sunset-gold mr-2"></span>
                  Private dining experiences
                </li>
                <li className="flex items-center text-white/70">
                  <span className="w-1.5 h-1.5 rounded-full bg-sunset-gold mr-2"></span>
                  24-hour in-villa dining
                </li>
              </ul>
            </div>
          </div>
          
          <div className="glass-card p-6 md:p-8 flex items-start space-x-4 reveal">
            <div className="bg-gradient-to-br from-sunset-purple/20 to-[#33C3F0]/20 p-4 rounded-full flex-shrink-0">
              <Sun className="h-8 w-8 text-sunset-orange" />
            </div>
            <div>
              <h3 className="font-serif text-xl font-semibold text-white mb-2">Recreation & Activities</h3>
              <p className="text-sunset-light/80">
                Discover a world of adventure and relaxation with our curated selection of 
                water sports, excursions, and wellness activities.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center text-white/70">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#33C3F0] mr-2"></span>
                  Scuba diving and snorkeling
                </li>
                <li className="flex items-center text-white/70">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#33C3F0] mr-2"></span>
                  Yacht excursions
                </li>
                <li className="flex items-center text-white/70">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#33C3F0] mr-2"></span>
                  Desert safaris
                </li>
              </ul>
            </div>
          </div>
          
          <div className="glass-card p-6 md:p-8 flex items-start space-x-4 reveal">
            <div className="bg-gradient-to-br from-sunset-purple/20 to-[#33C3F0]/20 p-4 rounded-full flex-shrink-0">
              <Waves className="h-8 w-8 text-[#33C3F0]" />
            </div>
            <div>
              <h3 className="font-serif text-xl font-semibold text-white mb-2">Wellness & Spa</h3>
              <p className="text-sunset-light/80">
                Rejuvenate your mind, body, and soul at our world-class spa offering holistic 
                treatments inspired by ancient Arabian healing techniques.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center text-white/70">
                  <span className="w-1.5 h-1.5 rounded-full bg-sunset-pink mr-2"></span>
                  Oceanfront massage pavilions
                </li>
                <li className="flex items-center text-white/70">
                  <span className="w-1.5 h-1.5 rounded-full bg-sunset-pink mr-2"></span>
                  Steam rooms and saunas
                </li>
                <li className="flex items-center text-white/70">
                  <span className="w-1.5 h-1.5 rounded-full bg-sunset-pink mr-2"></span>
                  Yoga and meditation sessions
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
