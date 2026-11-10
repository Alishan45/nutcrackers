import React, { useState } from 'react';
import { 
  Video, 
  TrendingUp, 
  Laptop, 
  Bot, 
  Workflow, 
  BrainCircuit, 
  BarChart4, 
  ArrowUpRight, 
  Play, 
  CheckCircle2, 
  Layers, 
  Sparkles, 
  Send,
  Zap,
  Activity,
  Cpu
} from 'lucide-react';
import { ScrambleText } from '../common/ScrambleText';

export interface ServiceData {
  id: string;
  number: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  deliverables: string[];
  techStack: string[];
  icon: any;
  accent: string;
  borderColor: string;
}

export const NUTCRACKERS_SERVICES: ServiceData[] = [
  {
    id: 'video-editing',
    number: '01',
    title: 'Video Editing',
    category: 'Creative Production',
    tagline: 'High-Retention Visual Storytelling & Commercial Cuts',
    description: 'Professional video editing engineered for maximum engagement, audience retention, and high-impact brand conversion.',
    deliverables: [
      'Promotional videos & commercial advertisements',
      'Social media reels, TikToks & YouTube Shorts',
      'Corporate brand overviews & company profiles',
      'Long-form YouTube video pacing & storytelling',
      'Motion graphics, 2D/3D kinetic titles & sound design',
      'Visual storytelling, multi-cam sync & color grading',
      'Professional transition effects & SFX mastering'
    ],
    techStack: ['Premiere Pro', 'After Effects', 'DaVinci Resolve', 'Audition', 'Blender'],
    icon: Video,
    accent: 'from-purple-500/20 via-pink-500/10 to-transparent',
    borderColor: 'group-hover:border-purple-500/50'
  },
  {
    id: 'digital-marketing',
    number: '02',
    title: 'Digital Marketing',
    category: 'Growth & Acquisition',
    tagline: 'Data-Driven ROI & Brand Scalability',
    description: 'Strategic acquisition campaigns combining algorithmic audience targeting, search domination, and creative ad copy that drives paying customers.',
    deliverables: [
      'Full-spectrum social media management',
      'Social media marketing & viral asset distribution',
      'Search Engine Optimization (Technical & On-Page SEO)',
      'High-converting paid advertising (Meta, Google & LinkedIn)',
      'Holistic content strategy & funnel architecture',
      'Brand awareness & authority positioning',
      'Digital growth tracking & unit economics optimization'
    ],
    techStack: ['Meta Ads Manager', 'Google Ads', 'SEMrush', 'GA4', 'HubSpot'],
    icon: TrendingUp,
    accent: 'from-indigo-500/20 via-blue-500/10 to-transparent',
    borderColor: 'group-hover:border-indigo-500/50'
  },
  {
    id: 'web-mobile-dev',
    number: '03',
    title: 'Mobile App & Web Development',
    category: 'Engineering & Software',
    tagline: 'Ultra-Fast, Scalable Digital Products',
    description: 'Modern full-stack web platforms and cross-platform mobile apps built with top-tier modern frameworks, uncompromising speed, and fluid UI.',
    deliverables: [
      'High-converting corporate & business websites',
      'Bespoke ecommerce platforms with custom checkout',
      'Custom web applications & SaaS portals',
      'Native-feel Android & iOS cross-platform applications',
      'Comprehensive admin dashboards & analytics panels',
      'Secure REST & GraphQL API integrations',
      'Database-driven architectures & cloud deployment',
      'Tailored UI/UX design systems with Figma & Framer'
    ],
    techStack: ['React', 'Next.js', 'TypeScript', 'Node.js', 'React Native', 'Tailwind', 'PostgreSQL'],
    icon: Laptop,
    accent: 'from-teal-500/20 via-emerald-500/10 to-transparent',
    borderColor: 'group-hover:border-teal-500/50'
  },
  {
    id: 'ai-website-agent',
    number: '04',
    title: 'AI Website Agent',
    category: 'Autonomous Conversational AI',
    tagline: '24/7 Intelligent Customer Engagement & Qualification',
    description: 'Autonomous AI agents embedded directly on your site to answer complex queries, qualify high-value leads, book appointments, and guide visitors.',
    deliverables: [
      '24/7 autonomous customer support agents',
      'Intelligent website chatbots with brand tone adaptation',
      'Instant automated customer guidance & objection handling',
      'Automated lead qualification & CRM syncing',
      'AI-powered personalized product recommendations',
      'Knowledge-base & vector documentation integration (RAG)',
      'Custom fine-tuned multi-modal AI agents'
    ],
    techStack: ['OpenAI / Claude / Gemini API', 'LangChain', 'Pinecone', 'Next.js', 'WebSockets'],
    icon: Bot,
    accent: 'from-purple-500/20 via-indigo-500/10 to-transparent',
    borderColor: 'group-hover:border-purple-400/50'
  },
  {
    id: 'ai-automation',
    number: '05',
    title: 'AI Automation',
    category: 'Workflow Engineering',
    tagline: 'Eliminate Repetitive Tasks with Intelligent Workflows',
    description: 'Automate high-friction operations, cross-app data syncing, and operational pipelines with self-healing AI workflows.',
    deliverables: [
      'End-to-end business process automation (BPA)',
      'AI-powered decision workflows & logic branches',
      'Multi-platform API integrations & webhooks',
      'Automated financial, operational & KPI reporting',
      'AI document extraction, invoice OCR & parsing',
      'Instant lead routing & automated nurture sequences',
      'Autonomous multi-agent execution pipelines'
    ],
    techStack: ['Make.com', 'n8n', 'Zapier', 'Python', 'OpenAI Agents', 'Airtable'],
    icon: Workflow,
    accent: 'from-blue-500/20 via-purple-500/10 to-transparent',
    borderColor: 'group-hover:border-blue-400/50'
  },
  {
    id: 'data-science',
    number: '06',
    title: 'Data Science',
    category: 'Machine Learning & Predictive Models',
    tagline: 'From Historical Data to Predictive Foresight',
    description: 'Custom machine learning models, neural networks, and NLP pipelines designed to forecast demand, prevent churn, and automate intelligence.',
    deliverables: [
      'Custom supervised & unsupervised machine learning',
      'Predictive customer lifetime value & churn modelling',
      'Artificial intelligence systems & heuristic fine-tuning',
      'Deep learning neural architectures for classification',
      'Computer vision for image/video feature extraction',
      'Natural Language Processing (NLP) & sentiment analysis',
      'Intelligent recommendation algorithms & data pipelines'
    ],
    techStack: ['Python', 'PyTorch', 'Scikit-learn', 'TensorFlow', 'Pandas', 'XGBoost'],
    icon: BrainCircuit,
    accent: 'from-amber-500/20 via-orange-500/10 to-transparent',
    borderColor: 'group-hover:border-amber-400/50'
  },
  {
    id: 'data-analysis',
    number: '07',
    title: 'Data Analysis',
    category: 'Business Intelligence',
    tagline: 'Turn Raw Metrics into Decisive Action',
    description: 'Transform complex, fragmented business data into crystal-clear interactive dashboards, statistical benchmarks, and revenue levers.',
    deliverables: [
      'Comprehensive data cleaning, auditing & normalization',
      'Exploratory Data Analysis (EDA) & pattern discovery',
      'Rigorous statistical analysis & hypothesis testing',
      'Real-time interactive executive dashboards',
      'Business intelligence (BI) data warehouses',
      'Stunning data visualization for stakeholder alignment',
      'Actionable reporting & growth constraint identification'
    ],
    techStack: ['SQL', 'PowerBI', 'Tableau', 'BigQuery', 'Python', 'Excel Advanced'],
    icon: BarChart4,
    accent: 'from-emerald-500/20 via-teal-500/10 to-transparent',
    borderColor: 'group-hover:border-emerald-400/50'
  }
];

