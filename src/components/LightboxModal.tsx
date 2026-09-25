import React, { useEffect, useState } from 'react';
import { X, ZoomIn, ZoomOut, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { type ChapterImage } from '../data/chaptersData';

interface LightboxModalProps {
  isOpen: boolean;
  images: ChapterImage[];
  currentIndex: number;
  chapterTitleAr: string;
  chapterTitleEn: string;
  lang: 'ar' | 'en';
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  isOpen,
  images,
  currentIndex,
  chapterTitleAr,
  chapterTitleEn,
  lang,
  onClose,
  onNext,
  onPrev,
}) => {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    setScale(1);
  }, [currentIndex, isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') lang === 'ar' ? onPrev() : onNext();
      if (e.key === 'ArrowLeft') lang === 'ar' ? onNext() : onPrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onNext, onPrev, onClose, lang]);

  if (!isOpen || images.length === 0) return null;

  const currentImg = images[currentIndex] || images[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl animate-in fade-in duration-300">
      {/* Top Bar */}
      <div className="absolute top-0 left-0 right-0 p-4 md:p-6 flex items-center justify-between border-b border-[#D8B26E]/20 bg-black/40 backdrop-blur-md z-10">
        <div className="flex items-center gap-3">
          <span className="text-[#D8B26E] text-xs font-mono uppercase tracking-widest px-2.5 py-1 rounded border border-[#D8B26E]/40 bg-[#4A0E17]/50">
            VIV ARCHITECTURE VIEWER
          </span>
          <h4 className="text-white text-sm md:text-base font-serif tracking-wide hidden sm:block">
            {lang === 'ar' ? chapterTitleAr : chapterTitleEn}
          </h4>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-[#EBE3D5]/70 text-xs font-mono mr-2">
            {currentIndex + 1} / {images.length}
          </span>
          
          <button
            onClick={() => setScale(s => Math.min(s + 0.3, 2.5))}
            className="p-2 rounded-full hover:bg-white/10 text-white/80 hover:text-white transition-colors"
            title="Zoom In"
          >
            <ZoomIn className="w-5 h-5" />
          </button>
          
          <button
            onClick={() => setScale(s => Math.max(s - 0.3, 0.7))}
            className="p-2 rounded-full hover:bg-white/10 text-white/80 hover:text-white transition-colors"
            title="Zoom Out"
          >
            <ZoomOut className="w-5 h-5" />
          </button>

          <button
            onClick={() => setScale(1)}
            className="p-2 rounded-full hover:bg-white/10 text-white/80 hover:text-white transition-colors"
            title="Reset Scale"
          >
            <Maximize2 className="w-5 h-5" />
          </button>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-[#4A0E17]/80 hover:bg-[#631221] text-white border border-[#D8B26E]/40 transition-colors ml-2"
            title="Close (Esc)"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main Image Container */}
      <div className="relative w-full h-full flex items-center justify-center p-4 md:p-12 overflow-hidden">
        <div
          className="transition-transform duration-200 ease-out max-w-full max-h-[85vh] flex items-center justify-center"
          style={{ transform: `scale(${scale})` }}
        >
          <img
            src={currentImg.path}
            alt={currentImg.captionEn}
            className="max-h-[80vh] max-w-[92vw] object-contain rounded-lg shadow-2xl border border-[#D8B26E]/30"
          />
        </div>

        {/* Navigation Arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={onPrev}
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 hover:bg-[#4A0E17] text-white border border-[#D8B26E]/40 backdrop-blur-md transition-all duration-200 hover:scale-110"
              title="Previous Image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={onNext}
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 hover:bg-[#4A0E17] text-white border border-[#D8B26E]/40 backdrop-blur-md transition-all duration-200 hover:scale-110"
              title="Next Image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </>
        )}
      </div>

      {/* Bottom Caption Bar */}
      <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 bg-gradient-to-t from-black via-black/80 to-transparent border-t border-[#D8B26E]/20 text-center">
        <p className="text-[#F3ECE2] text-sm md:text-base font-medium max-w-3xl mx-auto">
          {lang === 'ar' ? currentImg.captionAr : currentImg.captionEn}
        </p>
        <p className="text-[#D8B26E]/70 text-xs font-mono mt-1">
          VIV CROISSANTS DESIGN ARCHIVE • ARCHITECTURAL HIGH-RES SPECIFICATION
        </p>
      </div>
    </div>
  );
};
