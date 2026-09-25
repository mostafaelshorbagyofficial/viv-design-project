import React, { useRef, useState } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize, RotateCcw, Sparkles } from 'lucide-react';
import { VIV_BRAND_INFO } from '../data/chaptersData';

interface OpeningVideoHeroProps {
  lang: 'ar' | 'en';
  onExploreClick: () => void;
}

export const OpeningVideoHero: React.FC<OpeningVideoHeroProps> = ({ lang, onExploreClick }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [showControls, setShowControls] = useState(true);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const current = videoRef.current.currentTime;
    const dur = videoRef.current.duration || 1;
    setCurrentTime(current);
    setProgress((current / dur) * 100);
  };

  const handleLoadedMetadata = () => {
    if (!videoRef.current) return;
    setDuration(videoRef.current.duration);
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!videoRef.current) return;
    const seekTime = (parseFloat(e.target.value) / 100) * (videoRef.current.duration || 1);
    videoRef.current.currentTime = seekTime;
    setProgress(parseFloat(e.target.value));
  };

  const handleFullscreen = () => {
    if (!videoRef.current) return;
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
  };

  const restartVideo = () => {
    if (!videoRef.current) return;
    videoRef.current.currentTime = 0;
    videoRef.current.play();
    setIsPlaying(true);
  };

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  return (
    <header className="relative min-h-screen flex flex-col justify-between pt-24 pb-16 px-4 md:px-8 lg:px-12 bg-gradient-to-b from-[#230308] via-[#140407] to-[#0D0204] overflow-hidden">
      {/* Background Decorative Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#4A0E17]/30 rounded-full blur-[140px] pointer-events-none -z-0" />
      <div className="absolute top-10 right-10 w-96 h-96 bg-[#D8B26E]/10 rounded-full blur-[100px] pointer-events-none -z-0" />

      {/* 1. VIV DESIGN INTRO */}
      <div className="max-w-6xl mx-auto w-full text-center relative z-10 pt-4 pb-8">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#D8B26E]/40 bg-[#360810]/70 backdrop-blur-md mb-6 shadow-lg">
          <Sparkles className="w-3.5 h-3.5 text-[#D8B26E]" />
          <span className="text-[#D8B26E] text-xs font-semibold tracking-[0.25em] uppercase">
            {lang === 'ar' ? 'المشروع المعماري والتصميم الداخلي' : 'ARCHITECTURE & INTERIOR CONCEPT'}
          </span>
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif text-[#F9F6F0] tracking-tight leading-[1.1] mb-6 font-bold">
          {VIV_BRAND_INFO.name}
        </h1>

        {/* 2. Opening Visual / Design Statement */}
        <p className="text-lg sm:text-xl md:text-2xl text-[#E5C384] max-w-3xl mx-auto font-light leading-relaxed mb-4">
          {lang === 'ar'
            ? 'مفهوم التصميم المعماري والديكور الداخلي — صياغة الهوية الباريسية المعاصرة وتجربة الفخامة الهادئة'
            : 'The Architecture & Spatial Design Concept — Modern French Brasserie & Quiet Luxury Viennoiserie'}
        </p>

        <p className="text-sm md:text-base text-[#F3ECE2]/80 max-w-2xl mx-auto font-normal leading-relaxed">
          {lang === 'ar'
            ? 'رحلة معمارية شاملة عبر 15 فصلاً تصميمياً توثق أدق تفاصيل الواجهات، توزيع الفضاءات، فترينا الكرواسون، وخامات البرجندي والخشب الداكن والنحاس.'
            : 'An architectural monograph across 15 curated design chapters documenting facade presence, zoning flow, hero pastry vitrines, rich burgundy textiles, and brushed brass.'}
        </p>
      </div>

      {/* 3. REAL VISIBLE VIDEO PLAYER */}
      <div className="max-w-5xl mx-auto w-full relative z-10 my-6">
        <div 
          className="relative rounded-2xl md:rounded-3xl overflow-hidden border-2 border-[#D8B26E]/40 shadow-2xl bg-black group"
          onMouseEnter={() => setShowControls(true)}
          onMouseLeave={() => isPlaying && setShowControls(false)}
        >
          {/* Real HTML5 Video Element */}
          <video
            ref={videoRef}
            src={VIV_BRAND_INFO.openingFilm.videoSrc}
            poster={VIV_BRAND_INFO.openingFilm.posterSrc}
            playsInline
            muted={isMuted}
            onTimeUpdate={handleTimeUpdate}
            onLoadedMetadata={handleLoadedMetadata}
            onEnded={() => setIsPlaying(false)}
            onClick={togglePlay}
            className="w-full aspect-video md:aspect-[16/9] object-cover cursor-pointer"
          />

          {/* Large Center Play Overlay (when paused) */}
          {!isPlaying && (
            <div 
              onClick={togglePlay}
              className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 backdrop-blur-[2px] cursor-pointer transition-all duration-300 hover:bg-black/30"
            >
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-[#4A0E17]/90 border-2 border-[#D8B26E] flex items-center justify-center text-[#F9F6F0] shadow-2xl transition-transform duration-300 group-hover:scale-110 hover:bg-[#631221]">
                <Play className="w-8 h-8 md:w-10 md:h-10 fill-current translate-x-0.5 text-[#D8B26E]" />
              </div>
              <div className="mt-4 px-4 py-1.5 rounded-full bg-black/60 border border-[#D8B26E]/30 text-[#F9F6F0] text-xs md:text-sm font-medium tracking-wider">
                {lang === 'ar' ? 'تشغيل الفيلم المعماري الافتتاحي' : 'PLAY ARCHITECTURAL OPENING FILM'}
              </div>
            </div>
          )}

          {/* Integrated Luxury Video Control Bar */}
          <div
            className={`absolute bottom-0 left-0 right-0 p-4 md:p-6 bg-gradient-to-t from-black/90 via-black/60 to-transparent transition-opacity duration-300 ${
              showControls || !isPlaying ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {/* Scrubber Bar */}
            <div className="relative mb-3 flex items-center">
              <input
                type="range"
                min="0"
                max="100"
                value={progress}
                onChange={handleSeek}
                className="w-full h-1.5 bg-white/20 rounded-lg appearance-none cursor-pointer accent-[#D8B26E]"
              />
            </div>

            {/* Controls Row */}
            <div className="flex items-center justify-between text-white text-xs md:text-sm">
              <div className="flex items-center gap-3">
                <button
                  onClick={togglePlay}
                  className="p-2 rounded-full bg-[#4A0E17]/80 hover:bg-[#631221] border border-[#D8B26E]/40 text-white transition-colors"
                  title={isPlaying ? 'Pause' : 'Play'}
                >
                  {isPlaying ? <Pause className="w-4 h-4 text-[#D8B26E]" /> : <Play className="w-4 h-4 fill-current text-[#D8B26E]" />}
                </button>

                <button
                  onClick={restartVideo}
                  className="p-2 rounded-full hover:bg-white/10 text-white/80 transition-colors hidden sm:block"
                  title="Restart"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>

                <button
                  onClick={toggleMute}
                  className="p-2 rounded-full hover:bg-white/10 text-white/80 transition-colors"
                  title={isMuted ? 'Unmute' : 'Mute'}
                >
                  {isMuted ? <VolumeX className="w-4 h-4 text-amber-300" /> : <Volume2 className="w-4 h-4" />}
                </button>

                <span className="font-mono text-[#EBE3D5]/80 text-xs">
                  {formatTime(currentTime)} / {formatTime(duration)}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-[#D8B26E] text-xs font-mono tracking-widest hidden sm:inline-block">
                  VIV ARCHITECTURAL CINEMA
                </span>
                <button
                  onClick={handleFullscreen}
                  className="p-2 rounded-full hover:bg-white/10 text-white/80 transition-colors"
                  title="Fullscreen"
                >
                  <Maximize className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Video Subtitle & Architectural Insight */}
        <div className="mt-4 flex flex-col sm:flex-row items-center justify-between text-xs md:text-sm text-[#EBE3D5]/70 gap-2 border-b border-[#D8B26E]/15 pb-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>
              {lang === 'ar'
                ? 'الفيلم الافتتاحي لمشروع VIV — استعراض شامل للتصميم الداخلي والمفهوم البصري'
                : 'VIV Architectural Film — Full spatial walkthrough and visual design concept'}
            </span>
          </div>
          <span className="font-mono text-[#D8B26E]">HD 1080P • NATIVE 16:9 • STEREO</span>
        </div>
      </div>

      {/* 4. Start the Design Journey Button / CTA */}
      <div className="relative z-10 text-center pt-6 pb-2">
        <button
          onClick={onExploreClick}
          className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[#4A0E17] via-[#631221] to-[#4A0E17] text-[#F9F6F0] font-semibold text-sm md:text-base border border-[#D8B26E]/60 shadow-[0_0_30px_rgba(216,178,110,0.25)] hover:shadow-[0_0_40px_rgba(216,178,110,0.45)] hover:border-[#D8B26E] transition-all duration-300 transform hover:-translate-y-0.5"
        >
          <span>{lang === 'ar' ? 'بدء الرحلة المعمارية (15 فصلاً)' : 'START THE DESIGN JOURNEY (15 CHAPTERS)'}</span>
          <span className="w-6 h-6 rounded-full bg-[#D8B26E] text-[#230308] flex items-center justify-center text-xs font-bold transition-transform group-hover:translate-x-1">
            ↓
          </span>
        </button>
      </div>
    </header>
  );
};