interface ServicesBentoProps {
  onSelectService: (service: ServiceData) => void;
}

export const ServicesBento: React.FC<ServicesBentoProps> = ({ onSelectService }) => {
  return (
    <section id="services" className="py-24 sm:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-md mb-4">
            <Sparkles className="w-3.5 h-3.5 text-brand-teal" />
            <span className="text-xs font-mono text-gray-300 uppercase tracking-wider">
              Seven Core Disciplines
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Specialized Services.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-300 to-brand-gold">
              <ScrambleText text="One Unified Standard." />
            </span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl text-sm sm:text-base">
            Every service is executed with deep engineering precision, creative mastery, and measurable business impact.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5 sm:gap-6">
          
          {/* Card 1: Video Editing (span 7) */}
          <div 
            onClick={() => onSelectService(NUTCRACKERS_SERVICES[0])}
            className="lg:col-span-7 group relative rounded-3xl bg-[#0D0E16]/90 border border-white/[0.08] p-6 sm:p-8 flex flex-col justify-between overflow-hidden cursor-pointer transition-all duration-300 hover:border-purple-500/40 hover:bg-[#12131F]/90 hover:shadow-[0_12px_40px_-15px_rgba(168,85,247,0.25)]"
          >
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="p-2.5 rounded-2xl bg-purple-500/10 border border-purple-500/20 text-purple-400">
                    <Video className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-xs text-gray-400 uppercase tracking-wider">01 · Creative</span>
                </div>
                <div className="w-8 h-8 rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center text-gray-400 group-hover:text-white group-hover:bg-purple-600 transition-all">
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-purple-300 transition-colors">
                Video Editing
              </h3>
              <p className="mt-2 text-sm text-gray-400 leading-relaxed max-w-md">
                Professional cuts, kinetic pacing, sound architecture, and motion graphics for creators, brands, and enterprise commercials.
              </p>
            </div>

            {/* Interactive Timeline Visual Treatment */}
            <div className="mt-6 pt-4 border-t border-white/[0.06] relative z-10">
              <div className="bg-black/40 rounded-xl p-3 border border-white/[0.06]">
                <div className="flex items-center justify-between text-[10px] font-mono text-gray-400 mb-2">
                  <span className="flex items-center gap-1.5 text-purple-300">
                    <Play className="w-3 h-3 fill-current" /> 00:01:24:18 / 00:03:00:00
                  </span>
                  <span className="text-brand-teal">4K 60FPS · PRORES 422</span>
                </div>
                {/* Timeline Tracks */}
                <div className="space-y-1.5">
                  <div className="h-4 rounded bg-purple-900/40 border border-purple-500/30 flex items-center px-2 text-[9px] font-mono text-purple-200 overflow-hidden">
                    V1: Main_A-Roll_Cut.mp4
                  </div>
                  <div className="flex gap-2">
                    <div className="w-2/3 h-3.5 rounded bg-indigo-900/40 border border-indigo-500/30 flex items-center px-1.5 text-[8px] font-mono text-indigo-200">
                      V2: B-Roll_Overlay_4k
                    </div>
                    <div className="w-1/3 h-3.5 rounded bg-pink-900/40 border border-pink-500/30 flex items-center px-1.5 text-[8px] font-mono text-pink-200">
                      Titles & SFX
                    </div>
                  </div>
                  <div className="h-3 rounded bg-teal-900/40 border border-teal-500/30 flex items-center px-2 text-[8px] font-mono text-teal-200">
                    A1: SoundMaster_Stereo.wav
                  </div>
                </div>
              </div>
            </div>

            {/* Background Subtle Gradient */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl pointer-events-none group-hover:opacity-100 transition-opacity" />
          </div>

          {/* Card 2: Digital Marketing (span 5) */}
          <div 
            onClick={() => onSelectService(NUTCRACKERS_SERVICES[1])}
            className="lg:col-span-5 group relative rounded-3xl bg-[#0D0E16]/90 border border-white/[0.08] p-6 sm:p-8 flex flex-col justify-between overflow-hidden cursor-pointer transition-all duration-300 hover:border-indigo-500/40 hover:bg-[#12131F]/90 hover:shadow-[0_12px_40px_-15px_rgba(99,102,241,0.25)]"
          >
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="p-2.5 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-xs text-gray-400 uppercase tracking-wider">02 · Growth</span>
                </div>
                <div className="w-8 h-8 rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center text-gray-400 group-hover:text-white group-hover:bg-indigo-600 transition-all">
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                Digital Marketing
              </h3>
              <p className="mt-2 text-sm text-gray-400 leading-relaxed">
                Algorithmic ad campaigns, technical SEO, and viral brand architecture that drive quantifiable customer acquisition.
              </p>
            </div>

            {/* Campaign Analytics Visualization */}
            <div className="mt-6 pt-4 border-t border-white/[0.06] relative z-10">
              <div className="bg-black/40 rounded-xl p-3 border border-white/[0.06]">
                <div className="flex items-center justify-between text-xs font-mono text-gray-400 mb-2">
                  <span>ROAS / Conversion Funnel</span>
                  <span className="text-emerald-400 font-bold">+342% MoM</span>
                </div>
                <div className="flex items-end gap-1.5 h-12 pt-2">
                  {[28, 45, 60, 52, 78, 64, 92, 110, 135].map((val, idx) => (
                    <div key={idx} className="flex-1 bg-gradient-to-t from-indigo-600/30 to-indigo-400 rounded-t-sm" style={{ height: `${(val / 140) * 100}%` }} />
                  ))}
                </div>
              </div>
            </div>

            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />
          </div>

          {/* Card 3: Mobile App & Web Development (span 6) */}
          <div 
            onClick={() => onSelectService(NUTCRACKERS_SERVICES[2])}
            className="lg:col-span-6 group relative rounded-3xl bg-[#0D0E16]/90 border border-white/[0.08] p-6 sm:p-8 flex flex-col justify-between overflow-hidden cursor-pointer transition-all duration-300 hover:border-teal-500/40 hover:bg-[#12131F]/90 hover:shadow-[0_12px_40px_-15px_rgba(45,212,191,0.2)]"
          >
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="p-2.5 rounded-2xl bg-teal-500/10 border border-teal-500/20 text-brand-teal">
                    <Laptop className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-xs text-gray-400 uppercase tracking-wider">03 · Engineering</span>
                </div>
                <div className="w-8 h-8 rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center text-gray-400 group-hover:text-white group-hover:bg-brand-teal group-hover:text-black transition-all">
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-teal-300 transition-colors">
                Mobile App & Web Development
              </h3>
              <p className="mt-2 text-sm text-gray-400 leading-relaxed">
                Full-stack web applications, ecommerce stores, and native mobile apps engineered with Next.js, React Native, and robust cloud APIs.
              </p>
            </div>

            {/* Browser & Mobile Mockup Visual */}
            <div className="mt-6 pt-4 border-t border-white/[0.06] relative z-10">
              <div className="bg-black/50 rounded-xl p-3 border border-white/[0.06] flex items-center gap-3">
                <div className="flex-1 bg-white/[0.03] rounded-lg p-2.5 border border-white/[0.05]">
                  <div className="flex gap-1 mb-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-500/60" />
                    <div className="w-1.5 h-1.5 rounded-full bg-yellow-500/60" />
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500/60" />
                  </div>
                  <div className="h-1.5 w-3/4 bg-white/20 rounded mb-1" />
                  <div className="h-1.5 w-1/2 bg-white/10 rounded" />
                </div>
                <div className="w-16 h-20 bg-white/[0.04] rounded-lg p-1.5 border border-white/[0.08] flex flex-col justify-between">
                  <div className="w-4 h-1 bg-white/20 rounded mx-auto" />
                  <div className="space-y-1">
                    <div className="w-full h-1 bg-brand-teal/40 rounded" />
                    <div className="w-4/5 h-1 bg-white/10 rounded" />
                  </div>
                  <div className="w-2 h-2 rounded-full bg-brand-teal/50 mx-auto" />
                </div>
              </div>
            </div>

            <div className="absolute top-0 right-0 w-72 h-72 bg-teal-600/10 rounded-full blur-3xl pointer-events-none" />
          </div>

          {/* Card 4: AI Website Agent (span 6) */}
          <div 
            onClick={() => onSelectService(NUTCRACKERS_SERVICES[3])}
            className="lg:col-span-6 group relative rounded-3xl bg-[#0D0E16]/90 border border-white/[0.08] p-6 sm:p-8 flex flex-col justify-between overflow-hidden cursor-pointer transition-all duration-300 hover:border-purple-400/50 hover:bg-[#12131F]/90 hover:shadow-[0_12px_40px_-15px_rgba(168,85,247,0.25)]"
          >
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="p-2.5 rounded-2xl bg-purple-500/10 border border-purple-500/20 text-purple-400">
                    <Bot className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-xs text-gray-400 uppercase tracking-wider">04 · AI Agent</span>
                </div>
                <div className="w-8 h-8 rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center text-gray-400 group-hover:text-white group-hover:bg-purple-600 transition-all">
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-purple-300 transition-colors">
                AI Website Agent
              </h3>
              <p className="mt-2 text-sm text-gray-400 leading-relaxed">
                Autonomous conversational agents grounded in your private documentation to capture leads, resolve support, and convert visitors 24/7.
              </p>
            </div>

            {/* Interactive Chatbot Simulation */}
            <div className="mt-6 pt-4 border-t border-white/[0.06] relative z-10">
              <div className="bg-black/50 rounded-xl p-3 border border-white/[0.06] space-y-2">
                <div className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-purple-500/20 border border-purple-400/40 flex items-center justify-center text-[10px] text-purple-300 font-bold">
                    AI
                  </div>
                  <div className="bg-purple-950/40 border border-purple-500/20 text-purple-200 text-xs px-3 py-1.5 rounded-xl rounded-tl-none max-w-[85%]">
                    Welcome to Nutcrackers! What digital project are you looking to build today?
                  </div>
                </div>
                <div className="flex justify-end">
                  <div className="bg-white/10 text-white text-xs px-3 py-1.5 rounded-xl rounded-tr-none">
                    We need an AI customer chatbot and web redesign.
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute top-0 right-0 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />
          </div>

          {/* Card 5: AI Automation (span 4) */}
          <div 
            onClick={() => onSelectService(NUTCRACKERS_SERVICES[4])}
            className="lg:col-span-4 group relative rounded-3xl bg-[#0D0E16]/90 border border-white/[0.08] p-6 sm:p-7 flex flex-col justify-between overflow-hidden cursor-pointer transition-all duration-300 hover:border-blue-400/50 hover:bg-[#12131F]/90 hover:shadow-[0_12px_40px_-15px_rgba(56,189,248,0.2)]"
          >
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="p-2.5 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-400">
                    <Workflow className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-xs text-gray-400 uppercase tracking-wider">05 · Automation</span>
                </div>
                <div className="w-8 h-8 rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center text-gray-400 group-hover:text-white group-hover:bg-blue-600 transition-all">
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-blue-300 transition-colors">
                AI Automation
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-gray-400 leading-relaxed">
                Connect your business apps into automated zero-touch pipelines that eliminate manual repetitive tasks.
              </p>
            </div>

            {/* Connected Workflow Nodes */}
            <div className="mt-5 pt-3 border-t border-white/[0.06] relative z-10">
              <div className="bg-black/50 rounded-xl p-2.5 border border-white/[0.06] flex items-center justify-between text-[10px] font-mono">
                <span className="px-2 py-1 rounded bg-blue-900/40 text-blue-300 border border-blue-500/30">Trigger: Form</span>
                <span className="text-gray-500">→</span>
                <span className="px-2 py-1 rounded bg-purple-900/40 text-purple-300 border border-purple-500/30">AI Enrich</span>
                <span className="text-gray-500">→</span>
                <span className="px-2 py-1 rounded bg-teal-900/40 text-teal-300 border border-teal-500/30">CRM Sync</span>
              </div>
            </div>

            <div className="absolute top-0 right-0 w-48 h-48 bg-blue-600/10 rounded-full blur-2xl pointer-events-none" />
          </div>

          {/* Card 6: Data Science (span 4) */}
          <div 
            onClick={() => onSelectService(NUTCRACKERS_SERVICES[5])}
            className="lg:col-span-4 group relative rounded-3xl bg-[#0D0E16]/90 border border-white/[0.08] p-6 sm:p-7 flex flex-col justify-between overflow-hidden cursor-pointer transition-all duration-300 hover:border-amber-400/50 hover:bg-[#12131F]/90 hover:shadow-[0_12px_40px_-15px_rgba(245,158,11,0.2)]"
          >
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="p-2.5 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-brand-amber">
                    <BrainCircuit className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-xs text-gray-400 uppercase tracking-wider">06 · Intelligence</span>
                </div>
                <div className="w-8 h-8 rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center text-gray-400 group-hover:text-black group-hover:bg-brand-amber transition-all">
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-amber-300 transition-colors">
                Data Science
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-gray-400 leading-relaxed">
                Train predictive machine learning models, computer vision, and NLP pipelines to forecast business outcomes.
              </p>
            </div>

            {/* Predictive Model Visualization */}
            <div className="mt-5 pt-3 border-t border-white/[0.06] relative z-10">
              <div className="bg-black/50 rounded-xl p-2.5 border border-white/[0.06] text-[10px] font-mono space-y-1">
                <div className="flex justify-between text-gray-400">
                  <span>Model: XGBoost Classifier</span>
                  <span className="text-brand-amber">Accuracy: 94.8%</span>
                </div>
                <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-brand-amber h-full rounded-full w-[94.8%]" />
                </div>
              </div>
            </div>

            <div className="absolute top-0 right-0 w-48 h-48 bg-amber-600/10 rounded-full blur-2xl pointer-events-none" />
          </div>

          {/* Card 7: Data Analysis (span 4) */}
          <div 
            onClick={() => onSelectService(NUTCRACKERS_SERVICES[6])}
            className="lg:col-span-4 group relative rounded-3xl bg-[#0D0E16]/90 border border-white/[0.08] p-6 sm:p-7 flex flex-col justify-between overflow-hidden cursor-pointer transition-all duration-300 hover:border-emerald-400/50 hover:bg-[#12131F]/90 hover:shadow-[0_12px_40px_-15px_rgba(16,185,129,0.2)]"
          >
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="p-2.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                    <BarChart4 className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-xs text-gray-400 uppercase tracking-wider">07 · Insights</span>
                </div>
                <div className="w-8 h-8 rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center text-gray-400 group-hover:text-black group-hover:bg-emerald-400 transition-all">
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-emerald-300 transition-colors">
                Data Analysis
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-gray-400 leading-relaxed">
                Transform disparate database logs into interactive dashboards, statistical benchmarks, and revenue clarity.
              </p>
            </div>

            {/* Interactive Dashboard Visualization */}
            <div className="mt-5 pt-3 border-t border-white/[0.06] relative z-10">
              <div className="bg-black/50 rounded-xl p-2.5 border border-white/[0.06] flex items-center justify-between text-[10px] font-mono text-gray-400">
                <div className="flex items-center gap-1.5 text-emerald-400">
                  <Activity className="w-3.5 h-3.5" />
                  <span>Telemetry Live</span>
                </div>
                <span>KPI: +18.4% Eff.</span>
              </div>
            </div>

            <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-600/10 rounded-full blur-2xl pointer-events-none" />
          </div>

        </div>
      </div>
    </section>
  );
};
