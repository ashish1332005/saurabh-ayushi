import React from 'react';
import { motion } from 'framer-motion';

export default function PackingWeatherFooter() {
  return (
    <div className="w-full flex flex-col items-center justify-center pt-8 pb-16 px-4 max-w-lg mx-auto text-center">
      
      {/* 1. Packing Checklist Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full flex flex-col items-center gap-1 mb-6"
      >
        <h2 className="font-script-royal text-3xl sm:text-4xl md:text-5xl text-[#5c131a] tracking-wide mb-2 italic">
          Don't forget to pack
        </h2>

        <div className="flex flex-col items-center gap-1.5 font-serif-royal text-xl sm:text-2xl text-[#4a121a] font-normal tracking-wide">
          <span>Sunglasses</span>
          <span>Sunscreen</span>
          <span>Party Shoes</span>
          <span className="text-base sm:text-lg text-[#5c131a] max-w-sm mt-1 leading-relaxed">
            A fully charged phone to capture<br />memories &amp; post fun updates
          </span>
        </div>
      </motion.div>

      {/* 2. Expected Weather Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
        className="w-full flex flex-col items-center gap-1 mb-8"
      >
        <h3 className="font-serif-royal text-2xl sm:text-3xl text-[#5c131a] font-normal tracking-wide mb-1">
          Expected Weather
        </h3>

        <div className="flex flex-col items-center gap-0.5 font-serif-royal text-lg sm:text-xl text-[#4a121a]">
          <span>Highs of 32–33°C</span>
          <span>Lows of 20–21°C</span>
        </div>
      </motion.div>

      {/* 3. Family Celebration Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        className="w-full flex flex-col items-center gap-1"
      >
        <p className="font-script-royal text-3xl sm:text-4xl text-[#5c131a] italic tracking-wide">
          Let's glam up to celebrate
        </p>

        <h4 className="font-serif-royal text-xl sm:text-2xl md:text-3xl font-normal text-[#5c131a] tracking-[0.14em] uppercase my-1">
          SONI &amp; BOOLCHANDANI
        </h4>

        <span className="font-script-royal text-3xl sm:text-4xl text-[#5c131a] italic">
          Family
        </span>
      </motion.div>

    </div>
  );
}
