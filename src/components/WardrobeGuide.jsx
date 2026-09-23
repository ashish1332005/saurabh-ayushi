import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';

export default function WardrobeGuide() {
  const wardrobeCards = [
    {
      id: 1,
      title: 'Funtakshari',
      date: '23RD NOVEMBER 2026',
      dressCode: 'Celebrate Funtakshari in vibrant festive style with colourful lehengas, Indo-western looks, and stylish kurta-jacket sets.',
      image: '/assets/saurabh-aayushi/wardrobe-1.jpg'
    },
    {
      id: 2,
      title: 'Nanihaal Ki Mithaas',
      date: '24TH NOVEMBER 2026',
      dressCode: 'Celebrate Indian tradition in vibrant Bandhej, Gotta Patti, and elegant ethnic wear.',
      image: '/assets/saurabh-aayushi/wardrobe-2.jpg'
    },
    {
      id: 3,
      title: 'Scarlet Soirée Sangeet',
      date: '24TH NOVEMBER 2026',
      dressCode: 'A black-tie affair blending classic formalwear with elegant Indo-western style.',
      image: '/assets/saurabh-aayushi/wardrobe-3.jpg'
    },
    {
      id: 4,
      title: 'A Tale of Rose & Revelry Carnival',
      date: '24TH NOVEMBER 2026',
      dressCode: 'Bridgerton meets Carnival — romantic pastels, florals, flowy silhouettes & charming details.',
      image: '/assets/saurabh-aayushi/wardrobe-4.jpg'
    },
    {
      id: 5,
      title: 'Prem Abhigyan Varmala',
      date: '25TH NOVEMBER 2026',
      dressCode: 'Embrace evening glamour with elegant Indian attire, subtle shimmer & statement silhouettes.',
      image: '/assets/saurabh-aayushi/wardrobe-5.jpg'
    },
    
  {
    id: 6,
    title: 'Vivha Sanskar',
    date: '25TH NOVEMBER 2026',
    dressCode: 'Silk Serene - embrace the sacred Pheras in timeless silks, graceful Indian silhouettes & soft festive hues.',
    image: '/assets/saurabh-aayushi/6.jpg'
  }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);

  // Auto-scroll every 3.5 seconds
  useEffect(() => {
    if (!isAutoScrolling) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % wardrobeCards.length);
    }, 3800);

    return () => clearInterval(timer);
  }, [isAutoScrolling, wardrobeCards.length]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % wardrobeCards.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + wardrobeCards.length) % wardrobeCards.length
    );
  };

  // Determine card position relative to active card
  const getCardStyle = (index) => {
    const total = wardrobeCards.length;
    let diff = (index - currentIndex + total) % total;

    if (diff > total / 2) {
      diff -= total;
    }

    // Center active card
    if (diff === 0) {
      return {
        zIndex: 30,
        transform: 'translateX(0%) scale(1.04) rotate(0deg)',
        opacity: 1,
        filter: 'brightness(1) drop-shadow(0 15px 30px rgba(0,0,0,0.22))'
      };
    }

    // Left card
    if (diff === -1) {
      return {
        zIndex: 20,
        transform: 'translateX(-48%) scale(0.85) rotate(-4deg)',
        opacity: 0.85,
        filter: 'brightness(0.92) drop-shadow(0 10px 20px rgba(0,0,0,0.15))'
      };
    }

    // Right card
    if (diff === 1) {
      return {
        zIndex: 20,
        transform: 'translateX(48%) scale(0.85) rotate(4deg)',
        opacity: 0.85,
        filter: 'brightness(0.92) drop-shadow(0 10px 20px rgba(0,0,0,0.15))'
      };
    }

    // Hidden cards
    return {
      zIndex: 10,
      transform:
        diff < 0
          ? 'translateX(-85%) scale(0.7)'
          : 'translateX(85%) scale(0.7)',
      opacity: 0,
      pointerEvents: 'none'
    };
  };

  return (
    <div className="w-full flex flex-col items-center justify-center wardrobe-sky-layout py-3 px-3 sm:px-4 max-w-2xl mx-auto my-auto">

      {/* Title Graphic (Wardrobe Planner - Let's help you pack for the wedding) */}
      <motion.div
        initial={{ opacity: 0, y: -25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="wardrobe-sky-title max-w-[260px] sm:max-w-[340px] mb-2 text-center"
      >
        <img
          src="/assets/saurabh-aayushi/wardrobe-planner-title.png"
          alt="Wardrobe Planner - Let's help you pack for the wedding"
          className="w-full h-auto object-contain filter drop-shadow-sm mx-auto"
        />
      </motion.div>

      {/* 3D Wardrobe Cards Carousel */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{
          duration: 0.9,
          delay: 0.2,
          ease: 'easeOut'
        }}
        className="relative w-full max-w-[235px] sm:max-w-[300px] aspect-[9/16] flex items-center justify-center my-1 overflow-visible"
      >

        {wardrobeCards.map((card, idx) => {
          const style = getCardStyle(idx);

          return (
            <div
              key={card.id}
              onClick={() => {
                setCurrentIndex(idx);
                setIsAutoScrolling(false);
              }}
              style={style}
              className="absolute inset-0 w-full h-full cursor-pointer transition-all duration-700 ease-out flex items-center justify-center rounded-2xl overflow-hidden border-2 border-[#d4af37]/60 shadow-xl bg-[#fffdfa]"
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          );
        })}

        {/* Previous Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            handlePrev();
            setIsAutoScrolling(false);
          }}
          className="absolute -left-5 sm:-left-10 z-40 p-2 sm:p-2.5 rounded-full bg-[#5c131a] text-[#fff8ea] border border-[#d4af37] shadow-lg hover:scale-110 active:scale-95 transition-transform cursor-pointer"
          title="Previous Card"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* Next Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleNext();
            setIsAutoScrolling(false);
          }}
          className="absolute -right-5 sm:-right-10 z-40 p-2 sm:p-2.5 rounded-full bg-[#5c131a] text-[#fff8ea] border border-[#d4af37] shadow-lg hover:scale-110 active:scale-95 transition-transform cursor-pointer"
          title="Next Card"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

      </motion.div>

      {/* Pagination dots */}
      <div className="flex items-center gap-1.5 my-2">
        {wardrobeCards.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setCurrentIndex(i);
              setIsAutoScrolling(false);
            }}
            className={`h-2 rounded-full transition-all duration-300 ${
              currentIndex === i
                ? 'w-6 bg-[#8c1823]'
                : 'w-2 bg-[#d4af37]/60 hover:bg-[#d4af37]'
            }`}
          />
        ))}
      </div>

      {/* Scroll Next Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{
          duration: 0.8,
          delay: 0.3,
          ease: 'easeOut'
        }}
        className="mt-3 flex flex-col items-center gap-2 z-30"
      >
        <button
          onClick={handleNext}
          className="px-7 py-3 rounded-full bg-[#8c1823] hover:bg-[#6b1018] text-[#fff8ea] font-serif-royal text-xs sm:text-sm font-semibold tracking-wider uppercase border border-[#d4af37]/60 shadow-md hover:scale-105 active:scale-95 transition-all cursor-pointer"
        >
          SCROLL THE NEXT
        </button>

        {/* Auto-play Toggle */}
        <div className="flex items-center gap-2 text-xs font-serif-royal text-[#5c131a]/80">
          <button
            onClick={() => setIsAutoScrolling((prev) => !prev)}
            className="flex items-center gap-1 hover:text-[#8c1823] transition-colors cursor-pointer"
          >
            {isAutoScrolling ? (
              <Pause className="w-3.5 h-3.5 text-[#d4af37]" />
            ) : (
              <Play className="w-3.5 h-3.5 text-[#d4af37]" />
            )}

            <span>
              {isAutoScrolling
                ? 'Auto-Scrolling Active'
                : 'Auto-Scroll Paused (Click to resume)'}
            </span>
          </button>
        </div>
      </motion.div>

    </div>
  );
}
