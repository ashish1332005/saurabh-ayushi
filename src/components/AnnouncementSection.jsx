import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import ScratchCard from './ScratchCard';

export default function AnnouncementSection() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const updateTimer = () => {
      const difference = new Date('2026-11-23T10:00:00').getTime() - Date.now();
      if (difference <= 0) return;
      setTimeLeft({
        days: Math.floor(difference / 86400000),
        hours: Math.floor((difference / 3600000) % 24),
        minutes: Math.floor((difference / 60000) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      });
    };
    updateTimer();
    const interval = window.setInterval(updateTimer, 1000);
    return () => window.clearInterval(interval);
  }, []);

  const units = [[timeLeft.days, 'Days'], [String(timeLeft.hours).padStart(2, '0'), 'Hours'], [String(timeLeft.minutes).padStart(2, '0'), 'Mins'], [String(timeLeft.seconds).padStart(2, '0'), 'Secs']];

  return (
    <div className="w-full flex flex-col items-center justify-center py-6 sm:py-10 px-3 max-w-lg mx-auto text-center">
      <motion.div initial={{ opacity: 0, y: -20, scale: 0.9 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.8 }} className="w-32 h-32 sm:w-40 sm:h-40 mb-3 flex items-center justify-center">
        <img src="/assets/saurabh-aayushi/as-monogram-clean.png" alt="Saurabh & Aayushi Monogram" className="w-full h-full object-contain filter drop-shadow-[0_8px_16px_rgba(0,0,0,0.25)]" />
      </motion.div>

      <motion.div initial={{ opacity: 0, y: -10, scale: 0.96 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.8, delay: 0.1 }} className="w-full max-w-[340px] sm:max-w-[470px] my-1">
        <img src="/assets/saurabh-aayushi/media_1790058783764.png" alt="Saurabh and Aayushi" className="w-full h-auto object-contain" />
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.8, delay: 0.2 }} className="w-full my-3">
        <ScratchCard />
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.25 }} className="w-full max-w-[330px] mt-2 text-center">
        <div className="inline-flex items-center justify-center mb-2 rounded-full px-4 py-1 bg-[#fffdfa]/90 border border-[#d4af37]/75 shadow-sm">
          <span className="font-serif-royal text-[10px] sm:text-xs uppercase tracking-[0.16em] text-[#5c131a] font-bold">Counting down to the celebration</span>
        </div>
        <div className="grid grid-cols-4 gap-2">
          {units.map(([value, label]) => (
            <div key={label} className="rounded-lg bg-[#fffdfa]/90 border border-[#d4af37]/70 py-2 shadow-sm">
              <span className="font-serif-royal text-xl sm:text-2xl font-bold leading-none text-[#5c131a] block">{value}</span>
              <span className="font-serif-royal text-[9px] uppercase tracking-wider text-[#8c5a1e] font-bold">{label}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}