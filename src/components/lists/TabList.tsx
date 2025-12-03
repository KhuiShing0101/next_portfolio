'use client';
import useWindowWidth from '@/lib/hooks/use-window-width';
import { ExperienceType } from '@/lib/types';
import { getBreakpointsWidth, getId } from '@/lib/utils/helper';

import { Link, ListItem } from '@/components';

import { useState } from 'react';

type Props = {
  experiences: ExperienceType[];
};

const TabList = ({ experiences }: Props) => {
  const [activeExperience, setActiveExperience] = useState(0);
  const windowWidth = useWindowWidth();

  const { role, company, companyUrl, started, upto, tasks } =
    experiences[activeExperience];

  const sm = getBreakpointsWidth('sm');

  const sliderStyle =
    windowWidth <= sm
      ? {
          left: `calc(${activeExperience}*120px)`,
        }
      : {
          top: `calc(${activeExperience}*2.5rem)`,
        };

  return (
    <div className="flex flex-col sm:flex-row text-sm md:text-base gap-8 md:gap-12 min-h-[350px]">
      {/* Sidebar */}
      <div className="font-mono text-xs sm:text-sm relative flex justify-start sm:flex-col overflow-scroll sm:overflow-auto sm:min-w-[200px]">
        {experiences.map(({ company }, i) => (
          <button
            key={getId()}
            className={`h-12 min-w-[140px] sm:w-auto sm:px-6 sm:!text-left capitalize rounded-lg sm:rounded-none transition-all duration-300 hover:bg-accent-light hover:text-accent focus:outline-none focus:bg-accent-light focus:text-accent font-medium ${
              i === activeExperience ? 'text-accent bg-accent-light' : 'text-text'
            }`}
            onClick={() => setActiveExperience(i)}
          >
            {company}
          </button>
        ))}
        {/* Slider */}
        <div className="absolute h-0.5 w-full sm:w-0.5 sm:h-full rounded-full bottom-0 sm:inset-0 left-0 bg-dark-3 opacity-30"></div>
        <div
          style={sliderStyle}
          className="absolute h-0.5 w-[140px] sm:w-1 sm:h-12 rounded-full bg-accent bottom-0 left-0 sm:inset-0 transition-all duration-300 ease-in-out shadow-lg shadow-accent/50"
        ></div>
      </div>

      <div key={getId()} className="flex-1 glass-strong p-6 md:p-8 rounded-2xl space-y-6">
        <div className="space-y-2">
          <h3 className="text-xl md:text-2xl font-bold capitalize text-dark-1">
            {role}
          </h3>
          <Link
            href={companyUrl}
            target="_blank"
            className="text-accent hover:gradient-text font-semibold text-base md:text-lg inline-flex items-center gap-2 transition-all"
          >
            @{company}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </Link>
          <p className="font-mono text-xs md:text-sm capitalize text-text bg-accent-light px-3 py-1.5 rounded-lg inline-block">
            {started} - {upto}
          </p>
        </div>

        <ul className="space-y-3">
          {tasks.map((task) => (
            <ListItem key={getId()} className="text-sm md:text-base leading-relaxed">{task}</ListItem>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TabList;
