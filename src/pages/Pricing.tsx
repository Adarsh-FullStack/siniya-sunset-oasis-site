
import { useState, useEffect } from 'react';
import { Layout } from '../components/Layout';
import { ArrowRight, Check } from 'lucide-react';

// Package data
const packages = [
  {
    name: "Standard",
    price: 2500,
    frequency: "per night",
    oneTimeOption: 15000,
    description: "A perfect introduction to the luxury of Siniya Island",
    features: [
      "Luxury accommodation",
      "Daily breakfast",
      "Airport transfers",
      "Access to island amenities"
    ],
    popular: false,
    type: "Weekend Escape"
  },
  {
    name: "Deluxe",
    price: 12000,
    frequency: "per week",
    oneTimeOption: 70000,
    description: "Our most popular package for a complete luxury experience",
    features: [
      "Premium villa accommodation",
      "All meals included",
      "Airport transfers",
      "Daily spa treatment",
      "Private chef",
      "Exclusive island activities"
    ],
    popular: true,
    type: "Week in Paradise"
  },
  {
    name: "Premium",
    price: 40000,
    frequency: "per month",
    oneTimeOption: 250000,
    description: "The ultimate extended luxury stay experience",
    features: [
      "Ultra-luxury villa accommodation",
      "All meals with customized menu",
      "Helicopter transfers",
      "Unlimited spa treatments",
      "Private chef and butler",
      "Yacht excursions",
      "Personalized concierge service"
    ],
    popular: false,
    type: "Monthly Stay"
  }
];

// Comparison data
const comparisonFeatures = [
  "Luxury Accommodation",
  "Meals Included",
  "Transfers",
  "Spa Services",
  "Private Staff",
  "Exclusive Activities",
  "Yacht Access",
  "Concierge Service"
];

const comparisonData = {
  "Standard": [true, false, true, false, false, false, false, true],
  "Deluxe": [true, true, true, true, true, true, false, true],
  "Premium": [true, true, true, true, true, true, true, true]
};

const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(true);
  
  useEffect(() => {
    // Scroll reveal animation
    const handleScroll = () => {
      const reveals = document.querySelectorAll('.reveal');
      reveals.forEach((reveal) => {
        const windowHeight = window.innerHeight;
        const elementTop = reveal.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
          reveal.classList.add('active');
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    // Trigger once on mount
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <Layout>
      <section className="pt-20 pb-10 bg-sunset-dark">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-12 reveal">
            <h1 className="section-title">Pricing & Packages</h1>
            <p className="section-subtitle mx-auto">
              Choose from our carefully crafted packages, designed to provide the ultimate luxury experience
            </p>
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-sunset-dark">
        <div className="container-custom">
          {/* Pricing toggle */}
          <div className="flex justify-center mb-12 reveal">
            <div className="inline-flex items-center bg-sunset-purple/20 p-1 rounded-lg">
              <button
                onClick={() => setIsMonthly(true)}
                className={`px-5 py-2 rounded-md transition-colors ${
                  isMonthly
                    ? 'bg-sunset-orange text-white'
                    : 'text-sunset-light/70 hover:text-white'
                }`}
              >
                Regular Rate
              </button>
              <button
                onClick={() => setIsMonthly(false)}
                className={`px-5 py-2 rounded-md transition-colors ${
                  !isMonthly
                    ? 'bg-sunset-orange text-white'
                    : 'text-sunset-light/70 hover:text-white'
                }`}
              >
                One-Time Payment
              </button>
            </div>
          </div>
          
          {/* Pricing cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div 
                key={index}
                className={`relative glass-card p-6 rounded-xl border transition-transform duration-300 hover:-translate-y-2 reveal ${
                  pkg.popular
                    ? 'border-sunset-gold/50 shadow-lg shadow-sunset-gold/20'
                    : 'border-white/10'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-sunset-gold text-sunset-dark text-xs py-1 px-3 rounded-full">
                    MOST POPULAR
                  </div>
                )}
                
                <div className="bg-sunset-purple/20 rounded-lg inline-block px-3 py-1 mb-3">
                  <span className="text-sm text-sunset-light">{pkg.type}</span>
                </div>
                
                <h3 className="font-serif text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                
                <div className="mb-4">
                  <div className="flex items-end">
                    <span className="text-4xl font-bold text-sunset-orange">
                      ${isMonthly ? pkg.price.toLocaleString() : pkg.oneTimeOption.toLocaleString()}
                    </span>
                    <span className="text-sunset-light/70 ml-1">
                      {isMonthly ? pkg.frequency : "one-time"}
                    </span>
                  </div>
                </div>
                
                <p className="text-sunset-light/80 mb-6 text-sm">
                  {pkg.description}
                </p>
                
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sunset-light/80 text-sm">
                      <Check className="h-4 w-4 text-sunset-orange mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className="w-full btn-primary">
                  Book Now <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
          
          {/* Comparison table */}
          <div className="mt-24 reveal">
            <h2 className="section-title text-center mb-12">Package Comparison</h2>
            
            <div className="overflow-x-auto">
              <table className="w-full glass-card">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="py-4 px-6 text-left text-sunset-light">Features</th>
                    {packages.map((pkg, index) => (
                      <th key={index} className="py-4 px-6 text-center">
                        <span 
                          className={`${
                            pkg.popular ? 'text-sunset-gold' : 'text-white'
                          } font-serif font-semibold`}
                        >
                          {pkg.name}
                        </span>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {comparisonFeatures.map((feature, rowIndex) => (
                    <tr key={rowIndex} className="border-b border-white/10 last:border-0">
                      <td className="py-3 px-6 text-left text-sunset-light/80">
                        {feature}
                      </td>
                      {packages.map((pkg, colIndex) => (
                        <td key={colIndex} className="py-3 px-6 text-center">
                          {comparisonData[pkg.name as keyof typeof comparisonData][rowIndex] ? (
                            <Check className="h-5 w-5 text-sunset-orange mx-auto" />
                          ) : (
                            <span className="block w-5 h-0.5 bg-sunset-light/30 mx-auto"></span>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Pricing;
