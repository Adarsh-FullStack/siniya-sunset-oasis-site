
import { Bed, Infinity, Utensils, Sun, Waves } from 'lucide-react';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Feature = ({ icon, title, description }: FeatureProps) => {
  return (
    <div className="glass-card underwater-card p-6 flex flex-col items-center text-center transform transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-[#33C3F0]/20 group">
      <div className="bg-gradient-to-br from-sunset-purple/20 to-[#33C3F0]/20 p-4 rounded-full mb-4 transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-sunset-purple/40 group-hover:to-[#33C3F0]/40">
        {icon}
      </div>
      <h3 className="font-serif text-xl font-semibold text-white mb-2 group-hover:text-[#33C3F0] transition-colors duration-300">{title}</h3>
      <p className="text-sunset-light/70 text-sm transition-colors duration-300 group-hover:text-white/90">{description}</p>
      <div className="mt-4 h-1 w-0 bg-gradient-to-r from-sunset-orange to-[#33C3F0] transition-all duration-500 group-hover:w-16 rounded-full"></div>
    </div>
  );
};

export const Features = () => {
  return (
    <section className="py-20 bg-sunset-dark relative overflow-hidden">
      {/* Enhanced Water-inspired background elements */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            className="absolute h-[30vh] w-[200vw] bg-[radial-gradient(ellipse_at_center,_#33C3F0_0%,_transparent_70%)] blur-3xl"
            style={{
              top: `${i * 20}%`,
              left: `-${(i * 25) % 100}%`,
              opacity: 0.03 + i * 0.01,
              animation: `float ${12 + i * 2}s ease-in-out infinite`
            }}
          />
        ))}
      </div>
      
      {/* Background image with opacity */}
      <div className="absolute inset-0 bg-cover bg-center opacity-5" 
           style={{backgroundImage: "url('https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1600&q=60')"}} />
      
      <div className="container-custom relative">
        <div className="text-center mb-12 reveal">
          <h2 className="section-title text-transparent bg-clip-text bg-gradient-to-r from-white via-[#33C3F0] to-white">Experience Luxury Living</h2>
          <p className="section-subtitle mx-auto">
            Discover a world of exclusive amenities and services designed for ultimate comfort and relaxation
          </p>
          <div className="w-24 h-1 mx-auto mt-6 bg-gradient-to-r from-sunset-orange to-[#33C3F0] rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="reveal">
            <Feature
              icon={<Bed className="h-6 w-6 text-sunset-orange" />}
              title="Private Beach"
              description="Enjoy the serenity of your own pristine shoreline with crystal-clear waters and powdery white sand"
            />
          </div>
          
          <div className="reveal">
            <Feature
              icon={<Infinity className="h-6 w-6 text-[#33C3F0]" />}
              title="Infinity Pool"
              description="Swim in our stunning infinity pool that seamlessly blends with the horizon of the Arabian Gulf"
            />
          </div>
          
          <div className="reveal">
            <Feature
              icon={<Utensils className="h-6 w-6 text-sunset-gold" />}
              title="Gourmet Dining"
              description="Savor exquisite culinary creations prepared by our world-class chefs using the finest ingredients"
            />
          </div>
          
          <div className="reveal">
            <Feature
              icon={<Sun className="h-6 w-6 text-sunset-orange" />}
              title="Breathtaking Sunsets"
              description="Witness spectacular sunsets that paint the sky with vibrant hues of orange, pink, and purple"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
