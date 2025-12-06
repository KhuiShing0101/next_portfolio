'use client';
import { aboutSection } from '@/lib/content/about';
import { author } from '@/lib/content/portfolio';
import { useTranslation } from '@/lib/hooks/use-translation';

import { AuthorImage, ListItem, Wrapper } from '@/components';

import { getSectionAnimation } from '@/styles/animations';

import { useEffect, useState } from 'react';

const About = () => {
  const { img, list } = aboutSection;
  const { t } = useTranslation();
  // To avoid hydration error
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return domLoaded ? (
    <Wrapper id="about" {...getSectionAnimation}>
      <h2 className="heading-secondary">{t.about.title}</h2>
      <main className="flex flex-col items-center gap-16 lg:items-start lg:flex-row">
        <div className="space-y-5 lg:w-3/5 text-base md:text-lg leading-relaxed">
          <p className="glass-strong p-6 rounded-2xl border-l-4 border-accent">
            {t.about.intro} <span className="gradient-text font-semibold">{t.about.experience}</span> {t.about.specialization}
          </p>
          <p className="glass p-5 rounded-2xl bg-gradient-to-br from-accent-light to-transparent">
            {t.about.focus} <span className="gradient-text font-semibold">{t.about.learning}</span> {t.about.growth}
          </p>

        </div>
        <AuthorImage src={img} alt={author.name} />
      </main>

      {list && (
              <>
                <p className="mt-10">{list.title}</p>
                <ul className="flex flex-wrap mt-5" style={{ gap: '4rem' }}>
                  {list.items.map((category) => (
                    <li key={category.title} className="w-1/7 mb-10">
                      <strong className="mb-2 block">{category.title}</strong>
                      <ul className="mt-4 space-y-1 text-sm">
                        {category.items.map((item) => (
                          <li key={item}>
                            <ListItem>{item}</ListItem>
                          </li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ul>
              </>
            )}

    </Wrapper>
  ) : (
    <></>
  );
};

export default About;
