import React, { useState, useEffect } from 'react';
import { BackgroundGradients } from './components/common/BackgroundGradients';
import { Navbar } from './components/common/Navbar';
import { HeroSection } from './components/home/HeroSection';
import { FeatureMarquee } from './components/home/FeatureMarquee';
import { ServicesBento, ServiceData } from './components/home/ServicesBento';
import { VideoShowcase } from './components/home/VideoShowcase';
import { InteractiveAIDemo } from './components/home/InteractiveAIDemo';
import { WhyNutcrackers } from './components/home/WhyNutcrackers';
import { PortfolioSection } from './components/home/PortfolioSection';
import { ProcessSection } from './components/home/ProcessSection';
import { TestimonialsSection } from './components/home/TestimonialsSection';
import { LeadershipSection } from './components/home/LeadershipSection';
import { CTASection } from './components/home/CTASection';
import { ContactSection } from './components/home/ContactSection';
import { Footer } from './components/common/Footer';
import { ServiceDetailModal } from './components/common/ServiceDetailModal';
import { WhatsAppFloat } from './components/common/WhatsAppFloat';

// SEO Service & Blog components
import { getServiceBySlug } from './data/serviceData';
import { getBlogPostBySlug } from './data/blogData';
import { ServicePageTemplate } from './components/services/ServicePageTemplate';
import { BlogIndexPage } from './components/blog/BlogIndexPage';
import { BlogPostTemplate } from './components/blog/BlogPostTemplate';
import { initGA, trackPageView } from './utils/analytics';

