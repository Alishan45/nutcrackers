import React from 'react';
import { ArrowRight, MessageSquare, Sparkles } from 'lucide-react';
import { ScrambleText } from '../common/ScrambleText';

interface CTASectionProps {
  onStartProject: () => void;
  onContact: () => void;
}

export const CTASection: React.FC<CTASectionProps> = ({ onStartProject, onContact }) => {
  return (
    <section className="py-20 sm:py-28 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="relative rounded-3xl p-[1px] bg-gradient-to-r from-purple-500/40 via-indigo-500/30 to-brand-teal/40 overflow-hidden shadow-[0_20px_60px_-15px_rgba(168,85,247,0.3)]">
          <div className="relative rounded-3xl bg-[#0B0C14]/90 backdrop-blur-2xl p-8 sm:p-16 text-center flex flex-col items-center">
            
            {/* Background Ambient Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-purple-600/20 rounded-full blur-[120px] pointer-events-none" />

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md mb-6">
              <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
              <span className="text-xs font-mono text-gray-300 uppercase tracking-wider">
                Let's Build the Future
              </span>
            </div>

            <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight max-w-3xl leading-tight">
              Have an Idea?{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-300 to-teal-300 animate-gradient-text">
                <ScrambleText text="Let's Make It Happen." />
              </span>
            </h2>

            <p className="mt-5 text-base sm:text-lg text-gray-300 max-w-2xl leading-relaxed">
              Tell us what you want to build, automate or grow. We'll help you turn your vision into a practical, 
              scalable digital solution with high commercial return.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <button
                onClick={onStartProject}
                className="w-full sm:w-auto px-8 py-4 rounded-full text-sm font-bold text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 transition-all shadow-[0_0_30px_rgba(168,85,247,0.5)] border border-purple-400/30 flex items-center justify-center gap-2 cursor-pointer group"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onContact}
                className="w-full sm:w-auto px-7 py-4 rounded-full text-sm font-semibold text-gray-300 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-white/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 text-brand-teal" />
                <span>Contact Nutcrackers</span>
              </button>
            </div>

            {/* Direct WhatsApp Callout from card */}
            <div className="mt-8 flex items-center gap-2 text-xs font-mono text-gray-400">
              <span>Direct Phone & WhatsApp:</span>
              <a 
                href="https://wa.me/923125355078" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-brand-teal hover:underline font-bold"
              >
                +92 312 5355078
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
