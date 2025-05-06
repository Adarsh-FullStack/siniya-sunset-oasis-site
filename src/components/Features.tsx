
import { Bed, Infinity, Utensils, Sun } from 'lucide-react';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Feature = ({ icon, title, description }: FeatureProps) => {
  return (
    <div className="glass-card p-6 flex flex-col items-center text-center">
      <div className="bg-sunset-purple/20 p-3 rounded-full mb-4">
        {icon}
      </div>
      <h3 className="font-serif text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-sunset-light/70 text-sm">{description}</p>
    </div>
  );
};

export const Features = () => {
  return (
    <section className="py-20 bg-sunset-dark relative">
      <div className="container-custom">
        <div className="text-center mb-12 reveal">
          <h2 className="section-title">Experience Luxury Living</h2>
          <p className="section-subtitle mx-auto">
            Discover a world of exclusive amenities and services designed for ultimate comfort and relaxation
          </p>
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
              icon={<Infinity className="h-6 w-6 text-sunset-orange" />}
              title="Infinity Pool"
              description="Swim in our stunning infinity pool that seamlessly blends with the horizon of the Arabian Gulf"
            />
          </div>
          
          <div className="reveal">
            <Feature
              icon={<Utensils className="h-6 w-6 text-sunset-orange" />}
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
