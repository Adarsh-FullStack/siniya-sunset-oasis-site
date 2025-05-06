
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sun, Menu, X } from 'lucide-react';
import { Footer } from './Footer';
import { WhatsAppButton } from './WhatsAppButton';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const [activeSection, setActiveSection] = useState('');

  // Home page sections for single-page navigation
  const homeSections = [
    { name: 'Home', href: '/#hero' },
    { name: 'Features', href: '/#features' },
    { name: 'Amenities', href: '/#amenities' },
    { name: 'Gallery', href: '/#gallery' },
    { name: 'Testimonials', href: '/#testimonials' },
    { name: 'Location', href: '/#location' },
    { name: 'Pricing', href: '/#pricing' },
    { name: 'Contact', href: '/#contact-cta' },
  ];

  // Regular page navigation
  const pageNavigation = [
    { name: 'Property Details', href: '/property-details' },
    { name: 'Story', href: '/story' },
    { name: 'Pricing & Packages', href: '/pricing' },
    { name: 'Contact Us', href: '/contact' },
  ];

  // Combined navigation based on current page
  const navigation = location.pathname === '/' ? homeSections : [
    { name: 'Home', href: '/' },
    ...pageNavigation
  ];

  useEffect(() => {
    // Only set up section monitoring on the home page
    if (location.pathname !== '/') return;
    
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + 100; // Adding offset for better detection
      
      for (let i = 0; i < sections.length; i++) {
        const section = sections[i] as HTMLElement;
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(section.getAttribute('id') || '');
          break;
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initialize on mount
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const isActive = (path: string) => {
    if (path.startsWith('/#')) {
      const sectionId = path.substring(2);
      return activeSection === sectionId;
    }
    return location.pathname === path;
  };
  
  // Handle smooth scrolling for anchor links
  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('/#')) {
      e.preventDefault();
      const sectionId = href.substring(2);
      const element = document.getElementById(sectionId);
      
      if (element) {
        setIsMenuOpen(false);
        window.scrollTo({
          top: element.offsetTop - 80, // Adjust for header height
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <header className="fixed top-0 left-0 right-0 z-50 bg-sunset-dark/80 backdrop-blur-md border-b border-white/10">
        <div className="container-custom flex justify-between items-center py-4">
          <Link to="/" className="flex items-center space-x-2">
            <Sun className="h-8 w-8 text-sunset-orange animate-pulse-slow" />
            <span className="font-serif text-lg md:text-xl font-bold text-white">
              Siniya Island by Sobha
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={(e) => handleAnchorClick(e, item.href)}
                className={`text-sm transition-colors hover:text-sunset-orange relative ${
                  isActive(item.href) ? 'text-sunset-orange' : 'text-white/80'
                }
                ${isActive(item.href) ? 'after:content-[""] after:absolute after:w-full after:h-0.5 after:bg-sunset-orange after:bottom-[-10px] after:left-0' : ''}
                `}
              >
                {item.name}
              </Link>
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
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={(e) => handleAnchorClick(e, item.href)}
                  className={`block py-2 text-base ${
                    isActive(item.href) ? 'text-sunset-orange' : 'text-white/80'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>
      
      <main className="flex-grow pt-20">
        {children}
      </main>
      
      <Footer />
      <WhatsAppButton />
    </div>
  );
};
