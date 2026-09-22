import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ScratchCard from './ScratchCard';

export default function AnnouncementSection() {
  const [timeLeft, setTimeLeft] = useState({
    days: 77,
    hours: 18,
    minutes: 42,
    seconds: 15
  });

  useEffect(() => {
    // 23 November 2026 (10:00 AM)
    const targetDate = new Date('2026-11-23T10:00:00');

    const updateTimer = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / (1000 * 60)) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeLeft({
          days,
          hours,
          minutes,
          seconds
        });
      }
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full flex flex-col items-center justify-center py-6 sm:py-10 px-3 max-w-lg mx-auto text-center">
      
      {/* Saurabh & Aayushi "अ & S" Ornate Monogram */}
      <motion.div 
        initial={{ opacity: 0, y: -20, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-32 h-32 sm:w-40 sm:h-40 mb-3 hover:scale-105 transition-transform flex items-center justify-center cursor-pointer"
      >
        <img 
          src="/assets/saurabh-aayushi/as-monogram-clean.png" 
          alt="Saurabh & Aayushi Monogram" 
          className="w-full h-full object-contain filter drop-shadow-[0_8px_16px_rgba(0,0,0,0.25)]"
        />
      </motion.div>

      {/* Intro text */}
      <motion.p 
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
        className="font-serif-royal text-sm sm:text-base text-[#5c131a] italic tracking-wide max-w-xs sm:max-w-md mx-auto mb-2 filter drop-shadow-xs"
      >
        We hope this guide helps you select the perfect attire for our big day.
      </motion.p>

      {/* Couple Names */}
      <motion.h1 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
        className="font-serif-royal text-3xl sm:text-4xl md:text-5xl font-normal text-[#5c131a] tracking-wide my-1 filter drop-shadow-xs"
      >
        Saurabh <span className="italic font-normal text-[#8c5a1e]">&amp;</span> Aayushi
      </motion.h1>

      {/* Interactive Scratch Card: Mark Your Calender */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="w-full my-3"
      >
        <ScratchCard />
      </motion.div>

      {/* Countdown Timer Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        className="w-full max-w-[320px] sm:max-w-[380px] text-center mt-3"
      >
        {/* Compact Ribbon Badge for Title */}
        <div className="inline-flex items-center justify-center gap-1.5 mb-2 bg-[#fffdfa]/95 border border-[#d4af37]/70 rounded-full px-3.5 py-1 shadow-xs">
          <span className="text-[10px] text-[#b8860b]">★</span>
          <span className="font-serif-royal text-[10px] sm:text-xs uppercase tracking-[0.15em] text-[#4a0d13] font-bold">
            Counting Down To The Celebration
          </span>
          <span className="text-[10px] text-[#b8860b]">★</span>
        </div>

        {/* 4 Compact Countdown Unit Boxes */}
        <div className="grid grid-cols-4 gap-2">
          <div className="bg-[#fffdfa]/95 border border-[#d4af37]/70 rounded-lg p-2 text-center shadow-xs">
            <span className="font-serif-royal text-xl sm:text-2xl font-extrabold text-[#5c131a] block leading-none mb-0.5">
              {timeLeft.days}
            </span>
            <span className="font-serif-royal text-[9px] uppercase tracking-wider text-[#8c5a1e] font-extrabold block">
              Days
            </span>
          </div>

          <div className="bg-[#fffdfa]/95 border border-[#d4af37]/70 rounded-lg p-2 text-center shadow-xs">
            <span className="font-serif-royal text-xl sm:text-2xl font-extrabold text-[#5c131a] block leading-none mb-0.5">
              {String(timeLeft.hours).padStart(2, '0')}
            </span>
            <span className="font-serif-royal text-[9px] uppercase tracking-wider text-[#8c5a1e] font-extrabold block">
              Hours
            </span>
          </div>

          <div className="bg-[#fffdfa]/95 border border-[#d4af37]/70 rounded-lg p-2 text-center shadow-xs">
            <span className="font-serif-royal text-xl sm:text-2xl font-extrabold text-[#5c131a] block leading-none mb-0.5">
              {String(timeLeft.minutes).padStart(2, '0')}
            </span>
            <span className="font-serif-royal text-[9px] uppercase tracking-wider text-[#8c5a1e] font-extrabold block">
              Mins
            </span>
          </div>

          <div className="bg-[#fffdfa]/95 border border-[#d4af37]/70 rounded-lg p-2 text-center shadow-xs">
            <span className="font-serif-royal text-xl sm:text-2xl font-extrabold text-[#5c131a] block leading-none mb-0.5">
              {String(timeLeft.seconds).padStart(2, '0')}
            </span>
            <span className="font-serif-royal text-[9px] uppercase tracking-wider text-[#8c5a1e] font-extrabold block">
              Secs
            </span>
          </div>
        </div>
      </motion.div>

    </div>
  );
}
