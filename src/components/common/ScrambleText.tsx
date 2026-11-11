import React, { useEffect, useState, useRef, useCallback } from 'react';

interface ScrambleTextProps {
  text: string;
  className?: string;
  scrambleSpeed?: number;
  revealSpeed?: number;
  triggerOnView?: boolean;
  replayOnHover?: boolean;
  replayOnTap?: boolean;
  initialDelay?: number;
}

const CHARS = 'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz0123456789!<>-_\\/[]{}—=+*^?#_';

export const ScrambleText: React.FC<ScrambleTextProps> = ({
  text,
  className = '',
  scrambleSpeed = 30,
  revealSpeed = 60,
  triggerOnView = true,
  replayOnHover = true,
  replayOnTap = true,
  initialDelay = 120,
}) => {
  const [displayText, setDisplayText] = useState(text);
  const elementRef = useRef<HTMLSpanElement>(null);
  const intervalRef = useRef<number | null>(null);
  const isScramblingRef = useRef(false);
  const lastTriggeredTime = useRef<number>(0);

  const stopScramble = useCallback(() => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    isScramblingRef.current = false;
    setDisplayText(text);
  }, [text]);

  const startScramble = useCallback(() => {
    if (isScramblingRef.current) return;
    isScramblingRef.current = true;

    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
    }

    let iteration = 0;
    const totalChars = text.length;

    intervalRef.current = window.setInterval(() => {
      setDisplayText(
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
        if (intervalRef.current !== null) {
          clearInterval(intervalRef.current);
          intervalRef.current = null;
        }
        setDisplayText(text);
        isScramblingRef.current = false;
      }

      iteration += 1 / (revealSpeed / scrambleSpeed);
    }, scrambleSpeed);
  }, [text, scrambleSpeed, revealSpeed]);

  const handleTrigger = useCallback(() => {
    const now = Date.now();
    // 500ms cooldown to avoid spamming
    if (now - lastTriggeredTime.current > 500) {
      lastTriggeredTime.current = now;
      startScramble();
    }
  }, [startScramble]);

  useEffect(() => {
    if (!triggerOnView) {
      const timer = window.setTimeout(startScramble, initialDelay);
      return () => {
        window.clearTimeout(timer);
        stopScramble();
      };
    }

    const currentEl = elementRef.current;
    if (!currentEl) return;

    let hasInitiallyFired = false;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const now = Date.now();
            // Fire initially or when re-entering view after at least 3.5 seconds
            if (!hasInitiallyFired || now - lastTriggeredTime.current > 3500) {
              hasInitiallyFired = true;
              lastTriggeredTime.current = now;
              window.setTimeout(startScramble, initialDelay);
            }
          }
        });
      },
      { threshold: 0.05, rootMargin: '40px 0px 40px 0px' }
    );

    observer.observe(currentEl);

    return () => {
      observer.disconnect();
      stopScramble();
    };
  }, [triggerOnView, initialDelay, startScramble, stopScramble]);

  return (
    <span
      ref={elementRef}
      onClick={replayOnTap ? handleTrigger : undefined}
      onTouchStart={replayOnTap ? handleTrigger : undefined}
      onMouseEnter={replayOnHover ? handleTrigger : undefined}
      className={`inline font-sans select-none cursor-pointer transition-opacity duration-200 active:opacity-85 ${className}`}
      aria-label={text}
      title="Tap or hover to replay effect"
    >
      {displayText}
    </span>
  );
};
