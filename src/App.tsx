import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { OpeningVideoHero } from './components/OpeningVideoHero';
import { ChapterSection } from './components/ChapterSection';
import { PresentationMode } from './components/PresentationMode';
import { LightboxModal } from './components/LightboxModal';
import { Footer } from './components/Footer';
import { CHAPTERS_DATA, type ChapterImage } from './data/chaptersData';

export function App() {
  const [currentView, setCurrentView] = useState<'website' | 'presentation'>('website');
  const [lang, setLang] = useState<'ar' | 'en'>('ar');
  const [activeChapterId, setActiveChapterId] = useState<number>(1);

  // Lightbox State
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImages, setLightboxImages] = useState<ChapterImage[]>([]);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [lightboxTitleAr, setLightboxTitleAr] = useState('');
  const [lightboxTitleEn, setLightboxTitleEn] = useState('');

  // Update HTML document direction and lang attribute
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }, [lang]);

  // ScrollSpy for Active Chapter
  useEffect(() => {
    if (currentView !== 'website') return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 250;
      for (const chapter of CHAPTERS_DATA) {
        const el = document.getElementById(`chapter-${chapter.id}`);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveChapterId(chapter.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentView]);

  const handleLangToggle = () => {
    setLang((prev) => (prev === 'ar' ? 'en' : 'ar'));
  };

  const handleImageClick = (
    images: ChapterImage[],
    index: number,
    titleAr: string,
    titleEn: string
  ) => {
    setLightboxImages(images);
    setLightboxIndex(index);
    setLightboxTitleAr(titleAr);
    setLightboxTitleEn(titleEn);
    setLightboxOpen(true);
  };

  const handleLightboxNext = () => {
    setLightboxIndex((prev) => (prev < lightboxImages.length - 1 ? prev + 1 : 0));
  };

  const handleLightboxPrev = () => {
    setLightboxIndex((prev) => (prev > 0 ? prev - 1 : lightboxImages.length - 1));
  };

  const handleChapterSelect = (id: number) => {
    if (currentView === 'presentation') {
      setCurrentView('website');
      setTimeout(() => {
        const el = document.getElementById(`chapter-${id}`);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById(`chapter-${id}`);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExploreClick = () => {
    const el = document.getElementById('chapter-1');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#120406] text-[#F9F6F0] selection:bg-[#D8B26E] selection:text-[#230308] font-sans antialiased overflow-x-hidden">
      {/* Top Navbar */}
      <Navbar
        currentView={currentView}
        onViewChange={setCurrentView}
        lang={lang}
        onLangToggle={handleLangToggle}
        activeChapterId={activeChapterId}
        onChapterSelect={handleChapterSelect}
      />

      {/* RENDER VIEW: PRESENTATION DECK (DELIVERABLE A) VS LONG-FORM WEBSITE (DELIVERABLE B) */}
      {currentView === 'presentation' ? (
        <PresentationMode
          lang={lang}
          onImageClick={handleImageClick}
          onExit={() => setCurrentView('website')}
        />
      ) : (
        <main className="relative">
          {/* OPENING SEQUENCE: HERO + VISIBLE REAL VIDEO PLAYER */}
          <OpeningVideoHero lang={lang} onExploreClick={handleExploreClick} />

          {/* ALL 15 DESIGN CHAPTERS IN INTENDED SEQUENTIAL ORDER */}
          <div className="relative z-10">
            {CHAPTERS_DATA.map((chapter) => (
              <ChapterSection
                key={chapter.id}
                chapter={chapter}
                lang={lang}
                onImageClick={handleImageClick}
              />
            ))}
          </div>

          {/* FOOTER & ARCHITECTURAL DIRECTORY */}
          <Footer lang={lang} onChapterClick={handleChapterSelect} />
        </main>
      )}

      {/* FULLSCREEN LIGHTBOX MODAL */}
      <LightboxModal
        isOpen={lightboxOpen}
        images={lightboxImages}
        currentIndex={lightboxIndex}
        chapterTitleAr={lightboxTitleAr}
        chapterTitleEn={lightboxTitleEn}
        lang={lang}
        onClose={() => setLightboxOpen(false)}
        onNext={handleLightboxNext}
        onPrev={handleLightboxPrev}
      />
    </div>
  );
}

export default App;
