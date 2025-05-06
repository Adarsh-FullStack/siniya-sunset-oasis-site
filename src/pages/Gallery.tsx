
import { useState, useEffect } from 'react';
import { Layout } from '../components/Layout';
import { GallerySlider } from '../components/Gallery/GallerySlider';

// Gallery images data
const galleryImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
    alt: "Sunset view from villa",
    category: "Sunset"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
    alt: "Private beach shoreline",
    category: "Beach"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb",
    alt: "Luxury villa exterior",
    category: "Interior"
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05",
    alt: "Evening sunset over water",
    category: "Sunset"
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    alt: "Luxury villa interior",
    category: "Interior"
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1590490360182-c33d57733427",
    alt: "Beach at dawn",
    category: "Beach"
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4",
    alt: "Island aerial view",
    category: "Beach"
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1536516677467-a8cf206e1066",
    alt: "Sunset from infinity pool",
    category: "Sunset"
  },
];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>(undefined);
  
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
  
  const categories = ["Sunset", "Beach", "Interior"];
  
  return (
    <Layout>
      <section className="pt-20 pb-10 bg-sunset-dark">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-12 reveal">
            <h1 className="section-title">Gallery</h1>
            <p className="section-subtitle mx-auto">
              Explore the beauty of Siniya Island through our curated collection of images
            </p>
          </div>
          
          {/* Category filters */}
          <div className="flex justify-center mb-12 reveal">
            <div className="inline-flex p-1 bg-sunset-purple/20 rounded-lg">
              <button
                onClick={() => setSelectedCategory(undefined)}
                className={`px-5 py-2 rounded-md transition-colors ${
                  selectedCategory === undefined
                    ? 'bg-sunset-orange text-white'
                    : 'text-sunset-light/70 hover:text-white'
                }`}
              >
                All
              </button>
              
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-5 py-2 rounded-md transition-colors ${
                    selectedCategory === category
                      ? 'bg-sunset-orange text-white'
                      : 'text-sunset-light/70 hover:text-white'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-10 bg-sunset-dark">
        <div className="container-custom">
          <div className="reveal">
            <GallerySlider images={galleryImages} category={selectedCategory} />
          </div>
          
          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {galleryImages
              .filter(img => selectedCategory ? img.category === selectedCategory : true)
              .map((image) => (
                <div 
                  key={image.id} 
                  className="relative overflow-hidden rounded-lg aspect-[4/3] group reveal"
                >
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-sunset-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4">
                      <p className="text-white font-medium">{image.alt}</p>
                      <p className="text-sunset-light/80 text-sm">{image.category}</p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Gallery;
