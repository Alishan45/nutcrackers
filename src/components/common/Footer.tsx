import React, { useState } from 'react';
import { NutcrackersLogo } from './NutcrackersLogo';
import { 
  Phone, 
  Globe, 
  MessageSquare, 
  ArrowUp, 
  Shield, 
  FileText,
  X
} from 'lucide-react';
import { trackWhatsAppClick } from '../../utils/analytics';

interface FooterProps {
  onSelectService?: (serviceName: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectService }) => {
  const [modalType, setModalType] = useState<'privacy' | 'terms' | null>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const services = [
    { name: 'Web Development', path: '/web-development' },
    { name: 'Mobile App Development', path: '/mobile-app-development' },
    { name: 'AI Automation', path: '/ai-automation' },
    { name: 'AI Chatbot Development', path: '/chatbot-development' },
    { name: 'Data Science', path: '/data-science' },
    { name: 'Data Analytics', path: '/data-analytics' },
    { name: 'Digital Marketing', path: '/digital-marketing' },
    { name: 'Video Editing', path: '/video-editing' },
  ];

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'All Services', href: '/#services' },
    { name: 'Engineering Blog', href: '/blog' },
    { name: 'Video Showcase', href: '/#showcase' },
    { name: 'Interactive AI Demo', href: '/#demo' },
    { name: 'Client Work & Portfolio', href: '/#work' },
    { name: 'Leadership Team', href: '/#team' },
    { name: 'Contact & Quotes', href: '/#contact' },
  ];

  return (
    <footer className="relative bg-[#07080D] border-t border-white/[0.08] pt-16 sm:pt-20 pb-12 overflow-hidden">
      {/* Background radial glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[650px] h-[320px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at center, rgba(88,28,135,0.18) 0%, rgba(7,8,13,0) 70%)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 sm:pb-16 border-b border-white/[0.06]">
          
          {/* Column 1: Brand & Bio (span 4) */}
          <div className="lg:col-span-4 space-y-4">
            <NutcrackersLogo size="md" showSubtitle />
            
            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed max-w-sm pt-2">
              Nutcrackers is a premier AI & Digital Solutions agency. We engineer custom web applications, 
              cross-platform mobile apps, autonomous AI agents, enterprise workflow automations, 
              data science pipelines, and high-retention video production.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://wa.me/923125355078"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick('footer_social_icon')}
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
                title="Founder Portfolio"
              >
                <Globe className="w-4 h-4" />
              </a>
              <a
                href="https://muzammilshabbir.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-white/[0.03] hover:bg-teal-500/20 border border-white/10 hover:border-teal-500/40 text-gray-300 hover:text-teal-300 transition-all"
                title="CTO Portfolio"
              >
                <Globe className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: All 8 Services (span 4) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-brand-gold font-semibold">
              Our Core Services
            </h4>
            <ul className="space-y-2 pt-1">
              {services.map((service, idx) => (
                <li key={idx}>
                  <a
                    href={service.path}
                    onClick={() => onSelectService && onSelectService(service.name)}
                    className="text-xs sm:text-sm text-gray-400 hover:text-white hover:translate-x-1 transition-all inline-block"
                  >
                    <span className="text-gray-600 font-mono mr-1.5 text-[11px]">0{idx + 1}.</span>
                    {service.name}
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
                  onClick={() => trackWhatsAppClick('footer_phone_link')}
                  className="text-white hover:text-brand-teal transition-colors block mt-0.5"
                >
                  +92 312 5355078
                </a>
              </div>

              <div>
                <span className="text-gray-500 block text-[10px]">CO-FOUNDER & CTO</span>
                <a 
                  href="https://wa.me/923105522970" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  onClick={() => trackWhatsAppClick('footer_cto_whatsapp')}
                  className="text-white hover:text-teal-300 transition-colors block mt-0.5"
                >
                  +92 310 5522970
                </a>
              </div>

              <div>
                <span className="text-gray-500 block text-[10px]">SERVICE REGIONS</span>
                <span className="text-gray-300 block mt-0.5">
                  Pakistan (Taxila, Wah Cantt, Islamabad, Rawalpindi) & Global
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <div>
            © {new Date().getFullYear()} Nutcrackers. All rights reserved. Engineering high-performance digital products.
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
              className="p-2 rounded-full bg-white/[0.04] hover:bg-white/10 text-gray-400 hover:text-white transition-colors cursor-pointer"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Privacy Policy & Terms Modal */}
      {modalType && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in"
          onClick={() => setModalType(null)}
        >
          <div 
            className="relative w-full max-w-2xl bg-[#0e0f17] border border-white/10 rounded-2xl p-6 sm:p-8 shadow-2xl overflow-y-auto max-h-[85vh] text-left"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setModalType(null)}
              className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {modalType === 'privacy' ? (
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-brand-teal">
                  <Shield className="w-5 h-5" />
                  <h3 className="text-xl font-bold text-white">Privacy Policy</h3>
                </div>
                <p className="text-xs text-gray-400 font-mono">Effective Date: November 2026</p>
                <div className="text-sm text-gray-300 space-y-3 leading-relaxed">
                  <p>
                    At Nutcrackers, we strictly protect the privacy and confidentiality of our clients, partners, and visitors. 
                    This Privacy Policy outlines how we treat information received through our official channels.
                  </p>
                  <h4 className="font-semibold text-white pt-2">1. Information Collection & Usage</h4>
                  <p>
                    We collect only the contact details (Name, Email, WhatsApp Phone Number, Project Scopes) submitted voluntarily 
                    through our consultation quote forms or direct messaging. This information is utilized exclusively to respond to your project inquiries, deliver technical proposals, and execute contracted deliverables.
                  </p>
                  <h4 className="font-semibold text-white pt-2">2. Zero Third-Party Monetization</h4>
                  <p>
                    We never sell, rent, monetize, or distribute your personal or commercial contact information to third-party data brokers or advertising networks.
                  </p>
                  <h4 className="font-semibold text-white pt-2">3. Direct Data Inquiries</h4>
                  <p>
                    To request deletion or verification of any communications, contact our team directly at +92 312 5355078.
                  </p>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-purple-400">
                  <FileText className="w-5 h-5" />
                  <h3 className="text-xl font-bold text-white">Terms of Service</h3>
                </div>
                <p className="text-xs text-gray-400 font-mono">Effective Date: November 2026</p>
                <div className="text-sm text-gray-300 space-y-3 leading-relaxed">
                  <p>
                    Welcome to Nutcrackers. By engaging our design, web engineering, mobile development, AI automation, 
                    or media production services, you agree to these fundamental operational terms.
                  </p>
                  <h4 className="font-semibold text-white pt-2">1. Scope of Work & Deliverables</h4>
                  <p>
                    All project milestones, feature sets, technical architectures, and delivery timelines are defined in written milestone agreements before development begins.
                  </p>
                  <h4 className="font-semibold text-white pt-2">2. Intellectual Property & Code Ownership</h4>
                  <p>
                    Upon settlement of agreed milestone payments, the client retains 100% full ownership of all custom source code, design assets, and database schemas created specifically for their engagement.
                  </p>
                  <h4 className="font-semibold text-white pt-2">3. Confidentiality & Non-Disclosure</h4>
                  <p>
                    Nutcrackers maintains strict non-disclosure safeguards regarding client proprietary data, business logic, customer databases, and commercial trade secrets.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </footer>
  );
};
