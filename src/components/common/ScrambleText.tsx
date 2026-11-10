import React, { useEffect, useState, useRef } from 'react';

interface ScrambleTextProps {
  text: string;
  className?: string;
  scrambleSpeed?: number;
  revealSpeed?: number;
  triggerOnView?: boolean;
}

const CHARS = 'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz0123456789!<>-_\\/[]{}—=+*^?#_';

export const ScrambleText: React.FC<ScrambleTextProps> = ({
  text,
  className = '',
  scrambleSpeed = 35,
  revealSpeed = 65,
  triggerOnView = true,
}) => {
  const [displayText, setDisplayText] = useState(text);
  const [isScrambling, setIsScrambling] = useState(false);
  const elementRef = useRef<HTMLSpanElement>(null);
  const hasTriggered = useRef(false);

  useEffect(() => {
    // Check user preference for reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setDisplayText(text);
      return;
    }

    const startScramble = () => {
      if (isScrambling) return;
      setIsScrambling(true);

      let iteration = 0;
      const totalChars = text.length;

      const interval = setInterval(() => {
        setDisplayText(() =>
          text
            .split('')
            .map((char, index) => {
              if (char === ' ' || char === '\n') return char;
              if (index < iteration) {
                return text[index];
              }
              return CHARS[Math.floor(Math.random() * CHARS.length)];
            })
            .join('')
        );

        if (iteration >= totalChars) {
          clearInterval(interval);
          setDisplayText(text);
          setIsScrambling(false);
        }

        iteration += 1 / (revealSpeed / scrambleSpeed);
      }, scrambleSpeed);
    };

    if (!triggerOnView) {
      startScramble();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasTriggered.current) {
            hasTriggered.current = true;
            startScramble();
          }
        });
      },
      { threshold: 0.2 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [text, scrambleSpeed, revealSpeed, triggerOnView, isScrambling]);

  return (
    <span ref={elementRef} className={`inline-block font-sans ${className}`} aria-label={text}>
      {displayText}
    </span>
  );
};
