
import { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight, X, Image } from 'lucide-react';

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: string;
}

interface GallerySliderProps {
  images: GalleryImage[];
  category?: string;
}

export const GallerySlider = ({ images, category }: GallerySliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  
  // Filter images by category if provided
  const filteredImages = category 
    ? images.filter(image => image.category === category)
    : images;
  
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === filteredImages.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? filteredImages.length - 1 : prevIndex - 1
    );
  };
  
  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };
  
  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = '';
  };
  
  const nextLightboxImage = () => {
    setLightboxIndex((prevIndex) => 
      prevIndex === filteredImages.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  const prevLightboxImage = () => {
    setLightboxIndex((prevIndex) => 
      prevIndex === 0 ? filteredImages.length - 1 : prevIndex - 1
    );
  };
  
  // Auto-slide
  useEffect(() => {
    if (lightboxOpen) return;
    
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [lightboxOpen]);
  
  // Handle keyboard navigation for lightbox
  useEffect(() => {
    if (!lightboxOpen) return;
    
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeLightbox();
      if (event.key === 'ArrowRight') nextLightboxImage();
      if (event.key === 'ArrowLeft') prevLightboxImage();
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen]);
  
  if (filteredImages.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center p-12 glass-card">
        <Image className="h-16 w-16 text-sunset-light/50 mb-4" />
        <p className="text-sunset-light/70">No images available in this category</p>
      </div>
    );
  }
  
  return (
    <>
      <div className="relative overflow-hidden rounded-xl h-[500px]">
        {/* Main slider */}
        <div 
          className="flex transition-transform duration-500 ease-in-out h-full"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {filteredImages.map((image, index) => (
            <div 
              key={image.id} 
              className="min-w-full h-full relative"
              onClick={() => openLightbox(index)}
            >
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-full object-cover cursor-pointer"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-sunset-dark/50"></div>
            </div>
          ))}
        </div>
        
        {/* Navigation arrows */}
        <button 
          onClick={(e) => {
            e.stopPropagation();
            prevSlide();
          }}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-sunset-dark/50 hover:bg-sunset-dark/70 p-2 rounded-full transition-colors z-10"
        >
          <ArrowLeft className="h-6 w-6 text-white" />
        </button>
        
        <button 
          onClick={(e) => {
            e.stopPropagation();
            nextSlide();
          }}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-sunset-dark/50 hover:bg-sunset-dark/70 p-2 rounded-full transition-colors z-10"
        >
          <ArrowRight className="h-6 w-6 text-white" />
        </button>
        
        {/* Indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
          {filteredImages.map((_, index) => (
            <button
              key={index}
              onClick={(e) => {
                e.stopPropagation();
                setCurrentIndex(index);
              }}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex ? 'bg-white' : 'bg-white/50'
              }`}
            ></button>
          ))}
        </div>
      </div>
      
      {/* Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 bg-sunset-dark/90 z-50 flex items-center justify-center">
          <button 
            onClick={closeLightbox}
            className="absolute top-4 right-4 bg-sunset-dark/50 hover:bg-sunset-dark/70 p-2 rounded-full transition-colors"
          >
            <X className="h-6 w-6 text-white" />
          </button>
          
          <div className="relative w-full max-w-6xl max-h-[80vh]">
            <img 
              src={filteredImages[lightboxIndex].src} 
              alt={filteredImages[lightboxIndex].alt} 
              className="w-full h-full object-contain"
            />
            
            <button 
              onClick={(e) => {
                e.stopPropagation();
                prevLightboxImage();
              }}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-sunset-dark/50 hover:bg-sunset-dark/70 p-2 rounded-full transition-colors"
            >
              <ArrowLeft className="h-6 w-6 text-white" />
            </button>
            
            <button 
              onClick={(e) => {
                e.stopPropagation();
                nextLightboxImage();
              }}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-sunset-dark/50 hover:bg-sunset-dark/70 p-2 rounded-full transition-colors"
            >
              <ArrowRight className="h-6 w-6 text-white" />
            </button>
            
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white/70">
              {lightboxIndex + 1} / {filteredImages.length}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
