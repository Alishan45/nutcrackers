import React from 'react';
import { ScrambleText } from '../common/ScrambleText';
import { NutcrackersEmblem } from '../common/NutcrackersLogo';
import { ArrowRight, Sparkles, Terminal, Play, Bot, Workflow, BarChart3, ShieldCheck } from 'lucide-react';

interface HeroSectionProps {
  onStartProject: () => void;
  onExploreServices: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onStartProject,
  onExploreServices,
}) => {
  return (
    <section 
      id="home" 
      className="relative pt-28 sm:pt-36 pb-16 sm:pb-20 overflow-hidden flex flex-col items-center justify-center min-h-[680px] lg:min-h-[820px]"
    >
      {/* Background Radial Ambient Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[900px] h-[500px] bg-gradient-to-tr from-purple-900/25 via-indigo-900/20 to-teal-900/15 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center">
        {/* Top Status Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-md mb-8 hover:border-purple-500/40 transition-all duration-300 group cursor-default">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-teal opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-teal shadow-[0_0_8px_#2DD4BF]"></span>
          </span>
          <span className="text-xs font-mono text-gray-300">
            AI Agents · Custom Software · Data & Video Production
          </span>
          <span className="text-brand-amber font-mono text-xs">⚡</span>
        </div>

        {/* Hero Headline with Kinetic Scramble Effect */}
        <h1 className="text-3xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white max-w-5xl leading-[1.15] sm:leading-[1.1]">
          We Turn Complex Ideas Into{' '}
          <span className="relative inline-block mt-1 sm:mt-0">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-300 to-teal-300 animate-gradient-text">
              <ScrambleText text="Digital Excellence." initialDelay={350} />
            </span>
            <div className="absolute -bottom-1.5 sm:-bottom-2 left-0 right-0 h-[2px] bg-gradient-to-r from-purple-500 via-indigo-400 to-brand-teal opacity-80 blur-[0.5px]" />
          </span>
        </h1>

        {/* Supporting Subtitle */}
        <p className="mt-7 text-base sm:text-xl text-gray-400 max-w-3xl leading-relaxed font-normal">
          From intelligent <span className="text-gray-200 font-medium">AI solutions</span> and{' '}
          <span className="text-gray-200 font-medium">custom software development</span> to creative{' '}
          <span className="text-gray-200 font-medium">video production</span> and{' '}
          <span className="text-gray-200 font-medium">data-driven marketing</span>, Nutcrackers helps businesses build, automate and grow.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <button
            onClick={onStartProject}
            className="w-full sm:w-auto px-8 py-4 rounded-full text-sm font-bold text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-700 hover:from-purple-500 hover:via-indigo-500 hover:to-purple-600 transition-all duration-300 shadow-[0_0_30px_rgba(168,85,247,0.4)] hover:shadow-[0_0_40px_rgba(168,85,247,0.6)] border border-purple-400/40 flex items-center justify-center gap-2 group cursor-pointer"
          >
            <span>Let's Build Something</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </button>

          <button
            onClick={onExploreServices}
            className="w-full sm:w-auto px-7 py-4 rounded-full text-sm font-semibold text-gray-300 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-white/20 transition-all duration-200 backdrop-blur-md flex items-center justify-center gap-2 cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-brand-amber" />
            <span>Explore Our Services</span>
          </button>
        </div>

        {/* Brand-Inspired Visual Architecture Element (PromptsLove & Linear style) */}
        <div className="mt-16 w-full max-w-4xl relative">
          {/* Glowing Outline Box */}
          <div className="relative rounded-2xl p-[1px] bg-gradient-to-b from-white/20 via-purple-500/20 to-transparent shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8)]">
            <div className="rounded-2xl bg-[#0D0E16]/90 backdrop-blur-xl p-5 sm:p-7 border border-white/[0.06] overflow-hidden">
              {/* Window Header */}
              <div className="flex items-center justify-between pb-4 border-b border-white/[0.08] mb-5">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/70" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                  <div className="w-3 h-3 rounded-full bg-green-500/70" />
                  <span className="ml-3 font-mono text-[11px] text-gray-500">
                    nutcrackers.engine // core_pipeline_v3.4
                  </span>
                </div>
                <div className="flex items-center gap-3 font-mono text-[11px] text-brand-teal">
                  <span className="w-2 h-2 rounded-full bg-brand-teal animate-pulse" />
                  <span>ALL 7 PILLARS ACTIVE</span>
                </div>
              </div>

              {/* Architecture Nodes Matrix */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-left">
                {/* Node 1: AI Agent */}
                <div className="p-3.5 rounded-xl bg-white/[0.025] border border-white/[0.06] hover:border-purple-500/40 transition-all group">
                  <div className="flex items-center justify-between mb-2">
                    <Bot className="w-4 h-4 text-purple-400 group-hover:scale-110 transition-transform" />
                    <span className="text-[10px] font-mono text-gray-500">01</span>
                  </div>
                  <div className="text-xs font-semibold text-white">AI Agents</div>
                  <div className="text-[11px] text-gray-400 mt-0.5">Autonomous Support & Sales</div>
                </div>

                {/* Node 2: Automation */}
                <div className="p-3.5 rounded-xl bg-white/[0.025] border border-white/[0.06] hover:border-indigo-500/40 transition-all group">
                  <div className="flex items-center justify-between mb-2">
                    <Workflow className="w-4 h-4 text-indigo-400 group-hover:scale-110 transition-transform" />
                    <span className="text-[10px] font-mono text-gray-500">02</span>
                  </div>
                  <div className="text-xs font-semibold text-white">Workflows</div>
                  <div className="text-[11px] text-gray-400 mt-0.5">Zero-Friction Operations</div>
                </div>

                {/* Node 3: Software & Video */}
                <div className="p-3.5 rounded-xl bg-white/[0.025] border border-white/[0.06] hover:border-teal-500/40 transition-all group">
                  <div className="flex items-center justify-between mb-2">
                    <Play className="w-4 h-4 text-brand-teal group-hover:scale-110 transition-transform" />
                    <span className="text-[10px] font-mono text-gray-500">03</span>
                  </div>
                  <div className="text-xs font-semibold text-white">Creative & Web</div>
                  <div className="text-[11px] text-gray-400 mt-0.5">High-Retention Media & Code</div>
                </div>

                {/* Node 4: Data Science & Analytics */}
                <div className="p-3.5 rounded-xl bg-white/[0.025] border border-white/[0.06] hover:border-amber-500/40 transition-all group">
                  <div className="flex items-center justify-between mb-2">
                    <BarChart3 className="w-4 h-4 text-brand-amber group-hover:scale-110 transition-transform" />
                    <span className="text-[10px] font-mono text-gray-500">04</span>
                  </div>
                  <div className="text-xs font-semibold text-white">Predictive Data</div>
                  <div className="text-[11px] text-gray-400 mt-0.5">ML Models & Intelligence</div>
                </div>
              </div>

              {/* Live Status Ticker */}
              <div className="mt-4 pt-3 border-t border-white/[0.05] flex flex-wrap items-center justify-between gap-2 text-[11px] font-mono text-gray-400">
                <div className="flex items-center gap-2">
                  <Terminal className="w-3.5 h-3.5 text-gray-500" />
                  <span>Deployment: Ready for Enterprise & High-Growth Startups</span>
                </div>
                <div className="flex items-center gap-2 text-brand-amber">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Official Verified Entity: Nutcrackers</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
