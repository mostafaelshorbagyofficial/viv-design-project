export interface ChapterImage {
  id: string;
  path: string;
  captionAr: string;
  captionEn: string;
  hero?: boolean;
}

export interface ChapterSpec {
  labelAr: string;
  labelEn: string;
  valueAr: string;
  valueEn: string;
}

export interface ChapterData {
  id: number;
  chapterNumberStr: string;
  titleAr: string;
  titleEn: string;
  categoryAr: string;
  categoryEn: string;
  taglineAr: string;
  taglineEn: string;
  rawTextAr: string;
  summaryAr: string;
  summaryEn: string;
  keyPointsAr: string[];
  keyPointsEn: string[];
  specs: ChapterSpec[];
  images: ChapterImage[];
  colorNotes?: {
    primary: string;
    secondary: string;
    accent: string;
  };
  architecturalInsightAr?: string;
  architecturalInsightEn?: string;
}

export const CHAPTERS_DATA: ChapterData[] = [
  {
    id: 1,
    chapterNumberStr: "01",
    titleAr: "هيكل واقتراح ديزاين البراند",
    titleEn: "Brand Design Architecture & Master Structure",
    categoryAr: "الرؤية والمنهجية",
    categoryEn: "Concept & Framework",
    taglineAr: "المخطط الهيكلي المتكامل لتجربة VIV المعمارية",
    taglineEn: "The Comprehensive Architectural Blueprint of the VIV Experience",
    rawTextAr: `اقتراح شكل ديزاين البراند

1. الواجهة + الـ Entrance
2. Outdoor / Terrace
3. منطقة الـ Ordering
4. Pastry Display
5. Coffee Bar
6. Main Seating Area
7. Banquette Seating
8. الـ Back Wall / VIV Branding
9. الممرات والحركة
10. الإضاءة
11. الأرضيات
12. الأسقف
13. الخامات والألوان
14. الـ Packaging / تفاصيل الديكور`,
    summaryAr: "تأسيس الهيكل الشامل لتصميم كافيه VIV في 14 محوراً رئيسياً، من الواجهة الخارجية وصولاً إلى أدق التفاصيل المعمارية والديكورية.",
    summaryEn: "Establishing the master architectural framework for the VIV café across 14 key design pillars, from the grand exterior facade to bespoke micro-details.",
    keyPointsAr: [
      "تدرج سلس من الواجهة الخارجية والتراس الخارجي إلى قلب الصالة الداخلية.",
      "تنسيق هندسي يربط محطة العرض والطلب (Ordering & Pastry) بالقهوة المختصة.",
      "توزيع مدروس للمقاعد بين الجلسات المفتوحة والـ Banquette المريحة.",
      "تكامل معماري بين الإضاءة، الأرضيات التيراتزو، والأسقف الباريسية.",
      "هوية بصرية متناغمة تعتمد على توازن خامات البرجندي، الخشب الداكن، والنحاس."
    ],
    keyPointsEn: [
      "Seamless progression from the exterior facade and bistro terrace to the interior core.",
      "Architectural alignment connecting the Pastry Hero Display with the artisanal Coffee Bar.",
      "Thoughtfully zoned seating combining open marble tables with plush banquette alcoves.",
      "Integrated harmony across lighting schemes, terrazzo floors, and French coffered ceilings.",
      "Cohesive brand DNA balancing Deep Burgundy, Dark Walnut wood, and brushed brass."
    ],
    specs: [
      { labelAr: "عدد المحاور التصميمية", labelEn: "Design Pillars", valueAr: "14 محوراً متكاملاً", valueEn: "14 Integrated Dimensions" },
      { labelAr: "الطراز المعماري", labelEn: "Architectural Style", valueAr: "Modern French Brasserie", valueEn: "Modern French Brasserie" },
      { labelAr: "الهيكل البصري", labelEn: "Visual Structure", valueAr: "Sequence-Driven Spatial Flow", valueEn: "Sequence-Driven Spatial Flow" },
      { labelAr: "روح التجربة", labelEn: "Atmosphere", valueAr: "Quiet Luxury & Warm Parisian Elegance", valueEn: "Quiet Luxury & Warm Parisian Elegance" }
    ],
    architecturalInsightAr: "تم بناء منهجية التصميم لتكون رحلة حسية ومعمارية مستمرة، حيث يتم استقبال العميل بكتلة معمارية دافئة وتوجيه نظره بشكل فوري ومباشر نحو بطل المكان: الكرواسون الطازج.",
    architecturalInsightEn: "The design methodology is crafted as a continuous sensory and spatial journey, greeting visitors with warm architectural framing and immediately directing focus toward the hero: fresh artisanal croissants.",
    images: [
      {
        id: "ch01-img1",
        path: "/assets/ch01/img_0.jpeg",
        captionAr: "المخطط العام للرؤية المعمارية وتوزيع المناطق الوظيفية",
        captionEn: "Overall architectural vision and functional zoning masterplan",
        hero: true
      },
      {
        id: "ch01-img2",
        path: "/assets/ch01/img_1.jpeg",
        captionAr: "لوحة المزاج العام والتكوين البصري الأولي لهوية VIV",
        captionEn: "Visual moodboard and brand ambiance composition for VIV",
        hero: false
      },
      {
        id: "ch01-img3",
        path: "/assets/ch01/img_2.jpeg",
        captionAr: "التسلسل الفراغي وربط المحاور المعمارية الأربعة عشر",
        captionEn: "Spatial sequence linking all fourteen design dimensions",
        hero: false
      }
    ]
  },
  {
    id: 2,
    chapterNumberStr: "02",
    titleAr: "الـ DNA النهائي والخامات والألوان",
    titleEn: "Brand Design DNA & Material Palette",
    categoryAr: "الهوية والخامات",
    categoryEn: "Identity & Materials",
    taglineAr: "باليتة الألوان والمواد التي تشكل الروح الفرنسية المعاصرة",
    taglineEn: "The Master Materiality & Color Palette Defining Modern French Brasserie",
    rawTextAr: `دي بقى الـDNA النهائي لـVIV:

الألوان

* Burgundy / Wine — اللون الأساسي.
* Cream — اللون المسيطر على الحوائط والأسقف.
* Dark Wood — الكونتر والأثاث.
* Brass — تفاصيل خفيفة جدًا.
* Black — الإضاءة والقواعد والتفاصيل.
* Green — من النباتات فقط.

الخامات

* Marble فاتح.
* Dark Walnut Wood.
* Brass brushed.
* Burgundy Velvet.
* Rattan / Cane.
* Glass.
* Cream textured plaster.
* أرضية Stone/Marble بنقشة هندسية بسيطة.

المهم: مفيش خامة أو لون ياخد البطولة لوحده؛ الـBurgundy + Cream + Wood هم الأساس، والـBrass مجرد accent.

وبكده شكل VIV يبقى French Brasserie واضح جدًا، لكن نظيف ومودرن ومش Traditional تقيل`,
    summaryAr: "صياغة الهوية التأسيسية لخامات وألوان VIV؛ توازن دقيق بين لون البرجندي النبيذي، الكريم الدافئ، خشب الجوز الداكن، مع لمسات نحاسية مطفية دون بهرجة.",
    summaryEn: "Formulation of the foundational VIV material & color DNA; a delicate equilibrium between deep Burgundy Wine, warm Cream, Dark Walnut, and brushed Brass accents.",
    keyPointsAr: [
      "Burgundy / Wine: اللون الأساسي المعبر عن الهوية والأناقة الفاخرة.",
      "Cream: اللون المسيطر على الحوائط والأسقف لإضفاء الاتساع والسكينة.",
      "Dark Wood (Walnut): يمنح دفئاً كلاسيكياً وثباتاً معمارياً للكونتر والأثاث.",
      "Brass Brushed: تفاصيل معدنية دقيقة في الإطارات وقواعد الإضاءة كلمسة فاخرة.",
      "قاعدة ذهبية: لا توجد خامة تنفرد بالبطولة؛ التناغم المشترك هو سر الفخامة الهادئة."
    ],
    keyPointsEn: [
      "Burgundy / Wine: The primary signature hue conveying heritage and quiet luxury.",
      "Warm Cream: Dominant on textured walls and ceilings for spaciousness and calm.",
      "Dark Walnut Wood: Grounds the counters and millwork with timeless warmth.",
      "Brushed Brass: Refined metallic accents on trims, frames, and light fixtures.",
      "Golden Rule: No single finish overpowers; the synergy of textures creates serene luxury."
    ],
    specs: [
      { labelAr: "اللون الأساسي", labelEn: "Primary Color", valueAr: "Deep Burgundy / Wine (#4A0E17)", valueEn: "Deep Burgundy / Wine (#4A0E17)" },
      { labelAr: "لون الأسطح والجدران", labelEn: "Surfaces & Walls", valueAr: "Warm Cream Textured Plaster", valueEn: "Warm Cream Textured Plaster" },
      { labelAr: "خشب الأثاث والكونتر", labelEn: "Millwork & Timber", valueAr: "Dark Walnut Solid Wood", valueEn: "Dark Walnut Solid Wood" },
      { labelAr: "المعادن واللمسات", labelEn: "Metallic Accents", valueAr: "Brushed Satin Brass & Architectural Black", valueEn: "Brushed Satin Brass & Architectural Black" },
      { labelAr: "الأقمشة والتنجيد", labelEn: "Textiles & Upholstery", valueAr: "Burgundy Velvet & Natural Cane / Rattan", valueEn: "Burgundy Velvet & Natural Cane / Rattan" },
      { labelAr: "الأسطح الحجرية", labelEn: "Stone Countertops", valueAr: "Honed Light French Marble", valueEn: "Honed Light French Marble" }
    ],
    architecturalInsightAr: "الهدف المعماري هو الابتعاد عن كلاسيكية البروسري الثقيلة، واستبدالها بنقاء خطوط معاصرة تجمع النسيج المخملي الغني مع هدوء الجص الكريمي.",
    architecturalInsightEn: "The architectural intent avoids heavy historicism, adopting refined modern lines that pair lush velvet textures with calming cream plasterwork.",
    images: [
      {
        id: "ch02-img1",
        path: "/assets/ch02/img_0.jpeg",
        captionAr: "لوحة عينات المواد والتشطيبات المعمارية النهائية",
        captionEn: "Final architectural material sample board and tactile swatches",
        hero: true
      },
      {
        id: "ch02-img2",
        path: "/assets/ch02/img_1.jpeg",
        captionAr: "تنسيق درجات الألوان بين البرجندي، الخشب الداكن، وتنجيد المخمل",
        captionEn: "Chromatic balance across burgundy, dark walnut, and velvet upholstery",
        hero: false
      },
      {
        id: "ch02-img3",
        path: "/assets/ch02/img_2.jpeg",
        captionAr: "التفاصيل النحاسية المصقولة مع أسطح الرخام الفاتح",
        captionEn: "Brushed brass joinery details paired with honed light marble",
        hero: false
      }
    ]
  },
  {
    id: 3,
    chapterNumberStr: "03",
    titleAr: "المخطط العام وتوزيع المساحات الداخلية",
    titleEn: "Spatial Layout & Interior Masterplan",
    categoryAr: "التخطيط الفراغي",
    categoryEn: "Spatial Planning",
    taglineAr: "هندسة الحركة وتكامل المناطق الوظيفية والخدمية",
    taglineEn: "Zoning Engineering & Functional Floorplan Integration",
    rawTextAr: `هنا بقى بنقفل الـInterior كـمشروع كامل:

* Entrance في المنتصف.
* Outdoor Terrace قدام الواجهة.
* Ordering + Pastry Display + Coffee Bar في أول جزء من المكان.
* Main Seating في المنتصف والجزء الخلفي.
* Banquette Seating على الجوانب.
* VIV Branding Wall في آخر نقطة عشان يعمل Perspective قوي من المدخل.
* Kitchen + Prep خلف الـService Area.
* Storage قريب من المطبخ.
* Restrooms بعيدين عن الـFood Display.
* Main circulation واضح ومستقيم.
* فصل حركة Customer / Staff قدر الإمكان`,
    summaryAr: "تخطيط متكامل يربط التراس الخارجي بالمدخل المحوري، منطقة العرض والطلب في المقدمة، الصالة وجلسات البانكيت، وينتهي بجدار البراندينج المعماري.",
    summaryEn: "Master space planning connecting the terrace through a central portal, placing display and coffee stations upfront, transitioning into seating, and anchoring the back brand wall.",
    keyPointsAr: [
      "مدخل محوري في المنتصف محاط بتراس خارجي متناسق.",
      "منطقة الطلب وعرض المعجنات والقهوة في الجزء الأول لجذب العميل فوراً.",
      "الصالة الرئيسية ومقاعد البانكيت موزعة بالمنتصف والجوانب براحة وانسيابية.",
      "جدار VIV Branding Wall في أقصى نقطة عمق لخلق مشهدية ومنظور بصري ساحب.",
      "فصل محكم بين حركة العملاء والموظفين مع عزل الخدمات والمخازن ودورات المياه."
    ],
    keyPointsEn: [
      "Centrally aligned entrance flanked by a symmetrical outdoor bistro terrace.",
      "Front-loaded ordering, pastry vitrine, and coffee station for immediate visual magnetism.",
      "Main seating core and perimeter banquettes offering generous social spacing.",
      "VIV Signature Brand Wall at the deep axial terminus creating a dramatic vanishing point.",
      "Strict acoustic and circulation separation between guest journeys and back-of-house operations."
    ],
    specs: [
      { labelAr: "موقع المدخل", labelEn: "Entrance Axis", valueAr: "محوري في المنتصف (Central Axis)", valueEn: "Central Axial Alignment" },
      { labelAr: "تمركز محطة العرض", labelEn: "Display Zone", valueAr: "الجزء الأمامي الأيمن المباشر", valueEn: "Front-Right Foreground" },
      { labelAr: "نقطة الجذب البصري", labelEn: "Focal Anchor", valueAr: "VIV Back Wall في أقصى العمق", valueEn: "Deep Rear Architectural Wall" },
      { labelAr: "فصل التدفق", labelEn: "Circulation Separation", valueAr: "مسارات مخصصة للعملاء والخدمة", valueEn: "Segregated Guest & Service Flow" }
    ],
    architecturalInsightAr: "تم تصميم المنظور المحوري (Axial Perspective) بحيث يرى العميل بمجرد تجاوزه الباب الخارجي عمق المكان كاملاً مع بروز كتلة الكرواسون الذهبية وجدار القوس الخلفي.",
    architecturalInsightEn: "The axial vista is calculated so that stepping through the threshold reveals the full spatial depth, framing both the golden pastry vitrine and the rear arched branding.",
    images: [
      {
        id: "ch03-img1",
        path: "/assets/ch03/img_0.jpeg",
        captionAr: "المخطط المعماري الكامل لتوزيع المقاعد ومحطات الخدمة",
        captionEn: "Complete architectural floorplan illustrating seating and service zones",
        hero: true
      },
      {
        id: "ch03-img2",
        path: "/assets/ch03/img_1.jpeg",
        captionAr: "محاور الحركة والرؤية البصرية الممتدة من الواجهة إلى الجدار الخلفي",
        captionEn: "Sightlines and perspective axes extending from facade to the rear wall",
        hero: false
      }
    ]
  },
  {
    id: 4,
    chapterNumberStr: "04",
    titleAr: "الواجهة الخارجية والمدخل الرئيسي",
    titleEn: "Facade Architecture & Main Entrance",
    categoryAr: "الواجهات الخارجية",
    categoryEn: "Exterior Facade",
    taglineAr: "حضور باريسي فخم مع زجاج شفاف يكشف عالم VIV الداخلي",
    taglineEn: "A Grand Parisian Street Presence Featuring Full-Height Transparency",
    rawTextAr: `* Burgundy / Wine هو اللون الأساسي.
* Awning كبير وبسيط من غير خطوط أو زخرفة كتير.
* VIV هو العنصر البصري الرئيسي، كبير وواضح.
* واجهة زجاج كاملة عشان الكرواسون والـinterior يبانوا من الشارع.
* Wood + Brass في الأبواب والتفاصيل.
* Outdoor seating بسيط: Marble + Rattan.
* زرع Olive/Greenery على الأطراف عشان يكسر اللون الغامق.`,
    summaryAr: "تصميم واجهة معمارية راقية بلون البرجندي مع مظلة كلاسيكية بسيطة، وزجاج كامل يكشف مشهد تحضير القهوة وعرض الكرواسون للمارة.",
    summaryEn: "A sophisticated facade composed in deep Burgundy with a minimalist awning and floor-to-ceiling glazing showcasing the inner warmth to the street.",
    keyPointsAr: [
      "البرجندي النبيذي يغطي الواجهة بطابع رصين وفخم.",
      "مظلة (Awning) كبيرة بخطوط نقية خالية من الزخرفة المفرطة.",
      "لوجو VIV يحتل الصدارة بوضوح وأناقة دون صخب.",
      "واجهة زجاجية كاملة تعزز الشفافية وتربط الشارع بالداخل.",
      "أبواب من الخشب الداكن والنحاس مع أشجار زيتون تكسر قتامة اللون."
    ],
    keyPointsEn: [
      "Deep Burgundy envelope creating an authoritative street presence.",
      "Expansive, crisp Parisian awning free of superfluous ornamentation.",
      "Prominent yet understated VIV typographic identity.",
      "Full-height structural glass drawing natural daylight and street gaze inwards.",
      "Dark timber portal frames with brass pull handles softened by olive greenery."
    ],
    specs: [
      { labelAr: "لون الواجهة الأساسي", labelEn: "Facade Cladding", valueAr: "Burgundy Wine Architectural Finish", valueEn: "Burgundy Wine Architectural Finish" },
      { labelAr: "المظلة الخارجية", labelEn: "Awning Structure", valueAr: "Large Minimalist Burgundy Canvas", valueEn: "Large Minimalist Burgundy Canvas" },
      { labelAr: "الزجاج", labelEn: "Glazing System", valueAr: "Ultra-Clear Floor-to-Ceiling Glass", valueEn: "Ultra-Clear Floor-to-Ceiling Glass" },
      { labelAr: "أبواب المدخل", labelEn: "Entrance Doors", valueAr: "Dark Walnut with Brushed Brass Hardware", valueEn: "Dark Walnut with Brushed Brass Hardware" },
      { labelAr: "النباتات المحيطة", labelEn: "Perimeter Landscaping", valueAr: "Potted Mature Olive Trees in Clay Urns", valueEn: "Potted Mature Olive Trees in Clay Urns" }
    ],
    architecturalInsightAr: "تتحول الواجهة الزجاجية في المساء إلى نافذة ضوئية سينمائية دافئة تدعو المارة لاكتشاف دفء ورائحة الكرواسون الباريسي الطازج.",
    architecturalInsightEn: "At dusk, the full glazing acts as a warm cinematic lantern, revealing the glowing interior and inviting passersby into the sensory world of VIV.",
    images: [
      {
        id: "ch04-img1",
        path: "/assets/ch04/img_0.jpeg",
        captionAr: "التصميم النهائي لواجهة VIV الخارجية والمظلة البرجندي",
        captionEn: "Final exterior facade rendering showcasing the burgundy awning and glass portal",
        hero: true
      }
    ]
  },
  {
    id: 5,
    chapterNumberStr: "05",
    titleAr: "التراس الخارجي — French Bistro Terrace",
    titleEn: "Outdoor Bistro Terrace Experience",
    categoryAr: "المساحات الخارجية",
    categoryEn: "Outdoor Living",
    taglineAr: "جلسات رصيف باريسية أنيقة محاطة بأشجار الزيتون",
    taglineEn: "An Authentic Parisian Sidewalk Terrace Framed by Lush Olive Trees",
    rawTextAr: `٢️⃣ Outdoor / Terrace

هنا نخليها French Bistro Terrace بس بسيطة جدًا:

* ترابيزات Marble صغيرة دائرية.
* كراسي Rattan بلون طبيعي مع تفاصيل Burgundy.
* Banquette طويلة ملاصقة للواجهة.
* Planters كبيرة فيها Olive Trees وGreenery.
* الـAwning Burgundy مستمر فوق التراس.
* إضاءة صغيرة على الترابيزات بدل إضاءة قوية.
* الأرضية Stone فاتح.
* مفيش زحمة ديكور؛ نخلي الواجهة والكرواسون هما الـHero.

ودي تبقى منطقة قوية جدًا للتصوير والـInstagram`,
    summaryAr: "تجسيد روح مقاهي باريس التاريخية في جلسة خارجية هادئة: طاولات رخام دائرية، كراسي راتان كلاسيكية، ومقعد بانكيت يمتد على طول الواجهة.",
    summaryEn: "Capturing the timeless ambiance of Parisian boulevard cafes: petite round marble tables, woven rattan chairs, and a continuous facade banquette.",
    keyPointsAr: [
      "طاولات رخامية دائرية صغيرة بلمسات نحاسية وقواعد حديدية سوداء.",
      "كراسي Bistro Rattan باللون الطبيعي مع خيوط نبيذية متناسقة.",
      "بانكيت خارجي ممتد على طول الواجهة أسفل المظلة البرجندي.",
      "أحواض زرع فخارية كبيرة تحتضن أشجار الزيتون الطبيعية.",
      "إضاءة ليلية خافتة ومصابيح طاولة صغيرة لتجربة تصوير استثنائية."
    ],
    keyPointsEn: [
      "Petite round honed marble bistrot tables with cast-iron bistro bases.",
      "Traditional woven cane/rattan armchairs with subtle burgundy weave accents.",
      "Long continuous banquette hugging the facade under the sheltering awning.",
      "Oversized terracotta planters housing Mediterranean olive trees.",
      "Soft ambient tabletop luminaires crafting an iconic Instagrammable setting."
    ],
    specs: [
      { labelAr: "طاولات التراس", labelEn: "Outdoor Tables", valueAr: "Cast-Iron Base + Honed Marble Top", valueEn: "Cast-Iron Base + Honed Marble Top" },
      { labelAr: "المقاعد", labelEn: "Outdoor Seating", valueAr: "Handwoven French Bistro Rattan Chairs", valueEn: "Handwoven French Bistro Rattan Chairs" },
      { labelAr: "أرضية التراس", labelEn: "Terrace Flooring", valueAr: "Light Beige Natural Sandstone Pavers", valueEn: "Light Beige Natural Sandstone Pavers" },
      { labelAr: "عناصر الخصوصية", labelEn: "Greenery Screening", valueAr: "Olive Trees in Custom Burgundy Urns", valueEn: "Olive Trees in Custom Burgundy Urns" }
    ],
    architecturalInsightAr: "بساطة الديكور في التراس تهدف إلى إبراز مشهد رواد المكان وهم يستمتعون بالقهوة والكرواسون تحت ظلال المظلة الفرنسية.",
    architecturalInsightEn: "The restrained terrace styling keeps human interaction, warm conversation, and the croissant ritual at the heart of the street experience.",
    images: [
      {
        id: "ch05-img1",
        path: "/assets/ch05/img_0.jpeg",
        captionAr: "جلسات التراس الخارجي مع كراسي الراتان وأشجار الزيتون",
        captionEn: "Outdoor terrace composition with French rattan bistro seating and olive planters",
        hero: true
      }
    ]
  },
  {
    id: 6,
    chapterNumberStr: "06",
    titleAr: "منطقة الطلب وتجربة العميل — Ordering Zone",
    titleEn: "Ordering Zone & Customer Journey Flow",
    categoryAr: "نقاط الخدمة",
    categoryEn: "Service Points",
    taglineAr: "مسار حركة بديهي يضع الكرواسون الطازج في بؤرة الاهتمام",
    taglineEn: "An Intuitive Service Pathway Placing Fresh Croissants at the Core",
    rawTextAr: `Ordering

دي أهم نقطة بعد الواجهة، وعايزين العميل أول ما يدخل يتشد للكرواسون فورًا.

* Pastry Display طويل على اليمين، زجاج كامل ومرتب جدًا.
* الـCounter يكون Marble فاتح + Wood Dark مع لمسات Brass.
* الكرواسون هو الـHero، مش الديكور.
* خلف الـCounter: Coffee Station واضحة لكن مش مسيطرة.
* خلفية الـCounter: VIV CROISSANTS كبيرة وبسيطة.
* رفوف مفتوحة عليها الـPackaging والـCoffee.
* Globe Pendant Lights فوق منطقة الطلب.
* Menu صغير وواضح، مش حائط مليان كلام.
* الأرضية فيها VIV branding بشكل subtle.
* نخلي الـOrdering Flow واضح: Enter → See Croissants → Order → Pay → Pick Up.`,
    summaryAr: "تنظيم هندسي لمنطقة الطلب يوفر رحلة عميل واضحة ومنطقية: الدخول، رؤية الكرواسون فوراً في الفترينا الزجاجية، الطلب والدفع، واستلام القهوة بسلاسة.",
    summaryEn: "A calculated ordering flow that orchestrates a flawless guest journey: Enter, marvel at the fresh croissants, order, pay, and collect with effortless elegance.",
    keyPointsAr: [
      "فترينا عرض الكرواسون تمتد على اليمين مباشرة لجذب انتباه العميل الأول.",
      "كونتر فاخر يمزج الرخام الفاتح بالخشب الداكن وتفاصيل النحاس.",
      "الكرواسون هو البطل الرئيسي، والديكور مصمم لخدمة إبراز المنتجات.",
      "محطة القهوة متصلة بالخلف لسرعة الخدمة ودون حجب التواصل البصري.",
      "تدفق منظم يمنع أي تكدس: Enter → See Croissants → Order → Pay → Pick Up."
    ],
    keyPointsEn: [
      "Elongated pastry showcase positioned directly on the right upon entering.",
      "Crafted counter marrying honed light marble with dark walnut and brass trims.",
      "Croissants remain the undisputed hero; architecture provides the stage.",
      "Directly backed coffee station ensuring swift barista workflow and engagement.",
      "Crisp, frictionless trajectory: Enter → See Croissants → Order → Pay → Pick Up."
    ],
    specs: [
      { labelAr: "تدفق الخدمة", labelEn: "Service Pathway", valueAr: "Enter → Display → Order → Pay → Pickup", valueEn: "Enter → Display → Order → Pay → Pickup" },
      { labelAr: "خامات الكونتر", labelEn: "Counter Materials", valueAr: "Dark Walnut Cladding + Calacatta Marble Top", valueEn: "Dark Walnut Cladding + Calacatta Marble Top" },
      { labelAr: "لوحة القوائم", labelEn: "Menu Architecture", valueAr: "Minimalist Brass-Framed Typographic Menu", valueEn: "Minimalist Brass-Framed Typographic Menu" },
      { labelAr: "الإضاءة المعلقة", labelEn: "Pendant Luminaires", valueAr: "Opal Glass Globe Pendants with Brass Stems", valueEn: "Opal Glass Globe Pendants with Brass Stems" }
    ],
    architecturalInsightAr: "تصميم زاوية الكونتر بارتفاع مريح يسمح بالتواصل الإنساني المباشر بين الضيف وموظفي VIV أثناء استعراض أصناف المخبوزات.",
    architecturalInsightEn: "The counter height and geometry are calibrated to maintain open eye contact between guest and craftsperson while highlighting the bakery vitrine.",
    images: [
      {
        id: "ch06-img1",
        path: "/assets/ch06/img_0.jpeg",
        captionAr: "منطقة الطلب وكونتر الرخام والخشب مع شاشات العرض المتقنة",
        captionEn: "Ordering counter crafted with marble, dark timber, and minimalist menu framing",
        hero: true
      }
    ]
  },
  {
    id: 7,
    chapterNumberStr: "07",
    titleAr: "فترينا عرض الكرواسون — Pastry Display Hero",
    titleEn: "Pastry Display — The Architectural Hero",
    categoryAr: "العنصر الأيقوني",
    categoryEn: "Hero Showcase",
    taglineAr: "القطعة الأهم في VIV — صُممت لتكون البطل المطلق منذ لحظة الدخول",
    taglineEn: "The Centerpiece of VIV — Engineered as the Absolute Hero from the Threshold",
    rawTextAr: `دي أهم قطعة في VIV، وعايزينها تبقى الـHero من أول ما العميل يدخل:

* Glass Display طويل من الأرض لحد الـcounter، بإطار Brass رفيع.
* سطح Marble فاتح.
* القاعدة Dark Wood بتفاصيل بسيطة جدًا.
* الكرواسون متقسم بصريًا: Classic / Sweet / Savory.
* كل نوع له small black/brass name tag.
* إضاءة داخلية دافئة جدًا ومركزة على المنتجات.
* فوق الـdisplay كام Pastry Dome صغير للقطع المميزة.
* خلفه مباشرة Coffee Bar عشان حركة الطلب تبقى سريعة.
* الـPackaging يظهر على الرفوف الخلفية بشكل مرتب، مش ديكور زائد.
* نخلي الـVIV Logo خلف الـcounter لكن بحجم متوسط عشان الكرواسون يفضل هو البطل.`,
    summaryAr: "فترينا زجاجية نقية ممتدة بإطار نحاسي رفيع وقاعدة خشب داكن وسطح رخامي؛ تقسم الكرواسون إلى (Classic / Sweet / Savory) مع إضاءة دافئة مخصصة تجعل القطع تبدو كجواهر ثمينة.",
    summaryEn: "An architectural glass vitrine with slim brass mullions, dark walnut base, and honed marble top; organizing croissants into Classic, Sweet, and Savory collections under museum-grade warm illumination.",
    keyPointsAr: [
      "Glass Display متصل بإطار Brass فائق النحافة يمنح رؤية كاملة وغير محجوبة.",
      "تقسيم بصري منظم لأقسام الكرواسون: الكلاسيكي، الحلو، والمملح.",
      "بطاقات تعريف مصغرة وأنيقة باللون الأسود والنحاسي لكل صنف.",
      "إضاءة دافئة متخصصة داخل الفترينا تُبرز هشاشة الطبقات واللون الذهبي المورق.",
      "قباب زجاجية (Pastry Domes) لتمييز الابتكارات الحصرية والقطع الخاصة."
    ],
    keyPointsEn: [
      "Ultra-clear glass showcase with ultra-slim brass framing for uninterrupted sightlines.",
      "Curated visual segmentation: Classic Viennoiserie, Sweet, and Savory Creations.",
      "Bespoke miniature black and brass nomenclature tags for each creation.",
      "High-CRI warm internal lighting engineered to accentuate the golden, buttery flaky layers.",
      "Individual artisanal glass cloches/domes spotlighting limited signature specials."
    ],
    specs: [
      { labelAr: "هيكل الفترينا", labelEn: "Vitrine Construction", valueAr: "Custom Low-Iron Glass with Brushed Brass Frame", valueEn: "Custom Low-Iron Glass with Brushed Brass Frame" },
      { labelAr: "تقسيم الأصناف", labelEn: "Product Categorization", valueAr: "Classic / Sweet / Savory Tripartite Zoning", valueEn: "Classic / Sweet / Savory Tripartite Zoning" },
      { labelAr: "حرارة الإضاءة الداخلية", labelEn: "Internal Illumination", valueAr: "2700K High-CRI 95+ Warm Glow Strip LEDs", valueEn: "2700K High-CRI 95+ Warm Glow Strip LEDs" },
      { labelAr: "قاعدة العرض", labelEn: "Base Cabinetry", valueAr: "Dark Stained American Walnut", valueEn: "Dark Stained American Walnut" },
      { labelAr: "علامات الأسماء", labelEn: "Item Tags", valueAr: "Solid Brass & Matte Black Enamel Plates", valueEn: "Solid Brass & Matte Black Enamel Plates" }
    ],
    architecturalInsightAr: "تمت معاملة فترينا الكرواسون معمارياً كواجهة عرض مجوهرات راقية في باريس (Haute Joaillerie)، لترسيخ قيمة الحرفة والتميز في كل قطعة مخبوزة.",
    architecturalInsightEn: "The vitrine is treated with the precision of a fine Parisian jewel box, elevating each croissant into an artisanal masterpiece through light and materiality.",
    images: [
      {
        id: "ch07-img1",
        path: "/assets/ch07/img_0.jpeg",
        captionAr: "فترينا عرض الكرواسون البطلة مع الإضاءة المركزة والتنظيم الهندسي",
        captionEn: "The hero pastry display showcase with integrated warm lighting and bespoke tags",
        hero: true
      }
    ]
  },
  {
    id: 8,
    chapterNumberStr: "08",
    titleAr: "بار القهوة الفرنسي المختص — French Coffee Bar",
    titleEn: "Artisanal French Coffee Bar Station",
    categoryAr: "محطات الإعداد",
    categoryEn: "Coffee Craft",
    taglineAr: "بساطة راقية واتصال مباشر: اختر كرواسونك ← اختر قهوتك ← استمتع بجلستك",
    taglineEn: "Refined Simplicity: Choose your Croissant → Choose your Coffee → Sit & Savor",
    rawTextAr: `هنا نخليه French Coffee Bar بسيط وPremium، مش Coffee Shop تقليدي:

* Marble countertop فاتح.
* قاعدة Dark Wood بنفس خامة الـPastry Counter.
* Espresso Machine في المنتصف كـHero.
* 2 Grinders واضحين بجانبها.
* رفوف Brass + Glass خلف البار.
* أكواب VIV البيضاء مرتبة بشكل بصري جميل.
* Syrups / Coffee Beans / أدوات الباريستا في مجموعات صغيرة.
* Back Wall عليه VIV Logo كبير لكن هادي.
* Menu Board رأسي بسيط: Coffee / Specialty Drinks.
* إضاءة Warm Globe Pendants + LED مخفي داخل الرفوف.
* نباتات Olive / Greenery بكميات قليلة.
* Sink وBarista Workstation مخفيين قدر الإمكان.

والأهم: الـCoffee Bar والـPastry Display يبقوا متصلين بصريًا، عشان العميل يحس إنهم محطة واحدة:
Choose your Croissant → Choose your Coffee → Sit`,
    summaryAr: "تصميم بار قهوة فرنسي أنيق ومرتب يبرز ماكينة الإسبريسو والمطاحن في المنتصف، مع رفوف نحاسية وزجاجية خلفية تحمل أكواب وعبوات VIV بنظام متناسق.",
    summaryEn: "An exquisite French coffee bar anchoring a statement espresso machine, backed by illuminated brass and glass floating shelves displaying branded VIV ceramic cups.",
    keyPointsAr: [
      "سطح رخامي فاتح متصل مع قاعدة الخشب الداكن بنفس نسيج كونتر الكرواسون.",
      "ماكينة الإسبريسو في المنتصف كعنصر بطولي مع مطحنتين احترافيتين.",
      "رفوف نحاسية وزجاجية بإضاءة LED مخفية تنظم الأكواب وحبوب القهوة.",
      "إخفاء أحواض الغسيل ومعدات العمل الفنية للحفاظ على المظهر الراقي.",
      "اتصال بصري كامل مع عرض الكرواسون لتأكيد فلسفة المحطة الواحدة المترابطة."
    ],
    keyPointsEn: [
      "Honed marble counter flowing smoothly from the pastry vitrine with dark walnut bases.",
      "Precision espresso machine centered as a functional sculpture flanked by two grinders.",
      "Backlit brass and glass shelving presenting immaculate rows of signature white VIV cups.",
      "Concealed utility sinks and workflow gear to preserve an uncluttered aesthetic.",
      "Harmonious visual union with the pastry station reinforcing the dual-craft philosophy."
    ],
    specs: [
      { labelAr: "ماكينة الإسبريسو", labelEn: "Espresso Hardware", valueAr: "Custom Satin-Finished Commercial Espresso Machine", valueEn: "Custom Satin-Finished Commercial Espresso Machine" },
      { labelAr: "الرفوف الخلفية", labelEn: "Back-Bar Shelving", valueAr: "Brushed Brass Suspended Frames with Fluted Glass", valueEn: "Brushed Brass Suspended Frames with Fluted Glass" },
      { labelAr: "إضاءة البار", labelEn: "Bar Illumination", valueAr: "2700K Warm Under-Shelf LEDs + Pendant Globes", valueEn: "2700K Warm Under-Shelf LEDs + Pendant Globes" },
      { labelAr: "قائمة المشروبات", labelEn: "Beverage Menu", valueAr: "Vertical Brass Letterboard with Minimalist Typography", valueEn: "Vertical Brass Letterboard with Minimalist Typography" }
    ],
    architecturalInsightAr: "تمت معايرة مساحة العمل لتوفر للباريستا كفاءة تشغيلية فائقة في أوقات الذروة، مع إبقاء الواجهة أمام العميل في قمة النظافة والهدوء المعماري.",
    architecturalInsightEn: "Ergonomically planned for high-volume barista velocity while maintaining an immaculate, serene tableau facing the customer.",
    images: [
      {
        id: "ch08-img1",
        path: "/assets/ch08/img_0.jpeg",
        captionAr: "بار القهوة الفرنسي مع الماكينة والرفوف النحاسية المضيئة",
        captionEn: "Artisanal French coffee bar with bespoke espresso station and backlit brass shelves",
        hero: true
      }
    ]
  },
  {
    id: 9,
    chapterNumberStr: "09",
    titleAr: "الصالة الرئيسية — Main Seating Area",
    titleEn: "Main Seating Hall & Parisian Ambience",
    categoryAr: "جلسات الضيوف",
    categoryEn: "Guest Seating",
    taglineAr: "قلب VIV — روح باريس صباحاً مع القهوة والكرواسون في أجواء هادئة",
    taglineEn: "The Heart of VIV — Morning in Paris with Croissant, Coffee, and Quiet Charm",
    rawTextAr: `دي تبقى قلب VIV — مريحة وشيك، لكن من غير ما تحس إنها مطعم تقليدي:

* Marble round tables بأحجام مختلفة.
* كراسي French Bistro Rattan.
* Burgundy banquettes على الحوائط.
* مخدات Cream + Burgundy.
* إضاءة صغيرة على كل ترابيزة.
* Pendant globes موزعة بخطوط بسيطة.
* نباتات Olive/Greenery في الزوايا.
* مرايات كبيرة بإطارات Brass.
* الحوائط Cream / warm stone مع تفاصيل Burgundy محدودة.
* الأرضية Cream stone + small black geometric details.
* كل الترابيزات موجهة بصريًا ناحية الـPastry Display.

الـSeating لازم يدي إحساس: Paris صباحًا + Croissant + Coffee + شوية شغل أو قعدة طويلة`,
    summaryAr: "صالة جلوس باريسية دافئة تجمع بين طاولات الرخام الدائرية، كراسي الراتان، مقاعد البانكيت البرجندي، مع مرايا نحاسية كبيرة تعكس الضوء والرحابة.",
    summaryEn: "A warm Parisian seating sanctuary combining round marble tables, rattan chairs, burgundy velvet banquettes, and expansive brass-framed mirrors bouncing natural light.",
    keyPointsAr: [
      "طاولات رخامية دائرية بأحجام متعددة تناسب الجلسات الفردية والمزدوجة.",
      "كراسي French Bistro Rattan تمنح إحساس المقاهي الباريسية الأصيلة.",
      "مرايا كبيرة بإطارات نحاسية تعكس جمال الفضاء وتضاعف الإحساس بالاتساع.",
      "توجيه هندسي للطاولات نحو منطقة عرض الكرواسون لتعزيز الارتباط البصري.",
      "أجواء تلائم الاستمتاع بوجبة الإفطار، العمل الهادئ، أو اللقاءات المطولة."
    ],
    keyPointsEn: [
      "Honed marble tables of diverse diameters accommodating solo focus or intimate pairs.",
      "Authentic French Bistro Rattan chairs injecting organic texture and warmth.",
      "Monumental brass-framed mirrors multiplying natural light and spatial volume.",
      "Seating orientations angled toward the pastry showcase for constant visual connection.",
      "An atmosphere tailored for morning indulgence, focused laptop work, or long chats."
    ],
    specs: [
      { labelAr: "طراز الجلسات", labelEn: "Seating Typology", valueAr: "French Brasserie Social & Individual Clusters", valueEn: "French Brasserie Social & Individual Clusters" },
      { labelAr: "المرايا الجدارية", labelEn: "Wall Mirrors", valueAr: "Antiqued Mirror Glass with Brushed Brass Frames", valueEn: "Antiqued Mirror Glass with Brushed Brass Frames" },
      { labelAr: "تشطيب الجدران", labelEn: "Wall Texture", valueAr: "Warm Lime-Wash Cream Plaster with Burgundy Baseboards", valueEn: "Warm Lime-Wash Cream Plaster with Burgundy Baseboards" },
      { labelAr: "الإضاءة", labelEn: "Ambient Lighting", valueAr: "Opal Globe Clusters + Tabletop Cordless Sconces", valueEn: "Opal Globe Clusters + Tabletop Cordless Sconces" }
    ],
    architecturalInsightAr: "تم توزيع المسافات الفاصلة بين الطاولات بعناية هندسية تضمن خصوصية الحوار للعميل دون فقدان حيوية المكان الاجتماعية.",
    architecturalInsightEn: "Table clearances are engineered with generous proportions to ensure private conversations while sustaining the vibrant brasserie hum.",
    images: [
      {
        id: "ch09-img1",
        path: "/assets/ch09/img_0.jpeg",
        captionAr: "الصالة الرئيسية وطاولات الرخام مع مقاعد البانكيت والمرايا النحاسية",
        captionEn: "Main seating hall featuring round marble tables, banquette seating, and brass mirrors",
        hero: true
      }
    ]
  },
  {
    id: 10,
    chapterNumberStr: "10",
    titleAr: "جلسات البانكيت المخملية — Banquette Seating",
    titleEn: "Plush Velvet Banquette Alcoves",
    categoryAr: "جلسات الضيوف",
    categoryEn: "Banquette Luxury",
    taglineAr: "أجمل نقطة للتصوير والقعدة الطويلة في VIV بلمسات المخمل البرجندي",
    taglineEn: "The Ultimate Cozy Photo & Lounge Sanctuary in Rich Burgundy Velvet",
    rawTextAr: `Banquette Seating

دي هتبقى أحلى Spot للتصوير والقعدة الطويلة في VIV:

* Banquette بلون Burgundy velvet.
* خياطة كابوتنيه خفيفة.
* خشب الـbanquette Dark Wood.
* خلف الـbanquette مرايات بإطارات Brass تعكس إضاءة المكان.
* فوق المرايات صور Parisian black & white بإطارات رفيعة.
* ترابيزات Marble صغيرة أمامها.
* Mini Brass Lamps على الترابيزات.
* كراسي Rattan مقابلة للـbanquette.
* مخدات Cream + Burgundy فقط.
* Olive trees كبيرة في النهايات.
* Lighting دافئ جدًا من الخلف وتحت الـbanquette.

دي هتبقى أحلى Spot للتصوير والقعدة الطويلة في VIV`,
    summaryAr: "مقاعد بانكيت فاخرة من المخمل البرجندي مع خياطة كابوتنيه خفيفة وقاعدة خشب داكن، تعلوها مرايا وصور باريسية بالأبيض والأسود مع إضاءة دافئة مخفية.",
    summaryEn: "Lush Burgundy velvet banquette alcoves detailed with subtle tufting, dark walnut plinths, Parisian monochrome photography, and warm under-seat halo lighting.",
    keyPointsAr: [
      "مخمل برجندي فاخر مع تنجيد مريح وخياطة كابوتنيه فرنسية متقنة.",
      "مرايا بإطارات Brass خلف المقاعد تعكس بريق الثريات وتزيد عمق الجلسة.",
      "مجموعة صور فوتوغرافية بالأبيض والأسود للحياة اليومية في باريس.",
      "مصابيح نحاسية مصغرة (Mini Brass Lamps) على كل طاولة لجو حميمي خاص.",
      "إضاءة خفية دافئة أسفل المقاعد وخلف الظهر تخلق هالة ضوئية ساحرة."
    ],
    keyPointsEn: [
      "Plush Burgundy velvet upholstery offering superior acoustic and tactile comfort.",
      "Segmented brass-framed mirrors reflecting ambient glow and elevating depth.",
      "Curated gallery of framed black-and-white Parisian street photography.",
      "Miniature cordless brass table lamps creating an intimate tabletop sanctuary.",
      "Concealed 2700K warm LED ribbons washing the floor beneath the banquette plinth."
    ],
    specs: [
      { labelAr: "قماش التنجيد", labelEn: "Upholstery Textile", valueAr: "Heavy-Duty French Burgundy Velvet (Rub Count > 100k)", valueEn: "Heavy-Duty French Burgundy Velvet (Rub Count > 100k)" },
      { labelAr: "الأعمال الخشبية", labelEn: "Timber Millwork", valueAr: "Dark American Walnut Stained Plinth & Trim", valueEn: "Dark American Walnut Stained Plinth & Trim" },
      { labelAr: "الإضاءة المخفية", labelEn: "Hidden Glow Lighting", valueAr: "Cove & Baseboard 2700K Warm LED Strips", valueEn: "Cove & Baseboard 2700K Warm LED Strips" },
      { labelAr: "الأعمال الفنية", labelEn: "Gallery Artwork", valueAr: "Monochrome Parisian Architectural Prints with Brass Frames", valueEn: "Monochrome Parisian Architectural Prints with Brass Frames" }
    ],
    architecturalInsightAr: "تم تصميم زاوية ظهر البانكيت هندسياً لدعم الجلوس المريح لفترات طويلة مع تعزيز امتصاص الصوت في الصالة.",
    architecturalInsightEn: "The banquette ergonomics and acoustic velvet backing were engineered to soften room reverberation while fostering relaxed lingering.",
    images: [
      {
        id: "ch10-img1",
        path: "/assets/ch10/img_0.jpeg",
        captionAr: "جلسات البانكيت المخملية البرجندي مع المرايا والصور الباريسية",
        captionEn: "Burgundy velvet banquette seating with mirrored backrest and monochrome art",
        hero: true
      }
    ]
  },
  {
    id: 11,
    chapterNumberStr: "11",
    titleAr: "الجدار الخلفي وعلامة VIV — Signature Back Wall",
    titleEn: "Signature Arch & VIV Brand Wall",
    categoryAr: "العلامة المعمارية",
    categoryEn: "Brand Anchor",
    taglineAr: "الجدار الأيقوني ونقطة التصوير الأولى في VIV مع القوس الكريمي واللوجو",
    taglineEn: "The Iconic Perspective Vanishing Point & Premier Photo Monument",
    rawTextAr: `Back Wall / VIV Branding

دي نخليها signature wall بتاعة VIV، وأول حاجة تتصور في المكان:

* Arch كبير في النص بلون Cream.
* داخله VIV CROISSANTS بالـBurgundy.
* إضاءة خلفية خفيفة جدًا.
* يمين وشمال الـArch Open Shelves بـBrass.
* الرفوف عليها Packaging + Coffee Beans + أدوات بسيطة.
* Greenery متدلية من بعض الرفوف.
* Olive Trees على الجانبين.
* Banquette Burgundy تحت الحائط.
* صور Paris Black & White على الجوانب.
* Marble ledge رفيع فوق الـbanquette للديكور.
* مفيش زخارف كتير؛ اللوجو + الـArch هما الـHero.

ودي تحديدًا تبقى أقوى Photo Spot في VIV`,
    summaryAr: "الجدار التوقيعي لـ VIV في أقصى عمق الكافيه؛ قوس معماري كريمي ضخم يحتضن شعار VIV CROISSANTS بالبرجندي مع إضاءة خفية ورفوف نحاسية مفتوحة.",
    summaryEn: "The signature focal monument at the cafe's terminus; a monumental cream arch framing the Burgundy VIV CROISSANTS identity with back-illumination and brass vitrine shelves.",
    keyPointsAr: [
      "قوس معماري باريسي ضخم باللون الكريمي يشكل النقطة المركزية للرؤية.",
      "لوجو VIV CROISSANTS باللون البرجندي مع إضاءة هالة خلفية ناعمة.",
      "رفوف نحاسية مفتوحة (Open Brass Shelves) يميناً ويساراً تعرض العبوات الفاخرة.",
      "نباتات خضراء متدلية وأشجار زيتون تضفي حيوية ونضارة طبيعية.",
      "الموقع الأقوى للتصوير الفوتوغرافي ومشاركة تجربة VIV على السوشيال ميديا."
    ],
    keyPointsEn: [
      "Grand Parisian architectural archway in honed cream plaster grounding the axial perspective.",
      "Embossed Burgundy VIV CROISSANTS signature with subtle perimeter halo lighting.",
      "Flanking open brass shelving showcasing bespoke packaging, beans, and artisan accouterments.",
      "Draping botanical greens and sculptural potted olive trees introducing organic vitality.",
      "Engineered as the definitive, unmistakable photographic hallmark for VIV guests."
    ],
    specs: [
      { labelAr: "القوس المعماري", labelEn: "Arch Structure", valueAr: "Custom Curved Plaster Molded Cream Arch", valueEn: "Custom Curved Plaster Molded Cream Arch" },
      { labelAr: "شعار البراند", labelEn: "Signage Typology", valueAr: "Embossed 3D Dimensional Burgundy Metalwork", valueEn: "Embossed 3D Dimensional Burgundy Metalwork" },
      { labelAr: "الإضاءة الخلفية", labelEn: "Halo Illumination", valueAr: "Concealed 2700K LED Perimeter Glow", valueEn: "Concealed 2700K LED Perimeter Glow" },
      { labelAr: "الرفوف المفتوحة", labelEn: "Accent Shelving", valueAr: "Satin Brushed Brass Tubing & Glass Insets", valueEn: "Satin Brushed Brass Tubing & Glass Insets" }
    ],
    architecturalInsightAr: "يعمل القوس كعدسة بصرية تسحب عين الزائر منذ دخوله من الباب الخارجي عبر كامل طول الصالة نحو الهوية المعمارية للعلامة.",
    architecturalInsightEn: "The arch functions as a visual telephoto lens, pulling the visitor's focus straight from the entrance portal across the full cafe length.",
    images: [
      {
        id: "ch11-img1",
        path: "/assets/ch11/img_0.jpeg",
        captionAr: "الجدار الخلفي التوقيعي والقوس الكريمي مع شعار VIV والرفوف النحاسية",
        captionEn: "Signature back wall featuring the cream arch, VIV branding, and open brass shelves",
        hero: true
      }
    ]
  },
  {
    id: 12,
    chapterNumberStr: "12",
    titleAr: "الممرات وهندسة الحركة — Movement & Spatial Flow",
    titleEn: "Circulation Engineering & Movement Flow",
    categoryAr: "الهندسة الوظيفية",
    categoryEn: "Functional Flow",
    taglineAr: "فخامة باريسية مع كفاءة تشغيلية فائقة تستوعب أعلى معدلات الزوار",
    taglineEn: "Parisian Elegance Engineered for High-Volume Flow & Frictionless Circulation",
    rawTextAr: `Movement

دي مهمة جدًا عشان المكان يبقى شيك وفي نفس الوقت عملي:

* نعمل Main Aisle واسع من الباب لآخر الكافيه.
* العميل يدخل → يشوف الـPastry Display → يطلب → يتحرك ناحية الـSeating.
* الـCoffee Bar يكون على جانب الـOrdering، عشان الـStaff Flow مايتقاطعش مع العملاء.
* ممنوع نحط ترابيزات في قلب الحركة.
* نخلي بين الترابيزات والكراسي مساحة مريحة للحركة.
* الأرضية تكمل الـFrench identity بنقشة Cream + Burgundy/Black بسيطة.
* نستخدم الـLighting كمان لتوجيه العين والحركة.
* الـBack Wall يبقى واضح من المدخل عشان يسحب العميل لجوه.
* نخلي Service/Staff circulation منفصل قدر الإمكان عن Customer circulation.

الهدف: المكان يبقى شكله فخم وباريسي، لكن الـFlow بتاعه يشتغل كـHigh-volume café`,
    summaryAr: "تخطيط دقيق لمسار الحركة الرئيسي (Main Aisle) من المدخل إلى العمق دون أي عوائق، مع فصل مسارات الخدمة للموظفين عن تدفق الضيوف لتحقيق كفاءة High-volume café.",
    summaryEn: "Precision circulation routing establishing an unobstructed Main Aisle from entrance to rear, isolating back-of-house staff pathways from guest movement.",
    keyPointsAr: [
      "ممر رئيسي (Main Aisle) عريض ومستقيم يربط كافة أركان الكافيه بانسيابية.",
      "تسلسل حركة منطقي: دخول ← رؤية فترينا الكرواسون ← الطلب ← التوجه للجلوس.",
      "تجنب وضع أي طاولات في مسار الحركة لمنع الاختناقات أثناء ساعات الذروة.",
      "فصل حركة الموظفين والخدمة عن مسار العملاء لضمان سرعة التحضير والتقديم.",
      "توظيف الإضاءة ونقوش الأرضية لتوجيه خطى الزوار بأسلوب بديهي وغير متكلف."
    ],
    keyPointsEn: [
      "Expansive, linear Main Aisle linking the entrance threshold directly to the seating zones.",
      "Flawless trajectory: Enter → Marvel at Pastry Vitrine → Order → Transition to Lounge.",
      "Zero furniture obstruction along the primary arterial path, mitigating peak-hour friction.",
      "Strict segregation of staff operations and barista restocking from guest circulation.",
      "Subtle floor inlays and linear ceiling lighting guiding intuition without signage clutter."
    ],
    specs: [
      { labelAr: "عرض الممر الرئيسي", labelEn: "Main Aisle Clearance", valueAr: "1.8m - 2.2m Unobstructed Flow", valueEn: "1.8m - 2.2m Unobstructed Flow" },
      { labelAr: "سعة التشغيل", labelEn: "Volume Capability", valueAr: "High-Volume Peak Flow Optimization", valueEn: "High-Volume Peak Flow Optimization" },
      { labelAr: "فصل المسارات", labelEn: "Zoning Strategy", valueAr: "Dual-Track Guest / Staff Segregation", valueEn: "Dual-Track Guest / Staff Segregation" },
      { labelAr: "التوجيه البصري", labelEn: "Visual Navigation", valueAr: "Linear Cove Lighting & Floor Pattern Alignment", valueEn: "Linear Cove Lighting & Floor Pattern Alignment" }
    ],
    architecturalInsightAr: "السر في نجاح المقاهي الراقية ذات الإقبال العالي يكمن في إخفاء الهندسة التشغيلية الصارمة خلف واجهة من الهدوء والأناقة الباريسية.",
    architecturalInsightEn: "The hallmark of great hospitality architecture is masking rigorous operational flow beneath an effortless facade of calm elegance.",
    images: []
  },
  {
    id: 13,
    chapterNumberStr: "13",
    titleAr: "تصميم وهندسة الإضاءة — Lighting Architecture",
    titleEn: "Architectural Lighting Design Scheme",
    categoryAr: "البيئة الضوئية",
    categoryEn: "Lighting Masterplan",
    taglineAr: "أربعة مستويات ضوئية دافئة تبرز بريق الكرواسون وفخامة المكان",
    taglineEn: "Four Layered Lighting Dimensions Elevating Golden Pastry & Serene Luxury",
    rawTextAr: `١٠️⃣ الإضاءة — Lighting Design

نقسمها لـ 4 أنواع:

1. الإضاءة العامة

* Warm White حوالي 2700–3000K
* سبوتات مخفية وموزعة في السقف.
* إضاءة ناعمة ومتجانسة من غير ما المكان يبقى ساطع زيادة.

2. الإضاءة الديكورية

* Globe Pendants من زجاج + Brass فوق الترابيزات.
* Wall Sconces بين المرايات والصور.
* Table Lamps صغيرة على بعض الترابيزات.
* كلها Warm وناعمة.

3. إضاءة الـHero Products 🥐

* أهم إضاءة في المشروع.
* Spotlights موجهة على Pastry Display.
* إضاءة داخلية للـGlass Display تبرز لون الكرواسون وتخليه طازج وشهي.
* الـCoffee Bar ياخد Accent Lighting مشابه.

4. إضاءة الـBranding

* Backlight خفيف خلف VIV CROISSANTS.
* LED مخفي داخل الرفوف.
* إضاءة موجهة على الـBack Wall والـArtwork.

النتيجة

بالنهار نعتمد على Natural Light من الواجهة الزجاج، وبالليل يتحول VIV لإضاءة دافئة، هادية، وباريسية مع تركيز بصري واضح على الكرواسون والـBranding.`,
    summaryAr: "منظومة إضاءة مدروسة في 4 طبقات: العامة الدافئة (2700K)، الديكورية المعلقة، إضاءة الكرواسون المركزة (Hero Lighting)، وإضاءة البراندينج والأعمال الفنية.",
    summaryEn: "A four-tier architectural lighting masterplan: 2700K warm ambient wash, decorative globe pendants, focused pastry hero beam, and branding back-illumination.",
    keyPointsAr: [
      "إضاءة عامة بدرجة دفء 2700K إلى 3000K تمنح شعوراً بالراحة والاسترخاء.",
      "ثريات Globe Pendants كروية من زجاج الأوبال والنحاس فوق الطاولات.",
      "إضاءة منتجات الـ Hero: سبوتات مخصصة تبرز لون وقرمشة الكرواسون الذهبي.",
      "إضاءة البراندينج: خطوط LED خفية وراء الشعار وفي حواف الأقواس والرفوف.",
      "تحول سينمائي: استثمار الضوء الطبيعي نهاراً والتألق بإضاءة باريسية دافئة ليلاً."
    ],
    keyPointsEn: [
      "Calibrated 2700K–3000K warm ambient wash creating a soft, non-glare environment.",
      "Opal glass globe pendants with satin brass detailing suspended above table clusters.",
      "Hero Pastry Spotlight: Narrow-beam, ultra-high CRI lighting celebrating pastry texture.",
      "Brand & Art Layer: Concealed perimeter halo LEDs washing back walls and shelving.",
      "Circadian transition: Abundant natural daylight by day evolving into an intimate glow by night."
    ],
    specs: [
      { labelAr: "حرارة اللون الأساسية", labelEn: "Color Temperature (CCT)", valueAr: "2700K Warm White (High R9 Red Rendering)", valueEn: "2700K Warm White (High R9 Red Rendering)" },
      { labelAr: "مؤشر نقاء اللون", labelEn: "Color Rendering Index", valueAr: "CRI 95+ Museum Grade for Food Vitrine", valueEn: "CRI 95+ Museum Grade for Food Vitrine" },
      { labelAr: "عناصر الإضاءة المعلقة", labelEn: "Decorative Fixtures", valueAr: "Custom Opal Glass & Brushed Brass Globe Pendants", valueEn: "Custom Opal Glass & Brushed Brass Globe Pendants" },
      { labelAr: "إضاءة المسار الفنية", labelEn: "Track Lighting", valueAr: "Matte Black Architectural Slim Spotlights", valueEn: "Matte Black Architectural Slim Spotlights" }
    ],
    architecturalInsightAr: "تمت معايرة طيف الضوء في فترينا المعجنات لتعزيز النغمات الذهبية والزبدية للكرواسون دون أي تشويه أو اصفرار غير مرغوب.",
    architecturalInsightEn: "The spectral power distribution over the pastry display is tuned to amplify golden crust tones without heat generation or chromatic distortion.",
    images: [
      {
        id: "ch13-img1",
        path: "/assets/ch13/img_0.jpeg",
        captionAr: "هندسة الإضاءة وتوزيع الثريات المعلقة والسبوتات الموجهة",
        captionEn: "Lighting engineering plan showing suspended opal globes and accent track spotlights",
        hero: true
      }
    ]
  },
  {
    id: 14,
    chapterNumberStr: "14",
    titleAr: "تصميم وهندسة الأرضيات — Flooring Architecture",
    titleEn: "Flooring Architecture & Terrazzo Inlays",
    categoryAr: "التشطيبات الأرضية",
    categoryEn: "Flooring Finishes",
    taglineAr: "أرضيات تيراتزو كريمي دافئ مع نقوش هندسية تدمج البرجندي والخشب",
    taglineEn: "Warm Cream Terrazzo Inlaid with Subtle Burgundy & Black Geometric Accents",
    rawTextAr: `Flooring

عايز الأرضية تكمل الـFrench Brasserie من غير ما تبقى مزخرفة زيادة:

* Main Interior: أرضية Terrazzo / Marble-look بلون Cream دافئ.
* Pattern: تقسيمة بسيطة جدًا Cream + Burgundy/Black في بعض المناطق.
* Entrance: نعمل border أو inlay بسيط يحدد المدخل.
* Outdoor / Terrace: Stone طبيعي أو Porcelain يشبه الحجر، بلون Beige فاتح.
* Pastry + Coffee Bar: نفس الأرضية الأساسية، عشان المكان يحس إنه وحدة واحدة.
* Banquette Area: ممكن نعمل تغيير بسيط في الـpattern لتحديد المنطقة من غير فاصل فعلي.
* Finish: Matte أو Honed، مش Glossy، عشان الشكل يبقى راقي ومش مبهرج.
* Practicality: مقاومة عالية للحركة والبقع وسهلة التنظيف، لأن VIV هيبقى High-volume café.

الـHero Floor:
Cream Terrazzo + تفاصيل Burgundy/Black بسيطة جدًا.

ده هيخلي الأرضية تربط Burgundy + Cream + Dark Wood + Brass ببعض من غير ما تنافس الكرواسون أو الديكور`,
    summaryAr: "أرضيات تيراتزو متقنة بلون كريمي دافئ وتشطيب مطفي (Honed/Matte)، مع خطوط تأطير هندسية بالبرجندي والأسود تربط خامات الجدران والخشب والنحاس في وحدة متجانسة.",
    summaryEn: "Honed cream terrazzo flooring with restrained burgundy and black perimeter inlays, seamlessly unifying walnut millwork, velvet upholstery, and brass accents.",
    keyPointsAr: [
      "الأرضية الرئيسية: تيراتزو أو رخام بلون كريمي دافئ مريح للعين.",
      "نقش هندسي خفيف (Pattern) يبرز الطابع الفرنسي الأصيل برقي وهدوء.",
      "إطار مدخل (Entrance Inlay) محدد يمنح شعوراً بالترحيب والفخامة عند الوصول.",
      "تشطيب مطفي (Matte / Honed) غير لامع يمنع الانعكاسات المزعجة والانزلاق.",
      "مقاومة استثنائية للحركة الكثيفة وسهولة التنظيف لتشغيل يومي متواصل بكفاءة."
    ],
    keyPointsEn: [
      "Primary floorfield: Warm cream terrazzo / marble-composite with muted aggregate.",
      "Geometric banding: Subtle burgundy and architectural black inlays structuring spatial zones.",
      "Entrance threshold border: Distinct welcome inlay framing the architectural arrival.",
      "Honed matte texture: Anti-glare, non-slip refined tactile surface suitable for hospitality.",
      "High-traffic resilience: Exceptional stain resistance and easy maintenance for high guest density."
    ],
    specs: [
      { labelAr: "الخامة الرئيسية", labelEn: "Primary Material", valueAr: "Bespoke Cream Terrazzo Tile / Seamless Resin Terrazzo", valueEn: "Bespoke Cream Terrazzo Tile / Seamless Resin Terrazzo" },
      { labelAr: "درجة اللمعان والتشطيب", labelEn: "Surface Finish", valueAr: "Honed / Satin Matte (Slip Resistance R10)", valueEn: "Honed / Satin Matte (Slip Resistance R10)" },
      { labelAr: "تفاصيل التطعيم", labelEn: "Inlay Details", valueAr: "Burgundy Marble & Nero Marquina Inset Bands", valueEn: "Burgundy Marble & Nero Marquina Inset Bands" },
      { labelAr: "أرضية التراس الخارجي", labelEn: "Terrace Flooring", valueAr: "Exterior-Grade Light Beige Natural Sandstone", valueEn: "Exterior-Grade Light Beige Natural Sandstone" }
    ],
    architecturalInsightAr: "تعمل الأرضية كخلفية محايدة وهادئة توحد كافة عناصر الأثاث والإضاءة، دون أن تشتت الانتباه عن بطل المكان الأساسي.",
    architecturalInsightEn: "The flooring serves as a poised architectural anchor, tying the materials together without competing with the pastry showcase or ambient warmth.",
    images: [
      {
        id: "ch14-img1",
        path: "/assets/ch14/img_0.jpeg",
        captionAr: "تصميم أرضية التيراتزو الكريمي مع التطعيمات الهندسية البرجندي والأسود",
        captionEn: "Cream terrazzo floor design featuring geometric burgundy and black inlay bands",
        hero: true
      }
    ]
  },
  {
    id: 15,
    chapterNumberStr: "15",
    titleAr: "تصميم الأسقف والبانوهات المعمارية — Ceiling Design",
    titleEn: "Ceiling Architecture & Coffered Panels",
    categoryAr: "التفاصيل العلوية",
    categoryEn: "Ceiling Masterplan",
    taglineAr: "سقف فرنسي معاصر يجمع البانوهات المستطيلة، الإضاءة المخفية، والثريات النحاسية",
    taglineEn: "A Modern French Brasserie Ceiling Integrating Coffered Panels & Cove Light",
    rawTextAr: `أكيد. شكل الأسقف في VIV نخليه French Brasserie لكن Clean ومودرن، مش سقف كلاسيكي تقيل.

١٢️⃣ الأسقف — Ceiling Design

1. السقف الأساسي

* لون Cream / Warm White.
* سطح هادي ونظيف.
* بدون زخارف كثيرة.

2. الـCeiling Panels

* نعمل تقسيمات مستطيلة بسيطة في السقف.
* Frame رفيع حول كل Panel.
* نفس لون السقف، عشان التفاصيل تظهر من خلال الظل والإضاءة فقط.
* ده اللي يدي الـFrench architectural character.

3. الـMain Seating

* فوق الترابيزات: Globe Pendants بزجاج Opal + Brass.
* تتكرر على خط واحد، لكن بمسافات منتظمة.
* ارتفاعها متوسط عشان تعمل intimate atmosphere.

4. الـPastry + Coffee Bar

* هنا نستخدم Black Track Lighting.
* السبوتات Adjustable وموجهة مباشرة على:
    * الكرواسون 🥐
    * الـCoffee Bar
    * الـPackaging
* مش نستخدم Pendants كتير عشان الـCounter يفضل عملي.

5. الـBack Wall

* فوق الـVIV Branding نعمل Hidden Cove Light.
* إضاءة ناعمة جدًا حول الـArch.
* الهدف إن اللوجو يبان من آخر المكان.

6. على الأطراف

* Recessed Spotlights صغيرة جدًا.
* موزعة بشكل منتظم.
* تستخدم للإضاءة العامة فقط.

الشكل النهائي

تخيل السقف كده:

Cream Ceiling → Rectangular Panels → Warm Cove Light → Black Tracks → Brass/Opal Globe Pendants

والأهم إننا ما نعملش سقف مليان تفاصيل؛ نخلي الـFrench feeling يطلع من الـPanels + الـPendants + الـWall Architecture، بينما السقف نفسه يفضل هادي.`,
    summaryAr: "سقف فرنسي بروسري هادئ ومودرن؛ بانوهات مستطيلة بإطارات رفيعة تبرز بالظل والضوء، إضاءة مخفية (Cove Light)، مسارات إضاءة سوداء موجهة، وثريات كروية أنيقة فوق المقاعد.",
    summaryEn: "A serene modern French ceiling composition: clean rectangular coffered panels highlighted by light and shadow, concealed cove glow, black track spotlights, and brass opal pendants.",
    keyPointsAr: [
      "سقف أساسي بلون كريمي هادئ (Cream / Warm White) خالٍ من التعقيد الزخرفي.",
      "بانوهات مستطيلة بإطارات رقيقة تمنح الهوية المعمارية الفرنسية عبر تفاعل الظل والنور.",
      "ثريات Globe Pendants متراصة بانتظام فوق طاولات الصالة لأجواء حميمية.",
      "مسارات إضاءة سوداء (Black Track Lighting) بسبوتات قابلة للتوجيه نحو الكرواسون والبار.",
      "إضاءة خفية (Hidden Cove Light) تعلو جدار الشعار والقوس الخلفي.",
      "التكوين النهائي: Cream Ceiling → Rectangular Panels → Warm Cove Light → Black Tracks → Globe Pendants."
    ],
    keyPointsEn: [
      "Base ceiling plane in refined Cream / Warm White devoid of excessive historic molding.",
      "Geometric rectangular panels with delicate trims revealing depth through light and shadow.",
      "Evenly spaced Opal and Brass Globe Pendants suspended at human-scale height above tables.",
      "Matte Black architectural track lighting with precision adjustable heads illuminating displays.",
      "Concealed cove illumination crowning the signature brand arch at the cafe terminus.",
      "Harmonious sequence: Cream Plane → Rectangular Panels → Warm Cove → Black Tracks → Opal Pendants."
    ],
    specs: [
      { labelAr: "لون السقف", labelEn: "Ceiling Paint", valueAr: "Ultra-Matte Warm Cream Plaster Paint", valueEn: "Ultra-Matte Warm Cream Plaster Paint" },
      { labelAr: "البانوهات المعمارية", labelEn: "Molding Panels", valueAr: "Minimalist Gypsum Rectangular Frames (35mm Profile)", valueEn: "Minimalist Gypsum Rectangular Frames (35mm Profile)" },
      { labelAr: "إضاءة الكوف", labelEn: "Cove Architecture", valueAr: "Seamless Warm 2700K Architectural LED Cove Glow", valueEn: "Seamless Warm 2700K Architectural LED Cove Glow" },
      { labelAr: "مسارات الإضاءة", labelEn: "Track System", valueAr: "Recessed Magnetic Slim Black Track Rails", valueEn: "Recessed Magnetic Slim Black Track Rails" }
    ],
    architecturalInsightAr: "الامتناع عن الزخارف الجصية الثقيلة واعتماد الظلال الناعمة للبانوهات يحافظ على ارتفاع السقف البصري ويوفر هدوءاً فخماً يخدم التجربة.",
    architecturalInsightEn: "Foregoing heavy traditional cornices in favor of crisp shadow gaps sustains perceived vertical height and provides an architectural canopy of quiet poise.",
    images: [
      {
        id: "ch15-img1",
        path: "/assets/ch15/img_0.jpeg",
        captionAr: "تصميم السقف المعماري بالبانوهات المستطيلة والثريات الكروية ومسارات الإضاءة",
        captionEn: "Ceiling architectural rendering showing rectangular coffering, opal globes, and track lighting",
        hero: true
      }
    ]
  }
];

