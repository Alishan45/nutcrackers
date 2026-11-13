import React, { useState } from 'react';
import { ServiceDetail } from '../../data/serviceData';
import { SEOMeta } from '../common/SEOMeta';
import { Breadcrumbs } from '../common/Breadcrumbs';
import { 
  ArrowUpRight, 
  MessageSquare, 
  CheckCircle2, 
  AlertTriangle, 
  ChevronDown, 
  Sparkles,
  ArrowRight,
  PackageCheck
} from 'lucide-react';
import { trackWhatsAppClick, trackLeadConversion } from '../../utils/analytics';

interface ServicePageTemplateProps {
  service: ServiceDetail;
  onOpenQuote: (serviceName: string) => void;
}

export const ServicePageTemplate: React.FC<ServicePageTemplateProps> = ({
  service,
  onOpenQuote
}) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const handleWhatsAppClick = (sourceLocation: string) => {
    trackWhatsAppClick(sourceLocation, service.title);
  };

  const handleQuoteClick = () => {
    trackLeadConversion('service_page_quote_button', service.title);
    onOpenQuote(service.title);
  };

  // Structured Data (Service + FAQPage)
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    serviceType: service.title,
    provider: {
      '@type': 'Organization',
      name: 'Nutcrackers',
      url: 'https://nutcrackers.tech',
      logo: 'https://nutcrackers.tech/new_nutcrackers_business_card.jpeg',
      telephone: '+923125355078',
      sameAs: [
        'https://wa.me/923125355078',
        'https://alishanai.vercel.app',
        'https://muzammilshabbir.vercel.app/'
      ]
    },
    areaServed: [
      { '@type': 'AdministrativeArea', name: 'Taxila' },
      { '@type': 'AdministrativeArea', name: 'Wah Cantt' },
      { '@type': 'City', name: 'Islamabad' },
      { '@type': 'City', name: 'Rawalpindi' },
      { '@type': 'Country', name: 'Pakistan' },
      { '@type': 'Country', name: 'United States' },
      { '@type': 'Country', name: 'United Kingdom' },
      { '@type': 'Country', name: 'United Arab Emirates' }
    ],
    description: service.metaDescription,
    url: service.canonicalUrl
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: service.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };

  return (
    <div className="pt-24 sm:pt-28 pb-20 relative">
      <SEOMeta
        title={service.metaTitle}
        description={service.metaDescription}
        canonicalUrl={service.canonicalUrl}
        schema={[serviceSchema, faqSchema]}
      />

      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { name: 'Services', path: '/#services' },
          { name: service.title }
        ]}
      />

      {/* Hero Section */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-6 sm:pt-10 pb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-mono uppercase tracking-wider mb-6">
          <Sparkles className="w-3.5 h-3.5 text-brand-teal" />
          <span>{service.number} • {service.category}</span>
        </div>

        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white max-w-4xl leading-[1.15]">
          {service.h1}
        </h1>

        <p className="mt-6 text-base sm:text-xl text-gray-300 max-w-3xl leading-relaxed">
          {service.tagline}
        </p>

        {/* Action CTAs */}
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href="https://wa.me/923125355078?text=Hello%20Nutcrackers%2C%20I%20am%20interested%20in%20your%20services."
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => handleWhatsAppClick('service_hero')}
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full font-semibold text-sm text-white bg-gradient-to-r from-teal-500 to-emerald-600 hover:from-teal-400 hover:to-emerald-500 shadow-[0_0_24px_rgba(45,212,191,0.3)] transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Consult on WhatsApp (+92 312 5355078)</span>
          </a>

          <button
            onClick={handleQuoteClick}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-semibold text-sm text-white bg-white/10 hover:bg-white/15 border border-white/15 backdrop-blur-md transition-all cursor-pointer hover:border-purple-400/40"
          >
            <span>Request Custom Scope & Quote</span>
            <ArrowUpRight className="w-4 h-4 text-purple-300" />
          </button>
        </div>
      </section>

      {/* Overview Paragraphs */}
      {service.overview && service.overview.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 py-8 border-t border-white/[0.08]">
          <div className="max-w-4xl space-y-4 text-sm sm:text-base text-gray-300 leading-relaxed">
            {service.overview.map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
          </div>
        </section>
      )}

      {/* Problems We Solve Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 border-t border-white/[0.08]">
        <div className="max-w-2xl mb-10">
          <span className="text-xs font-mono uppercase tracking-widest text-brand-gold font-semibold">
            Industry Challenges & Solutions
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-2">
            Why Modern Businesses Struggle — And How Nutcrackers Solves It
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {service.problemsAndSolutions.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#0D0E16]/80 border border-white/[0.08] hover:border-purple-500/30 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2 text-rose-400 font-semibold text-sm mb-2">
                  <AlertTriangle className="w-4 h-4 shrink-0" />
                  <span>The Challenge</span>
                </div>
                <p className="text-sm text-gray-400 mb-6 leading-relaxed">
                  {item.problem}
                </p>
              </div>

              <div className="pt-4 border-t border-white/[0.06]">
                <div className="flex items-center gap-2 text-brand-teal font-semibold text-sm mb-2">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>The Nutcrackers Engineering Fix</span>
                </div>
                <p className="text-sm text-gray-200 leading-relaxed font-medium">
                  {item.solution}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 border-t border-white/[0.08]">
        <div className="max-w-2xl mb-10">
          <span className="text-xs font-mono uppercase tracking-widest text-brand-teal font-semibold">
            Strategic Advantages
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-2">
            Business Benefits & Measurable Value
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {service.benefits.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.07] hover:border-brand-teal/40 transition-all group"
            >
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-300 font-mono text-sm font-bold mb-4 group-hover:scale-110 transition-transform">
                0{idx + 1}
              </div>
              <h3 className="text-base font-bold text-white mb-2">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Deliverables Checklist */}
      {service.deliverables && service.deliverables.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 border-t border-white/[0.08]">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-mono uppercase tracking-widest text-purple-400 font-semibold">
              Guaranteed Outputs
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-2">
              Deliverables Included in Every Engagement
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {service.deliverables.map((deliv, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-[#0D0E16] border border-white/[0.08] flex items-start gap-3"
              >
                <PackageCheck className="w-5 h-5 text-brand-teal shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-gray-200">{deliv}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Technology Stack */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 border-t border-white/[0.08]">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-purple-400 font-semibold">
              Production Architecture
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-2">
              Modern Battle-Tested Tech Stack
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-gray-400 max-w-md">
            We reject fragile shortcuts and obsolete libraries, engineering exclusively on audited modern frameworks with active security support.
          </p>
        </div>

        <div className="flex flex-wrap gap-2.5">
          {service.techStack.map((tech, idx) => (
            <span
              key={idx}
              className="px-4 py-2 rounded-xl bg-[#0F101A] border border-white/10 text-xs sm:text-sm font-mono text-gray-300 hover:text-white hover:border-purple-400/50 transition-all"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* Real-World Industry Use Cases */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 border-t border-white/[0.08]">
        <div className="max-w-2xl mb-10">
          <span className="text-xs font-mono uppercase tracking-widest text-brand-gold font-semibold">
            Proven Applications
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-2">
            Real-World Industry Use Cases
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {service.useCases.map((useCase, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-gradient-to-b from-white/[0.03] to-white/[0.01] border border-white/[0.08] relative"
            >
              <div className="inline-block px-3 py-1 rounded-md bg-purple-500/10 text-purple-300 font-mono text-xs uppercase tracking-wider mb-3">
                {useCase.industry}
              </div>
              <h3 className="text-base font-bold text-white mb-2">
                {useCase.title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                {useCase.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-12 border-t border-white/[0.08]">
        <div className="text-center mb-10">
          <span className="text-xs font-mono uppercase tracking-widest text-brand-gold font-semibold">
            Common Inquiries
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-2">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {service.faqs.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-xl bg-white/[0.02] border border-white/[0.08] overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full px-6 py-4.5 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none hover:bg-white/[0.02]"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-semibold text-white">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-gray-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-purple-400' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-gray-300 leading-relaxed border-t border-white/[0.04]">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Internal Links / Related Services */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 border-t border-white/[0.08]">
        <div className="max-w-2xl mb-8">
          <span className="text-xs font-mono uppercase tracking-widest text-purple-400 font-semibold">
            Integrated Solutions
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-white mt-1">
            Explore Related Services
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {service.relatedServices.map((rel, idx) => (
            <a
              key={idx}
              href={rel.path}
              className="p-5 rounded-xl bg-white/[0.02] border border-white/[0.07] hover:border-purple-400/40 hover:bg-white/[0.04] transition-all group block"
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-bold text-white group-hover:text-purple-300 transition-colors">
                  {rel.title}
                </h3>
                <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-purple-300 group-hover:translate-x-1 transition-all" />
              </div>
              <p className="text-xs text-gray-400 leading-relaxed">
                {rel.tagline}
              </p>
            </a>
          ))}
        </div>
      </section>

      {/* Final Conversion Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pt-12">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-purple-900/40 via-indigo-900/40 to-teal-900/30 border border-purple-500/30 text-center relative overflow-hidden">
          <div className="relative z-10 max-w-2xl mx-auto space-y-4">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
              Ready to Accelerate Your {service.title} Project?
            </h2>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
              Connect directly with our engineering leadership in Pakistan. We provide detailed architectural blueprints and fixed milestone proposals within 24 hours.
            </p>
            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <a
                href="https://wa.me/923125355078?text=Hello%20Nutcrackers%2C%20I%20am%20interested%20in%20your%20services."
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleWhatsAppClick('service_bottom_banner')}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold text-white bg-teal-500 hover:bg-teal-400 transition-all shadow-[0_0_20px_rgba(45,212,191,0.3)]"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Instant WhatsApp: +92 312 5355078</span>
              </a>
              <button
                onClick={handleQuoteClick}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-all cursor-pointer"
              >
                <span>Request Project Proposal</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
