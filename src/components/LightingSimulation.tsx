import React, { useState } from 'react';
import { Sun, Moon, Sparkles, Lamp, Flame } from 'lucide-react';

interface LightingSimulationProps {
  lang: 'ar' | 'en';
}

export const LightingSimulation: React.FC<LightingSimulationProps> = ({ lang }) => {
  const [activeTier, setActiveTier] = useState<number>(0);
  const [timeMode, setTimeMode] = useState<'day' | 'night'>('night');

  const tiers = [
    {
      id: 0,
      nameAr: '1. الإضاءة العامة (General Ambient)',
      nameEn: '1. General Ambient Layer',
      cct: '2700K – 3000K',
      descAr: 'Warm White ناعم ومتجانس وموزع عبر سبوتات سقفية مخفية، يمنح إحساساً بالراحة والسكينة دون أي سطوع مزعج.',
      descEn: 'Warm white ambient wash distributed through concealed recessed downlights, establishing serene warmth without harsh glare.',
      fixturesAr: 'سبوتات سقفية غائرة + إضاءة كوف ناعمة',
      fixturesEn: 'Recessed architectural downlights + soft cove glow',
    },
    {
      id: 1,
      nameAr: '2. الإضاءة الديكورية (Decorative Pendants)',
      nameEn: '2. Decorative Luminaire Tier',
      cct: '2400K – 2700K',
      descAr: 'ثريات Globe Pendants كروية من زجاج الأوبال والنحاس فوق الطاولات، أباليك جدارية (Wall Sconces)، ومصابيح طاولة مصغرة.',
      descEn: 'Opal glass globe pendants with brass stems, wall sconces framing mirrors, and cordless brass table lamps.',
      fixturesAr: 'Globe Pendants + أباليك جدارية + Mini Brass Lamps',
      fixturesEn: 'Opal Globe Pendants + Wall Sconces + Brass Table Lamps',
    },
    {
      id: 2,
      nameAr: '3. إضاءة الكرواسون البطل (Pastry Hero Spotlight)',
      nameEn: '3. Pastry Hero Product Spotlight 🥐',
      cct: '2700K (CRI 95+)',
      descAr: 'أهم إضاءة في المشروع؛ سبوتات مخصصة مركزة على فترينا الكرواسون تبرز هشاشة التوريق الذهبي ولمعان الزبدة الطازجة.',
      descEn: 'The project centerpiece; museum-grade high-CRI spotlights precision-aimed at pastry vitrines to amplify golden flaky textures.',
      fixturesAr: 'Spotlights داخل الفترينا + Black Track Heads موجهة',
      fixturesEn: 'Internal display LEDs + precision adjustable track lights',
    },
    {
      id: 3,
      nameAr: '4. إضاءة البراندينج والأقواس (Branding & Cove Glow)',
      nameEn: '4. Signature Branding & Arch Backlight',
      cct: '2700K Warm Glow',
      descAr: 'Backlight خفيف خلف شعار VIV CROISSANTS، إضاءة هالة حول القوس المعماري، وLED مخفي داخل الرفوف النحاسية.',
      descEn: 'Subtle halo backlighting behind VIV CROISSANTS lettering, perimeter glow around the architectural arch, and shelf LEDs.',
      fixturesAr: 'LED خفي في الرفوف + Hidden Cove Light للقوس',
      fixturesEn: 'Concealed shelf LED ribbons + architectural cove glow',
    },
  ];

  return (
    <div className="bg-[#1C0509]/95 border border-[#D8B26E]/30 rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-10 shadow-2xl backdrop-blur-xl my-8">
      {/* Header with Day/Night Toggle */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-[#D8B26E]/20">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-mono text-[#D8B26E] uppercase tracking-widest mb-1">
            <Lamp className="w-3.5 h-3.5" />
            <span>{lang === 'ar' ? 'نظام المحاكاة الضوئية المعمارية' : 'ARCHITECTURAL LIGHTING SIMULATOR'}</span>
          </div>
          <h3 className="text-xl md:text-2xl font-serif font-bold text-[#F9F6F0]">
            {lang === 'ar' ? 'الطبقات الضوئية الأربع لكافيه VIV' : 'The Four Layered Lighting Masterplan'}
          </h3>
        </div>

        {/* Day / Night Mode Switcher */}
        <div className="flex items-center p-1 rounded-full bg-[#230308] border border-[#D8B26E]/30 text-xs">
          <button
            onClick={() => setTimeMode('day')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full transition-all ${
              timeMode === 'day'
                ? 'bg-[#D8B26E] text-[#230308] font-bold shadow-md'
                : 'text-[#EBE3D5]/70 hover:text-white'
            }`}
          >
            <Sun className="w-3.5 h-3.5" />
            <span>{lang === 'ar' ? 'نهاري (Natural)' : 'Daytime'}</span>
          </button>
          <button
            onClick={() => setTimeMode('night')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full transition-all ${
              timeMode === 'night'
                ? 'bg-[#4A0E17] text-[#F9F6F0] font-bold shadow-md border border-[#D8B26E]/40'
                : 'text-[#EBE3D5]/70 hover:text-white'
            }`}
          >
            <Moon className="w-3.5 h-3.5 text-[#D8B26E]" />
            <span>{lang === 'ar' ? 'ليلي دافئ (Parisian)' : 'Parisian Night'}</span>
          </button>
        </div>
      </div>

      {/* Interactive Lighting Tiers */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 my-6">
        {tiers.map((t) => (
          <button
            key={t.id}
            onClick={() => setActiveTier(t.id)}
            className={`p-4 rounded-xl border text-start transition-all duration-200 ${
              activeTier === t.id
                ? 'bg-[#4A0E17] border-[#D8B26E] text-white shadow-lg shadow-[#D8B26E]/15 scale-[1.02]'
                : 'bg-[#230308]/60 border-[#D8B26E]/15 hover:border-[#D8B26E]/40 text-[#EBE3D5]/70'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#1C0509] border border-[#D8B26E]/30 text-[#D8B26E]">
                {t.cct}
              </span>
              {activeTier === t.id && <Flame className="w-3.5 h-3.5 text-[#D8B26E] animate-pulse" />}
            </div>
            <h4 className="text-xs font-serif font-bold mb-1">
              {lang === 'ar' ? t.nameAr : t.nameEn}
            </h4>
            <p className="text-[11px] text-[#EBE3D5]/60 line-clamp-2">
              {lang === 'ar' ? t.fixturesAr : t.fixturesEn}
            </p>
          </button>
        ))}
      </div>

      {/* Lighting Scene Visualization Card */}
      <div
        className={`rounded-2xl p-6 md:p-8 border transition-all duration-500 relative overflow-hidden ${
          timeMode === 'night'
            ? 'bg-gradient-to-r from-[#2A050A] via-[#1E0407] to-[#120204] border-[#D8B26E]/40 shadow-[0_0_50px_rgba(216,178,110,0.15)]'
            : 'bg-gradient-to-r from-[#3A1E22] via-[#2A1014] to-[#1E080B] border-[#D8B26E]/20'
        }`}
      >
        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-mono text-[#D8B26E] mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>
                {lang === 'ar'
                  ? `مواصفات الطبقة: ${tiers[activeTier].cct}`
                  : `Tier Specification: ${tiers[activeTier].cct}`}
              </span>
            </div>
            <h4 className="text-lg md:text-xl font-serif font-bold text-[#F9F6F0] mb-3">
              {lang === 'ar' ? tiers[activeTier].nameAr : tiers[activeTier].nameEn}
            </h4>
            <p className="text-sm md:text-base text-[#F3ECE2]/90 leading-relaxed font-light">
              {lang === 'ar' ? tiers[activeTier].descAr : tiers[activeTier].descEn}
            </p>
          </div>

          <div className="bg-[#140306]/80 border border-[#D8B26E]/30 p-4 rounded-xl min-w-[220px]">
            <span className="text-[10px] font-mono text-[#D8B26E] uppercase block mb-1">
              {lang === 'ar' ? 'التجهيزات المعتمدة' : 'APPROVED FIXTURES'}
            </span>
            <p className="text-xs text-[#F9F6F0] font-medium leading-normal">
              {lang === 'ar' ? tiers[activeTier].fixturesAr : tiers[activeTier].fixturesEn}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
