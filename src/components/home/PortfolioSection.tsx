import React, { useState, useEffect } from 'react';
import { 
  Play, 
  ExternalLink, 
  Layers, 
  Film, 
  Laptop, 
  Bot, 
  Workflow, 
  BrainCircuit, 
  BarChart3, 
  Sparkles,
  CheckCircle2,
  TrendingUp,
  ShieldCheck,
  Smartphone,
  Eye,
  Sliders,
  Database,
  ArrowRight
} from 'lucide-react';
import { ScrambleText } from '../common/ScrambleText';
import { ProjectDetailModal } from './ProjectDetailModal';
import { PortfolioProject } from '../../types/portfolio';

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: 'sb-healthcare-clinic',
    title: 'SB Healthcare Clinic',
    category: 'Web & Ecommerce Development',
    serviceCategory: 'Mobile App & Web Development',
    isRealClient: true,
    clientBadge: 'Verified Live Client Project',
    tagline: 'Comprehensive Healthcare, Diagnostic Lab & Pharmacy Ecommerce Platform',
    shortDescription: 'Full-stack pharmacy ecommerce and clinical discovery platform built for a premier healthcare center. Features real-time medicine search, 2,000+ catalog items, cart & checkout, and custom administrative management.',
    fullDescription: 'SB Healthcare Clinic required a modern, reliable, and patient-first digital ecosystem connecting their physical clinic, diagnostic laboratory, and pharmacy store in Wah Cantt, Pakistan. Nutcrackers architected and delivered a full-stack web application featuring instantaneous medicine discovery across 2,000+ authentic pharmaceutical products, lab test booking, prescription uploads, and seamless admin inventory management.',
    imageDesktop: '/images/portfolio/sbclinic-project.webp',
    imageMobile: '/assets/sbclinic-mobile.png',
    liveUrl: 'https://www.sbclinic.pk/',
    techStack: ['Next.js / React', 'TypeScript', 'Tailwind CSS', 'Supabase Database', 'ImageKit CDN', 'Vercel Edge'],
    keyFeatures: [
      '2,000+ authentic medicine catalog with real-time formula & brand search',
      'Integrated Supabase PostgreSQL database for high-concurrency cart and orders',
      'ImageKit cloud optimization ensuring sub-second pharmaceutical asset delivery',
      'Clinical services discovery for PMDC certified general physicians & gynecologists',
      'Diagnostic lab test directory with home blood sampling collection requests',
      'Administrative dashboard for real-time inventory adjustments and price updates',
      'Responsive mobile-first interface optimized for 3G/4G network speeds'
    ],
    verifiedMetrics: [
      { label: 'Catalog Size', value: '2,000+ Products' },
      { label: 'Database', value: 'Supabase PostgreSQL' },
      { label: 'Asset CDN', value: 'ImageKit Cloud' },
      { label: 'Deployment', value: 'Vercel High-Availability' }
    ]
  },
  {
    id: 'motionforge-studio',
    title: 'MotionForge Studio',
    category: 'Video Editing',
    serviceCategory: 'Video Editing',
    isRealClient: false,
    clientBadge: 'Concept Demonstration · Video Production',
    tagline: 'Cinematic Visual Pacing, Commercial Cuts & Sound Foley Design',
    shortDescription: 'A high-impact commercial video editing concept demonstrating retention-focused YouTube pacing, dynamic 3D titles, Lumetri color mastery, and multi-track audio synchronization.',
    fullDescription: 'MotionForge Studio is Nutcrackers’ flagship video editing showcase. Demonstrating how rhythm, kinetic subtitles, and micro-transitions boost audience retention and commercial conversion across YouTube, TikTok, Meta ads, and broadcast commercial reels.',
    imageDesktop: '/images/portfolio/motionforge-studio.webp',
    videoUrl: '/assets/intro-video.mp4',
    secondaryVideoUrl: '/assets/client-video.mp4',
    techStack: ['Adobe Premiere Pro', 'After Effects', 'DaVinci Resolve Studio', 'Audition', 'Blender 3D'],
    keyFeatures: [
      'Kinetic typography and dynamic motion tracking',
      'Lumetri color science with custom cinematic LUT pipelines',
      'Multi-stem audio engineering: dialogue de-noising, sidechain ducking, and SFX mastering',
      'High-retention pacing architecture engineered for digital social algorithms',
      'Turnkey delivery across 16:9 4K UHD and 9:16 vertical short formats'
    ],
    verifiedMetrics: [
      { label: 'Export Standard', value: '4K ProRes 422' },
      { label: 'Aspect Ratios', value: '16:9 & 9:16' },
      { label: 'Audio Mastering', value: '-14 LUFS Broadcast' },
      { label: 'Pacing Style', value: 'Retention-Optimized' }
    ]
  },
  {
    id: 'growthpilot',
    title: 'GrowthPilot',
    category: 'Digital Marketing',
    serviceCategory: 'Digital Marketing',
    isRealClient: false,
    clientBadge: 'Concept Demonstration · Growth & Acquisition',
    tagline: 'Algorithmic Paid Acquisition & Search Domination Architecture',
    shortDescription: 'An end-to-end digital marketing case study blueprint modeling multi-channel Meta/Google paid funnels, programmatic SEO clustering, and full-funnel CAC-to-LTV analytics.',
    fullDescription: 'GrowthPilot illustrates Nutcrackers’ data-first philosophy for digital marketing. Rather than relying on vanity impressions, this framework models high-intent audience segmentation, programmatic SEO topic clusters, and conversion rate optimization (CRO) landing page variants.',
    imageDesktop: '/images/portfolio/growthpilot-marketing.webp',
    techStack: ['Meta Ads Manager', 'Google Ads', 'GA4 & BigQuery', 'SEMrush API', 'HubSpot CRM'],
    keyFeatures: [
      'Multi-stage funnel architecture (Top-of-Funnel awareness to Retargeting)',
      'Programmatic SEO clustering strategy targeting long-tail commercial intent',
      'Dynamic creative optimization (DCO) testing hooks, copy, and visual angles',
      'First-party conversion tracking via Meta Conversions API (CAPI)',
      'Algorithmic budget reallocation towards top-performing ad sets'
    ],
    verifiedMetrics: [
      { label: 'Simulation Model', value: 'Multi-Touch Attribution' },
      { label: 'Funnel Focus', value: 'Paid & Organic Hybrid' },
      { label: 'Target Channels', value: 'Meta, Google, LinkedIn' },
      { label: 'Auditing Method', value: 'Technical SEO + CRO' }
    ]
  },
  {
    id: 'nexus-ai-assistant',
    title: 'Nexus AI Assistant',
    category: 'AI Website Agent',
    serviceCategory: 'AI Website Agent',
    isRealClient: false,
    clientBadge: 'Concept Demonstration · Conversational AI',
    tagline: 'Autonomous 24/7 Context-Aware Customer Support & Sales Concierge',
    shortDescription: 'An intelligent AI website agent concept embedded with vector knowledge retrieval (RAG) to handle technical customer inquiries, qualify enterprise leads, and book calendar calls automatically.',
    fullDescription: 'Nexus AI Assistant demonstrates Nutcrackers’ conversational AI capabilities. Grounded in private company documentation via vector embeddings, Nexus answers complex inquiries in natural language, handles customer hesitation, checks product availability, and passes qualified leads directly into CRM pipelines.',
    imageDesktop: '/images/portfolio/nexus-ai-assistant.webp',
    techStack: ['Autonomous LLM & RAG Engine', 'LangChain', 'Pinecone Vector DB', 'WebSockets', 'Next.js'],
    keyFeatures: [
      'Retrieval-Augmented Generation (RAG) over custom PDF & web documentation',
      'Strict brand guardrails preventing hallucination or off-brand responses',
      'Automated intent classification separating casual visitors from high-intent buyers',
      'Real-time CRM contact synthesis and calendar scheduling hooks',
      'Multi-lingual real-time translation across 40+ international languages'
    ],
    verifiedMetrics: [
      { label: 'Agent Architecture', value: 'RAG + Vector Embeddings' },
      { label: 'Response Latency', value: '< 650ms (Streaming)' },
      { label: 'Knowledge Base', value: 'Dynamic Document Ingestion' },
      { label: 'Fallback Protocol', value: 'Automated Human Handoff' }
    ]
  },
  {
    id: 'flowsync-automation',
    title: 'FlowSync Automation',
    category: 'AI Automation',
    serviceCategory: 'AI Automation',
    isRealClient: false,
    clientBadge: 'Concept Demonstration · Workflow Engineering',
    tagline: 'Zero-Touch Business Operations & Autonomous Pipeline Integration',
    shortDescription: 'A multi-agent workflow automation blueprint connecting web forms, OCR document extraction, CRM routing, client Slack notifications, and automated invoicing.',
    fullDescription: 'FlowSync Automation models how repetitive operations can be completely automated. When a new customer engages, FlowSync triggers self-healing workflows across webhook APIs: parsing documents, verifying data with LLMs, creating database entries, and updating communication channels without human intervention.',
    imageDesktop: '/images/portfolio/flowsync-automation.webp',
    techStack: ['n8n Self-Hosted', 'Make.com', 'Python FastAPIs', 'OpenAI Functions', 'Airtable & Webhooks'],
    keyFeatures: [
      'Asynchronous webhook listeners with exponential retry logic',
      'AI document extraction & structured JSON parsing from raw PDFs',
      'Bi-directional synchronization between Google Workspace, Slack & CRM',
      'Automated PDF invoice generation and Stripe billing triggers',
      'Autonomous alert escalation if external API endpoints fail'
    ],
    verifiedMetrics: [
      { label: 'Orchestrator', value: 'n8n & Webhooks' },
      { label: 'Execution Speed', value: 'Sub-second Event Hooks' },
      { label: 'Data Format', value: 'Strict Typed JSON' },
      { label: 'Error Recovery', value: 'Automated Dead-Letter Queue' }
    ]
  },
  {
    id: 'predictiq-analytics',
    title: 'PredictIQ Analytics',
    category: 'Data Science',
    serviceCategory: 'Data Science',
    isRealClient: false,
    clientBadge: 'Concept Demonstration · Predictive Machine Learning',
    tagline: 'Predictive Churn Modeling, CLV Forecasting & Classification Pipelines',
    shortDescription: 'A machine-learning predictive pipeline project showcasing feature engineering, XGBoost classification, model drift monitoring, and probabilistic risk scoring.',
    fullDescription: 'PredictIQ Analytics demonstrates Nutcrackers’ data science rigor. Moving beyond basic spreadsheets, this concept models predictive algorithms that identify accounts at risk of churning weeks before cancellation, scoring probability based on telemetry patterns and support frequency.',
    imageDesktop: '/images/portfolio/predictiq-data-science.webp',
    techStack: ['Python', 'XGBoost', 'Scikit-learn', 'Pandas & NumPy', 'SHAP Explainability'],
    keyFeatures: [
      'Automated feature normalization and outlier handling pipeline',
      'Ensemble classification comparing Random Forest, LightGBM, and XGBoost',
      'SHAP (SHapley Additive exPlanations) values for model decision transparency',
      'Cross-validated ROC-AUC optimization preventing overfitting',
      'REST API prediction microservice containerized with Docker'
    ],
    verifiedMetrics: [
      { label: 'Algorithm', value: 'XGBoost Ensemble Classifier' },
      { label: 'Validation Method', value: '5-Fold Stratified K-Fold' },
      { label: 'Interpretability', value: 'SHAP Feature Attributions' },
      { label: 'Output Type', value: 'Calibrated Probability Score' }
    ]
  },
  {
    id: 'insightboard',
    title: 'InsightBoard',
    category: 'Data Analysis',
    serviceCategory: 'Data Analysis',
    isRealClient: false,
    clientBadge: 'Concept Demonstration · Business Intelligence',
    tagline: 'Interactive Executive Telemetry, SQL Warehousing & BI Dashboards',
    shortDescription: 'An interactive executive analytics dashboard concept consolidating multi-channel sales, inventory turnover, customer cohorts, and gross margin attribution.',
    fullDescription: 'InsightBoard illustrates how Nutcrackers extracts actionable clarity from fragmented business data. By structuring normalized SQL tables and building responsive visual telemetry, decision-makers can filter by region, channel, or timeframe to identify operational bottlenecks.',
    imageDesktop: '/images/portfolio/insightboard-analytics.webp',
    techStack: ['PostgreSQL & SQLX', 'Apache Superset / Tableau', 'Python', 'Tailwind Charts', 'DuckDB'],
    keyFeatures: [
      'Cohort retention heatmaps and monthly recurring revenue (MRR) waterfalls',
      'Multi-dimensional dimensional filtering by geo-region, SKU, and customer tier',
      'Clean ETL data pipelines aggregating daily transactional logs',
      'Executive KPI summary cards with trend-direction indicators',
      'Custom visual layout built with responsive dark-mode styling'
    ],
    verifiedMetrics: [
      { label: 'Telemetry Type', value: 'Executive BI Dashboard' },
      { label: 'Query Engine', value: 'High-Speed SQL Aggregations' },
      { label: 'Update Cadence', value: 'Scheduled Batch & Real-Time' },
      { label: 'UX Focus', value: 'Zero-Clutter Visual Hierarchy' }
    ]
  }
];

