import React, { useState, useEffect } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Maximize,
  Minimize,
  Grid,
  Sparkles,
  Play,
} from 'lucide-react';
import { CHAPTERS_DATA, VIV_BRAND_INFO, type ChapterImage } from '../data/chaptersData';
import { MaterialPaletteInspector } from './MaterialPaletteInspector';
import { SpatialFlowDiagram } from './SpatialFlowDiagram';
import { LightingSimulation } from './LightingSimulation';

interface PresentationModeProps {
  lang: 'ar' | 'en';
  onImageClick: (images: ChapterImage[], index: number, titleAr: string, titleEn: string) => void;
  onExit: () => void;
}

export const PresentationMode: React.FC<PresentationModeProps> = ({
  lang,
  onImageClick,
  onExit,
}) => {
  // Slide 0 = Opening Film Slide; Slides 1..15 = Chapters 1..15
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showGrid, setShowGrid] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [activeImageIdx, setActiveImageIdx] = useState(0);

  const totalSlides = CHAPTERS_DATA.length + 1; // 1 film + 15 chapters = 16 slides

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        lang === 'ar' ? prevSlide() : nextSlide();
      } else if (e.key === 'ArrowLeft') {
        lang === 'ar' ? nextSlide() : prevSlide();
      } else if (e.key === 'Space') {
        nextSlide();
      } else if (e.key === 'Home') {
        setCurrentSlide(0);
      } else if (e.key === 'End') {
        setCurrentSlide(totalSlides - 1);
      } else if (e.key === 'Escape' && showGrid) {
        setShowGrid(false);
      } else if (e.key === 'f' || e.key === 'F') {
        toggleFullscreen();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide, showGrid, lang, totalSlides]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev < totalSlides - 1 ? prev + 1 : 0));
    setActiveImageIdx(0);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : totalSlides - 1));
    setActiveImageIdx(0);
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen?.();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen?.();
      setIsFullscreen(false);
    }
  };

  const isFilmSlide = currentSlide === 0;
  const currentChapter = !isFilmSlide ? CHAPTERS_DATA[currentSlide - 1] : null;

  return (
    <div className="min-h-screen bg-[#120306] text-[#F9F6F0] flex flex-col justify-between select-none relative overflow-hidden">
      {/* Background Decorative Radial Glows */}
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-[#4A0E17]/25 rounded-full blur-[140px] pointer-events-none -z-0" />
      <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] bg-[#D8B26E]/10 rounded-full blur-[140px] pointer-events-none -z-0" />

      {/* Top Presentation Bar */}
      <header className="px-6 py-4 border-b border-[#D8B26E]/20 bg-[#1C0509]/80 backdrop-blur-md flex items-center justify-between z-20">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-[#4A0E17] border border-[#D8B26E]/50 flex items-center justify-center text-xs font-serif font-bold text-[#F9F6F0]">
            V
          </div>
          <div>
            <h2 className="text-sm font-serif font-bold tracking-wider text-[#F9F6F0]">
              VIV CROISSANTS
            </h2>
            <span className="text-[10px] font-mono text-[#D8B26E] uppercase tracking-widest block">
              DESIGN & INTERIOR MONOGRAPH
            </span>
          </div>
        </div>

        {/* Center Slide Number Indicator */}
        <div className="flex items-center gap-2 bg-[#230308] border border-[#D8B26E]/30 px-3 py-1 rounded-full text-xs font-mono">
          <span className="text-[#D8B26E] font-bold">
            SLIDE {currentSlide.toString().padStart(2, '0')}
          </span>
          <span className="text-white/30">/</span>
          <span className="text-white/60">{(totalSlides - 1).toString().padStart(2, '0')}</span>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowGrid(!showGrid)}
            className={`p-2 rounded-lg border transition-colors ${
              showGrid
                ? 'bg-[#4A0E17] border-[#D8B26E] text-white'
                : 'bg-[#230308] border-[#D8B26E]/30 text-[#EBE3D5] hover:bg-[#360810]'
            }`}
            title="Overview Grid (G)"
          >
            <Grid className="w-4 h-4 text-[#D8B26E]" />
          </button>

          <button
            onClick={toggleFullscreen}
            className="p-2 rounded-lg bg-[#230308] border border-[#D8B26E]/30 text-[#EBE3D5] hover:bg-[#360810] transition-colors"
            title="Toggle Fullscreen (F)"
          >
            {isFullscreen ? (
              <Minimize className="w-4 h-4 text-[#D8B26E]" />
            ) : (
              <Maximize className="w-4 h-4 text-[#D8B26E]" />
            )}
          </button>

          <button
            onClick={onExit}
            className="px-3 py-1.5 rounded-lg bg-[#4A0E17] hover:bg-[#631221] border border-[#D8B26E]/40 text-xs font-semibold text-white transition-colors"
          >
            {lang === 'ar' ? 'العودة للموقع' : 'Exit to Website'}
          </button>
        </div>
      </header>

      {/* Main Slide Content Area */}
      <main className="flex-1 flex items-center justify-center p-4 sm:p-8 lg:p-12 relative z-10 overflow-y-auto">
        {isFilmSlide ? (
          /* SLIDE 0: OPENING FILM SLIDE */
          <div className="max-w-5xl w-full text-center space-y-6 animate-in fade-in zoom-in-95 duration-500">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#D8B26E]/40 bg-[#360810]/80">
              <Sparkles className="w-3.5 h-3.5 text-[#D8B26E]" />
              <span className="text-[#D8B26E] text-xs font-mono uppercase tracking-widest">
                {lang === 'ar' ? 'الفيلم المعماري الافتتاحي' : 'ARCHITECTURAL PROLOGUE'}
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif font-bold text-[#F9F6F0]">
              {VIV_BRAND_INFO.name}
            </h1>
            <p className="text-lg sm:text-xl text-[#E5C384] max-w-2xl mx-auto font-light">
              {lang === 'ar' ? VIV_BRAND_INFO.subtitleAr : VIV_BRAND_INFO.subtitle}
            </p>

            {/* Video Player Box */}
            <div className="relative rounded-2xl overflow-hidden border-2 border-[#D8B26E]/50 shadow-2xl bg-black max-w-4xl mx-auto">
              <video
                src={VIV_BRAND_INFO.openingFilm.videoSrc}
                poster={VIV_BRAND_INFO.openingFilm.posterSrc}
                controls
                playsInline
                className="w-full aspect-video object-cover"
              />
            </div>

            <div className="pt-4">
              <button
                onClick={nextSlide}
                className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-[#4A0E17] hover:bg-[#631221] border border-[#D8B26E] text-white font-semibold transition-all shadow-xl hover:scale-105"
              >
                <span>{lang === 'ar' ? 'بدء الفصول المعمارية' : 'PROCEED TO CHAPTER 01'}</span>
                <span>→</span>
              </button>
            </div>
          </div>
        ) : currentChapter ? (
          /* CHAPTER SLIDES 1 TO 15 */
          <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center animate-in fade-in duration-300">
            {/* Left Column: Visual Media & Gallery */}
            <div className="lg:col-span-7 flex flex-col gap-4">
              {currentChapter.images.length > 0 ? (
                <div>
                  <div
                    onClick={() =>
                      onImageClick(
                        currentChapter.images,
                        activeImageIdx,
                        currentChapter.titleAr,
                        currentChapter.titleEn
                      )
                    }
                    className="group relative rounded-2xl overflow-hidden border-2 border-[#D8B26E]/40 shadow-2xl bg-[#1C0509] cursor-pointer aspect-[16/10]"
                  >
                    <img
                      src={currentChapter.images[activeImageIdx]?.path || currentChapter.images[0].path}
                      alt={currentChapter.images[activeImageIdx]?.captionEn || ''}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
                      <p className="text-xs md:text-sm text-[#F9F6F0] font-medium">
                        {lang === 'ar'
                          ? currentChapter.images[activeImageIdx]?.captionAr
                          : currentChapter.images[activeImageIdx]?.captionEn}
                      </p>
                    </div>
                  </div>

                  {/* Thumbnail Selector if multiple images */}
                  {currentChapter.images.length > 1 && (
                    <div className="flex items-center gap-3 mt-3 overflow-x-auto pb-1">
                      {currentChapter.images.map((img, idx) => (
                        <button
                          key={img.id}
                          onClick={() => setActiveImageIdx(idx)}
                          className={`w-20 h-14 rounded-lg overflow-hidden border-2 shrink-0 transition-all ${
                            activeImageIdx === idx
                              ? 'border-[#D8B26E] scale-105 shadow-md'
                              : 'border-white/20 opacity-60 hover:opacity-100'
                          }`}
                        >
                          <img src={img.path} alt="" className="w-full h-full object-cover" />
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ) : currentChapter.id === 12 ? (
                /* Chapter 12: Interactive Circulation Blueprint */
                <SpatialFlowDiagram lang={lang} />
              ) : (
                <div className="p-8 rounded-2xl bg-[#230308] border border-[#D8B26E]/30 text-center">
                  <span className="text-sm text-[#D8B26E]">
                    {lang === 'ar' ? 'مخطط معماري تفاعلي' : 'Architectural Interactive Spec'}
                  </span>
                </div>
              )}

              {/* Embeds on specific slides */}
              {currentChapter.id === 2 && <MaterialPaletteInspector lang={lang} />}
              {currentChapter.id === 13 && <LightingSimulation lang={lang} />}
            </div>

            {/* Right Column: Architectural Content & Specs */}
            <div className="lg:col-span-5 flex flex-col justify-center space-y-5">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-mono font-bold text-[#D8B26E] px-2.5 py-0.5 rounded border border-[#D8B26E]/40 bg-[#360810]">
                    CHAPTER {currentChapter.chapterNumberStr}
                  </span>
                  <span className="text-xs font-mono text-[#EBE3D5]/60 uppercase">
                    {lang === 'ar' ? currentChapter.categoryAr : currentChapter.categoryEn}
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#F9F6F0] leading-tight">
                  {lang === 'ar' ? currentChapter.titleAr : currentChapter.titleEn}
                </h2>
                <p className="text-sm text-[#E5C384] font-light mt-1.5">
                  {lang === 'ar' ? currentChapter.taglineAr : currentChapter.taglineEn}
                </p>
              </div>

              {/* Key Design Points */}
              <div className="bg-[#230308]/90 border border-[#D8B26E]/20 rounded-xl p-5 space-y-2.5">
                {(lang === 'ar' ? currentChapter.keyPointsAr : currentChapter.keyPointsEn)
                  .slice(0, 4)
                  .map((pt, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-[#F3ECE2]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D8B26E] mt-1.5 shrink-0" />
                      <span className="leading-relaxed">{pt}</span>
                    </div>
                  ))}
              </div>

              {/* Specifications Matrix */}
              <div className="bg-[#2A080E]/70 border border-[#D8B26E]/20 rounded-xl p-4 divide-y divide-[#D8B26E]/15 text-xs">
                {currentChapter.specs.map((sp, idx) => (
                  <div key={idx} className="py-2 first:pt-0 last:pb-0 flex justify-between gap-2">
                    <span className="text-[#EBE3D5]/60 font-mono">
                      {lang === 'ar' ? sp.labelAr : sp.labelEn}:
                    </span>
                    <span className="text-[#F9F6F0] font-medium text-end">
                      {lang === 'ar' ? sp.valueAr : sp.valueEn}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : null}
      </main>

      {/* Bottom Navigation Control Footer */}
      <footer className="px-6 py-4 border-t border-[#D8B26E]/20 bg-[#1C0509]/90 backdrop-blur-md flex items-center justify-between z-20">
        <button
          onClick={prevSlide}
          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#230308] hover:bg-[#4A0E17] border border-[#D8B26E]/30 text-xs font-semibold text-white transition-colors"
        >
          <ChevronLeft className="w-4 h-4 text-[#D8B26E]" />
          <span>{lang === 'ar' ? 'الفصل السابق' : 'Previous Slide'}</span>
        </button>

        {/* Timeline Dots */}
        <div className="hidden sm:flex items-center gap-1.5">
          {Array.from({ length: totalSlides }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setCurrentSlide(idx);
                setActiveImageIdx(0);
              }}
              className={`h-2 rounded-full transition-all ${
                currentSlide === idx
                  ? 'w-8 bg-[#D8B26E]'
                  : 'w-2 bg-white/20 hover:bg-white/50'
              }`}
              title={`Slide ${idx}`}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#4A0E17] hover:bg-[#631221] border border-[#D8B26E]/50 text-xs font-semibold text-white transition-colors"
        >
          <span>{lang === 'ar' ? 'الفصل التالي' : 'Next Slide'}</span>
          <ChevronRight className="w-4 h-4 text-[#D8B26E]" />
        </button>
      </footer>

      {/* Slide Overview Grid Drawer Modal */}
      {showGrid && (
        <div className="absolute inset-0 z-50 bg-black/95 backdrop-blur-xl p-6 md:p-12 overflow-y-auto animate-in fade-in duration-200">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between pb-6 border-b border-[#D8B26E]/30 mb-8">
              <div>
                <h3 className="text-xl md:text-2xl font-serif font-bold text-[#F9F6F0]">
                  {lang === 'ar' ? 'فهرس شرائح العرض المعماري' : 'Presentation Slide Deck Overview'}
                </h3>
                <span className="text-xs font-mono text-[#D8B26E]">
                  {totalSlides} ARCHITECTURAL KEYNOTE SLIDES
                </span>
              </div>
              <button
                onClick={() => setShowGrid(false)}
                className="px-4 py-2 rounded-xl bg-[#4A0E17] border border-[#D8B26E] text-white text-xs font-semibold"
              >
                {lang === 'ar' ? 'إغلاق الفهرس' : 'Close Grid'}
              </button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {/* Film Slide Card */}
              <button
                onClick={() => {
                  setCurrentSlide(0);
                  setShowGrid(false);
                }}
                className={`p-3 rounded-xl border text-start flex flex-col justify-between h-40 transition-all ${
                  currentSlide === 0
                    ? 'bg-[#4A0E17] border-[#D8B26E] ring-2 ring-[#D8B26E]'
                    : 'bg-[#230308] border-[#D8B26E]/20 hover:border-[#D8B26E]/60'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-[#D8B26E] font-bold">SLIDE 00</span>
                  <Play className="w-3.5 h-3.5 text-[#D8B26E]" />
                </div>
                <h4 className="text-xs font-serif font-bold text-[#F9F6F0]">
                  {lang === 'ar' ? 'الفيلم المعماري الافتتاحي' : 'Opening Architectural Film'}
                </h4>
                <span className="text-[10px] text-[#EBE3D5]/50">Cinema Prologue</span>
              </button>

              {/* Chapters Cards */}
              {CHAPTERS_DATA.map((ch, idx) => (
                <button
                  key={ch.id}
                  onClick={() => {
                    setCurrentSlide(idx + 1);
                    setShowGrid(false);
                  }}
                  className={`p-3 rounded-xl border text-start flex flex-col justify-between h-40 transition-all ${
                    currentSlide === idx + 1
                      ? 'bg-[#4A0E17] border-[#D8B26E] ring-2 ring-[#D8B26E]'
                      : 'bg-[#230308] border-[#D8B26E]/20 hover:border-[#D8B26E]/60'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-[#D8B26E] font-bold">
                      CH {ch.chapterNumberStr}
                    </span>
                    <span className="text-[9px] font-mono text-[#EBE3D5]/50">
                      {ch.images.length} IMG
                    </span>
                  </div>
                  <h4 className="text-xs font-serif font-bold text-[#F9F6F0] line-clamp-2">
                    {lang === 'ar' ? ch.titleAr : ch.titleEn}
                  </h4>
                  <span className="text-[10px] text-[#EBE3D5]/50 line-clamp-1">
                    {lang === 'ar' ? ch.categoryAr : ch.categoryEn}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