export const VIV_BRAND_INFO = {
  name: "VIV CROISSANTS",
  subtitle: "Design & Interior Concept",
  subtitleAr: "مفهوم التصميم المعماري والديكور الداخلي",
  locationType: "Modern French Brasserie & Artisanal Viennoiserie",
  openingFilm: {
    videoSrc: "/assets/viv-opening-film.mp4",
    posterSrc: "/assets/ch04/img_0.jpeg",
    titleAr: "الفيلم الافتتاحي — الرحلة المعمارية لـ VIV",
    titleEn: "Opening Film — The Architectural Journey of VIV",
    descriptionAr: "تجربة بصرية سينمائية تستعرض ولادة المفهوم المعماري، فلسفة المساحات، والأناقة الباريسية الدافئة لكافيه VIV.",
    descriptionEn: "A cinematic visual preview exploring the architectural genesis, spatial philosophy, and warm Parisian atmosphere of VIV."
  },
  designPrinciples: [
    {
      titleAr: "الفخامة الهادئة (Quiet Luxury)",
      titleEn: "Quiet Luxury & Restraint",
      descAr: "خامات أصيلة راقية بدون بهرجة أو زخارف زائدة، حيث تتحدث التفاصيل بجودة تنفيذها.",
      descEn: "Authentic noble materials without ostentation, allowing craftsmanship and proportion to speak."
    },
    {
      titleAr: "الكرواسون هو البطل (The Product as Hero)",
      titleEn: "The Product as Hero",
      descAr: "كل خط معماري وتوزيع ضوئي مصمم ليقود نظر الضيف مباشرة إلى فترينا المخبوزات الذهبية.",
      descEn: "Every sightline, lighting angle, and counter geometry is engineered to elevate the golden bakery vitrine."
    },
    {
      titleAr: "التدفق الباريسي المعاصر (French Brasserie Flow)",
      titleEn: "Modern French Brasserie Flow",
      descAr: "دمج سحر المقاهي الباريسية التاريخية مع سرعة وكفاءة التشغيل الحديث في بيئة مريحة.",
      descEn: "Merging historic Parisian cafe charm with modern high-velocity hospitality operations."
    },
    {
      titleAr: "التناغم المادي المتكامل (Material Harmony)",
      titleEn: "Material Symbiosis",
      descAr: "توازن مدروس بين دفء خشب الجوز، سحر البرجندي، نعومة الرخام، ولمسات النحاس المصقول.",
      descEn: "Calculated synergy between warm American walnut, signature burgundy, honed marble, and brushed brass."
    }
  ]
};
