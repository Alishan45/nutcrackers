import React, { useState, useEffect } from 'react';
import { 
  X, 
  ExternalLink, 
  CheckCircle2, 
  ShieldCheck, 
  Smartphone, 
  Monitor, 
  Play, 
  ArrowRight,
  Sparkles,
  Bot,
  Workflow,
  BrainCircuit,
  BarChart4,
  Layers,
  Send,
  Loader2,
  Database
} from 'lucide-react';
import { PortfolioProject, ProjectMetric } from '../../types/portfolio';
import { FormattedAIResponse } from '../common/FormattedAIResponse';

interface ProjectDetailModalProps {
  project: PortfolioProject;
  onClose: () => void;
  onInquireSimilar: (serviceName: string) => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
  onInquireSimilar,
}) => {
  const [deviceView, setDeviceView] = useState<'desktop' | 'mobile'>('desktop');
  
  // Close on Escape, Lock Body Scroll & Hide Navbar while modal is open
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    document.body.classList.add('case-study-open');
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      document.body.classList.remove('case-study-open');
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);
  
  // Interactive mini-states for concept projects
  const [nexusInput, setNexusInput] = useState('');
  const [isAiLoading, setIsAiLoading] = useState(false);
  const [nexusMessages, setNexusMessages] = useState([
    { role: 'assistant', text: `Hello! I am ${project.title}, powered by the Nutcrackers AI Engine. How can I assist your business inquiry today?` }
  ]);

  const handleNexusSend = async () => {
    if (!nexusInput.trim() || isAiLoading) return;
    const userText = nexusInput;
    setNexusMessages(prev => [...prev, { role: 'user', text: userText }]);
    setNexusInput('');
    setIsAiLoading(true);

    try {
      const res = await fetch('/api/gemini', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prompt: userText,
          context: `Testing inside ${project.title} (${project.category}) Case Study modal`,
          service: project.serviceCategory,
          type: 'chat'
        })
      });

      const data = await res.json();
      if (res.ok && data.response) {
        setNexusMessages(prev => [...prev, { role: 'assistant', text: data.response }]);
      } else {
        setNexusMessages(prev => [
          ...prev, 
          { role: 'assistant', text: data.fallback || `In this ${project.title} architecture, our RAG model retrieves relevant internal parameters and generates context-aware guidance!` }
        ]);
      }
    } catch (e) {
      setNexusMessages(prev => [
        ...prev, 
        { role: 'assistant', text: `Nexus AI Assistant is engineered to integrate with your custom vector store and APIs for instant 24/7 client engagement.` }
      ]);
    } finally {
      setIsAiLoading(false);
    }
  };

  const handleInquire = () => {
    onInquireSimilar(project.serviceCategory);
    onClose();
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-2xl animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-4xl bg-[#0B0D15] rounded-3xl border border-white/15 shadow-2xl overflow-hidden max-h-[88vh] flex flex-col justify-between text-left my-auto">
        
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between p-4 sm:p-6 border-b border-white/10 bg-[#0D0F18]/95 sticky top-0 z-20">
          <div className="flex items-center gap-3">
            <div className={`p-2 sm:p-2.5 rounded-xl border ${
              project.isRealClient 
                ? 'bg-brand-teal/10 border-brand-teal/30 text-brand-teal' 
                : 'bg-purple-500/10 border-purple-500/30 text-purple-400'
            }`}>
              {project.isRealClient ? <ShieldCheck className="w-5 h-5" /> : <Sparkles className="w-5 h-5" />}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono uppercase tracking-widest text-gray-400">
                  {project.category}
                </span>
                <span className={`text-[9px] font-mono px-2 py-0.5 rounded-full border ${
                  project.isRealClient 
                    ? 'bg-brand-teal/15 text-brand-teal border-brand-teal/30' 
                    : 'bg-amber-500/10 text-brand-amber border-brand-amber/30'
                }`}>
                  {project.clientBadge}
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white mt-0.5">
                {project.title}
              </h2>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2.5 rounded-full bg-white/[0.06] hover:bg-white/[0.15] border border-white/15 text-gray-300 hover:text-white transition-all focus:outline-none cursor-pointer shadow-lg hover:scale-105 active:scale-95 shrink-0 ml-3"
            aria-label="Close modal window"
            title="Close window (Esc)"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Modal Content */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-6 flex-1">
          
          {/* Media Presentation Area */}
          {project.isRealClient ? (
            /* SB Healthcare Clinic: Toggleable Desktop / Mobile Mockup */
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-gray-400">
                  Delivered UI Viewport (Actual Production Site):
                </span>
                <div className="flex gap-1.5 bg-white/[0.04] p-1 rounded-xl border border-white/10">
                  <button
                    onClick={() => setDeviceView('desktop')}
                    className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                      deviceView === 'desktop' ? 'bg-white/15 text-white' : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    <Monitor className="w-3.5 h-3.5" />
                    <span>Desktop (1280px)</span>
                  </button>
                  <button
                    onClick={() => setDeviceView('mobile')}
                    className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                      deviceView === 'mobile' ? 'bg-white/15 text-white' : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    <Smartphone className="w-3.5 h-3.5" />
                    <span>Mobile (390px)</span>
                  </button>
                </div>
              </div>

              <div className="rounded-2xl overflow-hidden border border-white/10 bg-black flex items-center justify-center p-2 sm:p-4 min-h-[320px]">
                {deviceView === 'desktop' ? (
                  <img
                    src={project.imageDesktop}
                    alt="SB Healthcare Clinic Desktop Screen"
                    className="w-full max-h-[380px] object-contain rounded-xl shadow-2xl"
                    loading="eager"
                    decoding="async"
                  />
                ) : (
                  <div className="w-64 max-h-[420px] rounded-2xl overflow-hidden border-2 border-white/20 shadow-2xl bg-black">
                    <img
                      src={project.imageMobile}
                      alt="SB Healthcare Clinic Mobile Screen"
                      className="w-full h-auto object-cover"
                      loading="eager"
                      decoding="async"
                    />
                  </div>
                )}
              </div>
            </div>
          ) : project.imageDesktop ? (
            /* Bespoke 16:9 Project Mockup */
            <div className="rounded-2xl overflow-hidden border border-white/10 bg-black max-h-[380px] flex items-center justify-center relative group">
              <img
                src={project.imageDesktop}
                alt={project.title}
                className="w-full h-full object-cover rounded-xl"
                loading="eager"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
                <span className="text-xs font-mono text-gray-200">
                  {project.tagline}
                </span>
              </div>
            </div>
          ) : (
            /* Concept Simulation Visual Header Fallback */
            <div className="rounded-2xl p-6 bg-gradient-to-r from-purple-950/30 via-indigo-950/30 to-black border border-white/10 flex flex-col items-center justify-center text-center">
              <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 mb-3 text-brand-teal">
                <Sparkles className="w-10 h-10 text-purple-400" />
              </div>
              <h3 className="text-lg font-bold text-white">{project.tagline}</h3>
            </div>
          )}

          {/* Metrics Summary Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {project.verifiedMetrics.map((metric: ProjectMetric, idx: number) => (
              <div key={idx} className="p-3 rounded-xl bg-white/[0.025] border border-white/[0.06]">
                <div className="text-[10px] font-mono text-gray-500 uppercase">{metric.label}</div>
                <div className="text-xs sm:text-sm font-bold text-white mt-0.5 truncate">{metric.value}</div>
              </div>
            ))}
          </div>

          {/* Project Overview */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-brand-teal mb-2">
              Project Architecture & Overview
            </h4>
            <p className="text-sm text-gray-300 leading-relaxed">
              {project.fullDescription}
            </p>
          </div>

          {/* Key Implemented Capabilities */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-purple-300 mb-3">
              Key Features & Deliverables
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.keyFeatures.map((feat: string, idx: number) => (
                <div key={idx} className="flex items-start gap-2.5 p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                  <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0 mt-0.5" />
                  <span className="text-xs text-gray-200 leading-normal">{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Simulation Sandbox powered by Nutcrackers AI Engine (if AI Agent concept) */}
          {project.id === 'nexus-ai-assistant' && (
            <div className="p-4 rounded-2xl bg-black/60 border border-white/10 space-y-3">
              <div className="flex items-center justify-between text-xs font-mono text-gray-400">
                <span className="flex items-center gap-1.5 text-purple-300 font-bold">
                  <Bot className="w-3.5 h-3.5" /> Live Autonomous Agent Sandbox
                </span>
                <span className="text-[10px] bg-purple-950/40 text-purple-300 px-2 py-0.5 rounded border border-purple-500/30">
                  Nutcrackers Neural Engine
                </span>
              </div>
              <div className="space-y-2.5 max-h-56 overflow-y-auto pr-1">
                {nexusMessages.map((msg, i) => (
                  <div key={i} className={`text-xs p-3 rounded-2xl max-w-[90%] leading-relaxed ${
                    msg.role === 'user' ? 'ml-auto bg-purple-600 text-white font-medium' : 'bg-white/[0.06] border border-white/10 text-gray-200 shadow-md'
                  }`}>
                    {msg.role === 'user' ? (
                      <p>{msg.text}</p>
                    ) : (
                      <FormattedAIResponse content={msg.text} isCompact />
                    )}
                  </div>
                ))}
                {isAiLoading && (
                  <div className="flex items-center gap-2 text-xs text-gray-300 bg-white/[0.05] p-2 rounded-xl w-max">
                    <Loader2 className="w-3.5 h-3.5 animate-spin text-brand-teal" />
                    <span className="font-mono text-[11px]">AI Agent is synthesizing response...</span>
                  </div>
                )}
              </div>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={nexusInput}
                  onChange={(e) => setNexusInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleNexusSend()}
                  placeholder="Ask Nexus AI a customer inquiry..."
                  className="flex-1 bg-white/[0.05] border border-white/10 rounded-xl px-3 py-1.5 text-xs text-white focus:outline-none focus:border-purple-500"
                />
                <button
                  onClick={handleNexusSend}
                  disabled={isAiLoading || !nexusInput.trim()}
                  className="px-4 py-1.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-semibold disabled:opacity-50 cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}

          {/* Technology Stack */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-gray-400 mb-2">
              Verified Technology Stack
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {project.techStack.map((tech: string, idx: number) => (
                <span key={idx} className="px-3 py-1 rounded-full text-xs font-mono text-gray-300 bg-white/[0.03] border border-white/[0.08]">
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Bottom Actions */}
        <div className="p-4 sm:p-6 border-t border-white/10 bg-[#0D0F18]/90 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs font-mono text-gray-400">
            {project.isRealClient ? (
              <span className="text-brand-teal flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4" /> Live Production Project on Vercel
              </span>
            ) : (
              <span className="text-brand-amber flex items-center gap-1.5">
                <Sparkles className="w-4 h-4" /> Illustrative Concept Architecture
              </span>
            )}
          </div>

          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-initial px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-white/[0.05] hover:bg-white/10 border border-white/15 flex items-center justify-center gap-1.5 transition-colors"
              >
                <span>Visit sbclinic.pk</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}

            <button
              onClick={handleInquire}
              className="flex-1 sm:flex-initial px-6 py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 transition-all shadow-lg shadow-purple-600/30 flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <span>Build Project Like This</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
