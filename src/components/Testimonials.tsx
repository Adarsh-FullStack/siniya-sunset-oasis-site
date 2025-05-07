
import { Star } from 'lucide-react';
import { ParallaxBackground } from './ui/ParallaxBackground';
import { useEffect, useState, useRef } from 'react';

interface TestimonialProps {
  quote: string;
  author: string;
  position: string;
  rating: number;
  image?: string;
  index: number;
}

const Testimonial = ({ quote, author, position, rating, image, index }: TestimonialProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const testimonialRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, index * 300); // Staggered animation
          observer.disconnect();
        }
      });
    }, options);

    if (testimonialRef.current) {
      observer.observe(testimonialRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [index]);

  return (
    <div 
      ref={testimonialRef}
      className={`glass-card underwater-card p-6 lg:p-8 transition-all duration-700 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      {image && (
        <div className="mb-4 flex justify-center">
          <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#33C3F0]">
            <img 
              src={image} 
              alt={author} 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      )}
      
      <div className="flex mb-4 justify-center">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`h-5 w-5 ${
              i < rating ? 'text-[#33C3F0] fill-[#33C3F0]' : 'text-gray-400'
            }`}
          />
        ))}
      </div>
      
      <p className="text-white/90 italic mb-6 text-center">{quote}</p>
      
      <div className="text-center">
        <p className="font-serif text-lg text-white font-medium">{author}</p>
        <p className="text-sunset-light/70 text-sm">{position}</p>
      </div>
      
      {/* Animated water ripple effect */}
      <div className="absolute inset-0 opacity-0 hover:opacity-100 pointer-events-none transition-opacity duration-300">
        <div className="ripple animate-[ripple_2.5s_linear_infinite]"></div>
      </div>
    </div>
  );
};

export const Testimonials = () => {
  const testimonials = [
    {
      quote: "An absolute paradise! The staff made our stay unforgettable and the private beach was pristine. We'll definitely be returning.",
      author: "Sarah & James",
      position: "London, UK",
      rating: 5,
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80"
    },
    {
      quote: "The water villa exceeded all expectations. Waking up to the sounds of gentle waves and watching the sunset from our private deck was magical.",
      author: "Ahmed Al-Farsi",
      position: "Dubai, UAE",
      rating: 5,
      image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&w=300&q=80"
    },
    {
      quote: "The perfect balance of luxury and natural beauty. The infinity pool that blends with the ocean is a masterpiece of design.",
      author: "Elena Petrova",
      position: "Moscow, Russia",
      rating: 4,
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80"
    }
  ];

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      <ParallaxBackground 
        className="z-5" 
        backgroundImage="https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&w=1600&q=60" 
        opacity={0.1}
      />
      
      <div className="absolute inset-0 bg-sunset-dark/90 z-10"></div>
      <div className="absolute inset-0 z-5">
        <div className="absolute bottom-0 left-0 right-0">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
            className="w-full h-32 md:h-64"
          >
            <path 
              fill="#0EA5E9" 
              fillOpacity="0.15" 
              d="M0,160L48,149.3C96,139,192,117,288,122.7C384,128,480,160,576,170.7C672,181,768,171,864,149.3C960,128,1056,96,1152,90.7C1248,85,1344,107,1392,117.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              className="animate-wave"
            ></path>
          </svg>
        </div>
      </div>
      
      <div className="container-custom relative z-20">
        <div className="text-center mb-16 reveal">
          <h2 className="section-title">Guest Experiences</h2>
          <p className="section-subtitle mx-auto">
            Hear what our guests have to say about their stay at Siniya Island
          </p>
          <div className="w-24 h-1 mx-auto mt-6 bg-gradient-to-r from-[#0EA5E9] to-[#33C3F0] rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Testimonial key={index} {...testimonial} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