interface PortfolioSectionProps {
  onInquireService?: (serviceName: string) => void;
  onCaseStudyToggle?: (isOpen: boolean) => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({ 
  onInquireService,
  onCaseStudyToggle,
}) => {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);

  useEffect(() => {
    onCaseStudyToggle?.(Boolean(selectedProject));
  }, [selectedProject, onCaseStudyToggle]);

  const categories = [
    'All',
    'Real Client Delivery',
    'Web & Ecommerce Development',
    'Video Editing',
    'Digital Marketing',
    'AI Website Agent',
    'AI Automation',
    'Data Science',
    'Data Analysis'
  ];

  const filteredProjects = PORTFOLIO_PROJECTS.filter((p) => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'Real Client Delivery') return p.isRealClient;
    return p.category === activeFilter || p.serviceCategory === activeFilter;
  });

  return (
    <section id="work" className="py-24 sm:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-2xl text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-md mb-4">
              <Layers className="w-3.5 h-3.5 text-brand-teal" />
              <span className="text-xs font-mono text-gray-300 uppercase tracking-wider">
                Work & Case Studies
              </span>
            </div>
            
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              Real Client Impact &{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-300 to-brand-teal animate-gradient-text">
                <ScrambleText text="Category Concepts." />
              </span>
            </h2>
            
            <p className="mt-4 text-gray-400 text-sm sm:text-base leading-relaxed">
              Explore our verified live client delivery for <strong className="text-white">SB Healthcare Clinic</strong> alongside 
              six dedicated concept architectures demonstrating our complete capabilities across every service.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 border cursor-pointer whitespace-nowrap ${
                  activeFilter === cat
                    ? 'bg-white/15 border-white/30 text-white shadow-sm'
                    : 'bg-white/[0.02] border-white/[0.06] text-gray-400 hover:text-white hover:bg-white/[0.06]'
                } ${cat === 'Real Client Delivery' ? 'border-brand-teal/40 text-brand-teal' : ''}`}
              >
                {cat === 'Real Client Delivery' && <span className="inline-block w-1.5 h-1.5 rounded-full bg-brand-teal mr-1.5 animate-pulse" />}
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* HERO CASE STUDY CARD: SB Healthcare Clinic (If 'All', 'Real Client Delivery', or 'Web & Ecommerce' active) */}
        {filteredProjects.some(p => p.id === 'sb-healthcare-clinic') && (
          <div className="mb-12 rounded-3xl p-[1px] bg-gradient-to-r from-brand-teal/50 via-purple-500/30 to-brand-gold/40 shadow-[0_20px_60px_-15px_rgba(45,212,191,0.25)]">
            <div className="rounded-3xl bg-[#0B0D15]/95 backdrop-blur-xl p-6 sm:p-10 border border-white/[0.08]">
              
              {/* Badge row */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-white/[0.08] mb-6">
                <div className="flex items-center gap-2">
                  <span className="flex h-2.5 w-2.5 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-teal opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-teal shadow-[0_0_8px_#2DD4BF]"></span>
                  </span>
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-teal">
                    Featured Live Client Delivery · Verified Production Project
                  </span>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-gray-400">
                  <span>Client Location: Wah Cantt, PK</span>
                  <span className="text-gray-600">|</span>
                  <a 
                    href="https://www.sbclinic.pk/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white hover:text-brand-teal transition-colors flex items-center gap-1 underline"
                  >
                    sbclinic.pk <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Content Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center text-left">
                {/* Left Specs */}
                <div className="lg:col-span-6 space-y-4">
                  <div className="inline-block text-xs font-mono text-purple-300 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20">
                    Healthcare & Pharmacy Ecommerce
                  </div>

                  <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                    SB Healthcare Clinic
                  </h3>

                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-normal">
                    Nutcrackers developed and delivered the full customer-facing ecommerce platform and digital infrastructure for 
                    <strong> SB Healthcare Clinic</strong>. Includes an active catalog of <strong>2,000+ authentic medicines</strong>, 
                    instant search discovery, shopping cart, diagnostic lab booking, and dedicated administrative management.
                  </p>

                  {/* Highlights list */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                    <div className="flex items-center gap-2 text-xs text-gray-300">
                      <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0" />
                      <span>2,000+ Medicine Store</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-gray-300">
                      <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0" />
                      <span>Supabase Database</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-gray-300">
                      <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0" />
                      <span>ImageKit Asset CDN</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-gray-300">
                      <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0" />
                      <span>Doctor OPD & Lab Sampling</span>
                    </div>
                  </div>

                  {/* Tech chips */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {['Next.js / React', 'Tailwind CSS', 'Supabase', 'ImageKit', 'Vercel'].map((t, idx) => (
                      <span key={idx} className="text-[10px] font-mono text-gray-300 bg-white/[0.04] border border-white/10 px-2.5 py-1 rounded-lg">
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-wrap items-center gap-3 pt-4">
                    <button
                      onClick={() => setSelectedProject(PORTFOLIO_PROJECTS[0])}
                      className="px-6 py-3 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 transition-all flex items-center gap-2 cursor-pointer shadow-lg shadow-purple-600/30"
                    >
                      <Eye className="w-4 h-4" />
                      <span>View Full Case Study</span>
                    </button>

                    <a
                      href="https://www.sbclinic.pk/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 rounded-xl text-xs font-semibold text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/15 transition-all flex items-center gap-2"
                    >
                      <span>Visit Live Website</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                {/* Right Interactive Mockup with Desktop & Mobile Overlay */}
                <div className="lg:col-span-6 relative">
                  <div className="relative rounded-2xl overflow-hidden border border-white/15 shadow-2xl bg-black group/mockup">
                    <picture>
                      <source srcSet="/assets/sbclinic-desktop.webp" type="image/webp" />
                      <img
                        src="/assets/sbclinic-desktop.png"
                        alt="SB Healthcare Clinic Desktop Platform"
                        className="w-full h-auto object-cover transition-transform duration-500 group-hover/mockup:scale-102"
                        loading="lazy"
                        decoding="async"
                      />
                    </picture>
                    
                    {/* Floating Mobile Phone Preview */}
                    <div className="absolute -bottom-4 -right-4 w-36 sm:w-44 rounded-2xl overflow-hidden border-2 border-white/20 shadow-2xl bg-black hidden sm:block">
                      <picture>
                        <source srcSet="/assets/sbclinic-mobile.webp" type="image/webp" />
                        <img
                          src="/assets/sbclinic-mobile.png"
                          alt="SB Healthcare Clinic Mobile App View"
                          className="w-full h-auto object-cover"
                          loading="lazy"
                          decoding="async"
                        />
                      </picture>
                      <div className="absolute top-1.5 inset-x-0 mx-auto w-8 h-1 bg-white/40 rounded-full" />
                    </div>

                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-black/80 backdrop-blur-md border border-white/10 text-[10px] font-mono text-brand-teal">
                      Actual Delivered Production UI
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* 6 CONCEPT PROJECTS GRID (and remaining items) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects
            .filter(p => p.id !== 'sb-healthcare-clinic')
            .map((project) => (
              <div
                key={project.id}
                className="group rounded-3xl bg-[#0D0E16]/85 border border-white/[0.08] overflow-hidden flex flex-col justify-between hover:border-purple-500/40 hover:bg-[#12131F] transition-all duration-300 hover:shadow-[0_12px_40px_-15px_rgba(0,0,0,0.8)] text-left"
              >
                {/* Media Preview */}
                <div className="relative aspect-video bg-black/60 overflow-hidden flex items-center justify-center">
                  {project.videoUrl ? (
                    <div 
                      onClick={() => setSelectedProject(project)}
                      className="relative w-full h-full cursor-pointer flex items-center justify-center group/vid"
                    >
                      <video
                        src={project.videoUrl}
                        muted
                        loop
                        playsInline
                        preload="metadata"
                        onMouseEnter={(e) => (e.target as HTMLVideoElement).play().catch(() => {})}
                        onMouseLeave={(e) => {
                          const v = e.target as HTMLVideoElement;
                          v.pause();
                          v.currentTime = 0;
                        }}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover/vid:scale-105 opacity-80 group-hover/vid:opacity-100"
                      />
                      <div className="absolute inset-0 bg-black/30 group-hover/vid:bg-black/10 flex items-center justify-center transition-all">
                        <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white shadow-xl group-hover/vid:scale-110 transition-transform">
                          <Play className="w-5 h-5 fill-white translate-x-0.5" />
                        </div>
                      </div>
                    </div>
                  ) : project.imageDesktop ? (
                    <div 
                      onClick={() => setSelectedProject(project)}
                      className="relative w-full h-full cursor-pointer overflow-hidden group/thumb"
                    >
                      <img
                        src={project.imageDesktop}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover/thumb:scale-105"
                        loading="lazy"
                        decoding="async"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-3 opacity-90 group-hover/thumb:opacity-100 transition-opacity">
                        <span className="text-[11px] font-mono text-gray-300 flex items-center gap-1.5">
                          <Eye className="w-3.5 h-3.5 text-brand-teal" />
                          <span>Click to Inspect Architecture</span>
                        </span>
                      </div>
                    </div>
                  ) : (
                    <div 
                      onClick={() => setSelectedProject(project)}
                      className="relative w-full h-full cursor-pointer flex flex-col items-center justify-center p-6 bg-gradient-to-br from-purple-950/20 via-indigo-950/20 to-black group/thumb"
                    >
                      <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 group-hover/thumb:scale-110 transition-transform mb-2">
                        {project.category === 'AI Website Agent' && <Bot className="w-8 h-8 text-purple-400" />}
                        {project.category === 'AI Automation' && <Workflow className="w-8 h-8 text-indigo-400" />}
                        {project.category === 'Data Science' && <BrainCircuit className="w-8 h-8 text-brand-amber" />}
                        {project.category === 'Data Analysis' && <BarChart3 className="w-8 h-8 text-emerald-400" />}
                        {project.category === 'Digital Marketing' && <TrendingUp className="w-8 h-8 text-blue-400" />}
                      </div>
                      <span className="text-[11px] font-mono text-gray-400 group-hover/thumb:text-white transition-colors">
                        Click to Explore Concept Simulation
                      </span>
                    </div>
                  )}

                  {/* Concept Badge Tag */}
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/80 backdrop-blur-md border border-white/10 text-[9px] font-mono font-medium text-brand-amber">
                    {project.clientBadge}
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex flex-col flex-1 justify-between">
                  <div>
                    <span className="text-[10px] font-mono uppercase text-gray-400 tracking-wider block mb-1">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-gray-400 leading-relaxed line-clamp-3">
                      {project.shortDescription}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/[0.06]">
                    {/* Tech Chips */}
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.techStack.slice(0, 3).map((t: string, idx: number) => (
                        <span key={idx} className="text-[9px] font-mono text-gray-400 bg-white/[0.03] border border-white/[0.06] px-2 py-0.5 rounded">
                          {t}
                        </span>
                      ))}
                      {project.techStack.length > 3 && (
                        <span className="text-[9px] font-mono text-gray-500 px-1 py-0.5">
                          +{project.techStack.length - 3} more
                        </span>
                      )}
                    </div>

                    {/* View Button */}
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="w-full py-2.5 rounded-xl text-xs font-semibold text-gray-200 hover:text-white bg-white/[0.04] hover:bg-purple-600/30 border border-white/10 hover:border-purple-500/40 flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                    >
                      <span>Explore Case Study & Demo</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>

      </div>

      {/* Full Modal View for Any Project */}
      {selectedProject && (
        <ProjectDetailModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onInquireSimilar={(serviceName) => {
            setSelectedProject(null);
            if (onInquireService) onInquireService(serviceName);
          }}
        />
      )}
    </section>
  );
};
