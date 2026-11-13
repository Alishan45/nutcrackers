import React, { useState, useEffect } from 'react';
import { NutcrackersLogo } from './NutcrackersLogo';
import { Menu, X, ArrowUpRight, MessageSquare, BookOpen } from 'lucide-react';

interface NavbarProps {
  onOpenQuote: () => void;
  isHidden?: boolean;
  currentPath?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuote, isHidden = false, currentPath = '/' }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const isHomePage = currentPath === '/' || currentPath === '';

  useEffect(() => {
    if (isHidden) {
      setMobileMenuOpen(false);
    }
  }, [isHidden]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      if (!isHomePage) return;

      const sections = ['home', 'services', 'showcase', 'demo', 'work', 'about', 'team', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage]);

  const navLinks = [
    { name: 'Home', href: isHomePage ? '#home' : '/', id: 'home' },
    { name: 'Services', href: isHomePage ? '#services' : '/#services', id: 'services' },
    { name: 'Showcase', href: isHomePage ? '#showcase' : '/#showcase', id: 'showcase' },
    { name: 'AI Demo', href: isHomePage ? '#demo' : '/#demo', id: 'demo' },
    { name: 'Our Work', href: isHomePage ? '#work' : '/#work', id: 'work' },
    { name: 'Leadership', href: isHomePage ? '#team' : '/#team', id: 'team' },
    { name: 'Blog', href: '/blog', id: 'blog' },
    { name: 'Contact', href: isHomePage ? '#contact' : '/#contact', id: 'contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4 sm:pt-6 transition-all duration-300 ease-in-out ${
        isHidden 
          ? '-translate-y-32 opacity-0 pointer-events-none invisible' 
          : 'translate-y-0 opacity-100 visible'
      }`}
      aria-hidden={isHidden ? 'true' : undefined}
    >
      <nav 
        className={`w-full max-w-7xl mx-auto flex items-center justify-between px-3.5 sm:px-6 py-2.5 sm:py-3.5 rounded-full transition-all duration-300 border ${
          scrolled 
            ? 'bg-[#090A0F]/90 backdrop-blur-xl border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.6)]' 
            : 'bg-[#090A0F]/60 backdrop-blur-md border-white/[0.08]'
        }`}
        aria-label="Main Navigation"
      >
        {/* Brand Logo */}
        <a href="/" className="focus:outline-none shrink-0" aria-label="Nutcrackers Home">
          <NutcrackersLogo size="sm" />
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-1 bg-white/[0.025] border border-white/[0.06] rounded-full px-3 py-1.5 backdrop-blur-md">
          {navLinks.map((link) => {
            const isBlogLink = link.id === 'blog';
            const isActive = isBlogLink 
              ? currentPath.startsWith('/blog') 
              : isHomePage && activeSection === link.id;

            return (
              <a
                key={link.id}
                href={link.href}
                className={`relative px-3.5 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${
                  isActive
                    ? 'text-white bg-white/10 shadow-sm'
                    : 'text-gray-400 hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-brand-teal rounded-full shadow-[0_0_6px_#2DD4BF]" />
                )}
              </a>
            );
          })}
        </div>

        {/* Right Action Area */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* Direct WhatsApp Callout */}
          <a
            href="https://wa.me/923125355078?text=Hello%20Nutcrackers%2C%20I%20am%20interested%20in%20your%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 sm:py-2 text-xs font-medium text-gray-300 hover:text-white bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 rounded-full transition-all duration-200"
            title="Chat directly on WhatsApp"
          >
            <MessageSquare className="w-3.5 h-3.5 text-brand-teal" />
            <span className="hidden md:inline">+92 312 5355078</span>
            <span className="md:hidden">WhatsApp</span>
          </a>

          {/* Quick Quote Action Button */}
          <button
            onClick={onOpenQuote}
            className="group relative inline-flex items-center gap-1 px-3 sm:px-4 py-1.5 sm:py-2 text-[11px] sm:text-xs font-semibold rounded-full overflow-hidden text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-600 bg-[length:200%_auto] hover:bg-right transition-all duration-300 shadow-[0_0_16px_rgba(168,85,247,0.3)] hover:shadow-[0_0_24px_rgba(168,85,247,0.5)] border border-purple-400/30 cursor-pointer"
          >
            <span>Quote</span>
            <ArrowUpRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>

          {/* Mobile & Tablet Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 sm:p-2 text-gray-300 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 rounded-full focus:outline-none lg:hidden cursor-pointer flex items-center justify-center transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-purple-300" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-4 top-20 bg-[#0D0E16]/95 backdrop-blur-2xl border border-white/10 rounded-2xl p-5 shadow-2xl flex flex-col gap-3 animate-in fade-in slide-in-from-top-4 duration-200 z-50">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                  (link.id === 'blog' && currentPath.startsWith('/blog')) || (isHomePage && activeSection === link.id)
                    ? 'text-white bg-white/10 font-semibold'
                    : 'text-gray-300 hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-white/10 flex flex-col gap-2.5">
            <a
              href="https://wa.me/923125355078?text=Hello%20Nutcrackers%2C%20I%20am%20interested%20in%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-2.5 text-xs font-medium text-white bg-white/[0.04] border border-white/10 rounded-xl"
            >
              <MessageSquare className="w-4 h-4 text-brand-teal" />
              <span>WhatsApp: +92 312 5355078</span>
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuote();
              }}
              className="w-full py-3 text-xs font-bold text-white bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl shadow-lg flex items-center justify-center gap-2"
            >
              <span>Get a Free Quote</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
