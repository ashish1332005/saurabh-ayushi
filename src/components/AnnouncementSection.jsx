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
      
      {/* Saurabh & Aayushi "à¤… & S" Ornate Monogram */}
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
      {/* Supplied invitation typography graphic replaces the plain intro and names text. */}
      <motion.div
        initial={{ opacity: 0, y: -10, scale: 0.96 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
        className="w-full max-w-[340px] sm:max-w-[470px] my-1"
      >
        <img
          src="/assets/saurabh-aayushi/media_1790058783764.png"
          alt="We hope this guide helps you select the perfect attire for our big day. Saurabh and Aayushi"
          className="w-full h-auto object-contain"
        />
      </motion.div>

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
          <span className="text-[10px] text-[#b8860b]">â˜…</span>
          <span className="font-serif-royal text-[10px] sm:text-xs uppercase tracking-[0.15em] text-[#4a0d13] font-bold">
            Counting Down To The Celebration
          </span>
          <span className="text-[10px] text-[#b8860b]">â˜…</span>
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
