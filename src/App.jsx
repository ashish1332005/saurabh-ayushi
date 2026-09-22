import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import RoyalGate from './components/RoyalGate';
import AnnouncementSection from './components/AnnouncementSection';
import WardrobeGuide from './components/WardrobeGuide';
import AudioPlayer from './components/AudioPlayer';
import FlyingGuideBird from './components/FlyingGuideBird';

export default function App() {
  const [isGateOpened, setIsGateOpened] = useState(false);
  const [startMusic, setStartMusic] = useState(false);

  const handleGateOpened = () => {
    setIsGateOpened(true);
    setStartMusic(true);
    // Instant reset scroll to top of main content
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <div className="relative w-full min-h-screen bg-[#f7eedf] text-[#3a080d] select-none font-serif-royal">
      
      {/* Background Audio Player */}
      <AudioPlayer autoPlayTrigger={startMusic} />

      {/* Flying Guide Bird (Scroll-driven animated dove) */}
      {isGateOpened && <FlyingGuideBird />}

      <AnimatePresence mode="wait">
        {!isGateOpened ? (
          /* LANDING GATE SCREEN (Active before opening) */
          <motion.section 
            key="hero-gate"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            id="hero-section" 
            className="fixed inset-0 z-50 w-full h-screen flex flex-col items-center justify-between overflow-hidden bg-cover bg-center"
            style={{
              backgroundImage: `url('/assets/saurabh-aayushi/landing-gate-bg.jpg')`
            }}
          >
            <div className="relative z-10 w-full h-full flex flex-col items-center justify-between pt-0 pb-1 sm:pb-3">
              <RoyalGate onGateOpened={handleGateOpened} />
            </div>
          </motion.section>
        ) : (
          /* MAIN INVITATION SITE (Separate unique backgrounds for each section) */
          <motion.div 
            key="main-sections"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-full"
          >
            {/* SECTION 1: ANNOUNCEMENT & SCRATCH CARD (Garden Fountain Background) */}
            <section 
              id="announcement-section" 
              className="relative w-full min-h-screen flex flex-col items-center justify-center py-10 px-4 border-b border-[#d4af37]/30 overflow-hidden bg-cover bg-center"
              style={{
                backgroundImage: `url('/assets/saurabh-aayushi/garden-clean-bg.jpg')`
              }}
            >
              <div className="announcement-sky-content relative z-10 w-full max-w-xl mx-auto flex flex-col items-center justify-start">
                <AnnouncementSection />
              </div>
            </section>

            {/* SECTION 2: WARDROBE GUIDE 3D CAROUSEL (Dedicated Wardrobe Background) */}
            <section 
              id="wardrobe-section" 
              className="relative w-full min-h-screen flex flex-col items-center justify-center py-12 px-3 sm:px-4 border-b border-[#d4af37]/30 overflow-hidden bg-cover bg-center"
              style={{
                backgroundImage: `url('/assets/saurabh-aayushi/wardrobe-planner-bg.png')`
              }}
            >
              <div className="relative z-10 w-full max-w-2xl mx-auto flex flex-col items-center justify-center">
                <WardrobeGuide />
              </div>
            </section>
{/* SECTION 3: PACKING CHECKLIST, WEATHER & SONI & BOOLCHANDANI FAMILY (Lakeside Terrace Diwan Background) */}
            <footer 
              id="footer-section" 
              className="relative w-full min-h-screen flex flex-col items-center justify-center text-center overflow-hidden bg-cover bg-center"
              style={{
                backgroundImage: `url('/assets/saurabh-aayushi/final-page.png')`
              }}
            >
            </footer>

          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
