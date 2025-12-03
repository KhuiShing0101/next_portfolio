'use client';
import { aboutSection } from '@/lib/content/about';
import { author } from '@/lib/content/portfolio';

import { AuthorImage, ListItem, Wrapper } from '@/components';

import { getSectionAnimation } from '@/styles/animations';

import { useEffect, useState } from 'react';

const About = () => {
  const { title, img, list } = aboutSection;
  // To avoid hydration error
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return domLoaded ? (
    <Wrapper id="about" {...getSectionAnimation}>
      <h2 className="heading-secondary">{title}</h2>
      <main className="flex flex-col items-center gap-16 lg:items-start lg:flex-row">
        <div className="space-y-5 lg:w-3/5 text-base md:text-lg leading-relaxed">
          <p className="glass-strong p-6 rounded-2xl border-l-4 border-accent">
            I'm a seasoned web developer specializing in web development and deployment, with over
            I'm a web developer with a strong focus on web development and deployment, backed by over <span className="gradient-text font-semibold">5 years of professional experience</span>.
          I specialize in driving efficiency, reliability, and continuous improvement within software
            development processes
          </p>
          <p className="glass p-5 rounded-2xl bg-gradient-to-br from-accent-light to-transparent">
            My main focus these days is <span className="gradient-text font-semibold">learning new technologies</span> to growth my career.
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
