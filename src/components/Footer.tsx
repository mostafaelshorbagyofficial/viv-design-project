import React from 'react';
import { Sparkles, ArrowUp, Compass } from 'lucide-react';
import { VIV_BRAND_INFO, CHAPTERS_DATA } from '../data/chaptersData';

interface FooterProps {
  lang: 'ar' | 'en';
  onChapterClick: (id: number) => void;
}

export const Footer: React.FC<FooterProps> = ({ lang, onChapterClick }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#120306] border-t-2 border-[#D8B26E]/30 pt-16 pb-12 px-4 sm:px-6 lg:px-12 text-[#F9F6F0] relative overflow-hidden">
      {/* Background Decorative Ambient Light */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-48 bg-[#4A0E17]/30 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Core Design Principles Recap */}
        <div className="mb-16 pb-12 border-b border-[#D8B26E]/20">
          <div className="flex items-center gap-2 text-xs font-mono text-[#D8B26E] uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{lang === 'ar' ? 'ركائز التصميم المعماري' : 'ARCHITECTURAL CORE PILLARS'}</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#F9F6F0] mb-8">
            {lang === 'ar'
              ? 'فلسفة المكان: الفخامة الهادئة والروح الباريسية المعاصرة'
              : 'Spatial Philosophy: Quiet Luxury & Modern Parisian Grace'}
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VIV_BRAND_INFO.designPrinciples.map((dp, idx) => (
              <div
                key={idx}
                className="bg-[#1C0509]/80 border border-[#D8B26E]/20 rounded-2xl p-5 hover:border-[#D8B26E]/50 transition-colors"
              >
                <span className="text-xs font-mono text-[#D8B26E] font-bold block mb-2">
                  0{idx + 1}
                </span>
                <h4 className="text-sm font-serif font-bold text-[#F9F6F0] mb-2">
                  {lang === 'ar' ? dp.titleAr : dp.titleEn}
                </h4>
                <p className="text-xs text-[#EBE3D5]/80 font-light leading-relaxed">
                  {lang === 'ar' ? dp.descAr : dp.descEn}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Complete 15 Chapters Quick-Jump Matrix */}
        <div className="mb-14">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2 text-xs font-mono text-[#D8B26E] uppercase tracking-wider">
              <Compass className="w-3.5 h-3.5" />
              <span>{lang === 'ar' ? 'فهرس الفصول الـ 15' : '15-CHAPTER ARCHITECTURAL DIRECTORY'}</span>
            </div>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-xs text-[#D8B26E] hover:text-white font-mono transition-colors"
            >
              <span>{lang === 'ar' ? 'العودة للأعلى' : 'Back to Top'}</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {CHAPTERS_DATA.map((ch) => (
              <button
                key={ch.id}
                onClick={() => onChapterClick(ch.id)}
                className="p-3 rounded-xl bg-[#1C0509] hover:bg-[#360810] border border-[#D8B26E]/15 hover:border-[#D8B26E]/40 text-start transition-all group"
              >
                <span className="text-[10px] font-mono text-[#D8B26E] block mb-0.5">
                  CH {ch.chapterNumberStr}
                </span>
                <h5 className="text-xs font-serif font-medium text-[#EBE3D5] group-hover:text-white line-clamp-1">
                  {lang === 'ar' ? ch.titleAr : ch.titleEn}
                </h5>
              </button>
            ))}
          </div>
        </div>

        {/* Bottom Architectural Credits Bar */}
        <div className="pt-8 border-t border-[#D8B26E]/20 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#EBE3D5]/60">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 rounded-full bg-[#4A0E17] border border-[#D8B26E]/50 flex items-center justify-center text-[10px] font-bold text-[#F9F6F0]">
              V
            </div>
            <span className="font-serif font-bold text-[#F9F6F0] tracking-wider">
              VIV CROISSANTS
            </span>
            <span>•</span>
            <span>{lang === 'ar' ? 'ملف التصميم والديكور الداخلي' : 'Official Architectural Design Dossier'}</span>
          </div>

          <p className="font-mono text-[11px] text-[#D8B26E]/70 text-center">
            QUIET LUXURY • FRENCH BRASSERIE • MODERN ARCHITECTURE • 2026
          </p>
        </div>
      </div>
    </footer>
  );
};
