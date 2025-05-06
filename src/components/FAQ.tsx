
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { BubbleEffect } from "./ui/BubbleEffect";

export const FAQ = () => {
  const faqs = [
    {
      question: "What accommodation options are available on Siniya Island?",
      answer: "Siniya Island offers a range of luxurious accommodations including oceanfront villas, overwater bungalows, and exclusive penthouse suites. All our accommodations feature premium amenities and breathtaking views."
    },
    {
      question: "How can I reach Siniya Island?",
      answer: "Siniya Island is accessible via private boat transfer from Umm Al Quwain (30 minutes) or by helicopter from Dubai (15 minutes). Our concierge team arranges all transportation as part of your booking."
    },
    {
      question: "What dining options are available?",
      answer: "We offer multiple dining experiences ranging from casual beachfront cafés to fine dining restaurants featuring international and local cuisine. Private dining experiences can also be arranged on request."
    },
    {
      question: "Are there activities for children?",
      answer: "Yes, we offer a range of family-friendly activities including a kids' club, supervised water activities, and special family experiences designed for guests of all ages."
    },
    {
      question: "What recreational activities are available?",
      answer: "Guests can enjoy water sports, snorkeling, diving, yacht tours, spa treatments, fitness facilities, and exclusive cultural experiences around the island."
    }
  ];

  return (
    <section id="faq" className="py-24 relative overflow-hidden bg-gradient-to-b from-sunset-dark to-[#0EA5E9]/30">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1504893524553-b855bce32c67?auto=format&fit=crop&w=1600&q=60" 
          alt="Underwater background" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-sunset-dark to-[#0EA5E9]/50 mix-blend-overlay"></div>
      </div>
      
      {/* Bubble animation in background */}
      <BubbleEffect 
        className="z-5" 
        count={35} 
        colors={["rgba(14, 165, 233, 0.3)", "rgba(255, 255, 255, 0.2)", "rgba(51, 195, 240, 0.25)"]} 
      />
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-16 reveal">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle mx-auto">
            Find answers to our most commonly asked questions about your stay at Siniya Island
          </p>
          <div className="w-24 h-1 mx-auto mt-6 bg-gradient-to-r from-sunset-orange to-[#33C3F0] rounded-full"></div>
        </div>
        
        <div className="max-w-3xl mx-auto glass-card p-8 backdrop-blur-md reveal">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-white/10">
                <AccordionTrigger className="text-white text-lg font-serif py-4 hover:text-[#33C3F0] transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sunset-light/90 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
