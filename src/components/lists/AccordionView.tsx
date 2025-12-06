'use client';
import { useState, memo } from 'react';
import { ExperienceType } from '@/lib/types';
import { getId } from '@/lib/utils/helper';
import { parseExperienceTasks } from '@/lib/utils/parseExperienceTasks';
import { useTranslation } from '@/lib/hooks/use-translation';
import { Link, ListItem } from '@/components';
import { motion, AnimatePresence } from 'framer-motion';

type Props = {
  experiences: ExperienceType[];
};

type AccordionItemProps = {
  exp: ExperienceType;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
  language: string;
  t: any;
};

const AccordionItem = memo(({ exp, index, isOpen, onToggle, language, t }: AccordionItemProps) => {
  const { role, role_ja, company, companyUrl, projectUrl, projectname, projectname_ja, started, started_ja, upto, upto_ja, duration, duration_ja, tasks, tasks_ja } = exp;

  // Use Japanese version if available and language is Japanese
  const displayRole = language === 'ja' && role_ja ? role_ja : role;
  const displayProjectname = language === 'ja' && projectname_ja ? projectname_ja : projectname;
  const displayStarted = language === 'ja' && started_ja ? started_ja : started;
  const displayUpto = language === 'ja' && upto_ja ? upto_ja : upto;
  const displayDuration = language === 'ja' && duration_ja ? duration_ja : duration;
  const displayTasks = language === 'ja' && tasks_ja ? tasks_ja : tasks;

  const parsedTasks = parseExperienceTasks(displayTasks);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="glass-strong rounded-2xl overflow-hidden border border-dark-3/20"
    >
      {/* Accordion Header */}
      <button
        onClick={onToggle}
        className="w-full p-5 md:p-6 flex items-center justify-between hover:bg-accent-light/10 transition-colors duration-200 text-left"
      >
        <div className="flex-1 space-y-2">
          <div className="flex items-center gap-3 flex-wrap">
            <h3 className="text-lg md:text-xl font-bold capitalize text-dark-1">
              {displayRole}
            </h3>
            <span className="text-sm md:text-base text-accent font-semibold">
              @ {company}
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <span className="font-mono text-xs capitalize text-text bg-accent-light px-2.5 py-1 rounded-lg">
              {`${displayStarted} - ${displayUpto}`}
            </span>
            {displayDuration && (
              <span className="font-mono text-xs capitalize text-blue-700 bg-blue-100 px-2.5 py-1 rounded-lg">
                {displayDuration}
              </span>
            )}
          </div>
        </div>

        {/* Chevron Icon */}
        <motion.svg
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="w-6 h-6 text-accent flex-shrink-0 ml-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </motion.svg>
      </button>

      {/* Accordion Content */}
      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0, y: -10 }}
            animate={{
              height: 'auto',
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.4,
                ease: [0.4, 0, 0.2, 1]
              }
            }}
            exit={{
              height: 0,
              opacity: 0,
              y: -10,
              transition: {
                height: { duration: 3, ease: [0.4, 0, 0.2, 1] },
                opacity: { duration: 2.5, ease: "easeOut" },
                y: { duration: 3, ease: [0.4, 0, 0.2, 1] }
              }
            }}
            className="overflow-hidden"
          >
            <div className="px-5 md:px-6 pb-5 md:pb-6 space-y-4 border-t border-dark-3/20">
              {/* Company and Project Links */}
              <div className="pt-4 space-y-3">
                <div>
                  <Link
                    href={companyUrl}
                    target="_blank"
                    className="text-accent hover:gradient-text font-semibold text-sm md:text-base inline-flex items-center gap-2 transition-all"
                  >
                    @{company}
                    <svg className="w-3 h-3 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </Link>
                </div>

                {projectUrl && displayProjectname && (
                  <div>
                    <Link
                      href={projectUrl}
                      target="_blank"
                      className="text-text hover:text-accent font-medium text-xs md:text-sm inline-flex items-center gap-2 transition-all"
                    >
                      <svg className="w-3 h-3 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      {displayProjectname}
                    </Link>
                  </div>
                )}
              </div>

              {/* Responsibilities */}
              {parsedTasks.responsibilities.length > 0 && (
                <div className="space-y-3">
                  <h4 className="text-sm md:text-base font-semibold text-accent uppercase tracking-wide">{t.experience.responsibilities}</h4>
                  <ul className="space-y-2">
                    {parsedTasks.responsibilities.map((task) => (
                      <ListItem key={getId()} className="text-sm md:text-base leading-relaxed">{task}</ListItem>
                    ))}
                  </ul>
                </div>
              )}

              {/* Technologies */}
              {parsedTasks.technologies && (
                <div className="space-y-3 pt-4 border-t border-dark-3/20">
                  <h4 className="text-sm md:text-base font-semibold text-accent uppercase tracking-wide">{t.experience.technologies}</h4>
                  <div className="flex flex-wrap gap-2">
                    {parsedTasks.technologies.split(',').map((tech) => (
                      <span key={getId()} className="px-3 py-1.5 text-xs md:text-sm font-medium bg-accent-light text-accent rounded-lg">
                        {tech.trim()}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Team & Collaboration */}
              {parsedTasks.teamInfo && (
                <div className="space-y-2 pt-4 border-t border-dark-3/20">
                  <h4 className="text-sm md:text-base font-semibold text-accent uppercase tracking-wide flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    {t.experience.teamCollaboration}
                  </h4>
                  <p className="text-sm md:text-base leading-relaxed text-text">{parsedTasks.teamInfo}</p>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
});

AccordionItem.displayName = 'AccordionItem';

const AccordionView = ({ experiences }: Props) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { t, language } = useTranslation();

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {experiences.map((exp, index) => (
        <AccordionItem
          key={`${exp.company}-${exp.started}-${index}`}
          exp={exp}
          index={index}
          isOpen={openIndex === index}
          onToggle={() => toggleAccordion(index)}
          language={language}
          t={t}
        />
      ))}
    </div>
  );
};

export default AccordionView;
