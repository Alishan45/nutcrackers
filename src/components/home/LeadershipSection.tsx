import React from 'react';
import { motion } from 'framer-motion';
import { ScrambleText } from '../common/ScrambleText';
import { 
  Users, 
  Mail, 
  MessageSquare, 
  Globe, 
  ShieldCheck, 
  Sparkles, 
  Cpu, 
  ArrowUpRight 
} from 'lucide-react';

interface LeaderProfile {
  name: string;
  designation: string;
  roleBadge: string;
  badgeColor: 'amber' | 'teal';
  image: string;
  imageWebp: string;
  imageAlt: string;
  bio: string;
  responsibilities: string[];
  links: {
    label: string;
    href: string;
    icon: React.ComponentType<{ className?: string }>;
    isExternal?: boolean;
  }[];
}

const LEADERS: LeaderProfile[] = [
  {
    name: 'Ali Shan',
    designation: 'CEO',
    roleBadge: 'Founder & Chief Executive Officer',
    badgeColor: 'amber',
    imageWebp: '/assets/ali-shan-ceo.webp',
    image: '/assets/ali-shan-ceo.jpeg',
    imageAlt: 'Ali Shan — Founder & CEO of Nutcrackers',
    bio: 'Leads agency vision, product strategy, client partnerships, and technical digital solutions architecture. Ali guides Nutcrackers in engineering high-impact digital experiences that bridge cutting-edge technology with commercial performance.',
    responsibilities: [
      'Agency Vision & Strategy',
      'Client Solutions Architecture',
      'Full-Stack & AI Systems Design',
      'Quality & Delivery Standards',
    ],
    links: [
      {
        label: 'Portfolio (alishanai.vercel.app)',
        href: 'https://alishanai.vercel.app',
        icon: Globe,
        isExternal: true,
      },
      {
        label: 'Direct Email',
        href: 'mailto:alishan.cs01@gmail.com',
        icon: Mail,
      },
      {
        label: 'WhatsApp (+92 312 5355078)',
        href: 'https://wa.me/923125355078',
        icon: MessageSquare,
        isExternal: true,
      },
    ],
  },
  {
    name: 'Muzzamil Shabbir',
    designation: 'Co-Founder',
    roleBadge: 'Co-Founder & Chief Technology Officer',
    badgeColor: 'teal',
    imageWebp: '/assets/muzzamil-shabbir-cto.webp',
    image: '/assets/muzzamil-shabbir-cto.jpeg',
    imageAlt: 'Muzzamil Shabbir — Co-Founder & CTO of Nutcrackers',
    bio: 'Directs technology strategy, software engineering standards, infrastructure reliability, and technical research and development. Muzzamil oversees system architectures and ensures every Nutcrackers digital product scales robustly.',
    responsibilities: [
      'Technology & Engineering Direction',
      'Software Architecture & Scalability',
      'AI & Workflow Automation R&D',
      'Technical Infrastructure & Security',
    ],
    links: [
      {
        label: 'Direct Email via Agency',
        href: 'mailto:alishan.cs01@gmail.com?subject=Inquiry%20for%20Muzzamil%20Shabbir%20-%20Nutcrackers',
        icon: Mail,
      },
      {
        label: 'Official Agency Inquiries',
        href: '#contact',
        icon: ArrowUpRight,
      },
    ],
  },
];

