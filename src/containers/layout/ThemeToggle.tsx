'use client';
import { DarkModeButton } from '@/components';
import { fadeIn } from '@/styles/animations';
import { motion } from 'framer-motion';

const ThemeToggle = () => {
  return (
    <motion.div
      variants={fadeIn(0.5)}
      initial="hidden"
      animate="show"
      className="fixed top-4 right-4 md:top-6 md:right-8 z-50"
    >
      <DarkModeButton className="glass-strong p-3 hover:bg-accent-light transition-all" />
    </motion.div>
  );
};

export default ThemeToggle;
