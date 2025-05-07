
import { useState, useEffect, useRef } from 'react';
import { ParallaxBackground } from './ui/ParallaxBackground';
import { BubbleEffect } from './ui/BubbleEffect';

export const StorySection = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && timelineRef.current) {
          // Start revealing timeline items one by one
          const revealItems = () => {
            const items = Array.from(timelineRef.current?.querySelectorAll('[data-timeline-item]') || []);
            
            items.forEach((item, index) => {
              setTimeout(() => {
                setVisibleItems(prev => [...prev, index]);
              }, index * 600); // 600ms delay between each item
            });
          };
          
          revealItems();
          observer.disconnect();
        }
      });
    }, options);

    if (timelineRef.current) {
      observer.observe(timelineRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const isVisible = (index: number) => visibleItems.includes(index);

  return (
    <div className="container-custom relative z-10">
      <ParallaxBackground 
        backgroundImage="https://images.unsplash.com/photo-1504893524553-b855bce32c67?auto=format&fit=crop&w=1600&q=60" 
        opacity={0.1} 
      />
      
      <BubbleEffect colors={["rgba(14, 165, 233, 0.3)", "rgba(51, 195, 240, 0.1)"]} />
      
      <div className="text-center mb-12 reveal">
        <h2 className="section-title">Our Story</h2>
        <p className="section-subtitle mx-auto">
          The vision and journey behind Siniya Island's transformation
        </p>
        <div className="w-24 h-1 mx-auto mt-6 bg-gradient-to-r from-[#0EA5E9] to-[#33C3F0] rounded-full"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1 reveal">
          <h3 className="font-serif text-2xl font-bold text-white mb-4">From Vision to Reality</h3>
          <p className="text-sunset-light/80 mb-6">
            What began as a visionary concept in 2018 has evolved into one of the most prestigious luxury developments in the UAE. Siniya Island represents a harmonious balance between luxurious living and environmental preservation.
          </p>
          <p className="text-sunset-light/80 mb-6">
            Our founder's dream was to create a sanctuary that celebrates the natural beauty of the Arabian Gulf while offering unparalleled luxury experiences. After years of meticulous planning and sustainable development, we're proud to present a truly unique island paradise.
          </p>
          
          <div className="relative glass-card p-6 border border-white/10 rounded-lg mt-8 hover-glow">
            <div className="absolute -top-5 -left-5 h-10 w-10 rounded-full bg-[#0EA5E9] flex items-center justify-center animate-pulse-slow">
              <span className="text-white font-bold">"</span>
            </div>
            <blockquote className="text-white italic">
              Our mission is to create not just luxury homes, but a legacy of sustainable island living that future generations will cherish.
            </blockquote>
            <p className="text-right text-sunset-light/70 mt-4">- Abdullah Al Hamrani, Founder</p>
          </div>
          
          <div className="mt-10">
            <div className="grid grid-cols-2 gap-4">
              <div className="underwater-card rounded-lg overflow-hidden h-40 reveal">
                <img 
                  src="https://images.unsplash.com/photo-1588795945098-8d14a62a514b?auto=format&fit=crop&w=600&q=80" 
                  alt="Island construction" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="underwater-card rounded-lg overflow-hidden h-40 reveal animate-delay-200">
                <img 
                  src="https://images.unsplash.com/photo-1598902586625-35ce5c225e8b?auto=format&fit=crop&w=600&q=80" 
                  alt="Island development" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        
        <div className="order-1 md:order-2 reveal" ref={timelineRef}>
          <div className="relative">
            {/* Timeline */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#0EA5E9] to-[#33C3F0]/30 rounded-full"></div>
            
            <div 
              className={`ml-8 mb-10 relative ${isVisible(0) ? 'opacity-100' : 'opacity-0'} transition-opacity duration-700`} 
              data-timeline-item
            >
              <div className="absolute -left-10 top-1 h-4 w-4 rounded-full bg-[#0EA5E9]"></div>
              <div className="font-serif text-xl text-white mb-2">2018</div>
              <div className="glass-card p-4">
                <p className="text-sunset-light/80">Initial concept and environmental studies</p>
                <div className="mt-3 underwater-card rounded-md overflow-hidden h-32">
                  <img 
                    src="https://images.unsplash.com/photo-1485738422979-f5c462d49f74?auto=format&fit=crop&w=600&q=80" 
                    alt="Environmental studies"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            
            <div 
              className={`ml-8 mb-10 relative ${isVisible(1) ? 'opacity-100' : 'opacity-0'} transition-opacity duration-700`}
              data-timeline-item
            >
              <div className="absolute -left-10 top-1 h-4 w-4 rounded-full bg-[#0EA5E9]"></div>
              <div className="font-serif text-xl text-white mb-2">2020</div>
              <div className="glass-card p-4">
                <p className="text-sunset-light/80">Master plan approval and groundbreaking</p>
                <div className="mt-3 underwater-card rounded-md overflow-hidden h-32">
                  <img 
                    src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=600&q=80" 
                    alt="Master plans"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            
            <div 
              className={`ml-8 mb-10 relative ${isVisible(2) ? 'opacity-100' : 'opacity-0'} transition-opacity duration-700`}
              data-timeline-item
            >
              <div className="absolute -left-10 top-1 h-4 w-4 rounded-full bg-[#0EA5E9]"></div>
              <div className="font-serif text-xl text-white mb-2">2022</div>
              <div className="glass-card p-4">
                <p className="text-sunset-light/80">Infrastructure completion and phase one development</p>
                <div className="mt-3 underwater-card rounded-md overflow-hidden h-32">
                  <img 
                    src="https://images.unsplash.com/photo-1574958269340-fa927503f3dd?auto=format&fit=crop&w=600&q=80" 
                    alt="Infrastructure"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            
            <div 
              className={`ml-8 relative ${isVisible(3) ? 'opacity-100' : 'opacity-0'} transition-opacity duration-700`}
              data-timeline-item
            >
              <div className="absolute -left-10 top-1 h-4 w-4 rounded-full bg-[#0EA5E9] animate-pulse"></div>
              <div className="font-serif text-xl text-white mb-2">2024</div>
              <div className="glass-card p-4">
                <p className="text-sunset-light/80">First residences completed and island opening</p>
                <div className="mt-3 underwater-card rounded-md overflow-hidden h-32">
                  <img 
                    src="https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=600&q=80" 
                    alt="Completed resort"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
