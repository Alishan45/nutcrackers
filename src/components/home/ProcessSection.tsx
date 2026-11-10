import React from 'react';
import { Search, Compass, Hammer, Rocket, ArrowRight, CheckCircle2 } from 'lucide-react';
import { ScrambleText } from '../common/ScrambleText';

export const ProcessSection: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Discover',
      tagline: 'Understand the client’s goals & requirements',
      description: 'We audit your current operations, brand goals, target audience, and bottlenecks to define clear success metrics.',
      icon: Search,
      deliverables: ['Goals Discovery', 'Technical Audit', 'Feasibility Scope'],
      color: 'text-purple-400',
      border: 'border-purple-500/30'
    },
    {
      number: '02',
      title: 'Strategize',
      tagline: 'Develop the right creative & technical solution',
      description: 'We architect the project blueprint: storyboards for video, database schemas for software, or prompt topologies for AI agents.',
      icon: Compass,
      deliverables: ['System Architecture', 'UI/UX Wireframes', 'Media Storyboards'],
      color: 'text-indigo-400',
      border: 'border-indigo-500/30'
    },
    {
      number: '03',
      title: 'Build',
      tagline: 'Design, develop & implement with agility',
      description: 'High-velocity execution. Rapid sprints, code commits, 4K video rendering, and AI model evaluation with regular client updates.',
      icon: Hammer,
      deliverables: ['Clean Codebase', 'Color & Sound Mastering', 'Model Training'],
      color: 'text-brand-teal',
      border: 'border-teal-500/30'
    },
    {
      number: '04',
      title: 'Deliver & Grow',
      tagline: 'Launch, optimize & continuously improve',
      description: 'Zero-downtime deployment, final high-bitrate delivery, campaign attribution tracking, and iterative performance tuning.',
      icon: Rocket,
      deliverables: ['Production Launch', 'Performance Telemetry', 'Dedicated Support'],
      color: 'text-brand-amber',
      border: 'border-amber-500/30'
    }
  ];

  return (
    <section id="process" className="py-24 sm:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-md mb-4">
            <span className="w-2 h-2 rounded-full bg-brand-teal animate-pulse" />
            <span className="text-xs font-mono text-gray-300 uppercase tracking-wider">
              Proven 4-Step Methodology
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Engineered for Precision.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-300 to-brand-amber">
              <ScrambleText text="Built for Growth." />
            </span>
          </h2>

          <p className="mt-4 text-gray-400 text-sm sm:text-base leading-relaxed">
            From initial concept to production scale, our disciplined workflow ensures transparency, velocity, and uncompromising quality.
          </p>
        </div>

        {/* Steps Grid with Connecting Elements */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="group relative rounded-3xl bg-[#0D0E16]/80 border border-white/[0.08] p-7 flex flex-col justify-between hover:bg-[#12131F] hover:border-white/20 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-2xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white/40 to-white/10">
                      {step.number}
                    </span>
                    <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/10 group-hover:scale-110 transition-transform">
                      <Icon className={`w-5 h-5 ${step.color}`} />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                    {step.title}
                  </h3>

                  <p className="mt-1 text-xs font-medium text-brand-teal">
                    {step.tagline}
                  </p>

                  <p className="mt-3 text-xs sm:text-sm text-gray-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Deliverables List */}
                <div className="mt-6 pt-4 border-t border-white/[0.06] space-y-1.5">
                  {step.deliverables.map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-[11px] text-gray-300 font-mono">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-teal shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
