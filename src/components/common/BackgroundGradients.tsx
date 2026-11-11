import React from 'react';

export const BackgroundGradients: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden transform-gpu" aria-hidden="true">
      {/* Deep Obsidian Base */}
      <div className="absolute inset-0 bg-[#090A0F]" />

      {/* Primary Purple / Indigo Ambient Orb (Top Center/Right) - Pure smooth radial gradient (0 GPU blur cost) */}
      <div 
        className="absolute -top-[18%] left-[15%] w-[900px] h-[900px] rounded-full opacity-35"
        style={{
          background: 'radial-gradient(circle, rgba(168, 85, 247, 0.32) 0%, rgba(99, 102, 241, 0.14) 38%, rgba(9, 10, 15, 0) 70%)'
        }}
      />

      {/* Electric Blue / Teal Ambient Orb (Mid Left) */}
      <div 
        className="absolute top-[30%] -left-[12%] w-[750px] h-[750px] rounded-full opacity-30"
        style={{
          background: 'radial-gradient(circle, rgba(45, 212, 191, 0.28) 0%, rgba(56, 189, 248, 0.12) 40%, rgba(9, 10, 15, 0) 70%)'
        }}
      />

      {/* Subtle Warm Amber / Gold Orb (Mid Right) echoing business card */}
      <div 
        className="absolute top-[58%] -right-[8%] w-[700px] h-[700px] rounded-full opacity-25"
        style={{
          background: 'radial-gradient(circle, rgba(245, 158, 11, 0.22) 0%, rgba(168, 85, 247, 0.10) 45%, rgba(9, 10, 15, 0) 70%)'
        }}
      />

      {/* Bottom Deep Indigo Orb */}
      <div 
        className="absolute -bottom-[12%] left-[25%] w-[800px] h-[800px] rounded-full opacity-30"
        style={{
          background: 'radial-gradient(circle, rgba(79, 70, 229, 0.28) 0%, rgba(13, 14, 22, 0) 70%)'
        }}
      />

      {/* Elegant SVG Topographic / Mathematical Contour Waves from the Business Card */}
      <svg 
        className="absolute top-0 right-0 w-[50vw] max-w-[800px] h-[600px] opacity-[0.07] stroke-brand-gold select-none"
        fill="none" 
        viewBox="0 0 800 600"
      >
        <path d="M100 0 C 250 150, 450 100, 600 300 C 700 450, 750 350, 800 400" strokeWidth="1.2" />
        <path d="M150 0 C 300 170, 500 120, 650 320 C 730 460, 770 380, 800 440" strokeWidth="1.2" />
        <path d="M200 0 C 350 200, 550 140, 700 340 C 760 480, 780 410, 800 480" strokeWidth="1.2" />
        <path d="M250 0 C 400 220, 600 170, 740 370 C 780 490, 790 440, 800 520" strokeWidth="1.2" />
      </svg>

      {/* Left Bottom Teal Contour Lines from the Card */}
      <svg 
        className="absolute bottom-0 left-0 w-[45vw] max-w-[700px] h-[500px] opacity-[0.06] stroke-brand-teal select-none"
        fill="none" 
        viewBox="0 0 700 500"
      >
        <path d="M0 400 C 150 300, 300 420, 500 250 C 620 120, 680 180, 700 100" strokeWidth="1.2" />
        <path d="M0 350 C 170 270, 320 380, 520 220 C 640 100, 690 150, 700 80" strokeWidth="1.2" />
        <path d="M0 300 C 190 240, 340 350, 540 190 C 650 80, 700 120, 700 50" strokeWidth="1.2" />
      </svg>

      {/* Subtle Micro-Grid Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />
    </div>
  );
};
