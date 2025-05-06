
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
  {
    src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=60",
    alt: "Oceanfront Villa",
    caption: "Oceanfront Villa with Private Pool"
  },
  {
    src: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=600&q=60",
    alt: "Beach Sunset",
    caption: "Breathtaking Sunset Views"
  },
  {
    src: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&w=600&q=60",
    alt: "Aerial View",
    caption: "Aerial View of Siniya Island"
  },
  {
    src: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?auto=format&fit=crop&w=600&q=60",
    alt: "Night Sky",
    caption: "Stargazing Experience"
  },
];

export const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <section id="gallery" className="py-20 bg-sunset-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-sunset-dark to-sunset-purple/30 z-0"></div>
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-12 reveal">
          <h2 className="section-title">Island Gallery</h2>
          <p className="section-subtitle mx-auto">
            A glimpse into the paradise that awaits you at Siniya Island
          </p>
          <div className="w-24 h-1 mx-auto mt-6 bg-gradient-to-r from-sunset-orange to-[#33C3F0] rounded-full"></div>
        </div>
        
        <div className="relative h-80 md:h-[500px] rounded-xl overflow-hidden reveal">
          <div 
            className="absolute inset-0 flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {images.map((image, index) => (
              <div key={index} className="min-w-full h-full relative">
                <img 
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 md:p-6">
                  <p className="font-serif text-lg md:text-xl text-white">{image.caption}</p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Navigation buttons */}
          <button 
            onClick={prevSlide} 
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full p-2 transition-all"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button 
            onClick={nextSlide} 
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full p-2 transition-all"
            aria-label="Next image"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
          
          {/* Indicators */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex ? 'bg-white w-4' : 'bg-white/50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
};
