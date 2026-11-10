import React from 'react';
import { ArrowRight, CheckCircle2, Sparkles, Terminal } from 'lucide-react';

interface FormattedAIResponseProps {
  content: string;
  className?: string;
  isCompact?: boolean;
}

/**
 * Parses inline markdown: **bold** and *italic/code*
 */
function parseInlineMarkdown(text: string): React.ReactNode[] {
  // Regex to match **bold** or *italic* or `code`
  const parts: React.ReactNode[] = [];
  const regex = /(\*\*[^*]+\*\*|\*[^*]+\*|`[^`]+`)/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.substring(lastIndex, match.index));
    }

    const token = match[0];
    if (token.startsWith('**') && token.endsWith('**')) {
      const boldText = token.slice(2, -2);
      parts.push(
        <strong key={match.index} className="text-white font-semibold">
          {boldText}
        </strong>
      );
    } else if (token.startsWith('*') && token.endsWith('*')) {
      const italicText = token.slice(1, -1);
      parts.push(
        <span
          key={match.index}
          className="text-purple-300 font-mono text-[11px] px-1.5 py-0.5 rounded bg-purple-950/50 border border-purple-500/30 inline-block mx-0.5"
        >
          {italicText}
        </span>
      );
    } else if (token.startsWith('`') && token.endsWith('`')) {
      const codeText = token.slice(1, -1);
      parts.push(
        <code
          key={match.index}
          className="text-teal-300 font-mono text-[11px] px-1.5 py-0.5 rounded bg-teal-950/40 border border-teal-500/30"
        >
          {codeText}
        </code>
      );
    }

    lastIndex = regex.lastIndex;
  }

  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex));
  }

  return parts;
}

export const FormattedAIResponse: React.FC<FormattedAIResponseProps> = ({
  content,
  className = '',
  isCompact = false,
}) => {
  if (!content) return null;

  // Sometimes AI output packs everything into a single line without double newlines,
  // e.g. "Intro text. **1. Step Name** Step desc. **2. Step Name** Step desc..."
  // Normalize by inserting newlines before numbered bold steps if missing
  let normalized = content.replace(/([.!?])\s+(\*\*\d+[\.:\s]+[^*]+\*\*)/g, '$1\n\n$2');
  
  // Also normalize before closing CTA if packed together
  normalized = normalized.replace(/([.!?])\s+(To deploy this|To architect a|To discuss|Let's schedule)/gi, '$1\n\n$2');

  const blocks = normalized.split(/\n\s*\n/).map(b => b.trim()).filter(Boolean);

  return (
    <div className={`space-y-3.5 text-xs sm:text-sm leading-relaxed text-gray-200 ${className}`}>
      {blocks.map((block, idx) => {
        // 1. Check if block is a Numbered Step / Section Header
        // e.g. "**1. Webhook Ingestion & Context Extraction** The pipeline initiates..."
        // or "1. **Webhook Ingestion...** The pipeline..."
        const stepMatch = block.match(/^(\*{0,2}(\d+)[\.:\s]+([^*]+)\*{0,2})[:\s]*(.*)$/s);
        
        // Check if block starts with **Title** followed by body
        const boldTitleMatch = !stepMatch && block.match(/^(\*\*[^*]+\*\*):?\s*(.*)$/s);

        // Check if block is a call to action
        const isCTA = /^(To deploy this|To architect|To integrate|Let's schedule|Book a milestone)/i.test(block);

        // Check if block is a bullet list item
        const isBullet = /^[-*•]\s+/.test(block);

        if (stepMatch && stepMatch[2] && stepMatch[3]) {
          const stepNum = stepMatch[2].padStart(2, '0');
          const stepTitle = stepMatch[3].replace(/\*\*/g, '').trim();
          const stepBody = stepMatch[4].trim();

          return (
            <div 
              key={idx} 
              className="p-3.5 sm:p-4 rounded-2xl bg-white/[0.025] border border-white/[0.08] hover:border-purple-500/30 transition-colors space-y-1.5"
            >
              <div className="flex items-center gap-2.5">
                <span className="flex items-center justify-center w-6 h-6 rounded-lg bg-purple-500/15 border border-purple-500/30 text-purple-300 font-mono text-xs font-bold shrink-0">
                  {stepNum}
                </span>
                <span className="text-white font-bold text-xs sm:text-sm tracking-tight">
                  {stepTitle}
                </span>
              </div>
              {stepBody && (
                <p className="text-gray-300 text-xs sm:text-[13px] leading-relaxed pl-8">
                  {parseInlineMarkdown(stepBody)}
                </p>
              )}
            </div>
          );
        }

        if (boldTitleMatch && boldTitleMatch[1]) {
          const rawTitle = boldTitleMatch[1].replace(/\*\*/g, '').trim();
          const body = boldTitleMatch[2].trim();

          return (
            <div key={idx} className="space-y-1">
              <div className="text-white font-bold text-xs sm:text-sm flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-brand-teal" />
                <span>{rawTitle}</span>
              </div>
              {body && (
                <p className="text-gray-300 text-xs sm:text-[13px] leading-relaxed">
                  {parseInlineMarkdown(body)}
                </p>
              )}
            </div>
          );
        }

        if (isBullet) {
          const lines = block.split('\n').filter(Boolean);
          return (
            <div key={idx} className="space-y-1.5 pl-1">
              {lines.map((line, lIdx) => (
                <div key={lIdx} className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-teal mt-2 shrink-0" />
                  <span className="text-gray-300 text-xs sm:text-[13px]">
                    {parseInlineMarkdown(line.replace(/^[-*•]\s+/, ''))}
                  </span>
                </div>
              ))}
            </div>
          );
        }

        if (isCTA) {
          return (
            <div 
              key={idx} 
              className="mt-4 p-3.5 rounded-xl bg-gradient-to-r from-purple-950/30 via-teal-950/20 to-purple-950/30 border border-purple-500/30 flex items-start gap-2.5"
            >
              <Sparkles className="w-4 h-4 text-brand-teal shrink-0 mt-0.5" />
              <div className="text-xs text-purple-200 leading-relaxed font-sans">
                {parseInlineMarkdown(block)}
              </div>
            </div>
          );
        }

        // Standard narrative paragraph
        return (
          <p key={idx} className="text-gray-300 text-xs sm:text-[13px] leading-relaxed">
            {parseInlineMarkdown(block)}
          </p>
        );
      })}
    </div>
  );
};
