'use client';
import { ProjectType } from '@/lib/types';
import { blurImageURL } from '@/lib/utils/config';

import { Icon } from '@iconify/react';
import { motion, MotionProps } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const ProjectCard = ({
  name,
  url,
  repo,
  year,
  img,
  tags,
  ...rest
}: ProjectType & MotionProps) => {
  // To avoid hydration failed error
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return domLoaded ? (
    <motion.div {...rest} className="w-full max-w-[350px]">
      <button
        onClick={(e) => {
          // Don't run this if the clicked target is an anchor element
          if ((e.target as HTMLElement).closest('a')) return;
          window.open(url);
        }}
        className="block w-full overflow-hidden transition-all duration-300 rounded-2xl shadow-xl group glass hover:glass-strong hover:shadow-2xl hover:-translate-y-2 card-glow"
      >
        <div className="overflow-hidden h-[200px] relative">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
          <Image
            src={img}
            alt={name}
            width={300}
            height={300}
            placeholder="blur"
            blurDataURL={blurImageURL}
            className="object-cover w-full h-full transition-all duration-500 group-hover:scale-110 group-focus:scale-110"
          />
        </div>
        <div className="p-5 py-4 space-y-2">
          <div className="flex items-center justify-between">
            <p className="font-mono text-xs capitalize text-accent font-semibold">{tags.join(' | ')}</p>
            <div className="flex items-center space-x-2">
              <a
                href={repo}
                className={repo && repo != '' ? 'block duration-200 hover:text-accent hover:scale-110 transition-transform' : 'block duration-200 hover:text-accent invisible'}
                target="_blank"
              >
                <Icon icon="tabler:brand-github" width={20} height={20} />
              </a>
              <a
                href={url}
                className="block duration-200 hover:text-accent hover:scale-110 transition-transform"
                target="_blank"
              >
                <Icon icon="ci:external-link" width={22} height={22} />
              </a>
            </div>
          </div>
          <h4 className="flex justify-between font-semibold capitalize duration-300 group-hover:text-accent text-lg">
            <span>{name}</span>
            <span className="mr-1 text-text text-sm font-medium">{year}</span>
          </h4>
        </div>
      </button>
    </motion.div>
  ) : (
    <></>
  );
};

export default ProjectCard;
