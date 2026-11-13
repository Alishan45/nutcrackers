import { 
  Laptop, 
  Smartphone, 
  Workflow, 
  Bot, 
  BrainCircuit, 
  BarChart4, 
  TrendingUp, 
  Video 
} from 'lucide-react';

export interface ServiceDetail {
  slug: string;
  path: string;
  number: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  canonicalUrl: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  h1: string;
  tagline: string;
  category: string;
  icon: any;
  accentGradient: string;
  badgeColor: string;
  overview: string[];
  problemsAndSolutions: {
    problem: string;
    solution: string;
  }[];
  deliverables: string[];
  benefits: {
    title: string;
    description: string;
  }[];
  useCases: {
    industry: string;
    title: string;
    description: string;
  }[];
  techStack: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
  relatedServices: {
    title: string;
    path: string;
    tagline: string;
  }[];
}

export const DETAILED_SERVICES: Record<string, ServiceDetail> = {
  'web-development': {
    slug: 'web-development',
    path: '/web-development',
    number: '01',
    title: 'Web Development',
    metaTitle: 'Web Development Company in Pakistan | Custom Web Apps | Nutcrackers',
    metaDescription: 'Top-tier custom web application and website development services in Pakistan and worldwide. Modern React, Next.js, full-stack architectures, and ecommerce systems.',
    canonicalUrl: 'https://nutcrackers.tech/web-development',
    primaryKeyword: 'Web Development Company in Pakistan',
    secondaryKeywords: [
      'Professional Website Development Services',
      'Custom Web Application Development',
      'Full Stack Web Development Agency Islamabad',
      'Next.js and React Development Company',
      'Healthcare Ecommerce Development Pakistan',
      'Web Developers in Wah Cantt and Rawalpindi'
    ],
    h1: 'Custom Web Application & Website Development Services',
    tagline: 'High-Performance Full-Stack Architectures Engineered for Scale, Conversion & Velocity',
    category: 'Engineering & Development',
    icon: Laptop,
    accentGradient: 'from-brand-teal via-cyan-500 to-blue-500',
    badgeColor: 'text-brand-teal bg-teal-950/60 border-teal-500/40',
    overview: [
      'Nutcrackers architects robust, commercial-grade web applications and high-converting corporate web platforms. We bridge clean aesthetic design with uncompromising software engineering standards, ensuring your website serves as a revenue-generating digital asset rather than an outdated online brochure.',
      'From complex SaaS dashboards and multi-vendor marketplaces to HIPAA/PMDC-compliant healthcare platforms like our verified production delivery for SB Healthcare Clinic (sbclinic.pk), our engineering team utilizes React, Next.js, TypeScript, Supabase, PostgreSQL, and edge serverless computing to guarantee sub-second load times and 99.9% uptime.',
      'Every web solution is built mobile-first, fortified against vulnerabilities, and pre-configured with technical SEO best practices, structured data, and responsive design systems that look extraordinary on every viewport from mobile smartphones to ultra-wide displays.'
    ],
    problemsAndSolutions: [
      {
        problem: 'Bloated WordPress templates with 40+ plugins causing 6-second load times, security holes, and high visitor bounce rates.',
        solution: 'Nutcrackers builds modern headless architectures using React and Next.js, eliminating plugin bloat and achieving Lighthouse 95+ performance scores with instant sub-second page transitions.'
      },
      {
        problem: 'Fragmented agencies delivering attractive UI mockups that break when connected to real databases, payment gateways, or user auth.',
        solution: 'Our engineers design cohesive full-stack architectures with typed TypeScript APIs, relational databases (PostgreSQL/Supabase), atomic transactions, and automated error recovery.'
      },
      {
        problem: 'Websites that fail to appear on Google organic search because of missing schema, poor heading hierarchy, and zero local SEO signals.',
        solution: 'We bake end-to-end Technical SEO into every line of code: semantic HTML5, pre-rendered routes, JSON-LD Schema.org graphs, automated XML sitemaps, and Core Web Vitals optimization.'
      }
    ],
    deliverables: [
      'Bespoke Single-Page Applications (SPA) & Server-Side Rendered (SSR) Web Apps',
      'Healthcare, Pharmacy & Diagnostic Laboratory Ecommerce Platforms',
      'High-Conversion Corporate & Agency Showcase Websites',
      'RESTful & GraphQL API Architecture with Node.js and TypeScript',
      'PostgreSQL, Supabase & MongoDB Database Schema Engineering',
      'Payment Gateway Integration (Stripe, PayPal, Local Bank Transfers, EasyPaisa/JazzCash)',
      'Administrative Backoffice Portals with Real-Time Inventory & User Management',
      'End-to-End Technical SEO, Web Vitals & Google Search Console Setup'
    ],
    benefits: [
      {
        title: 'Sub-Second Global Latency',
        description: 'Deployed across worldwide Edge networks with image WebP compression, lazy loading, and intelligent caching.'
      },
      {
        title: '100% Intellectual Property Ownership',
        description: 'You own all source code, database structures, and digital assets. Zero lock-in or recurring proprietary platform fees.'
      },
      {
        title: 'Commercial Conversion Architecture',
        description: 'Layouts, call-to-actions, and messaging engineered specifically to turn casual traffic into qualified sales inquiries.'
      },
      {
        title: 'Built-in Organic Search Visibility',
        description: 'Engineered from day one for search engines with pre-rendered HTML, valid Schema.org entities, and clean semantic structures.'
      }
    ],
    useCases: [
      {
        industry: 'Healthcare & Pharmacy',
        title: 'SB Healthcare Clinic Digital Ecosystem',
        description: 'Engineered a comprehensive pharmaceutical ecommerce store with 2,000+ medicine formulas, laboratory diagnostic booking, and doctor discovery.'
      },
      {
        industry: 'B2B Enterprise',
        title: 'Client Operations & Lead Portal',
        description: 'Custom portal connecting incoming customer briefs with automated pipeline estimation, project milestones, and secure payments.'
      },
      {
        industry: 'D2C Retail & Brands',
        title: 'Modern High-Velocity Ecommerce Storefront',
        description: 'Headless shopping experience featuring instantaneous instant search, micro-animations, and 1-click checkout flows.'
      }
    ],
    techStack: ['React 19', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'PostgreSQL', 'Supabase', 'Vercel Edge', 'Docker'],
    faqs: [
      {
        question: 'How long does it take to develop a custom web application with Nutcrackers?',
        answer: 'Standard bespoke corporate websites typically launch within 2 to 4 weeks. Complex full-stack web applications, multi-tier platforms, or ecommerce ecosystems generally require 4 to 8 weeks depending on database complexity, third-party integrations, and testing specifications.'
      },
      {
        question: 'Do you provide web development services for businesses in Islamabad, Rawalpindi, and Wah Cantt?',
        answer: 'Yes. Nutcrackers is headquartered in Pakistan with an active service footprint across Islamabad, Rawalpindi, Wah Cantt, and Taxila, while also serving international clients in the USA, UK, UAE, and Canada.'
      },
      {
        question: 'Will our website be mobile-responsive and optimized for Google search?',
        answer: 'Every website we deliver is engineered with mobile-first responsive architecture and fully optimized technical SEO, including Schema.org structured data, fast loading speeds, clean semantic hierarchy, and Google Search Console verification.'
      },
      {
        question: 'Can we manage and update content on our website after launch?',
        answer: 'Absolutely. We provide intuitive administrative portals or integrate lightweight headless content management systems that allow your team to add blog posts, adjust prices, edit text, and manage media without writing code.'
      }
    ],
    relatedServices: [
      { title: 'Mobile App Development', path: '/mobile-app-development', tagline: 'Native and cross-platform iOS & Android mobile applications.' },
      { title: 'AI Automation', path: '/ai-automation', tagline: 'Connect your website to automated back-office workflows and CRM pipelines.' },
      { title: 'AI Chatbot Development', path: '/chatbot-development', tagline: 'Embed 24/7 autonomous lead qualification agents directly on your site.' }
    ]
  },

  'mobile-app-development': {
    slug: 'mobile-app-development',
    path: '/mobile-app-development',
    number: '02',
    title: 'Mobile App Development',
    metaTitle: 'Mobile App Development Pakistan | iOS & Android Apps | Nutcrackers',
    metaDescription: 'Premier mobile app development company in Pakistan. We engineer high-performance iOS, Android, and cross-platform apps with seamless backend APIs and modern UX.',
    canonicalUrl: 'https://nutcrackers.tech/mobile-app-development',
    primaryKeyword: 'Mobile App Development Pakistan',
    secondaryKeywords: [
      'Android App Development Company Islamabad',
      'iOS and Android App Developers Pakistan',
      'Custom Mobile Applications Rawalpindi',
      'Cross-Platform React Native Flutter Development',
      'Enterprise Mobile App Development Services'
    ],
    h1: 'Custom Mobile App Development for iOS & Android',
    tagline: 'High-Performance, Native-Grade Mobile Experiences Built for Frictionless Touch & Scalability',
    category: 'Engineering & Development',
    icon: Smartphone,
    accentGradient: 'from-blue-500 via-indigo-500 to-purple-500',
    badgeColor: 'text-blue-400 bg-blue-950/60 border-blue-500/40',
    overview: [
      'In a mobile-first digital economy, customer loyalty and operational efficiency live inside smartphones. Nutcrackers engineers robust, responsive mobile applications for iOS and Android that combine buttery-smooth 60fps animations with resilient offline-first data synchronization.',
      'Whether you require a consumer-facing ecommerce app, a dedicated telemedicine patient portal, or an internal enterprise workforce utility, our mobile engineering team leverages cross-platform and native paradigms to cut time-to-market while delivering uncompromising performance.',
      'We oversee the entire lifecycle: architectural planning, UX prototyping, state management, secure authentication, API integration, push notifications, and end-to-end Google Play Store and Apple App Store compliance and deployment.'
    ],
    problemsAndSolutions: [
      {
        problem: 'Sluggish mobile apps built with low-quality webview wrappers that stutter on Android devices and get rejected by Apple reviewers.',
        solution: 'Nutcrackers builds compiled, native-grade applications using modern cross-platform engines (React Native / Flutter) and native platform APIs for fluid 60fps interaction and immediate App Store approval.'
      },
      {
        problem: 'Apps that crash or lose user input when the customer walks through a zone with poor 3G/4G connectivity.',
        solution: 'We implement offline-first caching patterns, local SQLite/WatermelonDB storage, and background sync queues that seamlessly update your cloud database once connectivity is restored.'
      },
      {
        problem: 'Unsecured mobile backends exposing user credentials and customer private records through unencrypted endpoints.',
        solution: 'We enforce enterprise security: JWT token rotation, biometric authentication (FaceID/Fingerprint), encrypted storage, and certificate pinning against man-in-the-middle attacks.'
      }
    ],
    deliverables: [
      'Native & Cross-Platform Mobile Applications for iOS & Android',
      'End-to-End Apple App Store & Google Play Store Submission Management',
      'Offline-First Data Storage & Background Database Sync',
      'Push Notifications & User Re-engagement Automations (FCM / OneSignal)',
      'Biometric Login & Secure Role-Based Authentication',
      'In-App Purchases, Stripe & Regional Digital Wallet Integrations',
      'Location Services, GPS Tracking & Interactive Maps',
      'Comprehensive Crash Analytics, Telemetry & Sentry Monitoring'
    ],
    benefits: [
      {
        title: 'Unified Codebase Efficiency',
        description: 'Single maintainable codebase powering both iOS and Android apps, reducing development budget and halving ongoing maintenance costs.'
      },
      {
        title: 'Sub-Second Touch Responsiveness',
        description: 'Engineered with optimized thread management so tapping, swiping, and navigating feels instant and intuitive.'
      },
      {
        title: 'Zero Rejection App Store Guarantee',
        description: 'Strict adherence to Apple Human Interface Guidelines and Google Material Design standards ensures swift approval.'
      },
      {
        title: 'Deep Backend Synchronization',
        description: 'Seamlessly connected to your existing databases, web applications, and CRM via secure REST and WebSocket APIs.'
      }
    ],
    useCases: [
      {
        industry: 'Healthcare & Wellness',
        title: 'Telemedicine & Prescription Mobile App',
        description: 'Patients schedule consultations, upload diagnostic reports, and order home delivery medicines with automated push reminders.'
      },
      {
        industry: 'Field Operations & Logistics',
        title: 'Mobile Delivery & Fleet Dispatch Utility',
        description: 'Real-time driver GPS tracking, digital signature collection, and offline parcel verification for regional transport.'
      },
      {
        industry: 'On-Demand Services',
        title: 'Service Booking & Marketplace App',
        description: 'Instant service scheduling, in-app messaging, automated invoicing, and live provider status updates.'
      }
    ],
    techStack: ['React Native', 'Flutter', 'TypeScript', 'Node.js', 'Firebase / FCM', 'SQLite', 'Supabase', 'Apple StoreKit', 'Google Play Billing'],
    faqs: [
      {
        question: 'Should I build separate native apps for iOS and Android or a cross-platform app?',
        answer: 'For 95% of businesses, modern cross-platform development (such as React Native or Flutter) is the smartest strategic choice. It provides near-identical native performance, native UI feel, and native hardware access while sharing 85-90% of the code between iOS and Android, saving substantial development time and budget.'
      },
      {
        question: 'Will Nutcrackers handle publishing our app to the Apple App Store and Google Play Store?',
        answer: 'Yes. We manage the entire store readiness process: generating provisioning profiles, signing certificates, configuring privacy manifests, taking screenshots, authoring store copy, and addressing any reviewer feedback until your app is fully approved and live.'
      },
      {
        question: 'Can my mobile app share the same database as my website?',
        answer: 'Yes. We engineer unified backend API architectures where your website, mobile app, and administrative portals all connect to the same central database in real time.'
      }
    ],
    relatedServices: [
      { title: 'Web Development', path: '/web-development', tagline: 'Complement your mobile app with a high-performance web platform.' },
      { title: 'AI Chatbot Development', path: '/chatbot-development', tagline: 'Integrate conversational AI assistants directly inside your mobile application.' },
      { title: 'Data Analytics', path: '/data-analytics', tagline: 'Track mobile cohort retention, user journeys, and lifetime customer value.' }
    ]
  },

  'ai-automation': {
    slug: 'ai-automation',
    path: '/ai-automation',
    number: '03',
    title: 'AI Automation',
    metaTitle: 'AI Automation Services | Business Process & Workflow Automation | Nutcrackers',
    metaDescription: 'Automate repetitive business workflows with custom AI automation services. We engineer self-healing n8n pipelines, document extraction, CRM hooks, and API integrations.',
    canonicalUrl: 'https://nutcrackers.tech/ai-automation',
    primaryKeyword: 'AI Automation Services',
    secondaryKeywords: [
      'Business Process Automation Agency Pakistan',
      'n8n and Make Workflow Automation Services',
      'AI Integration Services for Business',
      'Enterprise RPA and Intelligent Document Processing',
      'Workflow Automation Consultants Islamabad'
    ],
    h1: 'Enterprise AI Workflow Automation & Robotic Process Automation',
    tagline: 'Eliminate Repetitive Manual Overhead with Autonomous, Self-Healing Operational Pipelines',
    category: 'Artificial Intelligence & Automation',
    icon: Workflow,
    accentGradient: 'from-purple-500 via-indigo-500 to-brand-teal',
    badgeColor: 'text-purple-400 bg-purple-950/60 border-purple-500/40',
    overview: [
      'Manual data re-entry, slow lead routing, disconnected software tools, and paper-based document processing cost businesses thousands of lost hours each year. Nutcrackers designs and deploys autonomous AI automation pipelines that connect your existing applications into self-healing workflows.',
      'Our automation engineering models your complete operational lifecycle: incoming client webhooks trigger AI document extraction (OCR), unstructured emails are classified into strict typed JSON, customer records are enriched in your CRM, Slack/WhatsApp notifications alert the appropriate team members, and automated invoices are created in Stripe or QuickBooks without human intervention.',
      'We leverage robust orchestration engines like self-hosted n8n, Make.com, Python asynchronous microservices, and LLM reasoning functions to ensure your business operations scale with sub-second execution speeds and automated dead-letter queue error recovery.'
    ],
    problemsAndSolutions: [
      {
        problem: 'Staff members spending 15+ hours weekly copying data between Gmail, Google Sheets, WhatsApp, and internal billing systems.',
        solution: 'Nutcrackers builds automated bi-directional webhooks and event listeners that sync customer records across all platforms in less than 2 seconds with zero human copying errors.'
      },
      {
        problem: 'Invoices, receipts, and client PDF contracts requiring manual visual inspection and tedious typing into accounting databases.',
        solution: 'We deploy Intelligent Document Processing (IDP) with multimodal LLMs that parse PDFs, extract line items, validate mathematical balances, and push structured records directly into your database.'
      },
      {
        problem: 'Brittle Zapier automations that break when an API rate limit is reached or when a customer enters an unexpected phone format.',
        solution: 'We architect enterprise self-healing workflows with exponential backoff retries, data validation schemas, error fallback branches, and instant Telegram/Slack alerts if any external vendor fails.'
      }
    ],
    deliverables: [
      'Custom Multi-Agent Workflow Pipelines (Self-Hosted n8n, Make.com, Python)',
      'Intelligent Document Processing (OCR & Structured JSON PDF Extraction)',
      'Automated Lead Capture, Scoring & CRM Distribution (HubSpot, Salesforce, Airtable)',
      'Automated Invoicing, Stripe Billing Triggers & Accounting Sync',
      'Bi-directional Synchronization between Google Workspace, Slack & WhatsApp',
      'Autonomous Email Classification, Intent Sorting & Auto-Drafting',
      'Self-Healing Webhook Error Listeners with Dead-Letter Queues',
      'Executive Latency & Automation ROI Performance Telemetry'
    ],
    benefits: [
      {
        title: '80%+ Reduction in Operational Drag',
        description: 'Repetitive daily tasks that once took hours now execute in milliseconds in the background.'
      },
      {
        title: 'Zero Human Transposition Error',
        description: 'Strict schema validation eliminates typos, misplaced decimal points, and lost customer requests.'
      },
      {
        title: '24/7/365 Autonomous Execution',
        description: 'Your workflows process orders, qualify leads, and issue deliverables overnight and over weekends.'
      },
      {
        title: 'Low Infrastructure Cost',
        description: 'Self-hosted and serverless workflow architectures keep ongoing software subscription costs minimal.'
      }
    ],
    useCases: [
      {
        industry: 'Ecommerce & Retail',
        title: 'Zero-Touch Order Processing & Fulfillment',
        description: 'Automatic order verification, fraud check scoring, shipping label generation, inventory adjustments, and WhatsApp tracking updates.'
      },
      {
        industry: 'Legal, Healthcare & Finance',
        title: 'Automated Document Ingestion Pipeline',
        description: 'Extracts client tax documents and medical reports, structures table data, verifies signatures, and files records into encrypted folders.'
      },
      {
        industry: 'B2B Sales & Agencies',
        title: 'Instant Lead Enrichment & Calendar Booking',
        description: 'Scrapes company metrics on new form submissions, scores customer intent, notifies senior consultants, and sends calendar booking links.'
      }
    ],
    techStack: ['n8n Self-Hosted', 'Make.com', 'Python FastAPIs', 'OpenAI Function Calling', 'LangChain', 'Airtable', 'Stripe API', 'Webhooks', 'Docker'],
    faqs: [
      {
        question: 'Do we have to replace our existing software tools to use AI automation?',
        answer: 'No. The beauty of our automation engineering is that it acts as the connective tissue between the software tools you already use—such as Gmail, WhatsApp, Excel, Slack, Trello, Google Drive, Shopify, or custom CRM systems.'
      },
      {
        question: 'What happens if an external service goes down or an API fails?',
        answer: 'We build all workflows with resilient failure architecture: automatic retry logic with exponential backoff, dead-letter queues to preserve unprocessed payloads, and automated alerts to ensure zero data loss.'
      },
      {
        question: 'How quickly does an automation project deliver return on investment (ROI)?',
        answer: 'Most clients recoup their entire investment within 30 to 60 days through staff hours saved, faster response times to inbound sales leads, and the elimination of manual human error.'
      }
    ],
    relatedServices: [
      { title: 'AI Chatbot Development', path: '/chatbot-development', tagline: 'Connect your automated workflows to conversational customer support.' },
      { title: 'Data Analytics', path: '/data-analytics', tagline: 'Visualize automation throughput and operational KPI performance.' },
      { title: 'Web Development', path: '/web-development', tagline: 'Embed custom webhooks and intake forms directly on your website.' }
    ]
  },

  'chatbot-development': {
    slug: 'chatbot-development',
    path: '/chatbot-development',
    number: '04',
    title: 'AI Chatbot Development',
    metaTitle: 'AI Chatbot Development Services | WhatsApp & Web AI Agents | Nutcrackers',
    metaDescription: 'Deploy intelligent conversational AI chatbots and WhatsApp agents with vector knowledge retrieval (RAG). 24/7 autonomous support, lead qualification, and CRM sync.',
    canonicalUrl: 'https://nutcrackers.tech/chatbot-development',
    primaryKeyword: 'AI Chatbot Development Services',
    secondaryKeywords: [
      'Custom Chatbot Development Company Pakistan',
      'WhatsApp Chatbot Solutions for Business',
      'Autonomous AI Website Agents',
      'Customer Support Chatbot Integration',
      'RAG Knowledge Base Chatbots Islamabad'
    ],
    h1: 'Intelligent Conversational AI Chatbots & WhatsApp Agents',
    tagline: 'Autonomous 24/7 Lead Qualification & Customer Support Grounded in Your Custom Business Knowledge',
    category: 'Artificial Intelligence & Automation',
    icon: Bot,
    accentGradient: 'from-brand-teal via-emerald-400 to-indigo-500',
    badgeColor: 'text-brand-teal bg-teal-950/60 border-teal-500/40',
    overview: [
      'Modern digital consumers expect immediate answers. A delay of 15 minutes in replying to an inquiry drops lead conversion by over 300%. Nutcrackers architects intelligent, conversational AI website agents and WhatsApp business bots grounded in your proprietary documentation, catalogs, and operational rules.',
      'Unlike legacy keyword-based bots that frustrate users with rigid menus, our agents utilize advanced Retrieval-Augmented Generation (RAG) and vector databases. They understand nuanced natural language, answer technical inquiries accurately, handle customer hesitation, qualify buyer intent, and seamlessly book appointments or hand off to human specialists.',
      'We embed robust brand guardrails preventing hallucination or off-brand responses, and ensure every conversation is automatically synthesized into actionable customer records pushed directly into your CRM or team Slack channels.'
    ],
    problemsAndSolutions: [
      {
        problem: 'Losing high-value international and after-hours website visitors because support staff are offline or slow to reply on WhatsApp.',
        solution: 'Nutcrackers deploys 24/7 autonomous AI concierges with sub-650ms response latency that greet visitors, answer complex questions, and capture verified contact details instantly.'
      },
      {
        problem: 'Generic AI chatbots hallucinating false pricing, giving inaccurate business advice, or embarrassing the company in front of clients.',
        solution: 'We enforce strict vector grounding (RAG) over your verified PDF, web, and product documentation, paired with deterministic system guardrails that restrict answers strictly to verified facts.'
      },
      {
        problem: 'Support teams answering the same 20 repetitive questions all day instead of closing high-value deals.',
        solution: 'Our AI chatbots autonomously resolve 80%+ of routine inquiries—such as pricing, clinic locations, booking steps, and product availability—freeing your staff for high-touch negotiations.'
      }
    ],
    deliverables: [
      'Custom RAG-Powered Conversational AI Agents for Web & Mobile',
      'Official WhatsApp Business API Integration with Automated Chatflows',
      'Vector Database Setup (Pinecone, ChromaDB, PGVector) for Private Knowledge Retrieval',
      'Automated Lead Qualification, Scoring & Calendar Booking Integration',
      'Multi-Lingual Conversational Translation (English, Urdu, Arabic & 40+ languages)',
      'Automated Human Handoff Protocols with Live Notification to WhatsApp/Slack',
      'Strict Brand Safety, Tone Enforcement & Hallucination Guardrails',
      'Conversation Analytics Dashboard Tracking Queries, Sentiment & Conversion Rates'
    ],
    benefits: [
      {
        title: 'Instant Sub-Second Engagement',
        description: 'Engage every visitor in real-time, eliminating the drop-off associated with delayed email responses.'
      },
      {
        title: '3x Higher Lead Qualification',
        description: 'Conversational forms collect phone numbers, budgets, and project scopes naturally in dialogue.'
      },
      {
        title: 'Zero Hallucination Reliability',
        description: 'Answers are mathematically verified against your uploaded manuals, FAQs, and price sheets.'
      },
      {
        title: 'Native WhatsApp Integration',
        description: 'Meet Pakistani and Gulf clients directly on the platform they use every day.'
      }
    ],
    useCases: [
      {
        industry: 'Healthcare & Clinics',
        title: 'Patient Triage & Appointment Scheduling Bot',
        description: 'Answers doctor availability questions, explains diagnostic test requirements, and books clinic appointments 24/7.'
      },
      {
        industry: 'Real Estate & Property',
        title: 'Property Discovery & Lead Qualification Agent',
        description: 'Matches buyer budgets and location preferences with available listings and schedules private property viewings.'
      },
      {
        industry: 'Ecommerce & Retail',
        title: 'Conversational Sales & Order Status Concierge',
        description: 'Recommends products based on customer descriptions, answers return policy questions, and fetches live order tracking.'
      }
    ],
    techStack: ['Python', 'TypeScript', 'LangChain', 'Pinecone Vector DB', 'OpenAI / Gemini API', 'Meta WhatsApp Cloud API', 'WebSockets', 'Supabase'],
    faqs: [
      {
        question: 'How do you prevent the AI chatbot from making up false answers or giving incorrect prices?',
        answer: 'We utilize Retrieval-Augmented Generation (RAG). Before the AI answers any user query, it mathematically searches your verified uploaded documents for exact matching facts. If the information is not in your knowledge base, the bot politely informs the user and offers to connect them with a human team member.'
      },
      {
        question: 'Can the chatbot integrate directly with WhatsApp?',
        answer: 'Yes. We build official Meta WhatsApp Cloud API bots that can message clients, receive audio/text notes, and send interactive buttons and catalogs directly inside WhatsApp.'
      },
      {
        question: 'Can the chatbot take customer information and send it to our CRM or email?',
        answer: 'Yes. Once a customer shares their name, phone number, and project requirement, the chatbot automatically formats the data into structured JSON and delivers it instantly to your email, CRM, or team Slack channel.'
      }
    ],
    relatedServices: [
      { title: 'AI Automation', path: '/ai-automation', tagline: 'Trigger automated backend processes whenever a customer chats with the bot.' },
      { title: 'Web Development', path: '/web-development', tagline: 'Seamlessly embed the conversational chat widget into your website.' },
      { title: 'Digital Marketing', path: '/digital-marketing', tagline: 'Route paid ad traffic directly to high-converting WhatsApp chat agents.' }
    ]
  },

  'data-science': {
    slug: 'data-science',
    path: '/data-science',
    number: '05',
    title: 'Data Science',
    metaTitle: 'Data Science Services & Machine Learning Solutions | Nutcrackers',
    metaDescription: 'Transform raw data into predictive competitive advantage. Custom machine learning models, churn prediction algorithms, and statistical modeling engineered with Python & XGBoost.',
    canonicalUrl: 'https://nutcrackers.tech/data-science',
    primaryKeyword: 'Data Science Services',
    secondaryKeywords: [
      'Machine Learning Solutions Company Pakistan',
      'Predictive Analytics Consultants Islamabad',
      'Customer Churn Prediction Models',
      'Custom AI and ML Model Development',
      'Data Science Agency Rawalpindi Islamabad'
    ],
    h1: 'Predictive Data Science & Custom Machine Learning Solutions',
    tagline: 'Turn Historical Business Data into Precise Predictive Foresight, Automated Classification & Risk Scoring',
    category: 'Data Intelligence',
    icon: BrainCircuit,
    accentGradient: 'from-amber-400 via-orange-500 to-purple-600',
    badgeColor: 'text-brand-amber bg-amber-950/60 border-amber-500/40',
    overview: [
      'Most businesses accumulate gigabytes of operational data but fail to extract predictive foresight. Nutcrackers bridges advanced statistical rigor and machine learning engineering to help organizations anticipate customer churn, forecast demand, detect anomalies, and personalize user experiences.',
      'Moving beyond basic spreadsheets, our data scientists design end-to-end ML pipelines: exploratory data analysis (EDA), automated feature engineering, outlier detection, cross-validated ensemble modeling (XGBoost, LightGBM, Random Forest, Deep Learning), and model explainability using SHAP values.',
      'We don’t stop at experimental Jupyter notebooks—we containerize and deploy production-ready inference REST APIs with monitoring for model drift, ensuring your algorithms deliver continuous, measurable business impact.'
    ],
    problemsAndSolutions: [
      {
        problem: 'Businesses losing 15-25% of annual customer revenue to churn without knowing which accounts are going to cancel until it is too late.',
        solution: 'Nutcrackers builds predictive churn classification models that score customer attrition probability 30 to 60 days in advance, highlighting key risk factors and triggering automated retention offers.'
      },
      {
        problem: 'Black-box algorithms that make predictions without explaining why, making it impossible for executives to trust recommendations.',
        solution: 'We integrate SHAP (SHapley Additive exPlanations) and feature attribution matrices that mathematically demonstrate exactly which variables influenced every model prediction.'
      },
      {
        problem: 'Machine learning models that perform well in development but fail or slow down when deployed to production under live customer traffic.',
        solution: 'We package inference models into lightweight, containerized Docker microservices with optimized C++ runtimes (ONNX/TensorRT) delivering sub-20ms prediction latency.'
      }
    ],
    deliverables: [
      'Customer Churn Prediction & Lifetime Value (CLV) Forecasting Models',
      'Predictive Lead Scoring & Customer Segmentation Algorithms',
      'Demand Forecasting & Inventory Optimization Pipelines',
      'Anomaly Detection & Fraud Prevention Algorithms',
      'SHAP Decision Explainability & Feature Importance Reports',
      'Containerized Production REST APIs for Live Model Inference',
      '5-Fold Stratified Cross-Validation & ROC-AUC Metric Auditing',
      'Data Cleansing, Normalization & Feature Engineering Pipelines'
    ],
    benefits: [
      {
        title: 'Proactive Revenue Protection',
        description: 'Identify at-risk customers and inventory stock-outs before they negatively impact the balance sheet.'
      },
      {
        title: 'Statistically Verified Precision',
        description: 'Rigorous cross-validation prevents overfitting and ensures high generalization accuracy on unseen real-world data.'
      },
      {
        title: 'Production-Ready Architecture',
        description: 'Models are delivered as live callable APIs that easily integrate into your web apps and backend databases.'
      },
      {
        title: 'Actionable Executive Clarity',
        description: 'Transparent feature attributions explain the exact business drivers behind every prediction.'
      }
    ],
    useCases: [
      {
        industry: 'Subscription & SaaS',
        title: 'Predictive Churn & Account Health Scoring',
        description: 'Evaluates telemetry activity, ticket frequency, and payment history to flag accounts at risk of non-renewal.'
      },
      {
        industry: 'Healthcare & Clinical Trials',
        title: 'Patient Risk Stratification Modeling',
        description: 'Analyzes patient vitals and demographic risk indicators to predict likelihood of readmission.'
      },
      {
        industry: 'Ecommerce & Retail',
        title: 'Algorithmic Demand & Re-Stock Forecasting',
        description: 'Forecasts SKU-level weekly demand factoring in seasonality, marketing spend, and supply chain lead times.'
      }
    ],
    techStack: ['Python', 'XGBoost', 'LightGBM', 'Scikit-learn', 'Pandas & NumPy', 'SHAP', 'PyTorch', 'FastAPI', 'Docker'],
    faqs: [
      {
        question: 'How much data do we need before we can train a machine learning model?',
        answer: 'While larger datasets provide deeper statistical granularity, modern regularized ensemble algorithms (like XGBoost) can extract powerful predictive signals from several hundred to a few thousand historical records. We begin every engagement with an initial feasibility assessment of your dataset.'
      },
      {
        question: 'How do we integrate the trained model into our existing software?',
        answer: 'We wrap the model in a high-speed, secure REST API (using FastAPI or Docker). Whenever your website or mobile app needs a prediction, it sends a lightweight JSON payload and receives an instantaneous score in milliseconds.'
      },
      {
        question: 'Do you help clean and organize messy or incomplete data?',
        answer: 'Yes. Robust data preprocessing, outlier removal, missing value imputation, and feature engineering account for a significant portion of our data science methodology.'
      }
    ],
    relatedServices: [
      { title: 'Data Analytics', path: '/data-analytics', tagline: 'Visualize model predictions and historical trends on interactive dashboards.' },
      { title: 'AI Automation', path: '/ai-automation', tagline: 'Automatically trigger business actions based on predictive machine learning scores.' },
      { title: 'Web Development', path: '/web-development', tagline: 'Embed predictive machine learning features directly into your web applications.' }
    ]
  },

  'data-analytics': {
    slug: 'data-analytics',
    path: '/data-analytics',
    number: '06',
    title: 'Data Analytics',
    metaTitle: 'Data Analytics Services & Business Intelligence Dashboards | Nutcrackers',
    metaDescription: 'Executive business intelligence, real-time KPI telemetry, and SQL data warehousing services. Clear cohort retention, margin attribution, and decision-ready dashboards.',
    canonicalUrl: 'https://nutcrackers.tech/data-analytics',
    primaryKeyword: 'Data Analytics Services',
    secondaryKeywords: [
      'Business Intelligence Solutions Pakistan',
      'Power BI and Dashboard Development Services',
      'Executive KPI Telemetry Dashboards',
      'SQL Data Warehousing Consultants Islamabad',
      'Marketing Attribution and Analytics Reporting'
    ],
    h1: 'Business Intelligence, Data Analytics & Executive Telemetry',
    tagline: 'Transform Fragmented Records into Clear, Decision-Ready Business Intelligence & Real-Time Dashboards',
    category: 'Data Intelligence',
    icon: BarChart4,
    accentGradient: 'from-emerald-400 via-teal-500 to-indigo-600',
    badgeColor: 'text-emerald-400 bg-emerald-950/60 border-emerald-500/40',
    overview: [
      'Gut-feeling business management is a recipe for blind spots and wasted capital. Nutcrackers builds clean, unified data architectures and interactive executive Business Intelligence (BI) dashboards that provide decision-makers with crystal-clear visibility into revenue, margins, customer cohorts, and operational velocity.',
      'We extract, transform, and normalize data from disparate sources—PostgreSQL databases, Google Analytics, Shopify, Meta Ads, HubSpot, and transactional spreadsheets—into high-speed analytical data warehouses powered by SQL, DuckDB, or BigQuery.',
      'From executive summary KPI telemetry to deep multi-dimensional cohort retention matrices, our custom dashboards empower founders and leadership teams to identify bottlenecks, allocate capital intelligently, and drive measurable revenue expansion.'
    ],
    problemsAndSolutions: [
      {
        problem: 'Company leadership spending hours every Monday waiting for manual Excel reports assembled by copying numbers from multiple disconnected tools.',
        solution: 'Nutcrackers builds automated ETL pipelines that aggregate transactional records into centralized cloud dashboards updating in real time with zero manual compilation.'
      },
      {
        problem: 'Inability to know which marketing channels, sales reps, or product SKUs are genuinely profitable after accounting for refunds and ad costs.',
        solution: 'We construct multi-touch attribution models and net-margin contribution waterfalls that reveal exact profit per acquisition channel.'
      },
      {
        problem: 'Cluttered, overwhelming dashboards filled with vanity numbers that no one understands or uses to make real business decisions.',
        solution: 'Our designers and data analysts build focused executive telemetry interfaces prioritizing actionable leading indicators over vanity metrics.'
      }
    ],
    deliverables: [
      'Interactive Executive KPI Telemetry Dashboards (Power BI, Superset, Custom Web Dashboards)',
      'Automated ETL / ELT Data Pipelines & Scheduled Aggregations',
      'Customer Cohort Retention Heatmaps & Monthly Recurring Revenue (MRR) Waterfalls',
      'Multi-Channel Marketing Attribution & Return on Ad Spend (ROAS) Modeling',
      'SQL Database Warehousing & Star Schema Data Modeling (PostgreSQL, BigQuery, DuckDB)',
      'Inventory Turnover, Gross Margin & Profitability Decomposition',
      'Automated PDF Executive Summary Reports Delivered to Email or Slack',
      'Role-Based Dashboard Permissions & Data Security Governance'
    ],
    benefits: [
      {
        title: 'Real-Time Operational Visibility',
        description: 'Monitor daily sales, active users, pipeline stages, and conversion rates live as they happen.'
      },
      {
        title: 'Single Source of Truth',
        description: 'Eliminates conflicting spreadsheet versions and aligns your entire executive team around verified data.'
      },
      {
        title: 'Instant Multi-Dimensional Filtering',
        description: 'Filter metrics instantly by geographic territory, customer segment, SKU category, or date range.'
      },
      {
        title: 'Fast Query Response Speeds',
        description: 'Optimized indexed tables and columnar data stores load complex aggregations in milliseconds.'
      }
    ],
    useCases: [
      {
        industry: 'Executive Leadership & C-Suite',
        title: 'Consolidated Executive Business Intelligence Portal',
        description: 'High-level telemetry tracking top-line revenue, gross margin, customer acquisition cost (CAC), and runway in a unified interface.'
      },
      {
        industry: 'Ecommerce & Retail',
        title: 'SKU Margin & Cohort Retention Analytics',
        description: 'Reveals repeat purchase intervals, customer lifetime value decay curves, and product cross-sell opportunities.'
      },
      {
        industry: 'Healthcare & Clinic Networks',
        title: 'Clinical Operations & Patient Flow Telemetry',
        description: 'Tracks patient wait times, doctor consultation capacity, pharmacy sales volume, and diagnostic lab throughput.'
      }
    ],
    techStack: ['PostgreSQL & SQLX', 'BigQuery', 'DuckDB', 'Power BI', 'Apache Superset', 'Python', 'Tailwind Charts', 'Next.js'],
    faqs: [
      {
        question: 'Can you build dashboards using Power BI or as a custom web app?',
        answer: 'We deliver both options based on your preference. We can build and deploy enterprise Power BI templates, or develop bespoke, branded dark-mode web dashboards built with React and Tailwind that require no third-party per-user license fees.'
      },
      {
        question: 'Can you connect data from multiple different platforms into one single dashboard?',
        answer: 'Yes. Connecting fragmented data sources is our primary focus. We build automated data pipelines pulling from your database, CRM, accounting software, Google Ads, Meta Ads, and Excel sheets into one unified analytical data warehouse.'
      },
      {
        question: 'Is our sensitive company financial data secure?',
        answer: 'Absolutely. We enforce strict data security governance, role-based access controls, encrypted database connections (SSL/TLS), and on-premise or private cloud deployment options.'
      }
    ],
    relatedServices: [
      { title: 'Data Science', path: '/data-science', tagline: 'Leverage predictive machine learning on top of your analytical data warehouse.' },
      { title: 'Digital Marketing', path: '/digital-marketing', tagline: 'Feed marketing attribution data directly into paid acquisition campaigns.' },
      { title: 'AI Automation', path: '/ai-automation', tagline: 'Automatically trigger alerts and actions when analytical thresholds are crossed.' }
    ]
  },

  'digital-marketing': {
    slug: 'digital-marketing',
    path: '/digital-marketing',
    number: '07',
    title: 'Digital Marketing',
    metaTitle: 'Digital Marketing Agency Pakistan | Performance Marketing & SEO | Nutcrackers',
    metaDescription: 'Algorithmic digital marketing, multi-channel paid acquisition, and programmatic SEO. Data-driven growth funnels engineered for maximum return on ad spend (ROAS).',
    canonicalUrl: 'https://nutcrackers.tech/digital-marketing',
    primaryKeyword: 'Digital Marketing Agency Pakistan',
    secondaryKeywords: [
      'SEO Services Pakistan',
      'Performance Marketing Agency Islamabad',
      'Google Ads and Meta Ads Management Services',
      'Social Media Marketing Agency Rawalpindi',
      'Conversion Rate Optimization Agency'
    ],
    h1: 'Performance Digital Marketing, Paid Acquisition & SEO Services',
    tagline: 'Algorithmic Multi-Channel Growth Funnels Engineered for Measurable ROAS & Commercial Conversion',
    category: 'Growth & Acquisition',
    icon: TrendingUp,
    accentGradient: 'from-indigo-500 via-purple-500 to-pink-500',
    badgeColor: 'text-indigo-400 bg-indigo-950/60 border-indigo-500/40',
    overview: [
      'Vanity metrics like impressions and arbitrary social likes don’t pay the bills. Nutcrackers approaches digital marketing through an engineering and data-first lens: building high-intent paid acquisition funnels, programmatic SEO content clusters, and conversion-optimized landing pages that generate verifiable revenue.',
      'Our team manages end-to-end performance marketing across Meta Ads (Facebook & Instagram), Google Search & Display, YouTube, and LinkedIn. Every campaign is grounded in first-party conversion tracking via Meta Conversions API (CAPI) and Google Tag Manager server-side tagging, bypassing browser cookie degradation.',
      'We combine mathematical audience segmentation with dynamic creative optimization (DCO)—continuously testing hooks, copywriting angles, and visual creatives to drive down Customer Acquisition Cost (CAC) and scale Return on Ad Spend (ROAS).'
    ],
    problemsAndSolutions: [
      {
        problem: 'Spending significant budget on Meta and Google Ads with low conversion rates and zero transparency into which ads actually drove buyers.',
        solution: 'Nutcrackers installs server-side tracking (Meta CAPI & GA4 Measurement Protocol) and full-funnel attribution models that report exact cost per customer acquisition.'
      },
      {
        problem: 'Generic agency retainers that produce templated social media posts with zero commercial return or organic search rankings.',
        solution: 'We focus on high-intent search engine optimization (SEO) and paid conversion campaigns designed specifically to capture people who are actively ready to buy your services.'
      },
      {
        problem: 'Ad creative fatigue where campaigns perform well for a week and then crash as audiences grow tired of the same ad visual.',
        solution: 'We implement disciplined Dynamic Creative Testing (DCT)—iterating video hooks, headlines, and call-to-actions weekly to maintain high ad relevance and low CPMs.'
      }
    ],
    deliverables: [
      'Full-Funnel Paid Acquisition (Meta Ads, Google Search, YouTube & LinkedIn)',
      'Server-Side Conversion Tracking (Meta Conversions API & GA4 Server GTM)',
      'Comprehensive Technical & On-Page SEO (Keyword Clustering, Schema & Audits)',
      'Conversion Rate Optimization (CRO) & High-Velocity Landing Page Design',
      'Dynamic Creative Optimization (DCO) Testing Hooks, Angles & Copy',
      'Local SEO & Google Business Profile Domination for Pakistan Cities',
      'Programmatic SEO Content Architecture for Long-Tail Commercial Intent',
      'Weekly Transparent ROAS, CAC, and Revenue Attribution Reporting'
    ],
    benefits: [
      {
        title: 'Direct Focus on Net ROAS',
        description: 'Every rupee or dollar spent is tracked against booked revenue, qualified leads, and closed contracts.'
      },
      {
        title: 'Bypass Cookie Loss',
        description: 'Server-side CAPI tracking ensures 100% of purchase signals are accurately attributed even on iOS 14+ devices.'
      },
      {
        title: 'High-Converting Landing Pages',
        description: 'Custom-designed landing pages built to load in milliseconds and maximize visitor conversion rate.'
      },
      {
        title: 'Dominant Organic Search Footprint',
        description: 'Strategic technical SEO positioning your business at the top of Google for valuable commercial searches.'
      }
    ],
    useCases: [
      {
        industry: 'Healthcare & Specialized Clinics',
        title: 'Patient Acquisition & Local Search Domination',
        description: 'Targeted Google Search ads capturing high-intent medical queries paired with Google Business Profile local pack optimization.'
      },
      {
        industry: 'B2B & Professional Services',
        title: 'Account-Based LinkedIn & Google Search Funnel',
        description: 'Generates qualified enterprise consultations through case-study backed landing pages and retargeting.'
      },
      {
        industry: 'Ecommerce & D2C Brands',
        title: 'Multi-Channel Scaled Paid Advertising',
        description: 'Combines viral TikTok/Reels creative pacing with dynamic catalog ads to achieve consistent 4x+ ROAS.'
      }
    ],
    techStack: ['Meta Ads Manager', 'Google Ads', 'Meta Conversions API (CAPI)', 'Google Tag Manager', 'GA4 & BigQuery', 'SEMrush', 'Ahrefs', 'Tailwind CRO'],
    faqs: [
      {
        question: 'What is the difference between vanity marketing and performance marketing?',
        answer: 'Vanity marketing focuses on arbitrary metrics like follower count, page likes, and impressions that have little correlation with revenue. Performance marketing focuses strictly on commercial conversion: cost per lead, customer acquisition cost (CAC), return on ad spend (ROAS), and closed sales.'
      },
      {
        question: 'How long does it take for SEO to start driving organic traffic?',
        answer: 'Technical SEO fixes and local Google Business Profile improvements typically yield indexing and visibility gains within 2 to 4 weeks. Competitive organic keyword ranking for high-volume commercial queries generally compounds significantly over 3 to 6 months.'
      },
      {
        question: 'Do you manage both paid advertising and search engine optimization?',
        answer: 'Yes. We engineer hybrid growth engines where paid ads provide immediate customer flow while long-term technical and programmatic SEO builds compounding, zero-marginal-cost organic search equity.'
      }
    ],
    relatedServices: [
      { title: 'Video Editing', path: '/video-editing', tagline: 'Fuel your ad campaigns with high-retention video creatives and commercial cuts.' },
      { title: 'Web Development', path: '/web-development', tagline: 'Send paid traffic to lightning-fast, custom-engineered landing pages.' },
      { title: 'Data Analytics', path: '/data-analytics', tagline: 'Track multi-channel marketing attribution and customer lifetime value.' }
    ]
  },

  'video-editing': {
    slug: 'video-editing',
    path: '/video-editing',
    number: '08',
    title: 'Video Editing',
    metaTitle: 'Professional Video Editing Services | Commercial & Social Video | Nutcrackers',
    metaDescription: 'Cinematic commercial video editing, YouTube pacing mastery, motion graphics, and audio mastering. High-retention visual storytelling engineered to capture attention.',
    canonicalUrl: 'https://nutcrackers.tech/video-editing',
    primaryKeyword: 'Professional Video Editing Services',
    secondaryKeywords: [
      'Commercial Video Production Pakistan',
      'YouTube Video Editing Services for Creators',
      'Social Media Video Editing TikTok Reels',
      'Corporate Video Production Islamabad',
      'Motion Graphics and Color Grading Studio'
    ],
    h1: 'Professional Video Editing, Commercial Production & Motion Graphics',
    tagline: 'Cinematic Visual Pacing, Kinetic Graphics & Multi-Stem Audio Mastering Engineered for High Audience Retention',
    category: 'Creative Production',
    icon: Video,
    accentGradient: 'from-purple-500 via-pink-500 to-amber-500',
    badgeColor: 'text-purple-400 bg-purple-950/60 border-purple-500/40',
    overview: [
      'In a hyper-competitive digital media landscape, the first three seconds of a video determine whether a viewer converts or swipes away. Nutcrackers is a premier video editing studio fusing cinematic storytelling, psychological retention pacing, dynamic motion design, and broadcast-quality audio engineering.',
      'From corporate brand showreels and high-converting commercial video advertisements to retention-focused YouTube long-form content and viral short-form clips (TikTok, Instagram Reels, YouTube Shorts), our editors sculpt raw footage into compelling visual narratives.',
      'We execute all post-production in-house: multi-camera synchronization, dynamic kinetic typography, 2D/3D tracking, DaVinci Resolve Lumetri color grading, dialogue de-noising, sound foley layering, and master exports optimized for every digital platform.'
    ],
    problemsAndSolutions: [
      {
        problem: 'Boring, slow-paced videos where 50% of the audience leaves in the first 10 seconds, destroying YouTube algorithm reach and ad performance.',
        solution: 'Nutcrackers applies disciplined retention-first pacing: punchy hooks, visual pattern interrupts every 3-5 seconds, sound cues, and b-roll inserts that hold viewer attention to the end.'
      },
      {
        problem: 'Poor, muffled audio with distracting background hiss, echo, and inconsistent volume levels that make content feel amateurish.',
        solution: 'We pass all audio stems through broadcast mastering chains: spectral dialogue isolation, parametric EQ, multi-band compression, sidechain ducking, and precise -14 LUFS loudness mastering.'
      },
      {
        problem: 'Inconsistent brand color and washed-out mobile camera footage that diminishes the perceived quality of your company.',
        solution: 'Our colorists grade in DaVinci Resolve using custom cinematic LUT pipelines, skin-tone calibration, and dynamic contrast curves that give footage a high-budget commercial look.'
      }
    ],
    deliverables: [
      'High-Retention YouTube Long-Form Video Editing (Documentary, Talking Head & Essay style)',
      'Short-Form Video Production for TikTok, Instagram Reels & YouTube Shorts',
      'Cinematic Commercial Video Ads for Meta, YouTube & Broadcast Television',
      'Corporate Overview & Executive Company Culture Showreels',
      'Kinetic Typography, Motion Graphics & Custom 2D/3D Title Animations',
      'DaVinci Resolve Studio Lumetri Color Grading & Skin-Tone Calibration',
      'Multi-Track Audio Post-Production: Foley, Sound Effects & Dialogue De-Noising',
      'Turnkey Delivery in 4K ProRes 422 and Compressed H.264 Web Formats'
    ],
    benefits: [
      {
        title: 'Significantly Higher Audience Retention',
        description: 'Pacing architecture engineered specifically to maximize watch time and satisfy social media algorithms.'
      },
      {
        title: 'Turnkey Multi-Format Delivery',
        description: 'Receive widescreen 16:9 for YouTube and desktop alongside 9:16 vertical cuts for mobile reels.'
      },
      {
        title: 'Broadcast Audio Standards',
        description: 'Crystal-clear dialogue and punchy sound design mastered to international loudness standards.'
      },
      {
        title: 'Rapid Production Turnaround',
        description: 'Disciplined editing workflows and clear feedback cycles deliver final cuts on schedule.'
      }
    ],
    useCases: [
      {
        industry: 'YouTube Creators & Digital Educators',
        title: 'High-Retention Educational & Tech Channel Editing',
        description: 'Pacing, sound design, and motion graphics that transform complex technical discussions into viral video essays.'
      },
      {
        industry: 'Corporate & Tech Startups',
        title: 'Flagship Agency & Brand Presentation Showreel',
        description: 'The official Nutcrackers Showreel—combining sleek obsidian workstation aesthetics, dynamic UI screen motion, and cinematic grading.'
      },
      {
        industry: 'Paid Social & Ecommerce',
        title: 'Direct-Response Commercial Video Ads',
        description: 'Short, punchy video ads featuring hook variations, problem-solution arcs, and clear conversion calls-to-action.'
      }
    ],
    techStack: ['Adobe Premiere Pro', 'After Effects', 'DaVinci Resolve Studio', 'Adobe Audition', 'Blender 3D', 'Boris FX', 'FabFilter Audio'],
    faqs: [
      {
        question: 'How do we send our raw video footage to Nutcrackers?',
        answer: 'You can upload your raw video files to Google Drive, Dropbox, WeTransfer, or a private shared cloud folder. We can work with any raw recording format from iPhone 4K ProRes to high-end cinema camera footage.'
      },
      {
        question: 'How many rounds of revisions are included with our video editing project?',
        answer: 'Every project includes iterative revision rounds using time-stamped review links (Frame.io or Loom), allowing you to leave exact frame-by-frame notes directly on the video player until you are 100% satisfied.'
      },
      {
        question: 'Can you turn our long-form video into multiple short social media clips?',
        answer: 'Yes. Repurposing is one of our most popular services. We take your podcasts, interviews, or long-form videos and extract the highest-impact 30-to-60 second moments, complete with kinetic subtitles, sound effects, and 9:16 vertical framing for TikTok, Reels, and Shorts.'
      }
    ],
    relatedServices: [
      { title: 'Digital Marketing', path: '/digital-marketing', tagline: 'Distribute your commercial videos with precision paid advertising funnels.' },
      { title: 'Web Development', path: '/web-development', tagline: 'Showcase your video showreels on high-performance web pages.' },
      { title: 'AI Automation', path: '/ai-automation', tagline: 'Automate video publishing and social media distribution pipelines.' }
    ]
  }
};

export const serviceDetails: ServiceDetail[] = Object.values(DETAILED_SERVICES);

export function getServiceBySlug(slug: string): ServiceDetail | undefined {
  return DETAILED_SERVICES[slug];
}

