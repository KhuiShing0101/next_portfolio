'use client';
import { aboutSection } from '@/lib/content/about';
import { author } from '@/lib/content/portfolio';

import { AuthorImage, Link, ListItem, Wrapper } from '@/components';

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
        <div className="space-y-4 lg:w-3/5">
          <p>
            I'm a seasoned web developer specializing in web development and deployment, with over 3 years of professional experience. 
            My role involves continuously exploring innovative methods to optimize and enhance software development processes, ensuring maximum efficiency and reliability. 
            This proactive approach not only highlights my expertise but also promotes a culture of continuous learning and improvement within the tech community.
          </p>
          <p>
            Fast-forward to today, and I’ve had the privilege of working at a
            software Company -{' '}
            <Link
              href="https://visibleone.com/"
              target="_blank"
              className="text-accent"
            >
              Visibleone
            </Link>
            .
          </p>
          <p>
            In addition to my professional roles, I actively contribute thought 
            leadership through articles on Web Technology topics at {' '}
            <Link
              href="https://www.kalaung.org/"
              target="_blank"
              className="text-accent"
            >
              HKShing Tech
            </Link>. 
            This initiative not only highlights my expertise but also contributes 
            to creating a culture of continuous learning within the tech community.
          </p>
          <p>
            My main focus these days is learning new technologies to growth my career.
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
