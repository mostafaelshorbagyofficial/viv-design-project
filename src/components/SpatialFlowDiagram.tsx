import React, { useState } from 'react';
import { Navigation, CheckCircle2 } from 'lucide-react';

interface SpatialFlowDiagramProps {
  lang: 'ar' | 'en';
}

export const SpatialFlowDiagram: React.FC<SpatialFlowDiagramProps> = ({ lang }) => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    {
      step: 1,
      titleAr: '1. الوصول والمدخل المركزي (Arrival & Portal)',
      titleEn: '1. Arrival & Central Entrance Portal',
      descAr: 'الوصول عبر المدخل المركزي الزجاجي مع رؤية مباشرة وممتدة لكامل عمق الكافيه نحو قوس البراندينج الخلفي.',
      descEn: 'Arrival through the central glass threshold with an immediate uninterrupted vista extending toward the signature rear arch.',
      zoneAr: 'الواجهة والتراس الخارجي',
      zoneEn: 'Facade & Outdoor Terrace',
    },
    {
      step: 2,
      titleAr: '2. مسرح الكرواسون الذهبي (Pastry Vitrine Showcase)',
      titleEn: '2. Pastry Vitrine Hero Showcase',
      descAr: 'الانجذاب التلقائي نحو فترينا المعجنات الزجاجية الفاخرة على اليمين واستعراض التشكيلات (Classic / Sweet / Savory).',
      descEn: 'Effortless visual magnetism pulling the guest toward the elongated pastry showcase (Classic / Sweet / Savory).',
      zoneAr: 'منطقة العرض والطلب (Ordering Zone)',
      zoneEn: 'Pastry & Ordering Station',
    },
    {
      step: 3,
      titleAr: '3. الطلب والقهوة المختصة (Order & Specialty Coffee)',
      titleEn: '3. Ordering & Artisanal Coffee Bar',
      descAr: 'إتمام الطلب والدفع السلس والتواصل مع الباريستا عند ماكينة الإسبريسو المتصلة بكونتر الرخام.',
      descEn: 'Seamless order placement and pairing with artisanal coffee at the contiguous marble espresso counter.',
      zoneAr: 'بار القهوة الفرنسي (French Coffee Bar)',
      zoneEn: 'French Coffee Bar Workstation',
    },
    {
      step: 4,
      titleAr: '4. الممر الشرياني الفسيح (Main Aisle Circulation)',
      titleEn: '4. Arterial Main Aisle Transition',
      descAr: 'التحرك عبر ممر رئيسي واسع (1.8 - 2.2 م) خالٍ تماماً من الطاولات يضمن انسيابية الحركة حتى في أعلى ساعات الذروة.',
      descEn: 'Smooth transit along an expansive central aisle (1.8m–2.2m clearance) completely free of seating friction.',
      zoneAr: 'الممر الرئيسي (Central Axis)',
      zoneEn: 'Central Circulation Spine',
    },
    {
      step: 5,
      titleAr: '5. الاستقرار في الجلسات وصالات البانكيت (Seating & Banquette Lounge)',
      titleEn: '5. Seating Sanctuary & Banquette Lounge',
      descAr: 'الاستمتاع بالقهوة والكرواسون في طاولات الرخام الدائرية أو مقاعد البانكيت المخملية البرجندي بجوار جدار الشعار والقوس الأيقوني.',
      descEn: 'Settling into round marble tables or lush burgundy velvet banquettes framed by the iconic brand monument.',
      zoneAr: 'الصالة الرئيسية وجدار البراندينج',
      zoneEn: 'Main Seating Hall & VIV Arch',
    },
  ];

  return (
    <div className="bg-[#1C0509]/90 border border-[#D8B26E]/30 rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-10 shadow-2xl backdrop-blur-xl my-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-6 border-b border-[#D8B26E]/20">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-mono text-[#D8B26E] uppercase tracking-widest mb-1">
            <Navigation className="w-3.5 h-3.5" />
            <span>{lang === 'ar' ? 'المخطط التفاعلي لهندسة الحركة' : 'INTERACTIVE CIRCULATION BLUEPRINT'}</span>
          </div>
          <h3 className="text-xl md:text-2xl font-serif font-bold text-[#F9F6F0]">
            {lang === 'ar' ? 'مسار التدفق: Enter → Display → Order → Coffee → Sit' : 'Trajectory Flow: Enter → Display → Order → Coffee → Sit'}
          </h3>
        </div>

        <div className="flex items-center gap-2 bg-[#230308] border border-[#D8B26E]/30 px-3 py-1.5 rounded-full text-xs font-mono text-[#EBE3D5]">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>{lang === 'ar' ? 'نمط التشغيل: High-Volume Café' : 'Mode: High-Volume Operational Flow'}</span>
        </div>
      </div>

      {/* Visual Step Progress Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 my-6">
        {steps.map((st, idx) => (
          <button
            key={st.step}
            onClick={() => setActiveStep(idx)}
            className={`p-3 rounded-xl border text-start transition-all duration-200 ${
              activeStep === idx
                ? 'bg-[#4A0E17] border-[#D8B26E] text-white shadow-lg shadow-[#4A0E17]/50 scale-[1.02]'
                : 'bg-[#230308]/60 border-[#D8B26E]/15 hover:border-[#D8B26E]/40 text-[#EBE3D5]/70'
            }`}
          >
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs font-mono font-bold text-[#D8B26E]">0{st.step}</span>
              {activeStep === idx && <CheckCircle2 className="w-3.5 h-3.5 text-[#D8B26E]" />}
            </div>
            <p className="text-xs font-medium line-clamp-1">
              {lang === 'ar' ? st.titleAr.split('(')[0] : st.titleEn.split('(')[0]}
            </p>
          </button>
        ))}
      </div>

      {/* Active Step Detailed Card */}
      <div className="bg-[#2A080E]/70 border border-[#D8B26E]/20 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex-1">
          <div className="flex items-center gap-2 text-[#D8B26E] text-xs font-mono mb-2">
            <span>{lang === 'ar' ? 'المنطقة المعمارية:' : 'SPATIAL ZONE:'}</span>
            <span className="bg-[#4A0E17] px-2.5 py-0.5 rounded text-white border border-[#D8B26E]/30">
              {lang === 'ar' ? steps[activeStep].zoneAr : steps[activeStep].zoneEn}
            </span>
          </div>
          <h4 className="text-lg md:text-xl font-serif font-bold text-[#F9F6F0] mb-3">
            {lang === 'ar' ? steps[activeStep].titleAr : steps[activeStep].titleEn}
          </h4>
          <p className="text-sm md:text-base text-[#EBE3D5]/90 leading-relaxed font-light">
            {lang === 'ar' ? steps[activeStep].descAr : steps[activeStep].descEn}
          </p>
        </div>

        <div className="flex flex-col gap-2 min-w-[200px] w-full md:w-auto">
          <div className="bg-[#1C0509] border border-[#D8B26E]/20 p-4 rounded-xl text-center">
            <span className="text-[11px] font-mono text-[#D8B26E] uppercase block mb-1">
              {lang === 'ar' ? 'فصل مسارات الخدمة' : 'SERVICE ISOLATION'}
            </span>
            <span className="text-xs text-[#F3ECE2] font-medium block">
              {lang === 'ar' ? 'طاقم العمل والتحضير معزول تماماً' : '100% Back-of-House Segregation'}
            </span>
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => setActiveStep((s) => (s > 0 ? s - 1 : steps.length - 1))}
              className="flex-1 py-2 rounded-lg bg-[#360810] hover:bg-[#4A0E17] text-[#EBE3D5] text-xs border border-[#D8B26E]/20 transition-colors"
            >
              {lang === 'ar' ? 'السابق' : 'Previous'}
            </button>
            <button
              onClick={() => setActiveStep((s) => (s < steps.length - 1 ? s + 1 : 0))}
              className="flex-1 py-2 rounded-lg bg-[#4A0E17] hover:bg-[#631221] text-white text-xs font-semibold border border-[#D8B26E]/40 transition-colors"
            >
              {lang === 'ar' ? 'المرحلة التالية' : 'Next Step'}
            </button>
          </div>
        </div>
      </div>

      {/* Core Rules Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6 pt-6 border-t border-[#D8B26E]/15 text-xs text-[#EBE3D5]/80">
        <div className="flex items-start gap-2.5">
          <div className="w-5 h-5 rounded-full bg-[#4A0E17] border border-[#D8B26E]/40 flex items-center justify-center shrink-0 mt-0.5 text-[#D8B26E] font-bold text-[10px]">
            1
          </div>
          <div>
            <strong className="text-white block font-medium">
              {lang === 'ar' ? 'انسيابية مطلقة للممر' : 'Zero Aisle Obstruction'}
            </strong>
            <p className="text-[11px] text-[#EBE3D5]/60 mt-0.5">
              {lang === 'ar' ? 'منع أي طاولات في مسار الحركة لمنع التكدس.' : 'Strict clearance policy ensuring unhindered guest movement.'}
            </p>
          </div>
        </div>

        <div className="flex items-start gap-2.5">
          <div className="w-5 h-5 rounded-full bg-[#4A0E17] border border-[#D8B26E]/40 flex items-center justify-center shrink-0 mt-0.5 text-[#D8B26E] font-bold text-[10px]">
            2
          </div>
          <div>
            <strong className="text-white block font-medium">
              {lang === 'ar' ? 'محطة القهوة بجوار الطلب' : 'Flanked Coffee Bar'}
            </strong>
            <p className="text-[11px] text-[#EBE3D5]/60 mt-0.5">
              {lang === 'ar' ? 'تسهيل عمل الباريستا وسرعة التسليم دون مقاطعة العملاء.' : 'Direct adjacency allowing fast barista pickup without crossover.'}
            </p>
          </div>
        </div>

        <div className="flex items-start gap-2.5">
          <div className="w-5 h-5 rounded-full bg-[#4A0E17] border border-[#D8B26E]/40 flex items-center justify-center shrink-0 mt-0.5 text-[#D8B26E] font-bold text-[10px]">
            3
          </div>
          <div>
            <strong className="text-white block font-medium">
              {lang === 'ar' ? 'سحب الرؤية نحو الجدار الخلفي' : 'Deep Vanishing Point'}
            </strong>
            <p className="text-[11px] text-[#EBE3D5]/60 mt-0.5">
              {lang === 'ar' ? 'القوس المضيء يسحب الضيف لاستكشاف أعماق الكافيه.' : 'The signature illuminated arch pulls sightlines to the rear.'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
