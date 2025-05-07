
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Sun, Menu, X } from 'lucide-react';

interface NavItemProps {
  href: string;
  label: string;
  isActive: boolean;
  onClick: (href: string) => void;
}

const NavItem: React.FC<NavItemProps> = ({ href, label, isActive, onClick }) => (
  <Link
    to={href}
    onClick={(e) => {
      e.preventDefault();
      onClick(href);
    }}
    className={`text-sm transition-colors hover:text-[#33C3F0] relative ${
      isActive ? 'text-[#33C3F0]' : 'text-white/80'
    }
    ${isActive ? 'after:content-[""] after:absolute after:w-full after:h-0.5 after:bg-[#33C3F0] after:bottom-[-10px] after:left-0' : ''}
    `}
  >
    {label}
  </Link>
);

export const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [trails, setTrails] = useState<Array<{ id: number; x: number; y: number; opacity: number }>>([]);
  const [trailId, setTrailId] = useState(0);

  // Home page sections for single-page navigation
  const homeSections = [
    { name: 'Home', href: '/#hero' },
    { name: 'Features', href: '/#features' },
    { name: 'Amenities', href: '/#amenities' },
    { name: 'Gallery', href: '/#gallery' },
    { name: 'Story', href: '/#story' },
    { name: 'Testimonials', href: '/#testimonials' },
    { name: 'Location', href: '/#location' },
    { name: 'Pricing', href: '/#pricing' },
    { name: 'FAQ', href: '/#faq' },
    { name: 'Contact', href: '/#contact-cta' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Sticky navbar effect
      const scrollPosition = window.scrollY;
      if (scrollPosition > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Active section detection
      const sections = document.querySelectorAll('section[id]');
      const offset = 100; // Offset to trigger section change a bit earlier
      
      for (let i = 0; i < sections.length; i++) {
        const section = sections[i] as HTMLElement;
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        
        if (scrollPosition >= sectionTop - offset && scrollPosition < sectionTop + sectionHeight - offset) {
          setActiveSection(section.getAttribute('id') || '');
          break;
        }
      }
    };
    
    // Mouse trail effect
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      // Create new trail point
      const newTrail = {
        id: trailId,
        x: e.clientX,
        y: e.clientY,
        opacity: 1
      };
      
      setTrails(prevTrails => [...prevTrails, newTrail]);
      setTrailId(prevId => prevId + 1);
      
      // Remove old trails to avoid memory issues
      if (trails.length > 10) {
        setTrails(prevTrails => prevTrails.slice(1));
      }
      
      // Fade out trails
      setTimeout(() => {
        setTrails(prevTrails => 
          prevTrails.map(trail => 
            trail.id === newTrail.id ? { ...trail, opacity: 0 } : trail
          )
        );
      }, 200);
      
      setTimeout(() => {
        setTrails(prevTrails => prevTrails.filter(trail => trail.id !== newTrail.id));
      }, 700);
    };
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    handleScroll(); // Initialize on mount
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [trailId, trails.length]);
  
  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    
    if (href.startsWith('/#')) {
      const sectionId = href.substring(2);
      const element = document.getElementById(sectionId);
      
      if (element) {
        window.scrollTo({
          top: element.offsetTop - 80, // Adjust for header height
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-sunset-dark/70 backdrop-blur-md border-b border-white/10' 
            : 'bg-transparent'
        }`}
      >
        <div className="container-custom flex justify-between items-center py-4">
          <Link to="/" className="flex items-center space-x-2">
            <Sun className="h-8 w-8 text-[#33C3F0] animate-pulse-slow" />
            <span className="font-serif text-lg md:text-xl font-bold text-white">
              Siniya Island by Sobha
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {homeSections.map((item) => (
              <NavItem
                key={item.name}
                href={item.href}
                label={item.name}
                isActive={activeSection === item.href.substring(2)}
                onClick={handleNavClick}
              />
            ))}
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-sunset-dark/95 backdrop-blur-md border-t border-white/10">
            <div className="container-custom py-4 space-y-4">
              {homeSections.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className={`block py-2 text-base ${
                    activeSection === item.href.substring(2) ? 'text-[#33C3F0]' : 'text-white/80'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>
      
      {/* Mouse trail effect */}
      {trails.map(trail => (
        <div
          key={trail.id}
          className="cursor-trail"
          style={{
            left: `${trail.x}px`,
            top: `${trail.y}px`,
            opacity: trail.opacity
          }}
        />
      ))}
      
      {/* Water ripple effect on click */}
      <div 
        className="mouse-ripple"
        onClick={(e) => {
          const ripple = document.createElement('div');
          ripple.className = 'ripple';
          ripple.style.left = `${e.clientX}px`;
          ripple.style.top = `${e.clientY}px`;
          document.body.appendChild(ripple);
          
          setTimeout(() => {
            document.body.removeChild(ripple);
          }, 1500);
        }}
      />
    </>
  );
};
