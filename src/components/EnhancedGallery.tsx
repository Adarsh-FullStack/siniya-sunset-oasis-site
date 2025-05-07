
import { useState } from 'react';
import { ArrowRight, Image } from 'lucide-react';
import { Link } from 'react-router-dom';

const galleryImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
    alt: "Ocean waves",
    size: "large",
    category: "Beach"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb",
    alt: "Island aerial view",
    size: "medium",
    category: "Aerial"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    alt: "Island landscape",
    size: "medium",
    category: "Nature"
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb",
    alt: "Sunset view",
    size: "small",
    category: "Sunset"
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1504893524553-b855bce32c67",
    alt: "Rock formation",
    size: "small",
    category: "Nature"
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1433086966358-54859d0ed716",
    alt: "Waterfall",
    size: "small",
    category: "Nature"
  }
];

export const EnhancedGallery = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  
  return (
    <div className="container-custom relative z-10">
      <div className="text-center mb-12 reveal">
        <h2 className="section-title">Island Gallery</h2>
        <p className="section-subtitle mx-auto">
          A glimpse into the paradise that awaits you at Siniya Island
        </p>
        <div className="w-24 h-1 mx-auto mt-6 bg-gradient-to-r from-[#0EA5E9] to-[#33C3F0] rounded-full"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 reveal">
        {galleryImages.map((image) => (
          <div 
            key={image.id}
            className={`relative overflow-hidden rounded-lg underwater-card ${
              image.size === 'large' ? 'md:col-span-2 md:row-span-2 aspect-square' :
              image.size === 'medium' ? 'lg:col-span-2 aspect-video' : 'aspect-square'
            }`}
            onMouseEnter={() => setHoveredId(image.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <img 
              src={`${image.src}?auto=format&fit=crop&w=800&q=80`} 
              alt={image.alt}
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
            />
            
            {/* Hover overlay */}
            <div 
              className={`absolute inset-0 bg-gradient-to-t from-[#0EA5E9]/80 via-transparent to-transparent 
                flex flex-col justify-end p-4 transition-opacity duration-300
                ${hoveredId === image.id ? 'opacity-100' : 'opacity-0'}`}
            >
              <h3 className="text-white font-serif text-xl font-medium">{image.alt}</h3>
              <p className="text-white/70 text-sm">{image.category}</p>
              
              <div className="mt-4 transform translate-y-4 transition-transform duration-300 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
                <span className="inline-flex items-center text-white text-sm font-medium">
                  View Details
                  <ArrowRight className="ml-1 w-4 h-4" />
                </span>
              </div>
            </div>
            
            {/* Animated ripple effect on hover */}
            {hoveredId === image.id && (
              <div className="absolute inset-0 pointer-events-none">
                <div className="ripple animate-ripple"></div>
              </div>
            )}
          </div>
        ))}
      </div>
      
      <div className="flex justify-center mt-10 reveal">
        <Link to="/#gallery" className="btn-primary">
          View All Images <Image className="w-4 h-4 ml-2" />
        </Link>
      </div>
    </div>
  );
};
