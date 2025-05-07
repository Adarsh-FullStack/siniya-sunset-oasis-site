
import { Check, Square } from 'lucide-react';

export const PropertyDetailsSection = () => {
  return (
    <div className="container-custom">
      <div className="text-center mb-12 reveal">
        <h2 className="section-title">Property Details</h2>
        <p className="section-subtitle mx-auto">
          Discover the exceptional features of our island luxury development
        </p>
        <div className="w-24 h-1 mx-auto mt-6 bg-gradient-to-r from-[#0EA5E9] to-[#33C3F0] rounded-full"></div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="reveal">
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80" 
              alt="Island aerial view" 
              className="rounded-2xl shadow-2xl shadow-[#33C3F0]/20"
            />
            
            {/* 3D-like floating cards */}
            <div className="absolute -bottom-6 -right-6 glass-card p-4 backdrop-blur-md border border-white/10 rounded-xl w-40 shadow-lg transform hover-scale">
              <div className="text-[#33C3F0] font-bold text-2xl">267</div>
              <div className="text-sunset-light/70 text-sm">Acres of Land</div>
            </div>
            
            <div className="absolute -top-6 -left-6 glass-card p-4 backdrop-blur-md border border-white/10 rounded-xl w-44 shadow-lg transform hover-scale">
              <div className="text-[#33C3F0] font-bold text-2xl">7km</div>
              <div className="text-sunset-light/70 text-sm">Private Beaches</div>
            </div>
          </div>
        </div>
        
        <div className="reveal">
          <h3 className="font-serif text-2xl font-bold text-white mb-6">A Paradise Reimagined</h3>
          <p className="text-sunset-light/80 mb-8">
            Located in the pristine waters of Umm Al Quwain, Siniya Island represents the pinnacle of luxury island living. This exclusive development spans 267 acres of immaculate landscape, offering a perfect blend of natural beauty and sophisticated amenities.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="flex items-start space-x-3">
              <Check className="h-5 w-5 text-[#33C3F0] mt-1 flex-shrink-0" />
              <div>
                <h4 className="text-white font-medium">Premium Villas</h4>
                <p className="text-sunset-light/70 text-sm">Architectural masterpieces with panoramic views</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <Check className="h-5 w-5 text-[#33C3F0] mt-1 flex-shrink-0" />
              <div>
                <h4 className="text-white font-medium">Private Marina</h4>
                <p className="text-sunset-light/70 text-sm">Berths for yachts up to 50 meters</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <Check className="h-5 w-5 text-[#33C3F0] mt-1 flex-shrink-0" />
              <div>
                <h4 className="text-white font-medium">Wellness Center</h4>
                <p className="text-sunset-light/70 text-sm">World-class spa and fitness facilities</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <Check className="h-5 w-5 text-[#33C3F0] mt-1 flex-shrink-0" />
              <div>
                <h4 className="text-white font-medium">Eco-Friendly Design</h4>
                <p className="text-sunset-light/70 text-sm">Sustainable architecture and renewable energy</p>
              </div>
            </div>
          </div>
          
          <button className="btn-primary bg-[#0EA5E9] hover:bg-[#0EA5E9]/90">
            Request Detailed Brochure <Square className="ml-2 h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
