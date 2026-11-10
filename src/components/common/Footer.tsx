import React, { useState } from 'react';
import { NutcrackersLogo } from './NutcrackersLogo';
import { 
  Phone, 
  Mail, 
  Globe, 
  MessageSquare, 
  ArrowUp, 
  Shield, 
  FileText,
  X
} from 'lucide-react';

interface FooterProps {
  onSelectService?: (serviceName: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectService }) => {
  const [modalType, setModalType] = useState<'privacy' | 'terms' | null>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const services = [
    'Video Editing',
    'Digital Marketing',
    'Mobile App & Web Development',
    'AI Website Agent',
    'AI Automation',
    'Data Science',
    'Data Analysis',
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Showcase Video', href: '#showcase' },
    { name: 'Interactive AI Demo', href: '#demo' },
    { name: 'Our Work', href: '#work' },
    { name: 'About Nutcrackers', href: '#about' },
    { name: 'Contact Us', href: '#contact' },
  ];

  return (
    <footer className="relative bg-[#07080D] border-t border-white/[0.08] pt-16 sm:pt-20 pb-12 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-purple-950/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 sm:pb-16 border-b border-white/[0.06]">
          
          {/* Column 1: Brand & Bio (span 4) */}
          <div className="lg:col-span-4 space-y-4">
            <NutcrackersLogo size="md" showSubtitle />
            
            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed max-w-sm pt-2">
              Nutcrackers is a premier AI & Digital Solutions agency. We architect custom full-stack software, 
              deploy autonomous AI website agents, automate high-friction operational workflows, 
              and produce commercial high-retention video edits.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://wa.me/923125355078"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-white/[0.03] hover:bg-brand-teal/20 border border-white/10 hover:border-brand-teal/40 text-gray-300 hover:text-brand-teal transition-all"
                title="Direct WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
              <a
                href="https://alishanai.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-white/[0.03] hover:bg-purple-500/20 border border-white/10 hover:border-purple-500/40 text-gray-300 hover:text-purple-300 transition-all"
                title="Official Portfolio"
              >
                <Globe className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: All 7 Services (span 4) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-brand-gold font-semibold">
              Our Seven Services
            </h4>
            <ul className="space-y-2 pt-1">
              {services.map((service, idx) => (
                <li key={idx}>
                  <a
                    href="#services"
                    onClick={() => onSelectService && onSelectService(service)}
                    className="text-xs sm:text-sm text-gray-400 hover:text-white hover:translate-x-1 transition-all inline-block"
                  >
                    <span className="text-gray-600 font-mono mr-1.5 text-[11px]">0{idx + 1}.</span>
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Navigation (span 2) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-brand-teal font-semibold">
              Navigation
            </h4>
            <ul className="space-y-2 pt-1">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="text-xs sm:text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Card Details (span 2) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-purple-400 font-semibold">
              Direct Contact
            </h4>
            
            <div className="space-y-3 pt-1 text-xs text-gray-400 font-mono">
              <div>
                <span className="text-gray-500 block text-[10px]">PHONE & WHATSAPP</span>
                <a 
                  href="https://wa.me/923125355078" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-white hover:text-brand-teal transition-colors block mt-0.5"
                >
                  +92 312 5355078
                </a>
              </div>

              <div>
                <span className="text-gray-500 block text-[10px]">OFFICIAL PORTAL</span>
                <a 
                  href="https://alishanai.vercel.app" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-white hover:text-purple-300 transition-colors block mt-0.5"
                >
                  alishanai.vercel.app
                </a>
              </div>

              <div>
                <span className="text-gray-500 block text-[10px]">HEADQUARTERS</span>
                <span className="text-gray-300 block mt-0.5">
                  Nutcrackers Digital Studio
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <div>
            © {new Date().getFullYear()} Nutcrackers. All rights reserved. Built with precision for digital growth.
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={() => setModalType('privacy')}
              className="hover:text-gray-300 transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => setModalType('terms')}
              className="hover:text-gray-300 transition-colors cursor-pointer"
            >
              Terms of Service
            </button>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-white/[0.04] hover:bg-white/10 text-gray-300 hover:text-white transition-colors focus:outline-none"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Legal Modals */}
      {modalType && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg bg-[#0D0E16] rounded-3xl border border-white/15 p-6 sm:p-8 shadow-2xl">
            <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                {modalType === 'privacy' ? <Shield className="w-5 h-5 text-brand-teal" /> : <FileText className="w-5 h-5 text-purple-400" />}
                {modalType === 'privacy' ? 'Privacy Policy' : 'Terms & Conditions'}
              </h3>
              <button
                onClick={() => setModalType(null)}
                className="p-1 rounded-full hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="text-xs text-gray-300 space-y-3 leading-relaxed max-h-72 overflow-y-auto pr-2">
              {modalType === 'privacy' ? (
                <>
                  <p>Nutcrackers respects client confidentiality and digital privacy. Any personal or commercial information submitted via our inquiry forms or WhatsApp channels is used solely for project estimation and business communication.</p>
                  <p>We will never sell, lease, or monetize your contact details. Client IP and code repositories remain 100% private under strict non-disclosure protections.</p>
                  <p>For questions or data deletion requests, contact us directly at +92 312 5355078.</p>
                </>
              ) : (
                <>
                  <p>All software engineering, AI agent implementations, and video production deliverables created by Nutcrackers are transferred with full client intellectual property ownership upon milestone completion.</p>
                  <p>Milestone scopes and revision rounds are agreed upon prior to project initiation. Sprints are executed with continuous feedback and transparent progress updates.</p>
                  <p>Nutcrackers guarantees performance SLAs for deployed custom systems and provides ongoing maintenance agreements as outlined in each project contract.</p>
                </>
              )}
            </div>

            <button
              onClick={() => setModalType(null)}
              className="mt-6 w-full py-2.5 rounded-xl text-xs font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/10 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </footer>
  );
};
