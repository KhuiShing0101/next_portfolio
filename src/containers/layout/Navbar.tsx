'use client';
import { navbarSection } from '@/lib/content/navbar';
import { useTranslation } from '@/lib/hooks/use-translation';

import { Button } from '@/components';

import { fadeIn, slideIn } from '@/styles/animations';

import { motion } from 'framer-motion';

const Navbar = () => {
  const { cta } = navbarSection;
  const { t } = useTranslation();

  return (
    <motion.div
      variants={fadeIn(0.5)}
      initial="hidden"
      animate="show"
      id="navbar"
      className="fixed top-4 left-4 md:top-6 md:left-8 z-50"
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
            {t.nav.resume}
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
            {t.nav.rirekisho}
          </Button>
        </div>
      )}
    </motion.div>
  );
};


export default Navbar;