export function App() {
  const [selectedService, setSelectedService] = useState<ServiceData | null>(null);
  const [isCaseStudyOpen, setIsCaseStudyOpen] = useState(false);
  const [quoteService, setQuoteService] = useState<string>('Video Editing');
  const [currentPath, setCurrentPath] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      const p = window.location.pathname.replace(/\/$/, '');
      return p === '' ? '/' : p;
    }
    return '/';
  });

  // Initialize telemetry
  useEffect(() => {
    initGA();
  }, []);

  // Handle browser back/forward navigation
  useEffect(() => {
    const handlePopState = () => {
      const p = window.location.pathname.replace(/\/$/, '');
      const path = p === '' ? '/' : p;
      setCurrentPath(path);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Track page view once per route transition
  useEffect(() => {
    trackPageView(currentPath);
  }, [currentPath]);

  // Intercept internal link clicks for smooth SPA routing
  useEffect(() => {
    const handleLinkClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('a');
      if (!target) return;

      const href = target.getAttribute('href');
      if (!href) return;

      // Skip external links, tel, mailto, whatsapp
      if (
        href.startsWith('http://') ||
        href.startsWith('https://') ||
        href.startsWith('mailto:') ||
        href.startsWith('tel:') ||
        href.startsWith('//') ||
        target.getAttribute('target') === '_blank'
      ) {
        return;
      }

      // Handle anchor-only links on home page
      if (href.startsWith('#')) {
        if (currentPath !== '/') {
          e.preventDefault();
          window.history.pushState({}, '', `/${href}`);
          setCurrentPath('/');
          setTimeout(() => {
            const el = document.getElementById(href.slice(1));
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        }
        return;
      }

      // Handle internal routes starting with '/'
      if (href.startsWith('/')) {
        e.preventDefault();
        const [pathname, hash] = href.split('#');
        const cleanPath = pathname.replace(/\/$/, '') || '/';

        if (cleanPath !== currentPath) {
          window.history.pushState({}, '', href);
          setCurrentPath(cleanPath);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else if (hash) {
          const el = document.getElementById(hash);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }
    };

    document.addEventListener('click', handleLinkClick);
    return () => document.removeEventListener('click', handleLinkClick);
  }, [currentPath]);

  const handleOpenQuote = (serviceName?: string) => {
    if (serviceName) {
      setQuoteService(serviceName);
    }

    if (currentPath !== '/') {
      window.history.pushState({}, '', '/#contact');
      setCurrentPath('/');
      setTimeout(() => {
        const contactEl = document.getElementById('contact');
        if (contactEl) contactEl.scrollIntoView({ behavior: 'smooth' });
      }, 150);
    } else {
      const contactEl = document.getElementById('contact');
      if (contactEl) contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExploreServices = () => {
    if (currentPath !== '/') {
      window.history.pushState({}, '', '/#services');
      setCurrentPath('/');
      setTimeout(() => {
        const servicesEl = document.getElementById('services');
        if (servicesEl) servicesEl.scrollIntoView({ behavior: 'smooth' });
      }, 150);
    } else {
      const servicesEl = document.getElementById('services');
      if (servicesEl) servicesEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Route matching logic
  const renderCurrentView = () => {
    // 1. Home View
    if (currentPath === '/') {
      return (
        <main className="relative z-10">
          <HeroSection
            onStartProject={() => handleOpenQuote()}
            onExploreServices={handleExploreServices}
          />
          <FeatureMarquee />
          <ServicesBento onSelectService={(service) => setSelectedService(service)} />
          <VideoShowcase />
          <InteractiveAIDemo />
          <WhyNutcrackers />
          <PortfolioSection 
            onInquireService={(serviceName) => handleOpenQuote(serviceName)} 
            onCaseStudyToggle={setIsCaseStudyOpen}
          />
          <ProcessSection />
          <TestimonialsSection />
          <LeadershipSection />
          <CTASection
            onStartProject={() => handleOpenQuote()}
            onContact={() => handleOpenQuote()}
          />
          <ContactSection initialService={quoteService} />
        </main>
      );
    }

    // 2. Blog Index View
    if (currentPath === '/blog') {
      return <BlogIndexPage />;
    }

    // 3. Blog Post Reader
    if (currentPath.startsWith('/blog/')) {
      const slug = currentPath.replace('/blog/', '');
      const post = getBlogPostBySlug(slug);
      if (post) {
        return <BlogPostTemplate post={post} onOpenQuote={handleOpenQuote} />;
      }
      return <BlogIndexPage />;
    }

    // 4. Dedicated Service Landing Pages
    const serviceSlug = currentPath.replace(/^\//, '');
    const serviceDetail = getServiceBySlug(serviceSlug);
    if (serviceDetail) {
      return (
        <ServicePageTemplate
          service={serviceDetail}
          onOpenQuote={handleOpenQuote}
        />
      );
    }

    // Fallback: If route unknown, render Home
    return (
      <main className="relative z-10">
        <HeroSection
          onStartProject={() => handleOpenQuote()}
          onExploreServices={handleExploreServices}
        />
        <ServicesBento onSelectService={(service) => setSelectedService(service)} />
        <ContactSection initialService={quoteService} />
      </main>
    );
  };

  return (
    <div className="relative min-h-screen bg-[#090A0F] text-[#F3F4F6] selection:bg-purple-600/30 selection:text-purple-200 overflow-x-hidden font-sans">
      {/* Background Gradients & Topographic Contours */}
      <BackgroundGradients />

      {/* Floating Navigation Bar */}
      <Navbar 
        onOpenQuote={() => handleOpenQuote()} 
        isHidden={isCaseStudyOpen || Boolean(selectedService)}
        currentPath={currentPath}
      />

      {/* Active Page View */}
      {renderCurrentView()}

      {/* Persistent Footer */}
      <Footer onSelectService={(serviceName) => setQuoteService(serviceName)} />

      {/* Service Detail Modal (Preserved for interactive Bento clicks) */}
      {selectedService && (
        <ServiceDetailModal
          service={selectedService}
          onClose={() => setSelectedService(null)}
          onSelectServiceForQuote={(name: string) => {
            setSelectedService(null);
            handleOpenQuote(name);
          }}
        />
      )}

      {/* Floating Action Button for Instant WhatsApp Access */}
      <WhatsAppFloat isHidden={isCaseStudyOpen || Boolean(selectedService)} />
    </div>
  );
}

export default App;

