import React, { useEffect } from 'react';
import { X, CheckCircle2, ArrowRight, Sparkles, MessageSquare } from 'lucide-react';
import { ServiceData } from '../home/ServicesBento';

interface ServiceDetailModalProps {
  service: ServiceData | null;
  onClose: () => void;
  onSelectServiceForQuote: (serviceTitle: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onSelectServiceForQuote,
}) => {
  useEffect(() => {
    if (!service) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [service, onClose]);

  if (!service) return null;

  const Icon = service.icon;

  const handleInquire = () => {
    onSelectServiceForQuote(service.title);
    onClose();
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-2xl animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-2xl bg-[#0D0E16] rounded-3xl border border-white/15 p-6 sm:p-8 shadow-2xl overflow-hidden max-h-[88vh] flex flex-col justify-between my-auto">
        
        {/* Subtle Background Glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

        {/* Modal Header */}
        <div className="flex items-start justify-between pb-4 border-b border-white/10 relative z-10">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-white/[0.04] border border-white/10 text-brand-teal">
              <Icon className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[11px] font-mono text-brand-gold uppercase tracking-widest block">
                {service.number} · {service.category}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white mt-0.5">
                {service.title}
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2.5 rounded-full bg-white/[0.06] hover:bg-white/[0.15] border border-white/15 text-gray-300 hover:text-white transition-all focus:outline-none cursor-pointer shadow-lg hover:scale-105 active:scale-95 shrink-0 ml-3"
            aria-label="Close service modal"
            title="Close window (Esc)"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="my-6 overflow-y-auto space-y-6 pr-2 relative z-10 text-left">
          {/* Tagline & Description */}
          <div>
            <div className="text-xs font-mono text-purple-300 font-semibold mb-1.5">
              {service.tagline}
            </div>
            <p className="text-sm text-gray-300 leading-relaxed">
              {service.description}
            </p>
          </div>

          {/* Key Deliverables */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-gray-400 mb-3">
              Included Deliverables & Capabilities
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {service.deliverables.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                  <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0 mt-0.5" />
                  <span className="text-xs text-gray-200 leading-tight">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies & Stacks */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-gray-400 mb-2.5">
              Frameworks, Tools & Engines
            </h4>
            <div className="flex flex-wrap gap-2">
              {service.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-full text-xs font-mono text-gray-300 bg-white/[0.04] border border-white/10"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Actions */}
        <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 relative z-10">
          <div className="text-xs font-mono text-gray-400 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-brand-amber" />
            <span>Milestone Delivery Guaranteed</span>
          </div>

          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="flex-1 sm:flex-initial px-5 py-2.5 rounded-xl text-xs font-semibold text-gray-300 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 transition-colors"
            >
              Close
            </button>
            <button
              onClick={handleInquire}
              className="flex-1 sm:flex-initial px-6 py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 transition-all shadow-lg shadow-purple-600/30 flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <span>Get Quote for {service.title}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
