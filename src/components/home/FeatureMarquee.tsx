import React from 'react';
import { 
  Video, 
  TrendingUp, 
  Code, 
  Smartphone, 
  Bot, 
  Workflow, 
  BrainCircuit, 
  BarChart4 
} from 'lucide-react';

export const FeatureMarquee: React.FC = () => {
  const items = [
    { label: 'Video Editing', icon: Video, color: 'text-purple-400' },
    { label: 'Digital Marketing', icon: TrendingUp, color: 'text-indigo-400' },
    { label: 'Web Development', icon: Code, color: 'text-brand-teal' },
    { label: 'Mobile Applications', icon: Smartphone, color: 'text-blue-400' },
    { label: 'AI Agents', icon: Bot, color: 'text-purple-300' },
    { label: 'AI Automation', icon: Workflow, color: 'text-indigo-300' },
    { label: 'Data Science', icon: BrainCircuit, color: 'text-brand-amber' },
    { label: 'Data Analysis', icon: BarChart4, color: 'text-emerald-400' },
  ];

  // Duplicate for seamless 50% translation loop
  const marqueeItems = [...items, ...items, ...items, ...items];

  return (
    <div className="relative w-full py-8 overflow-hidden border-y border-white/[0.07] bg-[#0B0C13]/70 backdrop-blur-md">
      {/* Edge Blur Gradients */}
      <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-r from-[#090A0F] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-l from-[#090A0F] to-transparent z-10 pointer-events-none" />

      {/* Marquee Track */}
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused] will-change-transform">
        {marqueeItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className="flex items-center gap-3.5 mx-5 sm:mx-8 px-4 py-2 rounded-full bg-white/[0.02] border border-white/[0.05] hover:border-white/20 transition-colors group cursor-default select-none"
            >
              <Icon className={`w-4 h-4 ${item.color} group-hover:scale-110 transition-transform`} />
              <span className="text-xs sm:text-sm font-semibold tracking-wide text-gray-200 uppercase whitespace-nowrap">
                {item.label}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-brand-gold/60 shadow-[0_0_6px_#F59E0B]" />
            </div>
          );
        })}
      </div>
    </div>
  );
};
