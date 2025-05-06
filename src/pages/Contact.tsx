import { useState, useEffect } from 'react';
import { Layout } from '../components/Layout';
import { Calendar, Mail, Phone, MapPin, WhatsApp } from 'lucide-react';
import { useToast } from '../components/ui/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    arrivalDate: '',
    departureDate: '',
    message: ''
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Form validation would go here
    
    // Show success toast
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. Our team will get back to you shortly.",
    });
    
    // Reset form
    setFormState({
      name: '',
      email: '',
      phone: '',
      arrivalDate: '',
      departureDate: '',
      message: ''
    });
  };
  
  useEffect(() => {
    // Scroll reveal animation
    const handleScroll = () => {
      const reveals = document.querySelectorAll('.reveal');
      reveals.forEach((reveal) => {
        const windowHeight = window.innerHeight;
        const elementTop = reveal.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
          reveal.classList.add('active');
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    // Trigger once on mount
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <Layout>
      <section className="pt-20 pb-10 bg-sunset-dark">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-12 reveal">
            <h1 className="section-title">Contact Us</h1>
            <p className="section-subtitle mx-auto">
              Reach out to us for more information or to book your stay at Siniya Island
            </p>
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-sunset-dark">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact form */}
            <div className="glass-card p-8 reveal">
              <h2 className="font-serif text-2xl font-bold text-white mb-6">Send Us a Message</h2>
              
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-sunset-light/80 mb-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    className="w-full bg-sunset-purple/10 border border-white/10 rounded-md p-3 text-white"
                    placeholder="Your Name"
                    required
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="email" className="block text-sunset-light/80 mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    className="w-full bg-sunset-purple/10 border border-white/10 rounded-md p-3 text-white"
                    placeholder="Your Email"
                    required
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="phone" className="block text-sunset-light/80 mb-1">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formState.phone}
                    onChange={handleChange}
                    className="w-full bg-sunset-purple/10 border border-white/10 rounded-md p-3 text-white"
                    placeholder="Your Phone Number"
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="arrivalDate" className="block text-sunset-light/80 mb-1">
                      <Calendar className="inline-block h-4 w-4 mr-1" /> Arrival Date
                    </label>
                    <input
                      type="date"
                      id="arrivalDate"
                      name="arrivalDate"
                      value={formState.arrivalDate}
                      onChange={handleChange}
                      className="w-full bg-sunset-purple/10 border border-white/10 rounded-md p-3 text-white"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="departureDate" className="block text-sunset-light/80 mb-1">
                      <Calendar className="inline-block h-4 w-4 mr-1" /> Departure Date
                    </label>
                    <input
                      type="date"
                      id="departureDate"
                      name="departureDate"
                      value={formState.departureDate}
                      onChange={handleChange}
                      className="w-full bg-sunset-purple/10 border border-white/10 rounded-md p-3 text-white"
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sunset-light/80 mb-1">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    className="w-full bg-sunset-purple/10 border border-white/10 rounded-md p-3 text-white h-32"
                    placeholder="Tell us more about your inquiry"
                    required
                  ></textarea>
                </div>
                
                <button type="submit" className="btn-primary w-full">
                  Submit
                </button>
              </form>
            </div>
            
            {/* Contact info section with WhatsApp icon */}
            <div className="reveal">
              <h2 className="font-serif text-2xl font-bold text-white mb-6">Get in Touch</h2>
              
              <div className="glass-card p-6 mb-6">
                <h3 className="font-serif text-lg font-semibold text-white mb-4">Contact Information</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Phone className="h-5 w-5 text-sunset-orange mr-3 flex-shrink-0" />
                    <div>
                      <p className="text-white">Call Us</p>
                      <a href="tel:+971XXXXXXXXX" className="text-sunset-light/80 hover:text-sunset-orange transition-colors">
                        +971 XX XXX XXXX
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail className="h-5 w-5 text-sunset-orange mr-3 flex-shrink-0" />
                    <div>
                      <p className="text-white">Email Us</p>
                      <a href="mailto:info@siniyaisland.com" className="text-sunset-light/80 hover:text-sunset-orange transition-colors">
                        info@siniyaisland.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <WhatsApp className="h-5 w-5 text-sunset-orange mr-3 flex-shrink-0" />
                    <div>
                      <p className="text-white">WhatsApp</p>
                      <a 
                        href="https://wa.me/971XXXXXXXXX" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sunset-light/80 hover:text-sunset-orange transition-colors"
                      >
                        +971 XX XXX XXXX
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-sunset-orange mr-3 flex-shrink-0" />
                    <div>
                      <p className="text-white">Location</p>
                      <p className="text-sunset-light/80">
                        Siniya Island, Umm Al Quwain, United Arab Emirates
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Map */}
              <div className="glass-card p-1 h-[300px] overflow-hidden rounded-xl">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57669.84115887652!2d55.55555915810547!3d25.582654282939803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ef5fc0e8c5e8e8d%3A0xadb992b8aa9a0061!2sJazirat%20Siniyah%20-%20Umm%20Al%20Quwain%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sus!4v1663235423330!5m2!1sen!2sus" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Siniya Island Map"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
