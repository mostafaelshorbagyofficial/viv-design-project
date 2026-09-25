import React from 'react';
import { Maximize2, Layers, Sparkles } from 'lucide-react';
import { type ChapterData, type ChapterImage } from '../data/chaptersData';
import { MaterialPaletteInspector } from './MaterialPaletteInspector';
import { SpatialFlowDiagram } from './SpatialFlowDiagram';
import { LightingSimulation } from './LightingSimulation';

interface ChapterSectionProps {
  chapter: ChapterData;
  lang: 'ar' | 'en';
  onImageClick: (images: ChapterImage[], index: number, titleAr: string, titleEn: string) => void;
}

export const ChapterSection: React.FC<ChapterSectionProps> = ({ chapter, lang, onImageClick }) => {
  return (
    <section
      id={`chapter-${chapter.id}`}
      className="relative py-20 md:py-28 px-4 sm:px-6 lg:px-12 border-b border-[#D8B26E]/15 scroll-mt-20 overflow-hidden"
    >
      {/* Subtle Background Glow */}
      <div className="absolute top-1/3 -left-32 w-80 h-80 bg-[#4A0E17]/20 rounded-full blur-[120px] pointer-events-none -z-0" />
      <div className="absolute bottom-10 -right-32 w-96 h-96 bg-[#D8B26E]/05 rounded-full blur-[100px] pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Chapter Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-6 border-b border-[#D8B26E]/20">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="text-sm font-mono font-bold text-[#D8B26E] px-3 py-1 rounded-full border border-[#D8B26E]/40 bg-[#360810]">
                CHAPTER {chapter.chapterNumberStr}
              </span>
              <span className="text-xs text-[#EBE3D5]/60 font-mono tracking-widest uppercase">
                {lang === 'ar' ? chapter.categoryAr : chapter.categoryEn}
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#F9F6F0] tracking-tight leading-tight">
              {lang === 'ar' ? chapter.titleAr : chapter.titleEn}
            </h2>

            <p className="text-base sm:text-lg md:text-xl text-[#E5C384] font-light mt-3 max-w-3xl">
              {lang === 'ar' ? chapter.taglineAr : chapter.taglineEn}
            </p>
          </div>

          <div className="hidden lg:flex flex-col items-end text-end">
            <span className="text-[11px] font-mono text-[#D8B26E] uppercase tracking-widest">
              VIV ARCHITECTURAL ARCHIVE
            </span>
            <span className="text-xs text-[#EBE3D5]/60 mt-0.5">
              Ref: CH-{chapter.chapterNumberStr}-SPEC
            </span>
          </div>
        </div>

        {/* HERO IMAGE GALLERY (LARGE EDITORIAL VISUAL COMPOSITIONS) */}
        {chapter.images.length > 0 && (
          <div className="mb-14">
            {chapter.images.length === 1 ? (
              /* Single Hero Image: Full Wide Cinema Presentation */
              <div
                onClick={() => onImageClick(chapter.images, 0, chapter.titleAr, chapter.titleEn)}
                className="group relative rounded-2xl md:rounded-3xl overflow-hidden border-2 border-[#D8B26E]/40 shadow-2xl bg-[#1C0509] cursor-pointer"
              >
                <div className="aspect-[16/9] md:aspect-[21/9] w-full overflow-hidden">
                  <img
                    src={chapter.images[0].path}
                    alt={chapter.images[0].captionEn}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent flex flex-col justify-end p-6 md:p-8 transition-opacity">
                  <div className="flex items-center justify-between">
                    <p className="text-[#F9F6F0] font-medium text-sm md:text-base max-w-2xl">
                      {lang === 'ar' ? chapter.images[0].captionAr : chapter.images[0].captionEn}
                    </p>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#4A0E17]/90 text-[#D8B26E] border border-[#D8B26E]/40 text-xs font-mono group-hover:bg-[#631221] transition-colors">
                      <Maximize2 className="w-3.5 h-3.5" />
                      <span className="hidden sm:inline">{lang === 'ar' ? 'تكبير الصورة' : 'Inspect High-Res'}</span>
                    </span>
                  </div>
                </div>
              </div>
            ) : chapter.images.length === 2 ? (
              /* Dual Composition: Side-by-Side Architectural Pair */
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {chapter.images.map((img, idx) => (
                  <div
                    key={img.id}
                    onClick={() => onImageClick(chapter.images, idx, chapter.titleAr, chapter.titleEn)}
                    className="group relative rounded-2xl overflow-hidden border-2 border-[#D8B26E]/30 shadow-xl bg-[#1C0509] cursor-pointer"
                  >
                    <div className="aspect-[4/3] w-full overflow-hidden">
                      <img
                        src={img.path}
                        alt={img.captionEn}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-4 md:p-5 bg-[#230308]/90 border-t border-[#D8B26E]/20 flex items-center justify-between">
                      <p className="text-xs md:text-sm text-[#F3ECE2] font-medium line-clamp-2">
                        {lang === 'ar' ? img.captionAr : img.captionEn}
                      </p>
                      <Maximize2 className="w-4 h-4 text-[#D8B26E] shrink-0 ms-2 opacity-70 group-hover:opacity-100" />
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              /* Triple Composition: Hero Leading + Dual Supporting */
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div
                  onClick={() => onImageClick(chapter.images, 0, chapter.titleAr, chapter.titleEn)}
                  className="lg:col-span-2 group relative rounded-2xl overflow-hidden border-2 border-[#D8B26E]/40 shadow-2xl bg-[#1C0509] cursor-pointer"
                >
                  <div className="aspect-[16/10] w-full overflow-hidden">
                    <img
                      src={chapter.images[0].path}
                      alt={chapter.images[0].captionEn}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4 md:p-6 bg-[#230308]/90 border-t border-[#D8B26E]/20 flex items-center justify-between">
                    <p className="text-xs md:text-sm text-[#F3ECE2] font-medium">
                      {lang === 'ar' ? chapter.images[0].captionAr : chapter.images[0].captionEn}
                    </p>
                    <span className="text-xs text-[#D8B26E] font-mono flex items-center gap-1">
                      <Maximize2 className="w-3.5 h-3.5" />
                      {lang === 'ar' ? 'عرض بدقة فائقة' : 'Enlarge'}
                    </span>
                  </div>
                </div>

                <div className="flex flex-col gap-6">
                  {chapter.images.slice(1).map((img, idx) => (
                    <div
                      key={img.id}
                      onClick={() => onImageClick(chapter.images, idx + 1, chapter.titleAr, chapter.titleEn)}
                      className="group relative rounded-2xl overflow-hidden border border-[#D8B26E]/30 shadow-xl bg-[#1C0509] cursor-pointer flex-1"
                    >
                      <div className="aspect-[16/9] w-full overflow-hidden">
                        <img
                          src={img.path}
                          alt={img.captionEn}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          loading="lazy"
                        />
                      </div>
                      <div className="p-3 md:p-4 bg-[#230308]/90 border-t border-[#D8B26E]/20 flex items-center justify-between">
                        <p className="text-xs text-[#F3ECE2] font-medium line-clamp-1">
                          {lang === 'ar' ? img.captionAr : img.captionEn}
                        </p>
                        <Maximize2 className="w-3.5 h-3.5 text-[#D8B26E] shrink-0" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* CUSTOM INTERACTIVE EMBEDS PER CHAPTER */}
        {chapter.id === 2 && <MaterialPaletteInspector lang={lang} />}
        {chapter.id === 12 && <SpatialFlowDiagram lang={lang} />}
        {chapter.id === 13 && <LightingSimulation lang={lang} />}

        {/* DESIGN DOCUMENTATION & DETAILED SPECIFICATIONS (SOURCE OF TRUTH) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left/Main Column: Source Text & Key Features */}
          <div className="lg:col-span-7 space-y-6">
            {/* Source of Truth Original Design Concept */}
            <div className="bg-[#230308]/70 border border-[#D8B26E]/25 rounded-2xl p-6 md:p-8 backdrop-blur-md">
              <div className="flex items-center gap-2 text-xs font-mono text-[#D8B26E] uppercase tracking-wider mb-4 pb-3 border-b border-[#D8B26E]/20">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{lang === 'ar' ? 'التوثيق التصميمي المعتمد' : 'AUTHENTIC DESIGN DOCUMENTATION'}</span>
              </div>

              {/* Formatted Key Design Points */}
              <div className="space-y-3.5 mb-6">
                {(lang === 'ar' ? chapter.keyPointsAr : chapter.keyPointsEn).map((pt, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#D8B26E] mt-2 shrink-0 shadow-[0_0_8px_#D8B26E]" />
                    <p className="text-sm md:text-base text-[#F3ECE2] font-light leading-relaxed">
                      {pt}
                    </p>
                  </div>
                ))}
              </div>

              {/* Architectural Insight Callout */}
              {(chapter.architecturalInsightAr || chapter.architecturalInsightEn) && (
                <div className="p-4 rounded-xl bg-[#360810]/80 border-s-4 border-[#D8B26E] mt-6">
                  <span className="text-[11px] font-mono text-[#D8B26E] uppercase block mb-1">
                    {lang === 'ar' ? 'الرؤية المعمارية' : 'ARCHITECTURAL RATIONALE'}
                  </span>
                  <p className="text-xs md:text-sm text-[#EBE3D5] italic leading-relaxed">
                    "{lang === 'ar' ? chapter.architecturalInsightAr : chapter.architecturalInsightEn}"
                  </p>
                </div>
              )}
            </div>

            {/* Original Source Text Accordion / Card */}
            <div className="bg-[#1C0509]/60 border border-[#D8B26E]/15 rounded-2xl p-5 text-xs text-[#EBE3D5]/80">
              <span className="text-[10px] font-mono text-[#D8B26E] uppercase block mb-2 font-bold">
                {lang === 'ar' ? 'نص الوثيقة الأصلية (Source of Truth):' : 'Original Source Design Text:'}
              </span>
              <pre className="whitespace-pre-wrap font-sans text-xs leading-relaxed text-[#EBE3D5]/90">
                {chapter.rawTextAr}
              </pre>
            </div>
          </div>

          {/* Right Column: Architectural Specifications Matrix */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#2A080E]/80 border border-[#D8B26E]/30 rounded-2xl p-6 md:p-8 shadow-xl backdrop-blur-md">
              <div className="flex items-center gap-2 text-xs font-mono text-[#D8B26E] uppercase tracking-wider mb-6 pb-3 border-b border-[#D8B26E]/20">
                <Layers className="w-3.5 h-3.5" />
                <span>{lang === 'ar' ? 'المواصفات المعمارية الدقيقة' : 'ARCHITECTURAL SPEC MATRIX'}</span>
              </div>

              <div className="divide-y divide-[#D8B26E]/15">
                {chapter.specs.map((sp, idx) => (
                  <div key={idx} className="py-3.5 first:pt-0 last:pb-0 flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs">
                    <span className="text-[#EBE3D5]/70 font-mono">
                      {lang === 'ar' ? sp.labelAr : sp.labelEn}
                    </span>
                    <span className="text-[#F9F6F0] font-semibold text-start sm:text-end">
                      {lang === 'ar' ? sp.valueAr : sp.valueEn}
                    </span>
                  </div>
                ))}
              </div>

              {/* Brand Color Tagging */}
              <div className="mt-6 pt-4 border-t border-[#D8B26E]/20 flex items-center justify-between text-xs">
                <span className="text-[#D8B26E] font-mono text-[11px]">
                  {lang === 'ar' ? 'الطابع البصري:' : 'ATMOSPHERE:'}
                </span>
                <span className="text-[#F3ECE2] font-serif font-medium">
                  {lang === 'ar' ? 'French Brasserie Modern' : 'Modern French Brasserie'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
