
import { useState } from 'react';
import { ArrowRight, Image } from 'lucide-react';
import { Link } from 'react-router-dom';

const galleryImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
    alt: "Ocean waves",
    size: "large",
    category: "Beach",
    description: "Crystal clear turquoise waters gently lapping against pristine white sand beaches, creating an idyllic tropical paradise."
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb",
    alt: "Island aerial view",
    size: "medium",
    category: "Aerial",
    description: "Breathtaking panoramic view of our exclusive private island surrounded by the azure waters of the Arabian Gulf."
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    alt: "Island landscape",
    size: "medium",
    category: "Nature",
    description: "Lush tropical vegetation and pristine natural landscapes create the perfect backdrop for luxury island living."
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb",
    alt: "Sunset view",
    size: "small",
    category: "Sunset",
    description: "Experience breathtaking sunsets that paint the sky in vibrant hues of orange, pink, and gold every evening."
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1504893524553-b855bce32c67",
    alt: "Rock formation",
    size: "small",
    category: "Nature",
    description: "Unique natural rock formations along the coastline create dramatic vistas and private secluded coves."
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1433086966358-54859d0ed716",
    alt: "Waterfall",
    size: "small",
    category: "Nature",
    description: "Discover hidden waterfalls and natural freshwater pools nestled within the island's lush interior landscape."
  }
];

export const EnhancedGallery = () => {
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
            className={`relative overflow-hidden rounded-lg flip-card ${
              image.size === 'large' ? 'md:col-span-2 md:row-span-2 aspect-square' :
              image.size === 'medium' ? 'lg:col-span-2 aspect-video' : 'aspect-square'
            }`}
          >
            <div className="flip-card-inner">
              {/* Front of card */}
              <div className="flip-card-front">
                <img 
                  src={`${image.src}?auto=format&fit=crop&w=800&q=80`} 
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Back of card */}
              <div className="flip-card-back">
                <h3 className="font-serif text-xl font-medium mb-2">{image.alt}</h3>
                <p className="text-white/90 text-center mb-4">{image.description}</p>
                <div className="mt-2 inline-block">
                  <span className="flex items-center text-white text-sm font-medium border border-white/50 rounded-full px-4 py-1">
                    {image.category}
                    <ArrowRight className="ml-1 w-4 h-4" />
                  </span>
                </div>
              </div>
            </div>
            
            {/* Animated ripple effect on hover */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="ripple"></div>
            </div>
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
