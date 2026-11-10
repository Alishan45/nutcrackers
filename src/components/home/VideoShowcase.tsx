import React, { useState, useRef, useEffect } from 'react';
import { 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  Maximize, 
  Minimize, 
  RotateCcw, 
  Sparkles, 
  Film,
  CheckCircle2,
  Video
} from 'lucide-react';
import { ScrambleText } from '../common/ScrambleText';

export const VideoShowcase: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.85);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const [hasStarted, setHasStarted] = useState(false);
  const [videoSrc, setVideoSrc] = useState('/assets/intro-video.mp4');
  const controlsTimeout = useRef<any>(null);

  useEffect(() => {
    const checkMobile = () => {
      const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;
      setVideoSrc(isMobile ? '/assets/intro-video-mobile.mp4' : '/assets/intro-video.mp4');
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
      setHasStarted(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    const newMuted = !isMuted;
    videoRef.current.muted = newMuted;
    setIsMuted(newMuted);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVol = parseFloat(e.target.value);
    setVolume(newVol);
    if (videoRef.current) {
      videoRef.current.volume = newVol;
      videoRef.current.muted = newVol === 0;
      setIsMuted(newVol === 0);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = parseFloat(e.target.value);
    setCurrentTime(time);
    if (videoRef.current) {
      videoRef.current.currentTime = time;
    }
  };

  const toggleFullscreen = () => {
    if (!containerRef.current) return;
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen().catch((err) => console.error(err));
      setIsFullscreen(true);
    } else {
      document.exitFullscreen().catch((err) => console.error(err));
      setIsFullscreen(false);
    }
  };

  const restartVideo = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const formatTime = (seconds: number) => {
    if (isNaN(seconds)) return '00:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleMouseMove = () => {
    setShowControls(true);
    clearTimeout(controlsTimeout.current);
    if (isPlaying) {
      controlsTimeout.current = setTimeout(() => {
        setShowControls(false);
      }, 3000);
    }
  };

  useEffect(() => {
    return () => clearTimeout(controlsTimeout.current);
  }, []);

  return (
    <section id="showcase" className="py-24 sm:py-32 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-purple-900/15 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-md mb-4">
            <Film className="w-3.5 h-3.5 text-purple-400" />
            <span className="text-xs font-mono text-gray-300 uppercase tracking-wider">
              Official Production Showcase
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Creativity Meets{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-300 to-brand-teal">
              <ScrambleText text="Technology." />
            </span>
          </h2>

          <p className="mt-4 text-gray-400 text-sm sm:text-base leading-relaxed">
            Experience our official video editing showreel. At Nutcrackers, we fuse cinematic visual pacing, 
            motion graphics, and high-impact sound design with strategic messaging engineered to capture attention and convert.
          </p>
        </div>

        {/* Video Player Presentation Frame */}
        <div 
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={() => isPlaying && setShowControls(false)}
          className="relative rounded-2xl sm:rounded-3xl p-[1px] bg-gradient-to-b from-purple-500/30 via-white/10 to-transparent shadow-[0_25px_80px_-20px_rgba(0,0,0,0.9)] overflow-hidden group"
        >
          <div className="relative rounded-2xl sm:rounded-3xl bg-[#090A0F] overflow-hidden min-h-[310px] xs:min-h-[360px] sm:min-h-[420px] md:min-h-[480px] lg:min-h-[540px] aspect-[4/3.2] xs:aspect-[14/10] sm:aspect-video flex items-center justify-center">
            {/* HTML5 Native Video Tag with FastStart WebP Poster & Adaptive Mobile Source */}
            <video
              ref={videoRef}
              src={videoSrc}
              poster="/assets/intro-video-poster.webp"
              playsInline
              preload="metadata"
              onTimeUpdate={handleTimeUpdate}
              onLoadedMetadata={handleLoadedMetadata}
              onEnded={() => setIsPlaying(false)}
              onClick={togglePlay}
              className="w-full h-full object-cover sm:object-contain cursor-pointer bg-black"
            >
              <source src="/assets/intro-video-mobile.mp4" type="video/mp4" media="(max-width: 768px)" />
              <source src="/assets/intro-video.mp4" type="video/mp4" />
            </video>

            {/* Poster / Play Overlay before start */}
            {!hasStarted && (
              <div 
                onClick={togglePlay}
                className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-transparent flex flex-col items-center justify-center cursor-pointer z-20 group/poster px-4 text-center"
              >
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-brand-teal rounded-full blur-xl opacity-50 group-hover/poster:opacity-80 transition-opacity" />
                  <div className="relative w-16 h-16 xs:w-20 xs:h-20 sm:w-24 sm:h-24 rounded-full bg-white/[0.08] backdrop-blur-xl border border-white/20 flex items-center justify-center text-white shadow-2xl transition-transform duration-300 group-hover/poster:scale-110">
                    <Play className="w-6 h-6 xs:w-8 xs:h-8 sm:w-10 sm:h-10 fill-white translate-x-0.5 text-white" />
                  </div>
                </div>

                <div className="mt-4 sm:mt-6 text-center max-w-md">
                  <span className="inline-block text-[10px] sm:text-xs font-mono uppercase tracking-widest text-brand-teal px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-brand-teal/10 border border-brand-teal/30 mb-2">
                    Official Nutcrackers Showreel
                  </span>
                  <h3 className="text-base sm:text-xl font-bold text-white leading-snug">
                    Click to Play High-Definition Introduction
                  </h3>
                  <p className="text-[11px] sm:text-xs text-gray-400 mt-1">
                    Visual Storytelling · Motion Graphics · Sound Design
                  </p>
                </div>
              </div>
            )}

            {/* Custom Video Controls Bar */}
            <div 
              className={`absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/95 via-black/70 to-transparent p-4 sm:p-6 transition-opacity duration-300 z-30 ${
                showControls || !isPlaying ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}
            >
              {/* Timeline Progress Bar */}
              <div className="relative flex items-center mb-3 group/scrub">
                <input
                  type="range"
                  min="0"
                  max={duration || 100}
                  step="0.1"
                  value={currentTime}
                  onChange={handleSeek}
                  className="w-full h-1.5 sm:h-2 bg-white/20 rounded-lg appearance-none cursor-pointer accent-purple-500 hover:accent-purple-400 focus:outline-none"
                  aria-label="Video scrubber"
                />
              </div>

              {/* Bottom Control Buttons */}
              <div className="flex items-center justify-between text-white">
                <div className="flex items-center gap-3 sm:gap-4">
                  <button
                    onClick={togglePlay}
                    className="p-2 sm:p-2.5 rounded-full bg-white/10 hover:bg-white/20 transition-colors focus:outline-none"
                    aria-label={isPlaying ? 'Pause' : 'Play'}
                  >
                    {isPlaying ? <Pause className="w-4 h-4 fill-white" /> : <Play className="w-4 h-4 fill-white translate-x-0.5" />}
                  </button>

                  <button
                    onClick={restartVideo}
                    className="p-2 rounded-full hover:bg-white/10 text-gray-300 hover:text-white transition-colors focus:outline-none"
                    title="Restart"
                  >
                    <RotateCcw className="w-4 h-4" />
                  </button>

                  {/* Volume Control */}
                  <div className="flex items-center gap-2 group/vol">
                    <button
                      onClick={toggleMute}
                      className="p-2 rounded-full hover:bg-white/10 text-gray-300 hover:text-white transition-colors focus:outline-none"
                      aria-label={isMuted ? 'Unmute' : 'Mute'}
                    >
                      {isMuted || volume === 0 ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                    </button>
                    <input
                      type="range"
                      min="0"
                      max="1"
                      step="0.05"
                      value={isMuted ? 0 : volume}
                      onChange={handleVolumeChange}
                      className="hidden sm:inline-block w-16 h-1 bg-white/20 rounded appearance-none accent-purple-400 cursor-pointer"
                      aria-label="Volume slider"
                    />
                  </div>

                  {/* Timestamp Display */}
                  <div className="text-xs font-mono text-gray-300">
                    <span>{formatTime(currentTime)}</span>
                    <span className="text-gray-500 mx-1">/</span>
                    <span className="text-gray-500">{formatTime(duration)}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="hidden md:inline-block font-mono text-[10px] text-gray-400 px-2 py-0.5 rounded bg-white/[0.05] border border-white/10">
                    Original Nutcrackers Asset
                  </span>
                  
                  <button
                    onClick={toggleFullscreen}
                    className="p-2 rounded-full hover:bg-white/10 text-gray-300 hover:text-white transition-colors focus:outline-none"
                    aria-label="Toggle Fullscreen"
                  >
                    {isFullscreen ? <Minimize className="w-4 h-4" /> : <Maximize className="w-4 h-4" />}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Highlights Grid beneath the video */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] flex items-center gap-3">
            <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0" />
            <span className="text-xs text-gray-300 font-medium">Kinetic Pace & Transitions</span>
          </div>
          <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] flex items-center gap-3">
            <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
            <span className="text-xs text-gray-300 font-medium">Color Grading & Lumetri Precision</span>
          </div>
          <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] flex items-center gap-3">
            <CheckCircle2 className="w-4 h-4 text-brand-amber shrink-0" />
            <span className="text-xs text-gray-300 font-medium">Dynamic Sound & Foley Mastering</span>
          </div>
          <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] flex items-center gap-3">
            <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0" />
            <span className="text-xs text-gray-300 font-medium">4K High-Bitrate Export Pipeline</span>
          </div>
        </div>
      </div>
    </section>
  );
};
