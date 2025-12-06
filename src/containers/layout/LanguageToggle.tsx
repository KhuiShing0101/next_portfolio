'use client';
import { useLanguage } from '@/lib/hooks/use-language';
import { fadeIn } from '@/styles/animations';
import { motion } from 'framer-motion';

const LanguageToggle = () => {
  const { language, toggle } = useLanguage();

  return (
    <motion.div
      variants={fadeIn(0.5)}
      initial="hidden"
      animate="show"
      className="fixed top-4 right-20 md:top-6 md:right-24 z-50"
    >
      <button
        onClick={toggle}
        className="glass-strong p-3 rounded-lg hover:bg-accent-light transition-all duration-200 flex items-center gap-2 font-mono text-sm font-semibold text-accent dark:text-white hover:text-accent focus:outline-none"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
          />
        </svg>
        <span className="uppercase">{language === 'en' ? 'EN' : 'JA'}</span>
      </button>
    </motion.div>
  );
};

export default LanguageToggle;
