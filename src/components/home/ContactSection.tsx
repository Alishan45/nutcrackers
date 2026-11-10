import React, { useState } from 'react';
import { 
  Send, 
  MessageSquare, 
  Globe, 
  CheckCircle2, 
  AlertCircle, 
  Sparkles,
  Loader2,
  Mail,
  Copy,
  Check
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { ScrambleText } from '../common/ScrambleText';

interface ContactSectionProps {
  initialService?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialService }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    companyName: '',
    serviceRequired: initialService || 'Video Editing',
    projectBudget: '$1,000 - $3,000',
    description: '',
    honeypot: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submittedRefId, setSubmittedRefId] = useState<string | null>(null);
  const [copiedRef, setCopiedRef] = useState(false);
  const [apiErrorMessage, setApiErrorMessage] = useState<string | null>(null);

  const servicesList = [
    'Video Editing',
    'Digital Marketing',
    'Mobile App & Web Development',
    'AI Website Agent',
    'AI Automation',
    'Data Science',
    'Data Analysis',
  ];

  const budgetOptions = [
    'Under $1,000',
    '$1,000 - $3,000',
    '$3,000 - $7,000',
    '$7,000 - $15,000',
    '$15,000+',
    'Flexible / Milestone-Based'
  ];

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = 'Full name is required';
    if (!formData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Please provide a valid email address';
    }
    if (!formData.serviceRequired) errs.serviceRequired = 'Please select a service';
    if (!formData.description.trim()) {
      errs.description = 'Project description is required';
    } else if (formData.description.trim().length < 10) {
      errs.description = 'Please describe your project in at least 10 characters';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setApiErrorMessage(null);

    if (!validate()) return;

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to dispatch inquiry. Please try again.');
      }

      setIsSubmitting(false);
      setSubmitSuccess(true);
      if (data.referenceId) {
        setSubmittedRefId(data.referenceId);
      }

      // Trigger celebratory confetti
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#A855F7', '#6366F1', '#2DD4BF', '#F59E0B']
      });

    } catch (err: any) {
      console.error('Contact submission error:', err);
      setIsSubmitting(false);
      setApiErrorMessage(err.message || 'Network error occurred. You can still reach us directly on WhatsApp.');
    }
  };

  const openWhatsAppFallback = () => {
    const waText = encodeURIComponent(
      `*Nutcrackers Project Inquiry*\n` +
      `👤 *Name:* ${formData.fullName}\n` +
      `📧 *Email:* ${formData.email}\n` +
      `🏢 *Company:* ${formData.companyName || 'N/A'}\n` +
      `⚡ *Service:* ${formData.serviceRequired}\n` +
      `💰 *Budget:* ${formData.projectBudget}\n` +
      `📝 *Scope:* ${formData.description}`
    );
    window.open(`https://wa.me/923125355078?text=${waText}`, '_blank');
  };

  return (
    <section id="contact" className="py-24 sm:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-md mb-4">
            <Mail className="w-3.5 h-3.5 text-brand-teal" />
            <span className="text-xs font-mono text-gray-300 uppercase tracking-wider">
              Start Your Engagement
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Let’s Build Something{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-300 to-brand-amber">
              <ScrambleText text="Extraordinary." />
            </span>
          </h2>

          <p className="mt-4 text-gray-400 text-sm sm:text-base leading-relaxed">
            Fill out your project scope below. Inquiries are processed and delivered directly to{' '}
            <strong className="text-gray-200">alishan.cs01@gmail.com</strong> and Nutcrackers leadership.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Official Contact Details & Business Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-3xl bg-[#0D0E16]/90 border border-white/[0.08] p-7 sm:p-8">
              <h3 className="text-xl font-bold text-white mb-2">
                Official Business Channels
              </h3>
              <p className="text-xs sm:text-sm text-gray-400 mb-6">
                Verified communication channels from the official Nutcrackers business registration and brand assets.
              </p>

              <div className="space-y-4">
                {/* Direct Email */}
                <a
                  href="mailto:alishan.cs01@gmail.com"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.025] border border-white/[0.06] hover:border-purple-500/40 hover:bg-white/[0.05] transition-all group"
                >
                  <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 group-hover:scale-105 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-gray-400 uppercase">Direct Email</div>
                    <div className="text-sm font-bold text-white group-hover:text-purple-300 transition-colors">
                      alishan.cs01@gmail.com
                    </div>
                  </div>
                </a>

                {/* Phone & WhatsApp */}
                <a
                  href="https://wa.me/923125355078?text=Hello%20Nutcrackers%2C%20I%20have%20an%20inquiry."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.025] border border-white/[0.06] hover:border-brand-teal/40 hover:bg-white/[0.05] transition-all group"
                >
                  <div className="p-3 rounded-xl bg-brand-teal/10 border border-brand-teal/20 text-brand-teal group-hover:scale-105 transition-transform">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-gray-400 uppercase">Phone & WhatsApp</div>
                    <div className="text-sm font-bold text-white group-hover:text-brand-teal transition-colors">
                      +92 312 5355078
                    </div>
                  </div>
                </a>

                {/* Official Web Reference */}
                <a
                  href="https://alishanai.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.025] border border-white/[0.06] hover:border-amber-500/40 hover:bg-white/[0.05] transition-all group"
                >
                  <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-brand-amber group-hover:scale-105 transition-transform">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-gray-400 uppercase">Official Portfolio</div>
                    <div className="text-sm font-bold text-white group-hover:text-brand-amber transition-colors">
                      alishanai.vercel.app
                    </div>
                  </div>
                </a>
              </div>

              {/* Business Card Reference Box */}
              <div className="mt-8 pt-6 border-t border-white/[0.06]">
                <div className="flex items-center justify-between text-xs text-gray-400 mb-3">
                  <span className="font-mono text-[10px] text-brand-gold uppercase">Authentic Brand Asset</span>
                  <span className="text-[10px] font-mono text-gray-500">Official Card</span>
                </div>
                <div className="rounded-2xl overflow-hidden border border-white/10 group relative">
                  <picture>
                    <source srcSet="/assets/business-card.webp" type="image/webp" />
                    <img
                      src="/assets/business-card.jpeg"
                      alt="Nutcrackers Official Business Card"
                      className="w-full h-auto object-cover opacity-85 group-hover:opacity-100 transition-opacity"
                      loading="lazy"
                      decoding="async"
                    />
                  </picture>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-3">
                    <span className="text-[10px] font-mono text-gray-300">
                      Nutcrackers Brand Card & WhatsApp QR
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Verified Lead Intake Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-[#0D0E16]/90 border border-white/[0.08] p-7 sm:p-10 shadow-2xl relative">
              
              {submitSuccess ? (
                <div className="py-10 text-center space-y-5 animate-in fade-in zoom-in-95 duration-300">
                  <div className="w-16 h-16 rounded-full bg-brand-teal/20 border border-brand-teal/40 flex items-center justify-center text-brand-teal mx-auto shadow-xl shadow-brand-teal/20">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-bold text-white">Inquiry Dispatched & Confirmed</h3>
                    <p className="text-xs font-mono text-brand-teal mt-1">Two-Way Email Thread Initialized</p>
                  </div>

                  {/* Reference ID Pill with Copy */}
                  {submittedRefId && (
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-purple-950/40 border border-purple-500/30 text-purple-200">
                      <span className="text-xs text-gray-400 font-mono">Reference:</span>
                      <span className="font-mono font-bold text-sm text-purple-300">{submittedRefId}</span>
                      <button
                        onClick={() => {
                          navigator.clipboard.writeText(submittedRefId);
                          setCopiedRef(true);
                          setTimeout(() => setCopiedRef(false), 2000);
                        }}
                        className="ml-1 p-1 hover:text-white transition-colors cursor-pointer"
                        title="Copy Reference ID"
                      >
                        {copiedRef ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5 text-purple-400" />}
                      </button>
                    </div>
                  )}
                  
                  <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] text-left max-w-lg mx-auto text-xs space-y-2.5">
                    <div className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0 mt-0.5" />
                      <span className="text-gray-300 leading-relaxed">
                        Inquiry delivered to engineering lead at <strong className="text-white">alishan.cs01@gmail.com</strong>.
                      </span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                      <span className="text-gray-300 leading-relaxed">
                        Confirmation receipt sent to your email <strong className="text-white">{formData.email}</strong>.
                      </span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                      <span className="text-gray-300 leading-relaxed">
                        Our team will review your specifications and reply directly using your email address. You can reply directly to that email thread at any time to share additional briefs.
                      </span>
                    </div>
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button
                      onClick={openWhatsAppFallback}
                      className="w-full sm:w-auto px-6 py-3 rounded-xl text-xs font-bold text-black bg-brand-teal hover:bg-teal-300 transition-all flex items-center justify-center gap-2 shadow-lg shadow-brand-teal/20 cursor-pointer"
                    >
                      <MessageSquare className="w-4 h-4 fill-current" />
                      <span>Also Open in WhatsApp</span>
                    </button>

                    <button
                      onClick={() => {
                        setSubmitSuccess(false);
                        setSubmittedRefId(null);
                        setFormData({
                          fullName: '',
                          email: '',
                          companyName: '',
                          serviceRequired: 'Video Editing',
                          projectBudget: '$1,000 - $3,000',
                          description: '',
                          honeypot: '',
                        });
                      }}
                      className="w-full sm:w-auto px-6 py-3 rounded-xl text-xs font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/15 transition-all cursor-pointer"
                    >
                      Send Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  
                  {/* Honeypot anti-spam trap (hidden from real users) */}
                  <input
                    type="text"
                    name="website_url"
                    value={formData.honeypot}
                    onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                    tabIndex={-1}
                    autoComplete="off"
                    className="hidden"
                    aria-hidden="true"
                  />

                  {/* API Error Notification */}
                  {apiErrorMessage && (
                    <div className="p-4 rounded-xl bg-red-950/40 border border-red-500/40 text-red-200 text-xs flex items-start gap-3">
                      <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                      <div className="flex-1">
                        <div className="font-semibold">{apiErrorMessage}</div>
                        <button
                          type="button"
                          onClick={openWhatsAppFallback}
                          className="mt-2 inline-flex items-center gap-1.5 text-brand-teal hover:underline font-mono text-[11px]"
                        >
                          <MessageSquare className="w-3.5 h-3.5" />
                          <span>Dispatch this message via WhatsApp instead →</span>
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Row 1: Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-medium text-gray-300 mb-1.5">
                        Full Name <span className="text-purple-400">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Alex Morgan"
                        className={`w-full px-4 py-3 rounded-xl bg-white/[0.03] border text-sm text-white placeholder-gray-500 focus:outline-none transition-colors ${
                          errors.fullName ? 'border-red-500/80 focus:border-red-500' : 'border-white/10 focus:border-purple-500/60'
                        }`}
                      />
                      {errors.fullName && <p className="text-[11px] text-red-400 mt-1">{errors.fullName}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-gray-300 mb-1.5">
                        Email Address <span className="text-purple-400">*</span>
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@company.com"
                        className={`w-full px-4 py-3 rounded-xl bg-white/[0.03] border text-sm text-white placeholder-gray-500 focus:outline-none transition-colors ${
                          errors.email ? 'border-red-500/80 focus:border-red-500' : 'border-white/10 focus:border-purple-500/60'
                        }`}
                      />
                      {errors.email && <p className="text-[11px] text-red-400 mt-1">{errors.email}</p>}
                    </div>
                  </div>

                  {/* Row 2: Company & Service */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-medium text-gray-300 mb-1.5">
                        Company Name <span className="text-gray-500 font-normal">(Optional)</span>
                      </label>
                      <input
                        type="text"
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        placeholder="Company or Brand Name"
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/60 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-gray-300 mb-1.5">
                        Service Required <span className="text-purple-400">*</span>
                      </label>
                      <select
                        value={formData.serviceRequired}
                        onChange={(e) => setFormData({ ...formData, serviceRequired: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#090A0F] border border-white/10 text-sm text-white focus:outline-none focus:border-purple-500/60 transition-colors"
                      >
                        {servicesList.map((srv) => (
                          <option key={srv} value={srv} className="bg-[#090A0F] text-white">
                            {srv}
                          </option>
                        ))}
                      </select>
                      {errors.serviceRequired && <p className="text-[11px] text-red-400 mt-1">{errors.serviceRequired}</p>}
                    </div>
                  </div>

                  {/* Row 3: Project Budget */}
                  <div>
                    <label className="block text-xs font-medium text-gray-300 mb-1.5">
                      Estimated Project Budget <span className="text-gray-500 font-normal">(Optional)</span>
                    </label>
                    <select
                      value={formData.projectBudget}
                      onChange={(e) => setFormData({ ...formData, projectBudget: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#090A0F] border border-white/10 text-sm text-white focus:outline-none focus:border-purple-500/60 transition-colors"
                    >
                      {budgetOptions.map((opt) => (
                        <option key={opt} value={opt} className="bg-[#090A0F] text-white">
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Row 4: Description */}
                  <div>
                    <label className="block text-xs font-medium text-gray-300 mb-1.5">
                      Project Description & Requirements <span className="text-purple-400">*</span>
                    </label>
                    <textarea
                      rows={4}
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      placeholder="Please tell us about your goals, current challenges, timeline, or key deliverables..."
                      className={`w-full px-4 py-3 rounded-xl bg-white/[0.03] border text-sm text-white placeholder-gray-500 focus:outline-none transition-colors ${
                        errors.description ? 'border-red-500/80 focus:border-red-500' : 'border-white/10 focus:border-purple-500/60'
                      }`}
                    />
                    {errors.description && <p className="text-[11px] text-red-400 mt-1">{errors.description}</p>}
                  </div>

                  {/* Two-Way Email Communication Guarantee */}
                  <div className="p-3.5 rounded-xl bg-purple-950/20 border border-purple-500/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-[11px] font-mono text-gray-400">
                    <span className="flex items-center gap-1.5 text-purple-300">
                      <Sparkles className="w-3.5 h-3.5 text-brand-teal" />
                      Two-Way Gmail SMTP Active
                    </span>
                    <span className="text-gray-400">
                      Auto-Receipt + Direct Reply Workflow
                    </span>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-600 hover:from-purple-500 hover:to-purple-600 transition-all shadow-[0_0_25px_rgba(168,85,247,0.4)] border border-purple-400/30 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Sending Secure Email to alishan.cs01@gmail.com...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Project Inquiry to Nutcrackers</span>
                      </>
                    )}
                  </button>

                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
