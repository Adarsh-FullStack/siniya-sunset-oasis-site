
import { Link } from 'react-router-dom';
import { Phone, Mail, WhatsApp, MapPin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-sunset-dark border-t border-white/10 py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-serif text-xl text-white mb-4">Siniya Island by Sobha</h3>
            <p className="text-sunset-light/70 mb-6">
              Experience luxury living in a pristine private island setting, where every detail is crafted for extraordinary moments.
            </p>
          </div>
          
          <div>
            <h3 className="font-serif text-xl text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sunset-light/70 hover:text-sunset-orange transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/property-details" className="text-sunset-light/70 hover:text-sunset-orange transition-colors">
                  Property Details
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-sunset-light/70 hover:text-sunset-orange transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/story" className="text-sunset-light/70 hover:text-sunset-orange transition-colors">
                  Story
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-sunset-light/70 hover:text-sunset-orange transition-colors">
                  Pricing & Packages
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sunset-light/70 hover:text-sunset-orange transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-serif text-xl text-white mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li>
                <a 
                  href="tel:+971XXXXXXXXX" 
                  className="flex items-center text-sunset-light/70 hover:text-sunset-orange transition-colors"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  +971 XX XXX XXXX
                </a>
              </li>
              <li>
                <a 
                  href="mailto:info@siniyaisland.com" 
                  className="flex items-center text-sunset-light/70 hover:text-sunset-orange transition-colors"
                >
                  <Mail className="h-5 w-5 mr-2" />
                  info@siniyaisland.com
                </a>
              </li>
              <li>
                <a 
                  href="https://wa.me/971XXXXXXXXX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-sunset-light/70 hover:text-sunset-orange transition-colors"
                >
                  <WhatsApp className="h-5 w-5 mr-2" />
                  WhatsApp Chat
                </a>
              </li>
              <li>
                <div className="flex items-start text-sunset-light/70">
                  <MapPin className="h-5 w-5 mr-2 mt-1 flex-shrink-0" />
                  <span>Siniya Island, Umm Al Quwain, United Arab Emirates</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p className="text-sunset-light/50 text-sm">
            &copy; {new Date().getFullYear()} Siniya Island by Sobha. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
