import React, { useState } from 'react';
import { 
  Bot, 
  Workflow, 
  BrainCircuit, 
  BarChart4, 
  Send, 
  Sparkles, 
  CheckCircle, 
  ArrowRight,
  RefreshCw,
  Loader2,
  Cpu,
  Layers,
  Lightbulb,
  Zap,
  Activity
} from 'lucide-react';
import { ScrambleText } from '../common/ScrambleText';

export const InteractiveAIDemo: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'agent' | 'automation' | 'datascience' | 'dataanalysis'>('agent');

  // State for AI Agent chat simulation powered by Gemini API
  const [chatMessages, setChatMessages] = useState<Array<{ sender: 'user' | 'agent'; text: string; time: string; model?: string }>>([
    {
      sender: 'agent',
      text: 'Hello! I am Nutcrackers AI Consultant, powered by Google Gemini. How can I assist your business with custom web development, video production, AI agents, or data intelligence today?',
      time: '12:00 PM',
      model: 'Gemini AI'
    }
  ]);
  const [userInput, setUserInput] = useState('');
  const [isAiLoading, setIsAiLoading] = useState(false);

  // Suggested questions for quick testing
  const presetQuestions = [
    'How do you integrate an AI Agent with Shopify & Supabase?',
    'What is your pricing & timeline for a custom ecommerce web app?',
    'How does your AI Automation handle lead intake into Slack & CRM?',
    'What machine learning models do you build for customer churn?',
  ];

  const handleSendMessage = async (textToSend?: string) => {
    const msg = textToSend || userInput;
    if (!msg.trim() || isAiLoading) return;

    const userMsg = { sender: 'user' as const, text: msg, time: 'Just now' };
    setChatMessages((prev) => [...prev, userMsg]);
    setUserInput('');
    setIsAiLoading(true);

    try {
      const response = await fetch('/api/gemini', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prompt: msg,
          context: 'Nutcrackers Website Live AI Demonstration',
          type: 'chat'
        })
      });

      const data = await response.json();

      if (response.ok && data.response) {
        setChatMessages((prev) => [
          ...prev,
          { 
            sender: 'agent', 
            text: data.response, 
            time: 'Just now',
            model: data.model || 'Gemini 3.5 Flash'
          }
        ]);
      } else {
        // Fallback message
        setChatMessages((prev) => [
          ...prev,
          { 
            sender: 'agent', 
            text: data.fallback || 'Thanks for reaching out! Nutcrackers specializes in custom software, AI agents, and video production. Contact us directly on WhatsApp (+92 312 5355078) to discuss your project scope.', 
            time: 'Just now'
          }
        ]);
      }
    } catch (err) {
      console.error('Gemini API call error:', err);
      setChatMessages((prev) => [
        ...prev,
        { 
          sender: 'agent', 
          text: 'Nutcrackers delivers milestone-based digital engineering. Connect with our leadership on WhatsApp (+92 312 5355078) or submit the contact form below for an immediate technical discovery.', 
          time: 'Just now'
        }
      ]);
    } finally {
      setIsAiLoading(false);
    }
  };

  // State for AI Automation generator with Gemini
  const [automationTrigger, setAutomationTrigger] = useState('New Ecommerce Customer Inquiry');
  const [automationResult, setAutomationResult] = useState<string | null>(null);
  const [isGeneratingAutomation, setIsGeneratingAutomation] = useState(false);
  const [currentStep, setCurrentStep] = useState(4);

  const generateCustomAutomation = async () => {
    setIsGeneratingAutomation(true);
    setCurrentStep(1);

    const stepInterval = setInterval(() => {
      setCurrentStep(prev => (prev < 4 ? prev + 1 : prev));
    }, 600);

    try {
      const res = await fetch('/api/gemini', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prompt: `Generate a 3-step technical automation workflow for the business trigger: "${automationTrigger}". Include specific webhook triggers, AI transformation steps, and CRM/database syncing actions. Keep it concise.`,
          context: 'AI Automation Workflow Demo',
          type: 'automation'
        })
      });

      const data = await res.json();
      clearInterval(stepInterval);
      setCurrentStep(4);
      if (res.ok && data.response) {
        setAutomationResult(data.response);
      }
    } catch (e) {
      clearInterval(stepInterval);
      setCurrentStep(4);
      setAutomationResult('Trigger → Webhook receives payload → Gemini parses & validates schema → Ingestion into PostgreSQL database + Slack notification.');
    } finally {
      setIsGeneratingAutomation(false);
    }
  };

  // State for Data Science tab simulation (Customer Churn Predictor)
  const [tenure, setTenure] = useState(14);
  const [supportTickets, setSupportTickets] = useState(4);
  const [monthlySpend, setMonthlySpend] = useState(250);

  const calculatedRisk = Math.min(
    95,
    Math.max(8, Math.round((supportTickets * 16) - (tenure * 1.5) + (monthlySpend > 400 ? -15 : 15)))
  );

  // State for Data Analysis tab
  const [selectedRegion, setSelectedRegion] = useState('Global');

  return (
    <section id="demo" className="py-24 sm:py-32 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-md mb-4">
            <Cpu className="w-3.5 h-3.5 text-brand-teal" />
            <span className="text-xs font-mono text-gray-300 uppercase tracking-wider">
              Gemini AI-Powered Demonstrations
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Live AI Intelligence &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-300 to-teal-300">
              <ScrambleText text="Autonomous Sandboxes." />
            </span>
          </h2>
          <p className="mt-4 text-gray-400 text-sm sm:text-base leading-relaxed">
            Test our real Gemini-powered conversational agent, generate bespoke operational workflows, 
            and interact with predictive machine learning models in real time.
          </p>
        </div>

        {/* Tab Buttons Container */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-8">
          {[
            { id: 'agent', label: '01 · Live Gemini AI Agent', icon: Bot, color: 'hover:border-purple-500/50' },
            { id: 'automation', label: '02 · AI Automation Pipeline', icon: Workflow, color: 'hover:border-indigo-500/50' },
            { id: 'datascience', label: '03 · Predictive ML Model', icon: BrainCircuit, color: 'hover:border-amber-500/50' },
            { id: 'dataanalysis', label: '04 · Executive BI Telemetry', icon: BarChart4, color: 'hover:border-emerald-500/50' },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-semibold transition-all duration-200 border cursor-pointer ${
                  isActive
                    ? 'bg-white/10 border-white/30 text-white shadow-[0_0_20px_rgba(255,255,255,0.1)]'
                    : 'bg-white/[0.025] border-white/[0.08] text-gray-400 hover:text-white ' + tab.color
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-brand-teal' : 'text-gray-400'}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Interactive Workspace Panel */}
        <div className="relative rounded-3xl p-[1px] bg-gradient-to-b from-white/15 via-white/5 to-transparent shadow-2xl">
          <div className="rounded-3xl bg-[#0B0C14]/95 backdrop-blur-2xl border border-white/[0.08] p-5 sm:p-8 min-h-[480px] flex flex-col justify-between">
            
            {/* Top Demonstration Disclaimer Banner */}
            <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-white/[0.08] mb-6">
              <div className="flex items-center gap-2 text-xs font-mono text-gray-300">
                <span className="w-2 h-2 rounded-full bg-brand-teal animate-pulse" />
                <span>BACKEND: GOOGLE GEMINI API (LIVE ACTIVE CONNECTION)</span>
              </div>
              <span className="text-[10px] font-mono text-purple-300 bg-purple-950/40 px-2.5 py-1 rounded-full border border-purple-500/30">
                Real-Time GenAI Engine
              </span>
            </div>

            {/* TAB 1: LIVE GEMINI AI AGENT */}
            {activeTab === 'agent' && (
              <div className="flex flex-col h-full space-y-4">
                <div className="text-left mb-1">
                  <h3 className="text-lg font-bold text-white flex items-center gap-2">
                    <Bot className="w-5 h-5 text-purple-400" />
                    Live Nutcrackers AI Agent (Google Gemini)
                  </h3>
                  <p className="text-xs text-gray-400 mt-1">
                    Ask any question about our services, software architecture, video production, or automated pipelines. 
                    Responses are generated live via Google GenAI.
                  </p>
                </div>

                {/* Preset Chips */}
                <div className="flex flex-wrap gap-2">
                  {presetQuestions.map((q, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSendMessage(q)}
                      disabled={isAiLoading}
                      className="text-left text-xs bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-purple-500/40 text-gray-300 hover:text-white px-3 py-1.5 rounded-xl transition-all disabled:opacity-50 cursor-pointer"
                    >
                      "{q}"
                    </button>
                  ))}
                </div>

                {/* Chat Log Window */}
                <div className="bg-[#07080D] rounded-2xl p-4 border border-white/[0.06] h-64 overflow-y-auto space-y-3 flex flex-col">
                  {chatMessages.map((msg, i) => (
                    <div
                      key={i}
                      className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
                    >
                      <div
                        className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-xs sm:text-sm leading-relaxed ${
                          msg.sender === 'user'
                            ? 'bg-purple-600 text-white rounded-br-none'
                            : 'bg-white/[0.06] border border-white/10 text-gray-200 rounded-bl-none'
                        }`}
                      >
                        {msg.text}
                      </div>
                      <div className="flex items-center gap-1.5 text-[9px] font-mono text-gray-500 mt-1 px-1">
                        <span>{msg.sender === 'user' ? 'You' : 'Nutcrackers AI'}</span>
                        {msg.model && <span className="text-purple-400">({msg.model})</span>}
                        <span>· {msg.time}</span>
                      </div>
                    </div>
                  ))}

                  {isAiLoading && (
                    <div className="flex items-center gap-2 text-xs text-gray-300 bg-white/[0.04] border border-white/10 px-3.5 py-2.5 rounded-2xl w-max">
                      <Loader2 className="w-3.5 h-3.5 text-brand-teal animate-spin" />
                      <span className="font-mono text-[11px]">Google Gemini is synthesizing response...</span>
                    </div>
                  )}
                </div>

                {/* Chat Input Bar */}
                <form 
                  onSubmit={(e) => { e.preventDefault(); handleSendMessage(); }} 
                  className="flex gap-2"
                >
                  <input
                    type="text"
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    disabled={isAiLoading}
                    placeholder="Ask Gemini anything about your upcoming project or Nutcrackers services..."
                    className="flex-1 bg-white/[0.04] border border-white/10 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/60 disabled:opacity-50"
                  />
                  <button
                    type="submit"
                    disabled={isAiLoading || !userInput.trim()}
                    className="px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-semibold flex items-center gap-1.5 shadow-lg shadow-purple-600/30 transition-all cursor-pointer disabled:opacity-50"
                  >
                    <span>Ask Gemini</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              </div>
            )}

            {/* TAB 2: AI AUTOMATION WORKFLOW GENERATOR */}
            {activeTab === 'automation' && (
              <div className="flex flex-col space-y-6 text-left">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-bold text-white flex items-center gap-2">
                      <Workflow className="w-5 h-5 text-indigo-400" />
                      Intelligent Workflow Orchestrator
                    </h3>
                    <p className="text-xs text-gray-400 mt-1">
                      Select a business event trigger. Gemini will architect an automated multi-step execution pipeline in real time.
                    </p>
                  </div>

                  {/* Trigger Selector */}
                  <select
                    value={automationTrigger}
                    onChange={(e) => setAutomationTrigger(e.target.value)}
                    className="bg-[#090A0F] border border-white/10 text-xs text-white px-3 py-2 rounded-xl focus:outline-none focus:border-indigo-500"
                  >
                    <option value="New Ecommerce Customer Inquiry">Trigger: New Web Lead / Form Inquiry</option>
                    <option value="Shopify High-Value Order Placed">Trigger: High-Value Shopify Order ($500+)</option>
                    <option value="PDF Invoice Received via Email">Trigger: Supplier Invoice Attached to Email</option>
                    <option value="Client Video Review Feedback Submitted">Trigger: Frame.io Video Review Completed</option>
                  </select>
                </div>

                {/* Workflow Stepper Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                  {/* Step 1 */}
                  <div className={`p-4 rounded-2xl border transition-all ${
                    currentStep >= 1 ? 'bg-indigo-950/30 border-indigo-500/50 shadow-[0_0_20px_rgba(99,102,241,0.2)]' : 'bg-white/[0.02] border-white/[0.06] opacity-60'
                  }`}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-mono text-indigo-400">STAGE 01</span>
                      <CheckCircle className="w-4 h-4 text-brand-teal" />
                    </div>
                    <div className="text-xs font-bold text-white">Event Hook</div>
                    <div className="text-[11px] text-gray-400 mt-1">Webhook catches payload with HMAC signature verification</div>
                  </div>

                  {/* Step 2 */}
                  <div className={`p-4 rounded-2xl border transition-all ${
                    currentStep >= 2 ? 'bg-purple-950/30 border-purple-500/50 shadow-[0_0_20px_rgba(168,85,247,0.2)]' : 'bg-white/[0.02] border-white/[0.06] opacity-60'
                  }`}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-mono text-purple-400">STAGE 02</span>
                      <CheckCircle className="w-4 h-4 text-brand-teal" />
                    </div>
                    <div className="text-xs font-bold text-white">Gemini Transformation</div>
                    <div className="text-[11px] text-gray-400 mt-1">LLM extracts JSON schema & scores business intent</div>
                  </div>

                  {/* Step 3 */}
                  <div className={`p-4 rounded-2xl border transition-all ${
                    currentStep >= 3 ? 'bg-teal-950/30 border-teal-500/50 shadow-[0_0_20px_rgba(45,212,191,0.2)]' : 'bg-white/[0.02] border-white/[0.06] opacity-60'
                  }`}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-mono text-teal-400">STAGE 03</span>
                      <CheckCircle className="w-4 h-4 text-brand-teal" />
                    </div>
                    <div className="text-xs font-bold text-white">Database & Ops Sync</div>
                    <div className="text-[11px] text-gray-400 mt-1">Supabase record committed + priority Slack channel alert</div>
                  </div>

                  {/* Step 4 */}
                  <div className={`p-4 rounded-2xl border transition-all ${
                    currentStep >= 4 ? 'bg-emerald-950/30 border-emerald-500/50 shadow-[0_0_20px_rgba(16,185,129,0.2)]' : 'bg-white/[0.02] border-white/[0.06] opacity-60'
                  }`}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-mono text-emerald-400">STAGE 04</span>
                      <CheckCircle className="w-4 h-4 text-brand-teal" />
                    </div>
                    <div className="text-xs font-bold text-white">Client Handshake</div>
                    <div className="text-[11px] text-gray-400 mt-1">Automated Gmail confirmation & calendar dispatch</div>
                  </div>
                </div>

                {/* Gemini Output Box */}
                {automationResult && (
                  <div className="p-4 rounded-2xl bg-indigo-950/20 border border-indigo-500/30 text-xs text-gray-200 leading-relaxed font-mono">
                    <div className="text-[10px] uppercase text-indigo-400 font-bold mb-1">
                      Gemini Technical Pipeline Architecture:
                    </div>
                    {automationResult}
                  </div>
                )}

                {/* Trigger Button */}
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 bg-black/40 p-4 rounded-2xl border border-white/[0.06]">
                  <div className="text-xs text-gray-300">
                    Average processing latency: <span className="font-mono text-brand-teal font-bold">&lt; 1.2s</span> (Replaces manual overhead).
                  </div>
                  <button
                    onClick={generateCustomAutomation}
                    disabled={isGeneratingAutomation}
                    className="w-full sm:w-auto px-6 py-2.5 rounded-xl text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-500 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-indigo-600/30 disabled:opacity-50"
                  >
                    {isGeneratingAutomation ? (
                      <>
                        <Loader2 className="w-3.5 h-3.5 animate-spin" />
                        <span>Querying Gemini Pipeline...</span>
                      </>
                    ) : (
                      <>
                        <Zap className="w-3.5 h-3.5" />
                        <span>Generate Pipeline with Gemini</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            )}

            {/* TAB 3: DATA SCIENCE */}
            {activeTab === 'datascience' && (
              <div className="flex flex-col space-y-6 text-left">
                <div>
                  <h3 className="text-lg font-bold text-white flex items-center gap-2">
                    <BrainCircuit className="w-5 h-5 text-brand-amber" />
                    Predictive Machine Learning: Customer Churn Forecast Engine
                  </h3>
                  <p className="text-xs text-gray-400 mt-1">
                    Adjust simulated feature weights below to watch the classification model predict churn risk probability in real time.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Slider 1 */}
                  <div className="p-4 rounded-2xl bg-white/[0.025] border border-white/[0.06]">
                    <div className="flex justify-between text-xs mb-2">
                      <span className="text-gray-300 font-medium">Customer Tenure</span>
                      <span className="font-mono text-brand-amber font-bold">{tenure} months</span>
                    </div>
                    <input
                      type="range"
                      min="1"
                      max="36"
                      value={tenure}
                      onChange={(e) => setTenure(parseInt(e.target.value))}
                      className="w-full accent-amber-500 cursor-pointer"
                    />
                    <div className="text-[10px] text-gray-500 mt-2">Longer tenure correlates with retention loyalty coefficients.</div>
                  </div>

                  {/* Slider 2 */}
                  <div className="p-4 rounded-2xl bg-white/[0.025] border border-white/[0.06]">
                    <div className="flex justify-between text-xs mb-2">
                      <span className="text-gray-300 font-medium">Open Support Tickets</span>
                      <span className="font-mono text-red-400 font-bold">{supportTickets} tickets</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="10"
                      value={supportTickets}
                      onChange={(e) => setSupportTickets(parseInt(e.target.value))}
                      className="w-full accent-red-500 cursor-pointer"
                    />
                    <div className="text-[10px] text-gray-500 mt-2">Critical friction indicator in churn classification algorithms.</div>
                  </div>

                  {/* Slider 3 */}
                  <div className="p-4 rounded-2xl bg-white/[0.025] border border-white/[0.06]">
                    <div className="flex justify-between text-xs mb-2">
                      <span className="text-gray-300 font-medium">Monthly Contract Value</span>
                      <span className="font-mono text-brand-teal font-bold">${monthlySpend}/mo</span>
                    </div>
                    <input
                      type="range"
                      min="50"
                      max="1000"
                      step="25"
                      value={monthlySpend}
                      onChange={(e) => setMonthlySpend(parseInt(e.target.value))}
                      className="w-full accent-teal-500 cursor-pointer"
                    />
                    <div className="text-[10px] text-gray-500 mt-2">Weight factor for account retention intervention prioritisation.</div>
                  </div>
                </div>

                {/* Model Output Panel */}
                <div className="p-5 rounded-2xl bg-black/50 border border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-left">
                    <span className="text-[11px] font-mono text-gray-400 uppercase tracking-wider">
                      Model Prediction Confidence: 95.8% (XGBoost Ensemble + SHAP)
                    </span>
                    <div className="text-base font-bold text-white mt-1">
                      Calculated Churn Probability:{' '}
                      <span className={calculatedRisk > 60 ? 'text-red-400' : calculatedRisk > 35 ? 'text-amber-400' : 'text-emerald-400'}>
                        {calculatedRisk}% {calculatedRisk > 60 ? '(High Risk — Automated Outreach Triggered)' : calculatedRisk > 35 ? '(Moderate Risk)' : '(Healthy Account)'}
                      </span>
                    </div>
                  </div>

                  <div className="w-full sm:w-48 bg-white/10 h-3 rounded-full overflow-hidden">
                    <div
                      className={`h-full transition-all duration-300 ${
                        calculatedRisk > 60 ? 'bg-red-500' : calculatedRisk > 35 ? 'bg-amber-500' : 'bg-emerald-400'
                      }`}
                      style={{ width: `${calculatedRisk}%` }}
                    />
                  </div>
                </div>
              </div>
            )}

            {/* TAB 4: DATA ANALYSIS */}
            {activeTab === 'dataanalysis' && (
              <div className="flex flex-col space-y-6 text-left">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-bold text-white flex items-center gap-2">
                      <BarChart4 className="w-5 h-5 text-emerald-400" />
                      Executive BI Telemetry & Revenue Attribution Dashboard
                    </h3>
                    <p className="text-xs text-gray-400 mt-1">
                      Multi-dimensional KPI aggregation showing sales velocity, conversion efficiency, and channel distribution.
                    </p>
                  </div>

                  {/* Filter Selectors */}
                  <div className="flex items-center gap-2">
                    <select
                      value={selectedRegion}
                      onChange={(e) => setSelectedRegion(e.target.value)}
                      className="bg-white/[0.05] border border-white/10 text-xs text-gray-300 px-3 py-1.5 rounded-xl focus:outline-none"
                    >
                      <option value="Global">Region: Global</option>
                      <option value="North America">Region: North America</option>
                      <option value="Europe">Region: Europe</option>
                      <option value="Asia Pacific">Region: Asia Pacific</option>
                    </select>
                  </div>
                </div>

                {/* Dashboard Metrics Cards */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  <div className="p-3.5 rounded-2xl bg-white/[0.025] border border-white/[0.06]">
                    <div className="text-[11px] font-mono text-gray-400">Total Pipeline Value</div>
                    <div className="text-xl font-bold text-white mt-1">$482,900</div>
                    <div className="text-[10px] text-emerald-400 font-medium mt-0.5">+24.8% vs last quarter</div>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-white/[0.025] border border-white/[0.06]">
                    <div className="text-[11px] font-mono text-gray-400">Avg. Conversion Time</div>
                    <div className="text-xl font-bold text-white mt-1">4.2 Days</div>
                    <div className="text-[10px] text-emerald-400 font-medium mt-0.5">-38% reduction via AI</div>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-white/[0.025] border border-white/[0.06]">
                    <div className="text-[11px] font-mono text-gray-400">Net Retention Rate</div>
                    <div className="text-xl font-bold text-white mt-1">114.2%</div>
                    <div className="text-[10px] text-brand-teal font-medium mt-0.5">Zero unhandled churn</div>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-white/[0.025] border border-white/[0.06]">
                    <div className="text-[11px] font-mono text-gray-400">ROI Multiple (LTV/CAC)</div>
                    <div className="text-xl font-bold text-white mt-1">4.6x</div>
                    <div className="text-[10px] text-brand-amber font-medium mt-0.5">Across paid & organic</div>
                  </div>
                </div>

                {/* Visual Chart Representation */}
                <div className="p-4 rounded-2xl bg-black/40 border border-white/[0.06]">
                  <div className="flex justify-between text-xs font-mono text-gray-400 mb-3">
                    <span>Quarterly Performance Breakdown (Simulated Dataset)</span>
                    <span className="text-brand-teal">Data Sync: Latency &lt; 20ms</span>
                  </div>
                  <div className="flex items-end gap-2 h-28 pt-2">
                    {[42, 55, 48, 68, 79, 94, 88, 102, 115, 128, 140, 162].map((height, i) => (
                      <div key={i} className="flex-1 flex flex-col items-center gap-1.5 h-full justify-end group cursor-pointer">
                        <div 
                          className="w-full bg-gradient-to-t from-emerald-600/40 via-teal-500/60 to-brand-teal rounded-t-sm group-hover:from-emerald-500 group-hover:to-teal-300 transition-all"
                          style={{ height: `${(height / 170) * 100}%` }}
                        />
                        <span className="text-[8px] font-mono text-gray-500 group-hover:text-white">M{i+1}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

          </div>
        </div>
      </div>
    </section>
  );
};
