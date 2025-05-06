
import { MessageSquare } from 'lucide-react';

export const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/971XXXXXXXXX"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] rounded-full shadow-lg hover:bg-[#20BA5C] transition-colors duration-300"
      aria-label="Contact us on WhatsApp"
    >
      <MessageSquare className="h-7 w-7 text-white" />
    </a>
  );
};
