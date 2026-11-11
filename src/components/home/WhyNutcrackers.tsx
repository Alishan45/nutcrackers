import React from 'react';
import { 
  Sparkles, 
  Cpu, 
  Target, 
  Boxes, 
  LineChart, 
  ShieldCheck, 
  Layers, 
  Zap 
} from 'lucide-react';
import { ScrambleText } from '../common/ScrambleText';

export const WhyNutcrackers: React.FC = () => {
  const pillars = [
    {
      icon: Sparkles,
      title: 'Creative & Technical Mastery',
      description: 'We dissolve the boundary between aesthetic brilliance and hardcore engineering. You get commercial-grade visual storytelling and rock-solid software under one roof.',
      color: 'text-purple-400',
      badge: 'Dual Discipline'
    },
    {
      icon: Cpu,
      title: 'AI-First Strategic Architecture',
      description: 'We do not treat AI as a gimmick. We embed production-ready autonomous agents, RAG vector pipelines, and self-healing automations directly into your operations.',
      color: 'text-brand-teal',
      badge: 'State-of-the-Art'
    },
    {
      icon: Target,
      title: 'Business-Focused ROI',
      description: 'Every video cut, web application, and data model is engineered around your key business metrics: lower customer acquisition costs, higher retention, and operational speed.',
      color: 'text-brand-amber',
      badge: 'Commercial Impact'
    },
    {
      icon: Boxes,
      title: '100% Bespoke Solutions',
      description: 'No generic low-code templates or one-size-fits-all gimmicks. Every software platform and media project is engineered from scratch for your brand identity and scalability.',
      color: 'text-indigo-400',
      badge: 'Zero Bloat'
    },
    {
      icon: LineChart,
      title: 'Data-Driven Precision',
      description: 'We don’t guess. From video pacing analytics to predictive customer churn classifiers, our decisions are validated by statistical evidence and telemetry.',
      color: 'text-emerald-400',
      badge: 'Quantitative'
    },
    {
      icon: ShieldCheck,
      title: 'Enterprise-Grade Reliability',
      description: 'Scalable cloud infrastructure, secure API authorization, modern Git workflows, and ongoing technical advisory ensure you never outgrow your stack.',
      color: 'text-blue-400',
      badge: 'Future-Proof'
    }
  ];

  return (
    <section id="about" className="py-24 sm:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-md mb-4">
            <Zap className="w-3.5 h-3.5 text-brand-gold" />
            <span className="text-xs font-mono text-gray-300 uppercase tracking-wider">
              The Nutcrackers Advantage
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            One Partner.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-300 to-brand-amber animate-gradient-text">
              <ScrambleText text="Multiple Digital Possibilities." />
            </span>
          </h2>

          <p className="mt-4 text-gray-400 text-sm sm:text-base leading-relaxed">
            Eliminate fragmented agencies, misaligned freelancers, and technical debt. 
            Nutcrackers unifies high-end creative direction, modern full-stack development, and AI engineering.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="group relative rounded-3xl bg-[#0D0E16]/80 border border-white/[0.08] p-7 flex flex-col justify-between hover:bg-[#12131F] hover:border-white/20 transition-all duration-300 hover:shadow-[0_10px_35px_-10px_rgba(0,0,0,0.7)]"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/10 group-hover:scale-105 transition-transform">
                      <Icon className={`w-6 h-6 ${pillar.color}`} />
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-gray-400 px-2.5 py-1 rounded-full bg-white/[0.02] border border-white/[0.06]">
                      {pillar.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-purple-200 transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="mt-3 text-sm text-gray-400 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/[0.05] flex items-center justify-between text-[11px] font-mono text-gray-500">
                  <span>Pillar 0{idx + 1}</span>
                  <span className="text-brand-teal group-hover:translate-x-0.5 transition-transform">Verified Standard →</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
