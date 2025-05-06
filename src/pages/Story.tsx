
import { useEffect } from 'react';
import { Layout } from '../components/Layout';

// Timeline data
const timeline = [
  {
    title: "Concept",
    year: "2018",
    description: "The vision for Siniya Island was born, combining sustainable luxury with natural beauty in a pristine island setting.",
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&h=600"
  },
  {
    title: "Design",
    year: "2019",
    description: "Award-winning architects and designers collaborated to create a harmonious blend of modern luxury and natural surroundings.",
    image: "https://images.unsplash.com/photo-1536516677467-a8cf206e1066?auto=format&fit=crop&w=800&h=600"
  },
  {
    title: "Build",
    year: "2020-2022",
    description: "Construction was undertaken with meticulous attention to detail and environmental sustainability as guiding principles.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&h=600"
  },
  {
    title: "Unveil",
    year: "2023",
    description: "Siniya Island opened its doors to guests, offering an unparalleled luxury experience in perfect harmony with nature.",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&h=600"
  }
];

const Story = () => {
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
            <h1 className="section-title">Our Story</h1>
            <p className="section-subtitle mx-auto">
              From vision to reality, discover the journey behind Siniya Island's creation
            </p>
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-sunset-dark">
        <div className="container-custom">
          {/* About section */}
          <div className="glass-card p-8 mb-20 reveal">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="font-serif text-2xl font-bold text-white mb-4">A Vision of Paradise</h2>
                <p className="text-sunset-light/80 mb-4">
                  Nestled in the pristine waters of the Arabian Gulf, Siniya Island represents the culmination of a bold vision to create the ultimate luxury living experience in perfect harmony with nature.
                </p>
                <p className="text-sunset-light/80">
                  Sobha's commitment to excellence and attention to detail is evident in every aspect of this extraordinary development, from the masterful architecture to the thoughtfully curated amenities and services.
                </p>
              </div>
              <div className="rounded-xl overflow-hidden h-[300px]">
                <img 
                  src="https://images.unsplash.com/photo-1482938289607-e9573fc25ebb" 
                  alt="Siniya Island aerial view" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          
          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-sunset-purple/30"></div>
            
            {timeline.map((item, index) => (
              <div 
                key={index}
                className={`relative flex items-center mb-20 ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                } reveal`}
              >
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full bg-sunset-orange z-10"></div>
                
                {/* Content */}
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12' : 'pl-12'}`}>
                  <div className={`glass-card p-6 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                    <div className="inline-block bg-sunset-purple/20 px-3 py-1 rounded mb-2">
                      <span className="text-sunset-orange font-medium">{item.year}</span>
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sunset-light/80">
                      {item.description}
                    </p>
                  </div>
                </div>
                
                {/* Image */}
                <div className={`w-1/2 ${index % 2 === 0 ? 'pl-12' : 'pr-12'}`}>
                  <div className="rounded-xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-64 object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Vision for the future */}
          <div className="glass-card p-8 mt-20 reveal">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="font-serif text-2xl font-bold text-white mb-4">Looking to the Future</h2>
              <p className="text-sunset-light/80">
                As we continue to refine and enhance the Siniya Island experience, we remain committed to our founding principles of exceptional quality, sustainable luxury, and creating unforgettable moments for our residents and guests. The journey of Siniya Island is just beginning, and we invite you to be part of this extraordinary story.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Story;
