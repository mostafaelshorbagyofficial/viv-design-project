import React, { useState } from 'react';
import { Palette, Check } from 'lucide-react';

interface MaterialPaletteInspectorProps {
  lang: 'ar' | 'en';
}

export const MaterialPaletteInspector: React.FC<MaterialPaletteInspectorProps> = ({ lang }) => {
  const [selectedIdx, setSelectedIdx] = useState(0);

  const materials = [
    {
      nameAr: 'البرجندي النبيذي (Burgundy / Wine)',
      nameEn: 'Burgundy / Wine Architectural Hue',
      hex: '#4A0E17',
      rgb: 'rgb(74, 14, 23)',
      categoryAr: 'اللون الأساسي للبراند',
      categoryEn: 'Primary Brand Identifier',
      applicationAr: 'الواجهة الخارجية، تنجيد المخمل، المظلة، وتفاصيل النقوش.',
      applicationEn: 'Exterior facade envelope, plush velvet banquettes, awning, and graphic accents.',
      finishAr: 'Velvet Matt & Architectural Satin',
      finishEn: 'Velvet Matte & Architectural Satin',
    },
    {
      nameAr: 'الكريمي الدافئ (Warm Cream Plaster)',
      nameEn: 'Warm Cream Plaster & Stone',
      hex: '#F9F6F0',
      rgb: 'rgb(249, 246, 240)',
      categoryAr: 'اللون المسيطر على الأسطح',
      categoryEn: 'Dominant Spatial Envelope',
      applicationAr: 'الحوائط، البانوهات الجصية، قوس البراندينج، وتيراتزو الأرضيات.',
      applicationEn: 'Lime-wash textured walls, ceiling panels, signature arch, and terrazzo floor field.',
      finishAr: 'Honed Matte Plaster',
      finishEn: 'Honed Matte Plaster',
    },
    {
      nameAr: 'خشب الجوز الداكن (Dark Walnut Wood)',
      nameEn: 'Dark American Walnut Timber',
      hex: '#2C1E18',
      rgb: 'rgb(44, 30, 24)',
      categoryAr: 'الأعمال الخشبية والكونتر',
      categoryEn: 'Millwork & Cabinetry',
      applicationAr: 'قاعدة كونتر المعجنات، بار القهوة، قوائم الأبواب، وأثاث الجلسات.',
      applicationEn: 'Pastry counter base, coffee bar structure, door frames, and furniture frames.',
      finishAr: 'Oiled Natural Grain Dark Walnut',
      finishEn: 'Oiled Natural Grain Dark Walnut',
    },
    {
      nameAr: 'النحاس المصقول (Brushed Satin Brass)',
      nameEn: 'Brushed Satin Architectural Brass',
      hex: '#D8B26E',
      rgb: 'rgb(216, 178, 110)',
      categoryAr: 'التفاصيل المعدنية الراقية',
      categoryEn: 'Noble Metallic Accents',
      applicationAr: 'إطارات المرايا، إطار فترينا الكرواسون، الرفوف المعلقة، وهياكل الثريات.',
      applicationEn: 'Mirror frames, pastry showcase trims, floating bar shelves, and luminaire stems.',
      finishAr: 'Brushed Satin with Anti-Tarnish Coating',
      finishEn: 'Brushed Satin with Anti-Tarnish Coating',
    },
    {
      nameAr: 'الرخام الفاتح (Honed Light Marble)',
      nameEn: 'Honed Light French Marble',
      hex: '#EBE3D5',
      rgb: 'rgb(235, 227, 213)',
      categoryAr: 'الأسطح الحجرية والكونتر',
      categoryEn: 'Stone Countertops & Tables',
      applicationAr: 'أسطح كونتر العرض، بار القهوة، وطاولات الصالة والتراس الدائرية.',
      applicationEn: 'Pastry counter tops, coffee bar surfaces, round dining tables, and outdoor bistros.',
      finishAr: 'Honed Matte (Non-Reflective)',
      finishEn: 'Honed Matte (Non-Reflective)',
    },
    {
      nameAr: 'الأسود المعماري (Architectural Black)',
      nameEn: 'Architectural Matte Black',
      hex: '#18181B',
      rgb: 'rgb(24, 24, 27)',
      categoryAr: 'مسارات الإضاءة والقواعد',
      categoryEn: 'Track Systems & Fixture Bases',
      applicationAr: 'مسارات السبوتات السقفية، قواعد طاولات البيسترو، وبطاقات الأصناف.',
      applicationEn: 'Ceiling track rails, cast-iron bistro bases, and nomenclature tags.',
      finishAr: 'Matte Powder-Coated Steel',
      finishEn: 'Matte Powder-Coated Steel',
    },
  ];

  const current = materials[selectedIdx];

  return (
    <div className="bg-[#1C0509]/90 border border-[#D8B26E]/30 rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-10 shadow-2xl backdrop-blur-xl my-8">
      {/* Header */}
      <div className="flex items-center justify-between pb-6 border-b border-[#D8B26E]/20 mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#4A0E17] border border-[#D8B26E]/40 flex items-center justify-center text-[#D8B26E]">
            <Palette className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-xl md:text-2xl font-serif font-bold text-[#F9F6F0]">
              {lang === 'ar' ? 'لوحة الخامات والألوان المعمارية' : 'Architectural Material & Color Matrix'}
            </h3>
            <span className="text-xs font-mono text-[#D8B26E]">
              {lang === 'ar' ? 'تناغم أصيل: Burgundy + Cream + Dark Wood + Brass' : 'Harmonious DNA: Burgundy + Cream + Dark Wood + Brass'}
            </span>
          </div>
        </div>

        <span className="hidden sm:inline-block text-xs font-mono text-[#EBE3D5]/60">
          6 SPECIFIED PALETTES
        </span>
      </div>

      {/* Swatches Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-6">
        {materials.map((mat, idx) => (
          <button
            key={mat.hex}
            onClick={() => setSelectedIdx(idx)}
            className={`p-3 rounded-2xl border text-start transition-all duration-200 flex flex-col justify-between h-32 ${
              selectedIdx === idx
                ? 'border-[#D8B26E] ring-2 ring-[#D8B26E]/40 bg-[#360810] shadow-xl scale-[1.03]'
                : 'border-[#D8B26E]/20 bg-[#230308]/60 hover:border-[#D8B26E]/50'
            }`}
          >
            <div className="flex items-center justify-between">
              <div
                className="w-8 h-8 rounded-full border border-white/20 shadow-inner"
                style={{ backgroundColor: mat.hex }}
              />
              {selectedIdx === idx && (
                <Check className="w-4 h-4 text-[#D8B26E]" />
              )}
            </div>
            <div>
              <span className="text-[10px] font-mono text-[#D8B26E] block truncate">
                {mat.hex}
              </span>
              <h5 className="text-xs font-serif font-bold text-[#F9F6F0] line-clamp-1 mt-0.5">
                {lang === 'ar' ? mat.nameAr.split('(')[0] : mat.nameEn.split(' ')[0]}
              </h5>
            </div>
          </button>
        ))}
      </div>

      {/* Selected Swatch Detailed Breakdown */}
      <div className="bg-[#2A080E]/70 border border-[#D8B26E]/20 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-5 w-full md:w-auto">
          <div
            className="w-20 h-20 md:w-24 md:h-24 rounded-2xl border-2 border-[#D8B26E]/50 shadow-2xl shrink-0"
            style={{ backgroundColor: current.hex }}
          />
          <div>
            <div className="inline-block text-[10px] font-mono px-2 py-0.5 rounded bg-[#4A0E17] border border-[#D8B26E]/30 text-[#D8B26E] mb-1">
              {lang === 'ar' ? current.categoryAr : current.categoryEn}
            </div>
            <h4 className="text-lg md:text-xl font-serif font-bold text-[#F9F6F0]">
              {lang === 'ar' ? current.nameAr : current.nameEn}
            </h4>
            <span className="text-xs font-mono text-[#EBE3D5]/70 block mt-0.5">
              HEX: {current.hex} • {current.rgb}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full md:w-auto border-t md:border-t-0 md:border-s border-[#D8B26E]/20 pt-4 md:pt-0 md:ps-6">
          <div>
            <span className="text-[10px] font-mono text-[#D8B26E] uppercase block mb-1">
              {lang === 'ar' ? 'التطبيق المعماري' : 'APPLICATION'}
            </span>
            <p className="text-xs text-[#EBE3D5] leading-relaxed">
              {lang === 'ar' ? current.applicationAr : current.applicationEn}
            </p>
          </div>
          <div>
            <span className="text-[10px] font-mono text-[#D8B26E] uppercase block mb-1">
              {lang === 'ar' ? 'نوع التشطيب' : 'FINISH SPEC'}
            </span>
            <p className="text-xs text-[#F9F6F0] font-medium leading-relaxed">
              {lang === 'ar' ? current.finishAr : current.finishEn}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
