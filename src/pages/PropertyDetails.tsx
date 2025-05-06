
import { useState, useEffect } from 'react';
import { Layout } from '../components/Layout';
import { ParallaxBackground } from '../components/ui/ParallaxBackground';

const PropertyDetails = () => {
  const [activeTab, setActiveTab] = useState('villa');
  const [stats, setStats] = useState({ area: 0, bedrooms: 0, amenities: 0 });
  
  // Animate stats on mount
  useEffect(() => {
    setTimeout(() => {
      setStats({
        area: 12000,
        bedrooms: 12,
        amenities: 24
      });
    }, 500);
    
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
  
  const tabs = [
    { id: 'villa', label: 'Private Villa' },
    { id: 'suite', label: 'Executive Suite' },
    { id: 'bungalow', label: 'Beach Bungalow' }
  ];
  
  const sellingPoints = [
    {
      title: "Architectural Excellence",
      description: "Award-winning design that blends modern luxury with natural surroundings",
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=600&h=400"
    },
    {
      title: "Unparalleled Privacy",
      description: "Exclusive island setting with discrete service and maximum privacy",
      image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=600&h=400"
    },
    {
      title: "Pristine Environment",
      description: "Immerse yourself in the untouched natural beauty of Siniya Island",
      image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&w=600&h=400"
    },
    {
      title: "World-Class Amenities",
      description: "From private pools to personal chefs, experience the very best in luxury living",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=600&h=400"
    }
  ];
  
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 min-h-[60vh] flex items-center">
        {/* Background */}
        <div className="absolute inset-0 bg-sunset-gradient bg-animate z-0" />
        <div className="absolute inset-0 bg-sunset-overlay z-10" />
        <ParallaxBackground className="z-20" />
        
        {/* Content */}
        <div className="container-custom relative z-30">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="section-title">Luxury Living Redefined</h1>
            <p className="section-subtitle mx-auto">
              Discover the exceptional features and amenities that make our properties the pinnacle of luxury island living
            </p>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-16 bg-sunset-dark">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card p-8 text-center reveal">
              <h3 className="text-5xl font-serif font-bold text-sunset-orange mb-2">
                {stats.area.toLocaleString()}
              </h3>
              <p className="text-sunset-light/80">Square Feet</p>
            </div>
            
            <div className="glass-card p-8 text-center reveal">
              <h3 className="text-5xl font-serif font-bold text-sunset-orange mb-2">
                {stats.bedrooms}
              </h3>
              <p className="text-sunset-light/80">Luxury Bedrooms</p>
            </div>
            
            <div className="glass-card p-8 text-center reveal">
              <h3 className="text-5xl font-serif font-bold text-sunset-orange mb-2">
                {stats.amenities}
              </h3>
              <p className="text-sunset-light/80">Premium Amenities</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Properties Section */}
      <section className="py-20 bg-sunset-dark">
        <div className="container-custom">
          <div className="text-center mb-12 reveal">
            <h2 className="section-title">Suites & Villas</h2>
            <p className="section-subtitle mx-auto">
              Each residence is thoughtfully designed to provide the ultimate in comfort, style, and luxury
            </p>
          </div>
          
          {/* Tabs */}
          <div className="flex justify-center mb-12 reveal">
            <div className="inline-flex p-1 bg-sunset-purple/20 rounded-lg">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-5 py-2 rounded-md transition-colors ${
                    activeTab === tab.id
                      ? 'bg-sunset-orange text-white'
                      : 'text-sunset-light/70 hover:text-white'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
          
          {/* Tab Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center reveal">
            <div className="relative group overflow-hidden rounded-xl">
              <img 
                src={`https://images.unsplash.com/photo-${activeTab === 'villa' ? '1600585154340-be6161a56a0c' : activeTab === 'suite' ? '1590490360182-c33d57733427' : '1520250497591-112f2f40a3f4'}?auto=format&fit=crop&w=800&h=600`}
                alt={activeTab === 'villa' ? "Private Villa" : activeTab === 'suite' ? "Executive Suite" : "Beach Bungalow"}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-sunset-dark/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-serif text-2xl font-bold text-white">
                  {activeTab === 'villa' ? "Private Villa" : activeTab === 'suite' ? "Executive Suite" : "Beach Bungalow"}
                </h3>
              </div>
            </div>
            
            <div>
              <h3 className="font-serif text-2xl font-bold text-white mb-4">
                {activeTab === 'villa' ? "Ultra-Luxury Private Villa" : activeTab === 'suite' ? "Executive Suite Experience" : "Beachfront Bungalow Retreat"}
              </h3>
              <p className="text-sunset-light/80 mb-6">
                {activeTab === 'villa' 
                  ? "Our signature private villas offer the ultimate in luxury island living. Set in lush landscapes with private pools and direct beach access, these expansive residences feature multiple bedrooms, spa-like bathrooms, gourmet kitchens, and indoor-outdoor living spaces designed for entertaining and relaxation."
                  : activeTab === 'suite'
                  ? "The Executive Suite provides sophisticated luxury with panoramic ocean views. These spacious accommodations feature a master bedroom with en-suite bathroom, separate living area, private terrace, and exclusive amenities including personal butler service."
                  : "Experience the magic of beachfront living in our charming bungalows. Step directly from your private deck onto the white sands of Siniya Island. These intimate accommodations feature one bedroom, a luxurious bathroom, sitting area, and outdoor shower, all within steps of the azure waters."}
              </p>
              
              <ul className="space-y-3 mb-8">
                {(activeTab === 'villa' 
                  ? ["5 bedrooms with en-suite bathrooms", "Private infinity pool", "Personal chef and butler", "Private beach access"]
                  : activeTab === 'suite'
                  ? ["Master bedroom with ocean view", "Separate living room", "Private balcony", "Butler service"]
                  : ["Beachfront location", "Private deck", "Outdoor shower", "Direct beach access"]
                ).map((feature, index) => (
                  <li key={index} className="flex items-center text-sunset-light/80">
                    <span className="w-2 h-2 bg-sunset-orange rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Selling Points Section */}
      <section className="py-20 bg-sunset-dark">
        <div className="container-custom">
          <div className="text-center mb-12 reveal">
            <h2 className="section-title">Why Choose Siniya Island</h2>
            <p className="section-subtitle mx-auto">
              Unmatched luxury, unparalleled experiences, and unforgettable moments await
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {sellingPoints.map((point, index) => (
              <div 
                key={index} 
                className="glass-card overflow-hidden reveal"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={point.image} 
                    alt={point.title} 
                    className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl font-semibold text-white mb-2">{point.title}</h3>
                  <p className="text-sunset-light/70">{point.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PropertyDetails;
