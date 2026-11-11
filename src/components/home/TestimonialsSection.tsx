import React from 'react';
import { ShieldCheck, Lock, Star, MessageSquareCode, Award, CheckCircle2 } from 'lucide-react';
import { ScrambleText } from '../common/ScrambleText';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-md mb-4">
            <ShieldCheck className="w-3.5 h-3.5 text-brand-teal" />
            <span className="text-xs font-mono text-gray-300 uppercase tracking-wider">
              Client Standards & Trust
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Built on Integrity.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-300 to-teal-300 animate-gradient-text">
              <ScrambleText text="Measured by Impact." />
            </span>
          </h2>
          <p className="mt-4 text-gray-400 text-sm sm:text-base">
            We adhere to strict transparency: zero fabricated reviews, 100% intellectual property ownership, and milestone-backed engineering deliverables.
          </p>
        </div>

        {/* Trust Guarantees Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="p-6 rounded-3xl bg-[#0D0E16]/80 border border-white/[0.08] flex flex-col justify-between">
            <div>
              <div className="p-3 rounded-2xl bg-purple-500/10 border border-purple-500/20 text-purple-400 w-max mb-4">
                <Lock className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white">Full IP & Code Ownership</h3>
              <p className="mt-2 text-xs sm:text-sm text-gray-400 leading-relaxed">
                You own 100% of your source code, model weights, video raw files, and deployment keys. No vendor lock-in.
              </p>
            </div>
            <div className="mt-4 pt-4 border-t border-white/[0.05] text-[11px] font-mono text-brand-teal">
              Guaranteed Contractual Clause
            </div>
          </div>

          <div className="p-6 rounded-3xl bg-[#0D0E16]/80 border border-white/[0.08] flex flex-col justify-between">
            <div>
              <div className="p-3 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 w-max mb-4">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white">Milestone-Based Releases</h3>
              <p className="mt-2 text-xs sm:text-sm text-gray-400 leading-relaxed">
                Payments are linked to measurable milestones. You approve working code or video cuts before subsequent sprint releases.
              </p>
            </div>
            <div className="mt-4 pt-4 border-t border-white/[0.05] text-[11px] font-mono text-indigo-400">
              Zero Payment Risk
            </div>
          </div>

          <div className="p-6 rounded-3xl bg-[#0D0E16]/80 border border-white/[0.08] flex flex-col justify-between">
            <div>
              <div className="p-3 rounded-2xl bg-teal-500/10 border border-teal-500/20 text-brand-teal w-max mb-4">
                <MessageSquareCode className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white">Direct Engineer Access</h3>
              <p className="mt-2 text-xs sm:text-sm text-gray-400 leading-relaxed">
                No bureaucratic account managers. You collaborate directly with our senior developers, AI researchers, and video editors on WhatsApp.
              </p>
            </div>
            <div className="mt-4 pt-4 border-t border-white/[0.05] text-[11px] font-mono text-brand-amber">
              Rapid Response Protocol
            </div>
          </div>
        </div>

        {/* Authenticity Note */}
        <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <CheckCircle2 className="w-5 h-5 text-brand-teal shrink-0" />
            <div className="text-xs text-gray-400">
              <span className="text-white font-semibold">Authentic Client Onboarding:</span> We only publish testimonials with signed client consent. Have a previous engagement with Nutcrackers? We’d love your feedback!
            </div>
          </div>
          <a
            href="https://wa.me/923125355078?text=Hello%20Nutcrackers%2C%20I%20would%20like%20to%20share%20a%20testimonial%20or%20project%20feedback."
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-brand-teal hover:underline font-mono shrink-0"
          >
            Submit Feedback via WhatsApp →
          </a>
        </div>
      </div>
    </section>
  );
};
