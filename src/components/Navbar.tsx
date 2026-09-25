import React, { useState, useEffect } from 'react';
import { Layers, MonitorPlay, Globe, Menu, X, Compass, Palette } from 'lucide-react';
import { CHAPTERS_DATA, VIV_BRAND_INFO } from '../data/chaptersData';

interface NavbarProps {
  currentView: 'website' | 'presentation';
  onViewChange: (view: 'website' | 'presentation') => void;
  lang: 'ar' | 'en';
  onLangToggle: () => void;
  activeChapterId?: number;
  onChapterSelect?: (id: number) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentView,
  onViewChange,
  lang,
  onLangToggle,
  activeChapterId = 1,
  onChapterSelect,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: number) => {
    setMobileMenuOpen(false);
    if (onChapterSelect) {
      onChapterSelect(id);
    } else {
      const el = document.getElementById(`chapter-${id}`);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#1C0509]/90 backdrop-blur-md border-b border-[#D8B26E]/20 py-3 shadow-xl'
          : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo & Identifier */}
        <div className="flex items-center gap-4">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-3 group"
          >
            <div className="w-10 h-10 rounded-full bg-[#4A0E17] border border-[#D8B26E]/60 flex items-center justify-center text-[#F9F6F0] font-serif font-bold text-lg shadow-md group-hover:scale-105 transition-transform">
              V
            </div>
            <div>
              <span className="text-lg md:text-xl font-serif font-bold tracking-wider text-[#F9F6F0] block leading-none">
                {VIV_BRAND_INFO.name}
              </span>
              <span className="text-[10px] md:text-xs text-[#D8B26E] font-medium tracking-[0.2em] uppercase block mt-1">
                {lang === 'ar' ? 'التصميم والديكور الداخلي' : 'DESIGN & INTERIOR CONCEPT'}
              </span>
            </div>
          </a>
        </div>

        {/* Center / Chapter Indicator (Desktop) */}
        <div className="hidden lg:flex items-center gap-2 bg-[#230308]/80 border border-[#D8B26E]/20 px-3 py-1.5 rounded-full backdrop-blur-sm">
          <span className="text-[#D8B26E] text-xs font-mono font-medium">
            CH {activeChapterId.toString().padStart(2, '0')}/15
          </span>
          <span className="text-[#EBE3D5]/40 text-xs">•</span>
          <span className="text-[#F3ECE2] text-xs font-serif truncate max-w-[200px]">
            {lang === 'ar'
              ? CHAPTERS_DATA.find((c) => c.id === activeChapterId)?.titleAr
              : CHAPTERS_DATA.find((c) => c.id === activeChapterId)?.titleEn}
          </span>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2 md:gap-3">
          {/* Deliverable Switcher: Presentation Deck vs Long-form Website */}
          <div className="flex items-center p-1 rounded-full bg-[#230308]/90 border border-[#D8B26E]/30 text-xs">
            <button
              onClick={() => onViewChange('website')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full transition-all duration-200 font-medium ${
                currentView === 'website'
                  ? 'bg-[#4A0E17] text-[#F9F6F0] shadow-md border border-[#D8B26E]/40'
                  : 'text-[#EBE3D5]/70 hover:text-white'
              }`}
            >
              <Layers className="w-3.5 h-3.5 text-[#D8B26E]" />
              <span className="hidden sm:inline">{lang === 'ar' ? 'الموقع التفاعلي' : 'Design Website'}</span>
            </button>

            <button
              onClick={() => onViewChange('presentation')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full transition-all duration-200 font-medium ${
                currentView === 'presentation'
                  ? 'bg-[#4A0E17] text-[#F9F6F0] shadow-md border border-[#D8B26E]/40'
                  : 'text-[#EBE3D5]/70 hover:text-white'
              }`}
            >
              <MonitorPlay className="w-3.5 h-3.5 text-[#D8B26E]" />
              <span className="hidden sm:inline">{lang === 'ar' ? 'عرض السلايدات' : 'Presentation Deck'}</span>
            </button>
          </div>

          {/* Language Switcher */}
          <button
            onClick={onLangToggle}
            className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-[#230308]/80 hover:bg-[#4A0E17] border border-[#D8B26E]/30 text-xs text-[#F9F6F0] transition-colors"
            title="Toggle Arabic / English"
          >
            <Globe className="w-3.5 h-3.5 text-[#D8B26E]" />
            <span className="font-semibold">{lang === 'ar' ? 'EN' : 'عربي'}</span>
          </button>

          {/* Menu Drawer Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-full bg-[#230308]/80 hover:bg-[#4A0E17] border border-[#D8B26E]/30 text-white transition-colors"
            title="Chapter Index"
          >
            {mobileMenuOpen ? <X className="w-4 h-4 text-[#D8B26E]" /> : <Menu className="w-4 h-4 text-[#D8B26E]" />}
          </button>
        </div>
      </div>

      {/* Chapters Quick Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-[#1A0509]/95 border-b border-[#D8B26E]/30 backdrop-blur-2xl py-6 px-4 md:px-8 shadow-2xl animate-in slide-in-from-top-4 duration-300 max-h-[85vh] overflow-y-auto">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#D8B26E]/20">
              <div className="flex items-center gap-2">
                <Compass className="w-4 h-4 text-[#D8B26E]" />
                <h3 className="text-sm font-semibold uppercase tracking-widest text-[#D8B26E]">
                  {lang === 'ar' ? 'فهرس الفصول المعمارية (15 فصلاً)' : 'ARCHITECTURAL CHAPTERS INDEX (01 - 15)'}
                </h3>
              </div>
              <span className="text-xs text-[#EBE3D5]/60 font-mono">
                {CHAPTERS_DATA.length} {lang === 'ar' ? 'أقسام موثقة' : 'Chapters'}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2.5">
              {CHAPTERS_DATA.map((ch) => (
                <button
                  key={ch.id}
                  onClick={() => handleNavClick(ch.id)}
                  className={`flex flex-col text-left p-3 rounded-xl border transition-all text-start group ${
                    activeChapterId === ch.id
                      ? 'bg-[#4A0E17] border-[#D8B26E] text-white shadow-lg'
                      : 'bg-[#230308]/60 border-[#D8B26E]/15 hover:border-[#D8B26E]/50 hover:bg-[#360810]/70 text-[#EBE3D5]'
                  }`}
                >
                  <div className="flex items-center justify-between w-full mb-1">
                    <span className="text-[10px] font-mono text-[#D8B26E] font-bold">
                      {ch.chapterNumberStr}
                    </span>
                    <span className="text-[9px] text-[#EBE3D5]/50 uppercase tracking-wider">
                      {lang === 'ar' ? ch.categoryAr : ch.categoryEn}
                    </span>
                  </div>
                  <h4 className="text-xs font-serif font-bold group-hover:text-white line-clamp-1">
                    {lang === 'ar' ? ch.titleAr : ch.titleEn}
                  </h4>
                  <p className="text-[10px] text-[#EBE3D5]/70 line-clamp-1 mt-0.5 font-light">
                    {lang === 'ar' ? ch.taglineAr : ch.taglineEn}
                  </p>
                </button>
              ))}
            </div>

            {/* Quick Links */}
            <div className="mt-6 pt-4 border-t border-[#D8B26E]/15 flex flex-wrap items-center justify-between text-xs text-[#EBE3D5]/70 gap-4">
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1.5 text-[#D8B26E]">
                  <Palette className="w-3.5 h-3.5" />
                  {lang === 'ar' ? 'هوية التصميم: Modern French Brasserie' : 'Design DNA: Modern French Brasserie'}
                </span>
              </div>
              <p className="font-mono text-[11px] text-[#D8B26E]/60">
                VIV CROISSANTS ARCHITECTURAL DOSSIER • 2026
              </p>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
