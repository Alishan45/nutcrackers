import React, { useState, useEffect } from 'react';
import { 
  X, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  Loader2, 
  Mail, 
  Sparkles, 
  ShieldCheck,
  FileText
} from 'lucide-react';

interface AdminReplyModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultRefId?: string;
  defaultClientEmail?: string;
  defaultClientName?: string;
  defaultService?: string;
}

export const AdminReplyModal: React.FC<AdminReplyModalProps> = ({
  isOpen,
  onClose,
  defaultRefId = '',
  defaultClientEmail = '',
  defaultClientName = '',
  defaultService = 'Mobile App & Web Development',
}) => {
  const [refId, setRefId] = useState(defaultRefId || `NC-${new Date().toISOString().slice(2, 10).replace(/-/g, '')}-ADMIN`);
  const [clientName, setClientName] = useState(defaultClientName || '');
  const [clientEmail, setClientEmail] = useState(defaultClientEmail || '');
  const [subject, setSubject] = useState('');
  const [service, setService] = useState(defaultService);
  const [originalExcerpt, setOriginalExcerpt] = useState('');
  const [messageBody, setMessageBody] = useState(
    `Thank you for reaching out to Nutcrackers regarding your project inquiry.\n\nOur engineering team has reviewed your specifications. We would love to discuss your architecture requirements, timeline milestones, and delivery approach in detail.\n\nPlease let us know if you have availability for a brief technical alignment call this week.`
  );

  const [isSending, setIsSending] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{ type: 'success' | 'error'; text: string; messageId?: string } | null>(null);

  useEffect(() => {
    if (!isOpen) return;
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
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleQuickTemplate = (type: 'call' | 'estimate' | 'questions') => {
    if (type === 'call') {
      setMessageBody(
        `Thank you for your interest in Nutcrackers.\n\nI have reviewed your inquiry and our team is confident we can deliver this within your target timeframe. Let's schedule a 20-minute discovery call to align on technical requirements and milestone deliverables.\n\nLooking forward to speaking with you.`
      );
    } else if (type === 'estimate') {
      setMessageBody(
        `Thank you for reaching out to Nutcrackers.\n\nBased on your submitted project scope, we have prepared an initial architectural breakdown and milestone schedule. We ensure 100% intellectual property ownership, milestone-based releases, and daily progress transparency.\n\nPlease review and let us know if this aligns with your expectations.`
      );
    } else if (type === 'questions') {
      setMessageBody(
        `Thank you for your inquiry regarding ${service}.\n\nTo ensure our technical proposal is as accurate and efficient as possible, could you clarify:\n1. Are there existing APIs, brand assets, or database schemas we will integrate with?\n2. What is your hard target launch date?\n3. Do you have preferred third-party services (e.g., Supabase, Stripe, AWS)?\n\nOnce we have these details, we will prepare a full milestone roadmap.`
      );
    }
  };

  const handleSendReply = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setStatusMessage(null);

    try {
      const response = await fetch('/api/reply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          refId,
          clientName,
          clientEmail,
          subject: subject || `Re: Your Inquiry [Ref: ${refId}] — Nutcrackers`,
          messageBody,
          originalService: service,
          originalDescription: originalExcerpt,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send reply.');
      }

      setStatusMessage({
        type: 'success',
        text: `Branded reply successfully dispatched to ${clientEmail}!`,
        messageId: data.messageId,
      });
    } catch (err: any) {
      console.error('Admin reply dispatch error:', err);
      setStatusMessage({
        type: 'error',
        text: err.message || 'An error occurred while dispatching email via Gmail SMTP.',
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-2xl animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-2xl bg-[#0D0E16] rounded-3xl border border-white/15 p-6 sm:p-8 shadow-2xl max-h-[88vh] overflow-y-auto my-auto">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Administrator Email Dispatcher</h3>
              <p className="text-xs text-gray-400 font-mono">Template 3 · Nutcrackers to Client Communication</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2.5 rounded-full bg-white/[0.06] hover:bg-white/[0.15] border border-white/15 text-gray-300 hover:text-white transition-all focus:outline-none cursor-pointer shadow-lg hover:scale-105 active:scale-95 shrink-0"
            aria-label="Close admin modal"
            title="Close window (Esc)"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Status Notification */}
        {statusMessage && (
          <div className={`p-4 rounded-2xl mb-6 flex items-start gap-3 ${
            statusMessage.type === 'success' ? 'bg-teal-950/40 border border-teal-500/30 text-teal-200' : 'bg-red-950/40 border border-red-500/30 text-red-200'
          }`}>
            {statusMessage.type === 'success' ? (
              <CheckCircle2 className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
            ) : (
              <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
            )}
            <div className="text-xs">
              <div className="font-bold">{statusMessage.text}</div>
              {statusMessage.messageId && (
                <div className="font-mono text-[10px] text-gray-400 mt-1">
                  Message-ID: {statusMessage.messageId}
                </div>
              )}
            </div>
          </div>
        )}

        <form onSubmit={handleSendReply} className="space-y-4">
          
          {/* Row 1: Ref ID & Client Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-mono text-gray-400 mb-1">INQUIRY REF ID *</label>
              <input
                type="text"
                required
                value={refId}
                onChange={(e) => setRefId(e.target.value)}
                placeholder="NC-261110-XXXX"
                className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-xs font-mono text-white focus:outline-none focus:border-purple-500"
              />
            </div>
            <div>
              <label className="block text-xs font-mono text-gray-400 mb-1">CLIENT EMAIL ADDRESS *</label>
              <input
                type="email"
                required
                value={clientEmail}
                onChange={(e) => setClientEmail(e.target.value)}
                placeholder="client@company.com"
                className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-xs text-white focus:outline-none focus:border-purple-500"
              />
            </div>
          </div>

          {/* Row 2: Client Name & Service */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-mono text-gray-400 mb-1">CLIENT FULL NAME *</label>
              <input
                type="text"
                required
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
                placeholder="Alex Vance"
                className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-xs text-white focus:outline-none focus:border-purple-500"
              />
            </div>
            <div>
              <label className="block text-xs font-mono text-gray-400 mb-1">SERVICE</label>
              <input
                type="text"
                value={service}
                onChange={(e) => setService(e.target.value)}
                placeholder="e.g. AI Website Agent"
                className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-xs text-white focus:outline-none focus:border-purple-500"
              />
            </div>
          </div>

          {/* Quick Snippet Buttons */}
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="text-xs font-mono text-gray-400">PERSONALIZED MESSAGE (TEMPLATE 3 BODY) *</label>
              <div className="flex gap-1.5">
                <button
                  type="button"
                  onClick={() => handleQuickTemplate('call')}
                  className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-950/40 border border-purple-500/30 text-purple-300 hover:bg-purple-900/40 cursor-pointer"
                >
                  Schedule Call
                </button>
                <button
                  type="button"
                  onClick={() => handleQuickTemplate('questions')}
                  className="text-[10px] font-mono px-2 py-0.5 rounded bg-teal-950/40 border border-teal-500/30 text-brand-teal hover:bg-teal-900/40 cursor-pointer"
                >
                  Clarify Scope
                </button>
                <button
                  type="button"
                  onClick={() => handleQuickTemplate('estimate')}
                  className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-950/40 border border-amber-500/30 text-amber-300 hover:bg-amber-900/40 cursor-pointer"
                >
                  Milestone Proposal
                </button>
              </div>
            </div>
            <textarea
              rows={6}
              required
              value={messageBody}
              onChange={(e) => setMessageBody(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-xs text-gray-200 focus:outline-none focus:border-purple-500 leading-relaxed font-sans"
            />
          </div>

          {/* Original Client Excerpt (Optional) */}
          <div>
            <label className="block text-xs font-mono text-gray-400 mb-1">
              ORIGINAL CLIENT INQUIRY EXCERPT <span className="text-gray-600">(Optional Quote)</span>
            </label>
            <input
              type="text"
              value={originalExcerpt}
              onChange={(e) => setOriginalExcerpt(e.target.value)}
              placeholder="e.g. We need a modern healthcare pharmacy store with real-time medicine search..."
              className="w-full px-3.5 py-2 rounded-xl bg-white/[0.02] border border-white/10 text-xs text-gray-300 focus:outline-none focus:border-purple-500"
            />
          </div>

          {/* Delivery Note */}
          <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.05] text-[11px] text-gray-400 font-mono space-y-1">
            <div className="flex items-center gap-1.5 text-brand-teal">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Sender Identity: Ali Shan &lt;alishan.cs01@gmail.com&gt;</span>
            </div>
            <div>Reply-To: alishan.cs01@gmail.com · Client replies route straight to your Gmail</div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={isSending}
            className="w-full py-3.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold text-xs flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-purple-600/30 disabled:opacity-50"
          >
            {isSending ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Delivering Branded Email via Gmail SMTP...</span>
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                <span>Send Branded Response to Client</span>
              </>
            )}
          </button>
        </form>

      </div>
    </div>
  );
};
