import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function FlyingGuideBird() {
  const { scrollYProgress } = useScroll();
  const topPos = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], ['14vh', '32vh', '52vh', '68vh', '78vh']);
  const leftPos = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], ['10%', '75%', '14%', '80%', '46%']);
  const rotateAngle = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], [12, -18, 15, -12, 0]);

  return (
    <motion.div
      style={{ top: topPos, left: leftPos, rotate: rotateAngle }}
      className="flying-butterfly fixed z-40 pointer-events-none flex items-center justify-center"
      aria-hidden="true"
    >
      <img
        src="/assets/saurabh-aayushi/butterfly.png"
        alt=""
        className="w-full h-full object-contain"
      />
    </motion.div>
  );
}