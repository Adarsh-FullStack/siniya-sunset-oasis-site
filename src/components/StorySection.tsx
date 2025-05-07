
import { ParallaxBackground } from './ui/ParallaxBackground';

export const StorySection = () => {
  return (
    <div className="container-custom relative z-10">
      <ParallaxBackground 
        backgroundImage="https://images.unsplash.com/photo-1504893524553-b855bce32c67?auto=format&fit=crop&w=1600&q=60" 
        opacity={0.1} 
      />
      
      <div className="text-center mb-12 reveal">
        <h2 className="section-title">Our Story</h2>
        <p className="section-subtitle mx-auto">
          The vision and journey behind Siniya Island's transformation
        </p>
        <div className="w-24 h-1 mx-auto mt-6 bg-gradient-to-r from-[#0EA5E9] to-[#33C3F0] rounded-full"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1 reveal">
          <h3 className="font-serif text-2xl font-bold text-white mb-4">From Vision to Reality</h3>
          <p className="text-sunset-light/80 mb-6">
            What began as a visionary concept in 2018 has evolved into one of the most prestigious luxury developments in the UAE. Siniya Island represents a harmonious balance between luxurious living and environmental preservation.
          </p>
          <p className="text-sunset-light/80 mb-6">
            Our founder's dream was to create a sanctuary that celebrates the natural beauty of the Arabian Gulf while offering unparalleled luxury experiences. After years of meticulous planning and sustainable development, we're proud to present a truly unique island paradise.
          </p>
          
          <div className="relative glass-card p-6 border border-white/10 rounded-lg mt-8">
            <div className="absolute -top-5 -left-5 h-10 w-10 rounded-full bg-[#0EA5E9] flex items-center justify-center">
              <span className="text-white font-bold">"</span>
            </div>
            <blockquote className="text-white italic">
              Our mission is to create not just luxury homes, but a legacy of sustainable island living that future generations will cherish.
            </blockquote>
            <p className="text-right text-sunset-light/70 mt-4">- Abdullah Al Hamrani, Founder</p>
          </div>
        </div>
        
        <div className="order-1 md:order-2 reveal">
          <div className="relative">
            {/* Timeline */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#0EA5E9] to-[#33C3F0]/30 rounded-full"></div>
            
            <div className="ml-8 mb-10 relative">
              <div className="absolute -left-10 top-1 h-4 w-4 rounded-full bg-[#0EA5E9]"></div>
              <div className="font-serif text-xl text-white mb-2">2018</div>
              <p className="text-sunset-light/80">Initial concept and environmental studies</p>
            </div>
            
            <div className="ml-8 mb-10 relative">
              <div className="absolute -left-10 top-1 h-4 w-4 rounded-full bg-[#0EA5E9]"></div>
              <div className="font-serif text-xl text-white mb-2">2020</div>
              <p className="text-sunset-light/80">Master plan approval and groundbreaking</p>
            </div>
            
            <div className="ml-8 mb-10 relative">
              <div className="absolute -left-10 top-1 h-4 w-4 rounded-full bg-[#0EA5E9]"></div>
              <div className="font-serif text-xl text-white mb-2">2022</div>
              <p className="text-sunset-light/80">Infrastructure completion and phase one development</p>
            </div>
            
            <div className="ml-8 relative">
              <div className="absolute -left-10 top-1 h-4 w-4 rounded-full bg-[#0EA5E9] pulse"></div>
              <div className="font-serif text-xl text-white mb-2">2024</div>
              <p className="text-sunset-light/80">First residences completed and island opening</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
