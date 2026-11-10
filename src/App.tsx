import React, { useState } from 'react';
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
import { CTASection } from './components/home/CTASection';
import { ContactSection } from './components/home/ContactSection';
import { Footer } from './components/common/Footer';
import { ServiceDetailModal } from './components/common/ServiceDetailModal';
import { WhatsAppFloat } from './components/common/WhatsAppFloat';

export function App() {
  const [selectedService, setSelectedService] = useState<ServiceData | null>(null);
  const [quoteService, setQuoteService] = useState<string>('Video Editing');

  const handleOpenQuote = (serviceName?: string) => {
    if (serviceName) {
      setQuoteService(serviceName);
    }
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExploreServices = () => {
    const servicesEl = document.getElementById('services');
    if (servicesEl) {
      servicesEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#090A0F] text-[#F3F4F6] selection:bg-purple-600/30 selection:text-purple-200 overflow-x-hidden font-sans">
      {/* Background Gradients & Topographic Contours */}
      <BackgroundGradients />

      {/* Floating Navigation Bar */}
      <Navbar onOpenQuote={() => handleOpenQuote()} />

      {/* Main Content Layout */}
      <main className="relative z-10">
        {/* Hero Section */}
        <HeroSection
          onStartProject={() => handleOpenQuote()}
          onExploreServices={handleExploreServices}
        />

        {/* Infinite Scrolling Feature Marquee */}
        <FeatureMarquee />

        {/* 7 Services Bento Grid */}
        <ServicesBento onSelectService={(service) => setSelectedService(service)} />

        {/* Video Showcase Section with Original Nutcrackers Gig Video */}
        <VideoShowcase />

        {/* Interactive AI Micro-Demo (Agents, Automation, Data Science, Data Analysis) */}
        <InteractiveAIDemo />

        {/* Why Choose Nutcrackers */}
        <WhyNutcrackers />

        {/* Selected Work & Portfolio Showcase */}
        <PortfolioSection onInquireService={(serviceName) => handleOpenQuote(serviceName)} />

        {/* 4-Step Methodology & Process */}
        <ProcessSection />

        {/* Authentic Client Standards & Trust Guarantees */}
        <TestimonialsSection />

        {/* High-Impact Final Call to Action */}
        <CTASection
          onStartProject={() => handleOpenQuote()}
          onContact={() => handleOpenQuote()}
        />

        {/* Contact and Lead Generation Form */}
        <ContactSection initialService={quoteService} />
      </main>

      {/* Multi-Column Footer with Business Card Contact Details */}
      <Footer onSelectService={(service) => handleOpenQuote(service)} />

      {/* Service Detail Modal */}
      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onSelectServiceForQuote={(srv) => handleOpenQuote(srv)}
      />

      {/* Persistent WhatsApp Floating Button */}
      <WhatsAppFloat />
    </div>
  );
}

export default App;
