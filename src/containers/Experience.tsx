'use client';
import AccordionView from '@/components/lists/AccordionView';
import { useTranslation } from '@/lib/hooks/use-translation';

import { experienceSection } from '../lib/content/experience';
import { getSectionAnimation } from '../styles/animations';
import { motion } from 'framer-motion';

const Experience = () => {
  const { t } = useTranslation();

  return (
    <motion.section
      id="experience"
      className="max-w-6xl py-20 md:py-32 mx-auto px-4 md:px-6"
      {...getSectionAnimation}
    >
      <h2 className="heading-secondary mb-12">{t.experience.title}</h2>
      <AccordionView experiences={experienceSection.experiences} />
    </motion.section>
  );
};

export default Experience;
