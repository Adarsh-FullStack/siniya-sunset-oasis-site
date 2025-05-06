
import { Star } from 'lucide-react';
import { ParallaxBackground } from './ui/ParallaxBackground';

interface TestimonialProps {
  quote: string;
  author: string;
  position: string;
  rating: number;
}

const Testimonial = ({ quote, author, position, rating }: TestimonialProps) => {
  return (
    <div className="glass-card underwater-card p-6 lg:p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-lg hover:shadow-[#33C3F0]/20">
      <div className="flex mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`h-5 w-5 ${
              i < rating ? 'text-sunset-gold fill-sunset-gold' : 'text-gray-400'
            }`}
          />
        ))}
      </div>
      <p className="text-white/90 italic mb-6">{quote}</p>
      <div>
        <p className="font-serif text-lg text-white font-medium">{author}</p>
        <p className="text-sunset-light/70 text-sm">{position}</p>
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
      rating: 5
    },
    {
      quote: "The water villa exceeded all expectations. Waking up to the sounds of gentle waves and watching the sunset from our private deck was magical.",
      author: "Ahmed Al-Farsi",
      position: "Dubai, UAE",
      rating: 5
    },
    {
      quote: "The perfect balance of luxury and natural beauty. The infinity pool that blends with the ocean is a masterpiece of design.",
      author: "Elena Petrova",
      position: "Moscow, Russia",
      rating: 4
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
      
      <div className="container-custom relative z-20">
        <div className="text-center mb-16 reveal">
          <h2 className="section-title">Guest Experiences</h2>
          <p className="section-subtitle mx-auto">
            Hear what our guests have to say about their stay at Siniya Island
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="reveal">
              <Testimonial {...testimonial} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
