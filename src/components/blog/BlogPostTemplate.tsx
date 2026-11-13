import React, { useState } from 'react';
import { BlogPost, blogPosts } from '../../data/blogData';
import { SEOMeta } from '../common/SEOMeta';
import { Breadcrumbs } from '../common/Breadcrumbs';
import { 
  Calendar, 
  Clock, 
  User, 
  MessageSquare, 
  ArrowUpRight, 
  ChevronDown, 
  CheckCircle, 
  ArrowRight,
  Share2
} from 'lucide-react';
import { trackWhatsAppClick, trackLeadConversion } from '../../utils/analytics';

interface BlogPostTemplateProps {
  post: BlogPost;
  onOpenQuote: (serviceName?: string) => void;
}

export const BlogPostTemplate: React.FC<BlogPostTemplateProps> = ({ post, onOpenQuote }) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [copiedLink, setCopiedLink] = useState(false);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.summary,
        url: window.location.href
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: post.title,
    description: post.metaDescription,
    url: post.canonicalUrl,
    datePublished: post.publishedDate,
    dateModified: post.modifiedDate,
    author: {
      '@type': 'Person',
      name: post.author.name,
      jobTitle: post.author.role,
      description: post.author.bio
    },
    publisher: {
      '@type': 'Organization',
      name: 'Nutcrackers',
      url: 'https://nutcrackers.tech',
      logo: 'https://nutcrackers.tech/new_nutcrackers_business_card.jpeg'
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': post.canonicalUrl
    }
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: post.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };

  const relatedArticles = blogPosts.filter((p) => post.relatedPostSlugs.includes(p.slug));

  return (
    <div className="pt-24 sm:pt-28 pb-20 relative">
      <SEOMeta
        title={post.metaTitle}
        description={post.metaDescription}
        canonicalUrl={post.canonicalUrl}
        ogType="article"
        publishedTime={post.publishedDate}
        modifiedTime={post.modifiedDate}
        authorName={post.author.name}
        schema={[articleSchema, faqSchema]}
      />

      <Breadcrumbs
        items={[
          { name: 'Blog', path: '/blog' },
          { name: post.title }
        ]}
      />

      {/* Article Header */}
      <header className="max-w-4xl mx-auto px-4 sm:px-6 pt-6 pb-10">
        <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-gray-400 mb-4">
          <span className="px-3 py-1 rounded-md bg-purple-500/10 text-purple-300 font-semibold">
            {post.category}
          </span>
          <div className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-brand-teal" />
            <span>{post.readingTime}</span>
          </div>
          <div className="flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5 text-gray-500" />
            <span>Updated: {post.modifiedDate}</span>
          </div>
        </div>

        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
          {post.title}
        </h1>

        <p className="mt-5 text-base sm:text-lg text-gray-300 leading-relaxed">
          {post.summary}
        </p>

        {/* Author Bio Banner */}
        <div className="mt-6 pt-6 border-t border-white/[0.08] flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-purple-600/30 border border-purple-400/40 flex items-center justify-center text-purple-200">
              <User className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">{post.author.name}</div>
              <div className="text-xs text-gray-400">{post.author.role}</div>
            </div>
          </div>

          <button
            onClick={handleShare}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-xs text-gray-300 transition-colors cursor-pointer"
            title="Share this article"
          >
            <Share2 className="w-3.5 h-3.5" />
            <span>{copiedLink ? 'Copied URL!' : 'Share'}</span>
          </button>
        </div>
      </header>

      {/* Main Content Layout with Sidebar TOC */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 grid grid-cols-1 gap-12">
        {/* Table of Contents Box */}
        <nav aria-label="Table of contents" className="p-6 rounded-2xl bg-[#0D0E16] border border-white/10">
          <div className="text-xs font-mono uppercase tracking-widest text-brand-teal font-semibold mb-3">
            Table of Contents
          </div>
          <ul className="space-y-2 text-xs sm:text-sm">
            {post.tableOfContents.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="text-gray-300 hover:text-purple-300 transition-colors block py-0.5"
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Article Body Sections */}
        <main className="space-y-12">
          {post.sections.map((sec) => (
            <section key={sec.id} id={sec.id} className="scroll-mt-28 space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-white pt-2 border-t border-white/[0.06]">
                {sec.heading}
              </h2>

              <div className="space-y-3.5 text-sm sm:text-base text-gray-300 leading-relaxed">
                {sec.paragraphs.map((p, pIdx) => (
                  <p key={pIdx}>{p}</p>
                ))}
              </div>

              {sec.bulletPoints && sec.bulletPoints.length > 0 && (
                <ul className="space-y-2 pt-2 text-xs sm:text-sm text-gray-300">
                  {sec.bulletPoints.map((bp, bpIdx) => (
                    <li key={bpIdx} className="flex items-start gap-2.5">
                      <CheckCircle className="w-4 h-4 text-brand-teal shrink-0 mt-0.5" />
                      <span>{bp}</span>
                    </li>
                  ))}
                </ul>
              )}

              {sec.keyTakeaway && (
                <div className="p-4 sm:p-5 rounded-xl bg-purple-950/20 border-l-4 border-purple-500 text-xs sm:text-sm text-purple-200 mt-4">
                  <span className="font-bold text-white block mb-1">Key Takeaway:</span>
                  {sec.keyTakeaway}
                </div>
              )}
            </section>
          ))}
        </main>

        {/* Article FAQs */}
        {post.faqs.length > 0 && (
          <section className="pt-8 border-t border-white/[0.08]">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-6">
              Frequently Asked Questions
            </h2>
            <div className="space-y-3">
              {post.faqs.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div
                    key={idx}
                    className="rounded-xl bg-[#0D0E16] border border-white/[0.08] overflow-hidden"
                  >
                    <button
                      onClick={() => toggleFaq(idx)}
                      className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-white/[0.02]"
                    >
                      <span className="text-sm font-semibold text-white">{faq.question}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-gray-400 transition-transform ${
                          isOpen ? 'rotate-180 text-purple-400' : ''
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-4 text-xs sm:text-sm text-gray-300 border-t border-white/[0.04]">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* Author Bio Box */}
        <section className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.08] flex flex-col sm:flex-row items-center gap-5">
          <div className="w-16 h-16 rounded-2xl bg-purple-600/30 border border-purple-500/40 flex items-center justify-center text-purple-200 shrink-0">
            <User className="w-8 h-8" />
          </div>
          <div className="text-center sm:text-left">
            <h3 className="text-base font-bold text-white">{post.author.name}</h3>
            <div className="text-xs font-mono text-purple-300 mb-2">{post.author.role}</div>
            <p className="text-xs text-gray-400 leading-relaxed">{post.author.bio}</p>
          </div>
        </section>

        {/* Related Services */}
        {post.relatedServices.length > 0 && (
          <section className="pt-8 border-t border-white/[0.08]">
            <h3 className="text-lg font-bold text-white mb-4">
              Need Help Implementing This? Explore Nutcrackers Services
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {post.relatedServices.map((rel, idx) => (
                <a
                  key={idx}
                  href={rel.path}
                  className="p-5 rounded-xl bg-[#0D0E16] border border-white/10 hover:border-purple-400/40 transition-all group block"
                >
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="text-sm font-bold text-white group-hover:text-purple-300">
                      {rel.title}
                    </h4>
                    <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-purple-300 group-hover:translate-x-1 transition-all" />
                  </div>
                  <p className="text-xs text-gray-400">{rel.description}</p>
                </a>
              ))}
            </div>
          </section>
        )}

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <section className="pt-8 border-t border-white/[0.08]">
            <h3 className="text-lg font-bold text-white mb-4">Related Engineering Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {relatedArticles.map((relPost) => (
                <a
                  key={relPost.slug}
                  href={`/blog/${relPost.slug}`}
                  className="p-5 rounded-xl bg-white/[0.02] border border-white/[0.08] hover:border-brand-teal/40 transition-all group block"
                >
                  <div className="text-[11px] font-mono text-brand-teal mb-1">
                    {relPost.category} • {relPost.readingTime}
                  </div>
                  <h4 className="text-sm font-bold text-white group-hover:text-brand-teal transition-colors line-clamp-2">
                    {relPost.title}
                  </h4>
                </a>
              ))}
            </div>
          </section>
        )}

        {/* Final Conversion Banner */}
        <section className="pt-8">
          <div className="p-8 rounded-3xl bg-gradient-to-r from-purple-950/40 via-indigo-950/40 to-teal-950/30 border border-purple-500/30 text-center space-y-4">
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Ready to Discuss Your Project Architecture?
            </h3>
            <p className="text-xs sm:text-sm text-gray-300 max-w-lg mx-auto">
              Our engineering team is ready to review your requirements, conduct architectural audits, and deliver a clear milestone plan.
            </p>
            <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
              <a
                href="https://wa.me/923125355078?text=Hello%20Nutcrackers%2C%20I%20am%20interested%20in%20your%20services."
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick('blog_bottom_banner', post.title)}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold text-white bg-teal-500 hover:bg-teal-400 transition-all shadow-[0_0_16px_rgba(45,212,191,0.3)]"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp: +92 312 5355078</span>
              </a>
              <button
                onClick={() => {
                  trackLeadConversion('blog_quote_button', post.title);
                  onOpenQuote();
                }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-all cursor-pointer"
              >
                <span>Request Project Proposal</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
