import React from 'react';
import { MessageSquare } from 'lucide-react';
import { trackWhatsAppClick } from '../../utils/analytics';

interface WhatsAppFloatProps {
  isHidden?: boolean;
}

export const WhatsAppFloat: React.FC<WhatsAppFloatProps> = ({ isHidden = false }) => {
  if (isHidden) return null;

  return (
    <aside 
      aria-label="Direct WhatsApp Contact"
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex items-center group"
    >
      {/* Tooltip on hover */}
      <div 
        role="tooltip"
        className="mr-3 px-3.5 py-1.5 rounded-full bg-[#0D0E16]/95 border border-white/10 text-xs font-medium text-white shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none whitespace-nowrap hidden sm:flex items-center gap-2 backdrop-blur-md"
      >
        <span className="w-2 h-2 rounded-full bg-brand-teal animate-pulse" />
        <span>Chat on WhatsApp: +92 312 5355078</span>
      </div>

      {/* Floating Button */}
      <a
        href="https://wa.me/923125355078?text=Hello%20Nutcrackers%2C%20I%20am%20interested%20in%20discussing%20a%20project."
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackWhatsAppClick('float_button')}
        aria-label="Chat directly with Nutcrackers on WhatsApp"
        className="relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-tr from-brand-teal via-emerald-500 to-teal-400 text-black shadow-[0_0_20px_rgba(45,212,191,0.45)] hover:shadow-[0_0_35px_rgba(45,212,191,0.7)] hover:scale-105 transition-all duration-300 focus:outline-none"
      >
        {/* Soft pulsing ring */}
        <span className="absolute -inset-1 rounded-full bg-brand-teal/40 animate-ping opacity-50" />
        <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6 fill-current relative z-10" />
      </a>
    </aside>
  );
};