export const LeadershipSection: React.FC = () => {
  return (
    <section id="team" className="py-24 sm:py-32 relative overflow-hidden">
      {/* Background radial ambience (pure radial gradient for 120fps scroll) */}
      <div
        className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(88,28,135,0.16) 0%, rgba(9,10,15,0) 70%)' }}
      />
      <div
        className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(19,78,74,0.14) 0%, rgba(9,10,15,0) 70%)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-md mb-4"
          >
            <Users className="w-3.5 h-3.5 text-brand-gold" />
            <span className="text-xs font-mono text-gray-300 uppercase tracking-wider">
              Executive Leadership
            </span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight"
          >
            Meet the Minds Behind{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold via-amber-200 to-brand-teal animate-gradient-text">
              <ScrambleText text="Nutcrackers." />
            </span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-sm sm:text-base text-gray-400 max-w-2xl mx-auto leading-relaxed"
          >
            Driven by creativity, powered by technology, and united by a vision to build meaningful digital experiences.
          </motion.p>
        </div>

        {/* Leadership Profile Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-5xl mx-auto items-stretch">
          {LEADERS.map((leader, idx) => (
            <motion.div
              key={leader.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="group relative rounded-3xl bg-[#0D0E16]/90 border border-white/[0.08] hover:border-purple-500/35 transition-all duration-300 p-6 sm:p-8 flex flex-col justify-between shadow-2xl overflow-hidden hover:shadow-[0_0_35px_rgba(168,85,247,0.12)]"
            >
              {/* Subtle top corner gradient highlight */}
              <div className="absolute top-0 right-0 w-36 h-36 bg-gradient-to-bl from-purple-500/10 via-transparent to-transparent pointer-events-none rounded-tr-3xl" />

              <div>
                {/* Portrait Container */}
                <div className="relative aspect-[4/4.2] sm:aspect-[4/4] w-full rounded-2xl overflow-hidden bg-black/60 border border-white/10 mb-6 shadow-inner">
                  <picture>
                    <source srcSet={leader.imageWebp} type="image/webp" />
                    <img
                      src={leader.image}
                      alt={leader.imageAlt}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                      loading="eager"
                      decoding="async"
                    />
                  </picture>
                  {/* Subtle vignette gradient at bottom of photo */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D0E16] via-transparent to-transparent opacity-60 pointer-events-none" />
                  
                  {/* Badge floating on photo */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold backdrop-blur-md ${
                      leader.badgeColor === 'amber'
                        ? 'bg-amber-950/80 border border-amber-500/40 text-amber-300'
                        : 'bg-teal-950/80 border border-teal-500/40 text-teal-300'
                    }`}>
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>{leader.designation}</span>
                    </span>
                    
                    <span className="text-[10px] font-mono text-gray-300 bg-black/60 px-2.5 py-1 rounded-full border border-white/10 backdrop-blur-md">
                      Verified Leader
                    </span>
                  </div>
                </div>

                {/* Name & Official Title */}
                <div className="mb-4">
                  <div className="text-[11px] font-mono uppercase tracking-widest text-brand-gold mb-1">
                    {leader.roleBadge}
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    {leader.name}
                  </h3>
                </div>

                {/* Biography */}
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-6">
                  {leader.bio}
                </p>

                {/* Focus Areas & Responsibilities */}
                <div className="mb-6">
                  <div className="text-[10px] font-mono uppercase tracking-widest text-gray-400 mb-2.5 flex items-center gap-1.5">
                    <Cpu className="w-3 h-3 text-brand-teal" />
                    <span>Areas of Leadership</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {leader.responsibilities.map((resp, rIdx) => (
                      <span
                        key={rIdx}
                        className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-white/[0.03] border border-white/[0.06] text-gray-300"
                      >
                        {resp}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Direct Verified Links */}
              <div className="pt-5 border-t border-white/[0.06] mt-auto">
                <div className="flex flex-wrap items-center gap-2">
                  {leader.links.map((link, lIdx) => {
                    const Icon = link.icon;
                    return (
                      <a
                        key={lIdx}
                        href={link.href}
                        target={link.isExternal ? '_blank' : undefined}
                        rel={link.isExternal ? 'noopener noreferrer' : undefined}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.08] hover:border-purple-500/40 text-xs font-mono text-gray-300 hover:text-white transition-all group/link"
                        title={link.label}
                      >
                        <Icon className="w-3.5 h-3.5 text-purple-400 group-hover/link:text-brand-teal transition-colors" />
                        <span className="truncate max-w-[200px]">{link.label}</span>
                      </a>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
