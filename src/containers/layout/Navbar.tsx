'use client';
import { navbarSection } from '@/lib/content/navbar';

import { Button } from '@/components';

import { fadeIn, slideIn } from '@/styles/animations';

import { motion } from 'framer-motion';

const Navbar = () => {
  const { cta } = navbarSection;

  return (
    <motion.header
      variants={fadeIn(0.5)}
      initial="hidden"
      animate="show"
      id="navbar"
      className="sticky top-0 inset-x-0 z-50 flex items-center justify-end px-8 py-4 duration-500 md:px-6 xl:px-12 backdrop-blur-lg bg-bg/80 shadow-sm"
    >
      {cta && (
        <div className="flex items-center gap-3 md:gap-5">
          <Button
            type="link"
            href={cta.url}
            sameTab={cta?.sameTab}
            variants={slideIn({
              direction: 'down',
            })}
            initial="hidden"
            animate="show"
          >
            {cta.title}
          </Button>
          <Button
            type="link"
            href={cta.url1}
            sameTab={cta?.sameTab}
            variants={slideIn({
              direction: 'down',
            })}
            initial="hidden"
            animate="show"
          >
            {cta.title1}
          </Button>
        </div>
      )}
    </motion.header>
  );
};


export default Navbar;
