
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const PricingTeaser = () => {
  return (
    <section className="py-20 bg-sunset-gradient-light bg-animate relative">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto glass-card p-8 md:p-12 text-center reveal">
          <h2 className="section-title">Exclusive Packages</h2>
          <p className="section-subtitle mx-auto">
            Experience our island paradise with our carefully curated packages designed to provide the ultimate luxury experience
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 mb-10">
            <div className="border border-white/20 rounded-lg p-6 bg-sunset-dark/40 hover:bg-sunset-purple/20 transition-all duration-300 transform hover:-translate-y-1">
              <h3 className="font-serif text-xl font-semibold text-white mb-2">Weekend Escape</h3>
              <p className="text-3xl font-bold text-sunset-orange mb-1">$2,500</p>
              <p className="text-sm text-sunset-light/70 mb-2">per night</p>
              <p className="text-sunset-light/80 text-sm mt-4">Perfect for short luxury getaways</p>
            </div>
            
            <div className="border border-sunset-gold/50 rounded-lg p-6 bg-sunset-dark/40 hover:bg-sunset-purple/20 transition-all duration-300 transform hover:-translate-y-1 scale-105 shadow-lg shadow-sunset-gold/20">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-sunset-gold text-sunset-dark text-xs py-1 px-3 rounded-full">
                MOST POPULAR
              </div>
              <h3 className="font-serif text-xl font-semibold text-white mb-2">Week in Paradise</h3>
              <p className="text-3xl font-bold text-sunset-orange mb-1">$12,000</p>
              <p className="text-sm text-sunset-light/70 mb-2">per week</p>
              <p className="text-sunset-light/80 text-sm mt-4">Complete luxury experience with all amenities</p>
            </div>
            
            <div className="border border-white/20 rounded-lg p-6 bg-sunset-dark/40 hover:bg-sunset-purple/20 transition-all duration-300 transform hover:-translate-y-1">
              <h3 className="font-serif text-xl font-semibold text-white mb-2">Monthly Stay</h3>
              <p className="text-3xl font-bold text-sunset-orange mb-1">$40,000</p>
              <p className="text-sm text-sunset-light/70 mb-2">per month</p>
              <p className="text-sunset-light/80 text-sm mt-4">Extended luxury living with premium services</p>
            </div>
          </div>
          
          <Link
            to="/pricing"
            className="inline-flex items-center text-sunset-orange hover:text-sunset-gold transition-colors"
          >
            See All Packages
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};
